import controls from '../../controls';
import ui from '../../ui';
import { createElement, insertAfter, replaceElement, toggleHidden } from '../../utils/elements';
import { on, triggerEvent } from '../../utils/events';
import i18n from '../../utils/i18n';
import is from '../../utils/is';
import { clamp } from '../../utils/numbers';

class Editor {
  constructor(player) {
    // Keep reference to parent
    this.player = player;
    this.config = player.config.editor;
    this.loaded = false;
    this.shown = false;
    this.seeking = false;
    this.timeline = {
      lowerSeek: 10,
      upperSeek: 90,
      upperPlaying: 60,
      scrollSpeed: 1.5,
    };
    this.videoContainerWidth = 123;
    this.videoContainerHeight = 67.5;
    this.zoom = {
      scale: 1,
    };
    this.duration = 0;
    this.numOfTimestamps = 5;
    this.imageBuffer = 0.05;
    this.elements = {
      container: {},
    };

    this.load();
  }

  // Determine if Editor is enabled
  get enabled() {
    const { config, player } = this;
    return config.enabled && player.isHTML5 && player.isVideo;
  }

  // Get active state
  get active() {
    if (!this.enabled) {
      return false;
    }

    return this.shown && is.element(this.player.elements.container);
  }

  get previewThumbnailsReady() {
    const { previewThumbnails, duration } = this.player;
    /* Added check for preview thumbnails size as, it is be returned loaded even though there are no thumbnails */
    return previewThumbnails && previewThumbnails.loaded && duration > 0;
  }

  get visibleWindow() {
    const { container } = this.elements;
    const { duration } = this.player;
    const containerRect = container.getBoundingClientRect();
    const timelineRect = container.timeline.getBoundingClientRect();
    const zoom = parseFloat(container.timeline.style.width);
    const offset = parseFloat(container.timeline.style.left);
    const start = Math.abs(offset / zoom) * duration;
    const end = start + (containerRect.width / timelineRect.width) * duration;

    return { start, end };
  }

  load() {
    on.call(this.player, document, () => {
      this.onChange();
    });

    // Player listeners
    this.listeners();

    // Update the UI
    this.update();
  }

  showEditor() {
    if (!is.element(this.elements.container) && is.element(this.player.elements.container)) {
      this.createEditor();
    }

    toggleHidden(this.elements.container, false);
  }

  hideEditor() {
    toggleHidden(this.elements.container, true);
  }

  async createEditor() {
    const { container } = this.player.elements;
    this.createContainer(container);
    this.createControls();
    this.createTimeline();
    this.createTimeStamps();
    this.createVideoTimeline();
    this.createSeekHandle();
    this.player.listeners.editor();
  }

  createContainer(container) {
    const { config } = this;

    // If no container has been specified append to the video container
    if (is.nullOrUndefined(config.target)) {
      this.createNewContainer(container);
    } else {
      this.appendTargetContainer();
    }

    // We need an element to setup
    if (is.nullOrUndefined(container) || !is.element(container)) {
      this.debug.error('Editor Creation failed: no suitable element passed');
      return;
    }

    // Add style hook
    ui.addStyleHook.call(this.player, this.elements.container);
  }

  // Create and append to video Container
  createNewContainer(container) {
    this.elements.container = createElement('div', {
      class: this.player.config.classNames.editor.container,
    });

    insertAfter(this.elements.container, container);
  }

  // Append editor to specified Container
  appendTargetContainer() {
    const { config, elements, player } = this;
    elements.container = config.target;

    // String selector passed
    if (is.string(elements.container)) {
      elements.container = document.querySelectorAll(elements.container);
    }

    // jQuery, NodeList or Array passed, use first element
    if (
      (window.jQuery && elements.container instanceof jQuery) ||
      is.nodeList(elements.container) ||
      is.array(elements.container)
    ) {
      // eslint-disable-next-line
      this.elements.container = elements.container[0];
    }

    // Clone the original element so if the element gets destroyed we can return it to its original state
    const clone = this.elements.container.cloneNode(true);
    this.elements.original = clone;

    // set editor container class
    this.elements.container.classList.add(player.config.classNames.editor.container);
  }

  createControls() {
    const { container } = this.elements;
    const { maxZoom } = this.config;

    // Create controls container
    container.controls = createElement('div', {
      id: `plyr__editor__controls`,
      class: this.player.config.classNames.editor.controls,
    });

    container.appendChild(container.controls);

    // Create time container
    container.controls.timeContainer = createElement('div', {
      class: `plyr__controls__item ${this.player.config.classNames.editor.timeContainer}`,
    });

    container.controls.appendChild(container.controls.timeContainer);

    // Create time container - Seperate time container needed from video as each item needs a unqiue key
    container.controls.timeContainer.time = controls.createTime.call(this.player, 'editorCurrentTime', {
      class: `plyr__controls__item ${this.player.config.classNames.editor.time}`,
    });

    container.controls.timeContainer.appendChild(container.controls.timeContainer.time);

    // Create zoom slider container
    container.controls.zoomContainer = createElement('div', {
      class: `plyr__controls__item ${this.player.config.classNames.editor.zoomContainer}`,
    });

    container.controls.appendChild(container.controls.zoomContainer);

    // Create minus icon
    container.controls.zoomContainer.zoomOut = controls.createButton.call(
      this.player,
      'zoom-out',
      'plyr__controls__item',
    );
    container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoomOut);

    // Create zoom slider
    container.controls.zoomContainer.zoom = controls.createRange.call(this.player, 'zoom', {
      id: `plyr__editor__zoom`,
      step: 0.1,
      min: 1,
      max: maxZoom,
      value: 1,
      'aria-valuemin': 1,
      'aria-valuemax': maxZoom,
      'aria-valuenow': 1,
    });

    container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoom);

    // Create plus icon
    container.controls.zoomContainer.zoomIn = controls.createButton.call(
      this.player,
      'zoom-in',
      'plyr__controls__item',
    );
    container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoomIn);
  }

  createTimeline() {
    const { container } = this.elements;
    this.elements.container.timeline = createElement('div', {
      class: this.player.config.classNames.editor.timeline,
    });

    container.appendChild(this.elements.container.timeline);

    this.elements.container.timeline.style.width = '100%';
    this.elements.container.timeline.style.left = '0%';
  }

  createTimeStamps() {
    const step = this.player.duration / this.numOfTimestamps;
    const { timeline } = this.elements.container;
    const timeStamps = [];

    timeline.timestampsContainer = createElement('div', {
      class: this.player.config.classNames.editor.timeStampsContainer,
    });

    timeline.appendChild(timeline.timestampsContainer);

    for (let i = 0; i < this.numOfTimestamps; i += 1) {
      const timeStamp = createElement(
        'span',
        { class: this.player.config.classNames.editor.timeStamp },
        controls.formatTime.call(this.player, Math.round(step * i)),
      );
      // Append the element to the timeline
      timeline.timestampsContainer.appendChild(timeStamp);
      // Add the element to the list of elements
      timeStamps.push(timeStamp);
    }

    // Add list of timestamps to elements object
    timeline.timestampsContainer.timeStamps = timeStamps;
  }

  updateTimestamps() {
    const { timeline } = this.elements.container;
    const { duration } = this.player;

    if (this.player.duration === 0 || this.duration === duration || !is.element(timeline.timestampsContainer)) {
      return;
    }

    // Store the current player duration, to avoid setting the editor timestamps if the video length has not changed
    this.duration = duration;

    const step = duration / this.numOfTimestamps;

    timeline.timestampsContainer.timeStamps.forEach((timestamp, i) => {
      // eslint-disable-next-line no-param-reassign
      timestamp.innerText = controls.formatTime.call(this.player, Math.round(step * i));
    });
  }

  createVideoTimeline() {
    const { timeline } = this.elements.container;

    // Create video timeline wrapper
    timeline.videoContainerParent = createElement('div', {
      class: this.player.config.classNames.editor.videoContainerParent,
    });

    timeline.appendChild(timeline.videoContainerParent);

    // Create video timeline
    timeline.videoContainerParent.videoContainer = createElement('div', {
      class: this.player.config.classNames.editor.videoContainer,
    });

    timeline.videoContainerParent.appendChild(timeline.videoContainerParent.videoContainer);

    this.setVideoTimelimeContent();
  }

  setVideoTimelimeContent() {
    const { previewThumbnails } = this.player;
    const { timeline } = this.elements.container;
    // Total number of images needed to fill the timeline width
    const clientRect = timeline.getBoundingClientRect();
    const { videoContainer } = timeline.videoContainerParent;
    const imageCount = Math.ceil(clientRect.width / this.videoContainerWidth);
    let time = 0;

    if (is.nullOrUndefined(videoContainer.previewThumbs)) {
      videoContainer.previewThumbs = [];
    }

    // Enable editor mode in preview thumbnails
    if (this.previewThumbnailsReady) {
      previewThumbnails.editor = true;
    }

    // Append images to video timeline
    for (let i = 0; i < imageCount; i += 1) {
      let previewThumb;

      if (is.nullOrUndefined(videoContainer.previewThumbs[i])) {
        // Create new image wrapper
        previewThumb = createElement('span', {
          class: this.player.config.classNames.editor.previewThumb,
        });
        // Append new image wrapper to the timeline
        videoContainer.appendChild(previewThumb);
        videoContainer.previewThumbs.push(previewThumb);
      } else {
        // Retrieve the existing container
        previewThumb = videoContainer.previewThumbs[i];
      }

      // If preview thumbnails is enabled append an image to the previewThumb
      // Use an image margin to handle seeking and loading of images
      if (
        this.previewThumbnailsReady &&
        time >= this.visibleWindow.start - this.visibleWindow.start * this.imageBuffer &&
        time <= this.visibleWindow.end + this.visibleWindow.end * this.imageBuffer
      ) {
        // Append the image to the container
        previewThumbnails.showImageAtCurrentTime(time, previewThumb);
      }
      time += this.player.duration / (clientRect.width / this.videoContainerWidth);
    }

    if (this.previewThumbnailsReady) {
      // Disable editor mode in preview thumbnails
      previewThumbnails.editor = false;
    }

    // Once all images are loaded set the width of the parent video container to display them
    videoContainer.style.width = `${imageCount * this.videoContainerWidth}px`;
  }

  createSeekHandle() {
    const { timeline } = this.elements.container;
    const duration = controls.formatTime.call(this.player, this.player.duration);

    // Create seek Container
    timeline.seekHandle = createElement('div', {
      class: this.player.config.classNames.editor.seekHandle,
      role: 'slider',
      'aria-valuemin': 0,
      'aria-valuemax': duration,
      'aria-label': i18n.get('seek', this.player.config),
    });

    // Create seek head
    timeline.seekHandle.head = createElement('div', {
      class: this.player.config.classNames.editor.seekHandleHead,
    });

    // Create seek line
    timeline.seekHandle.line = createElement('div', {
      class: this.player.config.classNames.editor.seekHandleLine,
    });

    timeline.appendChild(timeline.seekHandle);
    timeline.seekHandle.appendChild(timeline.seekHandle.head);
    timeline.seekHandle.appendChild(timeline.seekHandle.line);

    this.setSeekPosition();
  }

  setZoomByEvent(event) {
    const { maxZoom } = this.config;

    if (!(event.type === 'wheel' || event.type === 'input' || event.type === 'click' || event.type === 'keydown')) {
      return;
    }

    // Calculate zoom Delta for mousewheel
    if (event.type === 'wheel') {
      const delta = clamp(event.deltaY * -1, -1, 1);
      this.zoom.scale += delta * 0.1 * this.zoom.scale;

      // Restrict bounds of zoom for wheel
      if ((this.zoom.scale === maxZoom && delta < 0) || (this.zoom.scale === 1 && delta > 0)) {
        return;
      }

      // Calculate zoom level based on zoom slider
    } else if (event.type === 'input') {
      const { value } = event.target;
      this.zoom.scale = value;
    } else if (event.type === 'click' || event.type === 'keydown') {
      if (event.target === this.elements.container.controls.zoomContainer.zoomIn || event.keyCode === 187) {
        this.zoom.scale += 1;
      } else {
        this.zoom.scale -= 1;
      }
    }

    this.setZoom();
  }

  setZoom(scale = this.zoom.scale, centerTimeline = false) {
    if (!this.active) return;

    const { maxZoom } = this.config;
    const { container } = this.elements;
    const { timeline } = this.elements.container;
    const containerRect = container.getBoundingClientRect();
    const clientRect = timeline.getBoundingClientRect();
    const xPos = timeline.seekHandle.getBoundingClientRect().left;
    const percentage = (100 / clientRect.width) * (xPos - clientRect.left);

    // Limit zoom to be between 1 and max times zoom
    this.zoom.scale = clamp(scale, 1, maxZoom);
    // Apply zoom scale
    timeline.style.width = `${this.zoom.scale * 100}%`;
    // Position the element based on the mouse position
    if (centerTimeline) {
      const updatedClientRect = timeline.getBoundingClientRect();
      const updatedXPos = timeline.seekHandle.getBoundingClientRect().left;
      const timelinePos = (100 / updatedClientRect.width) * (updatedXPos - updatedClientRect.left) * this.zoom.scale;
      const centerOffset = ((containerRect.width / updatedClientRect.width) * 100 * this.zoom.scale) / 2;
      timeline.style.left = `${clamp(-(timelinePos - centerOffset), (this.zoom.scale * 100 - 100) * -1, 0)}%`;
    } else {
      timeline.style.left = `${(-(this.zoom.scale * 100 - 100) * percentage) / 100}%`;
    }

    // Update slider
    if (is.element(this.elements.container.controls.zoomContainer)) {
      controls.setRange.call(this.player, this.elements.container.controls.zoomContainer.zoom, this.zoom.scale);
    }

    // Update timeline images
    this.setVideoTimelimeContent();
  }

  setZoomWindow(lowerBound, upperBound) {
    if (!this.active || !lowerBound || !upperBound) return;

    const { maxZoom } = this.config;
    const { timeline } = this.elements.container;
    const scale = this.player.duration / (upperBound - lowerBound);

    // Limit zoom to be between 1 and max times zoom
    this.zoom.scale = clamp(scale, 1, maxZoom);
    // Apply zoom scale
    timeline.style.width = `${this.zoom.scale * 100}%`;
    // Position the element based on the lower and upper bound values
    const percentage = (lowerBound / this.player.duration) * (this.zoom.scale * 100);
    timeline.style.left = `${clamp(-percentage, (this.zoom.scale * 100 - 100) * -1, 0)}%`;

    // Update slider
    if (is.element(this.elements.container.controls.zoomContainer)) {
      controls.setRange.call(this.player, this.elements.container.controls.zoomContainer.zoom, this.zoom.scale);
    }

    // Update timeline images
    this.setVideoTimelimeContent();
  }

  setSeeking(event) {
    const { classList } = event.target;
    const { leftThumb, rightThumb } = this.player.config.classNames.trim;

    // Disable seeking event if selecting the trimming tool or a marker on the timeline
    if (
      ((event.type === 'mousedown' || event.type === 'touchstart') && classList.contains(leftThumb)) ||
      classList.contains(rightThumb)
    ) {
      return;
    }

    // Only act on left mouse button (0), or touch device (event.button does not exist or is false)
    if (!(is.nullOrUndefined(event.button) || event.button === false || event.button === 0)) {
      return;
    }

    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.seeking = true;
    } else if (event.type === 'mouseup' || event.type === 'touchend') {
      this.seeking = false;
    }

    this.triggerSeekEvent(event);
  }

  triggerSeekEvent(event) {
    if (this.seeking) {
      if (this.previewThumbnailsReady) {
        this.player.previewThumbnails.startScrubbing(event);
      }
      triggerEvent.call(this.player, this.player.media, 'seeking');
      this.setSeekTime(event);
    } else if (this.previewThumbnailsReady) {
      this.player.previewThumbnails.endScrubbing(event);
    }
  }

  setSeekPosition() {
    if (!this.active || this.seeking) {
      return;
    }
    const { timeline } = this.elements.container;
    const percentage = clamp((100 / this.player.duration) * parseFloat(this.player.currentTime), 0, 100);

    timeline.seekHandle.style.left = `${percentage}%`;
    this.setTimelineOffset();

    const currentTime = controls.formatTime.call(this.player, this.player.currentTime);
    const duration = controls.formatTime.call(this.player, this.player.duration);
    const format = i18n.get('seekLabel', this.player.config);

    // Update aria values
    timeline.seekHandle.setAttribute('aria-valuenow', currentTime);
    timeline.seekHandle.setAttribute(
      'aria-valuetext',
      format.replace('{currentTime}', currentTime).replace('{duration}', duration),
    );
  }

  setSeekTime(event) {
    if (!this.active || !this.seeking) {
      return;
    }

    const { type, touches, pageX } = event;

    if (['mousedown', 'touchstart', 'mousemove', 'touchmove'].includes(type)) {
      const { timeline } = this.elements.container;
      const { previewThumbnails } = this.player;
      const clientRect = timeline.getBoundingClientRect();
      const xPos = type === 'touchmove' ? touches[0].pageX : pageX;
      const percentage = clamp((100 / clientRect.width) * (xPos - clientRect.left), 0, 100);

      // Set the editor seek position
      timeline.seekHandle.style.left = `${percentage}%`;

      // Update the current video time
      this.player.currentTime = this.player.duration * (percentage / 100);

      // Set video seek
      controls.setRange.call(this.player, this.player.elements.inputs.seek, percentage);

      // Set the video seek position
      triggerEvent.call(this.player, this.player.media, 'seeked');

      // Show the seek thumbnail
      if (this.previewThumbnailsReady) {
        const seekTime = this.player.duration * (percentage / 100);
        previewThumbnails.showImageAtCurrentTime(seekTime);
      }
    }
  }

  // If the seek handle is near the end of the visible timeline window, shift the timeline
  setTimelineOffset() {
    const { playing } = this.player;
    const { container } = this.elements;
    // Values defining the speed of scrolling and at what points triggering the offset
    const { lowerSeek, upperSeek, upperPlaying, scrollSpeed } = this.timeline;
    // Retrieve the container positions for the container, timeline and seek handle
    const clientRect = container.getBoundingClientRect();
    const timelineRect = container.timeline.getBoundingClientRect();
    const seekPos = container.timeline.seekHandle.getBoundingClientRect();
    // Current position in the editor container
    const zoom = parseFloat(container.timeline.style.width);
    let offset = parseFloat(container.timeline.style.left);
    const seekHandlePos = parseFloat(container.timeline.seekHandle.style.left);
    // Retrieve the hover position in the editor container, else retrieve the seek value
    const percentage = (100 / clientRect.width) * (seekPos.left - clientRect.left);
    // If playing set lower upper bound to when we shift the timeline
    const upperBound = this.seeking ? upperSeek : upperPlaying;

    // Calculate the timeline offset position
    if (percentage > upperBound && zoom - offset > 100) {
      // If the seek handle is visibe move by scroll percentage else move into view
      if (percentage <= 100) {
        offset = Math.max(offset - (percentage - upperBound) / scrollSpeed, (zoom - 100) * -1);
      } else {
        offset = Math.max(offset - (percentage - upperBound), (zoom - 100) * -1);
      }
    } else if (percentage < lowerSeek) {
      // If the seek handle is visibe move by scroll percentage else move into view
      if (percentage >= 0) {
        offset = Math.min(offset - ((lowerSeek - percentage) / scrollSpeed) * -1, 0);
      } else {
        offset = Math.min(offset - (lowerSeek - percentage) * -1, 0);
      }
    }

    if (offset === parseFloat(container.timeline.style.left)) {
      return;
    }

    // Update the preview thumbnails
    this.setVideoTimelimeContent();

    // Apply the timeline seek offset
    container.timeline.style.left = `${offset}%`;

    // Only adjust the seek position when playing or seeking as we don't want to adjust if the current time is updated
    if (!(playing || this.seeking)) {
      return;
    }

    // Retrieve the position of the seek handle after the timeline shift
    const seekPosUpdated = container.timeline.seekHandle.getBoundingClientRect().left;
    const seekPercentage = clamp(seekHandlePos + (100 / timelineRect.width) * (seekPos.left - seekPosUpdated), 0, 100);

    container.timeline.seekHandle.style.left = `${seekPercentage}%`;

    // Show the corresponding preview thumbnail for the updated seek position
    if (this.seeking && this.previewThumbnailsReady) {
      const seekTime = this.player.duration * (seekPercentage / 100);
      this.player.previewThumbnails.showImageAtCurrentTime(seekTime);
    }
  }

  listeners() {
    // If the duration changes after loading the editor, the corresponding timestamps need to be updated
    // If the duration of the video or previewthumbnails has loaded, update
    this.player.on('loadeddata loadedmetadata', () => {
      if (this.player.media.duration > 0) this.loaded = true;
      if (this.loaded && this.shown) {
        this.showEditor();
        this.updateTimestamps();
        this.setVideoTimelimeContent();
        triggerEvent.call(this.player, this.player.media, 'editorloaded');
      }
    });

    this.player.on('previewthumbnailsloaded', () => {
      if (this.loaded && this.shown) {
        this.setVideoTimelimeContent();
      }
    });
  }

  // On toggle of the editor, trigger event
  onChange() {
    if (!this.enabled) {
      return;
    }

    // Trigger an event
    triggerEvent.call(this.player, this.player.media, this.shown ? 'entereditor' : 'exiteditor', false);
  }

  // Update UI
  update() {
    if (this.enabled) {
      this.player.debug.log(`trim enabled`);
    } else {
      this.player.debug.log('Trimming is not supported');
    }
  }

  // Load config after changing of source
  loadConfig(config, duration) {
    if (!config) return;

    if (config.editor.shown) {
      this.enter();
    }

    if (config.editor.zoom.scale > 1) {
      this.player.on('editorloaded', () => {
        this.setZoom((config.editor.zoom.scale / duration) * this.player.duration, true);
      });
    }
  }

  destroy() {
    // Remove the elements with listeners on
    if (this.loaded) {
      if (is.element(this.elements.original)) {
        replaceElement(this.elements.original, this.elements.container);
      }

      // Remove reference to buttons
      this.player.elements.buttons.zoomOut = null;
      this.player.elements.buttons.zoomIn = null;

      this.loaded = false;
    }
  }

  // Enter Editor
  enter() {
    if (!this.enabled) {
      return;
    }
    this.shown = true;
    this.showEditor();

    this.onChange();
  }

  // Exit Editor
  exit() {
    if (!this.enabled || !this.shown) {
      return;
    }
    this.shown = false;
    this.hideEditor();

    this.onChange();
  }

  // Toggle state
  toggle() {
    if (!this.active) {
      this.enter();
    } else {
      this.exit();
    }
  }
}

export default Editor;
