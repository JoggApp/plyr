// ==========================================================================
// Plyr default config
// ==========================================================================

const defaults = {
  // Disable
  enabled: true,

  // Custom media title
  title: '',

  // Logging to console
  debug: false,

  // Auto play (if supported)
  autoplay: false,

  // Only allow one media playing at once (vimeo only)
  autopause: true,

  // Allow inline playback on iOS (this effects YouTube/Vimeo - HTML5 requires the attribute present)
  // TODO: Remove iosNative fullscreen option in favour of this (logic needs work)
  playsinline: true,

  // Default time to skip when rewind/fast forward
  seekTime: 10,

  // Default frame rate of video
  frameRate: 25,

  // Default volume
  volume: 1,
  muted: false,

  // Pass a custom duration
  duration: null,

  // Display the media duration on load in the current time position
  // If you have opted to display both duration and currentTime, this is ignored
  displayDuration: true,

  // Invert the current time to be a countdown
  invertTime: true,

  // Clicking the currentTime inverts it's value to show time left rather than elapsed
  toggleInvert: true,

  // Force an aspect ratio
  // The format must be `'w:h'` (e.g. `'16:9'`)
  ratio: null,

  // Click video container to play/pause
  clickToPlay: true,

  // Auto hide the controls
  hideControls: true,

  // Reset to start when playback ended
  resetOnEnd: false,

  // Disable the standard context menu
  disableContextMenu: true,

  // Sprite (for icons)
  loadSprite: true,
  iconPrefix: 'plyr',
  iconUrl: 'https://cdn.plyr.io/3.6.7/plyr.svg',

  // Blank video (used to prevent errors on source change)
  blankVideo: 'https://cdn.plyr.io/static/blank.mp4',

  // Quality default
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: false,
    onChange: null,
  },

  // Display match time instead of the current time (using source sync points)
  matchTime: false,

  // Set loops
  loop: {
    active: false,
    // start: null,
    // end: null,
  },

  // Speed default and options to display
  speed: {
    selected: 1,
    // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
  },

  // Keyboard shortcut settings
  keyboard: {
    focused: true,
    global: false,
  },

  // Display tooltips
  tooltips: {
    controls: false,
    seek: true,
  },

  // Captions settings
  captions: {
    active: false,
    language: 'auto',
    // Listen to new tracks added after Plyr is initialized.
    // This is needed for streaming captions, but may result in unselectable options
    update: false,
  },

  // Editor settings
  editor: {
    enabled: true, // Allow Editor?
    target: null, // Target Container for Editor (if no container is specified, video editor will be appended to the video container)
    maxZoom: 8, // Default max zoom level
  },

  markers: {
    enabled: true, // Allow timeline markers?
    lockToTrimRegion: true, // If the trimming tool is enabled prevent markers being added outside of the trimming bar
  },

  // Trim settings
  trim: {
    enabled: true, // Allow trim?
    closeEditor: true, // Close editor, on close of trimming tool
    maxTrimLength: -1, // Limit the maximum length of the trimming region in seconds
    lowerBound: -1, // Limit the start time of the trimming region in seconds
    upperBound: -1, // Limit the end time of the trimming region in seconds
    offsetContainer: false, // Offset the trimming container window, to center the window based on the current time
  },

  mediaFragment: {
    enabled: true, // Enable media fragments?
  },

  // Fullscreen settings
  fullscreen: {
    enabled: true, // Allow fullscreen?
    fallback: true, // Fallback using full viewport/window
    iosNative: false, // Use the native fullscreen in iOS (disables custom controls)
    // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
    // Non-ancestors of the player element will be ignored
    // container: null, // defaults to the player element
  },

  // Local storage
  storage: {
    enabled: true,
    key: 'plyr',
  },

  // Default controls
  controls: [
    'play-large',
    // 'restart',
    // 'rewind',
    'play',
    // 'fast-forward',
    // 'frame-rewind',
    // 'frame-forward',
    'progress',
    'current-time',
    // 'duration',
    'mute',
    'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    // 'download',
    // 'trim',
    'fullscreen',
  ],
  settings: ['captions', 'quality', 'speed'],

  // Localisation
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    frameRewind: 'Rewind Frame',
    frameForward: 'Forward Frame',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterEditor: 'Enter Editor',
    exitEditor: 'Exit Editor',
    editorCurrentTime: 'Current time',
    zoom: 'Zoom Timeline',
    zoomOut: 'Zoom Out',
    zoomIn: 'Zoom In',
    enterTrim: 'Enter trim',
    exitTrim: 'Exit trim',
    trimStart: 'Trim Start',
    trimEnd: 'Trim End',
    marker: 'Video Marker',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
    advertisement: 'Ad',
    qualityBadge: {
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD',
    },
  },

  // URLs
  urls: {
    download: null,
    vimeo: {
      sdk: 'https://player.vimeo.com/api/player.js',
      iframe: 'https://player.vimeo.com/video/{0}?{1}',
      api: 'https://vimeo.com/api/oembed.json?url={0}',
    },
    youtube: {
      sdk: 'https://www.youtube.com/iframe_api',
      api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}',
    },
    googleIMA: {
      sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
    },
  },

  // Custom control listeners
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    frameRewind: null,
    frameForward: null,
    mute: null,
    volume: null,
    captions: null,
    editor: null,
    trim: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null,
  },

  // Events to watch and bubble
  events: [
    // Events to watch on HTML5 media elements and bubble
    // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
    'ended',
    'progress',
    'stalled',
    'playing',
    'waiting',
    'canplay',
    'canplaythrough',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'timeupdate',
    'volumechange',
    'play',
    'pause',
    'error',
    'seeking',
    'seeked',
    'emptied',
    'ratechange',
    'cuechange',

    // Custom events
    'download',
    'enterfullscreen',
    'exitfullscreen',
    'captionsenabled',
    'captionsdisabled',
    'languagechange',
    'controlshidden',
    'controlsshown',
    'ready',
    'destroyed',

    // YouTube
    'statechange',

    // Quality
    'qualitychange',

    // Ads
    'adsloaded',
    'adscontentpause',
    'adscontentresume',
    'adstarted',
    'adsmidpoint',
    'adscomplete',
    'adsallcomplete',
    'adsimpression',
    'adsclick',

    // Preview thumbnails
    'previewthumbnailsloaded',

    // Editor
    'entereditor',
    'exiteditor',
    'editorloaded',
    'zoomchange',

    // Markers
    'markeradded',
    'markerchange',

    // Trimming
    'entertrim',
    'exittrim',
    'trimloaded',
    'trimchanging',
    'trimchange',
  ],

  // Selectors
  // Change these to match your template if using custom HTML
  selectors: {
    editable: 'input, textarea, select, [contenteditable]',
    container: '.plyr',
    controls: {
      container: null,
      wrapper: '.plyr__controls',
    },
    labels: '[data-plyr]',
    buttons: {
      play: '[data-plyr="play"]',
      pause: '[data-plyr="pause"]',
      restart: '[data-plyr="restart"]',
      rewind: '[data-plyr="rewind"]',
      fastForward: '[data-plyr="fast-forward"]',
      frameRewind: '[data-plyr="frame-rewind"]',
      frameForward: '[data-plyr="frame-forward"]',
      mute: '[data-plyr="mute"]',
      captions: '[data-plyr="captions"]',
      download: '[data-plyr="download"]',
      trim: '[data-plyr="trim"]',
      fullscreen: '[data-plyr="fullscreen"]',
      pip: '[data-plyr="pip"]',
      airplay: '[data-plyr="airplay"]',
      settings: '[data-plyr="settings"]',
      loop: '[data-plyr="loop"]',
    },
    inputs: {
      seek: '[data-plyr="seek"]',
      volume: '[data-plyr="volume"]',
      speed: '[data-plyr="speed"]',
      language: '[data-plyr="language"]',
      quality: '[data-plyr="quality"]',
    },
    display: {
      currentTime: '.plyr__time--current',
      duration: '.plyr__time--duration',
      buffer: '.plyr__progress__buffer',
      loop: '.plyr__progress__loop', // Used later
      volume: '.plyr__volume--display',
    },
    progress: '.plyr__progress',
    captions: '.plyr__captions',
    caption: '.plyr__caption',
  },

  // Class hooks added to the player in different states
  classNames: {
    type: 'plyr--{0}',
    provider: 'plyr--{0}',
    video: 'plyr__video-wrapper',
    embed: 'plyr__video-embed',
    videoFixedRatio: 'plyr__video-wrapper--fixed-ratio',
    embedContainer: 'plyr__video-embed__container',
    poster: 'plyr__poster',
    posterEnabled: 'plyr__poster-enabled',
    ads: 'plyr__ads',
    control: 'plyr__control',
    controlPressed: 'plyr__control--pressed',
    playing: 'plyr--playing',
    paused: 'plyr--paused',
    stopped: 'plyr--stopped',
    loading: 'plyr--loading',
    hover: 'plyr--hover',
    tooltip: 'plyr__tooltip',
    cues: 'plyr__cues',
    hidden: 'plyr__sr-only',
    hideControls: 'plyr--hide-controls',
    isIos: 'plyr--is-ios',
    isTouch: 'plyr--is-touch',
    uiSupported: 'plyr--full-ui',
    noTransition: 'plyr--no-transition',
    matchTime: 'plyr--match-time',
    display: {
      time: 'plyr__time',
    },
    menu: {
      value: 'plyr__menu__value',
      badge: 'plyr__badge',
      open: 'plyr--menu-open',
    },
    captions: {
      enabled: 'plyr--captions-enabled',
      active: 'plyr--captions-active',
    },
    editor: {
      container: 'plyr__editor__container',
      controls: 'plyr__editor__controls',
      timeContainer: 'plyr__editor__controls__time-container',
      time: 'plyr__editor__controls__time',
      zoomContainer: 'plyr__editor__controls__zoom__container',
      timeline: 'plyr__editor__timeline',
      videoContainerParent: 'plyr__editor__video-container-parent',
      videoContainer: 'plyr__editor__video-container',
      previewThumb: 'plyr__editor__preview-thumb',
      timeStampsContainer: 'plyr__editor__time-stamps-container',
      timeStamp: 'plyr__editor__time-stamp',
      seekHandle: 'plyr__editor__seek-handle',
      seekHandleHead: 'plyr__editor__seek-handle-head',
      seekHandleLine: 'plyr__editor__seek-handle-line',
    },
    markers: {
      container: 'plyr__markers__container',
      marker: 'plyr__markers__marker',
      label: 'plyr__markers__label',
    },
    trim: {
      enabled: 'plyr--trim-enabled',
      active: 'plyr--trim-active',
      // Trim tool
      container: 'plyr__trim__container',
      trimTool: 'plyr__trim-tool',
      shadedRegion: 'plyr__trim-tool__shaded-region',
      leftThumb: 'plyr__trim-tool__thumb-left',
      rightThumb: 'plyr__trim-tool__thumb-right',
      timeContainer: 'plyr__trim-tool__time-container',
      timeContainerShown: 'plyr__trim-tool__time-container--is-shown',
    },
    fullscreen: {
      enabled: 'plyr--fullscreen-enabled',
      fallback: 'plyr--fullscreen-fallback',
    },
    pip: {
      supported: 'plyr--pip-supported',
      active: 'plyr--pip-active',
    },
    airplay: {
      supported: 'plyr--airplay-supported',
      active: 'plyr--airplay-active',
    },
    tabFocus: 'plyr__tab-focus',
    previewThumbnails: {
      // Tooltip thumbs
      thumbContainer: 'plyr__preview-thumb',
      thumbContainerShown: 'plyr__preview-thumb--is-shown',
      imageContainer: 'plyr__preview-thumb__image-container',
      timeContainer: 'plyr__preview-thumb__time-container',
      // Scrubbing
      scrubbingContainer: 'plyr__preview-scrubbing',
      scrubbingContainerShown: 'plyr__preview-scrubbing--is-shown',
    },
  },

  // Embed attributes
  attributes: {
    embed: {
      provider: 'data-plyr-provider',
      id: 'data-plyr-embed-id',
    },
  },

  // Advertisements plugin
  // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
  ads: {
    enabled: false,
    publisherId: '',
    tagUrl: '',
  },

  // Preview Thumbnails plugin
  previewThumbnails: {
    enabled: false,
    src: '',
    enableScrubbing: true,
  },

  // Vimeo plugin
  vimeo: {
    byline: false,
    portrait: false,
    title: false,
    speed: true,
    transparent: false,
    // Custom settings from Plyr
    customControls: true,
    referrerPolicy: null, // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
    // Whether the owner of the video has a Pro or Business account
    // (which allows us to properly hide controls without CSS hacks, etc)
    premium: false,
  },

  // YouTube plugin
  youtube: {
    rel: 0, // No related vids
    showinfo: 0, // Hide info
    iv_load_policy: 3, // Hide annotations
    modestbranding: 1, // Hide logos as much as possible (they still show one in the corner when paused)
    // Custom settings from Plyr
    customControls: true,
    noCookie: false, // Whether to use an alternative version of YouTube without cookies
  },
};

export default defaults;
