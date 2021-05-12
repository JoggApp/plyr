typeof navigator === "object" && (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('Plyr', factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Plyr = factory());
}(this, (function () { 'use strict';

  // Polyfill for creating CustomEvents on IE9/10/11
  // code pulled from:
  // https://github.com/d4tocchini/customevent-polyfill
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
  (function () {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      var ce = new window.CustomEvent('test', {
        cancelable: true
      });
      ce.preventDefault();

      if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
      }
    } catch (e) {
      var CustomEvent = function (event, params) {
        var evt, origPrevent;
        params = params || {};
        params.bubbles = !!params.bubbles;
        params.cancelable = !!params.cancelable;
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        origPrevent = evt.preventDefault;

        evt.preventDefault = function () {
          origPrevent.call(this);

          try {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function () {
                return true;
              }
            });
          } catch (e) {
            this.defaultPrevented = true;
          }
        };

        return evt;
      };

      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent; // expose definition to window
    }
  })();

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  (function (global) {
    /**
     * Polyfill URLSearchParams
     *
     * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
     */
    var checkIfIteratorIsSupported = function () {
      try {
        return !!Symbol.iterator;
      } catch (error) {
        return false;
      }
    };

    var iteratorSupported = checkIfIteratorIsSupported();

    var createIterator = function (items) {
      var iterator = {
        next: function () {
          var value = items.shift();
          return {
            done: value === void 0,
            value: value
          };
        }
      };

      if (iteratorSupported) {
        iterator[Symbol.iterator] = function () {
          return iterator;
        };
      }

      return iterator;
    };
    /**
     * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
     * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
     */


    var serializeParam = function (value) {
      return encodeURIComponent(value).replace(/%20/g, '+');
    };

    var deserializeParam = function (value) {
      return decodeURIComponent(String(value).replace(/\+/g, ' '));
    };

    var polyfillURLSearchParams = function () {
      var URLSearchParams = function (searchString) {
        Object.defineProperty(this, '_entries', {
          writable: true,
          value: {}
        });
        var typeofSearchString = typeof searchString;

        if (typeofSearchString === 'undefined') ; else if (typeofSearchString === 'string') {
          if (searchString !== '') {
            this._fromString(searchString);
          }
        } else if (searchString instanceof URLSearchParams) {
          var _this = this;

          searchString.forEach(function (value, name) {
            _this.append(name, value);
          });
        } else if (searchString !== null && typeofSearchString === 'object') {
          if (Object.prototype.toString.call(searchString) === '[object Array]') {
            for (var i = 0; i < searchString.length; i++) {
              var entry = searchString[i];

              if (Object.prototype.toString.call(entry) === '[object Array]' || entry.length !== 2) {
                this.append(entry[0], entry[1]);
              } else {
                throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
              }
            }
          } else {
            for (var key in searchString) {
              if (searchString.hasOwnProperty(key)) {
                this.append(key, searchString[key]);
              }
            }
          }
        } else {
          throw new TypeError('Unsupported input\'s type for URLSearchParams');
        }
      };

      var proto = URLSearchParams.prototype;

      proto.append = function (name, value) {
        if (name in this._entries) {
          this._entries[name].push(String(value));
        } else {
          this._entries[name] = [String(value)];
        }
      };

      proto.delete = function (name) {
        delete this._entries[name];
      };

      proto.get = function (name) {
        return name in this._entries ? this._entries[name][0] : null;
      };

      proto.getAll = function (name) {
        return name in this._entries ? this._entries[name].slice(0) : [];
      };

      proto.has = function (name) {
        return name in this._entries;
      };

      proto.set = function (name, value) {
        this._entries[name] = [String(value)];
      };

      proto.forEach = function (callback, thisArg) {
        var entries;

        for (var name in this._entries) {
          if (this._entries.hasOwnProperty(name)) {
            entries = this._entries[name];

            for (var i = 0; i < entries.length; i++) {
              callback.call(thisArg, entries[i], name, this);
            }
          }
        }
      };

      proto.keys = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push(name);
        });
        return createIterator(items);
      };

      proto.values = function () {
        var items = [];
        this.forEach(function (value) {
          items.push(value);
        });
        return createIterator(items);
      };

      proto.entries = function () {
        var items = [];
        this.forEach(function (value, name) {
          items.push([name, value]);
        });
        return createIterator(items);
      };

      if (iteratorSupported) {
        proto[Symbol.iterator] = proto.entries;
      }

      proto.toString = function () {
        var searchArray = [];
        this.forEach(function (value, name) {
          searchArray.push(serializeParam(name) + '=' + serializeParam(value));
        });
        return searchArray.join('&');
      };

      global.URLSearchParams = URLSearchParams;
    };

    var checkIfURLSearchParamsSupported = function () {
      try {
        var URLSearchParams = global.URLSearchParams;
        return new URLSearchParams('?a=1').toString() === 'a=1' && typeof URLSearchParams.prototype.set === 'function' && typeof URLSearchParams.prototype.entries === 'function';
      } catch (e) {
        return false;
      }
    };

    if (!checkIfURLSearchParamsSupported()) {
      polyfillURLSearchParams();
    }

    var proto = global.URLSearchParams.prototype;

    if (typeof proto.sort !== 'function') {
      proto.sort = function () {
        var _this = this;

        var items = [];
        this.forEach(function (value, name) {
          items.push([name, value]);

          if (!_this._entries) {
            _this.delete(name);
          }
        });
        items.sort(function (a, b) {
          if (a[0] < b[0]) {
            return -1;
          } else if (a[0] > b[0]) {
            return +1;
          } else {
            return 0;
          }
        });

        if (_this._entries) {
          // force reset because IE keeps keys index
          _this._entries = {};
        }

        for (var i = 0; i < items.length; i++) {
          this.append(items[i][0], items[i][1]);
        }
      };
    }

    if (typeof proto._fromString !== 'function') {
      Object.defineProperty(proto, '_fromString', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (searchString) {
          if (this._entries) {
            this._entries = {};
          } else {
            var keys = [];
            this.forEach(function (value, name) {
              keys.push(name);
            });

            for (var i = 0; i < keys.length; i++) {
              this.delete(keys[i]);
            }
          }

          searchString = searchString.replace(/^\?/, '');
          var attributes = searchString.split('&');
          var attribute;

          for (var i = 0; i < attributes.length; i++) {
            attribute = attributes[i].split('=');
            this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : '');
          }
        }
      });
    } // HTMLAnchorElement

  })(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : commonjsGlobal);

  (function (global) {
    /**
     * Polyfill URL
     *
     * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
     */
    var checkIfURLIsSupported = function () {
      try {
        var u = new global.URL('b', 'http://a');
        u.pathname = 'c d';
        return u.href === 'http://a/c%20d' && u.searchParams;
      } catch (e) {
        return false;
      }
    };

    var polyfillURL = function () {
      var _URL = global.URL;

      var URL = function (url, base) {
        if (typeof url !== 'string') url = String(url);
        if (base && typeof base !== 'string') base = String(base); // Only create another document if the base is different from current location.

        var doc = document,
            baseElement;

        if (base && (global.location === void 0 || base !== global.location.href)) {
          base = base.toLowerCase();
          doc = document.implementation.createHTMLDocument('');
          baseElement = doc.createElement('base');
          baseElement.href = base;
          doc.head.appendChild(baseElement);

          try {
            if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
          } catch (err) {
            throw new Error('URL unable to set base ' + base + ' due to ' + err);
          }
        }

        var anchorElement = doc.createElement('a');
        anchorElement.href = url;

        if (baseElement) {
          doc.body.appendChild(anchorElement);
          anchorElement.href = anchorElement.href; // force href to refresh
        }

        var inputElement = doc.createElement('input');
        inputElement.type = 'url';
        inputElement.value = url;

        if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href) || !inputElement.checkValidity() && !base) {
          throw new TypeError('Invalid URL');
        }

        Object.defineProperty(this, '_anchorElement', {
          value: anchorElement
        }); // create a linked searchParams which reflect its changes on URL

        var searchParams = new global.URLSearchParams(this.search);
        var enableSearchUpdate = true;
        var enableSearchParamsUpdate = true;

        var _this = this;

        ['append', 'delete', 'set'].forEach(function (methodName) {
          var method = searchParams[methodName];

          searchParams[methodName] = function () {
            method.apply(searchParams, arguments);

            if (enableSearchUpdate) {
              enableSearchParamsUpdate = false;
              _this.search = searchParams.toString();
              enableSearchParamsUpdate = true;
            }
          };
        });
        Object.defineProperty(this, 'searchParams', {
          value: searchParams,
          enumerable: true
        });
        var search = void 0;
        Object.defineProperty(this, '_updateSearchParams', {
          enumerable: false,
          configurable: false,
          writable: false,
          value: function () {
            if (this.search !== search) {
              search = this.search;

              if (enableSearchParamsUpdate) {
                enableSearchUpdate = false;

                this.searchParams._fromString(this.search);

                enableSearchUpdate = true;
              }
            }
          }
        });
      };

      var proto = URL.prototype;

      var linkURLWithAnchorAttribute = function (attributeName) {
        Object.defineProperty(proto, attributeName, {
          get: function () {
            return this._anchorElement[attributeName];
          },
          set: function (value) {
            this._anchorElement[attributeName] = value;
          },
          enumerable: true
        });
      };

      ['hash', 'host', 'hostname', 'port', 'protocol'].forEach(function (attributeName) {
        linkURLWithAnchorAttribute(attributeName);
      });
      Object.defineProperty(proto, 'search', {
        get: function () {
          return this._anchorElement['search'];
        },
        set: function (value) {
          this._anchorElement['search'] = value;

          this._updateSearchParams();
        },
        enumerable: true
      });
      Object.defineProperties(proto, {
        'toString': {
          get: function () {
            var _this = this;

            return function () {
              return _this.href;
            };
          }
        },
        'href': {
          get: function () {
            return this._anchorElement.href.replace(/\?$/, '');
          },
          set: function (value) {
            this._anchorElement.href = value;

            this._updateSearchParams();
          },
          enumerable: true
        },
        'pathname': {
          get: function () {
            return this._anchorElement.pathname.replace(/(^\/?)/, '/');
          },
          set: function (value) {
            this._anchorElement.pathname = value;
          },
          enumerable: true
        },
        'origin': {
          get: function () {
            // get expected port from protocol
            var expectedPort = {
              'http:': 80,
              'https:': 443,
              'ftp:': 21
            }[this._anchorElement.protocol]; // add port to origin if, expected port is different than actual port
            // and it is not empty f.e http://foo:8080
            // 8080 != 80 && 8080 != ''

            var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== '';
            return this._anchorElement.protocol + '//' + this._anchorElement.hostname + (addPortToOrigin ? ':' + this._anchorElement.port : '');
          },
          enumerable: true
        },
        'password': {
          // TODO
          get: function () {
            return '';
          },
          set: function (value) {},
          enumerable: true
        },
        'username': {
          // TODO
          get: function () {
            return '';
          },
          set: function (value) {},
          enumerable: true
        }
      });

      URL.createObjectURL = function (blob) {
        return _URL.createObjectURL.apply(_URL, arguments);
      };

      URL.revokeObjectURL = function (url) {
        return _URL.revokeObjectURL.apply(_URL, arguments);
      };

      global.URL = URL;
    };

    if (!checkIfURLIsSupported()) {
      polyfillURL();
    }

    if (global.location !== void 0 && !('origin' in global.location)) {
      var getOrigin = function () {
        return global.location.protocol + '//' + global.location.hostname + (global.location.port ? ':' + global.location.port : '');
      };

      try {
        Object.defineProperty(global.location, 'origin', {
          get: getOrigin,
          enumerable: true
        });
      } catch (e) {
        setInterval(function () {
          global.location.origin = getOrigin();
        }, 100);
      }
    }
  })(typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : commonjsGlobal);

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
  }

  function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function ownKeys(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function _objectSpread2(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ownKeys(Object(n), !0).forEach(function (t) {
        _defineProperty(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var defaults$1 = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };

  function matches$1(e, t) {
    return function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }

  function trigger(e, t) {
    if (e && t) {
      var n = new Event(t, {
        bubbles: !0
      });
      e.dispatchEvent(n);
    }
  }

  var getConstructor$1 = function (e) {
    return null != e ? e.constructor : null;
  },
      instanceOf$1 = function (e, t) {
    return !!(e && t && e instanceof t);
  },
      isNullOrUndefined$1 = function (e) {
    return null == e;
  },
      isObject$1 = function (e) {
    return getConstructor$1(e) === Object;
  },
      isNumber$1 = function (e) {
    return getConstructor$1(e) === Number && !Number.isNaN(e);
  },
      isString$1 = function (e) {
    return getConstructor$1(e) === String;
  },
      isBoolean$1 = function (e) {
    return getConstructor$1(e) === Boolean;
  },
      isFunction$1 = function (e) {
    return getConstructor$1(e) === Function;
  },
      isArray$1 = function (e) {
    return Array.isArray(e);
  },
      isNodeList$1 = function (e) {
    return instanceOf$1(e, NodeList);
  },
      isElement$1 = function (e) {
    return instanceOf$1(e, Element);
  },
      isEvent$1 = function (e) {
    return instanceOf$1(e, Event);
  },
      isEmpty$1 = function (e) {
    return isNullOrUndefined$1(e) || (isString$1(e) || isArray$1(e) || isNodeList$1(e)) && !e.length || isObject$1(e) && !Object.keys(e).length;
  },
      is$1 = {
    nullOrUndefined: isNullOrUndefined$1,
    object: isObject$1,
    number: isNumber$1,
    string: isString$1,
    boolean: isBoolean$1,
    function: isFunction$1,
    array: isArray$1,
    nodeList: isNodeList$1,
    element: isElement$1,
    event: isEvent$1,
    empty: isEmpty$1
  };

  function getDecimalPlaces(e) {
    var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }

  function round(e, t) {
    if (1 > t) {
      var n = getDecimalPlaces(t);
      return parseFloat(e.toFixed(n));
    }

    return Math.round(e / t) * t;
  }

  var RangeTouch = function () {
    function e(t, n) {
      _classCallCheck(this, e), is$1.element(t) ? this.element = t : is$1.string(t) && (this.element = document.querySelector(t)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, n), this.init());
    }

    return _createClass(e, [{
      key: "init",
      value: function () {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function () {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function (e) {
        var t = this,
            n = e ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function (e) {
          t.element[n](e, function (e) {
            return t.set(e);
          }, !1);
        });
      }
    }, {
      key: "get",
      value: function (t) {
        if (!e.enabled || !is$1.event(t)) return null;
        var n,
            r = t.target,
            i = t.changedTouches[0],
            o = parseFloat(r.getAttribute("min")) || 0,
            s = parseFloat(r.getAttribute("max")) || 100,
            u = parseFloat(r.getAttribute("step")) || 1,
            c = r.getBoundingClientRect(),
            a = 100 / c.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * a : 50 < n && (n += 2 * (n - 50) * a), o + round(n / 100 * (s - o), u);
      }
    }, {
      key: "set",
      value: function (t) {
        e.enabled && is$1.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function (t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            r = null;
        if (is$1.empty(t) || is$1.string(t) ? r = Array.from(document.querySelectorAll(is$1.string(t) ? t : 'input[type="range"]')) : is$1.element(t) ? r = [t] : is$1.nodeList(t) ? r = Array.from(t) : is$1.array(t) && (r = t.filter(is$1.element)), is$1.empty(r)) return null;

        var i = _objectSpread2({}, defaults$1, {}, n);

        if (is$1.string(t) && i.watch) {
          var o = new MutationObserver(function (n) {
            Array.from(n).forEach(function (n) {
              Array.from(n.addedNodes).forEach(function (n) {
                is$1.element(n) && matches$1(n, t) && new e(n, i);
              });
            });
          });
          o.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }

        return r.map(function (t) {
          return new e(t, n);
        });
      }
    }, {
      key: "enabled",
      get: function () {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  }();

  // ==========================================================================
  // Type checking utils
  // ==========================================================================
  const getConstructor = input => input !== null && typeof input !== 'undefined' ? input.constructor : null;

  const instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);

  const isNullOrUndefined = input => input === null || typeof input === 'undefined';

  const isObject = input => getConstructor(input) === Object;

  const isNumber = input => getConstructor(input) === Number && !Number.isNaN(input);

  const isString = input => getConstructor(input) === String;

  const isBoolean = input => getConstructor(input) === Boolean;

  const isFunction = input => getConstructor(input) === Function;

  const isArray = input => Array.isArray(input);

  const isWeakMap = input => instanceOf(input, WeakMap);

  const isNodeList = input => instanceOf(input, NodeList);

  const isTextNode = input => getConstructor(input) === Text;

  const isEvent = input => instanceOf(input, Event);

  const isKeyboardEvent = input => instanceOf(input, KeyboardEvent);

  const isCue = input => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);

  const isTrack = input => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);

  const isPromise = input => instanceOf(input, Promise) && isFunction(input.then);

  const isElement = input => input !== null && typeof input === 'object' && input.nodeType === 1 && typeof input.style === 'object' && typeof input.ownerDocument === 'object';

  const isEmpty = input => isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;

  const isUrl = input => {
    // Accept a URL object
    if (instanceOf(input, window.URL)) {
      return true;
    } // Must be string from here


    if (!isString(input)) {
      return false;
    } // Add the protocol if required


    let string = input;

    if (!input.startsWith('http://') || !input.startsWith('https://')) {
      string = `http://${input}`;
    }

    try {
      return !isEmpty(new URL(string).hostname);
    } catch (e) {
      return false;
    }
  };

  var is = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty
  };

  // ==========================================================================
  const transitionEndEvent = (() => {
    const element = document.createElement('span');
    const events = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };
    const type = Object.keys(events).find(event => element.style[event] !== undefined);
    return is.string(type) ? events[type] : false;
  })(); // Force repaint of element

  function repaint(element, delay) {
    setTimeout(() => {
      try {
        // eslint-disable-next-line no-param-reassign
        element.hidden = true; // eslint-disable-next-line no-unused-expressions

        element.offsetHeight; // eslint-disable-next-line no-param-reassign

        element.hidden = false;
      } catch (e) {// Do nothing
      }
    }, delay);
  }

  // ==========================================================================
  // Browser sniffing
  // Unfortunately, due to mixed support, UA sniffing is required
  // ==========================================================================
  const browser = {
    isIE: Boolean(window.document.documentMode),
    isEdge: window.navigator.userAgent.includes('Edge'),
    isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  // ==========================================================================

  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  } // Get a nested value in an object

  function getDeep(object, path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], object);
  } // Deep extend destination object with N more objects

  function extend(target = {}, ...sources) {
    if (!sources.length) {
      return target;
    }

    const source = sources.shift();

    if (!is.object(source)) {
      return target;
    }

    Object.keys(source).forEach(key => {
      if (is.object(source[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, {
            [key]: {}
          });
        }

        extend(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    });
    return extend(target, ...sources);
  }

  // ==========================================================================

  function wrap(elements, wrapper) {
    // Convert `elements` to an array, if necessary.
    const targets = elements.length ? elements : [elements]; // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).

    Array.from(targets).reverse().forEach((element, index) => {
      const child = index > 0 ? wrapper.cloneNode(true) : wrapper; // Cache the current parent and sibling.

      const parent = element.parentNode;
      const sibling = element.nextSibling; // Wrap the element (is automatically removed from its current
      // parent).

      child.appendChild(element); // If the element had a sibling, insert the wrapper before
      // the sibling to maintain the HTML structure; otherwise, just
      // append it to the parent.

      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  } // Set attributes

  function setAttributes(element, attributes) {
    if (!is.element(element) || is.empty(attributes)) {
      return;
    } // Assume null and undefined attributes should be left out,
    // Setting them would otherwise convert them to "null" and "undefined"


    Object.entries(attributes).filter(([, value]) => !is.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
  } // Create a DocumentFragment

  function createElement(type, attributes, text) {
    // Create a new <element>
    const element = document.createElement(type); // Set all passed attributes

    if (is.object(attributes)) {
      setAttributes(element, attributes);
    } // Add text node


    if (is.string(text)) {
      element.innerText = text;
    } // Return built element


    return element;
  } // Inaert an element after another

  function insertAfter(element, target) {
    if (!is.element(element) || !is.element(target)) {
      return;
    }

    target.parentNode.insertBefore(element, target.nextSibling);
  } // Insert a DocumentFragment

  function insertElement(type, parent, attributes, text) {
    if (!is.element(parent)) {
      return;
    }

    parent.appendChild(createElement(type, attributes, text));
  } // Remove element(s)

  function removeElement(element) {
    if (is.nodeList(element) || is.array(element)) {
      Array.from(element).forEach(removeElement);
      return;
    }

    if (!is.element(element) || !is.element(element.parentNode)) {
      return;
    }

    element.parentNode.removeChild(element);
  } // Remove all child elements

  function emptyElement(element) {
    if (!is.element(element)) {
      return;
    }

    let {
      length
    } = element.childNodes;

    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  } // Replace element

  function replaceElement(newChild, oldChild) {
    if (!is.element(oldChild) || !is.element(oldChild.parentNode) || !is.element(newChild)) {
      return null;
    }

    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  } // Get an attribute object from a string selector

  function getAttributesFromSelector(sel, existingAttributes) {
    // For example:
    // '.test' to { class: 'test' }
    // '#test' to { id: 'test' }
    // '[data-test="test"]' to { 'data-test': 'test' }
    if (!is.string(sel) || is.empty(sel)) {
      return {};
    }

    const attributes = {};
    const existing = extend({}, existingAttributes);
    sel.split(',').forEach(s => {
      // Remove whitespace
      const selector = s.trim();
      const className = selector.replace('.', '');
      const stripped = selector.replace(/[[\]]/g, ''); // Get the parts and value

      const parts = stripped.split('=');
      const [key] = parts;
      const value = parts.length > 1 ? parts[1].replace(/["']/g, '') : ''; // Get the first character

      const start = selector.charAt(0);

      switch (start) {
        case '.':
          // Add to existing classname
          if (is.string(existing.class)) {
            attributes.class = `${existing.class} ${className}`;
          } else {
            attributes.class = className;
          }

          break;

        case '#':
          // ID selector
          attributes.id = selector.replace('#', '');
          break;

        case '[':
          // Attribute selector
          attributes[key] = value;
          break;
      }
    });
    return extend(existing, attributes);
  } // Toggle hidden

  function toggleHidden(element, hidden) {
    if (!is.element(element)) {
      return;
    }

    let hide = hidden;

    if (!is.boolean(hide)) {
      hide = !element.hidden;
    } // eslint-disable-next-line no-param-reassign


    element.hidden = hide;
  } // Mirror Element.classList.toggle, with IE compatibility for "force" argument

  function toggleClass(element, className, force) {
    if (is.nodeList(element)) {
      return Array.from(element).map(e => toggleClass(e, className, force));
    }

    if (is.element(element)) {
      let method = 'toggle';

      if (typeof force !== 'undefined') {
        method = force ? 'add' : 'remove';
      }

      element.classList[method](className);
      return element.classList.contains(className);
    }

    return false;
  } // Has class name

  function hasClass(element, className) {
    return is.element(element) && element.classList.contains(className);
  } // Element matches selector

  function matches(element, selector) {
    const {
      prototype
    } = Element;

    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }

    const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  } // Closest ancestor element matching selector (also tests element itself)

  function closest$1(element, selector) {
    const {
      prototype
    } = Element; // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill

    function closestElement() {
      let el = this;

      do {
        if (matches.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    }

    const method = prototype.closest || closestElement;
    return method.call(element, selector);
  } // Find all elements

  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  } // Find a single element

  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  } // Set focus and tab focus class

  function setFocus(element = null, tabFocus = false) {
    if (!is.element(element)) {
      return;
    } // Set regular focus


    element.focus({
      preventScroll: true
    }); // If we want to mimic keyboard focus via tab

    if (tabFocus) {
      toggleClass(element, this.config.classNames.tabFocus);
    }
  }

  // ==========================================================================

  const defaultCodecs = {
    'audio/ogg': 'vorbis',
    'audio/wav': '1',
    'video/webm': 'vp8, vorbis',
    'video/mp4': 'avc1.42E01E, mp4a.40.2',
    'video/ogg': 'theora'
  }; // Check for feature support

  const support = {
    // Basic support
    audio: 'canPlayType' in document.createElement('audio'),
    video: 'canPlayType' in document.createElement('video'),

    // Check for support
    // Basic functionality vs full UI
    check(type, provider, playsinline) {
      const canPlayInline = browser.isIPhone && playsinline && support.playsinline;
      const api = support[type] || provider !== 'html5';
      const ui = api && support.rangeInput && (type !== 'video' || !browser.isIPhone || canPlayInline);
      return {
        api,
        ui
      };
    },

    // Picture-in-picture support
    // Safari & Chrome only currently
    pip: (() => {
      if (browser.isIPhone) {
        return false;
      } // Safari
      // https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls


      if (is.function(createElement('video').webkitSetPresentationMode)) {
        return true;
      } // Chrome
      // https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture


      if (document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture) {
        return true;
      }

      return false;
    })(),
    // Airplay support
    // Safari only currently
    airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: 'playsInline' in document.createElement('video'),

    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime(input) {
      if (is.empty(input)) {
        return false;
      }

      const [mediaType] = input.split('/');
      let type = input; // Verify we're using HTML5 and there's no media type mismatch

      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      } // Add codec if required


      if (Object.keys(defaultCodecs).includes(type)) {
        type += `; codecs="${defaultCodecs[input]}"`;
      }

      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ''));
      } catch (e) {
        return false;
      }
    },

    // Check for textTracks support
    textTracks: 'textTracks' in document.createElement('video'),
    // <input type="range"> Sliders
    rangeInput: (() => {
      const range = document.createElement('input');
      range.type = 'range';
      return range.type === 'range';
    })(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: 'ontouchstart' in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches
  };

  // ==========================================================================
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // https://www.youtube.com/watch?v=NPM6172J22g

  const supportsPassiveListeners = (() => {
    // Test via a getter in the options object to see if the passive property is accessed
    let supported = false;

    try {
      const options = Object.defineProperty({}, 'passive', {
        get() {
          supported = true;
          return null;
        }

      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (e) {// Do nothing
    }

    return supported;
  })(); // Toggle event listener


  function toggleListener(element, event, callback, toggle = false, passive = true, capture = false) {
    // Bail if no element, event, or callback
    if (!element || !('addEventListener' in element) || is.empty(event) || !is.function(callback)) {
      return;
    } // Allow multiple events


    const events = event.split(' '); // Build options
    // Default to just the capture boolean for browsers with no passive listener support

    let options = capture; // If passive events listeners are supported

    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive,
        // Whether the listener is a capturing listener or not
        capture
      };
    } // If a single node is passed, bind the event listener


    events.forEach(type => {
      if (this && this.eventListeners && toggle) {
        // Cache event listener
        this.eventListeners.push({
          element,
          type,
          callback,
          options
        });
      }

      element[toggle ? 'addEventListener' : 'removeEventListener'](type, callback, options);
    });
  } // Bind event handler

  function on(element, events = '', callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, true, passive, capture);
  } // Unbind event handler

  function off(element, events = '', callback, passive = true, capture = false) {
    toggleListener.call(this, element, events, callback, false, passive, capture);
  } // Bind once-only event handler

  function once(element, events = '', callback, passive = true, capture = false) {
    const onceCallback = (...args) => {
      off(element, events, onceCallback, passive, capture);
      callback.apply(this, args);
    };

    toggleListener.call(this, element, events, onceCallback, true, passive, capture);
  } // Trigger event

  function triggerEvent(element, type = '', bubbles = false, detail = {}) {
    // Bail if no element
    if (!is.element(element) || is.empty(type)) {
      return;
    } // Create and dispatch the event


    const event = new CustomEvent(type, {
      bubbles,
      detail: { ...detail,
        plyr: this
      }
    }); // Dispatch the event

    element.dispatchEvent(event);
  } // Unbind all cached event listeners

  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach(item => {
        const {
          element,
          type,
          callback,
          options
        } = item;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  } // Run method when / if player is ready

  function ready() {
    return new Promise(resolve => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, 'ready', resolve)).then(() => {});
  }

  /**
   * Silence a Promise-like object.
   * This is useful for avoiding non-harmful, but potentially confusing "uncaught
   * play promise" rejection error messages.
   * @param  {Object} value An object that may or may not be `Promise`-like.
   */

  function silencePromise(value) {
    if (is.promise(value)) {
      value.then(null, () => {});
    }
  }

  // ==========================================================================

  function dedupe(array) {
    if (!is.array(array)) {
      return array;
    }

    return array.filter((item, index) => array.indexOf(item) === index);
  } // Get the closest value in an array

  function closest(array, value) {
    if (!is.array(array) || !array.length) {
      return null;
    }

    return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
  }

  // ==========================================================================

  const standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((out, [x, y]) => ({ ...out,
    [x / y]: [x, y]
  }), {}); // Validate an aspect ratio

  function validateAspectRatio(input) {
    if (!is.array(input) && (!is.string(input) || !input.includes(':'))) {
      return false;
    }

    const ratio = is.array(input) ? input : input.split(':');
    return ratio.map(Number).every(is.number);
  } // Reduce an aspect ratio to it's lowest form

  function reduceAspectRatio(ratio) {
    if (!is.array(ratio) || !ratio.every(is.number)) {
      return null;
    }

    const [width, height] = ratio;

    const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);

    const divider = getDivider(width, height);
    return [width / divider, height / divider];
  } // Calculate an aspect ratio

  function getAspectRatio(input) {
    const parse = ratio => validateAspectRatio(ratio) ? ratio.split(':').map(Number) : null; // Try provided ratio


    let ratio = parse(input); // Get from config

    if (ratio === null) {
      ratio = parse(this.config.ratio);
    } // Get from embed


    if (ratio === null && !is.empty(this.embed) && is.array(this.embed.ratio)) {
      ({
        ratio
      } = this.embed);
    } // Get from HTML5 video


    if (ratio === null && this.isHTML5) {
      const {
        videoWidth,
        videoHeight
      } = this.media;
      ratio = reduceAspectRatio([videoWidth, videoHeight]);
    }

    return ratio;
  } // Set aspect ratio for responsive container

  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }

    const {
      wrapper
    } = this.elements;
    const ratio = getAspectRatio.call(this, input);

    if (!is.array(ratio)) {
      return {};
    }

    const [x, y] = ratio;
    const useNative = window.CSS ? window.CSS.supports(`aspect-ratio: ${x}/${y}`) : false;
    const padding = 100 / x * y;

    if (useNative) {
      wrapper.style.aspectRatio = `${x}/${y}`;
    } else {
      wrapper.style.paddingBottom = `${padding}%`;
    } // For Vimeo we have an extra <div> to hide the standard controls and UI


    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const height = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      const offset = (height - padding) / (height / 50);

      if (this.fullscreen.active) {
        wrapper.style.paddingBottom = null;
      } else {
        this.media.style.transform = `translateY(-${offset}%)`;
      }
    } else if (this.isHTML5) {
      wrapper.classList.toggle(this.config.classNames.videoFixedRatio, ratio !== null);
    }

    return {
      padding,
      ratio
    };
  } // Round an aspect ratio to closest standard ratio

  function roundAspectRatio(x, y, tolerance = 0.05) {
    const ratio = x / y;
    const closestRatio = closest(Object.keys(standardRatios), ratio); // Check match is within tolerance

    if (Math.abs(closestRatio - ratio) <= tolerance) {
      return standardRatios[closestRatio];
    } // No match


    return [x, y];
  }

  // ==========================================================================
  const html5 = {
    getSources() {
      if (!this.isHTML5) {
        return [];
      }

      const sources = Array.from(this.media.querySelectorAll('source')); // Filter out unsupported sources (if type is specified)

      return sources.filter(source => {
        const type = source.getAttribute('type');

        if (is.empty(type)) {
          return true;
        }

        return support.mime.call(this, type);
      });
    },

    // Get quality levels
    getQualityOptions() {
      // Whether we're forcing all options (e.g. for streaming)
      if (this.config.quality.forced) {
        return this.config.quality.options;
      } // Get sizes from <source> elements


      return html5.getSources.call(this).map(source => Number(source.getAttribute('size'))).filter(Boolean);
    },

    setup() {
      if (!this.isHTML5) {
        return;
      }

      const player = this; // Set speed options from config

      player.options.speed = player.config.speed.options; // Set aspect ratio if fixed

      if (!is.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      } // Quality


      Object.defineProperty(player.media, 'quality', {
        get() {
          // Get sources
          const sources = html5.getSources.call(player);
          const source = sources.find(s => s.getAttribute('src') === player.source); // Return size, if match is found

          return source && Number(source.getAttribute('size'));
        },

        set(input) {
          if (player.quality === input) {
            return;
          } // If we're using an an external handler...


          if (player.config.quality.forced && is.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            // Get sources
            const sources = html5.getSources.call(player); // Get first match for requested size

            const source = sources.find(s => Number(s.getAttribute('size')) === input); // No matching source found

            if (!source) {
              return;
            } // Get current state


            const {
              currentTime,
              paused,
              preload,
              readyState,
              playbackRate
            } = player.media; // Set new source

            player.media.src = source.getAttribute('src'); // Prevent loading if preload="none" and the current source isn't loaded (#1044)

            if (preload !== 'none' || readyState) {
              // Restore time
              player.once('loadedmetadata', () => {
                player.speed = playbackRate;
                player.currentTime = currentTime; // Resume playing

                if (!paused) {
                  silencePromise(player.play());
                }
              }); // Load new source

              player.media.load();
            }
          } // Trigger change event


          triggerEvent.call(player, player.media, 'qualitychange', false, {
            quality: input
          });
        }

      });
    },

    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests() {
      if (!this.isHTML5) {
        return;
      } // Remove child sources


      removeElement(html5.getSources.call(this)); // Set blank video src attribute
      // This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
      // Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection

      this.media.setAttribute('src', this.config.blankVideo); // Load the new empty source
      // This will cancel existing requests
      // See https://github.com/sampotts/plyr/issues/174

      this.media.load(); // Debugging

      this.debug.log('Cancelled network requests');
    }

  };

  // ==========================================================================

  function generateId(prefix) {
    return `${prefix}-${Math.floor(Math.random() * 10000)}`;
  } // Format string

  function format(input, ...args) {
    if (is.empty(input)) {
      return input;
    }

    return input.toString().replace(/{(\d+)}/g, (match, i) => args[i].toString());
  } // Get percentage

  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }

    return (current / max * 100).toFixed(2);
  } // Replace all occurances of a string in a string

  const replaceAll = (input = '', find = '', replace = '') => input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g'), replace.toString()); // Convert to title case

  const toTitleCase = (input = '') => input.toString().replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()); // Convert string to pascalCase

  function toPascalCase(input = '') {
    let string = input.toString(); // Convert kebab case

    string = replaceAll(string, '-', ' '); // Convert snake case

    string = replaceAll(string, '_', ' '); // Convert to title case

    string = toTitleCase(string); // Convert to pascal case

    return replaceAll(string, ' ', '');
  } // Convert string to pascalCase

  function toCamelCase(input = '') {
    let string = input.toString(); // Convert to pascal case

    string = toPascalCase(string); // Convert first character to lowercase

    return string.charAt(0).toLowerCase() + string.slice(1);
  } // Remove HTML from a string

  function stripHTML(source) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement('div');
    fragment.appendChild(element);
    element.innerHTML = source;
    return fragment.firstChild.innerText;
  } // Like outerHTML, but also works for DocumentFragment

  function getHTML(element) {
    const wrapper = document.createElement('div');
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }

  // ==========================================================================

  const resources = {
    pip: 'PIP',
    airplay: 'AirPlay',
    html5: 'HTML5',
    vimeo: 'Vimeo',
    youtube: 'YouTube'
  };
  const i18n = {
    get(key = '', config = {}) {
      if (is.empty(key) || is.empty(config)) {
        return '';
      }

      let string = getDeep(config.i18n, key);

      if (is.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }

        return '';
      }

      const replace = {
        '{seektime}': config.seekTime,
        '{title}': config.title
      };
      Object.entries(replace).forEach(([k, v]) => {
        string = replaceAll(string, k, v);
      });
      return string;
    }

  };

  class Storage {
    constructor(player) {
      _defineProperty$1(this, "get", key => {
        if (!Storage.supported || !this.enabled) {
          return null;
        }

        const store = window.localStorage.getItem(this.key);

        if (is.empty(store)) {
          return null;
        }

        const json = JSON.parse(store);
        return is.string(key) && key.length ? json[key] : json;
      });

      _defineProperty$1(this, "set", object => {
        // Bail if we don't have localStorage support or it's disabled
        if (!Storage.supported || !this.enabled) {
          return;
        } // Can only store objectst


        if (!is.object(object)) {
          return;
        } // Get current storage


        let storage = this.get(); // Default to empty object

        if (is.empty(storage)) {
          storage = {};
        } // Update the working copy of the values


        extend(storage, object); // Update storage

        window.localStorage.setItem(this.key, JSON.stringify(storage));
      });

      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    } // Check for actual support (see if we can use it)


    static get supported() {
      try {
        if (!('localStorage' in window)) {
          return false;
        }

        const test = '___test'; // Try to use it (it might be disabled, e.g. user is in private mode)
        // see: https://github.com/sampotts/plyr/issues/131

        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }

  }

  // ==========================================================================
  // Fetch wrapper
  // Using XHR to avoid issues with older browsers
  // ==========================================================================
  function fetch(url, responseType = 'text') {
    return new Promise((resolve, reject) => {
      try {
        const request = new XMLHttpRequest(); // Check for CORS support

        if (!('withCredentials' in request)) {
          return;
        }

        request.addEventListener('load', () => {
          if (responseType === 'text') {
            try {
              resolve(JSON.parse(request.responseText));
            } catch (e) {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener('error', () => {
          throw new Error(request.status);
        });
        request.open('GET', url, true); // Set the required response type

        request.responseType = responseType;
        request.send();
      } catch (e) {
        reject(e);
      }
    });
  }

  // ==========================================================================

  function loadSprite(url, id) {
    if (!is.string(url)) {
      return;
    }

    const prefix = 'cache';
    const hasId = is.string(id);
    let isCached = false;

    const exists = () => document.getElementById(id) !== null;

    const update = (container, data) => {
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = data; // Check again incase of race condition

      if (hasId && exists()) {
        return;
      } // Inject the SVG to the body


      document.body.insertAdjacentElement('afterbegin', container);
    }; // Only load once if ID set


    if (!hasId || !exists()) {
      const useStorage = Storage.supported; // Create container

      const container = document.createElement('div');
      container.setAttribute('hidden', '');

      if (hasId) {
        container.setAttribute('id', id);
      } // Check in cache


      if (useStorage) {
        const cached = window.localStorage.getItem(`${prefix}-${id}`);
        isCached = cached !== null;

        if (isCached) {
          const data = JSON.parse(cached);
          update(container, data.content);
        }
      } // Get the sprite


      fetch(url).then(result => {
        if (is.empty(result)) {
          return;
        }

        if (useStorage) {
          window.localStorage.setItem(`${prefix}-${id}`, JSON.stringify({
            content: result
          }));
        }

        update(container, result);
      }).catch(() => {});
    }
  }

  // ==========================================================================

  const getHours = value => Math.trunc(value / 60 / 60 % 60, 10);
  const getMinutes = value => Math.trunc(value / 60 % 60, 10);
  const getSeconds = value => Math.trunc(value % 60, 10);
  const secondsToMinutes = value => Math.floor(value / 60); // Format time to UI friendly string

  function formatTime(time = 0, displayHours = false, inverted = false) {
    // Bail if the value isn't a number
    if (!is.number(time)) {
      return formatTime(undefined, displayHours, inverted);
    } // Format time component to add leading zero


    const format = value => `0${value}`.slice(-2); // Breakdown to hours, mins, secs


    let hours = getHours(time);
    const mins = getMinutes(time);
    const secs = getSeconds(time); // Do we need to display hours?

    if (displayHours || hours > 0) {
      hours = `${hours}:`;
    } else {
      hours = '';
    } // Render


    return `${inverted && time > 0 ? '-' : ''}${hours}${format(mins)}:${format(secs)}`;
  }
  function matchTime(time, syncPoints) {
    const syncPointsOrdered = syncPoints.sort((a, b) => b.time - a.time);
    const syncPoint = syncPointsOrdered.find(x => x.time <= time) || syncPointsOrdered[syncPointsOrdered.length - 1];
    const timeIntoPeriod = Math.max(time - syncPoint.time, 0); // Time into period

    const seconds = getSeconds(timeIntoPeriod);
    const minutes = secondsToMinutes(syncPoint.start + timeIntoPeriod - seconds);
    const minutesIntoPeriod = secondsToMinutes(timeIntoPeriod - seconds); // Added time into period

    const addedTime = minutesIntoPeriod >= secondsToMinutes(syncPoint.duration);
    const addedMinutes = minutesIntoPeriod - Math.min(minutesIntoPeriod, secondsToMinutes(syncPoint.duration)); // Format time component to add leading zero

    const format = value => `0${value}`.slice(-2);

    return `${format(minutes)}${addedTime ? `+${format(addedMinutes)}` : ''}:${format(seconds)}`;
  }

  // ==========================================================================

  const controls = {
    // Get icon URL
    getIconUrl() {
      const url = new URL(this.config.iconUrl, window.location);
      const cors = url.host !== window.location.host || browser.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors
      };
    },

    // Find the UI controls
    findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper); // Buttons

        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          frameRewind: getElement.call(this, this.config.selectors.buttons.frameRewind),
          frameForward: getElement.call(this, this.config.selectors.buttons.frameForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          trim: getElement.call(this, this.config.selectors.buttons.trim),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        }; // Progress

        this.elements.progress = getElement.call(this, this.config.selectors.progress); // Inputs

        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        }; // Display

        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          editorCurrentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        }; // Seek tooltip

        if (is.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
        }

        return true;
      } catch (error) {
        // Log it
        this.debug.warn('It looks like there is a problem with your custom controls HTML', error); // Restore native video controls

        this.toggleNativeControls(true);
        return false;
      }
    },

    // Create <svg> icon
    createIcon(type, attributes) {
      const namespace = 'http://www.w3.org/2000/svg';
      const iconUrl = controls.getIconUrl.call(this);
      const iconPath = `${!iconUrl.cors ? iconUrl.url : ''}#${this.config.iconPrefix}`; // Create <svg>

      const icon = document.createElementNS(namespace, 'svg');
      setAttributes(icon, extend(attributes, {
        'aria-hidden': 'true',
        focusable: 'false'
      })); // Create the <use> to reference sprite

      const use = document.createElementNS(namespace, 'use');
      const path = `${iconPath}-${type}`; // Set `href` attributes
      // https://github.com/sampotts/plyr/issues/460
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xlink:href

      if ('href' in use) {
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
      } // Always set the older attribute even though it's "deprecated" (it'll be around for ages)


      use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', path); // Add <use> to <svg>

      icon.appendChild(use);
      return icon;
    },

    // Create hidden text label
    createLabel(key, attr = {}) {
      const text = i18n.get(key, this.config);
      const attributes = { ...attr,
        class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(' ')
      };
      return createElement('span', attributes, text);
    },

    // Create a badge
    createBadge(text) {
      if (is.empty(text)) {
        return null;
      }

      const badge = createElement('span', {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(createElement('span', {
        class: this.config.classNames.menu.badge
      }, text));
      return badge;
    },

    // Create a <button>
    createButton(buttonType, attr) {
      const attributes = extend({}, attr);
      let type = toCamelCase(buttonType);
      const props = {
        element: 'button',
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ['element', 'icon', 'label'].forEach(key => {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      }); // Default to 'button' type to prevent form submission

      if (props.element === 'button' && !Object.keys(attributes).includes('type')) {
        attributes.type = 'button';
      } // Set class name


      if (Object.keys(attributes).includes('class')) {
        if (!attributes.class.split(' ').some(c => c === this.config.classNames.control)) {
          extend(attributes, {
            class: `${attributes.class} ${this.config.classNames.control}`
          });
        }
      } else {
        attributes.class = this.config.classNames.control;
      } // Large play button


      switch (buttonType) {
        case 'play':
          props.toggle = true;
          props.label = 'play';
          props.labelPressed = 'pause';
          props.icon = 'play';
          props.iconPressed = 'pause';
          break;

        case 'mute':
          props.toggle = true;
          props.label = 'mute';
          props.labelPressed = 'unmute';
          props.icon = 'volume';
          props.iconPressed = 'muted';
          break;

        case 'captions':
          props.toggle = true;
          props.label = 'enableCaptions';
          props.labelPressed = 'disableCaptions';
          props.icon = 'captions-off';
          props.iconPressed = 'captions-on';
          break;

        case 'zoomOut':
          props.label = 'zoomOut';
          props.icon = 'zoom-out';
          break;

        case 'zoomIn':
          props.label = 'zoomIn';
          props.icon = 'zoom-in';
          break;

        case 'trim':
          props.toggle = true;
          props.label = 'enterTrim';
          props.labelPressed = 'exitTrim';
          props.icon = 'enter-trim';
          props.iconPressed = 'exit-trim';
          break;

        case 'fullscreen':
          props.toggle = true;
          props.label = 'enterFullscreen';
          props.labelPressed = 'exitFullscreen';
          props.icon = 'enter-fullscreen';
          props.iconPressed = 'exit-fullscreen';
          break;

        case 'play-large':
          attributes.class += ` ${this.config.classNames.control}--overlaid`;
          type = 'play';
          props.label = 'play';
          props.icon = 'play';
          break;

        default:
          if (is.empty(props.label)) {
            props.label = type;
          }

          if (is.empty(props.icon)) {
            props.icon = buttonType;
          }

      }

      const button = createElement(props.element); // Setup toggle icon and labels

      if (props.toggle) {
        // Icon
        button.appendChild(controls.createIcon.call(this, props.iconPressed, {
          class: 'icon--pressed'
        }));
        button.appendChild(controls.createIcon.call(this, props.icon, {
          class: 'icon--not-pressed'
        })); // Label/Tooltip

        button.appendChild(controls.createLabel.call(this, props.labelPressed, {
          class: 'label--pressed'
        }));
        button.appendChild(controls.createLabel.call(this, props.label, {
          class: 'label--not-pressed'
        }));
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      } // Merge and set attributes


      extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes); // We have multiple play buttons

      if (type === 'play') {
        if (!is.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }

        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }

      return button;
    },

    // Create an <input type='range'>
    createRange(type, attributes) {
      // Seek input
      const input = createElement('input', extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
        type: 'range',
        min: 0,
        max: 100,
        step: 0.01,
        value: 0,
        autocomplete: 'off',
        // A11y fixes for https://github.com/sampotts/plyr/issues/905
        role: 'slider',
        'aria-label': i18n.get(type, this.config),
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': 0
      }, attributes));
      this.elements.inputs[type] = input; // Set the fill for webkit now

      controls.updateRangeFill.call(this, input); // Improve support on touch devices

      RangeTouch.setup(input);
      return input;
    },

    // Create a <progress>
    createProgress(type, attributes) {
      const progress = createElement('progress', extend(getAttributesFromSelector(this.config.selectors.display[type]), {
        min: 0,
        max: 100,
        value: 0,
        role: 'progressbar',
        'aria-hidden': true
      }, attributes)); // Create the label inside

      if (type !== 'volume') {
        progress.appendChild(createElement('span', null, '0'));
        const suffixKey = {
          played: 'played',
          buffer: 'buffered'
        }[type];
        const suffix = suffixKey ? i18n.get(suffixKey, this.config) : '';
        progress.innerText = `% ${suffix.toLowerCase()}`;
      }

      this.elements.display[type] = progress;
      return progress;
    },

    // Create time display
    createTime(type, attrs) {
      const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      const container = createElement('div', extend(attributes, {
        class: `${attributes.class ? attributes.class : ''} ${this.config.classNames.display.time} `.trim(),
        'aria-label': i18n.get(type, this.config)
      }), this.currentTime ? formatTime(this.currentTime) : '00:00'); // Toggle Match time class

      toggleClass(container, this.config.classNames.matchTime, this.config.matchTime); // Reference for updates

      this.elements.display[type] = container;
      return container;
    },

    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts(menuItem, type) {
      // Navigate through menus via arrow keys and space
      on.call(this, menuItem, 'keydown keyup', event => {
        // We only care about space and ⬆️ ⬇️️ ➡️
        if (![32, 38, 39, 40].includes(event.which)) {
          return;
        } // Prevent play / seek


        event.preventDefault();
        event.stopPropagation(); // We're just here to prevent the keydown bubbling

        if (event.type === 'keydown') {
          return;
        }

        const isRadioButton = matches(menuItem, '[role="menuitemradio"]'); // Show the respective menu

        if (!isRadioButton && [32, 39].includes(event.which)) {
          controls.showMenuPanel.call(this, type, true);
        } else {
          let target;

          if (event.which !== 32) {
            if (event.which === 40 || isRadioButton && event.which === 39) {
              target = menuItem.nextElementSibling;

              if (!is.element(target)) {
                target = menuItem.parentNode.firstElementChild;
              }
            } else {
              target = menuItem.previousElementSibling;

              if (!is.element(target)) {
                target = menuItem.parentNode.lastElementChild;
              }
            }

            setFocus.call(this, target, true);
          }
        }
      }, false); // Enter will fire a `click` event but we still need to manage focus
      // So we bind to keyup which fires after and set focus here

      on.call(this, menuItem, 'keyup', event => {
        if (event.which !== 13) {
          return;
        }

        controls.focusFirstMenuItem.call(this, null, true);
      });
    },

    // Create a settings menu item
    createMenuItem({
      value,
      list,
      type,
      title,
      badge = null,
      checked = false
    }) {
      const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      const menuItem = createElement('button', extend(attributes, {
        type: 'button',
        role: 'menuitemradio',
        class: `${this.config.classNames.control} ${attributes.class ? attributes.class : ''}`.trim(),
        'aria-checked': checked,
        value
      }));
      const flex = createElement('span'); // We have to set as HTML incase of special characters

      flex.innerHTML = title;

      if (is.element(badge)) {
        flex.appendChild(badge);
      }

      menuItem.appendChild(flex); // Replicate radio button behaviour

      Object.defineProperty(menuItem, 'checked', {
        enumerable: true,

        get() {
          return menuItem.getAttribute('aria-checked') === 'true';
        },

        set(check) {
          // Ensure exclusivity
          if (check) {
            Array.from(menuItem.parentNode.children).filter(node => matches(node, '[role="menuitemradio"]')).forEach(node => node.setAttribute('aria-checked', 'false'));
          }

          menuItem.setAttribute('aria-checked', check ? 'true' : 'false');
        }

      });
      this.listeners.bind(menuItem, 'click keyup', event => {
        if (is.keyboardEvent(event) && event.which !== 32) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        menuItem.checked = true;

        switch (type) {
          case 'language':
            this.currentTrack = Number(value);
            break;

          case 'quality':
            this.quality = value;
            break;

          case 'speed':
            this.speed = parseFloat(value);
            break;
        }

        controls.showMenuPanel.call(this, 'home', is.keyboardEvent(event));
      }, type, false);
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },

    // Format a time for display
    formatTime(time = 0, inverted = false) {
      // Bail if the value isn't a number
      if (!is.number(time)) {
        return time;
      } // Always display hours if duration is over an hour


      const forceHours = getHours(this.duration) > 0;

      if (this.config.matchTime && this.config.syncPoints) {
        return matchTime(time, this.config.syncPoints);
      }

      return formatTime(time, forceHours, inverted);
    },

    // Update the displayed time
    updateTimeDisplay(target = null, time = 0, inverted = false) {
      // Bail if there's no element to display or the value isn't a number
      if (!is.element(target) || !is.number(time)) {
        return;
      } // eslint-disable-next-line no-param-reassign


      target.innerText = controls.formatTime.call(this, time, inverted);
    },

    // Update volume UI and storage
    updateVolume() {
      if (!this.supported.ui) {
        return;
      } // Update range


      if (is.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      } // Update mute state


      if (is.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },

    // Update seek value and lower fill
    setRange(target, value = 0) {
      if (!is.element(target)) {
        return;
      } // eslint-disable-next-line


      target.value = value; // Webkit range fill

      controls.updateRangeFill.call(this, target);
    },

    // Update <progress> elements
    updateProgress(event) {
      if (!this.supported.ui || !is.event(event)) {
        return;
      }

      let value = 0;

      const setProgress = (target, input) => {
        const val = is.number(input) ? input : 0;
        const progress = is.element(target) ? target : this.elements.display.buffer; // Update value and label

        if (is.element(progress)) {
          progress.value = val; // Update text label inside

          const label = progress.getElementsByTagName('span')[0];

          if (is.element(label)) {
            label.childNodes[0].nodeValue = val;
          }
        }
      };

      if (event) {
        switch (event.type) {
          // Video playing
          case 'timeupdate':
          case 'seeking':
          case 'seeked':
            value = getPercentage(this.currentTime, this.duration); // Set seek range value only if it's a 'natural' time event

            if (event.type === 'timeupdate') {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }

            break;
          // Check buffer status

          case 'playing':
          case 'progress':
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;
        }
      }
    },

    // Webkit polyfill for lower fill range
    updateRangeFill(target) {
      // Get range from event if event passed
      const range = is.event(target) ? target.target : target; // Needs to be a valid <input type='range'>

      if (!is.element(range) || range.getAttribute('type') !== 'range') {
        return;
      } // Set aria values for https://github.com/sampotts/plyr/issues/905


      if (matches(range, this.config.selectors.inputs.seek)) {
        range.setAttribute('aria-valuenow', this.currentTime);
        const currentTime = controls.formatTime.call(this, this.currentTime);
        const duration = controls.formatTime.call(this, this.duration);
        const format = i18n.get('seekLabel', this.config);
        range.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
      } else if (matches(range, this.config.selectors.inputs.volume)) {
        const percent = range.value * 100;
        range.setAttribute('aria-valuenow', percent);
        range.setAttribute('aria-valuetext', `${percent.toFixed(1)}%`);
      } else {
        range.setAttribute('aria-valuenow', range.value);
      } // WebKit only


      if (!browser.isWebkit) {
        return;
      } // Set CSS custom property


      range.style.setProperty('--value', `${(range.value - range.min) / (range.max - range.min) * 100}%`);
    },

    // Update hover tooltip for seeking
    updateSeekTooltip(event) {
      // Bail if setting not true
      if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }

      const visible = `${this.config.classNames.tooltip}--visible`;

      const toggle = show => toggleClass(this.elements.display.seekTooltip, visible, show); // Hide on touch


      if (this.touch) {
        toggle(false);
        return;
      } // Determine percentage, if already visible


      let percent = 0;
      const clientRect = this.elements.progress.getBoundingClientRect();

      if (is.event(event)) {
        percent = 100 / clientRect.width * (event.pageX - clientRect.left);
      } else if (hasClass(this.elements.display.seekTooltip, visible)) {
        percent = parseFloat(this.elements.display.seekTooltip.style.left, 10);
      } else {
        return;
      } // Set bounds


      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      } // Display the time a click would seek to


      controls.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * percent); // Set position

      this.elements.display.seekTooltip.style.left = `${percent}%`; // Show/hide the tooltip
      // If the event is a moues in/out and percentage is inside bounds

      if (is.event(event) && ['mouseenter', 'mouseleave'].includes(event.type)) {
        toggle(event.type === 'mouseenter');
      }
    },

    // Handle time change event
    timeUpdate(event) {
      // Only invert if only one time element is displayed and used for both duration and currentTime
      const invert = !is.element(this.elements.display.duration) && this.config.invertTime; // Duration

      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert); // Editor Duration

      controls.updateTimeDisplay.call(this, this.elements.display.editorCurrentTime, this.currentTime); // Ignore updates while seeking

      if (event && event.type === 'timeupdate' && this.media.seeking) {
        return;
      } // Playing progress


      controls.updateProgress.call(this, event);
    },

    // Show the duration on metadataloaded or durationchange events
    durationUpdate() {
      // Bail if no UI or durationchange event triggered after playing/seek when invertTime is false
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      } // If duration is the 2**32 (shaka), Infinity (HLS), DASH-IF (Number.MAX_SAFE_INTEGER || Number.MAX_VALUE) indicating live we hide the currentTime and progressbar.
      // https://github.com/video-dev/hls.js/blob/5820d29d3c4c8a46e8b75f1e3afa3e68c1a9a2db/src/controller/buffer-controller.js#L415
      // https://github.com/google/shaka-player/blob/4d889054631f4e1cf0fbd80ddd2b71887c02e232/lib/media/streaming_engine.js#L1062
      // https://github.com/Dash-Industry-Forum/dash.js/blob/69859f51b969645b234666800d4cb596d89c602d/src/dash/models/DashManifestModel.js#L338


      if (this.duration >= 2 ** 32) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      } // Update ARIA values


      if (is.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute('aria-valuemax', this.duration);
      } // If there's a spot to display duration


      const hasDuration = is.element(this.elements.display.duration); // If there's only one time display, display duration there

      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      } // If there's a duration element, update content


      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      } // Update the tooltip (if visible)


      controls.updateSeekTooltip.call(this);
    },

    // Hide/show a tab
    toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },

    // Update the selected setting
    updateSetting(setting, container, input) {
      const pane = this.elements.settings.panels[setting];
      let value = null;
      let list = container;

      if (setting === 'captions') {
        value = this.currentTrack;
      } else {
        value = !is.empty(input) ? input : this[setting]; // Get default

        if (is.empty(value)) {
          value = this.config[setting].default;
        } // Unsupported value


        if (!is.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
          return;
        } // Disabled value


        if (!this.config[setting].options.includes(value)) {
          this.debug.warn(`Disabled value of '${value}' for ${setting}`);
          return;
        }
      } // Get the list if we need to


      if (!is.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      } // If there's no list it means it's not been rendered...


      if (!is.element(list)) {
        return;
      } // Update the label


      const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
      label.innerHTML = controls.getLabel.call(this, setting, value); // Find the radio option and check it

      const target = list && list.querySelector(`[value="${value}"]`);

      if (is.element(target)) {
        target.checked = true;
      }
    },

    // Translate a value into a nice label
    getLabel(setting, value) {
      switch (setting) {
        case 'speed':
          return value === 1 ? i18n.get('normal', this.config) : `${value}&times;`;

        case 'quality':
          if (is.number(value)) {
            const label = i18n.get(`qualityLabel.${value}`, this.config);

            if (!label.length) {
              return `${value}p`;
            }

            return label;
          }

          return toTitleCase(value);

        case 'captions':
          return captions.getLabel.call(this);

        default:
          return null;
      }
    },

    // Set the quality menu
    setQualityMenu(options) {
      // Menu required
      if (!is.element(this.elements.settings.panels.quality)) {
        return;
      }

      const type = 'quality';
      const list = this.elements.settings.panels.quality.querySelector('[role="menu"]'); // Set options if passed and filter based on uniqueness and config

      if (is.array(options)) {
        this.options.quality = dedupe(options).filter(quality => this.config.quality.options.includes(quality));
      } // Toggle the pane and tab


      const toggle = !is.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Get the badge HTML for HD, 4K etc


      const getBadge = quality => {
        const label = i18n.get(`qualityBadge.${quality}`, this.config);

        if (!label.length) {
          return null;
        }

        return controls.createBadge.call(this, label);
      }; // Sort options by the config and then render options


      this.options.quality.sort((a, b) => {
        const sorting = this.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach(quality => {
        controls.createMenuItem.call(this, {
          value: quality,
          list,
          type,
          title: controls.getLabel.call(this, 'quality', quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },

    // Set the looping options

    /* setLoopMenu() {
          // Menu required
          if (!is.element(this.elements.settings.panels.loop)) {
              return;
          }
           const options = ['start', 'end', 'all', 'reset'];
          const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
           // Show the pane and tab
          toggleHidden(this.elements.settings.buttons.loop, false);
          toggleHidden(this.elements.settings.panels.loop, false);
           // Toggle the pane and tab
          const toggle = !is.empty(this.loop.options);
          controls.toggleMenuButton.call(this, 'loop', toggle);
           // Empty the menu
          emptyElement(list);
           options.forEach(option => {
              const item = createElement('li');
               const button = createElement(
                  'button',
                  extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                      type: 'button',
                      class: this.config.classNames.control,
                      'data-plyr-loop-action': option,
                  }),
                  i18n.get(option, this.config)
              );
               if (['start', 'end'].includes(option)) {
                  const badge = controls.createBadge.call(this, '00:00');
                  button.appendChild(badge);
              }
               item.appendChild(button);
              list.appendChild(item);
          });
      }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu() {
      // Menu required
      if (!is.element(this.elements.settings.panels.captions)) {
        return;
      } // TODO: Captions or language? Currently it's mixed


      const type = 'captions';
      const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      const tracks = captions.getTracks.call(this);
      const toggle = Boolean(tracks.length); // Toggle the pane and tab

      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If there's no captions, bail

      if (!toggle) {
        return;
      } // Generate options data


      const options = tracks.map((track, value) => ({
        value,
        checked: this.captions.toggled && this.currentTrack === value,
        title: captions.getLabel.call(this, track),
        badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
        list,
        type: 'language'
      })); // Add the "Disabled" option to turn off captions

      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n.get('disabled', this.config),
        list,
        type: 'language'
      }); // Generate options

      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },

    // Set a list of available captions languages
    setSpeedMenu() {
      // Menu required
      if (!is.element(this.elements.settings.panels.speed)) {
        return;
      }

      const type = 'speed';
      const list = this.elements.settings.panels.speed.querySelector('[role="menu"]'); // Filter out invalid speeds

      this.options.speed = this.options.speed.filter(o => o >= this.minimumSpeed && o <= this.maximumSpeed); // Toggle the pane and tab

      const toggle = !is.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Create items


      this.options.speed.forEach(speed => {
        controls.createMenuItem.call(this, {
          value: speed,
          list,
          type,
          title: controls.getLabel.call(this, 'speed', speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },

    // Check if we need to hide/show the settings menu
    checkMenu() {
      const {
        buttons
      } = this.elements.settings;
      const visible = !is.empty(buttons) && Object.values(buttons).some(button => !button.hidden);
      toggleHidden(this.elements.settings.menu, !visible);
    },

    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem(pane, tabFocus = false) {
      if (this.elements.settings.popup.hidden) {
        return;
      }

      let target = pane;

      if (!is.element(target)) {
        target = Object.values(this.elements.settings.panels).find(p => !p.hidden);
      }

      const firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, tabFocus);
    },

    // Show/hide menu
    toggleMenu(input) {
      const {
        popup
      } = this.elements.settings;
      const button = this.elements.buttons.settings; // Menu and button are required

      if (!is.element(popup) || !is.element(button)) {
        return;
      } // True toggle by default


      const {
        hidden
      } = popup;
      let show = hidden;

      if (is.boolean(input)) {
        show = input;
      } else if (is.keyboardEvent(input) && input.which === 27) {
        show = false;
      } else if (is.event(input)) {
        // If Plyr is in a shadowDOM, the event target is set to the component, instead of the
        // Element in the shadowDOM. The path, if available, is complete.
        const target = is.function(input.composedPath) ? input.composedPath()[0] : input.target;
        const isMenuItem = popup.contains(target); // If the click was inside the menu or if the click
        // wasn't the button or menu item and we're trying to
        // show the menu (a doc click shouldn't show the menu)

        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      } // Set button attributes


      button.setAttribute('aria-expanded', show); // Show the actual popup

      toggleHidden(popup, !show); // Add class hook

      toggleClass(this.elements.container, this.config.classNames.menu.open, show); // Focus the first item if key interaction

      if (show && is.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        // If closing, re-focus the button
        setFocus.call(this, button, is.keyboardEvent(input));
      }
    },

    // Get the natural size of a menu panel
    getMenuSize(tab) {
      const clone = tab.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.opacity = 0;
      clone.removeAttribute('hidden'); // Append to parent so we get the "real" size

      tab.parentNode.appendChild(clone); // Get the sizes before we remove

      const width = clone.scrollWidth;
      const height = clone.scrollHeight; // Remove from the DOM

      removeElement(clone);
      return {
        width,
        height
      };
    },

    // Show a panel in the menu
    showMenuPanel(type = '', tabFocus = false) {
      const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`); // Nothing to show, bail

      if (!is.element(target)) {
        return;
      } // Hide all other panels


      const container = target.parentNode;
      const current = Array.from(container.children).find(node => !node.hidden); // If we can do fancy animations, we'll animate the height/width

      if (support.transitions && !support.reducedMotion) {
        // Set the current width as a base
        container.style.width = `${current.scrollWidth}px`;
        container.style.height = `${current.scrollHeight}px`; // Get potential sizes

        const size = controls.getMenuSize.call(this, target); // Restore auto height/width

        const restore = event => {
          // We're only bothered about height and width on the container
          if (event.target !== container || !['width', 'height'].includes(event.propertyName)) {
            return;
          } // Revert back to auto


          container.style.width = '';
          container.style.height = ''; // Only listen once

          off.call(this, container, transitionEndEvent, restore);
        }; // Listen for the transition finishing and restore auto height/width


        on.call(this, container, transitionEndEvent, restore); // Set dimensions to target

        container.style.width = `${size.width}px`;
        container.style.height = `${size.height}px`;
      } // Set attributes on current tab


      toggleHidden(current, true); // Set attributes on target

      toggleHidden(target, false); // Focus the first item

      controls.focusFirstMenuItem.call(this, target, tabFocus);
    },

    // Set the download URL
    setDownloadUrl() {
      const button = this.elements.buttons.download; // Bail if no button

      if (!is.element(button)) {
        return;
      } // Set attribute


      button.setAttribute('href', this.download);
    },

    // Build the default HTML
    create(data) {
      const {
        bindMenuItemShortcuts,
        createButton,
        createProgress,
        createRange,
        createTime,
        setQualityMenu,
        setSpeedMenu,
        showMenuPanel
      } = controls;
      this.elements.controls = null; // Larger overlaid play button

      if (is.array(this.config.controls) && this.config.controls.includes('play-large')) {
        this.elements.container.appendChild(createButton.call(this, 'play-large'));
      } // Create the container


      const container = createElement('div', getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container; // Default item attributes

      const defaultAttributes = {
        class: 'plyr__controls__item'
      }; // Loop through controls in order

      dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach(control => {
        // Restart button
        if (control === 'restart') {
          container.appendChild(createButton.call(this, 'restart', defaultAttributes));
        } // Rewind button


        if (control === 'rewind') {
          container.appendChild(createButton.call(this, 'rewind', defaultAttributes));
        } // Play/Pause button


        if (control === 'play') {
          container.appendChild(createButton.call(this, 'play', defaultAttributes));
        } // Fast forward button


        if (control === 'fast-forward') {
          container.appendChild(createButton.call(this, 'fast-forward', defaultAttributes));
        } // Progress


        if (control === 'progress') {
          const progressContainer = createElement('div', {
            class: `${defaultAttributes.class} plyr__progress__container`
          });
          const progress = createElement('div', getAttributesFromSelector(this.config.selectors.progress)); // Seek range slider

          progress.appendChild(createRange.call(this, 'seek', {
            id: `plyr-seek-${data.id}`
          })); // Buffer progress

          progress.appendChild(createProgress.call(this, 'buffer')); // TODO: Add loop display indicator
          // Seek tooltip

          if (this.config.tooltips.seek) {
            const tooltip = createElement('span', {
              class: this.config.classNames.tooltip
            }, '00:00');
            progress.appendChild(tooltip);
            this.elements.display.seekTooltip = tooltip;
          }

          this.elements.progress = progress;
          progressContainer.appendChild(this.elements.progress);
          container.appendChild(progressContainer);
        } // Media current time display


        if (control === 'current-time') {
          container.appendChild(createTime.call(this, 'currentTime', defaultAttributes));
        } // Media duration display


        if (control === 'duration') {
          container.appendChild(createTime.call(this, 'duration', defaultAttributes));
        } // Volume controls


        if (control === 'mute' || control === 'volume') {
          let {
            volume
          } = this.elements; // Create the volume container if needed

          if (!is.element(volume) || !container.contains(volume)) {
            volume = createElement('div', extend({}, defaultAttributes, {
              class: `${defaultAttributes.class} plyr__volume`.trim()
            }));
            this.elements.volume = volume;
            container.appendChild(volume);
          } // Toggle mute button


          if (control === 'mute') {
            volume.appendChild(createButton.call(this, 'mute'));
          } // Volume range control
          // Ignored on iOS as it's handled globally
          // https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html


          if (control === 'volume' && !browser.isIos) {
            // Set the attributes
            const attributes = {
              max: 1,
              step: 0.05,
              value: this.config.volume
            }; // Create the volume range slider

            volume.appendChild(createRange.call(this, 'volume', extend(attributes, {
              id: `plyr-volume-${data.id}`
            })));
          }
        } // Toggle captions button


        if (control === 'captions') {
          container.appendChild(createButton.call(this, 'captions', defaultAttributes));
        } // Settings button / menu


        if (control === 'settings' && !is.empty(this.config.settings)) {
          const wrapper = createElement('div', extend({}, defaultAttributes, {
            class: `${defaultAttributes.class} plyr__menu`.trim(),
            hidden: ''
          }));
          wrapper.appendChild(createButton.call(this, 'settings', {
            'aria-haspopup': true,
            'aria-controls': `plyr-settings-${data.id}`,
            'aria-expanded': false
          }));
          const popup = createElement('div', {
            class: 'plyr__menu__container',
            id: `plyr-settings-${data.id}`,
            hidden: ''
          });
          const inner = createElement('div');
          const home = createElement('div', {
            id: `plyr-settings-${data.id}-home`
          }); // Create the menu

          const menu = createElement('div', {
            role: 'menu'
          });
          home.appendChild(menu);
          inner.appendChild(home);
          this.elements.settings.panels.home = home; // Build the menu items

          this.config.settings.forEach(type => {
            // TODO: bundle this with the createMenuItem helper and bindings
            const menuItem = createElement('button', extend(getAttributesFromSelector(this.config.selectors.buttons.settings), {
              type: 'button',
              class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
              role: 'menuitem',
              'aria-haspopup': true,
              hidden: ''
            })); // Bind menu shortcuts for keyboard users

            bindMenuItemShortcuts.call(this, menuItem, type); // Show menu on click

            on.call(this, menuItem, 'click', () => {
              showMenuPanel.call(this, type, false);
            });
            const flex = createElement('span', null, i18n.get(type, this.config));
            const value = createElement('span', {
              class: this.config.classNames.menu.value
            }); // Speed contains HTML entities

            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem); // Build the panes

            const pane = createElement('div', {
              id: `plyr-settings-${data.id}-${type}`,
              hidden: ''
            }); // Back button

            const backButton = createElement('button', {
              type: 'button',
              class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
            }); // Visible label

            backButton.appendChild(createElement('span', {
              'aria-hidden': true
            }, i18n.get(type, this.config))); // Screen reader label

            backButton.appendChild(createElement('span', {
              class: this.config.classNames.hidden
            }, i18n.get('menuBack', this.config))); // Go back via keyboard

            on.call(this, pane, 'keydown', event => {
              // We only care about <-
              if (event.which !== 37) {
                return;
              } // Prevent seek


              event.preventDefault();
              event.stopPropagation(); // Show the respective menu

              showMenuPanel.call(this, 'home', true);
            }, false); // Go back via button click

            on.call(this, backButton, 'click', () => {
              showMenuPanel.call(this, 'home', false);
            }); // Add to pane

            pane.appendChild(backButton); // Menu

            pane.appendChild(createElement('div', {
              role: 'menu'
            }));
            inner.appendChild(pane);
            this.elements.settings.buttons[type] = menuItem;
            this.elements.settings.panels[type] = pane;
          });
          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          this.elements.settings.popup = popup;
          this.elements.settings.menu = wrapper;
        } // Frame Reverse button


        if (control === 'frame-rewind') {
          container.appendChild(createButton.call(this, 'frame-rewind', defaultAttributes));
        } // Frame Forward button


        if (control === 'frame-forward') {
          container.appendChild(createButton.call(this, 'frame-forward', defaultAttributes));
        } // Picture in picture button


        if (control === 'pip' && support.pip) {
          container.appendChild(createButton.call(this, 'pip', defaultAttributes));
        } // Airplay button


        if (control === 'airplay' && support.airplay) {
          container.appendChild(createButton.call(this, 'airplay', defaultAttributes));
        } // Download button


        if (control === 'download') {
          const attributes = extend({}, defaultAttributes, {
            element: 'a',
            href: this.download,
            target: '_blank'
          }); // Set download attribute for HTML5 only

          if (this.isHTML5) {
            attributes.download = '';
          }

          const {
            download
          } = this.config.urls;

          if (!is.url(download) && this.isEmbed) {
            extend(attributes, {
              icon: `logo-${this.provider}`,
              label: this.provider
            });
          }

          container.appendChild(createButton.call(this, 'download', attributes));
        } // Toggle trim button


        if (control === 'trim') {
          container.appendChild(createButton.call(this, 'trim', defaultAttributes));
        } // Toggle fullscreen button


        if (control === 'fullscreen') {
          container.appendChild(createButton.call(this, 'fullscreen', defaultAttributes));
        }
      }); // Set available quality levels

      if (this.isHTML5) {
        setQualityMenu.call(this, html5.getQualityOptions.call(this));
      }

      setSpeedMenu.call(this);
      return container;
    },

    // Insert controls
    inject() {
      // Sprite
      if (this.config.loadSprite) {
        const icon = controls.getIconUrl.call(this); // Only load external sprite using AJAX

        if (icon.cors) {
          loadSprite(icon.url, 'sprite-plyr');
        }
      } // Create a unique ID


      this.id = Math.floor(Math.random() * 10000); // Null by default

      let container = null;
      this.elements.controls = null; // Set template properties

      const props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let update = true; // If function, run it and use output

      if (is.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      } // Convert falsy controls to empty array (primarily for empty strings)


      if (!this.config.controls) {
        this.config.controls = [];
      }

      if (is.element(this.config.controls) || is.string(this.config.controls)) {
        // HTMLElement or Non-empty string passed as the option
        container = this.config.controls;
      } else {
        // Create controls
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions.getLabel.call(this) // TODO: Looping
          // loop: 'None',

        });
        update = false;
      } // Replace props with their value


      const replace = input => {
        let result = input;
        Object.entries(props).forEach(([key, value]) => {
          result = replaceAll(result, `{${key}}`, value);
        });
        return result;
      }; // Update markup


      if (update) {
        if (is.string(this.config.controls)) {
          container = replace(container);
        }
      } // Controls container


      let target; // Inject to custom location

      if (is.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      } // Inject into the container by default


      if (!is.element(target)) {
        target = this.elements.container;
      } // Inject controls HTML (needs to be before captions, hence "afterbegin")


      const insertMethod = is.element(container) ? 'insertAdjacentElement' : 'insertAdjacentHTML';
      target[insertMethod]('afterbegin', container); // Find the elements if need be

      if (!is.element(this.elements.controls)) {
        controls.findElements.call(this);
      } // Add pressed property to buttons


      if (!is.empty(this.elements.buttons)) {
        const addProperty = button => {
          const className = this.config.classNames.controlPressed;
          Object.defineProperty(button, 'pressed', {
            enumerable: true,

            get() {
              return hasClass(button, className);
            },

            set(pressed = false) {
              toggleClass(button, className, pressed);
            }

          });
        }; // Toggle classname when pressed property is set


        Object.values(this.elements.buttons).filter(Boolean).forEach(button => {
          if (is.array(button) || is.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      } // Edge sometimes doesn't finish the paint so force a repaint


      if (browser.isEdge) {
        repaint(target);
      } // Setup tooltips


      if (this.config.tooltips.controls) {
        const {
          classNames,
          selectors
        } = this.config;
        const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
        const labels = getElements.call(this, selector);
        Array.from(labels).forEach(label => {
          toggleClass(label, this.config.classNames.hidden, false);
          toggleClass(label, this.config.classNames.tooltip, true);
        });
      }
    }

  };

  // ==========================================================================
  /**
   * Parse a string to a URL object
   * @param {String} input - the URL to be parsed
   * @param {Boolean} safe - failsafe parsing
   */

  function parseUrl(input, safe = true) {
    let url = input;

    if (safe) {
      const parser = document.createElement('a');
      parser.href = url;
      url = parser.href;
    }

    try {
      return new URL(url);
    } catch (e) {
      return null;
    }
  } // Convert object to URLSearchParams

  function buildUrlParams(input) {
    const params = new URLSearchParams();

    if (is.object(input)) {
      Object.entries(input).forEach(([key, value]) => {
        params.set(key, value);
      });
    }

    return params;
  } // Parse URL Parameters

  function parseUrlHash(input) {
    const {
      hash
    } = new URL(input);
    return hash;
  }

  // ==========================================================================
  const captions = {
    // Setup captions
    setup() {
      // Requires UI support
      if (!this.supported.ui) {
        return;
      } // Only Vimeo and HTML5 video supported at this point


      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
        // Clear menu and hide
        if (is.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
          controls.setCaptionsMenu.call(this);
        }

        return;
      } // Inject the container


      if (!is.element(this.elements.captions)) {
        this.elements.captions = createElement('div', getAttributesFromSelector(this.config.selectors.captions));
        insertAfter(this.elements.captions, this.elements.wrapper);
      } // Fix IE captions if CORS is used
      // Fetch captions and inject as blobs instead (data URIs not supported!)


      if (browser.isIE && window.URL) {
        const elements = this.media.querySelectorAll('track');
        Array.from(elements).forEach(track => {
          const src = track.getAttribute('src');
          const url = parseUrl(src);

          if (url !== null && url.hostname !== window.location.href.hostname && ['http:', 'https:'].includes(url.protocol)) {
            fetch(src, 'blob').then(blob => {
              track.setAttribute('src', window.URL.createObjectURL(blob));
            }).catch(() => {
              removeElement(track);
            });
          }
        });
      } // Get and set initial data
      // The "preferred" options are not realized unless / until the wanted language has a match
      // * languages: Array of user's browser languages.
      // * language:  The language preferred by user settings or config
      // * active:    The state preferred by user settings or config
      // * toggled:   The real captions state


      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
      const languages = dedupe(browserLanguages.map(language => language.split('-')[0]));
      let language = (this.storage.get('language') || this.config.captions.language || 'auto').toLowerCase(); // Use first browser language when language is 'auto'

      if (language === 'auto') {
        [language] = languages;
      }

      let active = this.storage.get('captions');

      if (!is.boolean(active)) {
        ({
          active
        } = this.config.captions);
      }

      Object.assign(this.captions, {
        toggled: false,
        active,
        language,
        languages
      }); // Watch changes to textTracks and update captions menu

      if (this.isHTML5) {
        const trackEvents = this.config.captions.update ? 'addtrack removetrack' : 'removetrack';
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      } // Update available languages in list next tick (the event must not be triggered before the listeners)


      setTimeout(captions.update.bind(this), 0);
    },

    // Update available language options in settings based on tracks
    update() {
      const tracks = captions.getTracks.call(this, true); // Get the wanted language

      const {
        active,
        language,
        meta,
        currentTrackNode
      } = this.captions;
      const languageExists = Boolean(tracks.find(track => track.language === language)); // Handle tracks (add event listener and "pseudo"-default)

      if (this.isHTML5 && this.isVideo) {
        tracks.filter(track => !meta.get(track)).forEach(track => {
          this.debug.log('Track added', track); // Attempt to store if the original dom element was "default"

          meta.set(track, {
            default: track.mode === 'showing'
          }); // Turn off native caption rendering to avoid double captions
          // Note: mode='hidden' forces a track to download. To ensure every track
          // isn't downloaded at once, only 'showing' tracks should be reassigned
          // eslint-disable-next-line no-param-reassign

          if (track.mode === 'showing') {
            // eslint-disable-next-line no-param-reassign
            track.mode = 'hidden';
          } // Add event listener for cue changes


          on.call(this, track, 'cuechange', () => captions.updateCues.call(this));
        });
      } // Update language first time it matches, or if the previous matching track was removed


      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      } // Enable or disable captions based on track length


      toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(tracks)); // Update available languages in list

      if (is.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
        controls.setCaptionsMenu.call(this);
      }
    },

    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle(input, passive = true) {
      // If there's no full support
      if (!this.supported.ui) {
        return;
      }

      const {
        toggled
      } = this.captions; // Current state

      const activeClass = this.config.classNames.captions.active; // Get the next state
      // If the method is called without parameter, toggle based on current value

      const active = is.nullOrUndefined(input) ? !toggled : input; // Update state and trigger event

      if (active !== toggled) {
        // When passive, don't override user preferences
        if (!passive) {
          this.captions.active = active;
          this.storage.set({
            captions: active
          });
        } // Force language if the call isn't passive and there is no matching language to toggle to


        if (!this.language && active && !passive) {
          const tracks = captions.getTracks.call(this);
          const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true); // Override user preferences to avoid switching languages if a matching track is added

          this.captions.language = track.language; // Set caption, but don't store in localStorage as user preference

          captions.set.call(this, tracks.indexOf(track));
          return;
        } // Toggle button if it's enabled


        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        } // Add class hook


        toggleClass(this.elements.container, activeClass, active);
        this.captions.toggled = active; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // Trigger event (not used internally)

        triggerEvent.call(this, this.media, active ? 'captionsenabled' : 'captionsdisabled');
      } // Wait for the call stack to clear before setting mode='hidden'
      // on the active track - forcing the browser to download it


      setTimeout(() => {
        if (active && this.captions.toggled) {
          this.captions.currentTrackNode.mode = 'hidden';
        }
      });
    },

    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set(index, passive = true) {
      const tracks = captions.getTracks.call(this); // Disable captions if setting to -1

      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }

      if (!is.number(index)) {
        this.debug.warn('Invalid caption argument', index);
        return;
      }

      if (!(index in tracks)) {
        this.debug.warn('Track not found', index);
        return;
      }

      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        const track = tracks[index];
        const {
          language
        } = track || {}; // Store reference to node for invalidation on remove

        this.captions.currentTrackNode = track; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // When passive, don't override user preferences

        if (!passive) {
          this.captions.language = language;
          this.storage.set({
            language
          });
        } // Handle Vimeo captions


        if (this.isVimeo) {
          this.embed.enableTextTrack(language);
        } // Trigger event


        triggerEvent.call(this, this.media, 'languagechange');
      } // Show captions


      captions.toggle.call(this, true, passive);

      if (this.isHTML5 && this.isVideo) {
        // If we change the active track while a cue is already displayed we need to update it
        captions.updateCues.call(this);
      }
    },

    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage(input, passive = true) {
      if (!is.string(input)) {
        this.debug.warn('Invalid language argument', input);
        return;
      } // Normalize


      const language = input.toLowerCase();
      this.captions.language = language; // Set currentTrack

      const tracks = captions.getTracks.call(this);
      const track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },

    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks(update = false) {
      // Handle media or textTracks missing or null
      const tracks = Array.from((this.media || {}).textTracks || []); // For HTML5, use cache instead of current tracks when it exists (if captions.update is false)
      // Filter out removed tracks and tracks that aren't captions/subtitles (for example metadata)

      return tracks.filter(track => !this.isHTML5 || update || this.captions.meta.has(track)).filter(track => ['captions', 'subtitles'].includes(track.kind));
    },

    // Match tracks based on languages and get the first
    findTrack(languages, force = false) {
      const tracks = captions.getTracks.call(this);

      const sortIsDefault = track => Number((this.captions.meta.get(track) || {}).default);

      const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
      let track;
      languages.every(language => {
        track = sorted.find(t => t.language === language);
        return !track; // Break iteration if there is a match
      }); // If no match is found but is required, get first

      return track || (force ? sorted[0] : undefined);
    },

    // Get the current track
    getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },

    // Get UI label for track
    getLabel(track) {
      let currentTrack = track;

      if (!is.track(currentTrack) && support.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }

      if (is.track(currentTrack)) {
        if (!is.empty(currentTrack.label)) {
          return currentTrack.label;
        }

        if (!is.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }

        return i18n.get('enabled', this.config);
      }

      return i18n.get('disabled', this.config);
    },

    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues(input) {
      // Requires UI
      if (!this.supported.ui) {
        return;
      }

      if (!is.element(this.elements.captions)) {
        this.debug.warn('No captions element to render to');
        return;
      } // Only accept array or empty input


      if (!is.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn('updateCues: Invalid input', input);
        return;
      }

      let cues = input; // Get cues from track

      if (!cues) {
        const track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map(cue => cue.getCueAsHTML()).map(getHTML);
      } // Set new caption text


      const content = cues.map(cueText => cueText.trim()).join('\n');
      const changed = content !== this.elements.captions.innerHTML;

      if (changed) {
        // Empty the container and create a new child element
        emptyElement(this.elements.captions);
        const caption = createElement('span', getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption); // Trigger event

        triggerEvent.call(this, this.media, 'cuechange');
      }
    }

  };

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
      onChange: null
    },
    // Display match time instead of the current time (using source sync points)
    matchTime: false,
    // Set loops
    loop: {
      active: false // start: null,
      // end: null,

    },
    // Speed default and options to display
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: 'auto',
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Editor settings
    editor: {
      enabled: true,
      // Allow Editor?
      target: null,
      // Target Container for Editor (if no container is specified, video editor will be appended to the video container)
      maxZoom: 8 // Default max zoom level

    },
    markers: {
      enabled: true,
      // Allow timeline markers?
      lockToTrimRegion: true // If the trimming tool is enabled prevent markers being added outside of the trimming bar

    },
    // Trim settings
    trim: {
      enabled: true,
      // Allow trim?
      closeEditor: true,
      // Close editor, on close of trimming tool
      maxTrimLength: -1,
      // Limit the maximum length of the trimming region in seconds
      lowerBound: -1,
      // Limit the start time of the trimming region in seconds
      upperBound: -1,
      // Limit the end time of the trimming region in seconds
      offsetContainer: false // Offset the trimming container window, to center the window based on the current time

    },
    mediaFragment: {
      enabled: true // Enable media fragments?

    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback using full viewport/window
      iosNative: false // Use the native fullscreen in iOS (disables custom controls)
      // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
      // Non-ancestors of the player element will be ignored
      // container: null, // defaults to the player element

    },
    // Local storage
    storage: {
      enabled: true,
      key: 'plyr'
    },
    // Default controls
    controls: ['play-large', // 'restart',
    // 'rewind',
    'play', // 'fast-forward',
    // 'frame-rewind',
    // 'frame-forward',
    'progress', 'current-time', // 'duration',
    'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', // 'download',
    // 'trim',
    'fullscreen'],
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
        480: 'SD'
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: 'https://player.vimeo.com/api/player.js',
        iframe: 'https://player.vimeo.com/video/{0}?{1}',
        api: 'https://vimeo.com/api/oembed.json?url={0}'
      },
      youtube: {
        sdk: 'https://www.youtube.com/iframe_api',
        api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}'
      },
      googleIMA: {
        sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
      }
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
      language: null
    },
    // Events to watch and bubble
    events: [// Events to watch on HTML5 media elements and bubble
    // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
    'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart', 'loadeddata', 'loadedmetadata', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking', 'seeked', 'emptied', 'ratechange', 'cuechange', // Custom events
    'download', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready', 'destroyed', // YouTube
    'statechange', // Quality
    'qualitychange', // Ads
    'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted', 'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick', // Preview thumbnails
    'previewthumbnailsloaded', // Editor
    'entereditor', 'exiteditor', 'editorloaded', 'zoomchange', // Markers
    'markeradded', 'markerchange', // Trimming
    'entertrim', 'exittrim', 'trimloaded', 'trimchanging', 'trimchange'],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: 'input, textarea, select, [contenteditable]',
      container: '.plyr',
      controls: {
        container: null,
        wrapper: '.plyr__controls'
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
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: '.plyr__time--current',
        duration: '.plyr__time--duration',
        buffer: '.plyr__progress__buffer',
        loop: '.plyr__progress__loop',
        // Used later
        volume: '.plyr__volume--display'
      },
      progress: '.plyr__progress',
      captions: '.plyr__captions',
      caption: '.plyr__caption'
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
        time: 'plyr__time'
      },
      menu: {
        value: 'plyr__menu__value',
        badge: 'plyr__badge',
        open: 'plyr--menu-open'
      },
      captions: {
        enabled: 'plyr--captions-enabled',
        active: 'plyr--captions-active'
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
        seekHandleLine: 'plyr__editor__seek-handle-line'
      },
      markers: {
        container: 'plyr__markers__container',
        marker: 'plyr__markers__marker',
        label: 'plyr__markers__label'
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
        timeContainerShown: 'plyr__trim-tool__time-container--is-shown'
      },
      fullscreen: {
        enabled: 'plyr--fullscreen-enabled',
        fallback: 'plyr--fullscreen-fallback'
      },
      pip: {
        supported: 'plyr--pip-supported',
        active: 'plyr--pip-active'
      },
      airplay: {
        supported: 'plyr--airplay-supported',
        active: 'plyr--airplay-active'
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
        scrubbingContainerShown: 'plyr__preview-scrubbing--is-shown'
      }
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: 'data-plyr-provider',
        id: 'data-plyr-embed-id'
      }
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: '',
      tagUrl: ''
    },
    // Preview Thumbnails plugin
    previewThumbnails: {
      enabled: false,
      src: '',
      enableScrubbing: true
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
      referrerPolicy: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false
    },
    // YouTube plugin
    youtube: {
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1,
      // Hide logos as much as possible (they still show one in the corner when paused)
      // Custom settings from Plyr
      customControls: true,
      noCookie: false // Whether to use an alternative version of YouTube without cookies

    }
  };

  // ==========================================================================
  // Plyr states
  // ==========================================================================
  const pip = {
    active: 'picture-in-picture',
    inactive: 'inline'
  };

  // ==========================================================================
  // Plyr supported types and providers
  // ==========================================================================
  const providers = {
    html5: 'html5',
    youtube: 'youtube',
    vimeo: 'vimeo'
  };
  const types = {
    audio: 'audio',
    video: 'video'
  };
  /**
   * Get provider by URL
   * @param {String} url
   */

  function getProviderByUrl(url) {
    // YouTube
    if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    } // Vimeo


    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }

    return null;
  }

  // ==========================================================================
  // Console wrapper
  // ==========================================================================
  const noop = () => {};

  class Console {
    constructor(enabled = false) {
      this.enabled = window.console && enabled;

      if (this.enabled) {
        this.log('Debugging enabled');
      }
    }

    get log() {
      // eslint-disable-next-line no-console
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }

    get warn() {
      // eslint-disable-next-line no-console
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }

    get error() {
      // eslint-disable-next-line no-console
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }

  }

  class Fullscreen {
    constructor(player) {
      _defineProperty$1(this, "onChange", () => {
        if (!this.enabled) {
          return;
        } // Update toggle button


        const button = this.player.elements.buttons.fullscreen;

        if (is.element(button)) {
          button.pressed = this.active;
        } // Always trigger events on the plyr / media element (not a fullscreen container) and let them bubble up


        const target = this.target === this.player.media ? this.target : this.player.elements.container; // Trigger an event

        triggerEvent.call(this.player, target, this.active ? 'enterfullscreen' : 'exitfullscreen', true);
      });

      _defineProperty$1(this, "toggleFallback", (toggle = false) => {
        // Store or restore scroll position
        if (toggle) {
          this.scrollPosition = {
            x: window.scrollX || 0,
            y: window.scrollY || 0
          };
        } else {
          window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
        } // Toggle scroll


        document.body.style.overflow = toggle ? 'hidden' : ''; // Toggle class hook

        toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle); // Force full viewport on iPhone X+

        if (browser.isIos) {
          let viewport = document.head.querySelector('meta[name="viewport"]');
          const property = 'viewport-fit=cover'; // Inject the viewport meta if required

          if (!viewport) {
            viewport = document.createElement('meta');
            viewport.setAttribute('name', 'viewport');
          } // Check if the property already exists


          const hasProperty = is.string(viewport.content) && viewport.content.includes(property);

          if (toggle) {
            this.cleanupViewport = !hasProperty;

            if (!hasProperty) {
              viewport.content += `,${property}`;
            }
          } else if (this.cleanupViewport) {
            viewport.content = viewport.content.split(',').filter(part => part.trim() !== property).join(',');
          }
        } // Toggle button and fire events


        this.onChange();
      });

      _defineProperty$1(this, "trapFocus", event => {
        // Bail if iOS, not active, not the tab key
        if (browser.isIos || !this.active || event.key !== 'Tab' || event.keyCode !== 9) {
          return;
        } // Get the current focused element


        const focused = document.activeElement;
        const focusable = getElements.call(this.player, 'a[href], button:not(:disabled), input:not(:disabled), [tabindex]');
        const [first] = focusable;
        const last = focusable[focusable.length - 1];

        if (focused === last && !event.shiftKey) {
          // Move focus to first element that can be tabbed if Shift isn't used
          first.focus();
          event.preventDefault();
        } else if (focused === first && event.shiftKey) {
          // Move focus to last element that can be tabbed if Shift is used
          last.focus();
          event.preventDefault();
        }
      });

      _defineProperty$1(this, "update", () => {
        if (this.enabled) {
          let mode;

          if (this.forceFallback) {
            mode = 'Fallback (forced)';
          } else if (Fullscreen.native) {
            mode = 'Native';
          } else {
            mode = 'Fallback';
          }

          this.player.debug.log(`${mode} fullscreen enabled`);
        } else {
          this.player.debug.log('Fullscreen not supported and fallback disabled');
        } // Add styling hook to show button


        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      });

      _defineProperty$1(this, "enter", () => {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen doesn't need the request step


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.requestFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
        } else if (!Fullscreen.native || this.forceFallback) {
          this.toggleFallback(true);
        } else if (!this.prefix) {
          this.target.requestFullscreen({
            navigationUI: 'hide'
          });
        } else if (!is.empty(this.prefix)) {
          this.target[`${this.prefix}Request${this.property}`]();
        }
      });

      _defineProperty$1(this, "exit", () => {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          this.target.webkitExitFullscreen();
          silencePromise(this.player.play());
        } else if (!Fullscreen.native || this.forceFallback) {
          this.toggleFallback(false);
        } else if (!this.prefix) {
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else if (!is.empty(this.prefix)) {
          const action = this.prefix === 'moz' ? 'Cancel' : 'Exit';
          document[`${this.prefix}${action}${this.property}`]();
        }
      });

      _defineProperty$1(this, "toggle", () => {
        if (!this.active) {
          this.enter();
        } else {
          this.exit();
        }
      });

      // Keep reference to parent
      this.player = player; // Get prefix

      this.prefix = Fullscreen.prefix;
      this.property = Fullscreen.property; // Scroll position

      this.scrollPosition = {
        x: 0,
        y: 0
      }; // Force the use of 'full window/browser' rather than fullscreen

      this.forceFallback = player.config.fullscreen.fallback === 'force'; // Get the fullscreen element
      // Checks container is an ancestor, defaults to null

      this.player.elements.fullscreen = player.config.fullscreen.container && closest$1(this.player.elements.container, player.config.fullscreen.container); // Register event listeners
      // Handle event (incase user presses escape etc)

      on.call(this.player, document, this.prefix === 'ms' ? 'MSFullscreenChange' : `${this.prefix}fullscreenchange`, () => {
        // TODO: Filter for target??
        this.onChange();
      }); // Fullscreen toggle on double click

      on.call(this.player, this.player.elements.container, 'dblclick', event => {
        // Ignore double click in controls
        if (is.element(this.player.elements.controls) && this.player.elements.controls.contains(event.target)) {
          return;
        }

        this.player.listeners.proxy(event, this.toggle, 'fullscreen');
      }); // Tap focus when in fullscreen

      on.call(this, this.player.elements.container, 'keydown', event => this.trapFocus(event)); // Update the UI

      this.update(); // this.toggle = this.toggle.bind(this);
    } // Determine if native supported


    static get native() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    } // If we're actually using native


    get usingNative() {
      return Fullscreen.native && !this.forceFallback;
    } // Get the prefix for handlers


    static get prefix() {
      // No prefix
      if (is.function(document.exitFullscreen)) {
        return '';
      } // Check for fullscreen support by vendor prefix


      let value = '';
      const prefixes = ['webkit', 'moz', 'ms'];
      prefixes.some(pre => {
        if (is.function(document[`${pre}ExitFullscreen`]) || is.function(document[`${pre}CancelFullScreen`])) {
          value = pre;
          return true;
        }

        return false;
      });
      return value;
    }

    static get property() {
      return this.prefix === 'moz' ? 'FullScreen' : 'Fullscreen';
    } // Determine if fullscreen is enabled


    get enabled() {
      return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
    } // Get active state


    get active() {
      if (!this.enabled) {
        return false;
      } // Fallback using classname


      if (!Fullscreen.native || this.forceFallback) {
        return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      }

      const element = !this.prefix ? document.fullscreenElement : document[`${this.prefix}${this.property}Element`];
      return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
    } // Get target element


    get target() {
      return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
    }

  }

  // ==========================================================================
  // Load image avoiding xhr/fetch CORS issues
  // Server status can't be obtained this way unfortunately, so this uses "naturalWidth" to determine if the image has loaded
  // By default it checks if it is at least 1px, but you can add a second argument to change this
  // ==========================================================================
  function loadImage(src, minWidth = 1) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      const handler = () => {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };

      Object.assign(image, {
        onload: handler,
        onerror: handler,
        src
      });
    });
  }

  // ==========================================================================
  const ui = {
    addStyleHook(container) {
      toggleClass(container, this.config.selectors.container.replace('.', ''), true);
      toggleClass(container, this.config.classNames.uiSupported, this.supported.ui);
    },

    // Toggle native HTML5 media controls
    toggleNativeControls(toggle = false) {
      if (toggle && this.isHTML5) {
        this.media.setAttribute('controls', '');
      } else {
        this.media.removeAttribute('controls');
      }
    },

    // Setup the UI
    build() {
      // Re-attach media element listeners
      // TODO: Use event bubbling?
      this.listeners.media(); // Don't setup interface if no support

      if (!this.supported.ui) {
        this.debug.warn(`Basic support only for ${this.provider} ${this.type}`); // Restore native controls

        ui.toggleNativeControls.call(this, true); // Bail

        return;
      } // Inject custom controls if not present


      if (!is.element(this.elements.controls)) {
        // Inject custom controls
        controls.inject.call(this); // Re-attach control listeners

        this.listeners.controls();
      } // Remove native controls


      ui.toggleNativeControls.call(this); // Setup captions for HTML5

      if (this.isHTML5) {
        captions.setup.call(this);
      } // Reset volume


      this.volume = null; // Reset mute state

      this.muted = null; // Reset loop state

      this.loop = null; // Reset quality setting

      this.quality = null; // Reset speed

      this.speed = null; // Reset volume display

      controls.updateVolume.call(this); // Reset time display

      controls.timeUpdate.call(this); // Update the UI

      ui.checkPlaying.call(this); // Check for picture-in-picture support

      toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo); // Check for airplay support

      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5); // Add iOS class

      toggleClass(this.elements.container, this.config.classNames.isIos, browser.isIos); // Add touch class

      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch); // Ready for API calls

      this.ready = true; // Ready event at end of execution stack

      setTimeout(() => {
        triggerEvent.call(this, this.media, 'ready');
      }, 0); // Set the title

      ui.setTitle.call(this); // Assure the poster image is set, if the property was added before the element was created

      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(() => {});
      } // Manually set the duration if user has overridden it.
      // The event listeners for it doesn't get called if preload is disabled (#701)


      if (this.config.duration) {
        controls.durationUpdate.call(this);
      }
    },

    // Setup aria attribute for play and iframe title
    setTitle() {
      // Find the current text
      let label = i18n.get('play', this.config); // If there's a media title set, use that for the label

      if (is.string(this.config.title) && !is.empty(this.config.title)) {
        label += `, ${this.config.title}`;
      } // If there's a play button, set label


      Array.from(this.elements.buttons.play || []).forEach(button => {
        button.setAttribute('aria-label', label);
      }); // Set iframe title
      // https://github.com/sampotts/plyr/issues/124

      if (this.isEmbed) {
        const iframe = getElement.call(this, 'iframe');

        if (!is.element(iframe)) {
          return;
        } // Default to media type


        const title = !is.empty(this.config.title) ? this.config.title : 'video';
        const format = i18n.get('frameTitle', this.config);
        iframe.setAttribute('title', format.replace('{title}', title));
      }
    },

    // Toggle poster
    togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },

    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster(poster, passive = true) {
      // Don't override if call is passive
      if (passive && this.poster) {
        return Promise.reject(new Error('Poster already set'));
      } // Set property synchronously to respect the call order


      this.media.setAttribute('data-poster', poster); // Show the poster

      this.elements.poster.removeAttribute('hidden'); // Wait until ui is ready

      return ready.call(this) // Load image
      .then(() => loadImage(poster)).catch(err => {
        // Hide poster on error unless it's been set by another call
        if (poster === this.poster) {
          ui.togglePoster.call(this, false);
        } // Rethrow


        throw err;
      }).then(() => {
        // Prevent race conditions
        if (poster !== this.poster) {
          throw new Error('setPoster cancelled by later call to setPoster');
        }
      }).then(() => {
        Object.assign(this.elements.poster.style, {
          backgroundImage: `url('${poster}')`,
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ''
        });
        ui.togglePoster.call(this, true);
        return poster;
      });
    },

    // Check playing state
    checkPlaying(event) {
      // Class hooks
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped); // Set state

      Array.from(this.elements.buttons.play || []).forEach(target => {
        Object.assign(target, {
          pressed: this.playing
        });
        target.setAttribute('aria-label', i18n.get(this.playing ? 'pause' : 'play', this.config));
      }); // Only update controls on non timeupdate events

      if (is.event(event) && event.type === 'timeupdate') {
        return;
      } // Toggle controls


      ui.toggleControls.call(this);
    },

    // Check if media is loading
    checkLoading(event) {
      this.loading = ['stalled', 'waiting'].includes(event.type); // Clear timer

      clearTimeout(this.timers.loading); // Timer to prevent flicker when seeking

      this.timers.loading = setTimeout(() => {
        // Update progress bar loading class state
        toggleClass(this.elements.container, this.config.classNames.loading, this.loading); // Update controls visibility

        ui.toggleControls.call(this);
      }, this.loading ? 250 : 0);
    },

    // Toggle controls based on state and `force` argument
    toggleControls(force) {
      const {
        controls: controlsElement
      } = this.elements;

      if (controlsElement && this.config.hideControls) {
        // Don't hide controls if a touch-device user recently seeked. (Must be limited to touch devices, or it occasionally prevents desktop controls from hiding.)
        const recentTouchSeek = this.touch && this.lastSeekTime + 2000 > Date.now(); // Show controls if force, loading, paused, button interaction, or recent seek, otherwise hide

        this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
      }
    },

    // Migrate any custom properties from the media to the parent
    migrateStyles() {
      // Loop through values (as they are the keys when the object is spread 🤔)
      Object.values({ ...this.media.style
      }) // We're only fussed about Plyr specific properties
      .filter(key => !is.empty(key) && is.string(key) && key.startsWith('--plyr')).forEach(key => {
        // Set on the container
        this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key)); // Clean up from media element

        this.media.style.removeProperty(key);
      }); // Remove attribute if empty

      if (is.empty(this.media.style)) {
        this.media.removeAttribute('style');
      }
    }

  };

  class Listeners {
    constructor(_player) {
      _defineProperty$1(this, "firstTouch", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        player.touch = true; // Add touch class

        toggleClass(elements.container, player.config.classNames.isTouch, true);
      });

      _defineProperty$1(this, "setTabFocus", event => {
        const {
          player
        } = this;
        const {
          elements
        } = player;
        clearTimeout(this.focusTimer); // Ignore any key other than tab

        if (event.type === 'keydown' && event.which !== 9) {
          return;
        } // Store reference to event timeStamp


        if (event.type === 'keydown') {
          this.lastKeyDown = event.timeStamp;
        } // Remove current classes


        const removeCurrent = () => {
          const className = player.config.classNames.tabFocus;
          const current = getElements.call(player, `.${className}`);
          toggleClass(current, className, false);
        }; // Determine if a key was pressed to trigger this event


        const wasKeyDown = event.timeStamp - this.lastKeyDown <= 20; // Ignore focus events if a key was pressed prior

        if (event.type === 'focus' && !wasKeyDown) {
          return;
        } // Remove all current


        removeCurrent(); // Delay the adding of classname until the focus has changed
        // This event fires before the focusin event

        if (event.type !== 'focusout') {
          this.focusTimer = setTimeout(() => {
            const focused = document.activeElement; // Ignore if current focus element isn't inside the player

            if (!elements.container.contains(focused)) {
              return;
            }

            toggleClass(document.activeElement, player.config.classNames.tabFocus, true);
          }, 10);
        }
      });

      _defineProperty$1(this, "global", (toggle = true) => {
        const {
          player
        } = this; // Keyboard shortcuts

        if (player.config.keyboard.global) {
          toggleListener.call(player, window, 'keydown keyup', this.handleKey, toggle, false);
        } // Click anywhere closes menu


        toggleListener.call(player, document.body, 'click', this.toggleMenu, toggle); // Detect touch by events

        once.call(player, document.body, 'touchstart', this.firstTouch); // Tab focus detection

        toggleListener.call(player, document.body, 'keydown focus blur focusout', this.setTabFocus, toggle, false, true);
      });

      _defineProperty$1(this, "container", () => {
        const {
          player
        } = this;
        const {
          config,
          elements,
          timers
        } = player; // Keyboard shortcuts

        if (!config.keyboard.global && config.keyboard.focused) {
          on.call(player, elements.container, 'keydown keyup', this.handleKey, false);
        } // Toggle controls on mouse events and entering fullscreen


        on.call(player, elements.container, 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen', event => {
          const {
            controls: controlsElement
          } = elements; // Remove button states for fullscreen

          if (controlsElement && event.type === 'enterfullscreen') {
            controlsElement.pressed = false;
            controlsElement.hover = false;
          } // Show, then hide after a timeout unless another control event occurs


          const show = ['touchstart', 'touchmove', 'mousemove'].includes(event.type);
          let delay = 0;

          if (show) {
            ui.toggleControls.call(player, true); // Use longer timeout for touch devices

            delay = player.touch ? 3000 : 2000;
          } // Clear timer


          clearTimeout(timers.controls); // Set new timer to prevent flicker when seeking

          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        }); // Set a gutter for Vimeo

        const setGutter = (ratio, padding, toggle) => {
          if (!player.isVimeo || player.config.vimeo.premium) {
            return;
          }

          const target = player.elements.wrapper.firstChild;
          const [, y] = ratio;
          const [videoX, videoY] = getAspectRatio.call(player);
          target.style.maxWidth = toggle ? `${y / videoY * videoX}px` : null;
          target.style.margin = toggle ? '0 auto' : null;
        }; // Resize on fullscreen change


        const setPlayerSize = measure => {
          // If we don't need to measure the viewport
          if (!measure) {
            return setAspectRatio.call(player);
          }

          const rect = elements.container.getBoundingClientRect();
          const {
            width,
            height
          } = rect;
          return setAspectRatio.call(player, `${width}:${height}`);
        };

        const resized = () => {
          clearTimeout(timers.resized);
          timers.resized = setTimeout(setPlayerSize, 50);
        };

        on.call(player, elements.container, 'enterfullscreen exitfullscreen', event => {
          const {
            target,
            usingNative
          } = player.fullscreen; // Ignore events not from target

          if (target !== elements.container) {
            return;
          } // If it's not an embed and no ratio specified


          if (!player.isEmbed && is.empty(player.config.ratio)) {
            return;
          }

          const isEnter = event.type === 'enterfullscreen'; // Set the player size when entering fullscreen to viewport size

          const {
            padding,
            ratio
          } = setPlayerSize(isEnter); // Set Vimeo gutter

          setGutter(ratio, padding, isEnter); // Horrible hack for Safari 14 not repainting properly on entering fullscreen

          if (isEnter) {
            setTimeout(() => repaint(elements.container), 100);
          } // If not using native browser fullscreen API, we need to check for resizes of viewport


          if (!usingNative) {
            if (isEnter) {
              on.call(player, window, 'resize', resized);
            } else {
              off.call(player, window, 'resize', resized);
            }
          }
        });
      });

      _defineProperty$1(this, "media", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player; // Time change on media

        on.call(player, player.media, 'timeupdate seeking seeked', event => controls.timeUpdate.call(player, event)); // Display duration

        on.call(player, player.media, 'durationchange loadeddata loadedmetadata', event => controls.durationUpdate.call(player, event)); // Handle the media finishing

        on.call(player, player.media, 'ended', () => {
          // Show poster on end
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            // Restart
            player.restart(); // Call pause otherwise IE11 will start playing the video again

            player.pause();
          }
        }); // Check for buffer progress

        on.call(player, player.media, 'progress playing seeking seeked', event => controls.updateProgress.call(player, event)); // Handle volume changes

        on.call(player, player.media, 'volumechange', event => controls.updateVolume.call(player, event)); // Handle play/pause

        on.call(player, player.media, 'playing play pause ended emptied timeupdate', event => ui.checkPlaying.call(player, event)); // Handle media fragments end event, as event is not fired by default

        on.call(player, player.media, 'timeupdate seeking seeked', () => {
          if (!player.mediaFragment.enabled || !player.duration || player.currentTime < player.duration) return; // Media fragments are not automatically stopped at end of playback

          player.pause(); // Manually trigger default event ended as ended event will not trigger for media fragments

          triggerEvent.call(player, player.media, 'ended');
        }); // Loading state

        on.call(player, player.media, 'waiting canplay seeked playing', event => ui.checkLoading.call(player, event)); // Click video

        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          // Re-fetch the wrapper
          const wrapper = getElement.call(player, `.${player.config.classNames.video}`); // Bail if there's no wrapper (this should never happen)

          if (!is.element(wrapper)) {
            return;
          } // On click play, pause or restart


          on.call(player, elements.container, 'click', event => {
            const targets = [elements.container, wrapper]; // Ignore if click if not container or in video wrapper

            if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
              return;
            } // Touch devices will just show controls (if hidden)


            if (player.touch && player.config.hideControls) {
              return;
            }

            if (player.ended) {
              this.proxy(event, player.restart, 'restart');
              this.proxy(event, () => {
                silencePromise(player.play());
              }, 'play');
            } else {
              this.proxy(event, () => {
                silencePromise(player.togglePlay());
              }, 'play');
            }
          });
        } // Disable right click


        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(player, elements.wrapper, 'contextmenu', event => {
            event.preventDefault();
          }, false);
        } // Volume change


        on.call(player, player.media, 'volumechange', () => {
          // Save to storage
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        }); // Speed change

        on.call(player, player.media, 'ratechange', () => {
          // Update UI
          controls.updateSetting.call(player, 'speed'); // Save to storage

          player.storage.set({
            speed: player.speed
          });
        }); // Quality change

        on.call(player, player.media, 'qualitychange', event => {
          // Update UI
          controls.updateSetting.call(player, 'quality', null, event.detail.quality);
        }); // Update download link when ready and if quality changes

        on.call(player, player.media, 'ready qualitychange', () => {
          controls.setDownloadUrl.call(player);
        }); // Proxy events to container
        // Bubble up key events for Edge

        const proxyEvents = player.config.events.concat(['keyup', 'keydown']).join(' ');
        on.call(player, player.media, proxyEvents, event => {
          let {
            detail = {}
          } = event; // Get error details from media

          if (event.type === 'error') {
            detail = player.media.error;
          }

          triggerEvent.call(player, elements.container, event.type, true, detail);
        });
      });

      _defineProperty$1(this, "proxy", (event, defaultHandler, customHandlerKey) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        let returned = true; // Execute custom handler

        if (hasCustomHandler) {
          returned = customHandler.call(player, event);
        } // Only call default handler if not prevented in custom handler


        if (returned !== false && is.function(defaultHandler)) {
          defaultHandler.call(player, event);
        }
      });

      _defineProperty$1(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
        const {
          player
        } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is.function(customHandler);
        on.call(player, element, type, event => this.proxy(event, defaultHandler, customHandlerKey), passive && !hasCustomHandler);
      });

      _defineProperty$1(this, "controls", () => {
        const {
          player
        } = this;
        const {
          elements
        } = player; // IE doesn't support input event, so we fallback to change

        const inputEvent = browser.isIE ? 'change' : 'input'; // Play/pause toggle

        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach(button => {
            this.bind(button, 'click', () => {
              silencePromise(player.togglePlay());
            }, 'play');
          });
        } // Pause


        this.bind(elements.buttons.restart, 'click', player.restart, 'restart'); // Rewind

        this.bind(elements.buttons.rewind, 'click', () => {
          // Record seek time so we can prevent hiding controls for a few seconds after rewind
          player.lastSeekTime = Date.now();
          player.rewind();
        }, 'rewind'); // Rewind

        this.bind(elements.buttons.fastForward, 'click', () => {
          // Record seek time so we can prevent hiding controls for a few seconds after fast forward
          player.lastSeekTime = Date.now();
          player.forward();
        }, 'fastForward'); // Frame Back

        this.bind(elements.buttons.frameRewind, 'click', player.frameRewind, 'rewind'); // Frame Forward

        this.bind(elements.buttons.frameForward, 'click', player.frameForward, 'fastForward'); // Mute toggle

        this.bind(elements.buttons.mute, 'click', () => {
          player.muted = !player.muted;
        }, 'mute'); // Captions toggle

        this.bind(elements.buttons.captions, 'click', () => player.toggleCaptions()); // Download
        // Note: For media fragments the whole video will be downloaded

        this.bind(elements.buttons.download, 'click', () => {
          triggerEvent.call(player, player.media, 'download');
        }, 'download'); // Trim toggle

        this.bind(elements.buttons.trim, 'click', () => {
          player.trim.toggle();
        }, 'trim'); // Fullscreen toggle

        this.bind(elements.buttons.fullscreen, 'click', () => {
          player.fullscreen.toggle();
        }, 'fullscreen'); // Picture-in-Picture

        this.bind(elements.buttons.pip, 'click', () => {
          player.pip = 'toggle';
        }, 'pip'); // Airplay

        this.bind(elements.buttons.airplay, 'click', player.airplay, 'airplay'); // Settings menu - click toggle

        this.bind(elements.buttons.settings, 'click', event => {
          // Prevent the document click listener closing the menu
          event.stopPropagation();
          event.preventDefault();
          controls.toggleMenu.call(player, event);
        }, null, false); // Can't be passive as we're preventing default
        // Settings menu - keyboard toggle
        // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143

        this.bind(elements.buttons.settings, 'keyup', event => {
          const code = event.which; // We only care about space and return

          if (![13, 32].includes(code)) {
            return;
          } // Because return triggers a click anyway, all we need to do is set focus


          if (code === 13) {
            controls.focusFirstMenuItem.call(player, null, true);
            return;
          } // Prevent scroll


          event.preventDefault(); // Prevent playing video (Firefox)

          event.stopPropagation(); // Toggle menu

          controls.toggleMenu.call(player, event);
        }, null, false // Can't be passive as we're preventing default
        ); // Escape closes menu

        this.bind(elements.settings.menu, 'keydown', event => {
          if (event.which === 27) {
            controls.toggleMenu.call(player, event);
          }
        }); // Set range input alternative "value", which matches the tooltip time (#954)

        this.bind(elements.inputs.seek, 'mousedown mousemove', event => {
          const rect = elements.progress.getBoundingClientRect();
          const percent = 100 / rect.width * (event.pageX - rect.left);
          event.currentTarget.setAttribute('seek-value', percent);
        }); // Pause while seeking

        this.bind(elements.inputs.seek, 'mousedown mouseup keydown keyup touchstart touchend', event => {
          const seek = event.currentTarget;
          const code = event.keyCode ? event.keyCode : event.which;
          const attribute = 'play-on-seeked';

          if (is.keyboardEvent(event) && code !== 39 && code !== 37) {
            return;
          } // Record seek time so we can prevent hiding controls for a few seconds after seek


          player.lastSeekTime = Date.now(); // Was playing before?

          const play = seek.hasAttribute(attribute); // Done seeking

          const done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback

          if (play && done) {
            seek.removeAttribute(attribute);
            silencePromise(player.play());
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, '');
            player.pause();
          }
        }); // Fix range inputs on iOS
        // Super weird iOS bug where after you interact with an <input type="range">,
        // it takes over further interactions on the page. This is a hack

        if (browser.isIos) {
          const inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach(input => this.bind(input, inputEvent, event => repaint(event.target)));
        } // Seek


        this.bind(elements.inputs.seek, inputEvent, event => {
          const seek = event.currentTarget; // If it exists, use seek-value instead of "value" for consistency with tooltip time (#954)

          let seekTo = seek.getAttribute('seek-value');

          if (is.empty(seekTo)) {
            seekTo = seek.value;
          }

          seek.removeAttribute('seek-value');
          player.currentTime = seekTo / seek.max * player.duration;
        }, 'seek'); // Seek tooltip

        this.bind(elements.progress, 'mouseenter mouseleave mousemove', event => controls.updateSeekTooltip.call(player, event)); // Preview thumbnails plugin
        // TODO: Really need to work on some sort of plug-in wide event bus or pub-sub for this

        this.bind(elements.progress, 'mousemove touchmove', event => {
          const {
            previewThumbnails
          } = player;
          const {
            enableScrubbing
          } = player.config.previewThumbnails;

          if (previewThumbnails && previewThumbnails.loaded && (!previewThumbnails.mouseDown || enableScrubbing)) {
            previewThumbnails.startMove(event);
          }
        }); // Hide thumbnail preview - on mouse click, mouse leave, and video play/seek. All four are required, e.g., for buffering

        this.bind(elements.progress, 'mouseleave touchend click', () => {
          const {
            previewThumbnails
          } = player;
          const {
            enableScrubbing
          } = player.config.previewThumbnails;

          if (previewThumbnails && previewThumbnails.loaded && (!previewThumbnails.mouseDown || enableScrubbing)) {
            previewThumbnails.endMove(false, true);
          }
        }); // Show scrubbing preview

        this.bind(elements.progress, 'mousedown touchstart', event => {
          const {
            previewThumbnails
          } = player;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startScrubbing(event);
          }
        });
        this.bind(elements.progress, 'mouseup touchend', event => {
          const {
            previewThumbnails
          } = player;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endScrubbing(event);
          }
        }); // Polyfill for lower fill in <input type="range"> for webkit

        if (browser.isWebkit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach(element => {
            this.bind(element, 'input', event => controls.updateRangeFill.call(player, event.target));
          });
        } // Current time invert
        // Only if one time element is used for both currentTime and duration


        if (player.config.toggleInvert && !is.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, 'click', () => {
            // Do nothing if we're at the start
            if (player.currentTime === 0) {
              return;
            }

            player.config.invertTime = !player.config.invertTime;
            controls.timeUpdate.call(player);
          });
        } // Volume


        this.bind(elements.inputs.volume, inputEvent, event => {
          player.volume = event.target.value;
        }, 'volume'); // Update controls.hover state (used for ui.toggleControls to avoid hiding when interacting)

        this.bind(elements.controls, 'mouseenter mouseleave', event => {
          elements.controls.hover = !player.touch && event.type === 'mouseenter';
        }); // Also update controls.hover state for any non-player children of fullscreen element (as above)

        if (elements.fullscreen) {
          Array.from(elements.fullscreen.children).filter(c => !c.contains(elements.container)).forEach(child => {
            this.bind(child, 'mouseenter mouseleave', event => {
              elements.controls.hover = !player.touch && event.type === 'mouseenter';
            });
          });
        } // Update controls.pressed state (used for ui.toggleControls to avoid hiding when interacting)


        this.bind(elements.controls, 'mousedown mouseup touchstart touchend touchcancel', event => {
          elements.controls.pressed = ['mousedown', 'touchstart'].includes(event.type);
        }); // Show controls when they receive focus (e.g., when using keyboard tab key)

        this.bind(elements.controls, 'focusin', () => {
          const {
            config,
            timers
          } = player; // Skip transition to prevent focus from scrolling the parent element

          toggleClass(elements.controls, config.classNames.noTransition, true); // Toggle

          ui.toggleControls.call(player, true); // Restore transition

          setTimeout(() => {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0); // Delay a little more for mouse users

          const delay = this.touch ? 3000 : 4000; // Clear timer

          clearTimeout(timers.controls); // Hide again after delay

          timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
        }); // Mouse wheel for volume

        this.bind(elements.inputs.volume, 'wheel', event => {
          // Detect "natural" scroll - suppored on OS X Safari only
          // Other browsers on OS X will be inverted until support improves
          const inverted = event.webkitDirectionInvertedFromDevice; // Get delta from event. Invert if `inverted` is true

          const [x, y] = [event.deltaX, -event.deltaY].map(value => inverted ? -value : value); // Using the biggest delta, normalize to 1 or -1 (or 0 if no delta)

          const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y); // Change the volume by 2%

          player.increaseVolume(direction / 50); // Don't break page scrolling at max and min

          const {
            volume
          } = player.media;

          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event.preventDefault();
          }
        }, 'volume', false);
      });

      this.player = _player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.setTabFocus = this.setTabFocus.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    } // Handle key presses


    handleKey(event) {
      const {
        player
      } = this;
      const {
        elements
      } = player;
      const code = event.keyCode ? event.keyCode : event.which;
      const pressed = event.type === 'keydown';
      const repeat = pressed && code === this.lastKey; // Bail if a modifier key is set

      if (event.altKey || event.shiftKey) {
        return;
      } // If the event is bubbled from the media element
      // Firefox doesn't get the keycode for whatever reason


      if (!is.number(code)) {
        return;
      } // Seek by the number keys


      const seekByKey = () => {
        // Divide the max duration into 10th's and times by the number value
        player.currentTime = player.duration / 10 * (code - 48);
      }; // Handle the key on keydown
      // Reset on keyup


      if (pressed) {
        // Check focused element
        // and if the focused element is not editable (e.g. text input)
        // and any that accept key input http://webaim.org/techniques/keyboard/
        const focused = document.activeElement;

        if (is.element(focused)) {
          const {
            editable
          } = player.config.selectors;
          const {
            seek
          } = elements.inputs;

          if (focused !== seek && matches(focused, editable)) {
            return;
          }

          if (event.which === 32 && matches(focused, 'button, [role^="menuitem"]')) {
            return;
          }
        } // Which keycodes should we prevent default


        const preventDefault = [32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79]; // If the code is found prevent default (e.g. prevent scrolling for arrows)

        if (preventDefault.includes(code)) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (event.ctrlKey || event.metaKey) {
          switch (code) {
            case 39:
              // Arrow forward
              player.frameForward();
              break;

            case 37:
              // Arrow Back
              player.frameRewind();
              break;
          }

          return;
        }

        switch (code) {
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            // 0-9
            if (!repeat) {
              seekByKey();
            }

            break;

          case 32:
          case 75:
            // Space and K key
            if (!repeat) {
              // Manually trigger restart for media fragment
              if (player.mediaFragment.active && player.ended) this.proxy(event, player.restart, 'restart');
              silencePromise(player.togglePlay());
            }

            break;

          case 38:
            // Arrow up
            player.increaseVolume(0.1);
            break;

          case 40:
            // Arrow down
            player.decreaseVolume(0.1);
            break;

          case 77:
            // M key
            if (!repeat) {
              player.muted = !player.muted;
            }

            break;

          case 39:
            // Arrow forward
            player.forward();
            break;

          case 37:
            // Arrow back
            player.rewind();
            break;

          case 84:
            // T key
            player.trim.toggle();
            break;

          case 70:
            // F key
            player.fullscreen.toggle();
            break;

          case 67:
            // C key
            if (!repeat) {
              player.toggleCaptions();
            }

            break;

          case 76:
            // L key
            player.loop = !player.loop;
            break;

          case 73:
            // I key
            player.trim.setTrimStart();
            break;

          case 79:
            // O key
            player.trim.setTrimEnd();
            break;
        } // Escape is handle natively when in full screen
        // So we only need to worry about non native


        if (code === 27 && !player.fullscreen.usingNative && player.fullscreen.active) {
          player.fullscreen.toggle();
        } // Store last code for next cycle


        this.lastKey = code;
      } else {
        this.lastKey = null;
      }
    } // Toggle menu


    toggleMenu(event) {
      controls.toggleMenu.call(this.player, event);
    } // Device is touch enabled


    editor() {
      const {
        timeline
      } = this.player.editor.elements.container;
      const {
        editor
      } = this.player; // Stores setInterval for checking the timeline position, so can be cleaned up

      let timelineInterval; // IE doesn't support input event, so we fallback to change

      const inputEvent = browser.isIE ? 'change' : 'input'; // Use event listener to support IE, Edge and early versions of Safari

      if ('ResizeObserver' in window) {
        new ResizeObserver(() => {
          if (editor.active) {
            editor.setVideoTimelimeContent();
          }
        }).observe(timeline);
      } else {
        window.addEventListener('resize', () => {
          if (editor.active) {
            editor.setVideoTimelimeContent();
          }
        });
      } // Set seeking start


      this.bind(timeline, 'mousedown touchstart', event => {
        if (editor.active) {
          editor.setSeeking(event);

          if (!this.player.trim.editing) {
            // Adjust timeline position when we get near the end of the timeline
            timelineInterval = setInterval(() => editor.setTimelineOffset(true), 50);
          }
        }
      }); // Set seeking end

      this.bind(document.body, 'mouseup touchend', event => {
        if (editor.active) {
          editor.setSeeking(event);
        } // End check for adjusting the timeline position when near the end of the timeline


        clearInterval(timelineInterval);
      }); // Update seek position

      this.bind(document.body, 'mousemove touchmove', event => {
        if (editor.seeking) {
          editor.setSeekTime(event);
        }
      }); // Zoom Timeline

      this.bind(editor.elements.container.controls.zoomContainer.zoom, inputEvent, event => {
        if (editor.active) {
          editor.setZoom(event);
        }
      }); // Zoom Out Control

      this.bind(editor.elements.container.controls.zoomContainer.zoomOut, 'click', event => {
        editor.setZoom(event);
      }); // Zoom Out Control

      this.bind(editor.elements.container.controls.zoomContainer.zoomIn, 'click', event => {
        editor.setZoom(event);
      }); // Zoom timeline

      this.bind(editor.elements.container, 'wheel', event => {
        event.preventDefault();

        if (editor.active) {
          editor.setZoom(event);
        }
      }, 'editor', false);
      this.bind(timeline.seekHandle, 'mousedown mouseup keydown keyup touchstart touchend', event => {
        const {
          player
        } = this;
        const seek = event.currentTarget;
        const code = event.keyCode ? event.keyCode : event.which;
        const attribute = 'play-on-seeked';

        if (is.keyboardEvent(event) && code !== 39 && code !== 37) {
          return;
        } // Record seek time so we can prevent hiding controls for a few seconds after seek


        player.lastSeekTime = Date.now(); // Was playing before?

        const play = seek.hasAttribute(attribute); // Done seeking

        const done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback

        if (play && done) {
          seek.removeAttribute(attribute);
          silencePromise(player.play());
        } else if (!done && player.playing) {
          seek.setAttribute(attribute, '');
          player.pause();
        }
      }); // Update seek-value attribute on mousemove

      this.bind(timeline, 'mousedown mousemove', event => {
        if (!this.player.editor.seeking) return;
        const rect = timeline.getBoundingClientRect();
        const percent = 100 / rect.width * (event.pageX - rect.left);
        timeline.seekHandle.setAttribute('seek-value', percent); // Update video seek value as well

        this.player.elements.inputs.seek.setAttribute('seek-value', percent);
      });
      this.player.on('timeupdate seeking seeked', () => {
        editor.setSeekPosition();
      });
    } // Run default and custom handlers


  }

  var loadjs_umd = createCommonjsModule(function (module, exports) {
    (function (root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function () {
      /**
       * Global dependencies.
       * @global {Object} document - DOM
       */
      var devnull = function () {},
          bundleIdCache = {},
          bundleResultCache = {},
          bundleCallbackQueue = {};
      /**
       * Subscribe to bundle load event.
       * @param {string[]} bundleIds - Bundle ids
       * @param {Function} callbackFn - The callback function
       */


      function subscribe(bundleIds, callbackFn) {
        // listify
        bundleIds = bundleIds.push ? bundleIds : [bundleIds];
        var depsNotFound = [],
            i = bundleIds.length,
            numWaiting = i,
            fn,
            bundleId,
            r,
            q; // define callback function

        fn = function (bundleId, pathsNotFound) {
          if (pathsNotFound.length) depsNotFound.push(bundleId);
          numWaiting--;
          if (!numWaiting) callbackFn(depsNotFound);
        }; // register callback


        while (i--) {
          bundleId = bundleIds[i]; // execute callback if in result cache

          r = bundleResultCache[bundleId];

          if (r) {
            fn(bundleId, r);
            continue;
          } // add to callback queue


          q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
          q.push(fn);
        }
      }
      /**
       * Publish bundle load event.
       * @param {string} bundleId - Bundle id
       * @param {string[]} pathsNotFound - List of files not found
       */


      function publish(bundleId, pathsNotFound) {
        // exit if id isn't defined
        if (!bundleId) return;
        var q = bundleCallbackQueue[bundleId]; // cache result

        bundleResultCache[bundleId] = pathsNotFound; // exit if queue is empty

        if (!q) return; // empty callback queue

        while (q.length) {
          q[0](bundleId, pathsNotFound);
          q.splice(0, 1);
        }
      }
      /**
       * Execute callbacks.
       * @param {Object or Function} args - The callback args
       * @param {string[]} depsNotFound - List of dependencies not found
       */


      function executeCallbacks(args, depsNotFound) {
        // accept function as argument
        if (args.call) args = {
          success: args
        }; // success and error callbacks

        if (depsNotFound.length) (args.error || devnull)(depsNotFound);else (args.success || devnull)(args);
      }
      /**
       * Load individual file.
       * @param {string} path - The file path
       * @param {Function} callbackFn - The callback function
       */


      function loadFile(path, callbackFn, args, numTries) {
        var doc = document,
            async = args.async,
            maxTries = (args.numRetries || 0) + 1,
            beforeCallbackFn = args.before || devnull,
            pathname = path.replace(/[\?|#].*$/, ''),
            pathStripped = path.replace(/^(css|img)!/, ''),
            isLegacyIECss,
            e;
        numTries = numTries || 0;

        if (/(^css!|\.css$)/.test(pathname)) {
          // css
          e = doc.createElement('link');
          e.rel = 'stylesheet';
          e.href = pathStripped; // tag IE9+

          isLegacyIECss = 'hideFocus' in e; // use preload in IE Edge (to detect load errors)

          if (isLegacyIECss && e.relList) {
            isLegacyIECss = 0;
            e.rel = 'preload';
            e.as = 'style';
          }
        } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
          // image
          e = doc.createElement('img');
          e.src = pathStripped;
        } else {
          // javascript
          e = doc.createElement('script');
          e.src = path;
          e.async = async === undefined ? true : async;
        }

        e.onload = e.onerror = e.onbeforeload = function (ev) {
          var result = ev.type[0]; // treat empty stylesheets as failures to get around lack of onerror
          // support in IE9-11

          if (isLegacyIECss) {
            try {
              if (!e.sheet.cssText.length) result = 'e';
            } catch (x) {
              // sheets objects created from load errors don't allow access to
              // `cssText` (unless error is Code:18 SecurityError)
              if (x.code != 18) result = 'e';
            }
          } // handle retries in case of load failure


          if (result == 'e') {
            // increment counter
            numTries += 1; // exit function and try again

            if (numTries < maxTries) {
              return loadFile(path, callbackFn, args, numTries);
            }
          } else if (e.rel == 'preload' && e.as == 'style') {
            // activate preloaded stylesheets
            return e.rel = 'stylesheet'; // jshint ignore:line
          } // execute callback


          callbackFn(path, result, ev.defaultPrevented);
        }; // add to document (unless callback returns `false`)


        if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
      }
      /**
       * Load multiple files.
       * @param {string[]} paths - The file paths
       * @param {Function} callbackFn - The callback function
       */


      function loadFiles(paths, callbackFn, args) {
        // listify paths
        paths = paths.push ? paths : [paths];
        var numWaiting = paths.length,
            x = numWaiting,
            pathsNotFound = [],
            fn,
            i; // define callback function

        fn = function (path, result, defaultPrevented) {
          // handle error
          if (result == 'e') pathsNotFound.push(path); // handle beforeload event. If defaultPrevented then that means the load
          // will be blocked (ex. Ghostery/ABP on Safari)

          if (result == 'b') {
            if (defaultPrevented) pathsNotFound.push(path);else return;
          }

          numWaiting--;
          if (!numWaiting) callbackFn(pathsNotFound);
        }; // load scripts


        for (i = 0; i < x; i++) loadFile(paths[i], fn, args);
      }
      /**
       * Initiate script load and register bundle.
       * @param {(string|string[])} paths - The file paths
       * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
       *   callback or (3) object literal with success/error arguments, numRetries,
       *   etc.
       * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
       *   literal with success/error arguments, numRetries, etc.
       */


      function loadjs(paths, arg1, arg2) {
        var bundleId, args; // bundleId (if string)

        if (arg1 && arg1.trim) bundleId = arg1; // args (default is {})

        args = (bundleId ? arg2 : arg1) || {}; // throw error if bundle is already defined

        if (bundleId) {
          if (bundleId in bundleIdCache) {
            throw "LoadJS";
          } else {
            bundleIdCache[bundleId] = true;
          }
        }

        function loadFn(resolve, reject) {
          loadFiles(paths, function (pathsNotFound) {
            // execute callbacks
            executeCallbacks(args, pathsNotFound); // resolve Promise

            if (resolve) {
              executeCallbacks({
                success: resolve,
                error: reject
              }, pathsNotFound);
            } // publish bundle load event


            publish(bundleId, pathsNotFound);
          }, args);
        }

        if (args.returnPromise) return new Promise(loadFn);else loadFn();
      }
      /**
       * Execute callbacks when dependencies have been satisfied.
       * @param {(string|string[])} deps - List of bundle ids
       * @param {Object} args - success/error arguments
       */


      loadjs.ready = function ready(deps, args) {
        // subscribe to bundle load event
        subscribe(deps, function (depsNotFound) {
          // execute callbacks
          executeCallbacks(args, depsNotFound);
        });
        return loadjs;
      };
      /**
       * Manually satisfy bundle dependencies.
       * @param {string} bundleId - The bundle id
       */


      loadjs.done = function done(bundleId) {
        publish(bundleId, []);
      };
      /**
       * Reset loadjs dependencies statuses
       */


      loadjs.reset = function reset() {
        bundleIdCache = {};
        bundleResultCache = {};
        bundleCallbackQueue = {};
      };
      /**
       * Determine if bundle has already been defined
       * @param String} bundleId - The bundle id
       */


      loadjs.isDefined = function isDefined(bundleId) {
        return bundleId in bundleIdCache;
      }; // export


      return loadjs;
    });
  });

  // ==========================================================================
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      loadjs_umd(url, {
        success: resolve,
        error: reject
      });
    });
  }

  // ==========================================================================

  function parseId$1(url) {
    if (is.empty(url)) {
      return null;
    }

    if (is.number(Number(url))) {
      return url;
    }

    const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    return url.match(regex) ? RegExp.$2 : url;
  } // Set playback state and trigger change (only on actual change)


  function assurePlaybackState$1(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }

    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? 'play' : 'pause');
    }
  }

  const vimeo = {
    setup() {
      const player = this; // Add embed class for responsive

      toggleClass(player.elements.wrapper, player.config.classNames.embed, true); // Set speed options from config

      player.options.speed = player.config.speed.options; // Set intial ratio

      setAspectRatio.call(player); // Load the SDK if not already

      if (!is.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(() => {
          vimeo.ready.call(player);
        }).catch(error => {
          player.debug.warn('Vimeo SDK (player.js) failed to load', error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },

    // API Ready
    ready() {
      const player = this;
      const config = player.config.vimeo;
      const {
        premium,
        referrerPolicy,
        ...frameParams
      } = config; // If the owner has a pro or premium account then we can hide controls etc

      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      } // Get Vimeo params for the iframe


      const params = buildUrlParams({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: 'media',
        playsinline: !this.config.fullscreen.iosNative,
        ...frameParams
      }); // Get the source URL or ID

      let source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is.empty(source)) {
        source = player.media.getAttribute(player.config.attributes.embed.id);
      }

      const id = parseId$1(source); // Build an iframe

      const iframe = createElement('iframe');
      const src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute('src', src);
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', ['autoplay', 'fullscreen', 'picture-in-picture', 'encrypted-media', 'accelerometer', 'gyroscope'].join('; ')); // Set the referrer policy if required

      if (!is.empty(referrerPolicy)) {
        iframe.setAttribute('referrerPolicy', referrerPolicy);
      } // Inject the package


      if (premium || !config.customControls) {
        iframe.setAttribute('data-poster', player.poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        const wrapper = createElement('div', {
          class: player.config.classNames.embedContainer,
          'data-poster': player.poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      } // Get poster image


      if (!config.customControls) {
        fetch(format(player.config.urls.vimeo.api, src)).then(response => {
          if (is.empty(response) || !response.thumbnail_url) {
            return;
          } // Set and show poster


          ui.setPoster.call(player, response.thumbnail_url).catch(() => {});
        });
      } // Setup instance
      // https://github.com/vimeo/player.js


      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0; // Disable native text track rendering

      if (player.supported.ui) {
        player.embed.disableTextTrack();
      } // Create a faux HTML5 API using the Vimeo API


      player.media.play = () => {
        assurePlaybackState$1.call(player, true);
        return player.embed.play();
      };

      player.media.pause = () => {
        assurePlaybackState$1.call(player, false);
        return player.embed.pause();
      };

      player.media.stop = () => {
        player.pause();
        player.currentTime = 0;
      }; // Seeking


      let {
        currentTime
      } = player.media;
      Object.defineProperty(player.media, 'currentTime', {
        get() {
          return currentTime;
        },

        set(time) {
          // Vimeo will automatically play on seek if the video hasn't been played before
          // Get current paused state and volume etc
          const {
            embed,
            media,
            paused,
            volume
          } = player;
          const restorePause = paused && !embed.hasPlayed; // Set seeking state and trigger event

          media.seeking = true;
          triggerEvent.call(player, media, 'seeking'); // If paused, mute until seek is complete

          Promise.resolve(restorePause && embed.setVolume(0)) // Seek
          .then(() => embed.setCurrentTime(time)) // Restore paused
          .then(() => restorePause && embed.pause()) // Restore volume
          .then(() => restorePause && embed.setVolume(volume)).catch(() => {// Do nothing
          });
        }

      }); // Playback speed

      let speed = player.config.speed.selected;
      Object.defineProperty(player.media, 'playbackRate', {
        get() {
          return speed;
        },

        set(input) {
          player.embed.setPlaybackRate(input).then(() => {
            speed = input;
            triggerEvent.call(player, player.media, 'ratechange');
          }).catch(() => {
            // Cannot set Playback Rate, Video is probably not on Pro account
            player.options.speed = [1];
          });
        }

      }); // Volume

      let {
        volume
      } = player.config;
      Object.defineProperty(player.media, 'volume', {
        get() {
          return volume;
        },

        set(input) {
          player.embed.setVolume(input).then(() => {
            volume = input;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }

      }); // Muted

      let {
        muted
      } = player.config;
      Object.defineProperty(player.media, 'muted', {
        get() {
          return muted;
        },

        set(input) {
          const toggle = is.boolean(input) ? input : false;
          player.embed.setVolume(toggle ? 0 : player.config.volume).then(() => {
            muted = toggle;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }

      }); // Loop

      let {
        loop
      } = player.config;
      Object.defineProperty(player.media, 'loop', {
        get() {
          return loop;
        },

        set(input) {
          const toggle = is.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(() => {
            loop = toggle;
          });
        }

      }); // Source

      let currentSrc;
      player.embed.getVideoUrl().then(value => {
        currentSrc = value;
        controls.setDownloadUrl.call(player);
      }).catch(error => {
        this.debug.warn(error);
      });
      Object.defineProperty(player.media, 'currentSrc', {
        get() {
          return currentSrc;
        }

      }); // Ended

      Object.defineProperty(player.media, 'ended', {
        get() {
          return player.currentTime === player.duration;
        }

      }); // Set aspect ratio based on video size

      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then(dimensions => {
        const [width, height] = dimensions;
        player.embed.ratio = roundAspectRatio(width, height);
        setAspectRatio.call(this);
      }); // Set autopause

      player.embed.setAutopause(player.config.autopause).then(state => {
        player.config.autopause = state;
      }); // Get title

      player.embed.getVideoTitle().then(title => {
        player.config.title = title;
        ui.setTitle.call(this);
      }); // Get current time

      player.embed.getCurrentTime().then(value => {
        currentTime = value;
        triggerEvent.call(player, player.media, 'timeupdate');
      }); // Get duration

      player.embed.getDuration().then(value => {
        player.media.duration = value;
        triggerEvent.call(player, player.media, 'durationchange');
      }); // Get captions

      player.embed.getTextTracks().then(tracks => {
        player.media.textTracks = tracks;
        captions.setup.call(player);
      });
      player.embed.on('cuechange', ({
        cues = []
      }) => {
        const strippedCues = cues.map(cue => stripHTML(cue.text));
        captions.updateCues.call(player, strippedCues);
      });
      player.embed.on('loaded', () => {
        // Assure state and events are updated on autoplay
        player.embed.getPaused().then(paused => {
          assurePlaybackState$1.call(player, !paused);

          if (!paused) {
            triggerEvent.call(player, player.media, 'playing');
          }
        });

        if (is.element(player.embed.element) && player.supported.ui) {
          const frame = player.embed.element; // Fix keyboard focus issues
          // https://github.com/sampotts/plyr/issues/317

          frame.setAttribute('tabindex', -1);
        }
      });
      player.embed.on('bufferstart', () => {
        triggerEvent.call(player, player.media, 'waiting');
      });
      player.embed.on('bufferend', () => {
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('play', () => {
        assurePlaybackState$1.call(player, true);
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('pause', () => {
        assurePlaybackState$1.call(player, false);
      });
      player.embed.on('timeupdate', data => {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent.call(player, player.media, 'timeupdate');
      });
      player.embed.on('progress', data => {
        player.media.buffered = data.percent;
        triggerEvent.call(player, player.media, 'progress'); // Check all loaded

        if (parseInt(data.percent, 10) === 1) {
          triggerEvent.call(player, player.media, 'canplaythrough');
        } // Get duration as if we do it before load, it gives an incorrect value
        // https://github.com/sampotts/plyr/issues/891


        player.embed.getDuration().then(value => {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent.call(player, player.media, 'durationchange');
          }
        });
      });
      player.embed.on('seeked', () => {
        player.media.seeking = false;
        triggerEvent.call(player, player.media, 'seeked');
      });
      player.embed.on('ended', () => {
        player.media.paused = true;
        triggerEvent.call(player, player.media, 'ended');
      });
      player.embed.on('error', detail => {
        player.media.error = detail;
        triggerEvent.call(player, player.media, 'error');
      }); // Rebuild UI

      if (config.customControls) {
        setTimeout(() => ui.build.call(player), 0);
      }
    }

  };

  // ==========================================================================

  function parseId(url) {
    if (is.empty(url)) {
      return null;
    }

    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    return url.match(regex) ? RegExp.$2 : url;
  } // Set playback state and trigger change (only on actual change)


  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }

    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent.call(this, this.media, play ? 'play' : 'pause');
    }
  }

  function getHost(config) {
    if (config.noCookie) {
      return 'https://www.youtube-nocookie.com';
    }

    if (window.location.protocol === 'http:') {
      return 'http://www.youtube.com';
    } // Use YouTube's default


    return undefined;
  }

  const youtube = {
    setup() {
      // Add embed class for responsive
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Setup API

      if (is.object(window.YT) && is.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        // Reference current global callback
        const callback = window.onYouTubeIframeAPIReady; // Set callback to process queue

        window.onYouTubeIframeAPIReady = () => {
          // Call global callback if set
          if (is.function(callback)) {
            callback();
          }

          youtube.ready.call(this);
        }; // Load the SDK


        loadScript(this.config.urls.youtube.sdk).catch(error => {
          this.debug.warn('YouTube API failed to load', error);
        });
      }
    },

    // Get the media title
    getTitle(videoId) {
      const url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then(data => {
        if (is.object(data)) {
          const {
            title,
            height,
            width
          } = data; // Set title

          this.config.title = title;
          ui.setTitle.call(this); // Set aspect ratio

          this.embed.ratio = roundAspectRatio(width, height);
        }

        setAspectRatio.call(this);
      }).catch(() => {
        // Set aspect ratio
        setAspectRatio.call(this);
      });
    },

    // API ready
    ready() {
      const player = this;
      const config = player.config.youtube; // Ignore already setup (race condition)

      const currentId = player.media && player.media.getAttribute('id');

      if (!is.empty(currentId) && currentId.startsWith('youtube-')) {
        return;
      } // Get the source URL or ID


      let source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is.empty(source)) {
        source = player.media.getAttribute(this.config.attributes.embed.id);
      } // Replace the <iframe> with a <div> due to YouTube API issues


      const videoId = parseId(source);
      const id = generateId(player.provider); // Replace media element

      const container = createElement('div', {
        id,
        'data-poster': config.customControls ? player.poster : undefined
      });
      player.media = replaceElement(container, player.media); // Only load the poster when using custom controls

      if (config.customControls) {
        const posterSrc = s => `https://i.ytimg.com/vi/${videoId}/${s}default.jpg`; // Check thumbnail images in order of quality, but reject fallback thumbnails (120px wide)


        loadImage(posterSrc('maxres'), 121) // Higest quality and unpadded
        .catch(() => loadImage(posterSrc('sd'), 121)) // 480p padded 4:3
        .catch(() => loadImage(posterSrc('hq'))) // 360p padded 4:3. Always exists
        .then(image => ui.setPoster.call(player, image.src)).then(src => {
          // If the image is padded, use background-size "cover" instead (like youtube does too with their posters)
          if (!src.includes('maxres')) {
            player.elements.poster.style.backgroundSize = 'cover';
          }
        }).catch(() => {});
      } // Setup instance
      // https://developers.google.com/youtube/iframe_api_reference


      player.embed = new window.YT.Player(player.media, {
        videoId,
        host: getHost(config),
        playerVars: extend({}, {
          // Autoplay
          autoplay: player.config.autoplay ? 1 : 0,
          // iframe interface language
          hl: player.config.hl,
          // Only show controls if not fully supported or opted out
          controls: player.supported.ui && config.customControls ? 0 : 1,
          // Disable keyboard as we handle it
          disablekb: 1,
          // Allow iOS inline playback
          playsinline: !player.config.fullscreen.iosNative ? 1 : 0,
          // Captions are flaky on YouTube
          cc_load_policy: player.captions.active ? 1 : 0,
          cc_lang_pref: player.config.captions.language,
          // Tracking for stats
          widget_referrer: window ? window.location.href : null
        }, config),
        events: {
          onError(event) {
            // YouTube may fire onError twice, so only handle it once
            if (!player.media.error) {
              const code = event.data; // Messages copied from https://developers.google.com/youtube/iframe_api_reference#onError

              const message = {
                2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
                5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
                100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
                101: 'The owner of the requested video does not allow it to be played in embedded players.',
                150: 'The owner of the requested video does not allow it to be played in embedded players.'
              }[code] || 'An unknown error occured';
              player.media.error = {
                code,
                message
              };
              triggerEvent.call(player, player.media, 'error');
            }
          },

          onPlaybackRateChange(event) {
            // Get the instance
            const instance = event.target; // Get current speed

            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent.call(player, player.media, 'ratechange');
          },

          onReady(event) {
            // Bail if onReady has already been called. See issue #1108
            if (is.function(player.media.play)) {
              return;
            } // Get the instance


            const instance = event.target; // Get the title

            youtube.getTitle.call(player, videoId); // Create a faux HTML5 API using the YouTube API

            player.media.play = () => {
              assurePlaybackState.call(player, true);
              instance.playVideo();
            };

            player.media.pause = () => {
              assurePlaybackState.call(player, false);
              instance.pauseVideo();
            };

            player.media.stop = () => {
              instance.stopVideo();
            };

            player.media.duration = instance.getDuration();
            player.media.paused = true; // Seeking

            player.media.currentTime = 0;
            Object.defineProperty(player.media, 'currentTime', {
              get() {
                return Number(instance.getCurrentTime());
              },

              set(time) {
                // If paused and never played, mute audio preventively (YouTube starts playing on seek if the video hasn't been played yet).
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                } // Set seeking state and trigger event


                player.media.seeking = true;
                triggerEvent.call(player, player.media, 'seeking'); // Seek after events sent

                instance.seekTo(time);
              }

            }); // Playback speed

            Object.defineProperty(player.media, 'playbackRate', {
              get() {
                return instance.getPlaybackRate();
              },

              set(input) {
                instance.setPlaybackRate(input);
              }

            }); // Volume

            let {
              volume
            } = player.config;
            Object.defineProperty(player.media, 'volume', {
              get() {
                return volume;
              },

              set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, 'volumechange');
              }

            }); // Muted

            let {
              muted
            } = player.config;
            Object.defineProperty(player.media, 'muted', {
              get() {
                return muted;
              },

              set(input) {
                const toggle = is.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? 'mute' : 'unMute']();
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, 'volumechange');
              }

            }); // Source

            Object.defineProperty(player.media, 'currentSrc', {
              get() {
                return instance.getVideoUrl();
              }

            }); // Ended

            Object.defineProperty(player.media, 'ended', {
              get() {
                return player.currentTime === player.duration;
              }

            }); // Get available speeds

            const speeds = instance.getAvailablePlaybackRates(); // Filter based on config

            player.options.speed = speeds.filter(s => player.config.speed.options.includes(s)); // Set the tabindex to avoid focus entering iframe

            if (player.supported.ui && config.customControls) {
              player.media.setAttribute('tabindex', -1);
            }

            triggerEvent.call(player, player.media, 'timeupdate');
            triggerEvent.call(player, player.media, 'durationchange'); // Reset timer

            clearInterval(player.timers.buffering); // Setup buffering

            player.timers.buffering = setInterval(() => {
              // Get loaded % from YouTube
              player.media.buffered = instance.getVideoLoadedFraction(); // Trigger progress only when we actually buffer something

              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent.call(player, player.media, 'progress');
              } // Set last buffer point


              player.media.lastBuffered = player.media.buffered; // Bail if we're at 100%

              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering); // Trigger event

                triggerEvent.call(player, player.media, 'canplaythrough');
              }
            }, 200); // Rebuild UI

            if (config.customControls) {
              setTimeout(() => ui.build.call(player), 50);
            }
          },

          onStateChange(event) {
            // Get the instance
            const instance = event.target; // Reset timer

            clearInterval(player.timers.playing);
            const seeked = player.media.seeking && [1, 2].includes(event.data);

            if (seeked) {
              // Unset seeking and fire seeked event
              player.media.seeking = false;
              triggerEvent.call(player, player.media, 'seeked');
            } // Handle events
            // -1   Unstarted
            // 0    Ended
            // 1    Playing
            // 2    Paused
            // 3    Buffering
            // 5    Video cued


            switch (event.data) {
              case -1:
                // Update scrubber
                triggerEvent.call(player, player.media, 'timeupdate'); // Get loaded % from YouTube

                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent.call(player, player.media, 'progress');
                break;

              case 0:
                assurePlaybackState.call(player, false); // YouTube doesn't support loop for a single video, so mimick it.

                if (player.media.loop) {
                  // YouTube needs a call to `stopVideo` before playing again
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent.call(player, player.media, 'ended');
                }

                break;

              case 1:
                // Restore paused state (YouTube starts playing on seek if the video hasn't been played yet)
                if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState.call(player, true);
                  triggerEvent.call(player, player.media, 'playing'); // Poll to get playback progress

                  player.timers.playing = setInterval(() => {
                    triggerEvent.call(player, player.media, 'timeupdate');
                  }, 50); // Check duration again due to YouTube bug
                  // https://github.com/sampotts/plyr/issues/374
                  // https://code.google.com/p/gdata-issues/issues/detail?id=8690

                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent.call(player, player.media, 'durationchange');
                  }
                }

                break;

              case 2:
                // Restore audio (YouTube starts playing on seek if the video hasn't been played yet)
                if (!player.muted) {
                  player.embed.unMute();
                }

                assurePlaybackState.call(player, false);
                break;

              case 3:
                // Trigger waiting event to add loading classes to container as the video buffers.
                triggerEvent.call(player, player.media, 'waiting');
                break;
            }

            triggerEvent.call(player, player.elements.container, 'statechange', false, {
              code: event.data
            });
          }

        }
      });
    }

  };

  // ==========================================================================
  const media = {
    // Setup media
    setup() {
      // If there's no media, bail
      if (!this.media) {
        this.debug.warn('No media element found!');
        return;
      } // Add type class


      toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', this.type), true); // Add provider class

      toggleClass(this.elements.container, this.config.classNames.provider.replace('{0}', this.provider), true); // Add video class for embeds
      // This will require changes if audio embeds are added

      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace('{0}', 'video'), true);
      } // Inject the player wrapper


      if (this.isVideo) {
        // Create the wrapper div
        this.elements.wrapper = createElement('div', {
          class: this.config.classNames.video
        }); // Wrap the video in a container

        wrap(this.media, this.elements.wrapper); // Poster image container

        this.elements.poster = createElement('div', {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }

      if (this.isHTML5) {
        html5.setup.call(this);
      } else if (this.isYouTube) {
        youtube.setup.call(this);
      } else if (this.isVimeo) {
        vimeo.setup.call(this);
      }
    }

  };

  /**
   * Returns a number whose value is limited to the given range.
   *
   * Example: limit the output of this computation to between 0 and 255
   * (x * 255).clamp(0, 255)
   *
   * @param {Number} input
   * @param {Number} min The lower boundary of the output range
   * @param {Number} max The upper boundary of the output range
   * @returns A number in the range [min, max]
   * @type Number
   */
  function clamp(input = 0, min = 0, max = 255) {
    return Math.min(Math.max(input, min), max);
  }

  class MediaFragment {
    constructor(player) {
      const {
        config
      } = player;
      this.player = player;
      this.source = player.currentSrc;
      this.config = config.mediaFragment;
      this.active = false;
      this.startTime = 0;
      this.duration = player.media.duration; // Wait until player has duration before setting media fragment

      this.player.on('loadedmetadata', () => {
        if (this.player.duration && !this.active) this.load();
      });
    }

    get enabled() {
      return this.config.enabled;
    }

    load() {
      const mediaFragment = parseUrlHash(this.player.source).match('t=[0-9]+(.([0-9]+))?,[0-9]+(.([0-9]+))?');
      if (!mediaFragment) return;
      const {
        config
      } = this.player;

      if (config.duration) {
        this.player.debug.warn('Cannot have custom duration in conjunction with media fragments');
        return;
      }

      const resourceTimes = mediaFragment[0].replace('t=', '').split(',');
      const startTime = parseFloat(resourceTimes[0]);
      const endTime = parseFloat(resourceTimes[1]) - parseFloat(resourceTimes[0]);
      this.active = true;
      this.startTime = clamp(startTime, 0, this.player.media.duration);
      this.duration = clamp(endTime, 0, this.player.media.duration);
    }

    getMediaTime(input) {
      if (!this.enabled || !this.active) return input;
      return input + this.startTime;
    }

    destroy() {
      if (!this.enabled) return;
      const {
        config
      } = this.player;
      this.active = false; // Reset start and duration back to default values

      config.startTime = 0;
      if (this.media) config.duration = this.media.duration;
    }

  }

  const destroy = instance => {
    // Destroy our adsManager
    if (instance.manager) {
      instance.manager.destroy();
    } // Destroy our adsManager


    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }

    instance.elements.container.remove();
  };

  class Ads {
    /**
     * Ads constructor.
     * @param {Object} player
     * @return {Ads}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        if (!this.enabled) {
          return;
        } // Check if the Google IMA3 SDK is loaded or load it ourselves


        if (!is.object(window.google) || !is.object(window.google.ima)) {
          loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
            this.ready();
          }).catch(() => {
            // Script failed to load or is blocked
            this.trigger('error', new Error('Google IMA SDK failed to load'));
          });
        } else {
          this.ready();
        }
      });

      _defineProperty$1(this, "ready", () => {
        // Double check we're enabled
        if (!this.enabled) {
          destroy(this);
        } // Start ticking our safety timer. If the whole advertisement
        // thing doesn't resolve within our set time; we bail


        this.startSafetyTimer(12000, 'ready()'); // Clear the safety timer

        this.managerPromise.then(() => {
          this.clearSafetyTimer('onAdsManagerLoaded()');
        }); // Set listeners on the Plyr instance

        this.listeners(); // Setup the IMA SDK

        this.setupIMA();
      });

      _defineProperty$1(this, "setupIMA", () => {
        // Create the container for our advertisements
        this.elements.container = createElement('div', {
          class: this.player.config.classNames.ads
        });
        this.player.elements.container.appendChild(this.elements.container); // So we can run VPAID2

        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED); // Set language

        google.ima.settings.setLocale(this.player.config.ads.language); // Set playback for iOS10+

        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline); // We assume the adContainer is the video container of the plyr element that will house the ads

        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media); // Create ads loader

        this.loader = new google.ima.AdsLoader(this.elements.displayContainer); // Listen and respond to ads loaded and error events

        this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, event => this.onAdsManagerLoaded(event), false);
        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, error => this.onAdError(error), false); // Request video ads to be pre-loaded

        this.requestAds();
      });

      _defineProperty$1(this, "requestAds", () => {
        const {
          container
        } = this.player.elements;

        try {
          // Request video ads
          const request = new google.ima.AdsRequest();
          request.adTagUrl = this.tagUrl; // Specify the linear and nonlinear slot sizes. This helps the SDK
          // to select the correct creative if multiple are returned

          request.linearAdSlotWidth = container.offsetWidth;
          request.linearAdSlotHeight = container.offsetHeight;
          request.nonLinearAdSlotWidth = container.offsetWidth;
          request.nonLinearAdSlotHeight = container.offsetHeight; // We only overlay ads as we only support video.

          request.forceNonLinearFullSlot = false; // Mute based on current state

          request.setAdWillPlayMuted(!this.player.muted);
          this.loader.requestAds(request);
        } catch (e) {
          this.onAdError(e);
        }
      });

      _defineProperty$1(this, "pollCountdown", (start = false) => {
        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute('data-badge-text');
          return;
        }

        const update = () => {
          const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
          const label = `${i18n.get('advertisement', this.player.config)} - ${time}`;
          this.elements.container.setAttribute('data-badge-text', label);
        };

        this.countdownTimer = setInterval(update, 100);
      });

      _defineProperty$1(this, "onAdsManagerLoaded", event => {
        // Load could occur after a source change (race condition)
        if (!this.enabled) {
          return;
        } // Get the ads manager


        const settings = new google.ima.AdsRenderingSettings(); // Tell the SDK to save and restore content video state on our behalf

        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true; // The SDK is polling currentTime on the contentPlayback. And needs a duration
        // so it can determine when to start the mid- and post-roll

        this.manager = event.getAdsManager(this.player, settings); // Get the cue points for any mid-rolls by filtering out the pre- and post-roll

        this.cuePoints = this.manager.getCuePoints(); // Add listeners to the required events
        // Advertisement error events

        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, error => this.onAdError(error)); // Advertisement regular events

        Object.keys(google.ima.AdEvent.Type).forEach(type => {
          this.manager.addEventListener(google.ima.AdEvent.Type[type], e => this.onAdEvent(e));
        }); // Resolve our adsManager

        this.trigger('loaded');
      });

      _defineProperty$1(this, "addCuePoints", () => {
        // Add advertisement cue's within the time line if available
        if (!is.empty(this.cuePoints)) {
          this.cuePoints.forEach(cuePoint => {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
              const seekElement = this.player.elements.progress;

              if (is.element(seekElement)) {
                const cuePercentage = 100 / this.player.duration * cuePoint;
                const cue = createElement('span', {
                  class: this.player.config.classNames.cues
                });
                cue.style.left = `${cuePercentage.toString()}%`;
                seekElement.appendChild(cue);
              }
            }
          });
        }
      });

      _defineProperty$1(this, "onAdEvent", event => {
        const {
          container
        } = this.player.elements; // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
        // don't have ad object associated

        const ad = event.getAd();
        const adData = event.getAdData(); // Proxy event

        const dispatchEvent = type => {
          triggerEvent.call(this.player, this.player.media, `ads${type.replace(/_/g, '').toLowerCase()}`);
        }; // Bubble the event


        dispatchEvent(event.type);

        switch (event.type) {
          case google.ima.AdEvent.Type.LOADED:
            // This is the first event sent for an ad - it is possible to determine whether the
            // ad is a video ad or an overlay
            this.trigger('loaded'); // Start countdown

            this.pollCountdown(true);

            if (!ad.isLinear()) {
              // Position AdDisplayContainer correctly for overlay
              ad.width = container.offsetWidth;
              ad.height = container.offsetHeight;
            } // console.info('Ad type: ' + event.getAd().getAdPodInfo().getPodIndex());
            // console.info('Ad time: ' + event.getAd().getAdPodInfo().getTimeOffset());


            break;

          case google.ima.AdEvent.Type.STARTED:
            // Set volume to match player
            this.manager.setVolume(this.player.volume);
            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            // All ads for the current videos are done. We can now request new advertisements
            // in case the video is re-played
            // TODO: Example for what happens when a next video in a playlist would be loaded.
            // So here we load a new video when all ads are done.
            // Then we load new ads within a new adsManager. When the video
            // Is started - after - the ads are loaded, then we get ads.
            // You can also easily test cancelling and reloading by running
            // player.ads.cancel() and player.ads.play from the console I guess.
            // this.player.source = {
            //     type: 'video',
            //     title: 'View From A Blue Moon',
            //     sources: [{
            //         src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4', type:
            // 'video/mp4', }], poster:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg', tracks:
            // [ { kind: 'captions', label: 'English', srclang: 'en', src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            // default: true, }, { kind: 'captions', label: 'French', srclang: 'fr', src:
            // 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt', }, ],
            // };
            // TODO: So there is still this thing where a video should only be allowed to start
            // playing when the IMA SDK is ready or has failed
            if (this.player.ended) {
              this.loadAds();
            } else {
              // The SDK won't allow new ads to be called without receiving a contentComplete()
              this.loader.contentComplete();
            }

            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            // This event indicates the ad has started - the video player can adjust the UI,
            // for example display a pause button and remaining time. Fired when content should
            // be paused. This usually happens right before an ad is about to cover the content
            this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            // This event indicates the ad has finished - the video player can perform
            // appropriate UI actions, such as removing the timer for remaining time detection.
            // Fired when content should be resumed. This usually happens when an ad finishes
            // or collapses
            this.pollCountdown();
            this.resumeContent();
            break;

          case google.ima.AdEvent.Type.LOG:
            if (adData.adError) {
              this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
            }

            break;
        }
      });

      _defineProperty$1(this, "onAdError", event => {
        this.cancel();
        this.player.debug.warn('Ads error', event);
      });

      _defineProperty$1(this, "listeners", () => {
        const {
          container
        } = this.player.elements;
        let time;
        this.player.on('canplay', () => {
          this.addCuePoints();
        });
        this.player.on('ended', () => {
          this.loader.contentComplete();
        });
        this.player.on('timeupdate', () => {
          time = this.player.currentTime;
        });
        this.player.on('seeked', () => {
          const seekedTime = this.player.currentTime;

          if (is.empty(this.cuePoints)) {
            return;
          }

          this.cuePoints.forEach((cuePoint, index) => {
            if (time < cuePoint && cuePoint < seekedTime) {
              this.manager.discardAdBreak();
              this.cuePoints.splice(index, 1);
            }
          });
        }); // Listen to the resizing of the window. And resize ad accordingly
        // TODO: eventually implement ResizeObserver

        window.addEventListener('resize', () => {
          if (this.manager) {
            this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      });

      _defineProperty$1(this, "play", () => {
        const {
          container
        } = this.player.elements;

        if (!this.managerPromise) {
          this.resumeContent();
        } // Play the requested advertisement whenever the adsManager is ready


        this.managerPromise.then(() => {
          // Set volume to match player
          this.manager.setVolume(this.player.volume); // Initialize the container. Must be done via a user action on mobile devices

          this.elements.displayContainer.initialize();

          try {
            if (!this.initialized) {
              // Initialize the ads manager. Ad rules playlist will start at this time
              this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL); // Call play to start showing the ad. Single video and overlay ads will
              // start at this time; the call will be ignored for ad rules

              this.manager.start();
            }

            this.initialized = true;
          } catch (adError) {
            // An error may be thrown if there was a problem with the
            // VAST response
            this.onAdError(adError);
          }
        }).catch(() => {});
      });

      _defineProperty$1(this, "resumeContent", () => {
        // Hide the advertisement container
        this.elements.container.style.zIndex = ''; // Ad is stopped

        this.playing = false; // Play video

        silencePromise(this.player.media.play());
      });

      _defineProperty$1(this, "pauseContent", () => {
        // Show the advertisement container
        this.elements.container.style.zIndex = 3; // Ad is playing

        this.playing = true; // Pause our video.

        this.player.media.pause();
      });

      _defineProperty$1(this, "cancel", () => {
        // Pause our video
        if (this.initialized) {
          this.resumeContent();
        } // Tell our instance that we're done for now


        this.trigger('error'); // Re-create our adsManager

        this.loadAds();
      });

      _defineProperty$1(this, "loadAds", () => {
        // Tell our adsManager to go bye bye
        this.managerPromise.then(() => {
          // Destroy our adsManager
          if (this.manager) {
            this.manager.destroy();
          } // Re-set our adsManager promises


          this.managerPromise = new Promise(resolve => {
            this.on('loaded', resolve);
            this.player.debug.log(this.manager);
          }); // Now that the manager has been destroyed set it to also be un-initialized

          this.initialized = false; // Now request some new advertisements

          this.requestAds();
        }).catch(() => {});
      });

      _defineProperty$1(this, "trigger", (event, ...args) => {
        const handlers = this.events[event];

        if (is.array(handlers)) {
          handlers.forEach(handler => {
            if (is.function(handler)) {
              handler.apply(this, args);
            }
          });
        }
      });

      _defineProperty$1(this, "on", (event, callback) => {
        if (!is.array(this.events[event])) {
          this.events[event] = [];
        }

        this.events[event].push(callback);
        return this;
      });

      _defineProperty$1(this, "startSafetyTimer", (time, from) => {
        this.player.debug.log(`Safety timer invoked from: ${from}`);
        this.safetyTimer = setTimeout(() => {
          this.cancel();
          this.clearSafetyTimer('startSafetyTimer()');
        }, time);
      });

      _defineProperty$1(this, "clearSafetyTimer", from => {
        if (!is.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log(`Safety timer cleared from: ${from}`);
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      });

      this.player = player;
      this.config = player.config.ads;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null; // Setup a promise to resolve when the IMA manager is ready

      this.managerPromise = new Promise((resolve, reject) => {
        // The ad is loaded and ready
        this.on('loaded', resolve); // Ads failed

        this.on('error', reject);
      });
      this.load();
    }

    get enabled() {
      const {
        config
      } = this;
      return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is.empty(config.publisherId) || is.url(config.tagUrl));
    }
    /**
     * Load the IMA SDK
     */


    // Build the tag URL
    get tagUrl() {
      const {
        config
      } = this;

      if (is.url(config.tagUrl)) {
        return config.tagUrl;
      }

      const params = {
        AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
        AV_CHANNELID: '5a0458dc28a06145e4519d21',
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: config.publisherId
      };
      const base = 'https://go.aniview.com/api/adserver6/vast/';
      return `${base}?${buildUrlParams(params)}`;
    }
    /**
     * In order for the SDK to display ads for our video, we need to tell it where to put them,
     * so here we define our ad container. This div is set up to render on top of the video player.
     * Using the code below, we tell the SDK to render ads within that div. We also provide a
     * handle to the content video player - the SDK will poll the current time of our player to
     * properly place mid-rolls. After we create the ad display container, we initialize it. On
     * mobile devices, this initialization is done as the result of a user action.
     */


  }

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
        scrollSpeed: 1.5
      };
      this.videoContainerWidth = 123;
      this.videoContainerHeight = 67.5;
      this.zoom = {
        scale: 1
      };
      this.duration = 0;
      this.numOfTimestamps = 5;
      this.elements = {
        container: {}
      };
      this.load();
    } // Determine if Editor is enabled


    get enabled() {
      const {
        config,
        player
      } = this;
      return config.enabled && player.isHTML5 && player.isVideo;
    } // Get active state


    get active() {
      if (!this.enabled) {
        return false;
      }

      return this.shown && is.element(this.player.elements.container);
    }

    get previewThumbnailsReady() {
      const {
        previewThumbnails,
        duration
      } = this.player;
      /* Added check for preview thumbnails size as, it is be returned loaded even though there are no thumbnails */

      return previewThumbnails && previewThumbnails.loaded && duration > 0;
    }

    get visibleWindow() {
      const {
        container
      } = this.elements;
      const {
        duration
      } = this.player;
      const containerRect = container.getBoundingClientRect();
      const timelineRect = container.timeline.getBoundingClientRect();
      const zoom = parseFloat(container.timeline.style.width);
      const offset = parseFloat(container.timeline.style.left);
      const start = Math.abs(offset / zoom) * duration;
      const end = start + containerRect.width / timelineRect.width * duration;
      return {
        start,
        end
      };
    }

    load() {
      on.call(this.player, document, () => {
        this.onChange();
      }); // Player listeners

      this.listeners(); // Update the UI

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
      const {
        container
      } = this.player.elements;
      this.createContainer(container);
      this.createControls();
      this.createTimeline();
      this.createTimeStamps();
      this.createVideoTimeline();
      this.createSeekHandle();
      this.player.listeners.editor();
      triggerEvent.call(this.player, this.player.media, 'editorloaded');
    }

    createContainer(container) {
      const {
        config
      } = this; // If no container has been specified append to the video container

      if (is.nullOrUndefined(config.target)) {
        this.createNewContainer(container);
      } else {
        this.appendTargetContainer();
      } // We need an element to setup


      if (is.nullOrUndefined(container) || !is.element(container)) {
        this.debug.error('Editor Creation failed: no suitable element passed');
        return;
      } // Add style hook


      ui.addStyleHook.call(this.player, this.elements.container);
    } // Create and append to video Container


    createNewContainer(container) {
      this.elements.container = createElement('div', {
        class: this.player.config.classNames.editor.container
      });
      insertAfter(this.elements.container, container);
    } // Append editor to specified Container


    appendTargetContainer() {
      const {
        config,
        elements,
        player
      } = this;
      elements.container = config.target; // String selector passed

      if (is.string(elements.container)) {
        elements.container = document.querySelectorAll(elements.container);
      } // jQuery, NodeList or Array passed, use first element


      if (window.jQuery && elements.container instanceof jQuery || is.nodeList(elements.container) || is.array(elements.container)) {
        // eslint-disable-next-line
        this.elements.container = elements.container[0];
      } // Clone the original element so if the element gets destroyed we can return it to its original state


      const clone = this.elements.container.cloneNode(true);
      this.elements.original = clone; // set editor container class

      this.elements.container.classList.add(player.config.classNames.editor.container);
    }

    createControls() {
      const {
        container
      } = this.elements;
      const {
        maxZoom
      } = this.config; // Create controls container

      container.controls = createElement('div', {
        id: `plyr__editor__controls`,
        class: this.player.config.classNames.editor.controls
      });
      container.appendChild(container.controls); // Create time container

      container.controls.timeContainer = createElement('div', {
        class: `plyr__controls__item ${this.player.config.classNames.editor.timeContainer}`
      });
      container.controls.appendChild(container.controls.timeContainer); // Create time container - Seperate time container needed from video as each item needs a unqiue key

      container.controls.timeContainer.time = controls.createTime.call(this.player, 'editorCurrentTime', {
        class: `plyr__controls__item ${this.player.config.classNames.editor.time}`
      });
      container.controls.timeContainer.appendChild(container.controls.timeContainer.time); // Create zoom slider container

      container.controls.zoomContainer = createElement('div', {
        class: `plyr__controls__item ${this.player.config.classNames.editor.zoomContainer}`
      });
      container.controls.appendChild(container.controls.zoomContainer); // Create minus icon

      container.controls.zoomContainer.zoomOut = controls.createButton.call(this.player, 'zoomOut', 'plyr__controls__item');
      container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoomOut); // Create zoom slider

      container.controls.zoomContainer.zoom = controls.createRange.call(this.player, 'zoom', {
        id: `plyr__editor__zoom`,
        step: 0.1,
        min: 1,
        max: maxZoom,
        value: 1,
        'aria-valuemin': 1,
        'aria-valuemax': maxZoom,
        'aria-valuenow': 1
      });
      container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoom); // Create plus icon

      container.controls.zoomContainer.zoomIn = controls.createButton.call(this.player, 'zoomIn', 'plyr__controls__item');
      container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoomIn);
    }

    createTimeline() {
      const {
        container
      } = this.elements;
      this.elements.container.timeline = createElement('div', {
        class: this.player.config.classNames.editor.timeline
      });
      container.appendChild(this.elements.container.timeline);
      this.elements.container.timeline.style.width = '100%';
      this.elements.container.timeline.style.left = '0%';
    }

    createTimeStamps() {
      const step = this.player.duration / this.numOfTimestamps;
      const {
        timeline
      } = this.elements.container;
      const timeStamps = [];
      timeline.timestampsContainer = createElement('div', {
        class: this.player.config.classNames.editor.timeStampsContainer
      });
      timeline.appendChild(timeline.timestampsContainer);

      for (let i = 0; i < this.numOfTimestamps; i += 1) {
        const timeStamp = createElement('span', {
          class: this.player.config.classNames.editor.timeStamp
        }, controls.formatTime.call(this.player, Math.round(step * i))); // Append the element to the timeline

        timeline.timestampsContainer.appendChild(timeStamp); // Add the element to the list of elements

        timeStamps.push(timeStamp);
      } // Add list of timestamps to elements object


      timeline.timestampsContainer.timeStamps = timeStamps;
    }

    updateTimestamps() {
      const {
        timeline
      } = this.elements.container;
      const {
        duration
      } = this.player;

      if (this.player.duration === 0 || this.duration === duration || !is.element(timeline.timestampsContainer)) {
        return;
      } // Store the current player duration, to avoid setting the editor timestamps if the video length has not changed


      this.duration = duration;
      const step = duration / this.numOfTimestamps;
      timeline.timestampsContainer.timeStamps.forEach((timestamp, i) => {
        // eslint-disable-next-line no-param-reassign
        timestamp.innerText = controls.formatTime.call(this.player, Math.round(step * i));
      });
    }

    createVideoTimeline() {
      const {
        timeline
      } = this.elements.container; // Create video timeline wrapper

      timeline.videoContainerParent = createElement('div', {
        class: this.player.config.classNames.editor.videoContainerParent
      });
      timeline.appendChild(timeline.videoContainerParent); // Create video timeline

      timeline.videoContainerParent.videoContainer = createElement('div', {
        class: this.player.config.classNames.editor.videoContainer
      });
      timeline.videoContainerParent.appendChild(timeline.videoContainerParent.videoContainer);
      this.setVideoTimelimeContent();
    }

    setVideoTimelimeContent() {
      const {
        previewThumbnails
      } = this.player;
      const {
        timeline
      } = this.elements.container; // Total number of images needed to fill the timeline width

      const clientRect = timeline.getBoundingClientRect();
      const {
        videoContainer
      } = timeline.videoContainerParent;
      const imageCount = Math.ceil(clientRect.width / this.videoContainerWidth);
      let time = 0;

      if (is.nullOrUndefined(videoContainer.previewThumbs)) {
        videoContainer.previewThumbs = [];
      } // Enable editor mode in preview thumbnails


      if (this.previewThumbnailsReady) {
        previewThumbnails.editor = true;
      } // Append images to video timeline


      for (let i = 0; i < imageCount; i += 1) {
        let previewThumb;

        if (is.nullOrUndefined(videoContainer.previewThumbs[i])) {
          // Create new image wrapper
          previewThumb = createElement('span', {
            class: this.player.config.classNames.editor.previewThumb
          }); // Append new image wrapper to the timeline

          videoContainer.appendChild(previewThumb);
          videoContainer.previewThumbs.push(previewThumb);
        } else {
          // Retrieve the existing container
          previewThumb = videoContainer.previewThumbs[i];
        } // If preview thumbnails is enabled append an image to the previewThumb


        if (this.previewThumbnailsReady && time >= this.visibleWindow.start && time <= this.visibleWindow.end) {
          // Append the image to the container
          previewThumbnails.showImageAtCurrentTime(time, previewThumb);
        }

        time += this.player.duration / (clientRect.width / this.videoContainerWidth);
      }

      if (this.previewThumbnailsReady) {
        // Disable editor mode in preview thumbnails
        previewThumbnails.editor = false;
      } // Once all images are loaded set the width of the parent video container to display them


      videoContainer.style.width = `${imageCount * this.videoContainerWidth}px`;
    }

    createSeekHandle() {
      const {
        timeline
      } = this.elements.container;
      const duration = controls.formatTime.call(this.player, this.player.duration); // Create seek Container

      timeline.seekHandle = createElement('div', {
        class: this.player.config.classNames.editor.seekHandle,
        role: 'slider',
        'aria-valuemin': 0,
        'aria-valuemax': duration,
        'aria-label': i18n.get('seek', this.player.config)
      }); // Create seek head

      timeline.seekHandle.head = createElement('div', {
        class: this.player.config.classNames.editor.seekHandleHead
      }); // Create seek line

      timeline.seekHandle.line = createElement('div', {
        class: this.player.config.classNames.editor.seekHandleLine
      });
      timeline.appendChild(timeline.seekHandle);
      timeline.seekHandle.appendChild(timeline.seekHandle.head);
      timeline.seekHandle.appendChild(timeline.seekHandle.line);
      this.setSeekPosition();
    }

    setZoom(event) {
      const {
        timeline
      } = this.elements.container;
      const {
        maxZoom
      } = this.config; // Zoom on seek handle position

      const clientRect = timeline.getBoundingClientRect();
      const xPos = timeline.seekHandle.getBoundingClientRect().left;
      const percentage = 100 / clientRect.width * (xPos - clientRect.left);

      if (!(event.type === 'wheel' || event.type === 'input' || event.type === 'click')) {
        return;
      } // Calculate zoom Delta for mousewheel


      if (event.type === 'wheel') {
        const delta = clamp(event.deltaY * -1, -1, 1);
        this.zoom.scale += delta * 0.1 * this.zoom.scale; // Restrict bounds of zoom for wheel

        if (this.zoom.scale === maxZoom && delta < 0 || this.zoom.scale === 1 && delta > 0) {
          return;
        } // Calculate zoom level based on zoom slider

      } else if (event.type === 'input') {
        const {
          value
        } = event.target;
        this.zoom.scale = value;
      } else if (event.type === 'click') {
        if (event.target === this.elements.container.controls.zoomContainer.zoomIn) {
          this.zoom.scale += 1;
        } else {
          this.zoom.scale -= 1;
        }
      } // Limit zoom to be between 1 and max times zoom


      this.zoom.scale = clamp(this.zoom.scale, 1, maxZoom); // Apply zoom scale

      timeline.style.width = `${this.zoom.scale * 100}%`; // Position the element based on the mouse position

      timeline.style.left = `${-(this.zoom.scale * 100 - 100) * percentage / 100}%`; // Update slider

      if (is.element(this.elements.container.controls.zoomContainer)) {
        controls.setRange.call(this.player, this.elements.container.controls.zoomContainer.zoom, this.zoom.scale);
      } // Update timeline images


      this.setVideoTimelimeContent();
    }

    setSeeking(event) {
      const {
        classList
      } = event.target;
      const {
        leftThumb,
        rightThumb
      } = this.player.config.classNames.trim; // Disable seeking event if selecting the trimming tool or a marker on the timeline

      if ((event.type === 'mousedown' || event.type === 'touchstart') && classList.contains(leftThumb) || classList.contains(rightThumb)) {
        return;
      } // Only act on left mouse button (0), or touch device (event.button does not exist or is false)


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

      const {
        timeline
      } = this.elements.container;
      const percentage = clamp(100 / this.player.duration * parseFloat(this.player.currentTime), 0, 100);
      timeline.seekHandle.style.left = `${percentage}%`;
      this.setTimelineOffset();
      const currentTime = controls.formatTime.call(this.player, this.player.currentTime);
      const duration = controls.formatTime.call(this.player, this.player.duration);
      const format = i18n.get('seekLabel', this.player.config); // Update aria values

      timeline.seekHandle.setAttribute('aria-valuenow', currentTime);
      timeline.seekHandle.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
    }

    setSeekTime(event) {
      if (!this.active || !this.seeking) {
        return;
      }

      const {
        type,
        touches,
        pageX
      } = event;

      if (['mousedown', 'touchstart', 'mousemove', 'touchmove'].includes(type)) {
        const {
          timeline
        } = this.elements.container;
        const {
          previewThumbnails
        } = this.player;
        const clientRect = timeline.getBoundingClientRect();
        const xPos = type === 'touchmove' ? touches[0].pageX : pageX;
        const percentage = clamp(100 / clientRect.width * (xPos - clientRect.left), 0, 100); // Set the editor seek position

        timeline.seekHandle.style.left = `${percentage}%`; // Update the current video time

        this.player.currentTime = this.player.duration * (percentage / 100); // Set video seek

        controls.setRange.call(this.player, this.player.elements.inputs.seek, percentage); // Set the video seek position

        triggerEvent.call(this.player, this.player.media, 'seeked'); // Show the seek thumbnail

        if (this.previewThumbnailsReady) {
          const seekTime = this.player.duration * (percentage / 100);
          previewThumbnails.showImageAtCurrentTime(seekTime);
        }
      }
    } // If the seek handle is near the end of the visible timeline window, shift the timeline


    setTimelineOffset() {
      const {
        playing
      } = this.player;
      const {
        container
      } = this.elements; // Values defining the speed of scrolling and at what points triggering the offset

      const {
        lowerSeek,
        upperSeek,
        upperPlaying,
        scrollSpeed
      } = this.timeline; // Retrieve the container positions for the container, timeline and seek handle

      const clientRect = container.getBoundingClientRect();
      const timelineRect = container.timeline.getBoundingClientRect();
      const seekPos = container.timeline.seekHandle.getBoundingClientRect(); // Current position in the editor container

      const zoom = parseFloat(container.timeline.style.width);
      let offset = parseFloat(container.timeline.style.left);
      const seekHandlePos = parseFloat(container.timeline.seekHandle.style.left); // Retrieve the hover position in the editor container, else retrieve the seek value

      const percentage = 100 / clientRect.width * (seekPos.left - clientRect.left); // If playing set lower upper bound to when we shift the timeline

      const upperBound = this.seeking ? upperSeek : upperPlaying; // Calculate the timeline offset position

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
          offset = Math.min(offset - (lowerSeek - percentage) / scrollSpeed * -1, 0);
        } else {
          offset = Math.min(offset - (lowerSeek - percentage) * -1, 0);
        }
      }

      if (offset === parseFloat(container.timeline.style.left)) {
        return;
      } // Update the preview thumbnails


      this.setVideoTimelimeContent(); // Apply the timeline seek offset

      container.timeline.style.left = `${offset}%`; // Only adjust the seek position when playing or seeking as we don't want to adjust if the current time is updated

      if (!(playing || this.seeking)) {
        return;
      } // Retrieve the position of the seek handle after the timeline shift


      const seekPosUpdated = container.timeline.seekHandle.getBoundingClientRect().left;
      const seekPercentage = clamp(seekHandlePos + 100 / timelineRect.width * (seekPos.left - seekPosUpdated), 0, 100);
      container.timeline.seekHandle.style.left = `${seekPercentage}%`; // Show the corresponding preview thumbnail for the updated seek position

      if (this.seeking && this.previewThumbnailsReady) {
        const seekTime = this.player.duration * (seekPercentage / 100);
        this.player.previewThumbnails.showImageAtCurrentTime(seekTime);
      }
    }

    listeners() {
      // If the duration changes after loading the editor, the corresponding timestamps need to be updated
      // If the duration of the video or previewthumbnails has loaded, update
      this.player.on('loadeddata loadedmetadata', () => {
        if (this.player.media.duration) this.loaded = true;

        if (this.loaded && this.shown) {
          this.showEditor();
          this.updateTimestamps();
          this.setVideoTimelimeContent();
        }
      });
      this.player.on('previewthumbnailsloaded', () => {
        if (this.loaded && this.shown) {
          this.setVideoTimelimeContent();
        }
      });
    } // On toggle of the editor, trigger event


    onChange() {
      if (!this.enabled) {
        return;
      } // Trigger an event


      triggerEvent.call(this.player, this.player.media, this.shown ? 'entereditor' : 'exiteditor', false);
    } // Update UI


    update() {
      if (this.enabled) {
        this.player.debug.log(`trim enabled`);
      } else {
        this.player.debug.log('Trimming is not supported');
      }
    }

    destroy() {
      // Remove the elements with listeners on
      if (this.elements.container && !is.empty(this.elements.container)) {
        replaceElement(this.elements.original, this.elements.container);
        this.loaded = false;
      }
    } // Enter Editor


    enter() {
      if (!this.enabled) {
        return;
      }

      this.shown = true;
      this.showEditor();
      this.onChange();
    } // Exit Editor


    exit() {
      if (!this.enabled || !this.shown) {
        return;
      }

      this.shown = false;
      this.hideEditor();
      this.onChange();
    } // Toggle state


    toggle() {
      if (!this.active) {
        this.enter();
      } else {
        this.exit();
      }
    }

  }

  class Markers {
    constructor(player) {
      // Keep reference to parent
      this.player = player;
      this.config = player.config.markers;
      this.editing = null;
      this.loaded = false;
      this.preLoadedMarkers = [];
      this.elements = {
        markers: []
      };
      this.load();
    } // Determine if Markers is enabled


    get enabled() {
      const {
        config,
        player
      } = this;
      return config.enabled && player.editor.enabled && player.isHTML5 && player.isVideo;
    } // Get active state


    get active() {
      if (!this.enabled) {
        return false;
      }

      return this.elements.markers.length > 0;
    }

    get lowerBound() {
      const {
        trim,
        duration
      } = this.player;
      return trim.active && this.config.lockToTrimRegion ? trim.startTime / duration * 100 : 0;
    }

    get upperBound() {
      const {
        trim,
        duration
      } = this.player;
      return trim.active && this.config.lockToTrimRegion ? trim.endTime / duration * 100 : 100;
    }

    load() {
      // Marker listeners
      this.listeners(); // Update the UI

      this.update();
    }

    addMarker(id, name, time = this.player.currentTime) {
      const {
        timeline
      } = this.player.editor.elements.container;
      const {
        mediaFragment
      } = this.player; // For media fragments the start time can be different from the media's start time

      const percentage = clamp(100 / this.player.duration * parseFloat(time), this.lowerBound, this.upperBound);
      const markerTime = this.player.duration * (parseFloat(percentage) / 100);
      const mediaMarkerTime = mediaFragment.getMediaTime(markerTime);

      if (!this.loaded || !is.element(timeline)) {
        this.preLoadedMarkers.push({
          id,
          name,
          time
        });
        return;
      }

      const container = createElement('div', extend({
        id,
        class: this.player.config.classNames.markers.container,
        'aria-valuemin': 0,
        'aria-valuemax': this.player.duration,
        'aria-valuenow': markerTime,
        'aria-valuetext': controls.formatTime.call(this.player, markerTime),
        'aria-label': i18n.get('marker', this.player.config)
      }));
      this.elements.markers.push(container);
      timeline.appendChild(container); // Set the markers default position to be at the current seek point

      container.style.left = `${percentage}%`;
      this.addMarkerListeners(container);
      const marker = createElement('div', extend({
        id: `${id}Marker`,
        class: this.player.config.classNames.markers.marker
      }));
      container.appendChild(marker); // Add label to marker

      const label = createElement('div', {
        id: `${id}Label`,
        class: this.player.config.classNames.markers.label
      }, name);
      marker.appendChild(label); // Marker added event

      triggerEvent.call(this.player, this.player.media, 'markeradded', false, {
        id,
        time: mediaMarkerTime
      });
    }

    moveMarker(id) {
      const {
        currentTime
      } = this.player;
      const marker = this.elements.markers.find(x => x.id === id); // Calculate marker position in percent

      const percentage = clamp(currentTime / this.player.media.duration * 100, this.lowerBound, this.upperBound);
      if (!marker) return; // Update the position of the marker

      this.setMarkerPosition(marker, percentage, true);
    }

    goToMarker(id) {
      const marker = this.elements.markers.find(x => x.id === id);
      if (!marker) return; // Go to marker on timeline

      this.player.currentTime = Number(marker.getAttribute('aria-valuenow'));
    }

    removeMarker(id) {
      this.elements.markers.forEach(marker => {
        if (marker.id === id) {
          marker.remove();
        }
      });
    }

    removeMarkers() {
      this.elements.markers.forEach(marker => {
        marker.remove();
      });
    }

    addMarkerListeners(marker) {
      // Listen for marker selection
      this.player.listeners.bind(marker, 'mousedown touchstart', event => {
        this.setEditing(event);
      }); // Listen for marker deselection

      this.player.listeners.bind(document.body, 'mouseup touchend', event => {
        if (!is.nullOrUndefined(this.editing)) {
          this.setEditing(event);
        }
      }); // Move marker if selected

      this.player.listeners.bind(document.body, 'mousemove touchmove', event => {
        if (!is.nullOrUndefined(this.editing)) {
          this.setMarkerPositionByXPos(event);
        }
      });
    }

    setEditing(event) {
      const {
        mediaFragment
      } = this.player;
      const {
        type,
        currentTarget
      } = event;
      const marker = this.editing;

      if (type === 'mouseup' || type === 'touchend') {
        const value = marker.getAttribute('aria-valuenow'); // For media fragments the start time can be different from the media's start time

        const mediaValue = mediaFragment.getMediaTime(parseFloat(value));
        triggerEvent.call(this.player, this.player.media, 'markerchange', false, {
          id: marker.id,
          time: mediaValue
        });
        this.editing = null;
      } else if (type === 'mousedown' || type === 'touchstart') {
        this.editing = currentTarget;

        if (this.previewThumbnailsReady) {
          this.player.previewThumbnails.startScrubbing(event);
        }
      }
    }

    setMarkerPositionByXPos(event) {
      if (is.nullOrUndefined(this.editing)) return; // Calculate hover position

      const {
        timeline
      } = this.player.editor.elements.container;
      const clientRect = timeline.getBoundingClientRect();
      const xPos = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX; // Calculate the position of the marker

      const percentage = clamp(100 / clientRect.width * (xPos - clientRect.left), this.lowerBound, this.upperBound); // Selected marker element

      const marker = this.editing; // Update the position of the marker

      this.setMarkerPosition(marker, percentage, false);
    }

    setMarkerPosition(marker, percentage, triggerChange) {
      const {
        mediaFragment,
        duration
      } = this.player;
      const clampedPercentage = clamp(parseFloat(percentage), this.lowerBound, this.upperBound);
      const time = duration * (clampedPercentage / 100);
      const mediaCurrentTime = mediaFragment.getMediaTime(time); // eslint-disable-next-line no-param-reassign

      marker.style.left = `${clampedPercentage}%`;
      marker.setAttribute('aria-valuenow', time);
      marker.setAttribute('aria-valuetext', controls.formatTime(this.player, time));
      if (!triggerChange) return;
      triggerEvent.call(this.player, this.player.media, 'markerchange', false, {
        id: marker.id,
        time: mediaCurrentTime
      });
    }

    listeners() {
      this.player.on('loadeddata loadedmetadata editorloaded', () => {
        const {
          duration,
          editor
        } = this.player; // If markers have been added before the player has a duration add this markers

        if (!duration || editor.active && !is.element(editor.elements.container.timeline)) {
          return;
        }

        this.loaded = true;

        if (this.preLoadedMarkers.length) {
          this.preLoadedMarkers.forEach(marker => this.addMarker(marker.id, marker.name, marker.time));
          this.preLoadedMarkers = [];
        }
      });
      this.player.on('trimchanging', () => {
        if (!this.config.lockToTrimRegion) return;
        this.elements.markers.forEach(marker => this.setMarkerPosition(marker, marker.style.left, false));
      });
      this.player.on('trimchange', () => {
        if (!this.config.lockToTrimRegion) return;
        this.elements.markers.forEach(marker => this.setMarkerPosition(marker, marker.style.left, true));
      });
    }

    toggleMarkers(show = true) {
      this.elements.markers.forEach(marker => {
        toggleHidden(marker, show);
      });
    } // Update UI


    update() {
      if (this.enabled) {
        this.player.debug.log(`Video Markers enabled`);
      } else {
        this.player.debug.log('Video markers is not supported');
      }
    }

    destroy() {
      // Remove the elements with listeners on
      if (this.elements.markers && !is.empty(this.elements.markers)) {
        // This should be cleaned up the by the editor
        this.elements.markers = {};
      }
    }

  }

  // ==========================================================================

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
        container: {}
      };
      this.load();
    } // Determine if trim is enabled


    get enabled() {
      const {
        config
      } = this;
      return config.enabled && this.player.isHTML5 && this.player.isVideo;
    } // Get active state


    get active() {
      if (!this.enabled) {
        return false;
      }

      return this.trimming && is.element(this.elements.container);
    } // Get the current trim time
    // If trimming a media fragment the start can be different from the media's start time so use the media time


    get trimTime() {
      const {
        mediaFragment
      } = this.player;
      const startTime = mediaFragment.getMediaTime(this.startTime);
      const endTime = mediaFragment.getMediaTime(this.endTime);
      return {
        startTime,
        endTime
      };
    }

    get trimLength() {
      const {
        maxTrimLength
      } = this.config; // Default is 100% or the maximum trimming length

      return maxTrimLength > 0 ? clamp(100 / this.player.duration * parseFloat(maxTrimLength), 0, 100) : 100;
    } // Calculate the lower Limit of the trim region


    get lowerBound() {
      const {
        lowerBound
      } = this.config;
      return lowerBound > 0 ? lowerBound / this.player.duration * 100 : 0;
    } // Calculate the upper Limit of the trim region


    get upperBound() {
      const {
        upperBound
      } = this.config;
      return upperBound > 0 ? upperBound / this.player.duration * 100 : 100;
    }

    get previewThumbnailsReady() {
      const {
        previewThumbnails,
        duration
      } = this.player;
      /* Added check for preview thumbnails size as, it is be returned loaded even though there are no thumbnails */

      return previewThumbnails && previewThumbnails.loaded && duration > 0;
    }

    load() {
      // Handle event (incase user presses escape etc)
      on.call(this.player, document, () => {
        this.onChange();
      }); // Update the UI

      this.update(); // Setup player listeners

      this.listeners();
    } // Store the trim start time in seconds (limit)


    setStartTime(percentage) {
      const {
        maxTrimLength
      } = this.config;
      const startTime = this.player.duration * (parseFloat(percentage) / 100);
      this.startTime = maxTrimLength >= 0 ? Math.max(startTime, this.endTime - this.config.maxTrimLength) : startTime;
    } // Store the trim end time in seconds


    setEndTime(percentage) {
      const {
        maxTrimLength
      } = this.config;
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
    } // Show the trim toolbar on the timeline


    showTrimTool() {
      if (this.player.editor && !this.player.editor.active) {
        this.player.editor.enter();
      }

      if (is.empty(this.elements.container.bar)) {
        this.createTrimTool();
      }

      toggleHidden(this.elements.container, false);
    } // Hide the trim toolbar from the timeline


    hideTrimTool() {
      if (this.config.closeEditor) {
        this.player.editor.exit();
      }

      toggleHidden(this.elements.container, true);
    } // Add trim toolbar to the timeline


    createTrimTool() {
      const {
        container
      } = this.player.elements;

      if (is.element(container) && !is.element(this.elements.container) && this.loaded) {
        this.createTrimContainer();
        this.createTrimBar();
        this.createTrimBarThumbs();
        this.createShadedRegions();
        this.createThumbTime();
        triggerEvent.call(this.player, this.player.media, 'trimloaded');
      }
    } // Add trim container to the timeline


    createTrimContainer() {
      this.elements.container = createElement('div', {
        class: this.player.config.classNames.trim.container
      });
      this.player.editor.elements.container.timeline.appendChild(this.elements.container);
    } // Add trim bar to the timeline


    createTrimBar() {
      // If offsetContainer is set to true, we want to offset the start time of the container
      const offset = this.config.offsetContainer ? this.trimLength / 2 : 0; // Set the trim bar from the current seek time percentage to x percent after and limit the end percentage to 100%

      const start = clamp(100 / this.player.duration * parseFloat(this.player.currentTime) - offset, this.lowerBound, this.upperBound);
      const end = Math.min(parseFloat(start) + this.trimLength, this.upperBound); // Store the start and end video percentages in seconds

      this.setStartTime(start);
      this.setEndTime(end);
      this.elements.container.bar = createElement('span', {
        class: this.player.config.classNames.trim.trimTool
      });
      const {
        bar
      } = this.elements.container;
      bar.style.left = `${start.toString()}%`;
      bar.style.width = `${end - start.toString()}%`;
      this.elements.container.appendChild(bar);
      triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
    } // Add trim length thumbs to the timeline


    createTrimBarThumbs() {
      const {
        bar
      } = this.elements.container;
      const {
        trim
      } = this.player.config.classNames; // Create the trim bar thumb elements

      bar.leftThumb = createElement('span', extend({
        class: trim.leftThumb,
        role: 'slider',
        'aria-valuemin': 0,
        'aria-valuemax': this.player.duration,
        'aria-valuenow': this.startTime,
        'aria-valuetext': controls.formatTime.call(this.player, this.startTime),
        'aria-label': i18n.get('trimStart', this.player.config)
      })); // Create the trim bar thumb elements

      bar.rightThumb = createElement('span', extend({
        class: trim.rightThumb,
        role: 'slider',
        'aria-valuemin': 0,
        'aria-valuemax': this.player.duration,
        'aria-valuenow': this.endTime,
        'aria-valuetext': controls.formatTime.call(this.player, this.endTime),
        'aria-label': i18n.get('trimEnd', this.player.config)
      })); // Add the thumbs to the bar

      bar.appendChild(bar.leftThumb);
      bar.appendChild(bar.rightThumb); // Add listens for trim thumb (handle) selection

      this.player.listeners.bind(bar.leftThumb, 'mousedown touchstart', event => {
        if (bar) {
          this.setEditing(event);
        }
      }); // Listen for trim thumb (handle) selection

      this.player.listeners.bind(bar.rightThumb, 'mousedown touchstart', event => {
        if (bar) {
          this.setEditing(event);
        }
      }); // Move trim handles if selected

      this.player.listeners.bind(document.body, 'mousemove touchmove', event => {
        if (this.editing) {
          this.setTrimLength(event);
        }
      }); // Stop trimming when handle is no longer selected

      this.player.listeners.bind(document.body, 'mouseup touchend', event => {
        if (this.editing) this.setEditing(event);
      });
    } // Add shaded out regions to show that this area is not being trimmed


    createShadedRegions() {
      const {
        container
      } = this.elements; // Create two shaded regions on the timeline (before and after the trimming tool)

      container.shadedRegions = [];
      const shadedRegion = createElement('span', {
        class: this.player.config.classNames.trim.shadedRegion
      });
      const shadedRegionClone = shadedRegion.cloneNode(true); // Store and append the shaded regions to the container

      container.shadedRegions.push(shadedRegion);
      container.shadedRegions.push(shadedRegionClone);
      container.insertBefore(shadedRegion, container.bar);
      container.insertBefore(shadedRegionClone, container.bar.nextSibling);
      this.setShadedRegions();
    }

    setShadedRegions() {
      const {
        shadedRegions
      } = this.elements.container;
      const {
        left,
        width
      } = this.elements.container.bar.style; // Retrieve the first and second shaded regions (should always be two regions)

      if (shadedRegions.length < 1) {
        return;
      } // Set the position of the shaded regions relative to the position of the trimming tool


      shadedRegions[0].style.width = left;
      shadedRegions[1].style.left = `${parseFloat(left) + parseFloat(width)}%`;
      shadedRegions[1].style.width = `${100 - (parseFloat(left) + parseFloat(width))}%`;
    }

    createThumbTime() {
      const {
        leftThumb,
        rightThumb
      } = this.elements.container.bar; // Create HTML element, parent+span: time text (e.g., 01:32:00)

      leftThumb.timeContainer = createElement('div', {
        class: this.player.config.classNames.trim.timeContainer
      });
      rightThumb.timeContainer = createElement('div', {
        class: this.player.config.classNames.trim.timeContainer
      }); // Append the time element to the container

      leftThumb.timeContainer.time = createElement('span', {}, controls.formatTime.call(this.player, this.startTime));
      leftThumb.timeContainer.appendChild(leftThumb.timeContainer.time);
      rightThumb.timeContainer.time = createElement('span', {}, controls.formatTime.call(this.player, this.endTime));
      rightThumb.timeContainer.appendChild(rightThumb.timeContainer.time); // Append the time container to the bar

      leftThumb.appendChild(leftThumb.timeContainer);
      rightThumb.appendChild(rightThumb.timeContainer);
    }

    setEditing(event) {
      const {
        bar
      } = this.elements.container;
      const {
        leftThumb,
        rightThumb
      } = this.player.config.classNames.trim;
      const {
        type,
        target
      } = event;

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
      if (!this.editing) return; // Calculate hover position

      const {
        timeline
      } = this.player.editor.elements.container;
      const clientRect = timeline.getBoundingClientRect();
      const xPos = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX;
      const percentage = clamp(100 / clientRect.width * (xPos - clientRect.left), this.lowerBound, this.upperBound);
      const {
        leftThumb,
        rightThumb
      } = this.player.config.classNames.trim; // Update the position of the trim range tool

      if (this.editing === leftThumb) {
        this.setLeftThumbPosition(percentage);
      } else if (this.editing === rightThumb) {
        this.setRightThumbPosition(percentage);
      } // Show the seek thumbnail


      if (this.previewThumbnailsReady) {
        const seekTime = this.player.media.duration * (percentage / 100);
        this.player.previewThumbnails.showImageAtCurrentTime(seekTime);
      }

      triggerEvent.call(this.player, this.player.media, 'trimchanging', false, this.trimTime);
    }

    setTrimStart(time = this.player.currentTime) {
      const percentage = clamp(100 / this.player.duration * parseFloat(time), this.lowerBound, this.upperBound);
      this.setLeftThumbPosition(percentage);
      triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
    }

    setTrimEnd(time = this.player.currentTime) {
      const percentage = clamp(100 / this.player.duration * parseFloat(time), this.lowerBound, this.upperBound);
      this.setRightThumbPosition(percentage);
      triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
    }

    setLeftThumbPosition(percentage) {
      const {
        bar
      } = this.elements.container;
      const {
        left,
        width
      } = bar.style;
      const leftThumbPos = parseFloat(left);
      const rightThumbPos = leftThumbPos + parseFloat(width);
      const rightThumbRelativePos = Math.max(parseFloat(width) - (percentage - leftThumbPos), 0);
      const maxTrimLength = this.getMaxTrimLength(percentage, rightThumbPos); // Set the width to be in the position previously unless region is longer than max trim length

      if (!maxTrimLength) bar.style.width = `${rightThumbRelativePos}%`; // Store and convert the start percentage to time

      bar.style.left = `${percentage}%`;
      if (maxTrimLength) this.setEndTime(rightThumbPos);
      this.setStartTime(percentage); // Prevent the end time being before the start time

      if (this.startTime > this.endTime) this.setEndTime(percentage); // Set the timestamp of the current trim handle position

      this.setThumbTimeStamps();
      this.setThumbAriaData();
      this.setShadedRegions();
    }

    setRightThumbPosition(percentage) {
      const {
        bar
      } = this.elements.container;
      const {
        left,
        width
      } = bar.style;
      const leftThumbPos = parseFloat(left);
      const rightThumbPos = leftThumbPos + parseFloat(width);
      const maxTrimLength = this.getMaxTrimLength(leftThumbPos, percentage); // Update the width of trim bar (right thumb)

      if (maxTrimLength) {
        bar.style.left = `${leftThumbPos + (percentage - rightThumbPos)}%`;
        this.setStartTime(leftThumbPos + (percentage - rightThumbPos));
      } else {
        // Update the width of trim bar (right thumb)
        bar.style.width = `${Math.max(percentage - leftThumbPos, 0)}%`;
      } // Store and convert the end position on the timeline as time


      this.setEndTime(percentage); // Prevent the start time being after the end time

      if (this.endTime < this.startTime) {
        bar.style.left = `${percentage}%`;
        this.setStartTime(`${percentage}%`);
      } // Set the timestamp of the current trim handle position


      this.setThumbTimeStamps();
      this.setThumbAriaData();
      this.setShadedRegions();
    }

    setThumbTimeStamps() {
      const {
        bar
      } = this.elements.container;
      bar.leftThumb.timeContainer.time.innerText = controls.formatTime.call(this.player, this.startTime);
      bar.rightThumb.timeContainer.time.innerText = controls.formatTime.call(this.player, this.endTime);
    }

    setThumbAriaData() {
      const {
        bar
      } = this.elements.container; // Update the aria-value and text

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
    } // Set the seektime to the start of the trim timeline, if the seektime is outside of the region.


    timeUpdate() {
      if (!this.active || !this.trimming || !this.player.playing || this.editing) {
        return;
      }

      const {
        currentTime
      } = this.player;

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
    } // On toggle of trim control, trigger event


    onChange() {
      if (!this.enabled) {
        return;
      } // Update toggle button


      const button = this.player.elements.buttons.trim;

      if (is.element(button)) {
        button.pressed = this.active;
      } // Trigger an event


      triggerEvent.call(this.player, this.player.media, this.trimming ? 'entertrim' : 'exittrim', false, this.trimTime);
    } // Update UI


    update() {
      if (this.enabled) {
        this.player.debug.log(`trim enabled`);
      } else {
        this.player.debug.log('Trimming is not supported');
      } // Add styling hook to show button


      toggleClass(this.player.elements.container, this.player.config.classNames.trim.enabled, this.enabled);
    }

    destroy() {
      // Remove the elements with listeners on
      if (this.elements.container.bar && !is.empty(this.elements.container.bar)) {
        this.elements.container.remove();
      }

      this.player.off('timeupdate', this.timeUpdateFunction);
    } // Enter trim tool


    enter() {
      if (!this.enabled) {
        return;
      }

      this.trimming = true;
      this.showTrimTool();
      this.onChange();
    } // Exit trim tool


    exit() {
      if (!this.enabled) {
        return;
      }

      this.trimming = false;
      this.hideTrimTool();
      this.onChange();
    } // Toggle state


    toggle() {
      if (!this.active) {
        this.enter();
      } else {
        this.exit();
      }
    }

  }

  const parseVtt = vttDataString => {
    const processedList = [];
    const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach(frame => {
      const result = {};
      const lines = frame.split(/\r\n|\n|\r/);
      lines.forEach(line => {
        if (!is.number(result.startTime)) {
          // The line with start and end times on it is the first line of interest
          const matchTimes = line.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/); // Note that this currently ignores caption formatting directives that are optionally on the end of this line - fine for non-captions VTT

          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
          }
        } else if (!is.empty(line.trim()) && is.empty(result.text)) {
          // If we already have the startTime, then we're definitely up to the text line(s)
          const lineSplit = line.trim().split('#xywh=');
          [result.text] = lineSplit; // If there's content in lineSplit[1], then we have sprites. If not, then it's just one frame per image

          if (lineSplit[1]) {
            [result.x, result.y, result.w, result.h] = lineSplit[1].split(',');
          }
        }
      });

      if (result.text) {
        processedList.push(result);
      }
    });
    return processedList;
  };
  /**
   * Preview thumbnails for seek hover and scrubbing
   * Seeking: Hover over the seek bar (desktop only): shows a small preview container above the seek bar
   * Scrubbing: Click and drag the seek bar (desktop and mobile): shows the preview image over the entire video, as if the video is scrubbing at very high speed
   *
   * Notes:
   * - Thumbs are set via JS settings on Plyr init, not HTML5 'track' property. Using the track property would be a bit gross, because it doesn't support custom 'kinds'. kind=metadata might be used for something else, and we want to allow multiple thumbnails tracks. Tracks must have a unique combination of 'kind' and 'label'. We would have to do something like kind=metadata,label=thumbnails1 / kind=metadata,label=thumbnails2. Square peg, round hole
   * - VTT info: the image URL is relative to the VTT, not the current document. But if the url starts with a slash, it will naturally be relative to the current domain. https://support.jwplayer.com/articles/how-to-add-preview-thumbnails
   * - This implementation uses multiple separate img elements. Other implementations use background-image on one element. This would be nice and simple, but Firefox and Safari have flickering issues with replacing backgrounds of larger images. It seems that YouTube perhaps only avoids this because they don't have the option for high-res previews (even the fullscreen ones, when mousedown/seeking). Images appear over the top of each other, and previous ones are discarded once the new ones have been rendered
   */


  const fitRatio = (ratio, outer) => {
    const targetRatio = outer.width / outer.height;
    const result = {};

    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }

    return result;
  };

  class PreviewThumbnails {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    constructor(player) {
      _defineProperty$1(this, "load", () => {
        // Toggle the regular seek tooltip
        if (this.player.elements.display.seekTooltip) {
          this.player.elements.display.seekTooltip.hidden = this.enabled;
        }

        if (!this.enabled) {
          return;
        }

        this.getThumbnails().then(() => {
          if (!this.enabled) {
            return;
          } // Render DOM elements


          this.render(); // Check to see if thumb container size was specified manually in CSS

          this.determineContainerAutoSizing();
          this.loaded = true; // Trigger event

          triggerEvent.call(this.player, this.player.media, 'previewthumbnailsloaded');
        });
      });

      _defineProperty$1(this, "getThumbnails", () => {
        return new Promise(resolve => {
          const {
            src
          } = this.player.config.previewThumbnails;

          if (is.empty(src)) {
            throw new Error('Missing previewThumbnails.src config attribute');
          } // Resolve promise


          const sortAndResolve = () => {
            // Sort smallest to biggest (e.g., [120p, 480p, 1080p])
            this.thumbnails.sort((x, y) => x.height - y.height);
            this.player.debug.log('Preview thumbnails', this.thumbnails);
            resolve();
          }; // Via callback()


          if (is.function(src)) {
            src(thumbnails => {
              this.thumbnails = thumbnails;
              sortAndResolve();
            });
          } // VTT urls
          else {
              // If string, convert into single-element list
              const urls = is.string(src) ? [src] : src; // Loop through each src URL. Download and process the VTT file, storing the resulting data in this.thumbnails

              const promises = urls.map(u => this.getThumbnail(u)); // Resolve

              Promise.all(promises).then(sortAndResolve);
            }
        });
      });

      _defineProperty$1(this, "startMove", event => {
        if (!this.loaded) {
          return;
        }

        if (!is.event(event) || !['touchmove', 'mousemove'].includes(event.type)) {
          return;
        } // Wait until media has a duration


        if (!this.player.media.duration) {
          return;
        }

        if (event.type === 'touchmove') {
          // Calculate seek hover position as approx video seconds
          this.seekTime = this.player.duration * (this.player.elements.inputs.seek.value / 100);
        } else {
          // Calculate seek hover position as approx video seconds
          const clientRect = this.player.elements.progress.getBoundingClientRect();
          const percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
          this.seekTime = this.player.duration * (percentage / 100);

          if (this.seekTime < 0) {
            // The mousemove fires for 10+px out to the left
            this.seekTime = 0;
          }

          if (this.seekTime > this.player.duration - 1) {
            // Took 1 second off the duration for safety, because different players can disagree on the real duration of a video
            this.seekTime = this.player.duration - 1;
          }

          this.mousePosX = event.pageX; // Set time text inside image container

          this.elements.thumb.time.innerText = controls.formatTime.call(this.player, this.seekTime);
        } // Download and show image


        this.showImageAtCurrentTime();
      });

      _defineProperty$1(this, "endMove", () => {
        this.toggleThumbContainer(false, true);
      });

      _defineProperty$1(this, "startScrubbing", event => {
        // Only act on left mouse button (0), or touch device (event.button does not exist or is false)
        if (is.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
          this.mouseDown = true; // Wait until media has a duration

          if (this.player.media.duration) {
            if (this.player.config.previewThumbnails.enableScrubbing || overrideScrubbing) {
              this.toggleScrubbingContainer(true);
            }

            this.toggleThumbContainer(false, true); // Download and show image

            this.showImageAtCurrentTime();
          }
        }
      });

      _defineProperty$1(this, "endScrubbing", () => {
        this.mouseDown = false; // Hide scrubbing preview. But wait until the video has successfully seeked before hiding the scrubbing preview

        if (Math.ceil(this.lastTime) === Math.ceil(this.player.currentTime)) {
          // The video was already seeked/loaded at the chosen time - hide immediately
          this.toggleScrubbingContainer(false);
        } else {
          // The video hasn't seeked yet. Wait for that
          once.call(this.player, this.player.media, 'timeupdate', () => {
            // Re-check mousedown - we might have already started scrubbing again
            if (!this.mouseDown) {
              this.toggleScrubbingContainer(false);
            }
          });
        }
      });

      _defineProperty$1(this, "listeners", () => {
        // Hide thumbnail preview - on mouse click, mouse leave (in listeners.js for now), and video play/seek. All four are required, e.g., for buffering
        this.player.on('play', () => {
          this.toggleThumbContainer(false, true);
        });
        this.player.on('seeked', () => {
          this.toggleThumbContainer(false);
        });
        this.player.on('timeupdate', () => {
          this.lastTime = this.player.currentTime;
        });
      });

      _defineProperty$1(this, "render", () => {
        // Create HTML element: plyr__preview-thumbnail-container
        this.elements.thumb.container = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        }); // Wrapper for the image for styling

        this.elements.thumb.imageContainer = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        });
        this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer); // Create HTML element, parent+span: time text (e.g., 01:32:00)

        const timeContainer = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = createElement('span', {}, '00:00');
        timeContainer.appendChild(this.elements.thumb.time);
        this.elements.thumb.container.appendChild(timeContainer); // Inject the whole thumb

        if (is.element(this.player.elements.progress)) {
          this.player.elements.progress.appendChild(this.elements.thumb.container);
        } // Create HTML element: plyr__preview-scrubbing-container


        this.elements.scrubbing.container = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        });
        this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      });

      _defineProperty$1(this, "destroy", () => {
        if (this.elements.thumb.container) {
          this.elements.thumb.container.remove();
        }

        if (this.elements.scrubbing.container) {
          this.elements.scrubbing.container.remove();
        }
      });

      _defineProperty$1(this, "showImageAtCurrentTime", () => {
        if (this.mouseDown) {
          this.setScrubbingContainerSize();
        } else {
          this.setThumbContainerSizeAndPos();
        } // Adjust image time if the timeline is offset


        time + (this.player.mediaFragment.enabled && this.player.mediaFragment.startTime || 0); // Find the desired thumbnail index
        // TODO: Handle a video longer than the thumbs where thumbNum is null

        const thumbNum = this.thumbnails[0].frames.findIndex(frame => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime);
        const hasThumb = thumbNum >= 0;
        let qualityIndex = 0; // Show the thumb container if we're not scrubbing and not setting a custom container

        if (!this.mouseDown && !container) {
          this.toggleThumbContainer(hasThumb);
        } // No matching thumb found


        if (!hasThumb) {
          return;
        } // Check to see if we've already downloaded higher quality versions of this image


        this.thumbnails.forEach((thumbnail, index) => {
          if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
            qualityIndex = index;
          }
        }); // Only proceed if either thumbnum, thumbfilename or container has changed

        if (thumbNum !== this.showingThumb || container) {
          this.showingThumb = thumbNum;
          this.loadImage(qualityIndex, container);
        }
      });

      _defineProperty$1(this, "loadImage", (qualityIndex = 0) => {
        const thumbNum = this.showingThumb;
        const thumbnail = this.thumbnails[qualityIndex];
        const {
          urlPrefix
        } = thumbnail;
        const frame = thumbnail.frames[thumbNum];
        const thumbFilename = thumbnail.frames[thumbNum].text;
        const thumbUrl = urlPrefix + thumbFilename;
        const currentImageElement = container ? container.currentImageElement : this.currentImageElement;

        if (!currentImageElement || currentImageElement.dataset.filename !== thumbFilename) {
          // If we're already loading a previous image, remove its onload handler - we don't want it to load after this one
          // Only do this if not using sprites. Without sprites we really want to show as many images as possible, as a best-effort
          if (this.loadingImage && this.usingSprites) {
            this.loadingImage.onload = null;
          } // We're building and adding a new image. In other implementations of similar functionality (YouTube), background image
          // is instead used. But this causes issues with larger images in Firefox and Safari - switching between background
          // images causes a flicker. Putting a new image over the top does not


          const previewImage = new Image();
          previewImage.dataset.index = thumbNum;
          previewImage.dataset.filename = thumbFilename;
          this.showingThumbFilename = thumbFilename;
          this.player.debug.log(`Loading image: ${thumbUrl}`); // For some reason, passing the named function directly causes it to execute immediately. So I've wrapped it in an anonymous function...

          previewImage.addEventListener('load', () => {
            this.showImage( // For the editor timeline, we need the most recent container however, if the event has changed between seeking and hover we should use the new container
            container || this.currentImageContainer, previewImage, frame, qualityIndex, thumbNum, thumbFilename, true, !!container);
          }, {
            once: true
          });
          previewImage.src = thumbUrl;
          this.loadingImage = previewImage;
          this.removeOldImages(previewImage, container);
        } else {
          // Update the existing image
          this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
          this.currentImageElement.dataset.index = thumbNum;
          this.removeOldImages(this.currentImageElement);
        }
      });

      _defineProperty$1(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
        this.player.debug.log(`Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`);
        this.setImageSizeAndOffset(previewImage, frame);
        currentImageContainer.appendChild(previewImage);

        if (container) {
          // eslint-disable-next-line no-param-reassign
          currentImageContainer.currentImageElement = previewImage;
        } else {
          this.currentImageElement = previewImage;
        }

        if (!this.loadedImages.includes(thumbFilename)) {
          this.loadedImages.push(thumbFilename);
        } // Preload images before and after the current one
        // Show higher quality of the same frame
        // Each step here has a short time delay, and only continues if still hovering/seeking the same spot. This is to protect slow connections from overloading


        this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
      });

      _defineProperty$1(this, "removeOldImages", currentImage => {
        // Get a list of all images, convert it from a DOM list to an array
        Array.from(this.currentImageContainer.children).forEach(image => {
          if (image.tagName.toLowerCase() !== 'img') {
            return;
          }

          const removeDelay = this.usingSprites ? 500 : 1000;

          if (image && image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
            // Wait 200ms, as the new image can take some time to show on certain browsers (even though it was downloaded before showing). This will prevent flicker, and show some generosity towards slower clients
            // First set attribute 'deleting' to prevent multi-handling of this on repeat firing of this function
            // eslint-disable-next-line no-param-reassign
            image.dataset.deleting = true;
            setTimeout(() => {
              currentImageContainer.removeChild(image);
              this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
            }, removeDelay);
          }
        });
      });

      _defineProperty$1(this, "preloadNearby", (thumbNum, forward = true) => {
        return new Promise(resolve => {
          setTimeout(() => {
            const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;

            if (this.showingThumbFilename === oldThumbFilename) {
              // Find the nearest thumbs with different filenames. Sometimes it'll be the next index, but in the case of sprites, it might be 100+ away
              let thumbnailsClone;

              if (forward) {
                thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
              } else {
                thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
              }

              let foundOne = false;
              thumbnailsClone.forEach(frame => {
                const newThumbFilename = frame.text;

                if (newThumbFilename !== oldThumbFilename) {
                  // Found one with a different filename. Make sure it hasn't already been loaded on this page visit
                  if (!this.loadedImages.includes(newThumbFilename)) {
                    foundOne = true;
                    this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                    const {
                      urlPrefix
                    } = this.thumbnails[0];
                    const thumbURL = urlPrefix + newThumbFilename;
                    const previewImage = new Image();
                    previewImage.src = thumbURL;

                    previewImage.onload = () => {
                      this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                      if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename); // We don't resolve until the thumb is loaded

                      resolve();
                    };
                  }
                }
              }); // If there are none to preload then we want to resolve immediately

              if (!foundOne) {
                resolve();
              }
            }
          }, 300);
        });
      });

      _defineProperty$1(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
        if (currentQualityIndex < this.thumbnails.length - 1) {
          // Only use the higher quality version if it's going to look any better - if the current thumb is of a lower pixel density than the thumbnail container
          let previewImageHeight = previewImage.naturalHeight;

          if (this.usingSprites) {
            previewImageHeight = frame.h;
          }

          if (previewImageHeight < this.thumbContainerHeight) {
            // Recurse back to the loadImage function - show a higher quality one, but only if the viewer is on this frame for a while
            setTimeout(() => {
              // Make sure the mouse hasn't already moved on and started hovering at another image
              if (this.showingThumbFilename === thumbFilename) {
                this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
                this.loadImage(currentQualityIndex + 1);
              }
            }, 300);
          }
        }
      });

      _defineProperty$1(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
        const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(className, toggle);

        if (!toggle && clearShowing) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });

      _defineProperty$1(this, "toggleScrubbingContainer", (toggle = false) => {
        const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(className, toggle);

        if (!toggle) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });

      _defineProperty$1(this, "determineContainerAutoSizing", () => {
        if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
          // This will prevent auto sizing in this.setThumbContainerSizeAndPos()
          this.sizeSpecifiedInCSS = true;
        }
      });

      _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
        if (!this.sizeSpecifiedInCSS) {
          const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`;
          this.elements.thumb.imageContainer.style.width = `${thumbWidth}px`;
        } else if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
          const thumbWidth = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.width = `${thumbWidth}px`;
        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
          const thumbHeight = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = `${thumbHeight}px`;
        }

        this.setThumbContainerPos();
      });

      _defineProperty$1(this, "setThumbContainerPos", () => {
        const seekbarRect = this.player.elements.progress.getBoundingClientRect();
        const plyrRect = this.player.elements.container.getBoundingClientRect();
        const {
          container
        } = this.elements.thumb; // Find the lowest and highest desired left-position, so we don't slide out the side of the video container

        const minVal = plyrRect.left - seekbarRect.left + 10;
        const maxVal = plyrRect.right - seekbarRect.left - container.clientWidth - 10; // Set preview container position to: mousepos, minus seekbar.left, minus half of previewContainer.clientWidth

        let previewPos = this.mousePosX - seekbarRect.left - container.clientWidth / 2;

        if (previewPos < minVal) {
          previewPos = minVal;
        }

        if (previewPos > maxVal) {
          previewPos = maxVal;
        }

        container.style.left = `${previewPos}px`;
      });

      _defineProperty$1(this, "setScrubbingContainerSize", () => {
        const {
          width,
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        this.elements.scrubbing.container.style.width = `${width}px`;
        this.elements.scrubbing.container.style.height = `${height}px`;
      });

      _defineProperty$1(this, "setImageSizeAndOffset", (previewImage, frame) => {
        if (!this.usingSprites) {
          return;
        }

        const container = this.editor ? this.player.editor.videoContainerHeight : this.thumbContainerHeight; // Find difference between height and preview container height

        const multiplier = container / frame.h; // eslint-disable-next-line no-param-reassign

        previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`; // eslint-disable-next-line no-param-reassign

        previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`; // eslint-disable-next-line no-param-reassign

        previewImage.style.left = `-${frame.x * multiplier}px`; // eslint-disable-next-line no-param-reassign

        previewImage.style.top = `-${frame.y * multiplier}px`;
      });

      this.player = player;
      this.thumbnails = [];
      this.loaded = false;
      this.lastMouseMoveTime = Date.now();
      this.mouseDown = false;
      this.loadedImages = [];
      this.elements = {
        thumb: {},
        scrubbing: {}
      };
      this.load();
    }

    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }

    // Process individual VTT file
    async getVttFile(src) {
      if (src.startsWith('WEBVTT')) {
        await this.getThumbnail(src);
      } else {
        const response = await fetch(src);
        await this.getThumbnail(response, src);
      }
    } // Process thumbnail


    getThumbnail(src, url) {
      return new Promise(resolve => {
        const thumbnail = {
          frames: parseVtt(src),
          height: null,
          urlPrefix: ''
        }; // If the URLs don't start with '/', then we need to set their relative path to be the location of the VTT file
        // If the URLs do start with '/', then they obviously don't need a prefix, so it will remain blank
        // If the thumbnail URLs start with with none of '/', 'http://' or 'https://', then we need to set their relative path to be the location of the VTT file

        if (!thumbnail.frames[0].text.startsWith('/') && !thumbnail.frames[0].text.startsWith('http://') && !thumbnail.frames[0].text.startsWith('https://')) {
          thumbnail.urlPrefix = url.substring(0, url.lastIndexOf('/') + 1);
        } // If the URLs don't start with '/', then we need to set their relative path to be the location of the VTT file
        // If the URLs do start with '/', then they obviously don't need a prefix, so it will remain blank
        // If the thumbnail URLs start with with none of '/', 'http://' or 'https://', then we need to set their relative path to be the location of the VTT file


        if (!thumbnail.frames[0].text.startsWith('/') && !thumbnail.frames[0].text.startsWith('http://') && !thumbnail.frames[0].text.startsWith('https://')) {
          thumbnail.urlPrefix = url.substring(0, url.lastIndexOf('/') + 1);
        } // Download the first frame, so that we can determine/set the height of this thumbnailsDef


        const tempImage = new Image();
        tempImage.addEventListener('load', () => {
          thumbnail.height = tempImage.naturalHeight;
          thumbnail.width = tempImage.naturalWidth;
          this.thumbnails.push(thumbnail);
          resolve();
        });
        tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
      });
    }

    get currentImageContainer() {
      if (this.mouseDown) {
        return this.elements.scrubbing.container;
      }

      return this.elements.thumb.imageContainer;
    }

    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes('w');
    }

    get thumbAspectRatio() {
      if (this.usingSprites) {
        return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
      }

      return this.thumbnails[0].width / this.thumbnails[0].height;
    }

    get thumbContainerHeight() {
      if (this.mouseDown) {
        const {
          height
        } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        return height;
      } // If css is used this needs to return the css height for sprites to work (see setImageSizeAndOffset)


      if (this.sizeSpecifiedInCSS) {
        return this.elements.thumb.imageContainer.clientHeight;
      }

      return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }

    get currentImageElement() {
      if (this.mouseDown) {
        return this.currentScrubbingImageElement;
      }

      return this.currentThumbnailImageElement;
    }

    set currentImageElement(element) {
      if (this.mouseDown) {
        this.currentScrubbingImageElement = element;
      } else {
        this.currentThumbnailImageElement = element;
      }
    }

  }

  // ==========================================================================
  const source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements(type, attributes) {
      if (is.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is.array(attributes)) {
        attributes.forEach(attribute => {
          insertElement(type, this.media, attribute);
        });
      }
    },

    // Update source
    // Sources are not checked for support so be careful
    change(input) {
      if (!getDeep(input, 'sources.length')) {
        this.debug.warn('Invalid source format');
        return;
      } // Cancel current network requests


      html5.cancelRequests.call(this); // Destroy instance and re-setup

      this.destroy.call(this, () => {
        // Reset quality options
        this.options.quality = []; // Remove elements

        removeElement(this.media);
        this.media = null; // Reset class name

        if (is.element(this.elements.container)) {
          this.elements.container.removeAttribute('class');
        } // Set the type and provider


        const {
          sources,
          type
        } = input;
        const [{
          provider = providers.html5,
          src
        }] = sources;
        const tagName = provider === 'html5' ? type : 'div';
        const attributes = provider === 'html5' ? {} : {
          src
        };
        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes)
        }); // Inject the new element

        this.elements.container.appendChild(this.media); // Autoplay the new source?

        if (is.boolean(input.autoplay)) {
          this.config.autoplay = input.autoplay;
        } // Set attributes for audio and video


        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute('crossorigin', '');
          }

          if (this.config.autoplay) {
            this.media.setAttribute('autoplay', '');
          }

          if (!is.empty(input.poster)) {
            this.poster = input.poster;
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
        } // Restore class hook


        ui.addStyleHook.call(this, this.elements.container); // Set new sources for html5

        if (this.isHTML5) {
          source.insertElements.call(this, 'source', sources);
        } // Set video title


        this.config.title = input.title; // Set up from scratch

        media.setup.call(this); // HTML5 stuff

        if (this.isHTML5) {
          // Setup captions
          if (Object.keys(input).includes('tracks')) {
            source.insertElements.call(this, 'track', input.tracks);
          }
        } // Set up sync points


        this.config.syncPoints = input.syncPoints; // If HTML5 or embed but not fully supported, setupInterface and call ready now

        if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
          // Setup interface
          ui.build.call(this);
        } // Load HTML5 sources


        if (this.isHTML5) {
          this.media.load();
        } // Destroy media fragment


        if (this.mediaFragment && this.mediaFragment.active) {
          this.mediaFragment.destroy();
          this.mediaFragment = null;
        } // Create new instance of media fragment if still enabled


        if (this.config.mediaFragment.enabled) {
          this.mediaFragment = new MediaFragment(this);
        } // Update previewThumbnails config & reload plugin


        if (!is.empty(input.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, input.previewThumbnails); // Cleanup previewThumbnails plugin if it was loaded

          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          } // Create new instance if it is still enabled


          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new PreviewThumbnails(this);
          }
        } // Create new instance of trim plugin


        if (this.editor && this.editor.loaded) {
          this.editor.destroy();
          this.editor = null;
        } // Create new instance if it is still enabled


        if (this.config.editor.enabled) {
          this.editor = new Editor(this);
        } // Create new instance of video markers


        if (this.markers) {
          this.markers.destroy();
          this.markers = null;
        } // Create new instance if it is still enabled


        if (this.config.markers.enabled) {
          this.markers = new Markers(this);
        } // Create new instance of trim plugin


        if (this.trim && this.trim.loaded) {
          this.trim.destroy();
          this.trim = null;
        } // Create new instance if it is still enabled


        if (this.config.trim.enabled) {
          this.trim = new Trim(this);
        } // Update trimming tool support


        this.trim.update(); // Update the fullscreen support

        this.fullscreen.update();
      }, true);
    }

  };

  // TODO: Use a WeakMap for private globals
  // const globals = new WeakMap();
  // Plyr instance

  class Plyr {
    constructor(target, options) {
      _defineProperty$1(this, "play", () => {
        if (!is.function(this.media.play)) {
          return null;
        } // Intecept play with ads


        if (this.ads && this.ads.enabled) {
          this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
        } // Return the promise (for HTML5)


        return this.media.play();
      });

      _defineProperty$1(this, "pause", () => {
        if (!this.playing || !is.function(this.media.pause)) {
          return null;
        }

        return this.media.pause();
      });

      _defineProperty$1(this, "togglePlay", input => {
        // Toggle based on current state if nothing passed
        const toggle = is.boolean(input) ? input : !this.playing;

        if (toggle) {
          return this.play();
        }

        return this.pause();
      });

      _defineProperty$1(this, "stop", () => {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is.function(this.media.stop)) {
          this.media.stop();
        }
      });

      _defineProperty$1(this, "restart", () => {
        this.currentTime = 0;
      });

      _defineProperty$1(this, "rewind", seekTime => {
        this.currentTime -= is.number(seekTime) ? seekTime : this.config.seekTime;
      });

      _defineProperty$1(this, "forward", seekTime => {
        this.currentTime += is.number(seekTime) ? seekTime : this.config.seekTime;
      });

      _defineProperty$1(this, "increaseVolume", step => {
        const volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is.number(step) ? step : 0);
      });

      _defineProperty$1(this, "decreaseVolume", step => {
        this.increaseVolume(-step);
      });

      _defineProperty$1(this, "airplay", () => {
        // Show dialog if supported
        if (support.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      });

      _defineProperty$1(this, "toggleControls", toggle => {
        // Don't toggle if missing UI support or if it's audio
        if (this.supported.ui && !this.isAudio) {
          // Get state before change
          const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls); // Negate the argument if not undefined since adding the class to hides the controls

          const force = typeof toggle === 'undefined' ? undefined : !toggle; // Apply and get updated state

          const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force); // Close menu

          if (hiding && is.array(this.config.controls) && this.config.controls.includes('settings') && !is.empty(this.config.settings)) {
            controls.toggleMenu.call(this, false);
          } // Trigger event on change


          if (hiding !== isHidden) {
            const eventName = hiding ? 'controlshidden' : 'controlsshown';
            triggerEvent.call(this, this.media, eventName);
          }

          return !hiding;
        }

        return false;
      });

      _defineProperty$1(this, "on", (event, callback) => {
        on.call(this, this.elements.container, event, callback);
      });

      _defineProperty$1(this, "once", (event, callback) => {
        once.call(this, this.elements.container, event, callback);
      });

      _defineProperty$1(this, "off", (event, callback) => {
        off(this.elements.container, event, callback);
      });

      _defineProperty$1(this, "destroy", (callback, soft = false) => {
        if (!this.ready) {
          return;
        }

        const done = () => {
          // Reset overflow (incase destroyed while in fullscreen)
          document.body.style.overflow = ''; // GC for embed

          this.embed = null; // If it's a soft destroy, make minimal changes

          if (soft) {
            if (Object.keys(this.elements).length) {
              // Remove elements
              removeElement(this.elements.buttons.play);
              removeElement(this.elements.captions);
              removeElement(this.elements.controls);
              removeElement(this.elements.wrapper);
              removeElement(this.editor.elements.container); // Clear for GC

              this.elements.buttons.play = null;
              this.elements.captions = null;
              this.elements.controls = null;
              this.elements.wrapper = null;
            } // Callback


            if (is.function(callback)) {
              callback();
            }
          } else {
            // Event
            triggerEvent.call(this, this.elements.container, 'destroyed', true); // Unbind listeners

            unbindListeners.call(this); // Cancel current network requests

            html5.cancelRequests.call(this); // Replace the container with the original element provided

            replaceElement(this.elements.original, this.elements.container); // Destroy the editor (editor is inserted after the container element)

            this.editor.destroy(); // Callback

            if (is.function(callback)) {
              callback.call(this.elements.original);
            } // Reset state


            this.ready = false; // Clear for garbage collection

            setTimeout(() => {
              this.elements = null;
              this.media = null;
            }, 200);
          }
        }; // Stop playback


        this.stop(); // Clear timeouts

        clearTimeout(this.timers.loading);
        clearTimeout(this.timers.controls);
        clearTimeout(this.timers.resized); // Provider specific stuff

        if (this.isHTML5) {
          // Restore native video controls
          ui.toggleNativeControls.call(this, true); // Clean up

          done();
        } else if (this.isYouTube) {
          // Clear timers
          clearInterval(this.timers.buffering);
          clearInterval(this.timers.playing); // Destroy YouTube API

          if (this.embed !== null && is.function(this.embed.destroy)) {
            this.embed.destroy();
          } // Clean up


          done();
        } else if (this.isVimeo) {
          // Destroy Vimeo API
          // then clean up (wait, to prevent postmessage errors)
          if (this.embed !== null) {
            this.embed.unload().then(done);
          } // Vimeo does not always return


          setTimeout(done, 200);
        }
      });

      _defineProperty$1(this, "supports", type => support.mime.call(this, type));

      this.timers = {}; // State

      this.ready = false;
      this.loading = false;
      this.failed = false; // Touch device

      this.touch = support.touch; // Set the media element

      this.media = target; // String selector passed

      if (is.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      } // jQuery, NodeList or Array passed, use first element


      if (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) {
        // eslint-disable-next-line
        this.media = this.media[0];
      } // Set config


      this.config = extend({}, defaults, Plyr.defaults, options || {}, (() => {
        try {
          return JSON.parse(this.media.getAttribute('data-plyr-config'));
        } catch (e) {
          return {};
        }
      })()); // Elements cache

      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }; // Captions

      this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }; // Fullscreen

      this.fullscreen = {
        active: false
      }; // Options

      this.options = {
        speed: [],
        quality: []
      }; // Debugging
      // TODO: move to globals

      this.debug = new Console(this.config.debug); // Log config options and support

      this.debug.log('Config', this.config);
      this.debug.log('Support', support); // We need an element to setup

      if (is.nullOrUndefined(this.media) || !is.element(this.media)) {
        this.debug.error('Setup failed: no suitable element passed');
        return;
      } // Bail if the element is initialized


      if (this.media.plyr) {
        this.debug.warn('Target already setup');
        return;
      } // Bail if not enabled


      if (!this.config.enabled) {
        this.debug.error('Setup failed: disabled by config');
        return;
      } // Bail if disabled or no basic support
      // You may want to disable certain UAs etc


      if (!support.check().api) {
        this.debug.error('Setup failed: no support');
        return;
      } // Cache original element state for .destroy()


      const clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone; // Set media type based on tag or data attribute
      // Supported: video, audio, vimeo, youtube

      const _type = this.media.tagName.toLowerCase(); // Embed properties


      let iframe = null;
      let url = null; // Different setup based on type

      switch (_type) {
        case 'div':
          // Find the frame
          iframe = this.media.querySelector('iframe'); // <iframe> type

          if (is.element(iframe)) {
            // Detect provider
            url = parseUrl(iframe.getAttribute('src'));
            this.provider = getProviderByUrl(url.toString()); // Rework elements

            this.elements.container = this.media;
            this.media = iframe; // Reset classname

            this.elements.container.className = ''; // Get attributes from URL and set config

            if (url.search.length) {
              const truthy = ['1', 'true'];

              if (truthy.includes(url.searchParams.get('autoplay'))) {
                this.config.autoplay = true;
              }

              if (truthy.includes(url.searchParams.get('loop'))) {
                this.config.loop.active = true;
              } // TODO: replace fullscreen.iosNative with this playsinline config option
              // YouTube requires the playsinline in the URL


              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get('playsinline'));
                this.config.youtube.hl = url.searchParams.get('hl'); // TODO: Should this be setting language?
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            // <div> with attributes
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider); // Remove attribute

            this.media.removeAttribute(this.config.attributes.embed.provider);
          } // Unsupported or missing provider


          if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
            this.debug.error('Setup failed: Invalid provider');
            return;
          } // Audio will come later for external providers


          this.type = types.video;
          break;

        case 'video':
        case 'audio':
          this.type = _type;
          this.provider = providers.html5; // Get config from attributes

          if (this.media.hasAttribute('crossorigin')) {
            this.config.crossorigin = true;
          }

          if (this.media.hasAttribute('autoplay')) {
            this.config.autoplay = true;
          }

          if (this.media.hasAttribute('playsinline') || this.media.hasAttribute('webkit-playsinline')) {
            this.config.playsinline = true;
          }

          if (this.media.hasAttribute('muted')) {
            this.config.muted = true;
          }

          if (this.media.hasAttribute('loop')) {
            this.config.loop.active = true;
          }

          break;

        default:
          this.debug.error('Setup failed: unsupported type');
          return;
      } // Check for support again but with type


      this.supported = support.check(this.type, this.provider, this.config.playsinline); // If no support for even API, bail

      if (!this.supported.api) {
        this.debug.error('Setup failed: no support');
        return;
      }

      this.eventListeners = []; // Create listeners

      this.listeners = new Listeners(this); // Setup local storage for user settings

      this.storage = new Storage(this); // Store reference

      this.media.plyr = this; // Wrap media

      if (!is.element(this.elements.container)) {
        this.elements.container = createElement('div', {
          tabindex: 0
        });
        wrap(this.media, this.elements.container);
      } // Migrate custom properties from media to container (so they work 😉)


      ui.migrateStyles.call(this); // Add style hook

      ui.addStyleHook.call(this, this.elements.container); // Setup media

      media.setup.call(this); // Listen for events if debugging

      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(' '), event => {
          this.debug.log(`event: ${event.type}`);
        });
      } // Media Fragment?


      this.mediaFragment = new MediaFragment(this); // Setup Editor

      this.editor = new Editor(this); // Setup video markers

      this.markers = new Markers(this); // Setup trim

      this.trim = new Trim(this); // Setup fullscreen

      this.fullscreen = new Fullscreen(this); // Setup interface
      // If embed but not fully supported, build interface now to avoid flash of controls

      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui.build.call(this);
      } // Container listeners


      this.listeners.container(); // Global listeners

      this.listeners.global(); // Setup ads if provided

      if (this.config.ads.enabled) {
        this.ads = new Ads(this);
      } // Autoplay if required


      if (this.isHTML5 && this.config.autoplay) {
        this.once('canplay', () => silencePromise(this.play()));
      } // Seek time will be recorded (in listeners.js) so we can prevent hiding controls for a few seconds after seek


      this.lastSeekTime = 0; // Setup preview thumbnails if enabled

      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new PreviewThumbnails(this);
      }
    } // ---------------------------------------
    // API
    // ---------------------------------------

    /**
     * Types and provider helpers
     */


    get isHTML5() {
      return this.provider === providers.html5;
    }

    get isEmbed() {
      return this.isYouTube || this.isVimeo;
    }

    get isYouTube() {
      return this.provider === providers.youtube;
    }

    get isVimeo() {
      return this.provider === providers.vimeo;
    }

    get isVideo() {
      return this.type === types.video;
    }

    get isAudio() {
      return this.type === types.audio;
    }
    /**
     * Play the media, or play the advertisement (if they are not blocked)
     */


    /**
     * Get playing state
     */
    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
    /**
     * Get paused state
     */


    get paused() {
      return Boolean(this.media.paused);
    }
    /**
     * Get stopped state
     */


    get stopped() {
      return Boolean(this.paused && this.currentTime === 0);
    }
    /**
     * Get ended state
     */


    get ended() {
      return Boolean(this.media.ended || this.mediaFragment.active && this.currentTime >= this.duration && this.paused);
    }
    /**
     * Toggle playback based on current status
     * @param {Boolean} input
     */


    /**
     * Rewind Frame
     */
    frameRewind() {
      this.currentTime -= 1 / this.config.frameRate;
    }
    /**
     * Forward Frame
     */


    frameForward() {
      this.currentTime += 1 / this.config.frameRate;
    }
    /**
     * Seek to a time
     * @param {Number} input - where to seek to in seconds. Defaults to 0 (the start)
     */


    set currentTime(input) {
      // Bail if media duration isn't available yet
      if (!this.duration) {
        return;
      } // Validate input


      const inputIsValid = is.number(input) && input > 0; // Media fragment start time offset

      const offset = this.mediaFragment.enabled && this.mediaFragment.startTime || 0; // Set

      this.media.currentTime = inputIsValid ? Math.min(input + offset, this.duration + offset) : 0 + offset; // Logging

      this.debug.log(`Seeking to ${this.currentTime} seconds`);
    }
    /**
     * Get current time
     */


    get currentTime() {
      // Media fragment start time offset
      const offset = this.mediaFragment.enabled && this.mediaFragment.startTime || 0;
      return Number(this.media.currentTime - offset);
    }
    /**
     * Get buffered
     */


    get buffered() {
      const {
        buffered
      } = this.media; // YouTube / Vimeo return a float between 0-1

      if (is.number(buffered)) {
        return buffered;
      } // HTML5
      // TODO: Handle buffered chunks of the media
      // (i.e. seek to another section buffers only that section)


      if (buffered && buffered.length && this.duration > 0) {
        return buffered.end(0) / this.duration;
      }

      return 0;
    }
    /**
     * Get seeking status
     */


    get seeking() {
      return Boolean(this.media.seeking);
    }
    /**
     * Get the duration of the current media
     */


    get duration() {
      // Faux duration set via config or media fragment
      const fauxDuration = parseFloat(this.config.duration || this.mediaFragment.enabled && this.mediaFragment.duration); // Media duration can be NaN or Infinity before the media has loaded

      const realDuration = (this.media || {}).duration;
      const duration = !is.number(realDuration) || realDuration === Infinity ? 0 : realDuration; // If config duration is funky, use regular duration

      return fauxDuration || duration;
    }
    /**
     * Set the player volume
     * @param {Number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
     */


    set volume(value) {
      let volume = value;
      const max = 1;
      const min = 0;

      if (is.string(volume)) {
        volume = Number(volume);
      } // Load volume from storage if no value specified


      if (!is.number(volume)) {
        volume = this.storage.get('volume');
      } // Use config if all else fails


      if (!is.number(volume)) {
        ({
          volume
        } = this.config);
      } // Maximum is volumeMax


      if (volume > max) {
        volume = max;
      } // Minimum is volumeMin


      if (volume < min) {
        volume = min;
      } // Update config


      this.config.volume = volume; // Set the player volume

      this.media.volume = volume; // If muted, and we're increasing volume manually, reset muted state

      if (!is.empty(value) && this.muted && volume > 0) {
        this.muted = false;
      }
    }
    /**
     * Get the current player volume
     */


    get volume() {
      return Number(this.media.volume);
    }
    /**
     * Increase volume
     * @param {Boolean} step - How much to decrease by (between 0 and 1)
     */


    /**
     * Set muted state
     * @param {Boolean} mute
     */
    set muted(mute) {
      let toggle = mute; // Load muted state from storage

      if (!is.boolean(toggle)) {
        toggle = this.storage.get('muted');
      } // Use config if all else fails


      if (!is.boolean(toggle)) {
        toggle = this.config.muted;
      } // Update config


      this.config.muted = toggle; // Set mute on the player

      this.media.muted = toggle;
    }
    /**
     * Get current muted state
     */


    get muted() {
      return Boolean(this.media.muted);
    }
    /**
     * Check if the media has audio
     */


    get hasAudio() {
      // Assume yes for all non HTML5 (as we can't tell...)
      if (!this.isHTML5) {
        return true;
      }

      if (this.isAudio) {
        return true;
      } // Get audio tracks


      return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
    /**
     * Set playback speed
     * @param {Number} speed - the speed of playback (0.5-2.0)
     */


    set speed(input) {
      let speed = null;

      if (is.number(input)) {
        speed = input;
      }

      if (!is.number(speed)) {
        speed = this.storage.get('speed');
      }

      if (!is.number(speed)) {
        speed = this.config.speed.selected;
      } // Clamp to min/max


      const {
        minimumSpeed: min,
        maximumSpeed: max
      } = this;
      speed = clamp(speed, min, max); // Update config

      this.config.speed.selected = speed; // Set media speed

      setTimeout(() => {
        this.media.playbackRate = speed;
      }, 0);
    }
    /**
     * Get current playback speed
     */


    get speed() {
      return Number(this.media.playbackRate);
    }
    /**
     * Get the minimum allowed speed
     */


    get minimumSpeed() {
      if (this.isYouTube) {
        // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
        return Math.min(...this.options.speed);
      }

      if (this.isVimeo) {
        // https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
        return 0.5;
      } // https://stackoverflow.com/a/32320020/1191319


      return 0.0625;
    }
    /**
     * Get the maximum allowed speed
     */


    get maximumSpeed() {
      if (this.isYouTube) {
        // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
        return Math.max(...this.options.speed);
      }

      if (this.isVimeo) {
        // https://github.com/vimeo/player.js/#setplaybackrateplaybackrate-number-promisenumber-rangeerrorerror
        return 2;
      } // https://stackoverflow.com/a/32320020/1191319


      return 16;
    }
    /**
     * Set playback quality
     * Currently HTML5 & YouTube only
     * @param {Number} input - Quality level
     */


    set quality(input) {
      const config = this.config.quality;
      const options = this.options.quality;

      if (!options.length) {
        return;
      }

      let quality = [!is.empty(input) && Number(input), this.storage.get('quality'), config.selected, config.default].find(is.number);
      let updateStorage = true;

      if (!options.includes(quality)) {
        const value = closest(options, quality);
        this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
        quality = value; // Don't update storage if quality is not supported

        updateStorage = false;
      } // Update config


      config.selected = quality; // Set quality

      this.media.quality = quality; // Save to storage

      if (updateStorage) {
        this.storage.set({
          quality
        });
      }
    }
    /**
     * Get current quality level
     */


    get quality() {
      return this.media.quality;
    }
    /**
     * Toggle loop
     * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
     * @param {Boolean} input - Whether to loop or not
     */


    set loop(input) {
      const toggle = is.boolean(input) ? input : this.config.loop.active;
      this.config.loop.active = toggle;
      this.media.loop = toggle; // Set default to be a true toggle

      /* const type = ['start', 'end', 'all', 'none', 'toggle'].includes(input) ? input : 'toggle';
           switch (type) {
              case 'start':
                  if (this.config.loop.end && this.config.loop.end <= this.currentTime) {
                      this.config.loop.end = null;
                  }
                  this.config.loop.start = this.currentTime;
                  // this.config.loop.indicator.start = this.elements.display.played.value;
                  break;
               case 'end':
                  if (this.config.loop.start >= this.currentTime) {
                      return this;
                  }
                  this.config.loop.end = this.currentTime;
                  // this.config.loop.indicator.end = this.elements.display.played.value;
                  break;
               case 'all':
                  this.config.loop.start = 0;
                  this.config.loop.end = this.duration - 2;
                  this.config.loop.indicator.start = 0;
                  this.config.loop.indicator.end = 100;
                  break;
               case 'toggle':
                  if (this.config.loop.active) {
                      this.config.loop.start = 0;
                      this.config.loop.end = null;
                  } else {
                      this.config.loop.start = 0;
                      this.config.loop.end = this.duration - 2;
                  }
                  break;
               default:
                  this.config.loop.start = 0;
                  this.config.loop.end = null;
                  break;
          } */
    }
    /**
     * Get current loop state
     */


    get loop() {
      return Boolean(this.media.loop);
    }
    /**
     * Set new media source
     * @param {Object} input - The new source object (see docs)
     */


    set source(input) {
      source.change.call(this, input);
    }
    /**
     * Get current source
     */


    get source() {
      return this.media.currentSrc;
    }
    /**
     * Get a download URL (either source or custom)
     */


    get download() {
      const {
        download
      } = this.config.urls;
      return is.url(download) ? download : this.source;
    }
    /**
     * Set the download URL
     */


    set download(input) {
      if (!is.url(input)) {
        return;
      }

      this.config.urls.download = input;
      controls.setDownloadUrl.call(this);
    }
    /**
     * Set the poster image for a video
     * @param {String} input - the URL for the new poster image
     */


    set poster(input) {
      if (!this.isVideo) {
        this.debug.warn('Poster can only be set for video');
        return;
      }

      ui.setPoster.call(this, input, false).catch(() => {});
    }
    /**
     * Get the current poster image
     */


    get poster() {
      if (!this.isVideo) {
        return null;
      }

      return this.media.getAttribute('poster') || this.media.getAttribute('data-poster');
    }
    /**
     * Get the current aspect ratio in use
     */


    get ratio() {
      if (!this.isVideo) {
        return null;
      }

      const ratio = reduceAspectRatio(getAspectRatio.call(this));
      return is.array(ratio) ? ratio.join(':') : ratio;
    }
    /**
     * Set video aspect ratio
     */


    set ratio(input) {
      if (!this.isVideo) {
        this.debug.warn('Aspect ratio can only be set for video');
        return;
      }

      if (!is.string(input) || !validateAspectRatio(input)) {
        this.debug.error(`Invalid aspect ratio specified (${input})`);
        return;
      }

      this.config.ratio = reduceAspectRatio(input);
      setAspectRatio.call(this);
    }
    /**
     * Set the autoplay state
     * @param {Boolean} input - Whether to autoplay or not
     */


    set autoplay(input) {
      const toggle = is.boolean(input) ? input : this.config.autoplay;
      this.config.autoplay = toggle;
    }
    /**
     * Get the current autoplay state
     */


    get autoplay() {
      return Boolean(this.config.autoplay);
    }
    /**
     * Toggle captions
     * @param {Boolean} input - Whether to enable captions
     */


    toggleCaptions(input) {
      captions.toggle.call(this, input, false);
    }
    /**
     * Set the caption track by index
     * @param {Number} - Caption index
     */


    set currentTrack(input) {
      captions.set.call(this, input, false);

      if (input >= 1) {
        captions.setup.call(this);
      }
    }
    /**
     * Get the current caption track index (-1 if disabled)
     */


    get currentTrack() {
      const {
        toggled,
        currentTrack
      } = this.captions;
      return toggled ? currentTrack : -1;
    }
    /**
     * Set the wanted language for captions
     * Since tracks can be added later it won't update the actual caption track until there is a matching track
     * @param {String} - Two character ISO language code (e.g. EN, FR, PT, etc)
     */


    set language(input) {
      captions.setLanguage.call(this, input, false);
    }
    /**
     * Get the current track's language
     */


    get language() {
      return (captions.getCurrentTrack.call(this) || {}).language;
    }
    /**
     * Toggle picture-in-picture playback on WebKit/MacOS
     * TODO: update player with state, support, enabled
     * TODO: detect outside changes
     */


    set pip(input) {
      // Bail if no support
      if (!support.pip) {
        return;
      } // Toggle based on current state if not passed


      const toggle = is.boolean(input) ? input : !this.pip; // Toggle based on current state
      // Safari

      if (is.function(this.media.webkitSetPresentationMode)) {
        this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
      } // Chrome


      if (is.function(this.media.requestPictureInPicture)) {
        if (!this.pip && toggle) {
          this.media.requestPictureInPicture();
        } else if (this.pip && !toggle) {
          document.exitPictureInPicture();
        }
      }
    }
    /**
     * Get the current picture-in-picture state
     */


    get pip() {
      if (!support.pip) {
        return null;
      } // Safari


      if (!is.empty(this.media.webkitPresentationMode)) {
        return this.media.webkitPresentationMode === pip.active;
      } // Chrome


      return this.media === document.pictureInPictureElement;
    }
    /**
     * Trigger the airplay dialog
     * TODO: update player with state, support, enabled
     */


    /**
     * Check for support
     * @param {String} type - Player type (audio/video)
     * @param {String} provider - Provider (html5/youtube/vimeo)
     * @param {Boolean} inline - Where player has `playsinline` sttribute
     */
    static supported(type, provider, inline) {
      return support.check(type, provider, inline);
    }
    /**
     * Load an SVG sprite into the page
     * @param {String} url - URL for the SVG sprite
     * @param {String} [id] - Unique ID
     */


    static loadSprite(url, id) {
      return loadSprite(url, id);
    }
    /**
     * Setup multiple instances
     * @param {*} selector
     * @param {Object} options
     */


    static setup(selector, options = {}) {
      let targets = null;

      if (is.string(selector)) {
        targets = Array.from(document.querySelectorAll(selector));
      } else if (is.nodeList(selector)) {
        targets = Array.from(selector);
      } else if (is.array(selector)) {
        targets = selector.filter(is.element);
      }

      if (is.empty(targets)) {
        return null;
      }

      return targets.map(t => new Plyr(t, options));
    }

  }

  Plyr.defaults = cloneDeep(defaults);

  // ==========================================================================

  return Plyr;

})));
