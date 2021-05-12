// ==========================================================================
// Plyr Trim control
// ==========================================================================

import controls from '../../controls';
import { createElement, toggleClass, toggleHidden } from '../../utils/elements';
import { on, triggerEvent } from '../../utils/events';
import i18n from '../../utils/i18n';
import is from '../../utils/is';
import { clamp } from '../../utils/numbers';
import { extend } from '../../utils/objects';
import { matchToVideoTime, videoToMatchTime } from '../../utils/time';

class Trim {
  constructor(player) {
    // Keep reference to parent
    this.player = player;
    this.config = player.config.trim;
    this.loaded = false;
    this.trimming = false;
    this.editing = false;
    this.startTime = 0;
    this.endTime = 0;
    this.timeUpdateFunction = this.timeUpdate.bind(this);
    this.elements = {
      container: {},
    };

    this.load();
  }

  // Determine if trim is enabled
  get enabled() {
    const { config } = this;
    return config.enabled && this.player.isHTML5 && this.player.isVideo;
  }

  // Get active state
  get active() {
    if (!this.enabled) {
      return false;
    }

    return this.trimming && is.element(this.elements.container);
  }

  // Get the current trim time
  // If trimming a media fragment the start can be different from the media's start time so use the media time
  get trimTime() {
    const { mediaFragment } = this.player;
    const startTime = mediaFragment.getMediaTime(this.startTime);
    const endTime = mediaFragment.getMediaTime(this.endTime);

    return { startTime, endTime };
  }

  get trimLength() {
    const { maxTrimLength } = this.config;
    // Default is 100% or the maximum trimming length
    return maxTrimLength > 0 ? clamp((100 / this.player.duration) * parseFloat(maxTrimLength), 0, 100) : 100;
  }

  // Calculate the lower Limit of the trim region
  get lowerBound() {
    const { lowerBound } = this.config;

    return lowerBound > 0 ? (lowerBound / this.player.duration) * 100 : 0;
  }

  // Calculate the upper Limit of the trim region
  get upperBound() {
    const { upperBound } = this.config;

    return upperBound > 0 ? (upperBound / this.player.duration) * 100 : 100;
  }

  get previewThumbnailsReady() {
    const { previewThumbnails, duration } = this.player;
    /* Added check for preview thumbnails size as, it is be returned loaded even though there are no thumbnails */
    return previewThumbnails && previewThumbnails.loaded && duration > 0;
  }

  load() {
    // Handle event (incase user presses escape etc)
    on.call(this.player, document, () => {
      this.onChange();
    });

    // Update the UI
    this.update();

    // Setup player listeners
    this.listeners();
  }

  // Store the trim start time in seconds (limit)
  setStartTime(percentage) {
    const { maxTrimLength } = this.config;
    const startTime = this.player.duration * (parseFloat(percentage) / 100);
    this.startTime = maxTrimLength >= 0 ? Math.max(startTime, this.endTime - this.config.maxTrimLength) : startTime;
  }

  // Store the trim end time in seconds
  setEndTime(percentage) {
    const { maxTrimLength } = this.config;
    const endTime = this.player.duration * (parseFloat(percentage) / 100);
    this.endTime = maxTrimLength >= 0 ? Math.min(endTime, this.startTime + this.config.maxTrimLength) : endTime;
  }

  getMaxTrimLength(startPercentage, endPercentage) {
    const startTime = this.player.duration * (parseFloat(startPercentage) / 100);
    const endTime = this.player.duration * (parseFloat(endPercentage) / 100);

    if (this.config.maxTrimLength >= 0 && endTime - startTime >= this.config.maxTrimLength) {
      return true;
    }
    return false;
  }

  // Show the trim toolbar on the timeline
  showTrimTool() {
    if (this.player.editor && !this.player.editor.active) {
      this.player.editor.enter();
    }
    if (is.empty(this.elements.container.bar)) {
      this.createTrimTool();
    }
    if (this.config.zoom && this.config.zoom.enabled) {
      this.setTimelineZoom();
    }
    toggleHidden(this.elements.container, false);
  }

  // Hide the trim toolbar from the timeline
  hideTrimTool() {
    if (this.config.closeEditor) {
      this.player.editor.exit();
    }

    toggleHidden(this.elements.container, true);
  }

  // Add trim toolbar to the timeline
  createTrimTool() {
    const { container } = this.player.elements;
    if (is.element(container) && !is.element(this.elements.container) && this.loaded) {
      this.createTrimContainer();
      this.createTrimBar();
      this.createTrimBarThumbs();
      this.createShadedRegions();
      this.createThumbTime();
      triggerEvent.call(this.player, this.player.media, 'trimloaded');
    }
  }

  // Add trim container to the timeline
  createTrimContainer() {
    this.elements.container = createElement('div', {
      class: this.player.config.classNames.trim.container,
    });
    this.player.editor.elements.container.timeline.appendChild(this.elements.container);
  }

  // Add trim bar to the timeline
  createTrimBar() {
    // If offsetContainer is set to true, we want to offset the start time of the container
    const offset = this.config.offsetContainer ? this.trimLength / 2 : 0;
    // Set the trim bar from the current seek time percentage to x percent after and limit the end percentage to 100%
    const start = clamp(
      (100 / this.player.duration) * parseFloat(this.player.currentTime) - offset,
      this.lowerBound,
      this.upperBound,
    );
    const end = Math.min(parseFloat(start) + this.trimLength, this.upperBound);

    // Store the start and end video percentages in seconds
    this.setStartTime(start);
    this.setEndTime(end);

    this.elements.container.bar = createElement('span', {
      class: this.player.config.classNames.trim.trimTool,
    });

    const { bar } = this.elements.container;

    bar.style.left = `${start.toString()}%`;
    bar.style.width = `${end - start.toString()}%`;
    this.elements.container.appendChild(bar);

    triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
  }

  // Add trim length thumbs to the timeline
  createTrimBarThumbs() {
    const { bar } = this.elements.container;
    const { trim } = this.player.config.classNames;

    // Create the trim bar thumb elements
    bar.leftThumb = createElement(
      'span',
      extend({
        class: trim.leftThumb,
        role: 'slider',
        'aria-valuemin': 0,
        'aria-valuemax': this.player.duration,
        'aria-valuenow': this.startTime,
        'aria-valuetext': controls.formatTime.call(this.player, this.startTime),
        'aria-label': i18n.get('trimStart', this.player.config),
      }),
    );

    // Create the trim bar thumb elements
    bar.rightThumb = createElement(
      'span',
      extend({
        class: trim.rightThumb,
        role: 'slider',
        'aria-valuemin': 0,
        'aria-valuemax': this.player.duration,
        'aria-valuenow': this.endTime,
        'aria-valuetext': controls.formatTime.call(this.player, this.endTime),
        'aria-label': i18n.get('trimEnd', this.player.config),
      }),
    );

    // Add the thumbs to the bar
    bar.appendChild(bar.leftThumb);
    bar.appendChild(bar.rightThumb);

    // Add listens for trim thumb (handle) selection
    this.player.listeners.bind(bar.leftThumb, 'mousedown touchstart', event => {
      if (bar) {
        this.setEditing(event);
      }
    });

    // Listen for trim thumb (handle) selection
    this.player.listeners.bind(bar.rightThumb, 'mousedown touchstart', event => {
      if (bar) {
        this.setEditing(event);
      }
    });

    // Move trim handles if selected
    this.player.listeners.bind(document.body, 'mousemove touchmove', event => {
      if (this.editing) {
        this.setTrimLength(event);
      }
    });

    // Stop trimming when handle is no longer selected
    this.player.listeners.bind(document.body, 'mouseup touchend', event => {
      if (this.editing) this.setEditing(event);
    });
  }

  // Add shaded out regions to show that this area is not being trimmed
  createShadedRegions() {
    const { container } = this.elements;

    // Create two shaded regions on the timeline (before and after the trimming tool)
    container.shadedRegions = [];
    const shadedRegion = createElement('span', {
      class: this.player.config.classNames.trim.shadedRegion,
    });

    const shadedRegionClone = shadedRegion.cloneNode(true);

    // Store and append the shaded regions to the container
    container.shadedRegions.push(shadedRegion);
    container.shadedRegions.push(shadedRegionClone);
    container.insertBefore(shadedRegion, container.bar);
    container.insertBefore(shadedRegionClone, container.bar.nextSibling);

    this.setShadedRegions();
  }

  setShadedRegions() {
    const { shadedRegions } = this.elements.container;
    const { left, width } = this.elements.container.bar.style;

    // Retrieve the first and second shaded regions (should always be two regions)
    if (shadedRegions.length < 1) {
      return;
    }

    // Set the position of the shaded regions relative to the position of the trimming tool
    shadedRegions[0].style.width = left;
    shadedRegions[1].style.left = `${parseFloat(left) + parseFloat(width)}%`;
    shadedRegions[1].style.width = `${100 - (parseFloat(left) + parseFloat(width))}%`;
  }

  createThumbTime() {
    const { leftThumb, rightThumb } = this.elements.container.bar;
    const { alwaysShowTimestamps } = this.config;
    const { classNames } = this.player.config;

    // Create HTML element, parent+span: time text (e.g., 01:32:00)
    leftThumb.timeContainer = createElement('div', {
      class: classNames.trim.timeContainer,
    });

    rightThumb.timeContainer = createElement('div', {
      class: classNames.trim.timeContainer,
    });

    // Append the time element to the container
    leftThumb.timeContainer.time = createElement('span', {}, controls.formatTime.call(this.player, this.startTime));
    leftThumb.timeContainer.appendChild(leftThumb.timeContainer.time);
    rightThumb.timeContainer.time = createElement('span', {}, controls.formatTime.call(this.player, this.endTime));
    rightThumb.timeContainer.appendChild(rightThumb.timeContainer.time);

    // Append the time container to the bar
    leftThumb.appendChild(leftThumb.timeContainer);
    rightThumb.appendChild(rightThumb.timeContainer);

    // Toggle whether to always show time stamps or just on hover
    toggleClass(leftThumb.timeContainer, classNames.trim.alwaysShowTimestamps, alwaysShowTimestamps);
    toggleClass(rightThumb.timeContainer, classNames.trim.alwaysShowTimestamps, alwaysShowTimestamps);
  }

  setEditing(event) {
    const { bar } = this.elements.container;
    const { leftThumb, rightThumb } = this.player.config.classNames.trim;
    const { type, target } = event;

    if ((type === 'mouseup' || type === 'touchend') && this.editing === leftThumb) {
      this.editing = null;
      this.toggleTimeContainer(bar.leftThumb, false);
      if (this.previewThumbnailsReady) {
        this.player.previewThumbnails.endScrubbing(event);
      }
      triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
    } else if ((type === 'mouseup' || type === 'touchend') && this.editing === rightThumb) {
      this.editing = null;
      this.toggleTimeContainer(bar.rightThumb, false);
      if (this.previewThumbnailsReady) {
        this.player.previewThumbnails.endScrubbing(event);
      }
      triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
    } else if ((type === 'mousedown' || type === 'touchstart') && target.classList.contains(leftThumb)) {
      this.editing = leftThumb;
      this.toggleTimeContainer(bar.leftThumb, true);
      if (this.previewThumbnailsReady) {
        this.player.previewThumbnails.startScrubbing(event, true);
      }
    } else if ((type === 'mousedown' || type === 'touchstart') && target.classList.contains(rightThumb)) {
      this.editing = rightThumb;
      this.toggleTimeContainer(bar.rightThumb, true);
      if (this.previewThumbnailsReady) {
        this.player.previewThumbnails.startScrubbing(event, true);
      }
    }
  }

  setTrimLength(event) {
    if (!this.editing) return;

    // Calculate hover position
    const { timeline } = this.player.editor.elements.container;
    const clientRect = timeline.getBoundingClientRect();
    const xPos = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX;
    const percentage = clamp((100 / clientRect.width) * (xPos - clientRect.left), this.lowerBound, this.upperBound);
    const { leftThumb, rightThumb } = this.player.config.classNames.trim;

    // Update the position of the trim range tool
    if (this.editing === leftThumb) {
      this.setLeftThumbPosition(percentage);
    } else if (this.editing === rightThumb) {
      this.setRightThumbPosition(percentage);
    }

    // Show the seek thumbnail
    if (this.previewThumbnailsReady) {
      const seekTime = this.player.media.duration * (percentage / 100);
      this.player.previewThumbnails.showImageAtCurrentTime(seekTime);
    }

    triggerEvent.call(this.player, this.player.media, 'trimchanging', false, this.trimTime);
  }

  setTrimStart(time = this.player.currentTime) {
    const percentage = clamp((100 / this.player.duration) * parseFloat(time), this.lowerBound, this.upperBound);
    this.setLeftThumbPosition(percentage);

    triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
  }

  setTrimEnd(time = this.player.currentTime) {
    const percentage = clamp((100 / this.player.duration) * parseFloat(time), this.lowerBound, this.upperBound);
    this.setRightThumbPosition(percentage);

    triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
  }

  setLeftThumbPosition(percentage) {
    const { bar } = this.elements.container;
    const { left, width } = bar.style;
    const leftThumbPos = parseFloat(left);
    const rightThumbPos = leftThumbPos + parseFloat(width);
    const rightThumbRelativePos = Math.max(parseFloat(width) - (percentage - leftThumbPos), 0);
    const maxTrimLength = this.getMaxTrimLength(percentage, rightThumbPos);

    // Set the width to be in the position previously unless region is longer than max trim length
    if (!maxTrimLength) bar.style.width = `${rightThumbRelativePos}%`;

    // Store and convert the start percentage to time
    bar.style.left = `${percentage}%`;
    if (maxTrimLength) this.setEndTime(percentage + parseFloat(width));
    this.setStartTime(percentage);
    // Prevent the end time being before the start time
    if (this.startTime > this.endTime) this.setEndTime(percentage);
    // Set the timestamp of the current trim handle position
    this.setThumbTimeStamps();
    this.setThumbAriaData();
    this.setShadedRegions();
  }

  setRightThumbPosition(percentage) {
    const { bar } = this.elements.container;
    const { left, width } = bar.style;
    const leftThumbPos = parseFloat(left);
    const rightThumbPos = leftThumbPos + parseFloat(width);
    const maxTrimLength = this.getMaxTrimLength(leftThumbPos, percentage);

    // Update the width of trim bar (right thumb)
    if (maxTrimLength) {
      bar.style.left = `${leftThumbPos + (percentage - rightThumbPos)}%`;
      this.setStartTime(leftThumbPos + (percentage - rightThumbPos));
    } else {
      // Update the width of trim bar (right thumb)
      bar.style.width = `${Math.max(percentage - leftThumbPos, 0)}%`;
    }

    // Store and convert the end position on the timeline as time
    this.setEndTime(percentage);

    // Prevent the start time being after the end time
    if (this.endTime < this.startTime) {
      bar.style.left = `${percentage}%`;
      this.setStartTime(`${percentage}%`);
    }

    // Set the timestamp of the current trim handle position
    this.setThumbTimeStamps();
    this.setThumbAriaData();
    this.setShadedRegions();
  }

  setThumbTimeStamps() {
    const { bar } = this.elements.container;
    bar.leftThumb.timeContainer.time.innerText = controls.formatTime.call(this.player, this.startTime);
    bar.rightThumb.timeContainer.time.innerText = controls.formatTime.call(this.player, this.endTime);
  }

  setThumbAriaData() {
    const { bar } = this.elements.container;
    // Update the aria-value and text
    bar.leftThumb.setAttribute('aria-valuenow', this.startTime);
    bar.leftThumb.setAttribute('aria-valuetext', controls.formatTime.call(this.player, this.startTime));
    bar.rightThumb.setAttribute('aria-valuenow', this.endTime);
    bar.rightThumb.setAttribute('aria-valuetext', controls.formatTime.call(this.player, this.endTime));
  }

  toggleTimeContainer(element, toggle = false) {
    if (!element.timeContainer) {
      return;
    }

    const className = this.player.config.classNames.trim.timeContainerShown;
    element.timeContainer.classList.toggle(className, toggle);
  }

  setTimelineZoom() {
    const { preRoll, postRoll } = this.config.zoom;
    this.player.editor.setZoomWindow(this.startTime - preRoll, this.endTime + postRoll);
  }

  // Set the seektime to the start of the trim timeline, if the seektime is outside of the region.
  timeUpdate() {
    if (!this.active || !this.trimming || !this.player.playing || this.editing) {
      return;
    }

    const { currentTime } = this.player;
    if (currentTime < this.startTime || currentTime >= this.endTime) {
      this.player.currentTime = this.startTime;

      if (currentTime >= this.endTime) {
        this.player.pause();
      }
    }
  }

  listeners() {
    /* Prevent the trim tool from being added until the player is in a playable state
           If the user has pressed the trim tool before this event has fired, show the tool
        */
    this.player.on('loadeddata loadedmetadata', () => {
      if (this.player.media.duration) this.loaded = true;
      if (this.trimming) this.showTrimTool();
    });

    /* Listen for time changes so we can reset the seek point to within the clip.
           Additionally, use the reference to the binding so we can remove and create a new instance of this listener
           when we change source
        */
    this.player.on('timeupdate', this.timeUpdateFunction);
  }

  // On toggle of trim control, trigger event
  onChange() {
    if (!this.enabled) {
      return;
    }

    // Update toggle button
    const button = this.player.elements.buttons.trim;
    if (is.element(button)) {
      button.pressed = this.active;
    }

    // Trigger an event
    triggerEvent.call(this.player, this.player.media, this.trimming ? 'entertrim' : 'exittrim', false, this.trimTime);
  }

  // Update UI
  update() {
    if (this.enabled) {
      this.player.debug.log(`trim enabled`);
    } else {
      this.player.debug.log('Trimming is not supported');
    }

    // Add styling hook to show button
    toggleClass(this.player.elements.container, this.player.config.classNames.trim.enabled, this.enabled);
  }

  // Load config after changing of source (only do this for sources which have sync points)
  loadConfig(config) {
    if (!config) return;

    if (
      !(this.player.config.syncPoints && this.player.config.syncPoints.length) ||
      !(config.config.syncPoints && config.config.syncPoints.length)
    )
      return;

    if (!config.trim.trimming) return;

    this.enter();

    if (config.config.trim.lowerBound > 0) {
      const previousLowerBound = videoToMatchTime(config.config.trim.lowerBound, config.config.syncPoints);
      this.config.lowerBound = matchToVideoTime(previousLowerBound, this.player.config.syncPoints);
    }

    if (config.config.trim.upperBound > 0) {
      const previousUpperBound = videoToMatchTime(config.config.trim.upperBound, config.config.syncPoints);
      this.config.upperBound = matchToVideoTime(previousUpperBound, this.player.config.syncPoints);
    }

    const previousStartTime = config.trim.elements.container.bar.leftThumb.getAttribute('aria-valuetext');
    const previousEndTime = config.trim.elements.container.bar.rightThumb.getAttribute('aria-valuetext');

    this.player.once('trimloaded', () => {
      this.setTrimStart(
        matchToVideoTime(previousStartTime, this.player.config.syncPoints) - this.player.mediaFragment.startTime,
      );
      this.setTrimEnd(
        matchToVideoTime(previousEndTime, this.player.config.syncPoints) - this.player.mediaFragment.startTime,
      );
    });
  }

  destroy() {
    // Remove the elements with listeners on
    if (this.elements.container.bar && !is.empty(this.elements.container.bar)) {
      this.elements.container.remove();
    }

    this.player.off('timeupdate', this.timeUpdateFunction);
  }

  // Enter trim tool
  enter() {
    if (!this.enabled) {
      return;
    }
    this.trimming = true;
    this.showTrimTool();

    this.onChange();
  }

  // Exit trim tool
  exit() {
    if (!this.enabled) {
      return;
    }
    this.trimming = false;
    this.hideTrimTool();

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

export default Trim;
