// ==========================================================================
// Plyr source update
// ==========================================================================

import _ from 'lodash';

import { providers } from './config/types';
import html5 from './html5';
import media from './media';
import MediaFragment from './mediaFragment';
import Editor from './plugins/editor/editor';
import Markers from './plugins/editor/markers';
import Trim from './plugins/editor/trim';
import PreviewThumbnails from './plugins/preview-thumbnails';
import support from './support';
import ui from './ui';
import { createElement, insertElement, removeElement } from './utils/elements';
import is from './utils/is';
import { getDeep } from './utils/objects';

const source = {
  // Add elements to HTML5 media (source, tracks, etc)
  insertElements(type, attributes) {
    if (is.string(attributes)) {
      insertElement(type, this.media, {
        src: attributes,
      });
    } else if (is.array(attributes)) {
      attributes.forEach(attribute => {
        insertElement(type, this.media, attribute);
      });
    }
  },

  // Update source
  // Sources are not checked for support so be careful
  change(input, angle) {
    // Set the default source to be the first or only source
    let currentInput = input.length ? input[0] : input;

    // If angle has been specified set the video angle to be this
    if (angle) currentInput = input.find(x => x.angle === angle);

    if (!getDeep(currentInput, 'sources.length') && !currentInput.length) {
      this.debug.warn('Invalid source format');
      return;
    }

    // Store instance of the player to be loaded after changing source
    const playerClone = _.cloneDeep(this);
    const durationClone = this.duration;

    // Cancel current network requests
    html5.cancelRequests.call(this);

    // Destroy instance and re-setup
    this.destroy.call(
      this,
      () => {
        // Reset quality options
        this.options.quality = [];

        // Remove elements
        removeElement(this.media);
        this.media = null;

        // Reset class name
        if (is.element(this.elements.container)) {
          this.elements.container.removeAttribute('class');
        }

        // Retrieve the list of sources and type
        const { sources, type } = currentInput;
        // Set the type and provider
        const [{ provider = providers.html5, src }] = sources;
        const tagName = provider === 'html5' ? type : 'div';
        const attributes = provider === 'html5' ? {} : { src };

        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes),
        });

        // Inject the new element
        this.elements.container.appendChild(this.media);

        // Autoplay the new source?
        if (is.boolean(currentInput.autoplay)) {
          this.config.autoplay = currentInput.autoplay;
        }

        // Set attributes for audio and video
        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute('crossorigin', '');
          }
          if (this.config.autoplay) {
            this.media.setAttribute('autoplay', '');
          }
          if (!is.empty(currentInput.poster)) {
            this.poster = currentInput.poster;
          }
          if (this.config.loop.active) {
            this.media.setAttribute('loop', '');
          }
          if (this.config.muted) {
            this.media.setAttribute('muted', '');
          }
          if (this.config.playsinline) {
            this.media.setAttribute('playsinline', '');
          }
          if (this.config.preload) {
            this.media.setAttribute('preload', this.config.preload);
          }
        }

        // Restore class hook
        ui.addStyleHook.call(this, this.elements.container);

        // Set new sources for html5
        if (this.isHTML5) {
          source.insertElements.call(this, 'source', sources);
        }

        // Set video title
        this.config.title = currentInput.title;

        // Current angle
        if (currentInput.angle) this.media.angle = currentInput.angle;

        // Store Input
        this.media.sources = input;

        // Set up from scratch
        media.setup.call(this);

        // HTML5 stuff
        if (this.isHTML5) {
          // Setup captions
          if (Object.keys(currentInput).includes('tracks')) {
            source.insertElements.call(this, 'track', currentInput.tracks);
          }
        }

        // Set up sync points
        this.config.syncPoints = currentInput.syncPoints;

        // If HTML5 or embed but not fully supported, setupInterface and call ready now
        if (this.isHTML5 || (this.isEmbed && !this.supported.ui)) {
          // Setup interface
          ui.build.call(this);
        }

        // Load HTML5 sources
        if (this.isHTML5) {
          this.media.load();
        }

        // Destroy media fragment
        if (this.mediaFragment && this.mediaFragment.active) {
          this.mediaFragment.destroy();
          this.mediaFragment = null;
        }

        // Create new instance of media fragment if still enabled
        if (this.config.mediaFragment.enabled) {
          this.mediaFragment = new MediaFragment(this);
        }

        // Update previewThumbnails config & reload plugin
        if (!is.empty(currentInput.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, currentInput.previewThumbnails);

          // Cleanup previewThumbnails plugin if it was loaded
          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          }

          // Create new instance if it is still enabled
          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new PreviewThumbnails(this);
          }
        }

        // Create new instance of the editor plugin
        if (this.editor && this.editor.loaded) {
          this.editor.destroy();
          this.editor = null;
        }

        // Create new instance if it is still enabled
        if (this.config.editor.enabled) {
          this.editor = new Editor(this);
          this.editor.loadConfig(playerClone, durationClone);
        }

        // Create new instance of video markers
        if (this.markers) {
          this.markers.destroy();
          this.markers = null;
        }

        // Create new instance if it is still enabled
        if (this.config.markers.enabled) {
          this.markers = new Markers(this);
          this.markers.loadConfig(playerClone);
        }

        // Create new instance of trim plugin
        if (this.trim && this.trim.loaded) {
          this.trim.destroy();
          this.trim = null;
        }

        // Create new instance if it is still enabled
        if (this.config.trim.enabled) {
          this.trim = new Trim(this);
          this.trim.loadConfig(playerClone);
        }

        // Update trimming tool support
        this.trim.update();

        // Update the fullscreen support
        this.fullscreen.update();
      },
      true,
    );
  },
};

export default source;
