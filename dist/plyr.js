typeof navigator === "object" && (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('Plyr', factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Plyr = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _classCallCheck$1(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function _defineProperties$1(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  function _createClass$1(e, t, n) {
    return t && _defineProperties$1(e.prototype, t), n && _defineProperties$1(e, n), e;
  }

  function _defineProperty$1(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  }

  function ownKeys$1(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function _objectSpread2$1(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ownKeys$1(Object(n), !0).forEach(function (t) {
        _defineProperty$1(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys$1(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var defaults = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };

  function matches(e, t) {
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

  var getConstructor = function getConstructor(e) {
    return null != e ? e.constructor : null;
  },
      instanceOf = function instanceOf(e, t) {
    return !!(e && t && e instanceof t);
  },
      isNullOrUndefined = function isNullOrUndefined(e) {
    return null == e;
  },
      isObject = function isObject(e) {
    return getConstructor(e) === Object;
  },
      isNumber = function isNumber(e) {
    return getConstructor(e) === Number && !Number.isNaN(e);
  },
      isString = function isString(e) {
    return getConstructor(e) === String;
  },
      isBoolean = function isBoolean(e) {
    return getConstructor(e) === Boolean;
  },
      isFunction = function isFunction(e) {
    return getConstructor(e) === Function;
  },
      isArray = function isArray(e) {
    return Array.isArray(e);
  },
      isNodeList = function isNodeList(e) {
    return instanceOf(e, NodeList);
  },
      isElement = function isElement(e) {
    return instanceOf(e, Element);
  },
      isEvent = function isEvent(e) {
    return instanceOf(e, Event);
  },
      isEmpty = function isEmpty(e) {
    return isNullOrUndefined(e) || (isString(e) || isArray(e) || isNodeList(e)) && !e.length || isObject(e) && !Object.keys(e).length;
  },
      is = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction,
    array: isArray,
    nodeList: isNodeList,
    element: isElement,
    event: isEvent,
    empty: isEmpty
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
      _classCallCheck$1(this, e), is.element(t) ? this.element = t : is.string(t) && (this.element = document.querySelector(t)), is.element(this.element) && is.empty(this.element.rangeTouch) && (this.config = _objectSpread2$1({}, defaults, {}, n), this.init());
    }

    return _createClass$1(e, [{
      key: "init",
      value: function value() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function value() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function value(e) {
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
      value: function value(t) {
        if (!e.enabled || !is.event(t)) return null;
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
      value: function value(t) {
        e.enabled && is.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function value(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            r = null;
        if (is.empty(t) || is.string(t) ? r = Array.from(document.querySelectorAll(is.string(t) ? t : 'input[type="range"]')) : is.element(t) ? r = [t] : is.nodeList(t) ? r = Array.from(t) : is.array(t) && (r = t.filter(is.element)), is.empty(r)) return null;

        var i = _objectSpread2$1({}, defaults, {}, n);

        if (is.string(t) && i.watch) {
          var o = new MutationObserver(function (n) {
            Array.from(n).forEach(function (n) {
              Array.from(n.addedNodes).forEach(function (n) {
                is.element(n) && matches(n, t) && new e(n, i);
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
      get: function get() {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  }();

  // ==========================================================================
  // Type checking utils
  // ==========================================================================
  var getConstructor$1 = function getConstructor(input) {
    return input !== null && typeof input !== 'undefined' ? input.constructor : null;
  };

  var instanceOf$1 = function instanceOf(input, constructor) {
    return Boolean(input && constructor && input instanceof constructor);
  };

  var isNullOrUndefined$1 = function isNullOrUndefined(input) {
    return input === null || typeof input === 'undefined';
  };

  var isObject$1 = function isObject(input) {
    return getConstructor$1(input) === Object;
  };

  var isNumber$1 = function isNumber(input) {
    return getConstructor$1(input) === Number && !Number.isNaN(input);
  };

  var isString$1 = function isString(input) {
    return getConstructor$1(input) === String;
  };

  var isBoolean$1 = function isBoolean(input) {
    return getConstructor$1(input) === Boolean;
  };

  var isFunction$1 = function isFunction(input) {
    return getConstructor$1(input) === Function;
  };

  var isArray$1 = function isArray(input) {
    return Array.isArray(input);
  };

  var isWeakMap = function isWeakMap(input) {
    return instanceOf$1(input, WeakMap);
  };

  var isNodeList$1 = function isNodeList(input) {
    return instanceOf$1(input, NodeList);
  };

  var isElement$1 = function isElement(input) {
    return instanceOf$1(input, Element);
  };

  var isTextNode = function isTextNode(input) {
    return getConstructor$1(input) === Text;
  };

  var isEvent$1 = function isEvent(input) {
    return instanceOf$1(input, Event);
  };

  var isKeyboardEvent = function isKeyboardEvent(input) {
    return instanceOf$1(input, KeyboardEvent);
  };

  var isCue = function isCue(input) {
    return instanceOf$1(input, window.TextTrackCue) || instanceOf$1(input, window.VTTCue);
  };

  var isTrack = function isTrack(input) {
    return instanceOf$1(input, TextTrack) || !isNullOrUndefined$1(input) && isString$1(input.kind);
  };

  var isPromise = function isPromise(input) {
    return instanceOf$1(input, Promise) && isFunction$1(input.then);
  };

  var isEmpty$1 = function isEmpty(input) {
    return isNullOrUndefined$1(input) || (isString$1(input) || isArray$1(input) || isNodeList$1(input)) && !input.length || isObject$1(input) && !Object.keys(input).length;
  };

  var isUrl = function isUrl(input) {
    // Accept a URL object
    if (instanceOf$1(input, window.URL)) {
      return true;
    } // Must be string from here


    if (!isString$1(input)) {
      return false;
    } // Add the protocol if required


    var string = input;

    if (!input.startsWith('http://') || !input.startsWith('https://')) {
      string = "http://".concat(input);
    }

    try {
      return !isEmpty$1(new URL(string).hostname);
    } catch (e) {
      return false;
    }
  };

  var is$1 = {
    nullOrUndefined: isNullOrUndefined$1,
    object: isObject$1,
    number: isNumber$1,
    string: isString$1,
    boolean: isBoolean$1,
    function: isFunction$1,
    array: isArray$1,
    weakMap: isWeakMap,
    nodeList: isNodeList$1,
    element: isElement$1,
    textNode: isTextNode,
    event: isEvent$1,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty$1
  };

  // ==========================================================================
  var transitionEndEvent = function () {
    var element = document.createElement('span');
    var events = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };
    var type = Object.keys(events).find(function (event) {
      return element.style[event] !== undefined;
    });
    return is$1.string(type) ? events[type] : false;
  }(); // Force repaint of element

  function repaint(element, delay) {
    setTimeout(function () {
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
  var browser = {
    isIE:
    /* @cc_on!@ */
     !!document.documentMode,
    isEdge: window.navigator.userAgent.includes('Edge'),
    isWebkit: 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  } // Get a nested value in an object

  function getDeep(object, path) {
    return path.split('.').reduce(function (obj, key) {
      return obj && obj[key];
    }, object);
  } // Deep extend destination object with N more objects

  function extend() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) {
      return target;
    }

    var source = sources.shift();

    if (!is$1.object(source)) {
      return target;
    }

    Object.keys(source).forEach(function (key) {
      if (is$1.object(source[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, _defineProperty({}, key, {}));
        }

        extend(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    });
    return extend.apply(void 0, [target].concat(sources));
  }

  function wrap(elements, wrapper) {
    // Convert `elements` to an array, if necessary.
    var targets = elements.length ? elements : [elements]; // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).

    Array.from(targets).reverse().forEach(function (element, index) {
      var child = index > 0 ? wrapper.cloneNode(true) : wrapper; // Cache the current parent and sibling.

      var parent = element.parentNode;
      var sibling = element.nextSibling; // Wrap the element (is automatically removed from its current
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
    if (!is$1.element(element) || is$1.empty(attributes)) {
      return;
    } // Assume null and undefined attributes should be left out,
    // Setting them would otherwise convert them to "null" and "undefined"


    Object.entries(attributes).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          value = _ref2[1];

      return !is$1.nullOrUndefined(value);
    }).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      return element.setAttribute(key, value);
    });
  } // Create a DocumentFragment

  function createElement(type, attributes, text) {
    // Create a new <element>
    var element = document.createElement(type); // Set all passed attributes

    if (is$1.object(attributes)) {
      setAttributes(element, attributes);
    } // Add text node


    if (is$1.string(text)) {
      element.innerText = text;
    } // Return built element


    return element;
  } // Inaert an element after another

  function insertAfter(element, target) {
    if (!is$1.element(element) || !is$1.element(target)) {
      return;
    }

    target.parentNode.insertBefore(element, target.nextSibling);
  } // Insert a DocumentFragment

  function insertElement(type, parent, attributes, text) {
    if (!is$1.element(parent)) {
      return;
    }

    parent.appendChild(createElement(type, attributes, text));
  } // Remove element(s)

  function removeElement(element) {
    if (is$1.nodeList(element) || is$1.array(element)) {
      Array.from(element).forEach(removeElement);
      return;
    }

    if (!is$1.element(element) || !is$1.element(element.parentNode)) {
      return;
    }

    element.parentNode.removeChild(element);
  } // Remove all child elements

  function emptyElement(element) {
    if (!is$1.element(element)) {
      return;
    }

    var length = element.childNodes.length;

    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  } // Replace element

  function replaceElement(newChild, oldChild) {
    if (!is$1.element(oldChild) || !is$1.element(oldChild.parentNode) || !is$1.element(newChild)) {
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
    if (!is$1.string(sel) || is$1.empty(sel)) {
      return {};
    }

    var attributes = {};
    var existing = extend({}, existingAttributes);
    sel.split(',').forEach(function (s) {
      // Remove whitespace
      var selector = s.trim();
      var className = selector.replace('.', '');
      var stripped = selector.replace(/[[\]]/g, ''); // Get the parts and value

      var parts = stripped.split('=');

      var _parts = _slicedToArray(parts, 1),
          key = _parts[0];

      var value = parts.length > 1 ? parts[1].replace(/["']/g, '') : ''; // Get the first character

      var start = selector.charAt(0);

      switch (start) {
        case '.':
          // Add to existing classname
          if (is$1.string(existing.class)) {
            attributes.class = "".concat(existing.class, " ").concat(className);
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
    if (!is$1.element(element)) {
      return;
    }

    var hide = hidden;

    if (!is$1.boolean(hide)) {
      hide = !element.hidden;
    } // eslint-disable-next-line no-param-reassign


    element.hidden = hide;
  } // Mirror Element.classList.toggle, with IE compatibility for "force" argument

  function toggleClass(element, className, force) {
    if (is$1.nodeList(element)) {
      return Array.from(element).map(function (e) {
        return toggleClass(e, className, force);
      });
    }

    if (is$1.element(element)) {
      var method = 'toggle';

      if (typeof force !== 'undefined') {
        method = force ? 'add' : 'remove';
      }

      element.classList[method](className);
      return element.classList.contains(className);
    }

    return false;
  } // Has class name

  function hasClass(element, className) {
    return is$1.element(element) && element.classList.contains(className);
  } // Element matches selector

  function matches$1(element, selector) {
    var _Element = Element,
        prototype = _Element.prototype;

    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }

    var method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  } // Closest ancestor element matching selector (also tests element itself)

  function closest(element, selector) {
    var _Element2 = Element,
        prototype = _Element2.prototype; // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill

    function closestElement() {
      var el = this;

      do {
        if (matches$1.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    }

    var method = prototype.closest || closestElement;
    return method.call(element, selector);
  } // Find all elements

  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  } // Find a single element

  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  } // Set focus and tab focus class

  function setFocus() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!is$1.element(element)) {
      return;
    } // Set regular focus


    element.focus({
      preventScroll: true
    }); // If we want to mimic keyboard focus via tab

    if (tabFocus) {
      toggleClass(element, this.config.classNames.tabFocus);
    }
  }

  var defaultCodecs = {
    'audio/ogg': 'vorbis',
    'audio/wav': '1',
    'video/webm': 'vp8, vorbis',
    'video/mp4': 'avc1.42E01E, mp4a.40.2',
    'video/ogg': 'theora'
  }; // Check for feature support

  var support = {
    // Basic support
    audio: 'canPlayType' in document.createElement('audio'),
    video: 'canPlayType' in document.createElement('video'),
    // Check for support
    // Basic functionality vs full UI
    check: function check(type, provider, playsinline) {
      var canPlayInline = browser.isIPhone && playsinline && support.playsinline;
      var api = support[type] || provider !== 'html5';
      var ui = api && support.rangeInput && (type !== 'video' || !browser.isIPhone || canPlayInline);
      return {
        api: api,
        ui: ui
      };
    },
    // Picture-in-picture support
    // Safari & Chrome only currently
    pip: function () {
      if (browser.isIPhone) {
        return false;
      } // Safari
      // https://developer.apple.com/documentation/webkitjs/adding_picture_in_picture_to_your_safari_media_controls


      if (is$1.function(createElement('video').webkitSetPresentationMode)) {
        return true;
      } // Chrome
      // https://developers.google.com/web/updates/2018/10/watch-video-using-picture-in-picture


      if (document.pictureInPictureEnabled && !createElement('video').disablePictureInPicture) {
        return true;
      }

      return false;
    }(),
    // Airplay support
    // Safari only currently
    airplay: is$1.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: 'playsInline' in document.createElement('video'),
    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime: function mime(input) {
      if (is$1.empty(input)) {
        return false;
      }

      var _input$split = input.split('/'),
          _input$split2 = _slicedToArray(_input$split, 1),
          mediaType = _input$split2[0];

      var type = input; // Verify we're using HTML5 and there's no media type mismatch

      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      } // Add codec if required


      if (Object.keys(defaultCodecs).includes(type)) {
        type += "; codecs=\"".concat(defaultCodecs[input], "\"");
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
    rangeInput: function () {
      var range = document.createElement('input');
      range.type = 'range';
      return range.type === 'range';
    }(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: 'ontouchstart' in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: 'matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches
  };

  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // https://www.youtube.com/watch?v=NPM6172J22g

  var supportsPassiveListeners = function () {
    // Test via a getter in the options object to see if the passive property is accessed
    var supported = false;

    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          supported = true;
          return null;
        }
      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (e) {// Do nothing
    }

    return supported;
  }(); // Toggle event listener


  function toggleListener(element, event, callback) {
    var _this = this;

    var toggle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var capture = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

    // Bail if no element, event, or callback
    if (!element || !('addEventListener' in element) || is$1.empty(event) || !is$1.function(callback)) {
      return;
    } // Allow multiple events


    var events = event.split(' '); // Build options
    // Default to just the capture boolean for browsers with no passive listener support

    var options = capture; // If passive events listeners are supported

    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive: passive,
        // Whether the listener is a capturing listener or not
        capture: capture
      };
    } // If a single node is passed, bind the event listener


    events.forEach(function (type) {
      if (_this && _this.eventListeners && toggle) {
        // Cache event listener
        _this.eventListeners.push({
          element: element,
          type: type,
          callback: callback,
          options: options
        });
      }

      element[toggle ? 'addEventListener' : 'removeEventListener'](type, callback, options);
    });
  } // Bind event handler

  function on(element) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    toggleListener.call(this, element, events, callback, true, passive, capture);
  } // Unbind event handler

  function off(element) {
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    toggleListener.call(this, element, events, callback, false, passive, capture);
  } // Bind once-only event handler

  function once(element) {
    var _this2 = this;

    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 ? arguments[2] : undefined;
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    var onceCallback = function onceCallback() {
      off(element, events, onceCallback, passive, capture);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      callback.apply(_this2, args);
    };

    toggleListener.call(this, element, events, onceCallback, true, passive, capture);
  } // Trigger event

  function triggerEvent(element) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    // Bail if no element
    if (!is$1.element(element) || is$1.empty(type)) {
      return;
    } // Create and dispatch the event


    var event = new CustomEvent(type, {
      bubbles: bubbles,
      detail: _objectSpread2(_objectSpread2({}, detail), {}, {
        plyr: this
      })
    }); // Dispatch the event

    element.dispatchEvent(event);
  } // Unbind all cached event listeners

  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach(function (item) {
        var element = item.element,
            type = item.type,
            callback = item.callback,
            options = item.options;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  } // Run method when / if player is ready

  function ready() {
    var _this3 = this;

    return new Promise(function (resolve) {
      return _this3.ready ? setTimeout(resolve, 0) : on.call(_this3, _this3.elements.container, 'ready', resolve);
    }).then(function () {});
  }

  /**
   * Silence a Promise-like object.
   * This is useful for avoiding non-harmful, but potentially confusing "uncaught
   * play promise" rejection error messages.
   * @param  {Object} value An object that may or may not be `Promise`-like.
   */

  function silencePromise(value) {
    if (is$1.promise(value)) {
      value.then(null, function () {});
    }
  }

  function validateRatio(input) {
    if (!is$1.array(input) && (!is$1.string(input) || !input.includes(':'))) {
      return false;
    }

    var ratio = is$1.array(input) ? input : input.split(':');
    return ratio.map(Number).every(is$1.number);
  }
  function reduceAspectRatio(ratio) {
    if (!is$1.array(ratio) || !ratio.every(is$1.number)) {
      return null;
    }

    var _ratio = _slicedToArray(ratio, 2),
        width = _ratio[0],
        height = _ratio[1];

    var getDivider = function getDivider(w, h) {
      return h === 0 ? w : getDivider(h, w % h);
    };

    var divider = getDivider(width, height);
    return [width / divider, height / divider];
  }
  function getAspectRatio(input) {
    var parse = function parse(ratio) {
      return validateRatio(ratio) ? ratio.split(':').map(Number) : null;
    }; // Try provided ratio


    var ratio = parse(input); // Get from config

    if (ratio === null) {
      ratio = parse(this.config.ratio);
    } // Get from embed


    if (ratio === null && !is$1.empty(this.embed) && is$1.array(this.embed.ratio)) {
      ratio = this.embed.ratio;
    } // Get from HTML5 video


    if (ratio === null && this.isHTML5) {
      var _this$media = this.media,
          videoWidth = _this$media.videoWidth,
          videoHeight = _this$media.videoHeight;
      ratio = reduceAspectRatio([videoWidth, videoHeight]);
    }

    return ratio;
  } // Set aspect ratio for responsive container

  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }

    var wrapper = this.elements.wrapper;
    var ratio = getAspectRatio.call(this, input);

    var _ref = is$1.array(ratio) ? ratio : [0, 0],
        _ref2 = _slicedToArray(_ref, 2),
        w = _ref2[0],
        h = _ref2[1];

    var padding = 100 / w * h;
    wrapper.style.paddingBottom = "".concat(padding, "%"); // For Vimeo we have an extra <div> to hide the standard controls and UI

    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      var height = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      var offset = (height - padding) / (height / 50);
      this.media.style.transform = "translateY(-".concat(offset, "%)");
    } else if (this.isHTML5) {
      wrapper.classList.toggle(this.config.classNames.videoFixedRatio, ratio !== null);
    }

    return {
      padding: padding,
      ratio: ratio
    };
  }

  // ==========================================================================
  var html5 = {
    getSources: function getSources() {
      var _this = this;

      if (!this.isHTML5) {
        return [];
      }

      var sources = Array.from(this.media.querySelectorAll('source')); // Filter out unsupported sources (if type is specified)

      return sources.filter(function (source) {
        var type = source.getAttribute('type');

        if (is$1.empty(type)) {
          return true;
        }

        return support.mime.call(_this, type);
      });
    },
    // Get quality levels
    getQualityOptions: function getQualityOptions() {
      // Whether we're forcing all options (e.g. for streaming)
      if (this.config.quality.forced) {
        return this.config.quality.options;
      } // Get sizes from <source> elements


      return html5.getSources.call(this).map(function (source) {
        return Number(source.getAttribute('size'));
      }).filter(Boolean);
    },
    setup: function setup() {
      if (!this.isHTML5) {
        return;
      }

      var player = this; // Set speed options from config

      player.options.speed = player.config.speed.options; // Set aspect ratio if fixed

      if (!is$1.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      } // Quality


      Object.defineProperty(player.media, 'quality', {
        get: function get() {
          // Get sources
          var sources = html5.getSources.call(player);
          var source = sources.find(function (s) {
            return s.getAttribute('src') === player.source;
          }); // Return size, if match is found

          return source && Number(source.getAttribute('size'));
        },
        set: function set(input) {
          if (player.quality === input) {
            return;
          } // If we're using an an external handler...


          if (player.config.quality.forced && is$1.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            // Get sources
            var sources = html5.getSources.call(player); // Get first match for requested size

            var source = sources.find(function (s) {
              return Number(s.getAttribute('size')) === input;
            }); // No matching source found

            if (!source) {
              return;
            } // Get current state


            var _player$media = player.media,
                currentTime = _player$media.currentTime,
                paused = _player$media.paused,
                preload = _player$media.preload,
                readyState = _player$media.readyState,
                playbackRate = _player$media.playbackRate; // Set new source

            player.media.src = source.getAttribute('src'); // Prevent loading if preload="none" and the current source isn't loaded (#1044)

            if (preload !== 'none' || readyState) {
              // Restore time
              player.once('loadedmetadata', function () {
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
    cancelRequests: function cancelRequests() {
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

  function dedupe(array) {
    if (!is$1.array(array)) {
      return array;
    }

    return array.filter(function (item, index) {
      return array.indexOf(item) === index;
    });
  } // Get the closest value in an array

  function closest$1(array, value) {
    if (!is$1.array(array) || !array.length) {
      return null;
    }

    return array.reduce(function (prev, curr) {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
  }

  // ==========================================================================

  function generateId(prefix) {
    return "".concat(prefix, "-").concat(Math.floor(Math.random() * 10000));
  } // Format string

  function format(input) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (is$1.empty(input)) {
      return input;
    }

    return input.toString().replace(/{(\d+)}/g, function (match, i) {
      return args[i].toString();
    });
  } // Get percentage

  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }

    return (current / max * 100).toFixed(2);
  } // Replace all occurances of a string in a string

  var replaceAll = function replaceAll() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var find = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g'), replace.toString());
  }; // Convert to title case

  var toTitleCase = function toTitleCase() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return input.toString().replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  }; // Convert string to pascalCase

  function toPascalCase() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var string = input.toString(); // Convert kebab case

    string = replaceAll(string, '-', ' '); // Convert snake case

    string = replaceAll(string, '_', ' '); // Convert to title case

    string = toTitleCase(string); // Convert to pascal case

    return replaceAll(string, ' ', '');
  } // Convert string to pascalCase

  function toCamelCase() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var string = input.toString(); // Convert to pascal case

    string = toPascalCase(string); // Convert first character to lowercase

    return string.charAt(0).toLowerCase() + string.slice(1);
  } // Remove HTML from a string

  function stripHTML(source) {
    var fragment = document.createDocumentFragment();
    var element = document.createElement('div');
    fragment.appendChild(element);
    element.innerHTML = source;
    return fragment.firstChild.innerText;
  } // Like outerHTML, but also works for DocumentFragment

  function getHTML(element) {
    var wrapper = document.createElement('div');
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }

  var resources = {
    pip: 'PIP',
    airplay: 'AirPlay',
    html5: 'HTML5',
    vimeo: 'Vimeo',
    youtube: 'YouTube'
  };
  var i18n = {
    get: function get() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (is$1.empty(key) || is$1.empty(config)) {
        return '';
      }

      var string = getDeep(config.i18n, key);

      if (is$1.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }

        return '';
      }

      var replace = {
        '{seektime}': config.seekTime,
        '{title}': config.title
      };
      Object.entries(replace).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        string = replaceAll(string, k, v);
      });
      return string;
    }
  };

  var Storage = /*#__PURE__*/function () {
    function Storage(player) {
      _classCallCheck(this, Storage);

      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    } // Check for actual support (see if we can use it)


    _createClass(Storage, [{
      key: "get",
      value: function get(key) {
        if (!Storage.supported || !this.enabled) {
          return null;
        }

        var store = window.localStorage.getItem(this.key);

        if (is$1.empty(store)) {
          return null;
        }

        var json = JSON.parse(store);
        return is$1.string(key) && key.length ? json[key] : json;
      }
    }, {
      key: "set",
      value: function set(object) {
        // Bail if we don't have localStorage support or it's disabled
        if (!Storage.supported || !this.enabled) {
          return;
        } // Can only store objectst


        if (!is$1.object(object)) {
          return;
        } // Get current storage


        var storage = this.get(); // Default to empty object

        if (is$1.empty(storage)) {
          storage = {};
        } // Update the working copy of the values


        extend(storage, object); // Update storage

        window.localStorage.setItem(this.key, JSON.stringify(storage));
      }
    }], [{
      key: "supported",
      get: function get() {
        try {
          if (!('localStorage' in window)) {
            return false;
          }

          var test = '___test'; // Try to use it (it might be disabled, e.g. user is in private mode)
          // see: https://github.com/sampotts/plyr/issues/131

          window.localStorage.setItem(test, test);
          window.localStorage.removeItem(test);
          return true;
        } catch (e) {
          return false;
        }
      }
    }]);

    return Storage;
  }();

  // ==========================================================================
  // Fetch wrapper
  // Using XHR to avoid issues with older browsers
  // ==========================================================================
  function fetch(url) {
    var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'text';
    return new Promise(function (resolve, reject) {
      try {
        var request = new XMLHttpRequest(); // Check for CORS support

        if (!('withCredentials' in request)) {
          return;
        }

        request.addEventListener('load', function () {
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
        request.addEventListener('error', function () {
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
    if (!is$1.string(url)) {
      return;
    }

    var prefix = 'cache';
    var hasId = is$1.string(id);
    var isCached = false;

    var exists = function exists() {
      return document.getElementById(id) !== null;
    };

    var update = function update(container, data) {
      // eslint-disable-next-line no-param-reassign
      container.innerHTML = data; // Check again incase of race condition

      if (hasId && exists()) {
        return;
      } // Inject the SVG to the body


      document.body.insertAdjacentElement('afterbegin', container);
    }; // Only load once if ID set


    if (!hasId || !exists()) {
      var useStorage = Storage.supported; // Create container

      var container = document.createElement('div');
      container.setAttribute('hidden', '');

      if (hasId) {
        container.setAttribute('id', id);
      } // Check in cache


      if (useStorage) {
        var cached = window.localStorage.getItem("".concat(prefix, "-").concat(id));
        isCached = cached !== null;

        if (isCached) {
          var data = JSON.parse(cached);
          update(container, data.content);
        }
      } // Get the sprite


      fetch(url).then(function (result) {
        if (is$1.empty(result)) {
          return;
        }

        if (useStorage) {
          window.localStorage.setItem("".concat(prefix, "-").concat(id), JSON.stringify({
            content: result
          }));
        }

        update(container, result);
      }).catch(function () {});
    }
  }

  // ==========================================================================

  var getHours = function getHours(value) {
    return Math.trunc(value / 60 / 60 % 60, 10);
  };
  var getMinutes = function getMinutes(value) {
    return Math.trunc(value / 60 % 60, 10);
  };
  var getSeconds = function getSeconds(value) {
    return Math.trunc(value % 60, 10);
  };
  var secondsToMinutes = function secondsToMinutes(value) {
    return Math.floor(value / 60);
  }; // Format time to UI friendly string

  function formatTime() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var displayHours = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    // Bail if the value isn't a number
    if (!is$1.number(time)) {
      return formatTime(undefined, displayHours, inverted);
    } // Format time component to add leading zero


    var format = function format(value) {
      return "0".concat(value).slice(-2);
    }; // Breakdown to hours, mins, secs


    var hours = getHours(time);
    var mins = getMinutes(time);
    var secs = getSeconds(time); // Do we need to display hours?

    if (displayHours || hours > 0) {
      hours = "".concat(hours, ":");
    } else {
      hours = '';
    } // Render


    return "".concat(inverted && time > 0 ? '-' : '').concat(hours).concat(format(mins), ":").concat(format(secs));
  }
  function videoToMatchTime(time, syncPoints) {
    var syncPointsOrdered = syncPoints.sort(function (a, b) {
      return b.time - a.time;
    });
    var syncPoint = syncPointsOrdered.find(function (x) {
      return x.time <= time;
    }) || syncPointsOrdered[syncPointsOrdered.length - 1];
    var timeIntoPeriod = Math.max(time - syncPoint.time, 0); // Time into period

    var seconds = getSeconds(timeIntoPeriod);
    var minutes = Math.min(secondsToMinutes(syncPoint.start + timeIntoPeriod - seconds), secondsToMinutes(syncPoint.start + syncPoint.duration));
    var minutesIntoPeriod = secondsToMinutes(timeIntoPeriod - seconds); // Added time into period

    var addedTime = minutesIntoPeriod >= secondsToMinutes(syncPoint.duration);
    var addedMinutes = minutesIntoPeriod - Math.min(minutesIntoPeriod, secondsToMinutes(syncPoint.duration)); // Format time component to add leading zero

    var format = function format(value) {
      return "".concat(value.toString().length <= 1 ? '0' : '').concat(value);
    };

    return "".concat(format(minutes)).concat(addedTime ? "+".concat(format(addedMinutes)) : '', ":").concat(format(seconds));
  }
  function matchToVideoTime(time, syncPoints) {
    // Match Time
    var syncPointsOrdered = syncPoints.sort(function (a, b) {
      return a.time - b.time;
    });
    var matchTime = time.match(/(^[0-9]{1,3})\+?([0-9]{1,2})?:([0-9]{1,2})/);
    var minutes = Number(matchTime[1] || 0);
    var addedMinutes = Number(matchTime[2] || -1);
    var seconds = Number(matchTime[3] || 0);
    var hasAddedMinutes = addedMinutes >= 0;
    addedMinutes = Math.max(addedMinutes, 0); // Store match time in seconds

    var matchTimeInSeconds = minutes * 60 + addedMinutes * 60 + seconds; // Match Period Index

    var index = 0;
    syncPointsOrdered.forEach(function (x) {
      if (x.start + x.duration <= matchTimeInSeconds) index += 1;
    }); // Offset index if added time

    var matchPeriod = syncPointsOrdered[hasAddedMinutes ? index - 1 : Math.min(index, syncPoints.length - 1)];
    return matchTimeInSeconds + matchPeriod.time - matchPeriod.start;
  }

  var controls = {
    // Get icon URL
    getIconUrl: function getIconUrl() {
      var url = new URL(this.config.iconUrl, window.location);
      var cors = url.host !== window.location.host || browser.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: cors
      };
    },
    // Find the UI controls
    findElements: function findElements() {
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

        if (is$1.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip));
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
    createIcon: function createIcon(type, attributes) {
      var namespace = 'http://www.w3.org/2000/svg';
      var iconUrl = controls.getIconUrl.call(this);
      var iconPath = "".concat(!iconUrl.cors ? iconUrl.url : '', "#").concat(this.config.iconPrefix); // Create <svg>

      var icon = document.createElementNS(namespace, 'svg');
      setAttributes(icon, extend(attributes, {
        'aria-hidden': 'true',
        focusable: 'false'
      })); // Create the <use> to reference sprite

      var use = document.createElementNS(namespace, 'use');
      var path = "".concat(iconPath, "-").concat(type); // Set `href` attributes
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
    createLabel: function createLabel(key) {
      var attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var text = i18n.get(key, this.config);

      var attributes = _objectSpread2(_objectSpread2({}, attr), {}, {
        class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(' ')
      });

      return createElement('span', attributes, text);
    },
    // Create a badge
    createBadge: function createBadge(text) {
      if (is$1.empty(text)) {
        return null;
      }

      var badge = createElement('span', {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(createElement('span', {
        class: this.config.classNames.menu.badge
      }, text));
      return badge;
    },
    // Create a <button>
    createButton: function createButton(buttonType, attr) {
      var _this = this;

      var attributes = extend({}, attr);
      var type = toCamelCase(buttonType);
      var props = {
        element: 'button',
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ['element', 'icon', 'label'].forEach(function (key) {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      }); // Default to 'button' type to prevent form submission

      if (props.element === 'button' && !Object.keys(attributes).includes('type')) {
        attributes.type = 'button';
      } // Set class name


      if (Object.keys(attributes).includes('class')) {
        if (!attributes.class.split(' ').some(function (c) {
          return c === _this.config.classNames.control;
        })) {
          extend(attributes, {
            class: "".concat(attributes.class, " ").concat(this.config.classNames.control)
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
          attributes.class += " ".concat(this.config.classNames.control, "--overlaid");
          type = 'play';
          props.label = 'play';
          props.icon = 'play';
          break;

        default:
          if (is$1.empty(props.label)) {
            props.label = type;
          }

          if (is$1.empty(props.icon)) {
            props.icon = buttonType;
          }

      }

      var button = createElement(props.element); // Setup toggle icon and labels

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
        if (!is$1.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }

        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }

      return button;
    },
    // Create an <input type='range'>
    createRange: function createRange(type, attributes) {
      // Seek input
      var input = createElement('input', extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
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
    createProgress: function createProgress(type, attributes) {
      var progress = createElement('progress', extend(getAttributesFromSelector(this.config.selectors.display[type]), {
        min: 0,
        max: 100,
        value: 0,
        role: 'progressbar',
        'aria-hidden': true
      }, attributes)); // Create the label inside

      if (type !== 'volume') {
        progress.appendChild(createElement('span', null, '0'));
        var suffixKey = {
          played: 'played',
          buffer: 'buffered'
        }[type];
        var suffix = suffixKey ? i18n.get(suffixKey, this.config) : '';
        progress.innerText = "% ".concat(suffix.toLowerCase());
      }

      this.elements.display[type] = progress;
      return progress;
    },
    // Create time display
    createTime: function createTime(type, attrs) {
      var attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      var container = createElement('div', extend(attributes, {
        class: "".concat(attributes.class ? attributes.class : '', " ").concat(this.config.classNames.display.time, " ").trim(),
        'aria-label': i18n.get(type, this.config)
      }), this.currentTime ? formatTime(this.currentTime) : '00:00'); // Toggle Match time class

      toggleClass(container, this.config.classNames.matchTime, this.config.matchTime); // Reference for updates

      this.elements.display[type] = container;
      return container;
    },
    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts: function bindMenuItemShortcuts(menuItem, type) {
      var _this2 = this;

      // Navigate through menus via arrow keys and space
      on.call(this, menuItem, 'keydown keyup', function (event) {
        // We only care about space and ⬆️ ⬇️️ ➡️
        if (![32, 38, 39, 40].includes(event.which)) {
          return;
        } // Prevent play / seek


        event.preventDefault();
        event.stopPropagation(); // We're just here to prevent the keydown bubbling

        if (event.type === 'keydown') {
          return;
        }

        var isRadioButton = matches$1(menuItem, '[role="menuitemradio"]'); // Show the respective menu

        if (!isRadioButton && [32, 39].includes(event.which)) {
          controls.showMenuPanel.call(_this2, type, true);
        } else {
          var target;

          if (event.which !== 32) {
            if (event.which === 40 || isRadioButton && event.which === 39) {
              target = menuItem.nextElementSibling;

              if (!is$1.element(target)) {
                target = menuItem.parentNode.firstElementChild;
              }
            } else {
              target = menuItem.previousElementSibling;

              if (!is$1.element(target)) {
                target = menuItem.parentNode.lastElementChild;
              }
            }

            setFocus.call(_this2, target, true);
          }
        }
      }, false); // Enter will fire a `click` event but we still need to manage focus
      // So we bind to keyup which fires after and set focus here

      on.call(this, menuItem, 'keyup', function (event) {
        if (event.which !== 13) {
          return;
        }

        controls.focusFirstMenuItem.call(_this2, null, true);
      });
    },
    // Create a settings menu item
    createMenuItem: function createMenuItem(_ref) {
      var _this3 = this;

      var value = _ref.value,
          list = _ref.list,
          type = _ref.type,
          title = _ref.title,
          _ref$badge = _ref.badge,
          badge = _ref$badge === void 0 ? null : _ref$badge,
          _ref$checked = _ref.checked,
          checked = _ref$checked === void 0 ? false : _ref$checked;
      var attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      var menuItem = createElement('button', extend(attributes, {
        type: 'button',
        role: 'menuitemradio',
        class: "".concat(this.config.classNames.control, " ").concat(attributes.class ? attributes.class : '').trim(),
        'aria-checked': checked,
        value: value
      }));
      var flex = createElement('span'); // We have to set as HTML incase of special characters

      flex.innerHTML = title;

      if (is$1.element(badge)) {
        flex.appendChild(badge);
      }

      menuItem.appendChild(flex); // Replicate radio button behaviour

      Object.defineProperty(menuItem, 'checked', {
        enumerable: true,
        get: function get() {
          return menuItem.getAttribute('aria-checked') === 'true';
        },
        set: function set(check) {
          // Ensure exclusivity
          if (check) {
            Array.from(menuItem.parentNode.children).filter(function (node) {
              return matches$1(node, '[role="menuitemradio"]');
            }).forEach(function (node) {
              return node.setAttribute('aria-checked', 'false');
            });
          }

          menuItem.setAttribute('aria-checked', check ? 'true' : 'false');
        }
      });
      this.listeners.bind(menuItem, 'click keyup', function (event) {
        if (is$1.keyboardEvent(event) && event.which !== 32) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        menuItem.checked = true;

        switch (type) {
          case 'language':
            _this3.currentTrack = Number(value);
            break;

          case 'quality':
            _this3.quality = value;
            break;

          case 'speed':
            _this3.speed = parseFloat(value);
            break;

          case 'angle':
            _this3.angle = value;
            break;
        } // Angle menu is not a nested menu so don't need to return to home panel


        if (type === 'angle') return;
        controls.showMenuPanel.call(_this3, 'home', is$1.keyboardEvent(event));
      }, type, false);
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },
    // Format a time for display
    formatTime: function formatTime$1() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var inverted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // Bail if the value isn't a number
      if (!is$1.number(time)) {
        return time;
      } // Always display hours if duration is over an hour


      var forceHours = getHours(this.duration) > 0; // Display match time

      if (this.config.matchTime && this.config.syncPoints && this.config.syncPoints.length) {
        return videoToMatchTime(this.mediaFragment.getMediaTime(time), this.config.syncPoints);
      }

      return formatTime(time, forceHours, inverted);
    },
    // Update the displayed time
    updateTimeDisplay: function updateTimeDisplay() {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var inverted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      // Bail if there's no element to display or the value isn't a number
      if (!is$1.element(target) || !is$1.number(time)) {
        return;
      } // eslint-disable-next-line no-param-reassign


      target.innerText = controls.formatTime.call(this, time, inverted);
    },
    // Update volume UI and storage
    updateVolume: function updateVolume() {
      if (!this.supported.ui) {
        return;
      } // Update range


      if (is$1.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      } // Update mute state


      if (is$1.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },
    // Update seek value and lower fill
    setRange: function setRange(target) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!is$1.element(target)) {
        return;
      } // eslint-disable-next-line


      target.value = value; // Webkit range fill

      controls.updateRangeFill.call(this, target);
    },
    // Update <progress> elements
    updateProgress: function updateProgress(event) {
      var _this4 = this;

      if (!this.supported.ui || !is$1.event(event)) {
        return;
      }

      var value = 0;

      var setProgress = function setProgress(target, input) {
        var val = is$1.number(input) ? input : 0;
        var progress = is$1.element(target) ? target : _this4.elements.display.buffer; // Update value and label

        if (is$1.element(progress)) {
          progress.value = val; // Update text label inside

          var label = progress.getElementsByTagName('span')[0];

          if (is$1.element(label)) {
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
    updateRangeFill: function updateRangeFill(target) {
      // Get range from event if event passed
      var range = is$1.event(target) ? target.target : target; // Needs to be a valid <input type='range'>

      if (!is$1.element(range) || range.getAttribute('type') !== 'range') {
        return;
      } // Set aria values for https://github.com/sampotts/plyr/issues/905


      if (matches$1(range, this.config.selectors.inputs.seek)) {
        range.setAttribute('aria-valuenow', this.currentTime);
        var currentTime = controls.formatTime.call(this, this.currentTime);
        var duration = controls.formatTime.call(this, this.duration);
        var format = i18n.get('seekLabel', this.config);
        range.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
      } else if (matches$1(range, this.config.selectors.inputs.volume)) {
        var percent = range.value * 100;
        range.setAttribute('aria-valuenow', percent);
        range.setAttribute('aria-valuetext', "".concat(percent.toFixed(1), "%"));
      } else {
        range.setAttribute('aria-valuenow', range.value);
      } // WebKit only


      if (!browser.isWebkit) {
        return;
      } // Set CSS custom property


      range.style.setProperty('--value', "".concat((range.value - range.min) / (range.max - range.min) * 100, "%"));
    },
    // Update hover tooltip for seeking
    updateSeekTooltip: function updateSeekTooltip(event) {
      var _this5 = this;

      // Bail if setting not true
      if (!this.config.tooltips.seek || !is$1.element(this.elements.inputs.seek) || !is$1.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }

      var visible = "".concat(this.config.classNames.tooltip, "--visible");

      var toggle = function toggle(show) {
        return toggleClass(_this5.elements.display.seekTooltip, visible, show);
      }; // Hide on touch


      if (this.touch) {
        toggle(false);
        return;
      } // Determine percentage, if already visible


      var percent = 0;
      var clientRect = this.elements.progress.getBoundingClientRect();

      if (is$1.event(event)) {
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

      this.elements.display.seekTooltip.style.left = "".concat(percent, "%"); // Show/hide the tooltip
      // If the event is a moues in/out and percentage is inside bounds

      if (is$1.event(event) && ['mouseenter', 'mouseleave'].includes(event.type)) {
        toggle(event.type === 'mouseenter');
      }
    },
    // Handle time change event
    timeUpdate: function timeUpdate(event) {
      // Only invert if only one time element is displayed and used for both duration and currentTime
      var invert = !is$1.element(this.elements.display.duration) && this.config.invertTime; // Duration

      controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert); // Editor Duration

      controls.updateTimeDisplay.call(this, this.elements.display.editorCurrentTime, this.currentTime); // Ignore updates while seeking

      if (event && event.type === 'timeupdate' && this.media.seeking) {
        return;
      } // Playing progress


      controls.updateProgress.call(this, event);
    },
    // Show the duration on metadataloaded or durationchange events
    durationUpdate: function durationUpdate() {
      // Bail if no UI or durationchange event triggered after playing/seek when invertTime is false
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      } // If duration is the 2**32 (shaka), Infinity (HLS), DASH-IF (Number.MAX_SAFE_INTEGER || Number.MAX_VALUE) indicating live we hide the currentTime and progressbar.
      // https://github.com/video-dev/hls.js/blob/5820d29d3c4c8a46e8b75f1e3afa3e68c1a9a2db/src/controller/buffer-controller.js#L415
      // https://github.com/google/shaka-player/blob/4d889054631f4e1cf0fbd80ddd2b71887c02e232/lib/media/streaming_engine.js#L1062
      // https://github.com/Dash-Industry-Forum/dash.js/blob/69859f51b969645b234666800d4cb596d89c602d/src/dash/models/DashManifestModel.js#L338


      if (this.duration >= Math.pow(2, 32)) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      } // Update ARIA values


      if (is$1.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute('aria-valuemax', this.duration);
      } // If there's a spot to display duration


      var hasDuration = is$1.element(this.elements.display.duration); // If there's only one time display, display duration there

      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      } // If there's a duration element, update content


      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      } // Update the tooltip (if visible)


      controls.updateSeekTooltip.call(this);
    },
    // Hide/show a tab
    toggleMenuButton: function toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.menu.settings.buttons[setting], !toggle);
    },
    // Update the selected setting
    updateSetting: function updateSetting(setting, container, input) {
      var pane = this.elements.menu.settings.panels[setting];
      var value = null;
      var list = container;

      if (setting === 'captions') {
        value = this.currentTrack;
      } else {
        value = !is$1.empty(input) ? input : this[setting]; // Get default

        if (is$1.empty(value)) {
          value = this.config[setting].default;
        } // Unsupported value


        if (!is$1.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn("Unsupported value of '".concat(value, "' for ").concat(setting));
          return;
        } // Disabled value


        if (!this.config[setting].options.includes(value)) {
          this.debug.warn("Disabled value of '".concat(value, "' for ").concat(setting));
          return;
        }
      } // Get the list if we need to


      if (!is$1.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      } // If there's no list it means it's not been rendered...


      if (!is$1.element(list)) {
        return;
      } // Update the label


      var label = this.elements.menu.settings.buttons[setting].querySelector(".".concat(this.config.classNames.menu.value));
      label.innerHTML = controls.getLabel.call(this, setting, value); // Find the radio option and check it

      var target = list && list.querySelector("[value=\"".concat(value, "\"]"));

      if (is$1.element(target)) {
        target.checked = true;
      }
    },
    // Translate a value into a nice label
    getLabel: function getLabel(setting, value) {
      switch (setting) {
        case 'speed':
          return value === 1 ? i18n.get('normal', this.config) : "".concat(value, "&times;");

        case 'quality':
          if (is$1.number(value)) {
            var label = i18n.get("qualityLabel.".concat(value), this.config);

            if (!label.length) {
              return "".concat(value, "p");
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
    setQualityMenu: function setQualityMenu(options) {
      var _this6 = this;

      // Menu required
      if (!is$1.element(this.elements.menu.settings.panels.quality)) {
        return;
      }

      var type = 'quality';
      var list = this.elements.menu.settings.panels.quality.querySelector('[role="menu"]'); // Set options if passed and filter based on uniqueness and config

      if (is$1.array(options)) {
        this.options.quality = dedupe(options).filter(function (quality) {
          return _this6.config.quality.options.includes(quality);
        });
      } // Toggle the pane and tab


      var toggle = !is$1.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Get the badge HTML for HD, 4K etc


      var getBadge = function getBadge(quality) {
        var label = i18n.get("qualityBadge.".concat(quality), _this6.config);

        if (!label.length) {
          return null;
        }

        return controls.createBadge.call(_this6, label);
      }; // Sort options by the config and then render options


      this.options.quality.sort(function (a, b) {
        var sorting = _this6.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach(function (quality) {
        controls.createMenuItem.call(_this6, {
          value: quality,
          list: list,
          type: type,
          title: controls.getLabel.call(_this6, 'quality', quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Set the looping options

    /* setLoopMenu() {
          // Menu required
          if (!is.element(this.elements.menu.settings.panels.loop)) {
              return;
          }
            const options = ['start', 'end', 'all', 'reset'];
          const list = this.elements.menu.settings.panels.loop.querySelector('[role="menu"]');
            // Show the pane and tab
          toggleHidden(this.elements.menu.settings.buttons.loop, false);
          toggleHidden(this.elements.menu.settings.panels.loop, false);
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
    setCaptionsMenu: function setCaptionsMenu() {
      var _this7 = this;

      // Menu required
      if (!is$1.element(this.elements.menu.settings.panels.captions)) {
        return;
      } // TODO: Captions or language? Currently it's mixed


      var type = 'captions';
      var list = this.elements.menu.settings.panels.captions.querySelector('[role="menu"]');
      var tracks = captions.getTracks.call(this);
      var toggle = Boolean(tracks.length); // Toggle the pane and tab

      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If there's no captions, bail

      if (!toggle) {
        return;
      } // Generate options data


      var options = tracks.map(function (track, value) {
        return {
          value: value,
          checked: _this7.captions.toggled && _this7.currentTrack === value,
          title: captions.getLabel.call(_this7, track),
          badge: track.language && controls.createBadge.call(_this7, track.language.toUpperCase()),
          list: list,
          type: 'language'
        };
      }); // Add the "Disabled" option to turn off captions

      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n.get('disabled', this.config),
        list: list,
        type: 'language'
      }); // Generate options

      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },
    // Set a list of available captions languages
    setSpeedMenu: function setSpeedMenu() {
      var _this8 = this;

      // Menu required
      if (!is$1.element(this.elements.menu.settings.panels.speed)) {
        return;
      }

      var type = 'speed';
      var list = this.elements.menu.settings.panels.speed.querySelector('[role="menu"]'); // Filter out invalid speeds

      this.options.speed = this.options.speed.filter(function (o) {
        return o >= _this8.minimumSpeed && o <= _this8.maximumSpeed;
      }); // Toggle the pane and tab

      var toggle = !is$1.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle); // Empty the menu

      emptyElement(list); // Check if we need to toggle the parent

      controls.checkMenu.call(this); // If we're hiding, nothing more to do

      if (!toggle) {
        return;
      } // Create items


      this.options.speed.forEach(function (speed) {
        controls.createMenuItem.call(_this8, {
          value: speed,
          list: list,
          type: type,
          title: controls.getLabel.call(_this8, 'speed', speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Check if we need to hide/show the settings menu
    checkMenu: function checkMenu() {
      var buttons = this.elements.menu.settings.buttons;
      var visible = !is$1.empty(buttons) && Object.values(buttons).some(function (button) {
        return !button.hidden;
      });
      toggleHidden(this.elements.menu.settings.menu, !visible);
    },
    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem: function focusFirstMenuItem(pane) {
      var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.elements.menu.settings.popup.hidden) {
        return;
      }

      var target = pane;

      if (!is$1.element(target)) {
        target = Object.values(this.elements.menu.settings.panels).find(function (p) {
          return !p.hidden;
        });
      }

      var firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, tabFocus);
    },
    // Show/hide menu
    toggleMenu: function toggleMenu(input, menuElement, buttonElement) {
      var popup = menuElement.popup;
      var button = buttonElement; // Menu and button are required

      if (!is$1.element(popup) || !is$1.element(button)) {
        return;
      } // True toggle by default


      var hidden = popup.hidden;
      var show = hidden;

      if (is$1.boolean(input)) {
        show = input;
      } else if (is$1.keyboardEvent(input) && input.which === 27) {
        show = false;
      } else if (is$1.event(input)) {
        // If Plyr is in a shadowDOM, the event target is set to the component, instead of the
        // Element in the shadowDOM. The path, if available, is complete.
        var target = is$1.function(input.composedPath) ? input.composedPath()[0] : input.target;
        var isMenuItem = popup.contains(target); // If the click was inside the menu or if the click
        // wasn't the button or menu item and we're trying to
        // show the menu (a doc click shouldn't show the menu)

        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      } // Set button attributes


      button.setAttribute('aria-expanded', show); // Show the actual popup

      toggleHidden(popup, !show); // Add class hook

      toggleClass(this.elements.container, this.config.classNames.menu.open, show); // Focus the first item if key interaction

      if (show && is$1.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        // If closing, re-focus the button
        setFocus.call(this, button, is$1.keyboardEvent(input));
      }
    },
    // Get the natural size of a menu panel
    getMenuSize: function getMenuSize(tab) {
      var clone = tab.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.opacity = 0;
      clone.removeAttribute('hidden'); // Append to parent so we get the "real" size

      tab.parentNode.appendChild(clone); // Get the sizes before we remove

      var width = clone.scrollWidth;
      var height = clone.scrollHeight; // Remove from the DOM

      removeElement(clone);
      return {
        width: width,
        height: height
      };
    },
    // Show a panel in the menu
    showMenuPanel: function showMenuPanel() {
      var _this9 = this;

      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var tabFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var target = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(type)); // Nothing to show, bail

      if (!is$1.element(target)) {
        return;
      } // Hide all other panels


      var container = target.parentNode;
      var current = Array.from(container.children).find(function (node) {
        return !node.hidden;
      }); // If we can do fancy animations, we'll animate the height/width

      if (support.transitions && !support.reducedMotion) {
        // Set the current width as a base
        container.style.width = "".concat(current.scrollWidth, "px");
        container.style.height = "".concat(current.scrollHeight, "px"); // Get potential sizes

        var size = controls.getMenuSize.call(this, target); // Restore auto height/width

        var restore = function restore(event) {
          // We're only bothered about height and width on the container
          if (event.target !== container || !['width', 'height'].includes(event.propertyName)) {
            return;
          } // Revert back to auto


          container.style.width = '';
          container.style.height = ''; // Only listen once

          off.call(_this9, container, transitionEndEvent, restore);
        }; // Listen for the transition finishing and restore auto height/width


        on.call(this, container, transitionEndEvent, restore); // Set dimensions to target

        container.style.width = "".concat(size.width, "px");
        container.style.height = "".concat(size.height, "px");
      } // Set attributes on current tab


      toggleHidden(current, true); // Set attributes on target

      toggleHidden(target, false); // Focus the first item

      controls.focusFirstMenuItem.call(this, target, tabFocus);
    },
    // Set the download URL
    setDownloadUrl: function setDownloadUrl() {
      var button = this.elements.buttons.download; // Bail if no button

      if (!is$1.element(button)) {
        return;
      } // Set attribute


      button.setAttribute('href', this.download);
    },
    // Build the default HTML
    create: function create(data) {
      var _this10 = this;

      var bindMenuItemShortcuts = controls.bindMenuItemShortcuts,
          createButton = controls.createButton,
          createProgress = controls.createProgress,
          createRange = controls.createRange,
          createTime = controls.createTime,
          setQualityMenu = controls.setQualityMenu,
          setSpeedMenu = controls.setSpeedMenu,
          showMenuPanel = controls.showMenuPanel;
      this.elements.controls = null; // Larger overlaid play button

      if (is$1.array(this.config.controls) && this.config.controls.includes('play-large')) {
        this.elements.container.appendChild(createButton.call(this, 'play-large'));
      } // Create the container


      var container = createElement('div', getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container; // Default item attributes

      var defaultAttributes = {
        class: 'plyr__controls__item'
      }; // Loop through controls in order

      dedupe(is$1.array(this.config.controls) ? this.config.controls : []).forEach(function (control) {
        // Restart button
        if (control === 'restart') {
          container.appendChild(createButton.call(_this10, 'restart', defaultAttributes));
        } // Rewind button


        if (control === 'rewind') {
          container.appendChild(createButton.call(_this10, 'rewind', defaultAttributes));
        } // Play/Pause button


        if (control === 'play') {
          container.appendChild(createButton.call(_this10, 'play', defaultAttributes));
        } // Fast forward button


        if (control === 'fast-forward') {
          container.appendChild(createButton.call(_this10, 'fast-forward', defaultAttributes));
        } // Progress


        if (control === 'progress') {
          var progressContainer = createElement('div', {
            class: "".concat(defaultAttributes.class, " plyr__progress__container")
          });
          var progress = createElement('div', getAttributesFromSelector(_this10.config.selectors.progress)); // Seek range slider

          progress.appendChild(createRange.call(_this10, 'seek', {
            id: "plyr-seek-".concat(data.id)
          })); // Buffer progress

          progress.appendChild(createProgress.call(_this10, 'buffer')); // TODO: Add loop display indicator
          // Seek tooltip

          if (_this10.config.tooltips.seek) {
            var tooltip = createElement('span', {
              class: _this10.config.classNames.tooltip
            }, '00:00');
            progress.appendChild(tooltip);
            _this10.elements.display.seekTooltip = tooltip;
          }

          _this10.elements.progress = progress;
          progressContainer.appendChild(_this10.elements.progress);
          container.appendChild(progressContainer);
        } // Media current time display


        if (control === 'current-time') {
          container.appendChild(createTime.call(_this10, 'currentTime', defaultAttributes));
        } // Media duration display


        if (control === 'duration') {
          container.appendChild(createTime.call(_this10, 'duration', defaultAttributes));
        } // Volume controls


        if (control === 'mute' || control === 'volume') {
          var volume = _this10.elements.volume; // Create the volume container if needed

          if (!is$1.element(volume) || !container.contains(volume)) {
            volume = createElement('div', extend({}, defaultAttributes, {
              class: "".concat(defaultAttributes.class, " plyr__volume").trim()
            }));
            _this10.elements.volume = volume;
            container.appendChild(volume);
          } // Toggle mute button


          if (control === 'mute') {
            volume.appendChild(createButton.call(_this10, 'mute'));
          } // Volume range control
          // Ignored on iOS as it's handled globally
          // https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html


          if (control === 'volume' && !browser.isIos) {
            // Set the attributes
            var attributes = {
              max: 1,
              step: 0.05,
              value: _this10.config.volume
            }; // Create the volume range slider

            volume.appendChild(createRange.call(_this10, 'volume', extend(attributes, {
              id: "plyr-volume-".concat(data.id)
            })));
          }
        } // Toggle captions button


        if (control === 'captions') {
          container.appendChild(createButton.call(_this10, 'captions', defaultAttributes));
        } // Settings button / menu


        if (control === 'settings' && !is$1.empty(_this10.config.settings)) {
          var wrapper = createElement('div', extend({}, defaultAttributes, {
            class: "".concat(defaultAttributes.class, " plyr__menu").trim(),
            hidden: ''
          }));
          wrapper.appendChild(createButton.call(_this10, 'settings', {
            'aria-haspopup': true,
            'aria-controls': "plyr-settings-".concat(data.id),
            'aria-expanded': false
          }));
          var popup = createElement('div', {
            class: 'plyr__menu__container',
            id: "plyr-settings-".concat(data.id),
            hidden: ''
          });
          var inner = createElement('div');
          var home = createElement('div', {
            id: "plyr-settings-".concat(data.id, "-home")
          }); // Create the menu

          var menu = createElement('div', {
            role: 'menu'
          });
          home.appendChild(menu);
          inner.appendChild(home);
          _this10.elements.menu.settings.panels.home = home; // Build the menu items

          _this10.config.settings.forEach(function (type) {
            // TODO: bundle this with the createMenuItem helper and bindings
            var menuItem = createElement('button', extend(getAttributesFromSelector(_this10.config.selectors.buttons.settings), {
              type: 'button',
              class: "".concat(_this10.config.classNames.control, " ").concat(_this10.config.classNames.control, "--forward"),
              role: 'menuitem',
              'aria-haspopup': true,
              hidden: ''
            })); // Bind menu shortcuts for keyboard users

            bindMenuItemShortcuts.call(_this10, menuItem, type); // Show menu on click

            on.call(_this10, menuItem, 'click', function () {
              showMenuPanel.call(_this10, type, false);
            });
            var flex = createElement('span', null, i18n.get(type, _this10.config));
            var value = createElement('span', {
              class: _this10.config.classNames.menu.value
            }); // Speed contains HTML entities

            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem); // Build the panes

            var pane = createElement('div', {
              id: "plyr-settings-".concat(data.id, "-").concat(type),
              hidden: ''
            }); // Back button

            var backButton = createElement('button', {
              type: 'button',
              class: "".concat(_this10.config.classNames.control, " ").concat(_this10.config.classNames.control, "--back")
            }); // Visible label

            backButton.appendChild(createElement('span', {
              'aria-hidden': true
            }, i18n.get(type, _this10.config))); // Screen reader label

            backButton.appendChild(createElement('span', {
              class: _this10.config.classNames.hidden
            }, i18n.get('menuBack', _this10.config))); // Go back via keyboard

            on.call(_this10, pane, 'keydown', function (event) {
              // We only care about <-
              if (event.which !== 37) {
                return;
              } // Prevent seek


              event.preventDefault();
              event.stopPropagation(); // Show the respective menu

              showMenuPanel.call(_this10, 'home', true);
            }, false); // Go back via button click

            on.call(_this10, backButton, 'click', function () {
              showMenuPanel.call(_this10, 'home', false);
            }); // Add to pane

            pane.appendChild(backButton); // Menu

            pane.appendChild(createElement('div', {
              role: 'menu'
            }));
            inner.appendChild(pane);
            _this10.elements.menu.settings.buttons[type] = menuItem;
            _this10.elements.menu.settings.panels[type] = pane;
          });

          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          _this10.elements.menu.settings.popup = popup;
          _this10.elements.menu.settings.menu = wrapper;
        } // Frame Reverse button


        if (control === 'frame-rewind') {
          container.appendChild(createButton.call(_this10, 'frame-rewind', defaultAttributes));
        } // Frame Forward button


        if (control === 'frame-forward') {
          container.appendChild(createButton.call(_this10, 'frame-forward', defaultAttributes));
        } // Picture in picture button


        if (control === 'pip' && support.pip) {
          container.appendChild(createButton.call(_this10, 'pip', defaultAttributes));
        } // Airplay button


        if (control === 'airplay' && support.airplay) {
          container.appendChild(createButton.call(_this10, 'airplay', defaultAttributes));
        } // Download button


        if (control === 'download') {
          var _attributes = extend({}, defaultAttributes, {
            element: 'a',
            href: _this10.download,
            target: '_blank'
          }); // Set download attribute for HTML5 only


          if (_this10.isHTML5) {
            _attributes.download = '';
          }

          var download = _this10.config.urls.download;

          if (!is$1.url(download) && _this10.isEmbed) {
            extend(_attributes, {
              icon: "logo-".concat(_this10.provider),
              label: _this10.provider
            });
          }

          container.appendChild(createButton.call(_this10, 'download', _attributes));
        } // Toggle trim button


        if (control === 'trim') {
          container.appendChild(createButton.call(_this10, 'trim', defaultAttributes));
        } // Toggle fullscreen button


        if (control === 'fullscreen') {
          container.appendChild(createButton.call(_this10, 'fullscreen', defaultAttributes));
        } // Angle selector menu


        if (control === 'angle-selector') {
          var _wrapper = createElement('div', extend({}, defaultAttributes, {
            class: "".concat(defaultAttributes.class, " plyr__menu").trim(),
            hidden: ''
          }));

          _wrapper.appendChild(createButton.call(_this10, 'angle-selector', {
            'aria-haspopup': true,
            'aria-controls': "plyr-angle-selector-".concat(data.id),
            'aria-expanded': false
          }));

          var _popup = createElement('div', {
            class: 'plyr__menu__container',
            id: "plyr-angle-selector-".concat(data.id),
            hidden: ''
          });

          var _inner = createElement('div');

          var _home = createElement('div', {
            id: "plyr-angle-selector-".concat(data.id, "-home")
          }); // Create the menu


          var _menu = createElement('div', {
            role: 'menu'
          });

          _home.appendChild(_menu);

          _inner.appendChild(_home);

          _this10.elements.menu.angleSelector.panels.home = _home; // Build the menu items once metadata is loaded

          _this10.once('loadedmetadata', function () {
            // Verify that the media has more than one possible angle
            if (!_this10.media.sources || !_this10.media.sources.length || _this10.media.sources.length <= 1) return;
            var type = 'angle';

            _this10.media.sources.forEach(function (x) {
              if (!x.angle) return;
              controls.createMenuItem.call(_this10, {
                value: x.angle,
                list: _menu,
                type: type,
                title: x.angle,
                checked: _this10.media.angle === x.angle
              });
            });

            toggleHidden(_wrapper, false);
          });

          _popup.appendChild(_inner);

          _wrapper.appendChild(_popup);

          container.appendChild(_wrapper);
          _this10.elements.menu.angleSelector.popup = _popup;
          _this10.elements.menu.angleSelector.menu = _wrapper;
        }
      }); // Set available quality levels

      if (this.isHTML5) {
        setQualityMenu.call(this, html5.getQualityOptions.call(this));
      }

      setSpeedMenu.call(this);
      return container;
    },
    // Insert controls
    inject: function inject() {
      var _this11 = this;

      // Sprite
      if (this.config.loadSprite) {
        var icon = controls.getIconUrl.call(this); // Only load external sprite using AJAX

        if (icon.cors) {
          loadSprite(icon.url, 'sprite-plyr');
        }
      } // Create a unique ID


      this.id = Math.floor(Math.random() * 10000); // Null by default

      var container = null;
      this.elements.controls = null; // Set template properties

      var props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      var update = true; // If function, run it and use output

      if (is$1.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      } // Convert falsy controls to empty array (primarily for empty strings)


      if (!this.config.controls) {
        this.config.controls = [];
      }

      if (is$1.element(this.config.controls) || is$1.string(this.config.controls)) {
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


      var replace = function replace(input) {
        var result = input;
        Object.entries(props).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];

          result = replaceAll(result, "{".concat(key, "}"), value);
        });
        return result;
      }; // Update markup


      if (update) {
        if (is$1.string(this.config.controls)) {
          container = replace(container);
        }
      } // Controls container


      var target; // Inject to custom location

      if (is$1.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      } // Inject into the container by default


      if (!is$1.element(target)) {
        target = this.elements.container;
      } // Inject controls HTML (needs to be before captions, hence "afterbegin")


      var insertMethod = is$1.element(container) ? 'insertAdjacentElement' : 'insertAdjacentHTML';
      target[insertMethod]('afterbegin', container); // Find the elements if need be

      if (!is$1.element(this.elements.controls)) {
        controls.findElements.call(this);
      } // Add pressed property to buttons


      if (!is$1.empty(this.elements.buttons)) {
        var addProperty = function addProperty(button) {
          var className = _this11.config.classNames.controlPressed;
          Object.defineProperty(button, 'pressed', {
            enumerable: true,
            get: function get() {
              return hasClass(button, className);
            },
            set: function set() {
              var pressed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
              toggleClass(button, className, pressed);
            }
          });
        }; // Toggle classname when pressed property is set


        Object.values(this.elements.buttons).filter(Boolean).forEach(function (button) {
          if (is$1.array(button) || is$1.nodeList(button)) {
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
        var _this$config = this.config,
            classNames = _this$config.classNames,
            selectors = _this$config.selectors;
        var selector = "".concat(selectors.controls.wrapper, " ").concat(selectors.labels, " .").concat(classNames.hidden);
        var labels = getElements.call(this, selector);
        Array.from(labels).forEach(function (label) {
          toggleClass(label, _this11.config.classNames.hidden, false);
          toggleClass(label, _this11.config.classNames.tooltip, true);
        });
      }
    }
  };

  /**
   * Parse a string to a URL object
   * @param {String} input - the URL to be parsed
   * @param {Boolean} safe - failsafe parsing
   */

  function parseUrl(input) {
    var safe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var url = input;

    if (safe) {
      var parser = document.createElement('a');
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
    var params = new URLSearchParams();

    if (is$1.object(input)) {
      Object.entries(input).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        params.set(key, value);
      });
    }

    return params;
  } // Parse URL Parameters

  function parseUrlHash(input) {
    var _URL = new URL(input),
        hash = _URL.hash;

    return hash;
  }

  var captions = {
    // Setup captions
    setup: function setup() {
      // Requires UI support
      if (!this.supported.ui) {
        return;
      } // Only Vimeo and HTML5 video supported at this point


      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
        // Clear menu and hide
        if (is$1.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
          controls.setCaptionsMenu.call(this);
        }

        return;
      } // Inject the container


      if (!is$1.element(this.elements.captions)) {
        this.elements.captions = createElement('div', getAttributesFromSelector(this.config.selectors.captions));
        insertAfter(this.elements.captions, this.elements.wrapper);
      } // Fix IE captions if CORS is used
      // Fetch captions and inject as blobs instead (data URIs not supported!)


      if (browser.isIE && window.URL) {
        var elements = this.media.querySelectorAll('track');
        Array.from(elements).forEach(function (track) {
          var src = track.getAttribute('src');
          var url = parseUrl(src);

          if (url !== null && url.hostname !== window.location.href.hostname && ['http:', 'https:'].includes(url.protocol)) {
            fetch(src, 'blob').then(function (blob) {
              track.setAttribute('src', window.URL.createObjectURL(blob));
            }).catch(function () {
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


      var browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
      var languages = dedupe(browserLanguages.map(function (language) {
        return language.split('-')[0];
      }));
      var language = (this.storage.get('language') || this.config.captions.language || 'auto').toLowerCase(); // Use first browser language when language is 'auto'

      if (language === 'auto') {
        var _languages = _slicedToArray(languages, 1);

        language = _languages[0];
      }

      var active = this.storage.get('captions');

      if (!is$1.boolean(active)) {
        active = this.config.captions.active;
      }

      Object.assign(this.captions, {
        toggled: false,
        active: active,
        language: language,
        languages: languages
      }); // Watch changes to textTracks and update captions menu

      if (this.isHTML5) {
        var trackEvents = this.config.captions.update ? 'addtrack removetrack' : 'removetrack';
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      } // Update available languages in list next tick (the event must not be triggered before the listeners)


      setTimeout(captions.update.bind(this), 0);
    },
    // Update available language options in settings based on tracks
    update: function update() {
      var _this = this;

      var tracks = captions.getTracks.call(this, true); // Get the wanted language

      var _this$captions = this.captions,
          active = _this$captions.active,
          language = _this$captions.language,
          meta = _this$captions.meta,
          currentTrackNode = _this$captions.currentTrackNode;
      var languageExists = Boolean(tracks.find(function (track) {
        return track.language === language;
      })); // Handle tracks (add event listener and "pseudo"-default)

      if (this.isHTML5 && this.isVideo) {
        tracks.filter(function (track) {
          return !meta.get(track);
        }).forEach(function (track) {
          _this.debug.log('Track added', track); // Attempt to store if the original dom element was "default"


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


          on.call(_this, track, 'cuechange', function () {
            return captions.updateCues.call(_this);
          });
        });
      } // Update language first time it matches, or if the previous matching track was removed


      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      } // Enable or disable captions based on track length


      toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is$1.empty(tracks)); // Update available languages in list

      if (is$1.array(this.config.controls) && this.config.controls.includes('settings') && this.config.settings.includes('captions')) {
        controls.setCaptionsMenu.call(this);
      }
    },
    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle: function toggle(input) {
      var _this2 = this;

      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // If there's no full support
      if (!this.supported.ui) {
        return;
      }

      var toggled = this.captions.toggled; // Current state

      var activeClass = this.config.classNames.captions.active; // Get the next state
      // If the method is called without parameter, toggle based on current value

      var active = is$1.nullOrUndefined(input) ? !toggled : input; // Update state and trigger event

      if (active !== toggled) {
        // When passive, don't override user preferences
        if (!passive) {
          this.captions.active = active;
          this.storage.set({
            captions: active
          });
        } // Force language if the call isn't passive and there is no matching language to toggle to


        if (!this.language && active && !passive) {
          var tracks = captions.getTracks.call(this);
          var track = captions.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), true); // Override user preferences to avoid switching languages if a matching track is added

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


      setTimeout(function () {
        if (active && _this2.captions.toggled) {
          _this2.captions.currentTrackNode.mode = 'hidden';
        }
      });
    },
    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set: function set(index) {
      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var tracks = captions.getTracks.call(this); // Disable captions if setting to -1

      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }

      if (!is$1.number(index)) {
        this.debug.warn('Invalid caption argument', index);
        return;
      }

      if (!(index in tracks)) {
        this.debug.warn('Track not found', index);
        return;
      }

      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        var track = tracks[index];

        var _ref = track || {},
            language = _ref.language; // Store reference to node for invalidation on remove


        this.captions.currentTrackNode = track; // Update settings menu

        controls.updateSetting.call(this, 'captions'); // When passive, don't override user preferences

        if (!passive) {
          this.captions.language = language;
          this.storage.set({
            language: language
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
    setLanguage: function setLanguage(input) {
      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!is$1.string(input)) {
        this.debug.warn('Invalid language argument', input);
        return;
      } // Normalize


      var language = input.toLowerCase();
      this.captions.language = language; // Set currentTrack

      var tracks = captions.getTracks.call(this);
      var track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },
    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks: function getTracks() {
      var _this3 = this;

      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Handle media or textTracks missing or null
      var tracks = Array.from((this.media || {}).textTracks || []); // For HTML5, use cache instead of current tracks when it exists (if captions.update is false)
      // Filter out removed tracks and tracks that aren't captions/subtitles (for example metadata)

      return tracks.filter(function (track) {
        return !_this3.isHTML5 || update || _this3.captions.meta.has(track);
      }).filter(function (track) {
        return ['captions', 'subtitles'].includes(track.kind);
      });
    },
    // Match tracks based on languages and get the first
    findTrack: function findTrack(languages) {
      var _this4 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tracks = captions.getTracks.call(this);

      var sortIsDefault = function sortIsDefault(track) {
        return Number((_this4.captions.meta.get(track) || {}).default);
      };

      var sorted = Array.from(tracks).sort(function (a, b) {
        return sortIsDefault(b) - sortIsDefault(a);
      });
      var track;
      languages.every(function (language) {
        track = sorted.find(function (t) {
          return t.language === language;
        });
        return !track; // Break iteration if there is a match
      }); // If no match is found but is required, get first

      return track || (force ? sorted[0] : undefined);
    },
    // Get the current track
    getCurrentTrack: function getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },
    // Get UI label for track
    getLabel: function getLabel(track) {
      var currentTrack = track;

      if (!is$1.track(currentTrack) && support.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }

      if (is$1.track(currentTrack)) {
        if (!is$1.empty(currentTrack.label)) {
          return currentTrack.label;
        }

        if (!is$1.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }

        return i18n.get('enabled', this.config);
      }

      return i18n.get('disabled', this.config);
    },
    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues: function updateCues(input) {
      // Requires UI
      if (!this.supported.ui) {
        return;
      }

      if (!is$1.element(this.elements.captions)) {
        this.debug.warn('No captions element to render to');
        return;
      } // Only accept array or empty input


      if (!is$1.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn('updateCues: Invalid input', input);
        return;
      }

      var cues = input; // Get cues from track

      if (!cues) {
        var track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map(function (cue) {
          return cue.getCueAsHTML();
        }).map(getHTML);
      } // Set new caption text


      var content = cues.map(function (cueText) {
        return cueText.trim();
      }).join('\n');
      var changed = content !== this.elements.captions.innerHTML;

      if (changed) {
        // Empty the container and create a new child element
        emptyElement(this.elements.captions);
        var caption = createElement('span', getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption); // Trigger event

        triggerEvent.call(this, this.media, 'cuechange');
      }
    }
  };

  // ==========================================================================
  // Plyr default config
  // ==========================================================================
  var defaults$1 = {
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
    iconUrl: 'https://cdn.plyr.io/3.6.1/plyr.svg',
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
      maxZoom: 8,
      // Default max zoom level
      scrollToZoom: false
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
      offsetContainer: false,
      // Offset the trimming container window, to center the window based on the current time
      alwaysShowTimestamps: false,
      // By default thumb timestamps are only shown on hover, this will set them to always be displayed
      zoom: {
        enabled: false,
        // Zoom the editor timeline to the trim container
        preRoll: 0,
        // Time in seconds to show before the trimming window
        postRoll: 0 // Time in seconds to show after the trimming window

      }
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
    // 'angle-selector',
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
      angleSelector: 'Angle Selector',
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
        api: 'https://vimeo.com/api/v2/video/{0}.json'
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
    'ended', 'progress', 'stalled', 'playing', 'waiting', 'canplay', 'canplaythrough', 'loadstart', 'loadeddata', 'loadedmetadata', 'durationchange', 'timeupdate', 'volumechange', 'play', 'pause', 'error', 'seeking', 'seeked', 'emptied', 'ratechange', 'cuechange', // Custom events
    'download', 'enterfullscreen', 'exitfullscreen', 'captionsenabled', 'captionsdisabled', 'languagechange', 'controlshidden', 'controlsshown', 'ready', 'destroyed', // YouTube
    'statechange', // Quality
    'qualitychange', // Ads
    'adsloaded', 'adscontentpause', 'adscontentresume', 'adstarted', 'adsmidpoint', 'adscomplete', 'adsallcomplete', 'adsimpression', 'adsclick', // Preview thumbnails
    'previewthumbnailsloaded', // Angle
    'angleChange', // Editor
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
        angleSelector: '[data-plyr="angle-selector"]',
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
        timeContainerShown: 'plyr__trim-tool__time-container--is-shown',
        alwaysShowTimestamps: 'plyr__trim-tool__time-container--always-show-timestamps'
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
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false,
      // Custom settings from Plyr
      referrerPolicy: null // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy

    },
    // YouTube plugin
    youtube: {
      noCookie: true,
      // Whether to use an alternative version of YouTube without cookies
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1 // Hide logos as much as possible (they still show one in the corner when paused)

    }
  };

  // ==========================================================================
  // Plyr states
  // ==========================================================================
  var pip = {
    active: 'picture-in-picture',
    inactive: 'inline'
  };

  // ==========================================================================
  // Plyr supported types and providers
  // ==========================================================================
  var providers = {
    html5: 'html5',
    youtube: 'youtube',
    vimeo: 'vimeo'
  };
  var types = {
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
  var noop = function noop() {};

  var Console = /*#__PURE__*/function () {
    function Console() {
      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      _classCallCheck(this, Console);

      this.enabled = window.console && enabled;

      if (this.enabled) {
        this.log('Debugging enabled');
      }
    }

    _createClass(Console, [{
      key: "log",
      get: function get() {
        // eslint-disable-next-line no-console
        return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
      }
    }, {
      key: "warn",
      get: function get() {
        // eslint-disable-next-line no-console
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
      }
    }, {
      key: "error",
      get: function get() {
        // eslint-disable-next-line no-console
        return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
      }
    }]);

    return Console;
  }();

  var Fullscreen = /*#__PURE__*/function () {
    function Fullscreen(player) {
      var _this = this;

      _classCallCheck(this, Fullscreen);

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

      this.player.elements.fullscreen = player.config.fullscreen.container && closest(this.player.elements.container, player.config.fullscreen.container); // Register event listeners
      // Handle event (incase user presses escape etc)

      on.call(this.player, document, this.prefix === 'ms' ? 'MSFullscreenChange' : "".concat(this.prefix, "fullscreenchange"), function () {
        // TODO: Filter for target??
        _this.onChange();
      }); // Fullscreen toggle on double click

      on.call(this.player, this.player.elements.container, 'dblclick', function (event) {
        // Ignore double click in controls
        if (is$1.element(_this.player.elements.controls) && _this.player.elements.controls.contains(event.target)) {
          return;
        }

        _this.toggle();
      }); // Tap focus when in fullscreen

      on.call(this, this.player.elements.container, 'keydown', function (event) {
        return _this.trapFocus(event);
      }); // Update the UI

      this.update();
    } // Determine if native supported


    _createClass(Fullscreen, [{
      key: "onChange",
      value: function onChange() {
        if (!this.enabled) {
          return;
        } // Update toggle button


        var button = this.player.elements.buttons.fullscreen;

        if (is$1.element(button)) {
          button.pressed = this.active;
        } // Always trigger events on the plyr / media element (not a fullscreen container) and let them bubble up


        var target = this.target === this.player.media ? this.target : this.player.elements.container; // Trigger an event

        triggerEvent.call(this.player, target, this.active ? 'enterfullscreen' : 'exitfullscreen', true);
      }
    }, {
      key: "toggleFallback",
      value: function toggleFallback() {
        var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

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
          var viewport = document.head.querySelector('meta[name="viewport"]');
          var property = 'viewport-fit=cover'; // Inject the viewport meta if required

          if (!viewport) {
            viewport = document.createElement('meta');
            viewport.setAttribute('name', 'viewport');
          } // Check if the property already exists


          var hasProperty = is$1.string(viewport.content) && viewport.content.includes(property);

          if (toggle) {
            this.cleanupViewport = !hasProperty;

            if (!hasProperty) {
              viewport.content += ",".concat(property);
            }
          } else if (this.cleanupViewport) {
            viewport.content = viewport.content.split(',').filter(function (part) {
              return part.trim() !== property;
            }).join(',');
          }
        } // Toggle button and fire events


        this.onChange();
      } // Trap focus inside container

    }, {
      key: "trapFocus",
      value: function trapFocus(event) {
        // Bail if iOS, not active, not the tab key
        if (browser.isIos || !this.active || event.key !== 'Tab' || event.keyCode !== 9) {
          return;
        } // Get the current focused element


        var focused = document.activeElement;
        var focusable = getElements.call(this.player, 'a[href], button:not(:disabled), input:not(:disabled), [tabindex]');

        var _focusable = _slicedToArray(focusable, 1),
            first = _focusable[0];

        var last = focusable[focusable.length - 1];

        if (focused === last && !event.shiftKey) {
          // Move focus to first element that can be tabbed if Shift isn't used
          first.focus();
          event.preventDefault();
        } else if (focused === first && event.shiftKey) {
          // Move focus to last element that can be tabbed if Shift is used
          last.focus();
          event.preventDefault();
        }
      } // Update UI

    }, {
      key: "update",
      value: function update() {
        if (this.enabled) {
          var mode;

          if (this.forceFallback) {
            mode = 'Fallback (forced)';
          } else if (Fullscreen.native) {
            mode = 'Native';
          } else {
            mode = 'Fallback';
          }

          this.player.debug.log("".concat(mode, " fullscreen enabled"));
        } else {
          this.player.debug.log('Fullscreen not supported and fallback disabled');
        } // Add styling hook to show button


        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      } // Make an element fullscreen

    }, {
      key: "enter",
      value: function enter() {
        if (!this.enabled) {
          return;
        } // iOS native fullscreen doesn't need the request step


        if (browser.isIos && this.player.config.fullscreen.iosNative) {
          this.target.webkitEnterFullscreen();
        } else if (!Fullscreen.native || this.forceFallback) {
          this.toggleFallback(true);
        } else if (!this.prefix) {
          this.target.requestFullscreen({
            navigationUI: 'hide'
          });
        } else if (!is$1.empty(this.prefix)) {
          this.target["".concat(this.prefix, "Request").concat(this.property)]();
        }
      } // Bail from fullscreen

    }, {
      key: "exit",
      value: function exit() {
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
        } else if (!is$1.empty(this.prefix)) {
          var action = this.prefix === 'moz' ? 'Cancel' : 'Exit';
          document["".concat(this.prefix).concat(action).concat(this.property)]();
        }
      } // Toggle state

    }, {
      key: "toggle",
      value: function toggle() {
        if (!this.active) {
          this.enter();
        } else {
          this.exit();
        }
      }
    }, {
      key: "usingNative",
      // If we're actually using native
      get: function get() {
        return Fullscreen.native && !this.forceFallback;
      } // Get the prefix for handlers

    }, {
      key: "enabled",
      // Determine if fullscreen is enabled
      get: function get() {
        return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      } // Get active state

    }, {
      key: "active",
      get: function get() {
        if (!this.enabled) {
          return false;
        } // Fallback using classname


        if (!Fullscreen.native || this.forceFallback) {
          return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
        }

        var element = !this.prefix ? document.fullscreenElement : document["".concat(this.prefix).concat(this.property, "Element")];
        return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
      } // Get target element

    }, {
      key: "target",
      get: function get() {
        return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
      }
    }], [{
      key: "native",
      get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      }
    }, {
      key: "prefix",
      get: function get() {
        // No prefix
        if (is$1.function(document.exitFullscreen)) {
          return '';
        } // Check for fullscreen support by vendor prefix


        var value = '';
        var prefixes = ['webkit', 'moz', 'ms'];
        prefixes.some(function (pre) {
          if (is$1.function(document["".concat(pre, "ExitFullscreen")]) || is$1.function(document["".concat(pre, "CancelFullScreen")])) {
            value = pre;
            return true;
          }

          return false;
        });
        return value;
      }
    }, {
      key: "property",
      get: function get() {
        return this.prefix === 'moz' ? 'FullScreen' : 'Fullscreen';
      }
    }]);

    return Fullscreen;
  }();

  // ==========================================================================
  // Load image avoiding xhr/fetch CORS issues
  // Server status can't be obtained this way unfortunately, so this uses "naturalWidth" to determine if the image has loaded
  // By default it checks if it is at least 1px, but you can add a second argument to change this
  // ==========================================================================
  function loadImage(src) {
    var minWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return new Promise(function (resolve, reject) {
      var image = new Image();

      var handler = function handler() {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };

      Object.assign(image, {
        onload: handler,
        onerror: handler,
        src: src
      });
    });
  }

  var ui = {
    addStyleHook: function addStyleHook(container) {
      toggleClass(container, this.config.selectors.container.replace('.', ''), true);
      toggleClass(container, this.config.classNames.uiSupported, this.supported.ui);
    },
    // Toggle native HTML5 media controls
    toggleNativeControls: function toggleNativeControls() {
      var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (toggle && this.isHTML5) {
        this.media.setAttribute('controls', '');
      } else {
        this.media.removeAttribute('controls');
      }
    },
    // Setup the UI
    build: function build() {
      var _this = this;

      // Re-attach media element listeners
      // TODO: Use event bubbling?
      this.listeners.media(); // Don't setup interface if no support

      if (!this.supported.ui) {
        this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)); // Restore native controls

        ui.toggleNativeControls.call(this, true); // Bail

        return;
      } // Inject custom controls if not present


      if (!is$1.element(this.elements.controls)) {
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

      setTimeout(function () {
        triggerEvent.call(_this, _this.media, 'ready');
      }, 0); // Set the title

      ui.setTitle.call(this); // Assure the poster image is set, if the property was added before the element was created

      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(function () {});
      } // Manually set the duration if user has overridden it.
      // The event listeners for it doesn't get called if preload is disabled (#701)


      if (this.config.duration) {
        controls.durationUpdate.call(this);
      }
    },
    // Setup aria attribute for play and iframe title
    setTitle: function setTitle() {
      // Find the current text
      var label = i18n.get('play', this.config); // If there's a media title set, use that for the label

      if (is$1.string(this.config.title) && !is$1.empty(this.config.title)) {
        label += ", ".concat(this.config.title);
      } // If there's a play button, set label


      Array.from(this.elements.buttons.play || []).forEach(function (button) {
        button.setAttribute('aria-label', label);
      }); // Set iframe title
      // https://github.com/sampotts/plyr/issues/124

      if (this.isEmbed) {
        var iframe = getElement.call(this, 'iframe');

        if (!is$1.element(iframe)) {
          return;
        } // Default to media type


        var title = !is$1.empty(this.config.title) ? this.config.title : 'video';
        var format = i18n.get('frameTitle', this.config);
        iframe.setAttribute('title', format.replace('{title}', title));
      }
    },
    // Toggle poster
    togglePoster: function togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },
    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster: function setPoster(poster) {
      var _this2 = this;

      var passive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // Don't override if call is passive
      if (passive && this.poster) {
        return Promise.reject(new Error('Poster already set'));
      } // Set property synchronously to respect the call order


      this.media.setAttribute('data-poster', poster); // Wait until ui is ready

      return ready.call(this) // Load image
      .then(function () {
        return loadImage(poster);
      }).catch(function (err) {
        // Hide poster on error unless it's been set by another call
        if (poster === _this2.poster) {
          ui.togglePoster.call(_this2, false);
        } // Rethrow


        throw err;
      }).then(function () {
        // Prevent race conditions
        if (poster !== _this2.poster) {
          throw new Error('setPoster cancelled by later call to setPoster');
        }
      }).then(function () {
        Object.assign(_this2.elements.poster.style, {
          backgroundImage: "url('".concat(poster, "')"),
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ''
        });
        ui.togglePoster.call(_this2, true);
        return poster;
      });
    },
    // Check playing state
    checkPlaying: function checkPlaying(event) {
      var _this3 = this;

      // Class hooks
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped); // Set state

      Array.from(this.elements.buttons.play || []).forEach(function (target) {
        Object.assign(target, {
          pressed: _this3.playing
        });
        target.setAttribute('aria-label', i18n.get(_this3.playing ? 'pause' : 'play', _this3.config));
      }); // Only update controls on non timeupdate events

      if (is$1.event(event) && event.type === 'timeupdate') {
        return;
      } // Toggle controls


      ui.toggleControls.call(this);
    },
    // Check if media is loading
    checkLoading: function checkLoading(event) {
      var _this4 = this;

      this.loading = ['stalled', 'waiting'].includes(event.type); // Clear timer

      clearTimeout(this.timers.loading); // Timer to prevent flicker when seeking

      this.timers.loading = setTimeout(function () {
        // Update progress bar loading class state
        toggleClass(_this4.elements.container, _this4.config.classNames.loading, _this4.loading); // Update controls visibility

        ui.toggleControls.call(_this4);
      }, this.loading ? 250 : 0);
    },
    // Toggle controls based on state and `force` argument
    toggleControls: function toggleControls(force) {
      var controlsElement = this.elements.controls;

      if (controlsElement && this.config.hideControls) {
        // Don't hide controls if a touch-device user recently seeked. (Must be limited to touch devices, or it occasionally prevents desktop controls from hiding.)
        var recentTouchSeek = this.touch && this.lastSeekTime + 2000 > Date.now(); // Show controls if force, loading, paused, button interaction, or recent seek, otherwise hide

        this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
      }
    },
    // Migrate any custom properties from the media to the parent
    migrateStyles: function migrateStyles() {
      var _this5 = this;

      // Loop through values (as they are the keys when the object is spread 🤔)
      Object.values(_objectSpread2({}, this.media.style)) // We're only fussed about Plyr specific properties
      .filter(function (key) {
        return !is$1.empty(key) && key.startsWith('--plyr');
      }).forEach(function (key) {
        // Set on the container
        _this5.elements.container.style.setProperty(key, _this5.media.style.getPropertyValue(key)); // Clean up from media element


        _this5.media.style.removeProperty(key);
      }); // Remove attribute if empty

      if (is$1.empty(this.media.style)) {
        this.media.removeAttribute('style');
      }
    }
  };

  var Listeners = /*#__PURE__*/function () {
    function Listeners(player) {
      _classCallCheck(this, Listeners);

      this.player = player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.setTabFocus = this.setTabFocus.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    } // Handle key presses


    _createClass(Listeners, [{
      key: "handleKey",
      value: function handleKey(event) {
        var player = this.player;
        var elements = player.elements;
        var code = event.keyCode ? event.keyCode : event.which;
        var pressed = event.type === 'keydown';
        var repeat = pressed && code === this.lastKey; // Bail if a modifier key is set

        if (event.altKey || event.shiftKey) {
          return;
        } // If the event is bubbled from the media element
        // Firefox doesn't get the keycode for whatever reason


        if (!is$1.number(code)) {
          return;
        } // Seek by the number keys


        var seekByKey = function seekByKey() {
          // Divide the max duration into 10th's and times by the number value
          player.currentTime = player.duration / 10 * (code - 48);
        }; // Handle the key on keydown
        // Reset on keyup


        if (pressed) {
          // Check focused element
          // and if the focused element is not editable (e.g. text input)
          // and any that accept key input http://webaim.org/techniques/keyboard/
          var focused = document.activeElement;

          if (is$1.element(focused)) {
            var editable = player.config.selectors.editable;
            var seek = elements.inputs.seek;

            if (focused !== seek && matches$1(focused, editable)) {
              return;
            }

            if (event.which === 32 && matches$1(focused, 'button, [role^="menuitem"]')) {
              return;
            }
          } // Which keycodes should we prevent default


          var preventDefault = [32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79, 187, 189]; // If the code is found prevent default (e.g. prevent scrolling for arrows)

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
              // Plus key

              case 187:
                player.editor.setZoomByEvent(event);
                break;
              // Minus key

              case 189:
                player.editor.setZoomByEvent(event);
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

    }, {
      key: "toggleMenu",
      value: function toggleMenu(event) {
        var menu = this.player.elements.menu;
        var buttons = this.player.elements.buttons;

        controls.toggleMenu.call(this.player, event, menu.settings, buttons.settings);

        controls.toggleMenu.call(this.player, event, menu.angleSelector, buttons.angleSelector);
      } // Device is touch enabled

    }, {
      key: "firstTouch",
      value: function firstTouch() {
        var player = this.player;
        var elements = player.elements;
        player.touch = true; // Add touch class

        toggleClass(elements.container, player.config.classNames.isTouch, true);
      }
    }, {
      key: "setTabFocus",
      value: function setTabFocus(event) {
        var player = this.player;
        var elements = player.elements;
        clearTimeout(this.focusTimer); // Ignore any key other than tab

        if (event.type === 'keydown' && event.which !== 9) {
          return;
        } // Store reference to event timeStamp


        if (event.type === 'keydown') {
          this.lastKeyDown = event.timeStamp;
        } // Remove current classes


        var removeCurrent = function removeCurrent() {
          var className = player.config.classNames.tabFocus;
          var current = getElements.call(player, ".".concat(className));
          toggleClass(current, className, false);
        }; // Determine if a key was pressed to trigger this event


        var wasKeyDown = event.timeStamp - this.lastKeyDown <= 20; // Ignore focus events if a key was pressed prior

        if (event.type === 'focus' && !wasKeyDown) {
          return;
        } // Remove all current


        removeCurrent(); // Delay the adding of classname until the focus has changed
        // This event fires before the focusin event

        if (event.type !== 'focusout') {
          this.focusTimer = setTimeout(function () {
            var focused = document.activeElement; // Ignore if current focus element isn't inside the player

            if (!elements.container.contains(focused)) {
              return;
            }

            toggleClass(document.activeElement, player.config.classNames.tabFocus, true);
          }, 10);
        }
      } // Global window & document listeners

    }, {
      key: "global",
      value: function global() {
        var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var player = this.player; // Keyboard shortcuts

        if (player.config.keyboard.global) {
          toggleListener.call(player, window, 'keydown keyup', this.handleKey, toggle, false);
        } // Click anywhere closes menu


        toggleListener.call(player, document.body, 'click', this.toggleMenu, toggle); // Detect touch by events

        once.call(player, document.body, 'touchstart', this.firstTouch); // Tab focus detection

        toggleListener.call(player, document.body, 'keydown focus blur focusout', this.setTabFocus, toggle, false, true);
      } // Container listeners

    }, {
      key: "container",
      value: function container() {
        var player = this.player;
        var config = player.config,
            elements = player.elements,
            timers = player.timers; // Keyboard shortcuts

        if (!config.keyboard.global && config.keyboard.focused) {
          on.call(player, elements.container, 'keydown keyup', this.handleKey, false);
        } // Toggle controls on mouse events and entering fullscreen


        on.call(player, elements.container, 'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen', function (event) {
          var controlsElement = elements.controls; // Remove button states for fullscreen

          if (controlsElement && event.type === 'enterfullscreen') {
            controlsElement.pressed = false;
            controlsElement.hover = false;
          } // Show, then hide after a timeout unless another control event occurs


          var show = ['touchstart', 'touchmove', 'mousemove'].includes(event.type);
          var delay = 0;

          if (show) {
            ui.toggleControls.call(player, true); // Use longer timeout for touch devices

            delay = player.touch ? 3000 : 2000;
          } // Clear timer


          clearTimeout(timers.controls); // Set new timer to prevent flicker when seeking

          timers.controls = setTimeout(function () {
            return ui.toggleControls.call(player, false);
          }, delay);
        }); // Set a gutter for Vimeo

        var setGutter = function setGutter(ratio, padding, toggle) {
          if (!player.isVimeo || player.config.vimeo.premium) {
            return;
          }

          var target = player.elements.wrapper.firstChild;

          var _ratio = _slicedToArray(ratio, 2),
              y = _ratio[1];

          var _getAspectRatio$call = getAspectRatio.call(player),
              _getAspectRatio$call2 = _slicedToArray(_getAspectRatio$call, 2),
              videoX = _getAspectRatio$call2[0],
              videoY = _getAspectRatio$call2[1];

          target.style.maxWidth = toggle ? "".concat(y / videoY * videoX, "px") : null;
          target.style.margin = toggle ? '0 auto' : null;
        }; // Resize on fullscreen change


        var setPlayerSize = function setPlayerSize(measure) {
          // If we don't need to measure the viewport
          if (!measure) {
            return setAspectRatio.call(player);
          }

          var rect = elements.container.getBoundingClientRect();
          var width = rect.width,
              height = rect.height;
          return setAspectRatio.call(player, "".concat(width, ":").concat(height));
        };

        var resized = function resized() {
          clearTimeout(timers.resized);
          timers.resized = setTimeout(setPlayerSize, 50);
        };

        on.call(player, elements.container, 'enterfullscreen exitfullscreen', function (event) {
          var _player$fullscreen = player.fullscreen,
              target = _player$fullscreen.target,
              usingNative = _player$fullscreen.usingNative; // Ignore events not from target

          if (target !== elements.container) {
            return;
          } // If it's not an embed and no ratio specified


          if (!player.isEmbed && is$1.empty(player.config.ratio)) {
            return;
          }

          var isEnter = event.type === 'enterfullscreen'; // Set the player size when entering fullscreen to viewport size

          var _setPlayerSize = setPlayerSize(isEnter),
              padding = _setPlayerSize.padding,
              ratio = _setPlayerSize.ratio; // Set Vimeo gutter


          setGutter(ratio, padding, isEnter); // If not using native browser fullscreen API, we need to check for resizes of viewport

          if (!usingNative) {
            if (isEnter) {
              on.call(player, window, 'resize', resized);
            } else {
              off.call(player, window, 'resize', resized);
            }
          }
        });
      } // Listen for media events

    }, {
      key: "media",
      value: function media() {
        var _this = this;

        var player = this.player;
        var elements = player.elements; // Time change on media

        on.call(player, player.media, 'timeupdate seeking seeked', function (event) {
          return controls.timeUpdate.call(player, event);
        }); // Display duration

        on.call(player, player.media, 'durationchange loadeddata loadedmetadata', function (event) {
          return controls.durationUpdate.call(player, event);
        }); // Handle the media finishing

        on.call(player, player.media, 'ended', function () {
          // Show poster on end
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            // Restart
            player.restart(); // Call pause otherwise IE11 will start playing the video again

            player.pause();
          }
        }); // Check for buffer progress

        on.call(player, player.media, 'progress playing seeking seeked', function (event) {
          return controls.updateProgress.call(player, event);
        }); // Handle volume changes

        on.call(player, player.media, 'volumechange', function (event) {
          return controls.updateVolume.call(player, event);
        }); // Handle play/pause

        on.call(player, player.media, 'playing play pause ended emptied timeupdate', function (event) {
          return ui.checkPlaying.call(player, event);
        }); // Handle media fragments end event, as event is not fired by default

        on.call(player, player.media, 'timeupdate seeking seeked', function () {
          if (!player.mediaFragment.enabled || !player.duration || player.currentTime < player.duration) return; // Media fragments are not automatically stopped at end of playback

          player.pause(); // Manually trigger default event ended as ended event will not trigger for media fragments

          triggerEvent.call(player, player.media, 'ended');
        }); // Loading state

        on.call(player, player.media, 'waiting canplay seeked playing', function (event) {
          return ui.checkLoading.call(player, event);
        }); // Click video

        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          // Re-fetch the wrapper
          var wrapper = getElement.call(player, ".".concat(player.config.classNames.video)); // Bail if there's no wrapper (this should never happen)

          if (!is$1.element(wrapper)) {
            return;
          } // On click play, pause or restart


          on.call(player, elements.container, 'click', function (event) {
            var targets = [elements.container, wrapper]; // Ignore if click if not container or in video wrapper

            if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
              return;
            } // Touch devices will just show controls (if hidden)


            if (player.touch && player.config.hideControls) {
              return;
            }

            if (player.ended) {
              _this.proxy(event, player.restart, 'restart');

              _this.proxy(event, function () {
                silencePromise(player.play());
              }, 'play');
            } else {
              _this.proxy(event, function () {
                silencePromise(player.togglePlay());
              }, 'play');
            }
          });
        } // Disable right click


        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(player, elements.wrapper, 'contextmenu', function (event) {
            event.preventDefault();
          }, false);
        } // Volume change


        on.call(player, player.media, 'volumechange', function () {
          // Save to storage
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        }); // Speed change

        on.call(player, player.media, 'ratechange', function () {
          // Update UI
          controls.updateSetting.call(player, 'speed'); // Save to storage


          player.storage.set({
            speed: player.speed
          });
        }); // Quality change

        on.call(player, player.media, 'qualitychange', function (event) {
          // Update UI
          controls.updateSetting.call(player, 'quality', null, event.detail.quality);
        }); // Update download link when ready and if quality changes

        on.call(player, player.media, 'ready qualitychange', function () {
          controls.setDownloadUrl.call(player);
        }); // Proxy events to container
        // Bubble up key events for Edge

        var proxyEvents = player.config.events.concat(['keyup', 'keydown']).join(' ');
        on.call(player, player.media, proxyEvents, function (event) {
          var _event$detail = event.detail,
              detail = _event$detail === void 0 ? {} : _event$detail; // Get error details from media

          if (event.type === 'error') {
            detail = player.media.error;
          }

          triggerEvent.call(player, elements.container, event.type, true, detail);
        });
      }
    }, {
      key: "editor",
      value: function editor() {
        var _this2 = this;

        var timeline = this.player.editor.elements.container.timeline;
        var editor = this.player.editor; // Stores setInterval for checking the timeline position, so can be cleaned up

        var timelineInterval; // IE doesn't support input event, so we fallback to change

        var inputEvent = browser.isIE ? 'change' : 'input'; // Use event listener to support IE, Edge and early versions of Safari

        if ('ResizeObserver' in window) {
          new ResizeObserver(function () {
            if (editor.active) {
              editor.setVideoTimelimeContent();
            }
          }).observe(timeline);
        } else {
          window.addEventListener('resize', function () {
            if (editor.active) {
              editor.setVideoTimelimeContent();
            }
          });
        } // Set seeking start


        this.bind(timeline, 'mousedown touchstart', function (event) {
          if (editor.active) {
            editor.setSeeking(event);

            if (!_this2.player.trim.editing) {
              // Adjust timeline position when we get near the end of the timeline
              timelineInterval = setInterval(function () {
                return editor.setTimelineOffset(true);
              }, 50);
            }
          }
        }); // Set seeking end

        this.bind(document.body, 'mouseup touchend', function (event) {
          if (editor.active) {
            editor.setSeeking(event);
          } // End check for adjusting the timeline position when near the end of the timeline


          clearInterval(timelineInterval);
        }); // Update seek position

        this.bind(document.body, 'mousemove touchmove', function (event) {
          if (editor.seeking) {
            editor.setSeekTime(event);
          }
        }); // Zoom Timeline

        this.bind(editor.elements.container.controls.zoomContainer.zoom, inputEvent, function (event) {
          if (editor.active) {
            editor.setZoomByEvent(event);
          }
        }); // Zoom Out Control

        this.bind(editor.elements.container.controls.zoomContainer.zoomOut, 'click', function (event) {
          editor.setZoomByEvent(event);
        }); // Zoom Out Control

        this.bind(editor.elements.container.controls.zoomContainer.zoomIn, 'click', function (event) {
          editor.setZoomByEvent(event);
        }); // Zoom timeline

        this.bind(editor.elements.container, 'wheel', function (event) {
          event.preventDefault();

          if (editor.active && _this2.player.config.editor.scrollToZoom) {
            editor.setZoomByEvent(event);
          }
        }, 'editor', false);
        this.bind(timeline.seekHandle, 'mousedown mouseup keydown keyup touchstart touchend', function (event) {
          var player = _this2.player;
          var seek = event.currentTarget;
          var code = event.keyCode ? event.keyCode : event.which;
          var attribute = 'play-on-seeked';

          if (is$1.keyboardEvent(event) && code !== 39 && code !== 37) {
            return;
          } // Record seek time so we can prevent hiding controls for a few seconds after seek


          player.lastSeekTime = Date.now(); // Was playing before?

          var play = seek.hasAttribute(attribute); // Done seeking

          var done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback

          if (play && done) {
            seek.removeAttribute(attribute);
            silencePromise(player.play());
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, '');
            player.pause();
          }
        }); // Update seek-value attribute on mousemove

        this.bind(timeline, 'mousedown mousemove', function (event) {
          if (!_this2.player.editor.seeking) return;
          var rect = timeline.getBoundingClientRect();
          var percent = 100 / rect.width * (event.pageX - rect.left);
          timeline.seekHandle.setAttribute('seek-value', percent); // Update video seek value as well

          _this2.player.elements.inputs.seek.setAttribute('seek-value', percent);
        });
        this.player.on('timeupdate seeking seeked', function () {
          editor.setSeekPosition();
        });
      } // Run default and custom handlers

    }, {
      key: "proxy",
      value: function proxy(event, defaultHandler, customHandlerKey) {
        var player = this.player;
        var customHandler = player.config.listeners[customHandlerKey];
        var hasCustomHandler = is$1.function(customHandler);
        var returned = true; // Execute custom handler

        if (hasCustomHandler) {
          returned = customHandler.call(player, event);
        } // Only call default handler if not prevented in custom handler


        if (returned !== false && is$1.function(defaultHandler)) {
          defaultHandler.call(player, event);
        }
      } // Trigger custom and default handlers

    }, {
      key: "bind",
      value: function bind(element, type, defaultHandler, customHandlerKey) {
        var _this3 = this;

        var passive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var player = this.player;
        var customHandler = player.config.listeners[customHandlerKey];
        var hasCustomHandler = is$1.function(customHandler);
        on.call(player, element, type, function (event) {
          return _this3.proxy(event, defaultHandler, customHandlerKey);
        }, passive && !hasCustomHandler);
      } // Listen for control events

    }, {
      key: "controls",
      value: function controls$1() {
        var _this4 = this;

        var player = this.player;
        var elements = player.elements; // IE doesn't support input event, so we fallback to change

        var inputEvent = browser.isIE ? 'change' : 'input'; // Play/pause toggle

        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach(function (button) {
            _this4.bind(button, 'click', function () {
              silencePromise(player.togglePlay());
            }, 'play');
          });
        } // Pause


        this.bind(elements.buttons.restart, 'click', player.restart, 'restart'); // Rewind

        this.bind(elements.buttons.rewind, 'click', player.rewind, 'rewind'); // FastForward

        this.bind(elements.buttons.fastForward, 'click', player.forward, 'fastForward'); // Frame Back

        this.bind(elements.buttons.frameRewind, 'click', player.frameRewind, 'rewind'); // Frame Forward

        this.bind(elements.buttons.frameForward, 'click', player.frameForward, 'fastForward'); // Mute toggle

        this.bind(elements.buttons.mute, 'click', function () {
          player.muted = !player.muted;
        }, 'mute'); // Captions toggle

        this.bind(elements.buttons.captions, 'click', function () {
          return player.toggleCaptions();
        }); // Download
        // Note: For media fragments the whole video will be downloaded

        this.bind(elements.buttons.download, 'click', function () {
          triggerEvent.call(player, player.media, 'download');
        }, 'download'); // Trim toggle

        this.bind(elements.buttons.trim, 'click', function () {
          player.trim.toggle();
        }, 'trim'); // Fullscreen toggle

        this.bind(elements.buttons.fullscreen, 'click', function () {
          player.fullscreen.toggle();
        }, 'fullscreen'); // Picture-in-Picture

        this.bind(elements.buttons.pip, 'click', function () {
          player.pip = 'toggle';
        }, 'pip'); // Airplay

        this.bind(elements.buttons.airplay, 'click', player.airplay, 'airplay'); // Settings menu - click toggle

        this.bind(elements.buttons.settings, 'click', function (event) {
          // Prevent the document click listener closing the menu
          event.stopPropagation();
          event.preventDefault();
          var menu = player.elements.menu.settings;
          var button = player.elements.buttons.settings;

          controls.toggleMenu.call(player, event, menu, button);
        }, null, false); // Can't be passive as we're preventing default
        // Settings menu - keyboard toggle
        // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143

        this.bind(elements.buttons.settings, 'keyup', function (event) {
          var code = event.which; // We only care about space and return

          if (![13, 32].includes(code)) {
            return;
          } // Because return triggers a click anyway, all we need to do is set focus


          if (code === 13) {
            controls.focusFirstMenuItem.call(player, null, true);

            return;
          } // Prevent scroll


          event.preventDefault(); // Prevent playing video (Firefox)

          event.stopPropagation(); // Toggle menu

          var menu = player.elements.menu.settings;
          var button = player.elements.buttons.settings;

          controls.toggleMenu.call(player, event, menu, button);
        }, null, false // Can't be passive as we're preventing default
        ); // Escape closes menu

        this.bind(elements.menu.settings.menu, 'keydown', function (event) {
          if (event.which === 27) {
            var menu = player.elements.menu.settings;
            var button = player.elements.buttons.settings;

            controls.toggleMenu.call(player, event, menu, button);
          }
        }); // Angle Selector - click toggle

        this.bind(elements.buttons.angleSelector, 'click', function (event) {
          // Prevent the document click listener closing the menu
          event.stopPropagation();
          event.preventDefault();
          var menuItem = player.elements.menu.angleSelector;
          var button = player.elements.buttons.angleSelector;

          controls.toggleMenu.call(player, event, menuItem, button);
        }, null, false); // Can't be passive as we're preventing default
        // Angle selector menu - keyboard toggle
        // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143

        this.bind(elements.buttons.angleSelector, 'keyup', function (event) {
          var code = event.which; // We only care about space and return

          if (![13, 32].includes(code)) {
            return;
          } // Because return triggers a click anyway, all we need to do is set focus


          if (code === 13) {
            controls.focusFirstMenuItem.call(player, null, true);

            return;
          } // Prevent scroll


          event.preventDefault(); // Prevent playing video (Firefox)

          event.stopPropagation();
          var menuItem = _this4.player.elements.menu.angleSelector;
          var button = _this4.player.elements.buttons.angleSelector; // Toggle menu

          controls.toggleMenu.call(player, event, menuItem, button);
        }, null, false // Can't be passive as we're preventing default
        ); // Set range input alternative "value", which matches the tooltip time (#954)

        this.bind(elements.inputs.seek, 'mousedown mousemove', function (event) {
          var rect = elements.progress.getBoundingClientRect();
          var percent = 100 / rect.width * (event.pageX - rect.left);
          event.currentTarget.setAttribute('seek-value', percent);
        }); // Pause while seeking

        this.bind(elements.inputs.seek, 'mousedown mouseup keydown keyup touchstart touchend', function (event) {
          var seek = event.currentTarget;
          var code = event.keyCode ? event.keyCode : event.which;
          var attribute = 'play-on-seeked';

          if (is$1.keyboardEvent(event) && code !== 39 && code !== 37) {
            return;
          } // Record seek time so we can prevent hiding controls for a few seconds after seek


          player.lastSeekTime = Date.now(); // Was playing before?

          var play = seek.hasAttribute(attribute); // Done seeking

          var done = ['mouseup', 'touchend', 'keyup'].includes(event.type); // If we're done seeking and it was playing, resume playback

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
          var inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach(function (input) {
            return _this4.bind(input, inputEvent, function (event) {
              return repaint(event.target);
            });
          });
        } // Seek


        this.bind(elements.inputs.seek, inputEvent, function (event) {
          var seek = event.currentTarget; // If it exists, use seek-value instead of "value" for consistency with tooltip time (#954)

          var seekTo = seek.getAttribute('seek-value');

          if (is$1.empty(seekTo)) {
            seekTo = seek.value;
          }

          seek.removeAttribute('seek-value');
          player.currentTime = seekTo / seek.max * player.duration;
        }, 'seek'); // Seek tooltip

        this.bind(elements.progress, 'mouseenter mouseleave mousemove', function (event) {
          return controls.updateSeekTooltip.call(player, event);
        }); // Preview thumbnails plugin
        // TODO: Really need to work on some sort of plug-in wide event bus or pub-sub for this

        this.bind(elements.progress, 'mousemove touchmove', function (event) {
          var previewThumbnails = player.previewThumbnails;
          var enableScrubbing = player.config.previewThumbnails.enableScrubbing;

          if (previewThumbnails && previewThumbnails.loaded && (!previewThumbnails.mouseDown || enableScrubbing)) {
            previewThumbnails.startMove(event);
          }
        }); // Hide thumbnail preview - on mouse click, mouse leave, and video play/seek. All four are required, e.g., for buffering

        this.bind(elements.progress, 'mouseleave touchend click', function () {
          var previewThumbnails = player.previewThumbnails;
          var enableScrubbing = player.config.previewThumbnails.enableScrubbing;

          if (previewThumbnails && previewThumbnails.loaded && (!previewThumbnails.mouseDown || enableScrubbing)) {
            previewThumbnails.endMove(false, true);
          }
        }); // Show scrubbing preview

        this.bind(elements.progress, 'mousedown touchstart', function (event) {
          var previewThumbnails = player.previewThumbnails;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startScrubbing(event);
          }
        });
        this.bind(elements.progress, 'mouseup touchend', function (event) {
          var previewThumbnails = player.previewThumbnails;

          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endScrubbing(event);
          }
        }); // Polyfill for lower fill in <input type="range"> for webkit

        if (browser.isWebkit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach(function (element) {
            _this4.bind(element, 'input', function (event) {
              return controls.updateRangeFill.call(player, event.target);
            });
          });
        } // Current time invert
        // Only if one time element is used for both currentTime and duration


        if (player.config.toggleInvert && !is$1.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, 'click', function () {
            // Do nothing if we're at the start
            if (player.currentTime === 0) {
              return;
            }

            player.config.invertTime = !player.config.invertTime;

            controls.timeUpdate.call(player);
          });
        } // Volume


        this.bind(elements.inputs.volume, inputEvent, function (event) {
          player.volume = event.target.value;
        }, 'volume'); // Update controls.hover state (used for ui.toggleControls to avoid hiding when interacting)

        this.bind(elements.controls, 'mouseenter mouseleave', function (event) {
          elements.controls.hover = !player.touch && event.type === 'mouseenter';
        }); // Also update controls.hover state for any non-player children of fullscreen element (as above)

        if (elements.fullscreen) {
          Array.from(elements.fullscreen.children).filter(function (c) {
            return !c.contains(elements.container);
          }).forEach(function (child) {
            _this4.bind(child, 'mouseenter mouseleave', function (event) {
              elements.controls.hover = !player.touch && event.type === 'mouseenter';
            });
          });
        } // Update controls.pressed state (used for ui.toggleControls to avoid hiding when interacting)


        this.bind(elements.controls, 'mousedown mouseup touchstart touchend touchcancel', function (event) {
          elements.controls.pressed = ['mousedown', 'touchstart'].includes(event.type);
        }); // Show controls when they receive focus (e.g., when using keyboard tab key)

        this.bind(elements.controls, 'focusin', function () {
          var config = player.config,
              timers = player.timers; // Skip transition to prevent focus from scrolling the parent element

          toggleClass(elements.controls, config.classNames.noTransition, true); // Toggle

          ui.toggleControls.call(player, true); // Restore transition

          setTimeout(function () {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0); // Delay a little more for mouse users

          var delay = _this4.touch ? 3000 : 4000; // Clear timer

          clearTimeout(timers.controls); // Hide again after delay

          timers.controls = setTimeout(function () {
            return ui.toggleControls.call(player, false);
          }, delay);
        }); // Mouse wheel for volume

        this.bind(elements.inputs.volume, 'wheel', function (event) {
          // Detect "natural" scroll - suppored on OS X Safari only
          // Other browsers on OS X will be inverted until support improves
          var inverted = event.webkitDirectionInvertedFromDevice; // Get delta from event. Invert if `inverted` is true

          var _map = [event.deltaX, -event.deltaY].map(function (value) {
            return inverted ? -value : value;
          }),
              _map2 = _slicedToArray(_map, 2),
              x = _map2[0],
              y = _map2[1]; // Using the biggest delta, normalize to 1 or -1 (or 0 if no delta)


          var direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y); // Change the volume by 2%

          player.increaseVolume(direction / 50); // Don't break page scrolling at max and min

          var volume = player.media.volume;

          if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
            event.preventDefault();
          }
        }, 'volume', false);
      }
    }]);

    return Listeners;
  }();

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
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
      var devnull = function devnull() {},
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

        fn = function fn(bundleId, pathsNotFound) {
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

        fn = function fn(path, result, defaultPrevented) {
          // handle error
          if (result == 'e') pathsNotFound.push(path); // handle beforeload event. If defaultPrevented then that means the load
          // will be blocked (ex. Ghostery/ABP on Safari)

          if (result == 'b') {
            if (defaultPrevented) pathsNotFound.push(path);else return;
          }

          numWaiting--;
          if (!numWaiting) callbackFn(pathsNotFound);
        }; // load scripts


        for (i = 0; i < x; i++) {
          loadFile(paths[i], fn, args);
        }
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
    return new Promise(function (resolve, reject) {
      loadjs_umd(url, {
        success: resolve,
        error: reject
      });
    });
  }

  function parseId(url) {
    if (is$1.empty(url)) {
      return null;
    }

    if (is$1.number(Number(url))) {
      return url;
    }

    var regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
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

  var vimeo = {
    setup: function setup() {
      var player = this; // Add embed class for responsive

      toggleClass(player.elements.wrapper, player.config.classNames.embed, true); // Set speed options from config

      player.options.speed = player.config.speed.options; // Set intial ratio

      setAspectRatio.call(player); // Load the SDK if not already

      if (!is$1.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(function () {
          vimeo.ready.call(player);
        }).catch(function (error) {
          player.debug.warn('Vimeo SDK (player.js) failed to load', error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },
    // API Ready
    ready: function ready() {
      var _this = this;

      var player = this;
      var config = player.config.vimeo;

      var premium = config.premium,
          referrerPolicy = config.referrerPolicy,
          frameParams = _objectWithoutProperties(config, ["premium", "referrerPolicy"]); // If the owner has a pro or premium account then we can hide controls etc


      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      } // Get Vimeo params for the iframe


      var params = buildUrlParams(_objectSpread2({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: 'media',
        playsinline: !this.config.fullscreen.iosNative
      }, frameParams)); // Get the source URL or ID

      var source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is$1.empty(source)) {
        source = player.media.getAttribute(player.config.attributes.embed.id);
      }

      var id = parseId(source); // Build an iframe

      var iframe = createElement('iframe');
      var src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute('src', src);
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay,fullscreen,picture-in-picture'); // Set the referrer policy if required

      if (!is$1.empty(referrerPolicy)) {
        iframe.setAttribute('referrerPolicy', referrerPolicy);
      } // Inject the package


      var poster = player.poster;

      if (premium) {
        iframe.setAttribute('data-poster', poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        var wrapper = createElement('div', {
          class: player.config.classNames.embedContainer,
          'data-poster': poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      } // Get poster image


      fetch(format(player.config.urls.vimeo.api, id), 'json').then(function (response) {
        if (is$1.empty(response)) {
          return;
        } // Get the URL for thumbnail


        var url = new URL(response[0].thumbnail_large); // Get original image

        url.pathname = "".concat(url.pathname.split('_')[0], ".jpg"); // Set and show poster

        ui.setPoster.call(player, url.href).catch(function () {});
      }); // Setup instance
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


      player.media.play = function () {
        assurePlaybackState.call(player, true);
        return player.embed.play();
      };

      player.media.pause = function () {
        assurePlaybackState.call(player, false);
        return player.embed.pause();
      };

      player.media.stop = function () {
        player.pause();
        player.currentTime = 0;
      }; // Seeking


      var currentTime = player.media.currentTime;
      Object.defineProperty(player.media, 'currentTime', {
        get: function get() {
          return currentTime;
        },
        set: function set(time) {
          // Vimeo will automatically play on seek if the video hasn't been played before
          // Get current paused state and volume etc
          var embed = player.embed,
              media = player.media,
              paused = player.paused,
              volume = player.volume;
          var restorePause = paused && !embed.hasPlayed; // Set seeking state and trigger event

          media.seeking = true;
          triggerEvent.call(player, media, 'seeking'); // If paused, mute until seek is complete

          Promise.resolve(restorePause && embed.setVolume(0)) // Seek
          .then(function () {
            return embed.setCurrentTime(time);
          }) // Restore paused
          .then(function () {
            return restorePause && embed.pause();
          }) // Restore volume
          .then(function () {
            return restorePause && embed.setVolume(volume);
          }).catch(function () {// Do nothing
          });
        }
      }); // Playback speed

      var speed = player.config.speed.selected;
      Object.defineProperty(player.media, 'playbackRate', {
        get: function get() {
          return speed;
        },
        set: function set(input) {
          player.embed.setPlaybackRate(input).then(function () {
            speed = input;
            triggerEvent.call(player, player.media, 'ratechange');
          }).catch(function () {
            // Cannot set Playback Rate, Video is probably not on Pro account
            player.options.speed = [1];
          });
        }
      }); // Volume

      var volume = player.config.volume;
      Object.defineProperty(player.media, 'volume', {
        get: function get() {
          return volume;
        },
        set: function set(input) {
          player.embed.setVolume(input).then(function () {
            volume = input;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }
      }); // Muted

      var muted = player.config.muted;
      Object.defineProperty(player.media, 'muted', {
        get: function get() {
          return muted;
        },
        set: function set(input) {
          var toggle = is$1.boolean(input) ? input : false;
          player.embed.setVolume(toggle ? 0 : player.config.volume).then(function () {
            muted = toggle;
            triggerEvent.call(player, player.media, 'volumechange');
          });
        }
      }); // Loop

      var loop = player.config.loop;
      Object.defineProperty(player.media, 'loop', {
        get: function get() {
          return loop;
        },
        set: function set(input) {
          var toggle = is$1.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(function () {
            loop = toggle;
          });
        }
      }); // Source

      var currentSrc;
      player.embed.getVideoUrl().then(function (value) {
        currentSrc = value;
        controls.setDownloadUrl.call(player);
      }).catch(function (error) {
        _this.debug.warn(error);
      });
      Object.defineProperty(player.media, 'currentSrc', {
        get: function get() {
          return currentSrc;
        }
      }); // Ended

      Object.defineProperty(player.media, 'ended', {
        get: function get() {
          return player.currentTime === player.duration;
        }
      }); // Set aspect ratio based on video size

      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then(function (dimensions) {
        var _dimensions = _slicedToArray(dimensions, 2),
            width = _dimensions[0],
            height = _dimensions[1];

        player.embed.ratio = [width, height];
        setAspectRatio.call(_this);
      }); // Set autopause

      player.embed.setAutopause(player.config.autopause).then(function (state) {
        player.config.autopause = state;
      }); // Get title

      player.embed.getVideoTitle().then(function (title) {
        player.config.title = title;
        ui.setTitle.call(_this);
      }); // Get current time

      player.embed.getCurrentTime().then(function (value) {
        currentTime = value;
        triggerEvent.call(player, player.media, 'timeupdate');
      }); // Get duration

      player.embed.getDuration().then(function (value) {
        player.media.duration = value;
        triggerEvent.call(player, player.media, 'durationchange');
      }); // Get captions

      player.embed.getTextTracks().then(function (tracks) {
        player.media.textTracks = tracks;
        captions.setup.call(player);
      });
      player.embed.on('cuechange', function (_ref) {
        var _ref$cues = _ref.cues,
            cues = _ref$cues === void 0 ? [] : _ref$cues;
        var strippedCues = cues.map(function (cue) {
          return stripHTML(cue.text);
        });
        captions.updateCues.call(player, strippedCues);
      });
      player.embed.on('loaded', function () {
        // Assure state and events are updated on autoplay
        player.embed.getPaused().then(function (paused) {
          assurePlaybackState.call(player, !paused);

          if (!paused) {
            triggerEvent.call(player, player.media, 'playing');
          }
        });

        if (is$1.element(player.embed.element) && player.supported.ui) {
          var frame = player.embed.element; // Fix keyboard focus issues
          // https://github.com/sampotts/plyr/issues/317

          frame.setAttribute('tabindex', -1);
        }
      });
      player.embed.on('bufferstart', function () {
        triggerEvent.call(player, player.media, 'waiting');
      });
      player.embed.on('bufferend', function () {
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('play', function () {
        assurePlaybackState.call(player, true);
        triggerEvent.call(player, player.media, 'playing');
      });
      player.embed.on('pause', function () {
        assurePlaybackState.call(player, false);
      });
      player.embed.on('timeupdate', function (data) {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent.call(player, player.media, 'timeupdate');
      });
      player.embed.on('progress', function (data) {
        player.media.buffered = data.percent;
        triggerEvent.call(player, player.media, 'progress'); // Check all loaded

        if (parseInt(data.percent, 10) === 1) {
          triggerEvent.call(player, player.media, 'canplaythrough');
        } // Get duration as if we do it before load, it gives an incorrect value
        // https://github.com/sampotts/plyr/issues/891


        player.embed.getDuration().then(function (value) {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent.call(player, player.media, 'durationchange');
          }
        });
      });
      player.embed.on('seeked', function () {
        player.media.seeking = false;
        triggerEvent.call(player, player.media, 'seeked');
      });
      player.embed.on('ended', function () {
        player.media.paused = true;
        triggerEvent.call(player, player.media, 'ended');
      });
      player.embed.on('error', function (detail) {
        player.media.error = detail;
        triggerEvent.call(player, player.media, 'error');
      }); // Rebuild UI

      setTimeout(function () {
        return ui.build.call(player);
      }, 0);
    }
  };

  // ==========================================================================

  function parseId$1(url) {
    if (is$1.empty(url)) {
      return null;
    }

    var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
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

  function getHost(config) {
    if (config.noCookie) {
      return 'https://www.youtube-nocookie.com';
    }

    if (window.location.protocol === 'http:') {
      return 'http://www.youtube.com';
    } // Use YouTube's default


    return undefined;
  }

  var youtube = {
    setup: function setup() {
      var _this = this;

      // Add embed class for responsive
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true); // Setup API

      if (is$1.object(window.YT) && is$1.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        // Reference current global callback
        var callback = window.onYouTubeIframeAPIReady; // Set callback to process queue

        window.onYouTubeIframeAPIReady = function () {
          // Call global callback if set
          if (is$1.function(callback)) {
            callback();
          }

          youtube.ready.call(_this);
        }; // Load the SDK


        loadScript(this.config.urls.youtube.sdk).catch(function (error) {
          _this.debug.warn('YouTube API failed to load', error);
        });
      }
    },
    // Get the media title
    getTitle: function getTitle(videoId) {
      var _this2 = this;

      var url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then(function (data) {
        if (is$1.object(data)) {
          var title = data.title,
              height = data.height,
              width = data.width; // Set title

          _this2.config.title = title;
          ui.setTitle.call(_this2); // Set aspect ratio

          _this2.embed.ratio = [width, height];
        }

        setAspectRatio.call(_this2);
      }).catch(function () {
        // Set aspect ratio
        setAspectRatio.call(_this2);
      });
    },
    // API ready
    ready: function ready() {
      var player = this; // Ignore already setup (race condition)

      var currentId = player.media && player.media.getAttribute('id');

      if (!is$1.empty(currentId) && currentId.startsWith('youtube-')) {
        return;
      } // Get the source URL or ID


      var source = player.media.getAttribute('src'); // Get from <div> if needed

      if (is$1.empty(source)) {
        source = player.media.getAttribute(this.config.attributes.embed.id);
      } // Replace the <iframe> with a <div> due to YouTube API issues


      var videoId = parseId$1(source);
      var id = generateId(player.provider); // Get poster, if already set

      var poster = player.poster; // Replace media element

      var container = createElement('div', {
        id: id,
        'data-poster': poster
      });
      player.media = replaceElement(container, player.media); // Id to poster wrapper

      var posterSrc = function posterSrc(s) {
        return "https://i.ytimg.com/vi/".concat(videoId, "/").concat(s, "default.jpg");
      }; // Check thumbnail images in order of quality, but reject fallback thumbnails (120px wide)


      loadImage(posterSrc('maxres'), 121) // Higest quality and unpadded
      .catch(function () {
        return loadImage(posterSrc('sd'), 121);
      }) // 480p padded 4:3
      .catch(function () {
        return loadImage(posterSrc('hq'));
      }) // 360p padded 4:3. Always exists
      .then(function (image) {
        return ui.setPoster.call(player, image.src);
      }).then(function (src) {
        // If the image is padded, use background-size "cover" instead (like youtube does too with their posters)
        if (!src.includes('maxres')) {
          player.elements.poster.style.backgroundSize = 'cover';
        }
      }).catch(function () {});
      var config = player.config.youtube; // Setup instance
      // https://developers.google.com/youtube/iframe_api_reference

      player.embed = new window.YT.Player(id, {
        videoId: videoId,
        host: getHost(config),
        playerVars: extend({}, {
          autoplay: player.config.autoplay ? 1 : 0,
          // Autoplay
          hl: player.config.hl,
          // iframe interface language
          controls: player.supported.ui ? 0 : 1,
          // Only show controls if not fully supported
          disablekb: 1,
          // Disable keyboard as we handle it
          playsinline: !player.config.fullscreen.iosNative ? 1 : 0,
          // Allow iOS inline playback
          // Captions are flaky on YouTube
          cc_load_policy: player.captions.active ? 1 : 0,
          cc_lang_pref: player.config.captions.language,
          // Tracking for stats
          widget_referrer: window ? window.location.href : null
        }, config),
        events: {
          onError: function onError(event) {
            // YouTube may fire onError twice, so only handle it once
            if (!player.media.error) {
              var code = event.data; // Messages copied from https://developers.google.com/youtube/iframe_api_reference#onError

              var message = {
                2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
                5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
                100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
                101: 'The owner of the requested video does not allow it to be played in embedded players.',
                150: 'The owner of the requested video does not allow it to be played in embedded players.'
              }[code] || 'An unknown error occured';
              player.media.error = {
                code: code,
                message: message
              };
              triggerEvent.call(player, player.media, 'error');
            }
          },
          onPlaybackRateChange: function onPlaybackRateChange(event) {
            // Get the instance
            var instance = event.target; // Get current speed

            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent.call(player, player.media, 'ratechange');
          },
          onReady: function onReady(event) {
            // Bail if onReady has already been called. See issue #1108
            if (is$1.function(player.media.play)) {
              return;
            } // Get the instance


            var instance = event.target; // Get the title

            youtube.getTitle.call(player, videoId); // Create a faux HTML5 API using the YouTube API

            player.media.play = function () {
              assurePlaybackState$1.call(player, true);
              instance.playVideo();
            };

            player.media.pause = function () {
              assurePlaybackState$1.call(player, false);
              instance.pauseVideo();
            };

            player.media.stop = function () {
              instance.stopVideo();
            };

            player.media.duration = instance.getDuration();
            player.media.paused = true; // Seeking

            player.media.currentTime = 0;
            Object.defineProperty(player.media, 'currentTime', {
              get: function get() {
                return Number(instance.getCurrentTime());
              },
              set: function set(time) {
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
              get: function get() {
                return instance.getPlaybackRate();
              },
              set: function set(input) {
                instance.setPlaybackRate(input);
              }
            }); // Volume

            var volume = player.config.volume;
            Object.defineProperty(player.media, 'volume', {
              get: function get() {
                return volume;
              },
              set: function set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent.call(player, player.media, 'volumechange');
              }
            }); // Muted

            var muted = player.config.muted;
            Object.defineProperty(player.media, 'muted', {
              get: function get() {
                return muted;
              },
              set: function set(input) {
                var toggle = is$1.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? 'mute' : 'unMute']();
                triggerEvent.call(player, player.media, 'volumechange');
              }
            }); // Source

            Object.defineProperty(player.media, 'currentSrc', {
              get: function get() {
                return instance.getVideoUrl();
              }
            }); // Ended

            Object.defineProperty(player.media, 'ended', {
              get: function get() {
                return player.currentTime === player.duration;
              }
            }); // Get available speeds

            var speeds = instance.getAvailablePlaybackRates(); // Filter based on config

            player.options.speed = speeds.filter(function (s) {
              return player.config.speed.options.includes(s);
            }); // Set the tabindex to avoid focus entering iframe

            if (player.supported.ui) {
              player.media.setAttribute('tabindex', -1);
            }

            triggerEvent.call(player, player.media, 'timeupdate');
            triggerEvent.call(player, player.media, 'durationchange'); // Reset timer

            clearInterval(player.timers.buffering); // Setup buffering

            player.timers.buffering = setInterval(function () {
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

            setTimeout(function () {
              return ui.build.call(player);
            }, 50);
          },
          onStateChange: function onStateChange(event) {
            // Get the instance
            var instance = event.target; // Reset timer

            clearInterval(player.timers.playing);
            var seeked = player.media.seeking && [1, 2].includes(event.data);

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
                assurePlaybackState$1.call(player, false); // YouTube doesn't support loop for a single video, so mimick it.

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
                if (!player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState$1.call(player, true);
                  triggerEvent.call(player, player.media, 'playing'); // Poll to get playback progress

                  player.timers.playing = setInterval(function () {
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

                assurePlaybackState$1.call(player, false);
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
  var media = {
    // Setup media
    setup: function setup() {
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
  function clamp() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 255;
    return Math.min(Math.max(input, min), max);
  }

  var MediaFragment = /*#__PURE__*/function () {
    function MediaFragment(player) {
      var _this = this;

      _classCallCheck(this, MediaFragment);

      var config = player.config;
      this.player = player;
      this.source = player.currentSrc;
      this.config = config.mediaFragment;
      this.active = false;
      this.startTime = 0;
      this.duration = player.media.duration; // Wait until player has duration before setting media fragment

      this.player.on('loadedmetadata', function () {
        if (_this.player.duration && !_this.active) _this.load();
      });
    }

    _createClass(MediaFragment, [{
      key: "load",
      value: function load() {
        var mediaFragment = parseUrlHash(this.player.source).match('t=[0-9]+(.([0-9]+))?,[0-9]+(.([0-9]+))?');
        if (!mediaFragment) return;
        var config = this.player.config;

        if (config.duration) {
          this.player.debug.warn('Cannot have custom duration in conjunction with media fragments');
          return;
        }

        var resourceTimes = mediaFragment[0].replace('t=', '').split(',');
        var startTime = parseFloat(resourceTimes[0]);
        var endTime = parseFloat(resourceTimes[1]) - parseFloat(resourceTimes[0]);
        this.active = true;
        this.startTime = clamp(startTime, 0, this.player.media.duration);
        this.duration = clamp(endTime, 0, this.player.media.duration);
      }
    }, {
      key: "getMediaTime",
      value: function getMediaTime(input) {
        if (!this.enabled || !this.active) return input;
        return input + this.startTime;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (!this.enabled) return;
        var config = this.player.config;
        this.active = false; // Reset start and duration back to default values

        config.startTime = 0;
        if (this.media) config.duration = this.media.duration;
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.config.enabled;
      }
    }]);

    return MediaFragment;
  }();

  var destroy = function destroy(instance) {
    // Destroy our adsManager
    if (instance.manager) {
      instance.manager.destroy();
    } // Destroy our adsManager


    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }

    instance.elements.container.remove();
  };

  var Ads = /*#__PURE__*/function () {
    /**
     * Ads constructor.
     * @param {Object} player
     * @return {Ads}
     */
    function Ads(player) {
      var _this = this;

      _classCallCheck(this, Ads);

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

      this.managerPromise = new Promise(function (resolve, reject) {
        // The ad is loaded and ready
        _this.on('loaded', resolve); // Ads failed


        _this.on('error', reject);
      });
      this.load();
    }

    _createClass(Ads, [{
      key: "load",

      /**
       * Load the IMA SDK
       */
      value: function load() {
        var _this2 = this;

        if (!this.enabled) {
          return;
        } // Check if the Google IMA3 SDK is loaded or load it ourselves


        if (!is$1.object(window.google) || !is$1.object(window.google.ima)) {
          loadScript(this.player.config.urls.googleIMA.sdk).then(function () {
            _this2.ready();
          }).catch(function () {
            // Script failed to load or is blocked
            _this2.trigger('error', new Error('Google IMA SDK failed to load'));
          });
        } else {
          this.ready();
        }
      }
      /**
       * Get the ads instance ready
       */

    }, {
      key: "ready",
      value: function ready() {
        var _this3 = this;

        // Double check we're enabled
        if (!this.enabled) {
          destroy(this);
        } // Start ticking our safety timer. If the whole advertisement
        // thing doesn't resolve within our set time; we bail


        this.startSafetyTimer(12000, 'ready()'); // Clear the safety timer

        this.managerPromise.then(function () {
          _this3.clearSafetyTimer('onAdsManagerLoaded()');
        }); // Set listeners on the Plyr instance

        this.listeners(); // Setup the IMA SDK

        this.setupIMA();
      } // Build the tag URL

    }, {
      key: "setupIMA",

      /**
       * In order for the SDK to display ads for our video, we need to tell it where to put them,
       * so here we define our ad container. This div is set up to render on top of the video player.
       * Using the code below, we tell the SDK to render ads within that div. We also provide a
       * handle to the content video player - the SDK will poll the current time of our player to
       * properly place mid-rolls. After we create the ad display container, we initialize it. On
       * mobile devices, this initialization is done as the result of a user action.
       */
      value: function setupIMA() {
        var _this4 = this;

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

        this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (event) {
          return _this4.onAdsManagerLoaded(event);
        }, false);
        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (error) {
          return _this4.onAdError(error);
        }, false); // Request video ads to be pre-loaded

        this.requestAds();
      }
      /**
       * Request advertisements
       */

    }, {
      key: "requestAds",
      value: function requestAds() {
        var container = this.player.elements.container;

        try {
          // Request video ads
          var request = new google.ima.AdsRequest();
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
      }
      /**
       * Update the ad countdown
       * @param {Boolean} start
       */

    }, {
      key: "pollCountdown",
      value: function pollCountdown() {
        var _this5 = this;

        var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute('data-badge-text');
          return;
        }

        var update = function update() {
          var time = formatTime(Math.max(_this5.manager.getRemainingTime(), 0));
          var label = "".concat(i18n.get('advertisement', _this5.player.config), " - ").concat(time);

          _this5.elements.container.setAttribute('data-badge-text', label);
        };

        this.countdownTimer = setInterval(update, 100);
      }
      /**
       * This method is called whenever the ads are ready inside the AdDisplayContainer
       * @param {Event} adsManagerLoadedEvent
       */

    }, {
      key: "onAdsManagerLoaded",
      value: function onAdsManagerLoaded(event) {
        var _this6 = this;

        // Load could occur after a source change (race condition)
        if (!this.enabled) {
          return;
        } // Get the ads manager


        var settings = new google.ima.AdsRenderingSettings(); // Tell the SDK to save and restore content video state on our behalf

        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true; // The SDK is polling currentTime on the contentPlayback. And needs a duration
        // so it can determine when to start the mid- and post-roll

        this.manager = event.getAdsManager(this.player, settings); // Get the cue points for any mid-rolls by filtering out the pre- and post-roll

        this.cuePoints = this.manager.getCuePoints(); // Add listeners to the required events
        // Advertisement error events

        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (error) {
          return _this6.onAdError(error);
        }); // Advertisement regular events

        Object.keys(google.ima.AdEvent.Type).forEach(function (type) {
          _this6.manager.addEventListener(google.ima.AdEvent.Type[type], function (e) {
            return _this6.onAdEvent(e);
          });
        }); // Resolve our adsManager

        this.trigger('loaded');
      }
    }, {
      key: "addCuePoints",
      value: function addCuePoints() {
        var _this7 = this;

        // Add advertisement cue's within the time line if available
        if (!is$1.empty(this.cuePoints)) {
          this.cuePoints.forEach(function (cuePoint) {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < _this7.player.duration) {
              var seekElement = _this7.player.elements.progress;

              if (is$1.element(seekElement)) {
                var cuePercentage = 100 / _this7.player.duration * cuePoint;
                var cue = createElement('span', {
                  class: _this7.player.config.classNames.cues
                });
                cue.style.left = "".concat(cuePercentage.toString(), "%");
                seekElement.appendChild(cue);
              }
            }
          });
        }
      }
      /**
       * This is where all the event handling takes place. Retrieve the ad from the event. Some
       * events (e.g. ALL_ADS_COMPLETED) don't have the ad object associated
       * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
       * @param {Event} event
       */

    }, {
      key: "onAdEvent",
      value: function onAdEvent(event) {
        var _this8 = this;

        var container = this.player.elements.container; // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
        // don't have ad object associated

        var ad = event.getAd();
        var adData = event.getAdData(); // Proxy event

        var dispatchEvent = function dispatchEvent(type) {
          triggerEvent.call(_this8.player, _this8.player.media, "ads".concat(type.replace(/_/g, '').toLowerCase()));
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
              this.player.debug.warn("Non-fatal ad error: ".concat(adData.adError.getMessage()));
            }

            break;
        }
      }
      /**
       * Any ad error handling comes through here
       * @param {Event} event
       */

    }, {
      key: "onAdError",
      value: function onAdError(event) {
        this.cancel();
        this.player.debug.warn('Ads error', event);
      }
      /**
       * Setup hooks for Plyr and window events. This ensures
       * the mid- and post-roll launch at the correct time. And
       * resize the advertisement when the player resizes
       */

    }, {
      key: "listeners",
      value: function listeners() {
        var _this9 = this;

        var container = this.player.elements.container;
        var time;
        this.player.on('canplay', function () {
          _this9.addCuePoints();
        });
        this.player.on('ended', function () {
          _this9.loader.contentComplete();
        });
        this.player.on('timeupdate', function () {
          time = _this9.player.currentTime;
        });
        this.player.on('seeked', function () {
          var seekedTime = _this9.player.currentTime;

          if (is$1.empty(_this9.cuePoints)) {
            return;
          }

          _this9.cuePoints.forEach(function (cuePoint, index) {
            if (time < cuePoint && cuePoint < seekedTime) {
              _this9.manager.discardAdBreak();

              _this9.cuePoints.splice(index, 1);
            }
          });
        }); // Listen to the resizing of the window. And resize ad accordingly
        // TODO: eventually implement ResizeObserver

        window.addEventListener('resize', function () {
          if (_this9.manager) {
            _this9.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      }
      /**
       * Initialize the adsManager and start playing advertisements
       */

    }, {
      key: "play",
      value: function play() {
        var _this10 = this;

        var container = this.player.elements.container;

        if (!this.managerPromise) {
          this.resumeContent();
        } // Play the requested advertisement whenever the adsManager is ready


        this.managerPromise.then(function () {
          // Set volume to match player
          _this10.manager.setVolume(_this10.player.volume); // Initialize the container. Must be done via a user action on mobile devices


          _this10.elements.displayContainer.initialize();

          try {
            if (!_this10.initialized) {
              // Initialize the ads manager. Ad rules playlist will start at this time
              _this10.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL); // Call play to start showing the ad. Single video and overlay ads will
              // start at this time; the call will be ignored for ad rules


              _this10.manager.start();
            }

            _this10.initialized = true;
          } catch (adError) {
            // An error may be thrown if there was a problem with the
            // VAST response
            _this10.onAdError(adError);
          }
        }).catch(function () {});
      }
      /**
       * Resume our video
       */

    }, {
      key: "resumeContent",
      value: function resumeContent() {
        // Hide the advertisement container
        this.elements.container.style.zIndex = ''; // Ad is stopped

        this.playing = false; // Play video

        silencePromise(this.player.media.play());
      }
      /**
       * Pause our video
       */

    }, {
      key: "pauseContent",
      value: function pauseContent() {
        // Show the advertisement container
        this.elements.container.style.zIndex = 3; // Ad is playing

        this.playing = true; // Pause our video.

        this.player.media.pause();
      }
      /**
       * Destroy the adsManager so we can grab new ads after this. If we don't then we're not
       * allowed to call new ads based on google policies, as they interpret this as an accidental
       * video requests. https://developers.google.com/interactive-
       * media-ads/docs/sdks/android/faq#8
       */

    }, {
      key: "cancel",
      value: function cancel() {
        // Pause our video
        if (this.initialized) {
          this.resumeContent();
        } // Tell our instance that we're done for now


        this.trigger('error'); // Re-create our adsManager

        this.loadAds();
      }
      /**
       * Re-create our adsManager
       */

    }, {
      key: "loadAds",
      value: function loadAds() {
        var _this11 = this;

        // Tell our adsManager to go bye bye
        this.managerPromise.then(function () {
          // Destroy our adsManager
          if (_this11.manager) {
            _this11.manager.destroy();
          } // Re-set our adsManager promises


          _this11.managerPromise = new Promise(function (resolve) {
            _this11.on('loaded', resolve);

            _this11.player.debug.log(_this11.manager);
          }); // Now that the manager has been destroyed set it to also be un-initialized

          _this11.initialized = false; // Now request some new advertisements

          _this11.requestAds();
        }).catch(function () {});
      }
      /**
       * Handles callbacks after an ad event was invoked
       * @param {String} event - Event type
       */

    }, {
      key: "trigger",
      value: function trigger(event) {
        var _this12 = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var handlers = this.events[event];

        if (is$1.array(handlers)) {
          handlers.forEach(function (handler) {
            if (is$1.function(handler)) {
              handler.apply(_this12, args);
            }
          });
        }
      }
      /**
       * Add event listeners
       * @param {String} event - Event type
       * @param {Function} callback - Callback for when event occurs
       * @return {Ads}
       */

    }, {
      key: "on",
      value: function on(event, callback) {
        if (!is$1.array(this.events[event])) {
          this.events[event] = [];
        }

        this.events[event].push(callback);
        return this;
      }
      /**
       * Setup a safety timer for when the ad network doesn't respond for whatever reason.
       * The advertisement has 12 seconds to get its things together. We stop this timer when the
       * advertisement is playing, or when a user action is required to start, then we clear the
       * timer on ad ready
       * @param {Number} time
       * @param {String} from
       */

    }, {
      key: "startSafetyTimer",
      value: function startSafetyTimer(time, from) {
        var _this13 = this;

        this.player.debug.log("Safety timer invoked from: ".concat(from));
        this.safetyTimer = setTimeout(function () {
          _this13.cancel();

          _this13.clearSafetyTimer('startSafetyTimer()');
        }, time);
      }
      /**
       * Clear our safety timer(s)
       * @param {String} from
       */

    }, {
      key: "clearSafetyTimer",
      value: function clearSafetyTimer(from) {
        if (!is$1.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log("Safety timer cleared from: ".concat(from));
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        var config = this.config;
        return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is$1.empty(config.publisherId) || is$1.url(config.tagUrl));
      }
    }, {
      key: "tagUrl",
      get: function get() {
        var config = this.config;

        if (is$1.url(config.tagUrl)) {
          return config.tagUrl;
        }

        var params = {
          AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
          AV_CHANNELID: '5a0458dc28a06145e4519d21',
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: config.publisherId
        };
        var base = 'https://go.aniview.com/api/adserver6/vast/';
        return "".concat(base, "?").concat(buildUrlParams(params));
      }
    }]);

    return Ads;
  }();

  var Editor = /*#__PURE__*/function () {
    function Editor(player) {
      _classCallCheck(this, Editor);

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
      this.imageBuffer = 0.05;
      this.elements = {
        container: {}
      };
      this.load();
    } // Determine if Editor is enabled


    _createClass(Editor, [{
      key: "load",
      value: function load() {
        var _this = this;

        on.call(this.player, document, function () {
          _this.onChange();
        }); // Player listeners

        this.listeners(); // Update the UI

        this.update();
      }
    }, {
      key: "showEditor",
      value: function showEditor() {
        if (!is$1.element(this.elements.container) && is$1.element(this.player.elements.container)) {
          this.createEditor();
        }

        toggleHidden(this.elements.container, false);
      }
    }, {
      key: "hideEditor",
      value: function hideEditor() {
        toggleHidden(this.elements.container, true);
      }
    }, {
      key: "createEditor",
      value: function () {
        var _createEditor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var container;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  container = this.player.elements.container;
                  this.createContainer(container);
                  this.createControls();
                  this.createTimeline();
                  this.createTimeStamps();
                  this.createVideoTimeline();
                  this.createSeekHandle();
                  this.player.listeners.editor();

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function createEditor() {
          return _createEditor.apply(this, arguments);
        }

        return createEditor;
      }()
    }, {
      key: "createContainer",
      value: function createContainer(container) {
        var config = this.config; // If no container has been specified append to the video container

        if (is$1.nullOrUndefined(config.target)) {
          this.createNewContainer(container);
        } else {
          this.appendTargetContainer();
        } // We need an element to setup


        if (is$1.nullOrUndefined(container) || !is$1.element(container)) {
          this.debug.error('Editor Creation failed: no suitable element passed');
          return;
        } // Add style hook


        ui.addStyleHook.call(this.player, this.elements.container);
      } // Create and append to video Container

    }, {
      key: "createNewContainer",
      value: function createNewContainer(container) {
        this.elements.container = createElement('div', {
          class: this.player.config.classNames.editor.container
        });
        insertAfter(this.elements.container, container);
      } // Append editor to specified Container

    }, {
      key: "appendTargetContainer",
      value: function appendTargetContainer() {
        var config = this.config,
            elements = this.elements,
            player = this.player;
        elements.container = config.target; // String selector passed

        if (is$1.string(elements.container)) {
          elements.container = document.querySelectorAll(elements.container);
        } // jQuery, NodeList or Array passed, use first element


        if (window.jQuery && elements.container instanceof jQuery || is$1.nodeList(elements.container) || is$1.array(elements.container)) {
          // eslint-disable-next-line
          this.elements.container = elements.container[0];
        } // Clone the original element so if the element gets destroyed we can return it to its original state


        var clone = this.elements.container.cloneNode(true);
        this.elements.original = clone; // set editor container class

        this.elements.container.classList.add(player.config.classNames.editor.container);
      }
    }, {
      key: "createControls",
      value: function createControls() {
        var container = this.elements.container;
        var maxZoom = this.config.maxZoom; // Create controls container

        container.controls = createElement('div', {
          id: "plyr__editor__controls",
          class: this.player.config.classNames.editor.controls
        });
        container.appendChild(container.controls); // Create time container

        container.controls.timeContainer = createElement('div', {
          class: "plyr__controls__item ".concat(this.player.config.classNames.editor.timeContainer)
        });
        container.controls.appendChild(container.controls.timeContainer); // Create time container - Seperate time container needed from video as each item needs a unqiue key

        container.controls.timeContainer.time = controls.createTime.call(this.player, 'editorCurrentTime', {
          class: "plyr__controls__item ".concat(this.player.config.classNames.editor.time)
        });
        container.controls.timeContainer.appendChild(container.controls.timeContainer.time); // Create zoom slider container

        container.controls.zoomContainer = createElement('div', {
          class: "plyr__controls__item ".concat(this.player.config.classNames.editor.zoomContainer)
        });
        container.controls.appendChild(container.controls.zoomContainer); // Create minus icon

        container.controls.zoomContainer.zoomOut = controls.createButton.call(this.player, 'zoom-out', 'plyr__controls__item');
        container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoomOut); // Create zoom slider

        container.controls.zoomContainer.zoom = controls.createRange.call(this.player, 'zoom', {
          id: "plyr__editor__zoom",
          step: 0.1,
          min: 1,
          max: maxZoom,
          value: 1,
          'aria-valuemin': 1,
          'aria-valuemax': maxZoom,
          'aria-valuenow': 1
        });
        container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoom); // Create plus icon

        container.controls.zoomContainer.zoomIn = controls.createButton.call(this.player, 'zoom-in', 'plyr__controls__item');
        container.controls.zoomContainer.appendChild(container.controls.zoomContainer.zoomIn);
      }
    }, {
      key: "createTimeline",
      value: function createTimeline() {
        var container = this.elements.container;
        this.elements.container.timeline = createElement('div', {
          class: this.player.config.classNames.editor.timeline
        });
        container.appendChild(this.elements.container.timeline);
        this.elements.container.timeline.style.width = '100%';
        this.elements.container.timeline.style.left = '0%';
      }
    }, {
      key: "createTimeStamps",
      value: function createTimeStamps() {
        var step = this.player.duration / this.numOfTimestamps;
        var timeline = this.elements.container.timeline;
        var timeStamps = [];
        timeline.timestampsContainer = createElement('div', {
          class: this.player.config.classNames.editor.timeStampsContainer
        });
        timeline.appendChild(timeline.timestampsContainer);

        for (var i = 0; i < this.numOfTimestamps; i += 1) {
          var timeStamp = createElement('span', {
            class: this.player.config.classNames.editor.timeStamp
          }, controls.formatTime.call(this.player, Math.round(step * i))); // Append the element to the timeline

          timeline.timestampsContainer.appendChild(timeStamp); // Add the element to the list of elements

          timeStamps.push(timeStamp);
        } // Add list of timestamps to elements object


        timeline.timestampsContainer.timeStamps = timeStamps;
      }
    }, {
      key: "updateTimestamps",
      value: function updateTimestamps() {
        var _this2 = this;

        var timeline = this.elements.container.timeline;
        var duration = this.player.duration;

        if (this.player.duration === 0 || this.duration === duration || !is$1.element(timeline.timestampsContainer)) {
          return;
        } // Store the current player duration, to avoid setting the editor timestamps if the video length has not changed


        this.duration = duration;
        var step = duration / this.numOfTimestamps;
        timeline.timestampsContainer.timeStamps.forEach(function (timestamp, i) {
          // eslint-disable-next-line no-param-reassign
          timestamp.innerText = controls.formatTime.call(_this2.player, Math.round(step * i));
        });
      }
    }, {
      key: "createVideoTimeline",
      value: function createVideoTimeline() {
        var timeline = this.elements.container.timeline; // Create video timeline wrapper

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
    }, {
      key: "setVideoTimelimeContent",
      value: function setVideoTimelimeContent() {
        var previewThumbnails = this.player.previewThumbnails;
        var timeline = this.elements.container.timeline; // Total number of images needed to fill the timeline width

        var clientRect = timeline.getBoundingClientRect();
        var videoContainer = timeline.videoContainerParent.videoContainer;
        var imageCount = Math.ceil(clientRect.width / this.videoContainerWidth);
        var time = 0;

        if (is$1.nullOrUndefined(videoContainer.previewThumbs)) {
          videoContainer.previewThumbs = [];
        } // Enable editor mode in preview thumbnails


        if (this.previewThumbnailsReady) {
          previewThumbnails.editor = true;
        } // Append images to video timeline


        for (var i = 0; i < imageCount; i += 1) {
          var previewThumb = void 0;

          if (is$1.nullOrUndefined(videoContainer.previewThumbs[i])) {
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
          // Use an image margin to handle seeking and loading of images


          if (this.previewThumbnailsReady && time >= this.visibleWindow.start - this.visibleWindow.start * this.imageBuffer && time <= this.visibleWindow.end + this.visibleWindow.end * this.imageBuffer) {
            // Append the image to the container
            previewThumbnails.showImageAtCurrentTime(time, previewThumb);
          }

          time += this.player.duration / (clientRect.width / this.videoContainerWidth);
        }

        if (this.previewThumbnailsReady) {
          // Disable editor mode in preview thumbnails
          previewThumbnails.editor = false;
        } // Once all images are loaded set the width of the parent video container to display them


        videoContainer.style.width = "".concat(imageCount * this.videoContainerWidth, "px");
      }
    }, {
      key: "createSeekHandle",
      value: function createSeekHandle() {
        var timeline = this.elements.container.timeline;
        var duration = controls.formatTime.call(this.player, this.player.duration); // Create seek Container

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
    }, {
      key: "setZoomByEvent",
      value: function setZoomByEvent(event) {
        var maxZoom = this.config.maxZoom;

        if (!(event.type === 'wheel' || event.type === 'input' || event.type === 'click' || event.type === 'keydown')) {
          return;
        } // Calculate zoom Delta for mousewheel


        if (event.type === 'wheel') {
          var delta = clamp(event.deltaY * -1, -1, 1);
          this.zoom.scale += delta * 0.1 * this.zoom.scale; // Restrict bounds of zoom for wheel

          if (this.zoom.scale === maxZoom && delta < 0 || this.zoom.scale === 1 && delta > 0) {
            return;
          } // Calculate zoom level based on zoom slider

        } else if (event.type === 'input') {
          var value = event.target.value;
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
    }, {
      key: "setZoom",
      value: function setZoom() {
        var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.zoom.scale;
        var centerTimeline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!this.active) return;
        var maxZoom = this.config.maxZoom;
        var container = this.elements.container;
        var timeline = this.elements.container.timeline;
        var containerRect = container.getBoundingClientRect();
        var clientRect = timeline.getBoundingClientRect();
        var xPos = timeline.seekHandle.getBoundingClientRect().left;
        var percentage = 100 / clientRect.width * (xPos - clientRect.left); // Limit zoom to be between 1 and max times zoom

        this.zoom.scale = clamp(scale, 1, maxZoom); // Apply zoom scale

        timeline.style.width = "".concat(this.zoom.scale * 100, "%"); // Position the element based on the mouse position

        if (centerTimeline) {
          var updatedClientRect = timeline.getBoundingClientRect();
          var updatedXPos = timeline.seekHandle.getBoundingClientRect().left;
          var timelinePos = 100 / updatedClientRect.width * (updatedXPos - updatedClientRect.left) * this.zoom.scale;
          var centerOffset = containerRect.width / updatedClientRect.width * 100 * this.zoom.scale / 2;
          timeline.style.left = "".concat(clamp(-(timelinePos - centerOffset), (this.zoom.scale * 100 - 100) * -1, 0), "%");
        } else {
          timeline.style.left = "".concat(-(this.zoom.scale * 100 - 100) * percentage / 100, "%");
        } // Update slider


        if (is$1.element(this.elements.container.controls.zoomContainer)) {
          controls.setRange.call(this.player, this.elements.container.controls.zoomContainer.zoom, this.zoom.scale);
        } // Update timeline images


        this.setVideoTimelimeContent();
      }
    }, {
      key: "setZoomWindow",
      value: function setZoomWindow(lowerBound, upperBound) {
        if (!this.active || !lowerBound || !upperBound) return;
        var maxZoom = this.config.maxZoom;
        var timeline = this.elements.container.timeline;
        var scale = this.player.duration / (upperBound - lowerBound); // Limit zoom to be between 1 and max times zoom

        this.zoom.scale = clamp(scale, 1, maxZoom); // Apply zoom scale

        timeline.style.width = "".concat(this.zoom.scale * 100, "%"); // Position the element based on the lower and upper bound values

        var percentage = lowerBound / this.player.duration * (this.zoom.scale * 100);
        timeline.style.left = "".concat(clamp(-percentage, (this.zoom.scale * 100 - 100) * -1, 0), "%"); // Update slider

        if (is$1.element(this.elements.container.controls.zoomContainer)) {
          controls.setRange.call(this.player, this.elements.container.controls.zoomContainer.zoom, this.zoom.scale);
        } // Update timeline images


        this.setVideoTimelimeContent();
      }
    }, {
      key: "setSeeking",
      value: function setSeeking(event) {
        var classList = event.target.classList;
        var _this$player$config$c = this.player.config.classNames.trim,
            leftThumb = _this$player$config$c.leftThumb,
            rightThumb = _this$player$config$c.rightThumb; // Disable seeking event if selecting the trimming tool or a marker on the timeline

        if ((event.type === 'mousedown' || event.type === 'touchstart') && classList.contains(leftThumb) || classList.contains(rightThumb)) {
          return;
        } // Only act on left mouse button (0), or touch device (event.button does not exist or is false)


        if (!(is$1.nullOrUndefined(event.button) || event.button === false || event.button === 0)) {
          return;
        }

        if (event.type === 'mousedown' || event.type === 'touchstart') {
          this.seeking = true;
        } else if (event.type === 'mouseup' || event.type === 'touchend') {
          this.seeking = false;
        }

        this.triggerSeekEvent(event);
      }
    }, {
      key: "triggerSeekEvent",
      value: function triggerSeekEvent(event) {
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
    }, {
      key: "setSeekPosition",
      value: function setSeekPosition() {
        if (!this.active || this.seeking) {
          return;
        }

        var timeline = this.elements.container.timeline;
        var percentage = clamp(100 / this.player.duration * parseFloat(this.player.currentTime), 0, 100);
        timeline.seekHandle.style.left = "".concat(percentage, "%");
        this.setTimelineOffset();
        var currentTime = controls.formatTime.call(this.player, this.player.currentTime);
        var duration = controls.formatTime.call(this.player, this.player.duration);
        var format = i18n.get('seekLabel', this.player.config); // Update aria values

        timeline.seekHandle.setAttribute('aria-valuenow', currentTime);
        timeline.seekHandle.setAttribute('aria-valuetext', format.replace('{currentTime}', currentTime).replace('{duration}', duration));
      }
    }, {
      key: "setSeekTime",
      value: function setSeekTime(event) {
        if (!this.active || !this.seeking) {
          return;
        }

        var type = event.type,
            touches = event.touches,
            pageX = event.pageX;

        if (['mousedown', 'touchstart', 'mousemove', 'touchmove'].includes(type)) {
          var timeline = this.elements.container.timeline;
          var previewThumbnails = this.player.previewThumbnails;
          var clientRect = timeline.getBoundingClientRect();
          var xPos = type === 'touchmove' ? touches[0].pageX : pageX;
          var percentage = clamp(100 / clientRect.width * (xPos - clientRect.left), 0, 100); // Set the editor seek position

          timeline.seekHandle.style.left = "".concat(percentage, "%"); // Update the current video time

          this.player.currentTime = this.player.duration * (percentage / 100); // Set video seek

          controls.setRange.call(this.player, this.player.elements.inputs.seek, percentage); // Set the video seek position

          triggerEvent.call(this.player, this.player.media, 'seeked'); // Show the seek thumbnail

          if (this.previewThumbnailsReady) {
            var seekTime = this.player.duration * (percentage / 100);
            previewThumbnails.showImageAtCurrentTime(seekTime);
          }
        }
      } // If the seek handle is near the end of the visible timeline window, shift the timeline

    }, {
      key: "setTimelineOffset",
      value: function setTimelineOffset() {
        var playing = this.player.playing;
        var container = this.elements.container; // Values defining the speed of scrolling and at what points triggering the offset

        var _this$timeline = this.timeline,
            lowerSeek = _this$timeline.lowerSeek,
            upperSeek = _this$timeline.upperSeek,
            upperPlaying = _this$timeline.upperPlaying,
            scrollSpeed = _this$timeline.scrollSpeed; // Retrieve the container positions for the container, timeline and seek handle

        var clientRect = container.getBoundingClientRect();
        var timelineRect = container.timeline.getBoundingClientRect();
        var seekPos = container.timeline.seekHandle.getBoundingClientRect(); // Current position in the editor container

        var zoom = parseFloat(container.timeline.style.width);
        var offset = parseFloat(container.timeline.style.left);
        var seekHandlePos = parseFloat(container.timeline.seekHandle.style.left); // Retrieve the hover position in the editor container, else retrieve the seek value

        var percentage = 100 / clientRect.width * (seekPos.left - clientRect.left); // If playing set lower upper bound to when we shift the timeline

        var upperBound = this.seeking ? upperSeek : upperPlaying; // Calculate the timeline offset position

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

        container.timeline.style.left = "".concat(offset, "%"); // Only adjust the seek position when playing or seeking as we don't want to adjust if the current time is updated

        if (!(playing || this.seeking)) {
          return;
        } // Retrieve the position of the seek handle after the timeline shift


        var seekPosUpdated = container.timeline.seekHandle.getBoundingClientRect().left;
        var seekPercentage = clamp(seekHandlePos + 100 / timelineRect.width * (seekPos.left - seekPosUpdated), 0, 100);
        container.timeline.seekHandle.style.left = "".concat(seekPercentage, "%"); // Show the corresponding preview thumbnail for the updated seek position

        if (this.seeking && this.previewThumbnailsReady) {
          var seekTime = this.player.duration * (seekPercentage / 100);
          this.player.previewThumbnails.showImageAtCurrentTime(seekTime);
        }
      }
    }, {
      key: "listeners",
      value: function listeners() {
        var _this3 = this;

        // If the duration changes after loading the editor, the corresponding timestamps need to be updated
        // If the duration of the video or previewthumbnails has loaded, update
        this.player.on('loadeddata loadedmetadata', function () {
          if (_this3.player.media.duration > 0) _this3.loaded = true;

          if (_this3.loaded && _this3.shown) {
            _this3.showEditor();

            _this3.updateTimestamps();

            _this3.setVideoTimelimeContent();

            triggerEvent.call(_this3.player, _this3.player.media, 'editorloaded');
          }
        });
        this.player.on('previewthumbnailsloaded', function () {
          if (_this3.loaded && _this3.shown) {
            _this3.setVideoTimelimeContent();
          }
        });
      } // On toggle of the editor, trigger event

    }, {
      key: "onChange",
      value: function onChange() {
        if (!this.enabled) {
          return;
        } // Trigger an event


        triggerEvent.call(this.player, this.player.media, this.shown ? 'entereditor' : 'exiteditor', false);
      } // Update UI

    }, {
      key: "update",
      value: function update() {
        if (this.enabled) {
          this.player.debug.log("trim enabled");
        } else {
          this.player.debug.log('Trimming is not supported');
        }
      } // Load config after changing of source

    }, {
      key: "loadConfig",
      value: function loadConfig(config, duration) {
        var _this4 = this;

        if (!config) return;

        if (config.editor.shown) {
          this.enter();
        }

        if (config.editor.zoom.scale > 1) {
          this.player.on('editorloaded', function () {
            _this4.setZoom(config.editor.zoom.scale / duration * _this4.player.duration, true);
          });
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        // Remove the elements with listeners on
        if (this.loaded) {
          if (is$1.element(this.elements.original)) {
            replaceElement(this.elements.original, this.elements.container);
          } // Remove reference to buttons


          this.player.elements.buttons.zoomOut = null;
          this.player.elements.buttons.zoomIn = null;
          this.loaded = false;
        }
      } // Enter Editor

    }, {
      key: "enter",
      value: function enter() {
        if (!this.enabled) {
          return;
        }

        this.shown = true;
        this.showEditor();
        this.onChange();
      } // Exit Editor

    }, {
      key: "exit",
      value: function exit() {
        if (!this.enabled || !this.shown) {
          return;
        }

        this.shown = false;
        this.hideEditor();
        this.onChange();
      } // Toggle state

    }, {
      key: "toggle",
      value: function toggle() {
        if (!this.active) {
          this.enter();
        } else {
          this.exit();
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        var config = this.config,
            player = this.player;
        return config.enabled && player.isHTML5 && player.isVideo;
      } // Get active state

    }, {
      key: "active",
      get: function get() {
        if (!this.enabled) {
          return false;
        }

        return this.shown && is$1.element(this.player.elements.container);
      }
    }, {
      key: "previewThumbnailsReady",
      get: function get() {
        var _this$player = this.player,
            previewThumbnails = _this$player.previewThumbnails,
            duration = _this$player.duration;
        /* Added check for preview thumbnails size as, it is be returned loaded even though there are no thumbnails */

        return previewThumbnails && previewThumbnails.loaded && duration > 0;
      }
    }, {
      key: "visibleWindow",
      get: function get() {
        var container = this.elements.container;
        var duration = this.player.duration;
        var containerRect = container.getBoundingClientRect();
        var timelineRect = container.timeline.getBoundingClientRect();
        var zoom = parseFloat(container.timeline.style.width);
        var offset = parseFloat(container.timeline.style.left);
        var start = Math.abs(offset / zoom) * duration;
        var end = start + containerRect.width / timelineRect.width * duration;
        return {
          start: start,
          end: end
        };
      }
    }]);

    return Editor;
  }();

  var Markers = /*#__PURE__*/function () {
    function Markers(player) {
      _classCallCheck(this, Markers);

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


    _createClass(Markers, [{
      key: "load",
      value: function load() {
        // Marker listeners
        this.listeners(); // Update the UI

        this.update();
      }
    }, {
      key: "addMarker",
      value: function addMarker(id, name) {
        var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.player.currentTime;
        var timeline = this.player.editor.elements.container.timeline;
        var mediaFragment = this.player.mediaFragment; // For media fragments the start time can be different from the media's start time

        var percentage = clamp(100 / this.player.duration * parseFloat(time), this.lowerBound, this.upperBound);
        var markerTime = this.player.duration * (parseFloat(percentage) / 100);
        var mediaMarkerTime = mediaFragment.getMediaTime(markerTime);

        if (!this.loaded || !is$1.element(timeline)) {
          this.preLoadedMarkers.push({
            id: id,
            name: name,
            time: time
          });
          return;
        }

        var container = createElement('div', extend({
          id: id,
          class: this.player.config.classNames.markers.container,
          'aria-valuemin': 0,
          'aria-valuemax': this.player.duration,
          'aria-valuenow': markerTime,
          'aria-valuetext': controls.formatTime.call(this.player, markerTime),
          'aria-label': i18n.get('marker', this.player.config)
        }));
        this.elements.markers.push(container);
        timeline.appendChild(container); // Set the markers default position to be at the current seek point

        container.style.left = "".concat(percentage, "%");
        this.addMarkerListeners(container);
        var marker = createElement('div', extend({
          id: "".concat(id, "Marker"),
          class: this.player.config.classNames.markers.marker
        }));
        container.appendChild(marker); // Add label to marker

        var label = createElement('div', {
          id: "".concat(id, "Label"),
          class: this.player.config.classNames.markers.label
        }, name);
        marker.appendChild(label); // Marker added event

        triggerEvent.call(this.player, this.player.media, 'markeradded', false, {
          id: id,
          time: mediaMarkerTime
        });
      }
    }, {
      key: "moveMarker",
      value: function moveMarker(id) {
        var currentTime = this.player.currentTime;
        var marker = this.elements.markers.find(function (x) {
          return x.id === id;
        }); // Calculate marker position in percent

        var percentage = clamp(currentTime / this.player.media.duration * 100, this.lowerBound, this.upperBound);
        if (!marker) return; // Update the position of the marker

        this.setMarkerPosition(marker, percentage, true);
      }
    }, {
      key: "goToMarker",
      value: function goToMarker(id) {
        var marker = this.elements.markers.find(function (x) {
          return x.id === id;
        });
        if (!marker) return; // Go to marker on timeline

        this.player.currentTime = Number(marker.getAttribute('aria-valuenow'));
      }
    }, {
      key: "removeMarker",
      value: function removeMarker(id) {
        this.elements.markers.forEach(function (marker) {
          if (marker.id === id) {
            marker.remove();
          }
        });
      }
    }, {
      key: "removeMarkers",
      value: function removeMarkers() {
        this.elements.markers.forEach(function (marker) {
          marker.remove();
        });
        this.elements.markers = [];
      }
    }, {
      key: "addMarkerListeners",
      value: function addMarkerListeners(marker) {
        var _this = this;

        // Listen for marker selection
        this.player.listeners.bind(marker, 'mousedown touchstart', function (event) {
          _this.setEditing(event);
        }); // Listen for marker deselection

        this.player.listeners.bind(document.body, 'mouseup touchend', function (event) {
          if (!is$1.nullOrUndefined(_this.editing)) {
            _this.setEditing(event);
          }
        }); // Move marker if selected

        this.player.listeners.bind(document.body, 'mousemove touchmove', function (event) {
          if (!is$1.nullOrUndefined(_this.editing)) {
            _this.setMarkerPositionByXPos(event);
          }
        });
      }
    }, {
      key: "setEditing",
      value: function setEditing(event) {
        var mediaFragment = this.player.mediaFragment;
        var type = event.type,
            currentTarget = event.currentTarget;
        var marker = this.editing;

        if (type === 'mouseup' || type === 'touchend') {
          var value = marker.getAttribute('aria-valuenow'); // For media fragments the start time can be different from the media's start time

          var mediaValue = mediaFragment.getMediaTime(parseFloat(value));
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
    }, {
      key: "setMarkerPositionByXPos",
      value: function setMarkerPositionByXPos(event) {
        if (is$1.nullOrUndefined(this.editing)) return; // Calculate hover position

        var timeline = this.player.editor.elements.container.timeline;
        var clientRect = timeline.getBoundingClientRect();
        var xPos = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX; // Calculate the position of the marker

        var percentage = clamp(100 / clientRect.width * (xPos - clientRect.left), this.lowerBound, this.upperBound); // Selected marker element

        var marker = this.editing; // Update the position of the marker

        this.setMarkerPosition(marker, percentage, false);
      }
    }, {
      key: "setMarkerPosition",
      value: function setMarkerPosition(marker, percentage, triggerChange) {
        var _this$player = this.player,
            mediaFragment = _this$player.mediaFragment,
            duration = _this$player.duration;
        var clampedPercentage = clamp(parseFloat(percentage), this.lowerBound, this.upperBound);
        var time = duration * (clampedPercentage / 100);
        var mediaCurrentTime = mediaFragment.getMediaTime(time); // eslint-disable-next-line no-param-reassign

        marker.style.left = "".concat(clampedPercentage, "%");
        marker.setAttribute('aria-valuenow', time);
        marker.setAttribute('aria-valuetext', controls.formatTime.call(this.player, time));
        if (!triggerChange) return;
        triggerEvent.call(this.player, this.player.media, 'markerchange', false, {
          id: marker.id,
          time: mediaCurrentTime
        });
      }
    }, {
      key: "listeners",
      value: function listeners() {
        var _this2 = this;

        this.player.on('loadeddata loadedmetadata editorloaded', function () {
          var _this2$player = _this2.player,
              duration = _this2$player.duration,
              editor = _this2$player.editor; // If markers have been added before the player has a duration add this markers

          if (!duration || editor.active && !is$1.element(editor.elements.container.timeline)) {
            return;
          }

          _this2.loaded = true;

          if (_this2.preLoadedMarkers.length) {
            _this2.preLoadedMarkers.forEach(function (marker) {
              _this2.addMarker(marker.id, marker.name, marker.time);
            });

            _this2.preLoadedMarkers = [];
          }
        });
        this.player.on('trimchanging', function () {
          if (!_this2.config.lockToTrimRegion) return;

          _this2.elements.markers.forEach(function (marker) {
            return _this2.setMarkerPosition(marker, marker.style.left, false);
          });
        });
        this.player.on('trimchange', function () {
          if (!_this2.config.lockToTrimRegion) return;

          _this2.elements.markers.forEach(function (marker) {
            return _this2.setMarkerPosition(marker, marker.style.left, true);
          });
        });
      }
    }, {
      key: "toggleMarkers",
      value: function toggleMarkers() {
        var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        this.elements.markers.forEach(function (marker) {
          toggleHidden(marker, show);
        });
      } // Load config after changing of source (only do this for sources which have sync points)

    }, {
      key: "loadConfig",
      value: function loadConfig(config) {
        var _this3 = this;

        if (!config) return;
        if (!(this.player.config.syncPoints && this.player.config.syncPoints.length) || !(config.config.syncPoints && config.config.syncPoints.length)) return;
        if (!config.markers.elements.markers) return;
        this.player.once('editorloaded', function () {
          config.markers.elements.markers.forEach(function (marker) {
            if (!marker.getAttribute('aria-valuetext')) return;

            _this3.addMarker(marker.id, marker.innerText, matchToVideoTime(marker.getAttribute('aria-valuetext'), _this3.player.config.syncPoints) - _this3.player.mediaFragment.startTime);
          });
        });
      } // Update UI

    }, {
      key: "update",
      value: function update() {
        if (this.enabled) {
          this.player.debug.log("Video Markers enabled");
        } else {
          this.player.debug.log('Video markers is not supported');
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        // Remove the elements with listeners on
        if (this.elements.markers && !is$1.empty(this.elements.markers)) {
          // This should be cleaned up the by the editor
          this.elements.markers = [];
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        var config = this.config,
            player = this.player;
        return config.enabled && player.editor.enabled && player.isHTML5 && player.isVideo;
      } // Get active state

    }, {
      key: "active",
      get: function get() {
        if (!this.enabled) {
          return false;
        }

        return this.elements.markers.length > 0;
      }
    }, {
      key: "lowerBound",
      get: function get() {
        var _this$player2 = this.player,
            trim = _this$player2.trim,
            duration = _this$player2.duration;
        return trim.active && this.config.lockToTrimRegion ? trim.startTime / duration * 100 : 0;
      }
    }, {
      key: "upperBound",
      get: function get() {
        var _this$player3 = this.player,
            trim = _this$player3.trim,
            duration = _this$player3.duration;
        return trim.active && this.config.lockToTrimRegion ? trim.endTime / duration * 100 : 100;
      }
    }]);

    return Markers;
  }();

  var Trim = /*#__PURE__*/function () {
    function Trim(player) {
      _classCallCheck(this, Trim);

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


    _createClass(Trim, [{
      key: "load",
      value: function load() {
        var _this = this;

        // Handle event (incase user presses escape etc)
        on.call(this.player, document, function () {
          _this.onChange();
        }); // Update the UI

        this.update(); // Setup player listeners

        this.listeners();
      } // Store the trim start time in seconds (limit)

    }, {
      key: "setStartTime",
      value: function setStartTime(percentage) {
        var maxTrimLength = this.config.maxTrimLength;
        var startTime = this.player.duration * (parseFloat(percentage) / 100);
        this.startTime = maxTrimLength >= 0 ? Math.max(startTime, this.endTime - this.config.maxTrimLength) : startTime;
      } // Store the trim end time in seconds

    }, {
      key: "setEndTime",
      value: function setEndTime(percentage) {
        var maxTrimLength = this.config.maxTrimLength;
        var endTime = this.player.duration * (parseFloat(percentage) / 100);
        this.endTime = maxTrimLength >= 0 ? Math.min(endTime, this.startTime + this.config.maxTrimLength) : endTime;
      }
    }, {
      key: "getMaxTrimLength",
      value: function getMaxTrimLength(startPercentage, endPercentage) {
        var startTime = this.player.duration * (parseFloat(startPercentage) / 100);
        var endTime = this.player.duration * (parseFloat(endPercentage) / 100);

        if (this.config.maxTrimLength >= 0 && endTime - startTime >= this.config.maxTrimLength) {
          return true;
        }

        return false;
      } // Show the trim toolbar on the timeline

    }, {
      key: "showTrimTool",
      value: function showTrimTool() {
        if (this.player.editor && !this.player.editor.active) {
          this.player.editor.enter();
        }

        if (is$1.empty(this.elements.container.bar)) {
          this.createTrimTool();
        }

        if (this.config.zoom && this.config.zoom.enabled) {
          this.setTimelineZoom();
        }

        toggleHidden(this.elements.container, false);
      } // Hide the trim toolbar from the timeline

    }, {
      key: "hideTrimTool",
      value: function hideTrimTool() {
        if (this.config.closeEditor) {
          this.player.editor.exit();
        }

        toggleHidden(this.elements.container, true);
      } // Add trim toolbar to the timeline

    }, {
      key: "createTrimTool",
      value: function createTrimTool() {
        var container = this.player.elements.container;

        if (is$1.element(container) && !is$1.element(this.elements.container) && this.loaded) {
          this.createTrimContainer();
          this.createTrimBar();
          this.createTrimBarThumbs();
          this.createShadedRegions();
          this.createThumbTime();
          triggerEvent.call(this.player, this.player.media, 'trimloaded');
        }
      } // Add trim container to the timeline

    }, {
      key: "createTrimContainer",
      value: function createTrimContainer() {
        this.elements.container = createElement('div', {
          class: this.player.config.classNames.trim.container
        });
        this.player.editor.elements.container.timeline.appendChild(this.elements.container);
      } // Add trim bar to the timeline

    }, {
      key: "createTrimBar",
      value: function createTrimBar() {
        // If offsetContainer is set to true, we want to offset the start time of the container
        var offset = this.config.offsetContainer ? this.trimLength / 2 : 0; // Set the trim bar from the current seek time percentage to x percent after and limit the end percentage to 100%

        var start = clamp(100 / this.player.duration * parseFloat(this.player.currentTime) - offset, this.lowerBound, this.upperBound);
        var end = Math.min(parseFloat(start) + this.trimLength, this.upperBound); // Store the start and end video percentages in seconds

        this.setStartTime(start);
        this.setEndTime(end);
        this.elements.container.bar = createElement('span', {
          class: this.player.config.classNames.trim.trimTool
        });
        var bar = this.elements.container.bar;
        bar.style.left = "".concat(start.toString(), "%");
        bar.style.width = "".concat(end - start.toString(), "%");
        this.elements.container.appendChild(bar);
        triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
      } // Add trim length thumbs to the timeline

    }, {
      key: "createTrimBarThumbs",
      value: function createTrimBarThumbs() {
        var _this2 = this;

        var bar = this.elements.container.bar;
        var trim = this.player.config.classNames.trim; // Create the trim bar thumb elements

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

        this.player.listeners.bind(bar.leftThumb, 'mousedown touchstart', function (event) {
          if (bar) {
            _this2.setEditing(event);
          }
        }); // Listen for trim thumb (handle) selection

        this.player.listeners.bind(bar.rightThumb, 'mousedown touchstart', function (event) {
          if (bar) {
            _this2.setEditing(event);
          }
        }); // Move trim handles if selected

        this.player.listeners.bind(document.body, 'mousemove touchmove', function (event) {
          if (_this2.editing) {
            _this2.setTrimLength(event);
          }
        }); // Stop trimming when handle is no longer selected

        this.player.listeners.bind(document.body, 'mouseup touchend', function (event) {
          if (_this2.editing) _this2.setEditing(event);
        });
      } // Add shaded out regions to show that this area is not being trimmed

    }, {
      key: "createShadedRegions",
      value: function createShadedRegions() {
        var container = this.elements.container; // Create two shaded regions on the timeline (before and after the trimming tool)

        container.shadedRegions = [];
        var shadedRegion = createElement('span', {
          class: this.player.config.classNames.trim.shadedRegion
        });
        var shadedRegionClone = shadedRegion.cloneNode(true); // Store and append the shaded regions to the container

        container.shadedRegions.push(shadedRegion);
        container.shadedRegions.push(shadedRegionClone);
        container.insertBefore(shadedRegion, container.bar);
        container.insertBefore(shadedRegionClone, container.bar.nextSibling);
        this.setShadedRegions();
      }
    }, {
      key: "setShadedRegions",
      value: function setShadedRegions() {
        var shadedRegions = this.elements.container.shadedRegions;
        var _this$elements$contai = this.elements.container.bar.style,
            left = _this$elements$contai.left,
            width = _this$elements$contai.width; // Retrieve the first and second shaded regions (should always be two regions)

        if (shadedRegions.length < 1) {
          return;
        } // Set the position of the shaded regions relative to the position of the trimming tool


        shadedRegions[0].style.width = left;
        shadedRegions[1].style.left = "".concat(parseFloat(left) + parseFloat(width), "%");
        shadedRegions[1].style.width = "".concat(100 - (parseFloat(left) + parseFloat(width)), "%");
      }
    }, {
      key: "createThumbTime",
      value: function createThumbTime() {
        var _this$elements$contai2 = this.elements.container.bar,
            leftThumb = _this$elements$contai2.leftThumb,
            rightThumb = _this$elements$contai2.rightThumb;
        var alwaysShowTimestamps = this.config.alwaysShowTimestamps;
        var classNames = this.player.config.classNames; // Create HTML element, parent+span: time text (e.g., 01:32:00)

        leftThumb.timeContainer = createElement('div', {
          class: classNames.trim.timeContainer
        });
        rightThumb.timeContainer = createElement('div', {
          class: classNames.trim.timeContainer
        }); // Append the time element to the container

        leftThumb.timeContainer.time = createElement('span', {}, controls.formatTime.call(this.player, this.startTime));
        leftThumb.timeContainer.appendChild(leftThumb.timeContainer.time);
        rightThumb.timeContainer.time = createElement('span', {}, controls.formatTime.call(this.player, this.endTime));
        rightThumb.timeContainer.appendChild(rightThumb.timeContainer.time); // Append the time container to the bar

        leftThumb.appendChild(leftThumb.timeContainer);
        rightThumb.appendChild(rightThumb.timeContainer); // Toggle whether to always show time stamps or just on hover

        toggleClass(leftThumb.timeContainer, classNames.trim.alwaysShowTimestamps, alwaysShowTimestamps);
        toggleClass(rightThumb.timeContainer, classNames.trim.alwaysShowTimestamps, alwaysShowTimestamps);
      }
    }, {
      key: "setEditing",
      value: function setEditing(event) {
        var bar = this.elements.container.bar;
        var _this$player$config$c = this.player.config.classNames.trim,
            leftThumb = _this$player$config$c.leftThumb,
            rightThumb = _this$player$config$c.rightThumb;
        var type = event.type,
            target = event.target;

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
    }, {
      key: "setTrimLength",
      value: function setTrimLength(event) {
        if (!this.editing) return; // Calculate hover position

        var timeline = this.player.editor.elements.container.timeline;
        var clientRect = timeline.getBoundingClientRect();
        var xPos = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX;
        var percentage = clamp(100 / clientRect.width * (xPos - clientRect.left), this.lowerBound, this.upperBound);
        var _this$player$config$c2 = this.player.config.classNames.trim,
            leftThumb = _this$player$config$c2.leftThumb,
            rightThumb = _this$player$config$c2.rightThumb; // Update the position of the trim range tool

        if (this.editing === leftThumb) {
          this.setLeftThumbPosition(percentage);
        } else if (this.editing === rightThumb) {
          this.setRightThumbPosition(percentage);
        } // Show the seek thumbnail


        if (this.previewThumbnailsReady) {
          var seekTime = this.player.media.duration * (percentage / 100);
          this.player.previewThumbnails.showImageAtCurrentTime(seekTime);
        }

        triggerEvent.call(this.player, this.player.media, 'trimchanging', false, this.trimTime);
      }
    }, {
      key: "setTrimStart",
      value: function setTrimStart() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player.currentTime;
        var percentage = clamp(100 / this.player.duration * parseFloat(time), this.lowerBound, this.upperBound);
        this.setLeftThumbPosition(percentage);
        triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
      }
    }, {
      key: "setTrimEnd",
      value: function setTrimEnd() {
        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.player.currentTime;
        var percentage = clamp(100 / this.player.duration * parseFloat(time), this.lowerBound, this.upperBound);
        this.setRightThumbPosition(percentage);
        triggerEvent.call(this.player, this.player.media, 'trimchange', false, this.trimTime);
      }
    }, {
      key: "setLeftThumbPosition",
      value: function setLeftThumbPosition(percentage) {
        var bar = this.elements.container.bar;
        var _bar$style = bar.style,
            left = _bar$style.left,
            width = _bar$style.width;
        var leftThumbPos = parseFloat(left);
        var rightThumbPos = leftThumbPos + parseFloat(width);
        var rightThumbRelativePos = Math.max(parseFloat(width) - (percentage - leftThumbPos), 0);
        var maxTrimLength = this.getMaxTrimLength(percentage, rightThumbPos); // Set the width to be in the position previously unless region is longer than max trim length

        if (!maxTrimLength) bar.style.width = "".concat(rightThumbRelativePos, "%"); // Store and convert the start percentage to time

        bar.style.left = "".concat(percentage, "%");
        if (maxTrimLength) this.setEndTime(percentage + parseFloat(width));
        this.setStartTime(percentage); // Prevent the end time being before the start time

        if (this.startTime > this.endTime) this.setEndTime(percentage); // Set the timestamp of the current trim handle position

        this.setThumbTimeStamps();
        this.setThumbAriaData();
        this.setShadedRegions();
      }
    }, {
      key: "setRightThumbPosition",
      value: function setRightThumbPosition(percentage) {
        var bar = this.elements.container.bar;
        var _bar$style2 = bar.style,
            left = _bar$style2.left,
            width = _bar$style2.width;
        var leftThumbPos = parseFloat(left);
        var rightThumbPos = leftThumbPos + parseFloat(width);
        var maxTrimLength = this.getMaxTrimLength(leftThumbPos, percentage); // Update the width of trim bar (right thumb)

        if (maxTrimLength) {
          bar.style.left = "".concat(leftThumbPos + (percentage - rightThumbPos), "%");
          this.setStartTime(leftThumbPos + (percentage - rightThumbPos));
        } else {
          // Update the width of trim bar (right thumb)
          bar.style.width = "".concat(Math.max(percentage - leftThumbPos, 0), "%");
        } // Store and convert the end position on the timeline as time


        this.setEndTime(percentage); // Prevent the start time being after the end time

        if (this.endTime < this.startTime) {
          bar.style.left = "".concat(percentage, "%");
          this.setStartTime("".concat(percentage, "%"));
        } // Set the timestamp of the current trim handle position


        this.setThumbTimeStamps();
        this.setThumbAriaData();
        this.setShadedRegions();
      }
    }, {
      key: "setThumbTimeStamps",
      value: function setThumbTimeStamps() {
        var bar = this.elements.container.bar;
        bar.leftThumb.timeContainer.time.innerText = controls.formatTime.call(this.player, this.startTime);
        bar.rightThumb.timeContainer.time.innerText = controls.formatTime.call(this.player, this.endTime);
      }
    }, {
      key: "setThumbAriaData",
      value: function setThumbAriaData() {
        var bar = this.elements.container.bar; // Update the aria-value and text

        bar.leftThumb.setAttribute('aria-valuenow', this.startTime);
        bar.leftThumb.setAttribute('aria-valuetext', controls.formatTime.call(this.player, this.startTime));
        bar.rightThumb.setAttribute('aria-valuenow', this.endTime);
        bar.rightThumb.setAttribute('aria-valuetext', controls.formatTime.call(this.player, this.endTime));
      }
    }, {
      key: "toggleTimeContainer",
      value: function toggleTimeContainer(element) {
        var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!element.timeContainer) {
          return;
        }

        var className = this.player.config.classNames.trim.timeContainerShown;
        element.timeContainer.classList.toggle(className, toggle);
      }
    }, {
      key: "setTimelineZoom",
      value: function setTimelineZoom() {
        var _this$config$zoom = this.config.zoom,
            preRoll = _this$config$zoom.preRoll,
            postRoll = _this$config$zoom.postRoll;
        this.player.editor.setZoomWindow(this.startTime - preRoll, this.endTime + postRoll);
      } // Set the seektime to the start of the trim timeline, if the seektime is outside of the region.

    }, {
      key: "timeUpdate",
      value: function timeUpdate() {
        if (!this.active || !this.trimming || !this.player.playing || this.editing) {
          return;
        }

        var currentTime = this.player.currentTime;

        if (currentTime < this.startTime || currentTime >= this.endTime) {
          this.player.currentTime = this.startTime;

          if (currentTime >= this.endTime) {
            this.player.pause();
          }
        }
      }
    }, {
      key: "listeners",
      value: function listeners() {
        var _this3 = this;

        /* Prevent the trim tool from being added until the player is in a playable state
               If the user has pressed the trim tool before this event has fired, show the tool
            */
        this.player.on('loadeddata loadedmetadata', function () {
          if (_this3.player.media.duration) _this3.loaded = true;
          if (_this3.trimming) _this3.showTrimTool();
        });
        /* Listen for time changes so we can reset the seek point to within the clip.
               Additionally, use the reference to the binding so we can remove and create a new instance of this listener
               when we change source
            */

        this.player.on('timeupdate', this.timeUpdateFunction);
      } // On toggle of trim control, trigger event

    }, {
      key: "onChange",
      value: function onChange() {
        if (!this.enabled) {
          return;
        } // Update toggle button


        var button = this.player.elements.buttons.trim;

        if (is$1.element(button)) {
          button.pressed = this.active;
        } // Trigger an event


        triggerEvent.call(this.player, this.player.media, this.trimming ? 'entertrim' : 'exittrim', false, this.trimTime);
      } // Update UI

    }, {
      key: "update",
      value: function update() {
        if (this.enabled) {
          this.player.debug.log("trim enabled");
        } else {
          this.player.debug.log('Trimming is not supported');
        } // Add styling hook to show button


        toggleClass(this.player.elements.container, this.player.config.classNames.trim.enabled, this.enabled);
      } // Load config after changing of source (only do this for sources which have sync points)

    }, {
      key: "loadConfig",
      value: function loadConfig(config) {
        var _this4 = this;

        if (!config) return;
        if (!(this.player.config.syncPoints && this.player.config.syncPoints.length) || !(config.config.syncPoints && config.config.syncPoints.length)) return;
        if (!config.trim.trimming) return;
        this.enter();

        if (config.config.trim.lowerBound > 0) {
          var previousLowerBound = videoToMatchTime(config.config.trim.lowerBound, config.config.syncPoints);
          this.config.lowerBound = matchToVideoTime(previousLowerBound, this.player.config.syncPoints);
        }

        if (config.config.trim.upperBound > 0) {
          var previousUpperBound = videoToMatchTime(config.config.trim.upperBound, config.config.syncPoints);
          this.config.upperBound = matchToVideoTime(previousUpperBound, this.player.config.syncPoints);
        }

        var previousStartTime = config.trim.elements.container.bar.leftThumb.getAttribute('aria-valuetext');
        var previousEndTime = config.trim.elements.container.bar.rightThumb.getAttribute('aria-valuetext');
        this.player.once('trimloaded', function () {
          _this4.setTrimStart(matchToVideoTime(previousStartTime, _this4.player.config.syncPoints) - _this4.player.mediaFragment.startTime);

          _this4.setTrimEnd(matchToVideoTime(previousEndTime, _this4.player.config.syncPoints) - _this4.player.mediaFragment.startTime);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        // Remove the elements with listeners on
        if (this.elements.container.bar && !is$1.empty(this.elements.container.bar)) {
          this.elements.container.remove();
        }

        this.player.off('timeupdate', this.timeUpdateFunction);
      } // Enter trim tool

    }, {
      key: "enter",
      value: function enter() {
        if (!this.enabled) {
          return;
        }

        this.trimming = true;
        this.showTrimTool();
        this.onChange();
      } // Exit trim tool

    }, {
      key: "exit",
      value: function exit() {
        if (!this.enabled) {
          return;
        }

        this.trimming = false;
        this.hideTrimTool();
        this.onChange();
      } // Toggle state

    }, {
      key: "toggle",
      value: function toggle() {
        if (!this.active) {
          this.enter();
        } else {
          this.exit();
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        var config = this.config;
        return config.enabled && this.player.isHTML5 && this.player.isVideo;
      } // Get active state

    }, {
      key: "active",
      get: function get() {
        if (!this.enabled) {
          return false;
        }

        return this.trimming && is$1.element(this.elements.container);
      } // Get the current trim time
      // If trimming a media fragment the start can be different from the media's start time so use the media time

    }, {
      key: "trimTime",
      get: function get() {
        var mediaFragment = this.player.mediaFragment;
        var startTime = mediaFragment.getMediaTime(this.startTime);
        var endTime = mediaFragment.getMediaTime(this.endTime);
        return {
          startTime: startTime,
          endTime: endTime
        };
      }
    }, {
      key: "trimLength",
      get: function get() {
        var maxTrimLength = this.config.maxTrimLength; // Default is 100% or the maximum trimming length

        return maxTrimLength > 0 ? clamp(100 / this.player.duration * parseFloat(maxTrimLength), 0, 100) : 100;
      } // Calculate the lower Limit of the trim region

    }, {
      key: "lowerBound",
      get: function get() {
        var lowerBound = this.config.lowerBound;
        return lowerBound > 0 ? lowerBound / this.player.duration * 100 : 0;
      } // Calculate the upper Limit of the trim region

    }, {
      key: "upperBound",
      get: function get() {
        var upperBound = this.config.upperBound;
        return upperBound > 0 ? upperBound / this.player.duration * 100 : 100;
      }
    }, {
      key: "previewThumbnailsReady",
      get: function get() {
        var _this$player = this.player,
            previewThumbnails = _this$player.previewThumbnails,
            duration = _this$player.duration;
        /* Added check for preview thumbnails size as, it is be returned loaded even though there are no thumbnails */

        return previewThumbnails && previewThumbnails.loaded && duration > 0;
      }
    }]);

    return Trim;
  }();

  var parseVtt = function parseVtt(vttDataString) {
    var processedList = [];
    var frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach(function (frame) {
      var result = {};
      var lines = frame.split(/\r\n|\n|\r/);
      lines.forEach(function (line) {
        if (!is$1.number(result.startTime)) {
          // The line with start and end times on it is the first line of interest
          var matchTimes = line.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/); // Note that this currently ignores caption formatting directives that are optionally on the end of this line - fine for non-captions VTT

          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number("0.".concat(matchTimes[4]));
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number("0.".concat(matchTimes[9]));
          }
        } else if (!is$1.empty(line.trim()) && is$1.empty(result.text)) {
          // If we already have the startTime, then we're definitely up to the text line(s)
          var lineSplit = line.trim().split('#xywh=');

          var _lineSplit = _slicedToArray(lineSplit, 1);

          result.text = _lineSplit[0];

          // If there's content in lineSplit[1], then we have sprites. If not, then it's just one frame per image
          if (lineSplit[1]) {
            var _lineSplit$1$split = lineSplit[1].split(',');

            var _lineSplit$1$split2 = _slicedToArray(_lineSplit$1$split, 4);

            result.x = _lineSplit$1$split2[0];
            result.y = _lineSplit$1$split2[1];
            result.w = _lineSplit$1$split2[2];
            result.h = _lineSplit$1$split2[3];
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


  var fitRatio = function fitRatio(ratio, outer) {
    var targetRatio = outer.width / outer.height;
    var result = {};

    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }

    return result;
  };

  var PreviewThumbnails = /*#__PURE__*/function () {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    function PreviewThumbnails(player) {
      _classCallCheck(this, PreviewThumbnails);

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

    _createClass(PreviewThumbnails, [{
      key: "load",
      value: function load() {
        var _this = this;

        // Toggle the regular seek tooltip
        if (this.player.elements.display.seekTooltip) {
          this.player.elements.display.seekTooltip.hidden = this.enabled;
        }

        if (!this.enabled) {
          return;
        }

        this.getThumbnails().then(function () {
          if (!_this.enabled) {
            return;
          } // Render DOM elements


          _this.render(); // Check to see if thumb container size was specified manually in CSS


          _this.determineContainerAutoSizing();

          _this.loaded = true; // Trigger event

          triggerEvent.call(_this.player, _this.player.media, 'previewthumbnailsloaded');
        });
      } // Download VTT files and parse them

    }, {
      key: "getThumbnails",
      value: function getThumbnails() {
        var _this2 = this;

        return new Promise(function (resolve) {
          var src = _this2.player.config.previewThumbnails.src;

          if (is$1.empty(src)) {
            throw new Error('Missing previewThumbnails.src config attribute');
          } // Resolve promise


          var sortAndResolve = function sortAndResolve() {
            // Sort smallest to biggest (e.g., [120p, 480p, 1080p])
            _this2.thumbnails.sort(function (x, y) {
              return x.height - y.height;
            });

            _this2.player.debug.log('Preview thumbnails', _this2.thumbnails);

            resolve();
          }; // Via callback()


          if (is$1.function(src)) {
            src(function (thumbnails) {
              _this2.thumbnails = thumbnails;
              sortAndResolve();
            });
          } // VTT urls
          else {
              // If string, convert into single-element list
              var urls = is$1.string(src) ? [src] : src; // Loop through each src URL. Download and process the VTT file, storing the resulting data in this.thumbnails

              var promises = urls.map(function (u) {
                return _this2.getVttFile(u);
              }); // Resolve

              Promise.all(promises).then(sortAndResolve);
            }
        });
      } // Process individual VTT file

    }, {
      key: "getVttFile",
      value: function () {
        var _getVttFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(src) {
          var response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!src.startsWith('WEBVTT')) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 3;
                  return this.getThumbnail(src);

                case 3:
                  _context.next = 16;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.next = 8;
                  return fetch(src);

                case 8:
                  response = _context.sent;
                  _context.next = 11;
                  return this.getThumbnail(response, src);

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](5);
                  this.player.debug.warn("Error retrieving VTT File");

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[5, 13]]);
        }));

        function getVttFile(_x) {
          return _getVttFile.apply(this, arguments);
        }

        return getVttFile;
      }() // Process thumbnail

    }, {
      key: "getThumbnail",
      value: function getThumbnail(src, url) {
        var _this3 = this;

        return new Promise(function (resolve) {
          var thumbnail = {
            frames: parseVtt(src),
            height: null,
            urlPrefix: ''
          }; // If the URLs don't start with '/', then we need to set their relative path to be the location of the VTT file
          // If the URLs do start with '/', then they obviously don't need a prefix, so it will remain blank
          // If the thumbnail URLs start with with none of '/', 'http://' or 'https://', then we need to set their relative path to be the location of the VTT file

          if (!thumbnail.frames[0].text.startsWith('/') && !thumbnail.frames[0].text.startsWith('http://') && !thumbnail.frames[0].text.startsWith('https://')) {
            thumbnail.urlPrefix = url.substring(0, url.lastIndexOf('/') + 1);
          } // Download the first frame, so that we can determine/set the height of this thumbnailsDef


          var tempImage = new Image();
          tempImage.addEventListener('load', function () {
            thumbnail.height = tempImage.naturalHeight;
            thumbnail.width = tempImage.naturalWidth;

            _this3.thumbnails.push(thumbnail);

            resolve();
          });
          tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
        });
      }
    }, {
      key: "startMove",
      value: function startMove(event) {
        if (!this.loaded) {
          return;
        }

        if (!is$1.event(event) || !['touchmove', 'mousemove'].includes(event.type)) {
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
          var clientRect = this.player.elements.progress.getBoundingClientRect();
          var percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
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
      }
    }, {
      key: "endMove",
      value: function endMove() {
        this.toggleThumbContainer(false, true);
      }
    }, {
      key: "startScrubbing",
      value: function startScrubbing(event) {
        var overrideScrubbing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        // Only act on left mouse button (0), or touch device (event.button does not exist or is false)
        if (is$1.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
          this.mouseDown = true; // Wait until media has a duration

          if (this.player.media.duration) {
            if (this.player.config.previewThumbnails.enableScrubbing || overrideScrubbing) {
              this.toggleScrubbingContainer(true);
            }

            this.toggleThumbContainer(false, true); // Download and show image

            this.showImageAtCurrentTime();
          }
        }
      }
    }, {
      key: "endScrubbing",
      value: function endScrubbing() {
        var _this4 = this;

        this.mouseDown = false; // Hide scrubbing preview. But wait until the video has successfully seeked before hiding the scrubbing preview

        if (Math.ceil(this.lastTime) === Math.ceil(this.player.currentTime)) {
          // The video was already seeked/loaded at the chosen time - hide immediately
          this.toggleScrubbingContainer(false);
        } else {
          // The video hasn't seeked yet. Wait for that
          once.call(this.player, this.player.media, 'timeupdate', function () {
            // Re-check mousedown - we might have already started scrubbing again
            if (!_this4.mouseDown) {
              _this4.toggleScrubbingContainer(false);
            }
          });
        }
      }
      /**
       * Setup hooks for Plyr and window events
       */

    }, {
      key: "listeners",
      value: function listeners() {
        var _this5 = this;

        // Hide thumbnail preview - on mouse click, mouse leave (in listeners.js for now), and video play/seek. All four are required, e.g., for buffering
        this.player.on('play', function () {
          _this5.toggleThumbContainer(false, true);
        });
        this.player.on('seeked', function () {
          _this5.toggleThumbContainer(false);
        });
        this.player.on('timeupdate', function () {
          _this5.lastTime = _this5.player.currentTime;
        });
      }
      /**
       * Create HTML elements for image containers
       */

    }, {
      key: "render",
      value: function render() {
        if (!this.player.elements) return; // Create HTML element: plyr__preview-thumbnail-container

        this.elements.thumb.container = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        }); // Wrapper for the image for styling

        this.elements.thumb.imageContainer = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        });
        this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer); // Create HTML element, parent+span: time text (e.g., 01:32:00)

        var timeContainer = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = createElement('span', {}, '00:00');
        timeContainer.appendChild(this.elements.thumb.time);
        this.elements.thumb.container.appendChild(timeContainer); // Inject the whole thumb

        if (is$1.element(this.player.elements.progress)) {
          this.player.elements.progress.appendChild(this.elements.thumb.container);
        } // Create HTML element: plyr__preview-scrubbing-container


        this.elements.scrubbing.container = createElement('div', {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        });
        this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.elements.thumb.container) {
          this.elements.thumb.container.remove();
        }

        if (this.elements.scrubbing.container) {
          this.elements.scrubbing.container.remove();
        }
      }
    }, {
      key: "showImageAtCurrentTime",
      value: function showImageAtCurrentTime() {
        var _this6 = this;

        var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.seekTime;
        var container = arguments.length > 1 ? arguments[1] : undefined;

        if (this.mouseDown) {
          this.setScrubbingContainerSize();
        } else {
          this.setThumbContainerSizeAndPos();
        } // Adjust image time if the timeline is offset


        var offsetTime = time + (this.player.mediaFragment.enabled && this.player.mediaFragment.startTime || 0); // Find the desired thumbnail index
        // TODO: Handle a video longer than the thumbs where thumbNum is null

        var thumbNum = this.thumbnails[0].frames.findIndex(function (frame) {
          return offsetTime >= frame.startTime && offsetTime <= frame.endTime;
        });
        var hasThumb = thumbNum >= 0;
        var qualityIndex = 0; // Show the thumb container if we're not scrubbing and not setting a custom container

        if (!this.mouseDown && !container) {
          this.toggleThumbContainer(hasThumb);
        } // No matching thumb found


        if (!hasThumb) {
          return;
        } // Check to see if we've already downloaded higher quality versions of this image


        this.thumbnails.forEach(function (thumbnail, index) {
          if (_this6.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
            qualityIndex = index;
          }
        }); // Only proceed if either thumbnum, thumbfilename or container has changed

        if (thumbNum !== this.showingThumb || container) {
          this.showingThumb = thumbNum;
          this.loadImage(qualityIndex, container);
        }
      } // Show the image that's currently specified in this.showingThumb

    }, {
      key: "loadImage",
      value: function loadImage() {
        var _this7 = this;

        var qualityIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var container = arguments.length > 1 ? arguments[1] : undefined;
        var thumbNum = this.showingThumb;
        var thumbnail = this.thumbnails[qualityIndex];
        var urlPrefix = thumbnail.urlPrefix;
        var frame = thumbnail.frames[thumbNum];
        var thumbFilename = thumbnail.frames[thumbNum].text;
        var thumbUrl = urlPrefix + thumbFilename;
        var currentImageElement = container ? container.currentImageElement : this.currentImageElement;

        if (!currentImageElement || currentImageElement.dataset.filename !== thumbFilename) {
          // If we're already loading a previous image, remove its onload handler - we don't want it to load after this one
          // Only do this if not using sprites. Without sprites we really want to show as many images as possible, as a best-effort
          if (this.loadingImage && this.usingSprites) {
            this.loadingImage.onload = null;
          } // We're building and adding a new image. In other implementations of similar functionality (YouTube), background image
          // is instead used. But this causes issues with larger images in Firefox and Safari - switching between background
          // images causes a flicker. Putting a new image over the top does not


          var previewImage = new Image();
          previewImage.dataset.index = thumbNum;
          previewImage.dataset.filename = thumbFilename;
          this.showingThumbFilename = thumbFilename;
          this.player.debug.log("Loading image: ".concat(thumbUrl)); // For some reason, passing the named function directly causes it to execute immediately. So I've wrapped it in an anonymous function...

          previewImage.addEventListener('load', function () {
            _this7.showImage( // For the editor timeline, we need the most recent container however, if the event has changed between seeking and hover we should use the new container
            container || _this7.currentImageContainer, previewImage, frame, qualityIndex, thumbNum, thumbFilename, true, !!container);
          }, {
            once: true
          });
          previewImage.src = thumbUrl;
          this.loadingImage = previewImage;
          this.removeOldImages(previewImage, container);
        } else {
          // Update the existing image
          this.showImage(container || this.currentImageContainer, currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false, !!container);
          currentImageElement.dataset.index = thumbNum;
          this.removeOldImages(currentImageElement, container);
        }
      }
    }, {
      key: "showImage",
      value: function showImage(currentImageContainer, previewImage, frame, qualityIndex, thumbNum, thumbFilename) {
        var newImage = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
        var container = arguments.length > 7 ? arguments[7] : undefined;
        // Prevent if the player is destroyed after the image has loaded
        if (is$1.empty(this.player.media)) return;
        this.player.debug.log("Showing thumb: ".concat(thumbFilename, ". num: ").concat(thumbNum, ". qual: ").concat(qualityIndex, ". newimg: ").concat(newImage));
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
      } // Remove all preview images that aren't the designated current image

    }, {
      key: "removeOldImages",
      value: function removeOldImages(currentImage, container) {
        var _this8 = this;

        // This has to be set before the timeout - to prevent issues switching between hover and scrub
        var currentImageContainer = container || this.currentImageContainer;
        if (!currentImageContainer || !currentImageContainer.children.length) return; // Get a list of all images, convert it from a DOM list to an array

        Array.from(currentImageContainer.children).forEach(function (image) {
          if (image.tagName.toLowerCase() !== 'img') {
            return;
          }

          var removeDelay = _this8.usingSprites ? 500 : 1000;

          if (image && image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
            // Wait 200ms, as the new image can take some time to show on certain browsers (even though it was downloaded before showing). This will prevent flicker, and show some generosity towards slower clients
            // First set attribute 'deleting' to prevent multi-handling of this on repeat firing of this function
            // eslint-disable-next-line no-param-reassign
            image.dataset.deleting = true;
            setTimeout(function () {
              currentImageContainer.removeChild(image);

              _this8.player.debug.log("Removing thumb: ".concat(image.dataset.filename));
            }, removeDelay);
          }
        });
      } // Preload images before and after the current one. Only if the user is still hovering/seeking the same frame
      // This will only preload the lowest quality

    }, {
      key: "preloadNearby",
      value: function preloadNearby(thumbNum) {
        var _this9 = this;

        var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return new Promise(function (resolve) {
          setTimeout(function () {
            var oldThumbFilename = _this9.thumbnails[0].frames[thumbNum].text;

            if (_this9.showingThumbFilename === oldThumbFilename) {
              // Find the nearest thumbs with different filenames. Sometimes it'll be the next index, but in the case of sprites, it might be 100+ away
              var thumbnailsClone;

              if (forward) {
                thumbnailsClone = _this9.thumbnails[0].frames.slice(thumbNum);
              } else {
                thumbnailsClone = _this9.thumbnails[0].frames.slice(0, thumbNum).reverse();
              }

              var foundOne = false;
              thumbnailsClone.forEach(function (frame) {
                var newThumbFilename = frame.text;

                if (newThumbFilename !== oldThumbFilename) {
                  // Found one with a different filename. Make sure it hasn't already been loaded on this page visit
                  if (!_this9.loadedImages.includes(newThumbFilename)) {
                    foundOne = true;

                    _this9.player.debug.log("Preloading thumb filename: ".concat(newThumbFilename));

                    var urlPrefix = _this9.thumbnails[0].urlPrefix;
                    var thumbURL = urlPrefix + newThumbFilename;
                    var previewImage = new Image();
                    previewImage.src = thumbURL;

                    previewImage.onload = function () {
                      _this9.player.debug.log("Preloaded thumb filename: ".concat(newThumbFilename));

                      if (!_this9.loadedImages.includes(newThumbFilename)) _this9.loadedImages.push(newThumbFilename); // We don't resolve until the thumb is loaded

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
      } // If user has been hovering current image for half a second, look for a higher quality one

    }, {
      key: "getHigherQuality",
      value: function getHigherQuality(currentQualityIndex, previewImage, frame, thumbFilename) {
        var _this10 = this;

        if (currentQualityIndex < this.thumbnails.length - 1) {
          // Only use the higher quality version if it's going to look any better - if the current thumb is of a lower pixel density than the thumbnail container
          var previewImageHeight = previewImage.naturalHeight;

          if (this.usingSprites) {
            previewImageHeight = frame.h;
          }

          if (previewImageHeight < this.thumbContainerHeight) {
            // Recurse back to the loadImage function - show a higher quality one, but only if the viewer is on this frame for a while
            setTimeout(function () {
              // Make sure the mouse hasn't already moved on and started hovering at another image
              if (_this10.showingThumbFilename === thumbFilename) {
                _this10.player.debug.log("Showing higher quality thumb for: ".concat(thumbFilename));

                _this10.loadImage(currentQualityIndex + 1);
              }
            }, 300);
          }
        }
      }
    }, {
      key: "toggleThumbContainer",
      value: function toggleThumbContainer() {
        var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var clearShowing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(className, toggle);

        if (!toggle && clearShowing) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      }
    }, {
      key: "toggleScrubbingContainer",
      value: function toggleScrubbingContainer() {
        var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(className, toggle);

        if (!toggle) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      }
    }, {
      key: "determineContainerAutoSizing",
      value: function determineContainerAutoSizing() {
        var thumb = this.elements.thumb;

        if (!is$1.empty(thumb) && (thumb.imageContainer.clientHeight > 20 || thumb.imageContainer.clientWidth > 20)) {
          // This will prevent auto sizing in this.setThumbContainerSizeAndPos()
          this.sizeSpecifiedInCSS = true;
        }
      } // Set the size to be about a quarter of the size of video. Unless option dynamicSize === false, in which case it needs to be set in CSS

    }, {
      key: "setThumbContainerSizeAndPos",
      value: function setThumbContainerSizeAndPos() {
        if (!this.sizeSpecifiedInCSS) {
          var thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px");
          this.elements.thumb.imageContainer.style.width = "".concat(thumbWidth, "px");
        } else if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
          var _thumbWidth = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);

          this.elements.thumb.imageContainer.style.width = "".concat(_thumbWidth, "px");
        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
          var thumbHeight = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = "".concat(thumbHeight, "px");
        }

        this.setThumbContainerPos();
      }
    }, {
      key: "setThumbContainerPos",
      value: function setThumbContainerPos() {
        var seekbarRect = this.player.elements.progress.getBoundingClientRect();
        var plyrRect = this.player.elements.container.getBoundingClientRect();
        var container = this.elements.thumb.container; // Find the lowest and highest desired left-position, so we don't slide out the side of the video container

        var minVal = plyrRect.left - seekbarRect.left + 10;
        var maxVal = plyrRect.right - seekbarRect.left - container.clientWidth - 10; // Set preview container position to: mousepos, minus seekbar.left, minus half of previewContainer.clientWidth

        var previewPos = this.mousePosX - seekbarRect.left - container.clientWidth / 2;

        if (previewPos < minVal) {
          previewPos = minVal;
        }

        if (previewPos > maxVal) {
          previewPos = maxVal;
        }

        container.style.left = "".concat(previewPos, "px");
      } // Can't use 100% width, in case the video is a different aspect ratio to the video container

    }, {
      key: "setScrubbingContainerSize",
      value: function setScrubbingContainerSize() {
        var _fitRatio = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }),
            width = _fitRatio.width,
            height = _fitRatio.height;

        this.elements.scrubbing.container.style.width = "".concat(width, "px");
        this.elements.scrubbing.container.style.height = "".concat(height, "px");
      } // Sprites need to be offset to the correct location

    }, {
      key: "setImageSizeAndOffset",
      value: function setImageSizeAndOffset(previewImage, frame) {
        if (!this.usingSprites) {
          return;
        }

        var container = this.editor ? this.player.editor.videoContainerHeight : this.thumbContainerHeight; // Find difference between height and preview container height

        var multiplier = container / frame.h; // eslint-disable-next-line no-param-reassign

        previewImage.style.height = "".concat(previewImage.naturalHeight * multiplier, "px"); // eslint-disable-next-line no-param-reassign

        previewImage.style.width = "".concat(previewImage.naturalWidth * multiplier, "px"); // eslint-disable-next-line no-param-reassign

        previewImage.style.left = "-".concat(frame.x * multiplier, "px"); // eslint-disable-next-line no-param-reassign

        previewImage.style.top = "-".concat(frame.y * multiplier, "px");
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
      }
    }, {
      key: "currentImageContainer",
      get: function get() {
        if (this.mouseDown) {
          return this.elements.scrubbing.container;
        }

        return this.elements.thumb.imageContainer;
      }
    }, {
      key: "usingSprites",
      get: function get() {
        return Object.keys(this.thumbnails[0].frames[0]).includes('w');
      }
    }, {
      key: "thumbAspectRatio",
      get: function get() {
        if (this.usingSprites) {
          return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
        }

        return this.thumbnails[0].width / this.thumbnails[0].height;
      }
    }, {
      key: "thumbContainerHeight",
      get: function get() {
        if (this.mouseDown) {
          var _fitRatio2 = fitRatio(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight
          }),
              height = _fitRatio2.height;

          return height;
        } // If css is used this needs to return the css height for sprites to work (see setImageSizeAndOffset)


        if (this.sizeSpecifiedInCSS) {
          return this.elements.thumb.imageContainer.clientHeight;
        }

        return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
      }
    }, {
      key: "currentImageElement",
      get: function get() {
        if (this.mouseDown) {
          return this.currentScrubbingImageElement;
        }

        return this.currentThumbnailImageElement;
      },
      set: function set(element) {
        if (this.mouseDown) {
          this.currentScrubbingImageElement = element;
        } else {
          this.currentThumbnailImageElement = element;
        }
      }
    }]);

    return PreviewThumbnails;
  }();

  var lodash=createCommonjsModule(function(module,exports){(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined$1;/** Used as the semantic version number. */var VERSION='4.17.20';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Error message constants. */var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1,WRAP_BIND_KEY_FLAG=2,WRAP_CURRY_BOUND_FLAG=4,WRAP_CURRY_FLAG=8,WRAP_CURRY_RIGHT_FLAG=16,WRAP_PARTIAL_FLAG=32,WRAP_PARTIAL_RIGHT_FLAG=64,WRAP_ARY_FLAG=128,WRAP_REARG_FLAG=256,WRAP_FLIP_FLAG=512;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG],['bind',WRAP_BIND_FLAG],['bindKey',WRAP_BIND_KEY_FLAG],['curry',WRAP_CURRY_FLAG],['curryRight',WRAP_CURRY_RIGHT_FLAG],['flip',WRAP_FLIP_FLAG],['partial',WRAP_PARTIAL_FLAG],['partialRight',WRAP_PARTIAL_RIGHT_FLAG],['rearg',WRAP_REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',asyncTag='[object AsyncFunction]',boolTag='[object Boolean]',dateTag='[object Date]',domExcTag='[object DOMException]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',nullTag='[object Null]',objectTag='[object Object]',promiseTag='[object Promise]',proxyTag='[object Proxy]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',undefinedTag='[object Undefined]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reUnescapedHtml=/[&<>"']/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
     * Used to match
     * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
     */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos="['\u2019]",rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper='['+rsUpperRange+']',rsZWJ="\\u200d";/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')',rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')',rsOptContrLower='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptContrUpper='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsOrdLower='\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',rsOrdUpper='\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
     * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
     * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
     */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
  '\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
  "\u0100":'A',"\u0102":'A',"\u0104":'A',"\u0101":'a',"\u0103":'a',"\u0105":'a',"\u0106":'C',"\u0108":'C',"\u010A":'C',"\u010C":'C',"\u0107":'c',"\u0109":'c',"\u010B":'c',"\u010D":'c',"\u010E":'D',"\u0110":'D',"\u010F":'d',"\u0111":'d',"\u0112":'E',"\u0114":'E',"\u0116":'E',"\u0118":'E',"\u011A":'E',"\u0113":'e',"\u0115":'e',"\u0117":'e',"\u0119":'e',"\u011B":'e',"\u011C":'G',"\u011E":'G',"\u0120":'G',"\u0122":'G',"\u011D":'g',"\u011F":'g',"\u0121":'g',"\u0123":'g',"\u0124":'H',"\u0126":'H',"\u0125":'h',"\u0127":'h',"\u0128":'I',"\u012A":'I',"\u012C":'I',"\u012E":'I',"\u0130":'I',"\u0129":'i',"\u012B":'i',"\u012D":'i',"\u012F":'i',"\u0131":'i',"\u0134":'J',"\u0135":'j',"\u0136":'K',"\u0137":'k',"\u0138":'k',"\u0139":'L',"\u013B":'L',"\u013D":'L',"\u013F":'L',"\u0141":'L',"\u013A":'l',"\u013C":'l',"\u013E":'l',"\u0140":'l',"\u0142":'l',"\u0143":'N',"\u0145":'N',"\u0147":'N',"\u014A":'N',"\u0144":'n',"\u0146":'n',"\u0148":'n',"\u014B":'n',"\u014C":'O',"\u014E":'O',"\u0150":'O',"\u014D":'o',"\u014F":'o',"\u0151":'o',"\u0154":'R',"\u0156":'R',"\u0158":'R',"\u0155":'r',"\u0157":'r',"\u0159":'r',"\u015A":'S',"\u015C":'S',"\u015E":'S',"\u0160":'S',"\u015B":'s',"\u015D":'s',"\u015F":'s',"\u0161":'s',"\u0162":'T',"\u0164":'T',"\u0166":'T',"\u0163":'t',"\u0165":'t',"\u0167":'t',"\u0168":'U',"\u016A":'U',"\u016C":'U',"\u016E":'U',"\u0170":'U',"\u0172":'U',"\u0169":'u',"\u016B":'u',"\u016D":'u',"\u016F":'u',"\u0171":'u',"\u0173":'u',"\u0174":'W',"\u0175":'w',"\u0176":'Y',"\u0177":'y',"\u0178":'Y',"\u0179":'Z',"\u017B":'Z',"\u017D":'Z',"\u017A":'z',"\u017C":'z',"\u017E":'z',"\u0132":'IJ',"\u0133":'ij',"\u0152":'Oe',"\u0153":'oe',"\u0149":"'n","\u017F":'s'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r',"\u2028":'u2028',"\u2029":'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=_typeof(commonjsGlobal)=='object'&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal;/** Detect free variable `self`. */var freeSelf=(typeof self==="undefined"?"undefined":_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&'object'=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{// Use `util.types` for Node.js 10+.
  var types=freeModule&&freeModule.require&&freeModule.require('util').types;if(types){return types;}// Legacy `process.binding('util')` for Node.js < 10.
  return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*/ /**
     * A faster alternative to `Function#apply`, this function invokes `func`
     * with the `this` binding of `thisArg` and the arguments of `args`.
     *
     * @private
     * @param {Function} func The function to invoke.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} args The arguments to invoke `func` with.
     * @returns {*} Returns the result of `func`.
     */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
     * A specialized version of `baseAggregator` for arrays.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
     * A specialized version of `_.forEach` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
     * A specialized version of `_.forEachRight` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
     * A specialized version of `_.every` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
     * A specialized version of `_.filter` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
     * A specialized version of `_.includes` for arrays without support for
     * specifying an index to search from.
     *
     * @private
     * @param {Array} [array] The array to inspect.
     * @param {*} target The value to search for.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */function arrayIncludes(array,value){var length=array==null?0:array.length;return !!length&&baseIndexOf(array,value,0)>-1;}/**
     * This function is like `arrayIncludes` except that it accepts a comparator.
     *
     * @private
     * @param {Array} [array] The array to inspect.
     * @param {*} target The value to search for.
     * @param {Function} comparator The comparator invoked per element.
     * @returns {boolean} Returns `true` if `target` is found, else `false`.
     */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
     * A specialized version of `_.map` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
     * A specialized version of `_.reduce` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the first element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
     * A specialized version of `_.reduceRight` for arrays without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initAccum] Specify using the last element of `array` as
     *  the initial value.
     * @returns {*} Returns the accumulated value.
     */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
     * A specialized version of `_.some` for arrays without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} [array] The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
     * Gets the size of an ASCII `string`.
     *
     * @private
     * @param {string} string The string inspect.
     * @returns {number} Returns the string size.
     */var asciiSize=baseProperty('length');/**
     * Converts an ASCII `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */function asciiToArray(string){return string.split('');}/**
     * Splits an ASCII `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
     * The base implementation of methods like `_.findKey` and `_.findLastKey`,
     * without support for iteratee shorthands, which iterates over `collection`
     * using `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
     * The base implementation of `_.findIndex` and `_.findLastIndex` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} predicate The function invoked per iteration.
     * @param {number} fromIndex The index to search from.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return -1;}/**
     * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}/**
     * This function is like `baseIndexOf` except that it accepts a comparator.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @param {Function} comparator The comparator invoked per element.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return -1;}/**
     * The base implementation of `_.isNaN` without support for number objects.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     */function baseIsNaN(value){return value!==value;}/**
     * The base implementation of `_.mean` and `_.meanBy` without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the mean.
     */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN;}/**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new accessor function.
     */function baseProperty(key){return function(object){return object==null?undefined$1:object[key];};}/**
     * The base implementation of `_.propertyOf` without support for deep paths.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     */function basePropertyOf(object){return function(key){return object==null?undefined$1:object[key];};}/**
     * The base implementation of `_.reduce` and `_.reduceRight`, without support
     * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initAccum Specify using the first or last element of
     *  `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
     * The base implementation of `_.sortBy` which uses `comparer` to define the
     * sort order of `array` and replaces criteria objects with their corresponding
     * values.
     *
     * @private
     * @param {Array} array The array to sort.
     * @param {Function} comparer The function to define sort order.
     * @returns {Array} Returns `array`.
     */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
     * The base implementation of `_.sum` and `_.sumBy` without support for
     * iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined$1){result=result===undefined$1?current:result+current;}}return result;}/**
     * The base implementation of `_.times` without support for iteratee shorthands
     * or max array length checks.
     *
     * @private
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
     * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
     * of key-value pairs for `object` corresponding to the property names of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the key-value pairs.
     */function baseToPairs(object,props){return arrayMap(props,function(key){return [key,object[key]];});}/**
     * The base implementation of `_.unary` without support for storing metadata.
     *
     * @private
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     */function baseUnary(func){return function(value){return func(value);};}/**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
     * Checks if a `cache` value for `key` exists.
     *
     * @private
     * @param {Object} cache The cache to query.
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function cacheHas(cache,key){return cache.has(key);}/**
     * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
     * that is not found in the character symbols.
     *
     * @private
     * @param {Array} strSymbols The string symbols to inspect.
     * @param {Array} chrSymbols The character symbols to find.
     * @returns {number} Returns the index of the first unmatched string symbol.
     */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
     * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
     * that is not found in the character symbols.
     *
     * @private
     * @param {Array} strSymbols The string symbols to inspect.
     * @param {Array} chrSymbols The character symbols to find.
     * @returns {number} Returns the index of the last unmatched string symbol.
     */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
     * Gets the number of `placeholder` occurrences in `array`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} placeholder The placeholder to search for.
     * @returns {number} Returns the placeholder count.
     */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}/**
     * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
     * letters to basic Latin letters.
     *
     * @private
     * @param {string} letter The matched letter to deburr.
     * @returns {string} Returns the deburred letter.
     */var deburrLetter=basePropertyOf(deburredLetters);/**
     * Used by `_.escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
     * Used by `_.template` to escape characters for inclusion in compiled string literals.
     *
     * @private
     * @param {string} chr The matched character to escape.
     * @returns {string} Returns the escaped character.
     */function escapeStringChar(chr){return '\\'+stringEscapes[chr];}/**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */function getValue(object,key){return object==null?undefined$1:object[key];}/**
     * Checks if `string` contains Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a symbol is found, else `false`.
     */function hasUnicode(string){return reHasUnicode.test(string);}/**
     * Checks if `string` contains a word composed of Unicode symbols.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {boolean} Returns `true` if a word is found, else `false`.
     */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
     * Converts `iterator` to an array.
     *
     * @private
     * @param {Object} iterator The iterator to convert.
     * @returns {Array} Returns the converted array.
     */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
     * Converts `map` to its key-value pairs.
     *
     * @private
     * @param {Object} map The map to convert.
     * @returns {Array} Returns the key-value pairs.
     */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
     * Creates a unary function that invokes `func` with its argument transformed.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {Function} transform The argument transform.
     * @returns {Function} Returns the new function.
     */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
     * Replaces all `placeholder` elements in `array` with an internal placeholder
     * and returns an array of their indexes.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {*} placeholder The placeholder to replace.
     * @returns {Array} Returns the new array of placeholder indexes.
     */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
     * Converts `set` to an array of its values.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the values.
     */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
     * Converts `set` to its value-value pairs.
     *
     * @private
     * @param {Object} set The set to convert.
     * @returns {Array} Returns the value-value pairs.
     */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
     * A specialized version of `_.indexOf` which performs strict equality
     * comparisons of values, i.e. `===`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return -1;}/**
     * A specialized version of `_.lastIndexOf` which performs strict equality
     * comparisons of values, i.e. `===`.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} fromIndex The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}/**
     * Gets the number of symbols in `string`.
     *
     * @private
     * @param {string} string The string to inspect.
     * @returns {number} Returns the string size.
     */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
     * Converts `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
     * Used by `_.unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} chr The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
     * Gets the size of a Unicode `string`.
     *
     * @private
     * @param {string} string The string inspect.
     * @returns {number} Returns the string size.
     */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}/**
     * Converts a Unicode `string` to an array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the converted array.
     */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
     * Splits a Unicode `string` into an array of its words.
     *
     * @private
     * @param {string} The string to inspect.
     * @returns {Array} Returns the words of `string`.
     */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*/ /**
     * Create a new pristine `lodash` function using the `context` object.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Util
     * @param {Object} [context=root] The context object.
     * @returns {Function} Returns a new `lodash` function.
     * @example
     *
     * _.mixin({ 'foo': _.constant('foo') });
     *
     * var lodash = _.runInContext();
     * lodash.mixin({ 'bar': lodash.constant('bar') });
     *
     * _.isFunction(_.foo);
     * // => true
     * _.isFunction(_.bar);
     * // => false
     *
     * lodash.isFunction(lodash.foo);
     * // => false
     * lodash.isFunction(lodash.bar);
     * // => true
     *
     * // Create a suped-up `defer` in Node.js.
     * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
     */var runInContext=function runInContext(context){context=context==null?root:_.defaults(root.Object(),context,_.pick(root,contextProps));/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
       * Used to resolve the
       * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
       * of values.
       */var nativeObjectToString=objectProto.toString;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined$1,_Symbol=context.Symbol,Uint8Array=context.Uint8Array,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined$1,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined$1,symIterator=_Symbol?_Symbol.iterator:undefined$1,symToStringTag=_Symbol?_Symbol.toStringTag:undefined$1;var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined$1,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeNow=Date.now,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined$1,symbolValueOf=symbolProto?symbolProto.valueOf:undefined$1,symbolToString=symbolProto?symbolProto.toString:undefined$1;/*------------------------------------------------------------------------*/ /**
       * Creates a `lodash` object which wraps `value` to enable implicit method
       * chain sequences. Methods that operate on and return arrays, collections,
       * and functions can be chained together. Methods that retrieve a single value
       * or may return a primitive value will automatically end the chain sequence
       * and return the unwrapped value. Otherwise, the value must be unwrapped
       * with `_#value`.
       *
       * Explicit chain sequences, which must be unwrapped with `_#value`, may be
       * enabled using `_.chain`.
       *
       * The execution of chained methods is lazy, that is, it's deferred until
       * `_#value` is implicitly or explicitly called.
       *
       * Lazy evaluation allows several methods to support shortcut fusion.
       * Shortcut fusion is an optimization to merge iteratee calls; this avoids
       * the creation of intermediate arrays and can greatly reduce the number of
       * iteratee executions. Sections of a chain sequence qualify for shortcut
       * fusion if the section is applied to an array and iteratees accept only
       * one argument. The heuristic for whether a section qualifies for shortcut
       * fusion is subject to change.
       *
       * Chaining is supported in custom builds as long as the `_#value` method is
       * directly or indirectly included in the build.
       *
       * In addition to lodash methods, wrappers have `Array` and `String` methods.
       *
       * The wrapper `Array` methods are:
       * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
       *
       * The wrapper `String` methods are:
       * `replace` and `split`
       *
       * The wrapper methods that support shortcut fusion are:
       * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
       * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
       * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
       *
       * The chainable wrapper methods are:
       * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
       * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
       * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
       * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
       * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
       * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
       * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
       * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
       * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
       * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
       * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
       * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
       * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
       * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
       * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
       * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
       * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
       * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
       * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
       * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
       * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
       * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
       * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
       * `zipObject`, `zipObjectDeep`, and `zipWith`
       *
       * The wrapper methods that are **not** chainable by default are:
       * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
       * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
       * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
       * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
       * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
       * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
       * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
       * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
       * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
       * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
       * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
       * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
       * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
       * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
       * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
       * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
       * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
       * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
       * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
       * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
       * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
       * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
       * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
       * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
       * `upperFirst`, `value`, and `words`
       *
       * @name _
       * @constructor
       * @category Seq
       * @param {*} value The value to wrap in a `lodash` instance.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var wrapped = _([1, 2, 3]);
       *
       * // Returns an unwrapped value.
       * wrapped.reduce(_.add);
       * // => 6
       *
       * // Returns a wrapped value.
       * var squares = wrapped.map(square);
       *
       * _.isArray(squares);
       * // => false
       *
       * _.isArray(squares.value());
       * // => true
       */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
       * The base implementation of `_.create` without support for assigning
       * properties to the created object.
       *
       * @private
       * @param {Object} proto The object to inherit from.
       * @returns {Object} Returns the new object.
       */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return {};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined$1;return result;};}();/**
       * The function whose prototype chain sequence wrappers inherit from.
       *
       * @private
       */function baseLodash(){// No operation performed.
  }/**
       * The base constructor for creating `lodash` wrapper objects.
       *
       * @private
       * @param {*} value The value to wrap.
       * @param {boolean} [chainAll] Enable explicit method chain sequences.
       */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined$1;}/**
       * By default, the template delimiters used by lodash are like those in
       * embedded Ruby (ERB) as well as ES2015 template strings. Change the
       * following template settings to use alternative delimiters.
       *
       * @static
       * @memberOf _
       * @type {Object}
       */lodash.templateSettings={/**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */'escape':reEscape,/**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */'evaluate':reEvaluate,/**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */'interpolate':reInterpolate,/**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */'variable':'',/**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */'imports':{/**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
  lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*/ /**
       * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
       *
       * @private
       * @constructor
       * @param {*} value The value to wrap.
       */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
       * Creates a clone of the lazy wrapper object.
       *
       * @private
       * @name clone
       * @memberOf LazyWrapper
       * @returns {Object} Returns the cloned `LazyWrapper` object.
       */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
       * Reverses the direction of lazy iteration.
       *
       * @private
       * @name reverse
       * @memberOf LazyWrapper
       * @returns {Object} Returns the new reversed `LazyWrapper` object.
       */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else {result=this.clone();result.__dir__*=-1;}return result;}/**
       * Extracts the unwrapped value from its lazy wrapper.
       *
       * @private
       * @name value
       * @memberOf LazyWrapper
       * @returns {*} Returns the unwrapped value.
       */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else {break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
  LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*/ /**
       * Creates a hash object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
       * Removes all key-value entries from the hash.
       *
       * @private
       * @name clear
       * @memberOf Hash
       */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}/**
       * Removes `key` and its value from the hash.
       *
       * @private
       * @name delete
       * @memberOf Hash
       * @param {Object} hash The hash to modify.
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}/**
       * Gets the hash value for `key`.
       *
       * @private
       * @name get
       * @memberOf Hash
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined$1:result;}return hasOwnProperty.call(data,key)?data[key]:undefined$1;}/**
       * Checks if a hash value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Hash
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined$1:hasOwnProperty.call(data,key);}/**
       * Sets the hash `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Hash
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the hash instance.
       */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined$1?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
  Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*/ /**
       * Creates an list cache object.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
       * Removes all key-value entries from the list cache.
       *
       * @private
       * @name clear
       * @memberOf ListCache
       */function listCacheClear(){this.__data__=[];this.size=0;}/**
       * Removes `key` and its value from the list cache.
       *
       * @private
       * @name delete
       * @memberOf ListCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else {splice.call(data,index,1);}--this.size;return true;}/**
       * Gets the list cache value for `key`.
       *
       * @private
       * @name get
       * @memberOf ListCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined$1:data[index][1];}/**
       * Checks if a list cache value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf ListCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
       * Sets the list cache `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf ListCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the list cache instance.
       */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else {data[index][1]=value;}return this;}// Add methods to `ListCache`.
  ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*/ /**
       * Creates a map cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
       * Removes all key-value entries from the map.
       *
       * @private
       * @name clear
       * @memberOf MapCache
       */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
       * Removes `key` and its value from the map.
       *
       * @private
       * @name delete
       * @memberOf MapCache
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}/**
       * Gets the map value for `key`.
       *
       * @private
       * @name get
       * @memberOf MapCache
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
       * Checks if a map value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf MapCache
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
       * Sets the map `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf MapCache
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the map cache instance.
       */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}// Add methods to `MapCache`.
  MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*/ /**
       *
       * Creates an array cache object to store unique values.
       *
       * @private
       * @constructor
       * @param {Array} [values] The values to cache.
       */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
       * Adds `value` to the array cache.
       *
       * @private
       * @name add
       * @memberOf SetCache
       * @alias push
       * @param {*} value The value to cache.
       * @returns {Object} Returns the cache instance.
       */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
       * Checks if `value` is in the array cache.
       *
       * @private
       * @name has
       * @memberOf SetCache
       * @param {*} value The value to search for.
       * @returns {number} Returns `true` if `value` is found, else `false`.
       */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
  SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*/ /**
       * Creates a stack cache object to store key-value pairs.
       *
       * @private
       * @constructor
       * @param {Array} [entries] The key-value pairs to cache.
       */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}/**
       * Removes all key-value entries from the stack.
       *
       * @private
       * @name clear
       * @memberOf Stack
       */function stackClear(){this.__data__=new ListCache();this.size=0;}/**
       * Removes `key` and its value from the stack.
       *
       * @private
       * @name delete
       * @memberOf Stack
       * @param {string} key The key of the value to remove.
       * @returns {boolean} Returns `true` if the entry was removed, else `false`.
       */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}/**
       * Gets the stack value for `key`.
       *
       * @private
       * @name get
       * @memberOf Stack
       * @param {string} key The key of the value to get.
       * @returns {*} Returns the entry value.
       */function stackGet(key){return this.__data__.get(key);}/**
       * Checks if a stack value for `key` exists.
       *
       * @private
       * @name has
       * @memberOf Stack
       * @param {string} key The key of the entry to check.
       * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
       */function stackHas(key){return this.__data__.has(key);}/**
       * Sets the stack `key` to `value`.
       *
       * @private
       * @name set
       * @memberOf Stack
       * @param {string} key The key of the value to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns the stack cache instance.
       */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}// Add methods to `Stack`.
  Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*/ /**
       * Creates an array of the enumerable property names of the array-like `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @param {boolean} inherited Specify returning inherited property names.
       * @returns {Array} Returns the array of property names.
       */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
  key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
  isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
  isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
  isIndex(key,length)))){result.push(key);}}return result;}/**
       * A specialized version of `_.sample` for arrays.
       *
       * @private
       * @param {Array} array The array to sample.
       * @returns {*} Returns the random element.
       */function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined$1;}/**
       * A specialized version of `_.sampleSize` for arrays.
       *
       * @private
       * @param {Array} array The array to sample.
       * @param {number} n The number of elements to sample.
       * @returns {Array} Returns the random elements.
       */function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}/**
       * A specialized version of `_.shuffle` for arrays.
       *
       * @private
       * @param {Array} array The array to shuffle.
       * @returns {Array} Returns the new shuffled array.
       */function arrayShuffle(array){return shuffleSelf(copyArray(array));}/**
       * This function is like `assignValue` except that it doesn't assign
       * `undefined` values.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */function assignMergeValue(object,key,value){if(value!==undefined$1&&!eq(object[key],value)||value===undefined$1&&!(key in object)){baseAssignValue(object,key,value);}}/**
       * Assigns `value` to `key` of `object` if the existing value is not equivalent
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined$1&&!(key in object)){baseAssignValue(object,key,value);}}/**
       * Gets the index at which the `key` is found in `array` of key-value pairs.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {*} key The key to search for.
       * @returns {number} Returns the index of the matched value, else `-1`.
       */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return -1;}/**
       * Aggregates elements of `collection` on `accumulator` with keys transformed
       * by `iteratee` and values set by `setter`.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} setter The function to set `accumulator` values.
       * @param {Function} iteratee The iteratee to transform keys.
       * @param {Object} accumulator The initial aggregated object.
       * @returns {Function} Returns `accumulator`.
       */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
       * The base implementation of `_.assign` without support for multiple sources
       * or `customizer` functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @returns {Object} Returns `object`.
       */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
       * The base implementation of `_.assignIn` without support for multiple sources
       * or `customizer` functions.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @returns {Object} Returns `object`.
       */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}/**
       * The base implementation of `assignValue` and `assignMergeValue` without
       * value checks.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {string} key The key of the property to assign.
       * @param {*} value The value to assign.
       */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else {object[key]=value;}}/**
       * The base implementation of `_.at` without support for individual paths.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {string[]} paths The property paths to pick.
       * @returns {Array} Returns the picked elements.
       */function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined$1:get(object,paths[index]);}return result;}/**
       * The base implementation of `_.clamp` which doesn't coerce arguments.
       *
       * @private
       * @param {number} number The number to clamp.
       * @param {number} [lower] The lower bound.
       * @param {number} upper The upper bound.
       * @returns {number} Returns the clamped number.
       */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined$1){number=number<=upper?number:upper;}if(lower!==undefined$1){number=number>=lower?number:lower;}}return number;}/**
       * The base implementation of `_.clone` and `_.cloneDeep` which tracks
       * traversed objects.
       *
       * @private
       * @param {*} value The value to clone.
       * @param {boolean} bitmask The bitmask flags.
       *  1 - Deep clone
       *  2 - Flatten inherited properties
       *  4 - Clone symbols
       * @param {Function} [customizer] The function to customize cloning.
       * @param {string} [key] The key of `value`.
       * @param {Object} [object] The parent object of `value`.
       * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
       * @returns {*} Returns the cloned value.
       */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined$1){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else {var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else {if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,isDeep);}}// Check for circular references and return its corresponding clone.
  stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(isSet(value)){value.forEach(function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack));});}else if(isMap(value)){value.forEach(function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack));});}var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined$1:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
  assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}/**
       * The base implementation of `_.conforms` which doesn't clone `source`.
       *
       * @private
       * @param {Object} source The object of property predicates to conform to.
       * @returns {Function} Returns the new spec function.
       */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
       * The base implementation of `_.conformsTo` which accepts `props` to check.
       *
       * @private
       * @param {Object} object The object to inspect.
       * @param {Object} source The object of property predicates to conform to.
       * @returns {boolean} Returns `true` if `object` conforms, else `false`.
       */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return !length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined$1&&!(key in object)||!predicate(value)){return false;}}return true;}/**
       * The base implementation of `_.delay` and `_.defer` which accepts `args`
       * to provide to `func`.
       *
       * @private
       * @param {Function} func The function to delay.
       * @param {number} wait The number of milliseconds to delay invocation.
       * @param {Array} args The arguments to provide to `func`.
       * @returns {number|Object} Returns the timer id or timeout object.
       */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined$1,args);},wait);}/**
       * The base implementation of methods like `_.difference` without support
       * for excluding multiple arrays or iteratee shorthands.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {Array} values The values to exclude.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
       * The base implementation of `_.forEach` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array|Object} Returns `collection`.
       */var baseEach=createBaseEach(baseForOwn);/**
       * The base implementation of `_.forEachRight` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array|Object} Returns `collection`.
       */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
       * The base implementation of `_.every` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {boolean} Returns `true` if all elements pass the predicate check,
       *  else `false`
       */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
       * The base implementation of methods like `_.max` and `_.min` which accepts a
       * `comparator` to determine the extremum value.
       *
       * @private
       * @param {Array} array The array to iterate over.
       * @param {Function} iteratee The iteratee invoked per iteration.
       * @param {Function} comparator The comparator used to compare values.
       * @returns {*} Returns the extremum value.
       */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined$1?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
       * The base implementation of `_.fill` without an iteratee call guard.
       *
       * @private
       * @param {Array} array The array to fill.
       * @param {*} value The value to fill `array` with.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns `array`.
       */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined$1||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
       * The base implementation of `_.filter` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {Array} Returns the new filtered array.
       */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
       * The base implementation of `_.flatten` with support for restricting flattening.
       *
       * @private
       * @param {Array} array The array to flatten.
       * @param {number} depth The maximum recursion depth.
       * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
       * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
       * @param {Array} [result=[]] The initial result value.
       * @returns {Array} Returns the new flattened array.
       */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
  baseFlatten(value,depth-1,predicate,isStrict,result);}else {arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
       * The base implementation of `baseForOwn` which iterates over `object`
       * properties returned by `keysFunc` and invokes `iteratee` for each property.
       * Iteratee functions may exit iteration early by explicitly returning `false`.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */var baseFor=createBaseFor();/**
       * This function is like `baseFor` except that it iterates over properties
       * in the opposite order.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @returns {Object} Returns `object`.
       */var baseForRight=createBaseFor(true);/**
       * The base implementation of `_.forOwn` without support for iteratee shorthands.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Object} Returns `object`.
       */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
       * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Object} Returns `object`.
       */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
       * The base implementation of `_.functions` which creates an array of
       * `object` function property names filtered from `props`.
       *
       * @private
       * @param {Object} object The object to inspect.
       * @param {Array} props The property names to filter.
       * @returns {Array} Returns the function names.
       */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
       * The base implementation of `_.get` without support for default values.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the property to get.
       * @returns {*} Returns the resolved value.
       */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined$1;}/**
       * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
       * `keysFunc` and `symbolsFunc` to get the enumerable property names and
       * symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Function} keysFunc The function to get the keys of `object`.
       * @param {Function} symbolsFunc The function to get the symbols of `object`.
       * @returns {Array} Returns the array of property names and symbols.
       */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
       * The base implementation of `getTag` without fallbacks for buggy environments.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */function baseGetTag(value){if(value==null){return value===undefined$1?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
       * The base implementation of `_.gt` which doesn't coerce arguments.
       *
       * @private
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than `other`,
       *  else `false`.
       */function baseGt(value,other){return value>other;}/**
       * The base implementation of `_.has` without support for deep paths.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {Array|string} key The key to check.
       * @returns {boolean} Returns `true` if `key` exists, else `false`.
       */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
       * The base implementation of `_.hasIn` without support for deep paths.
       *
       * @private
       * @param {Object} [object] The object to query.
       * @param {Array|string} key The key to check.
       * @returns {boolean} Returns `true` if `key` exists, else `false`.
       */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
       * The base implementation of `_.inRange` which doesn't coerce arguments.
       *
       * @private
       * @param {number} number The number to check.
       * @param {number} start The start of the range.
       * @param {number} end The end of the range.
       * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
       */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
       * The base implementation of methods like `_.intersection`, without support
       * for iteratee shorthands, that accepts an array of arrays to inspect.
       *
       * @private
       * @param {Array} arrays The arrays to inspect.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of shared values.
       */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined$1;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
       * The base implementation of `_.invert` and `_.invertBy` which inverts
       * `object` with values transformed by `iteratee` and set by `setter`.
       *
       * @private
       * @param {Object} object The object to iterate over.
       * @param {Function} setter The function to set `accumulator` values.
       * @param {Function} iteratee The iteratee to transform values.
       * @param {Object} accumulator The initial inverted object.
       * @returns {Function} Returns `accumulator`.
       */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
       * The base implementation of `_.invoke` without support for individual
       * method arguments.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the method to invoke.
       * @param {Array} args The arguments to invoke the method with.
       * @returns {*} Returns the result of the invoked method.
       */function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined$1:apply(func,object,args);}/**
       * The base implementation of `_.isArguments`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}/**
       * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
       */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag;}/**
       * The base implementation of `_.isDate` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
       */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag;}/**
       * The base implementation of `_.isEqual` which supports partial comparisons
       * and tracks traversed objects.
       *
       * @private
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @param {boolean} bitmask The bitmask flags.
       *  1 - Unordered comparison
       *  2 - Partial comparison
       * @param {Function} [customizer] The function to customize comparisons.
       * @param {Object} [stack] Tracks traversed `value` and `other` objects.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}/**
       * A specialized version of `baseIsEqual` for arrays and objects which performs
       * deep comparisons and tracks traversed objects enabling objects with circular
       * references to be compared.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
       * @param {Function} customizer The function to customize comparisons.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Object} [stack] Tracks traversed `object` and `other` objects.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}/**
       * The base implementation of `_.isMap` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a map, else `false`.
       */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
       * The base implementation of `_.isMatch` without support for iteratee shorthands.
       *
       * @private
       * @param {Object} object The object to inspect.
       * @param {Object} source The object of property values to match.
       * @param {Array} matchData The property names, values, and compare flags to match.
       * @param {Function} [customizer] The function to customize comparisons.
       * @returns {boolean} Returns `true` if `object` is a match, else `false`.
       */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return !length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined$1&&!(key in object)){return false;}}else {var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined$1?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}/**
       * The base implementation of `_.isNative` without bad shim checks.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
       * The base implementation of `_.isRegExp` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
       */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag;}/**
       * The base implementation of `_.isSet` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a set, else `false`.
       */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
       * The base implementation of `_.isTypedArray` without Node.js optimizations.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}/**
       * The base implementation of `_.iteratee`.
       *
       * @private
       * @param {*} [value=_.identity] The value to convert to an iteratee.
       * @returns {Function} Returns the iteratee.
       */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if(typeof value=='function'){return value;}if(value==null){return identity;}if(_typeof(value)=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
       * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
       * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
       * The base implementation of `_.lt` which doesn't coerce arguments.
       *
       * @private
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than `other`,
       *  else `false`.
       */function baseLt(value,other){return value<other;}/**
       * The base implementation of `_.map` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} iteratee The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
       * The base implementation of `_.matches` which doesn't clone `source`.
       *
       * @private
       * @param {Object} source The object of property values to match.
       * @returns {Function} Returns the new spec function.
       */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
       * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
       *
       * @private
       * @param {string} path The path of the property to get.
       * @param {*} srcValue The value to match.
       * @returns {Function} Returns the new spec function.
       */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined$1&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}/**
       * The base implementation of `_.merge` without support for multiple sources.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {number} srcIndex The index of `source`.
       * @param {Function} [customizer] The function to customize merged values.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){stack||(stack=new Stack());if(isObject(srcValue)){baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else {var newValue=customizer?customizer(safeGet(object,key),srcValue,key+'',object,source,stack):undefined$1;if(newValue===undefined$1){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}/**
       * A specialized version of `baseMerge` for arrays and objects which performs
       * deep merges and tracks traversed objects enabling objects with circular
       * references to be merged.
       *
       * @private
       * @param {Object} object The destination object.
       * @param {Object} source The source object.
       * @param {string} key The key of the value to merge.
       * @param {number} srcIndex The index of `source`.
       * @param {Function} mergeFunc The function to merge values.
       * @param {Function} [customizer] The function to customize assigned values.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=safeGet(object,key),srcValue=safeGet(source,key),stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined$1;var isCommon=newValue===undefined$1;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else {newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||isFunction(objValue)){newValue=initCloneObject(srcValue);}}else {isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
  stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
       * The base implementation of `_.nth` which doesn't coerce arguments.
       *
       * @private
       * @param {Array} array The array to query.
       * @param {number} n The index of the element to return.
       * @returns {*} Returns the nth element of `array`.
       */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined$1;}/**
       * The base implementation of `_.orderBy` without param guards.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
       * @param {string[]} orders The sort orders of `iteratees`.
       * @returns {Array} Returns the new sorted array.
       */function baseOrderBy(collection,iteratees,orders){if(iteratees.length){iteratees=arrayMap(iteratees,function(iteratee){if(isArray(iteratee)){return function(value){return baseGet(value,iteratee.length===1?iteratee[0]:iteratee);};}return iteratee;});}else {iteratees=[identity];}var index=-1;iteratees=arrayMap(iteratees,baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return {'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
       * The base implementation of `_.pick` without support for individual
       * property identifiers.
       *
       * @private
       * @param {Object} object The source object.
       * @param {string[]} paths The property paths to pick.
       * @returns {Object} Returns the new object.
       */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}/**
       * The base implementation of  `_.pickBy` without support for iteratee shorthands.
       *
       * @private
       * @param {Object} object The source object.
       * @param {string[]} paths The property paths to pick.
       * @param {Function} predicate The function invoked per property.
       * @returns {Object} Returns the new object.
       */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}/**
       * A specialized version of `baseProperty` which supports deep paths.
       *
       * @private
       * @param {Array|string} path The path of the property to get.
       * @returns {Function} Returns the new accessor function.
       */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
       * The base implementation of `_.pullAllBy` without support for iteratee
       * shorthands.
       *
       * @private
       * @param {Array} array The array to modify.
       * @param {Array} values The values to remove.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns `array`.
       */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
       * The base implementation of `_.pullAt` without support for individual
       * indexes or capturing the removed elements.
       *
       * @private
       * @param {Array} array The array to modify.
       * @param {number[]} indexes The indexes of elements to remove.
       * @returns {Array} Returns `array`.
       */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else {baseUnset(array,index);}}}return array;}/**
       * The base implementation of `_.random` without support for returning
       * floating-point numbers.
       *
       * @private
       * @param {number} lower The lower bound.
       * @param {number} upper The upper bound.
       * @returns {number} Returns the random number.
       */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
       * The base implementation of `_.range` and `_.rangeRight` which doesn't
       * coerce arguments.
       *
       * @private
       * @param {number} start The start of the range.
       * @param {number} end The end of the range.
       * @param {number} step The value to increment or decrement by.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Array} Returns the range of numbers.
       */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
       * The base implementation of `_.repeat` which doesn't coerce arguments.
       *
       * @private
       * @param {string} string The string to repeat.
       * @param {number} n The number of times to repeat the string.
       * @returns {string} Returns the repeated string.
       */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
  do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
       * The base implementation of `_.rest` which doesn't validate or coerce arguments.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}/**
       * The base implementation of `_.sample`.
       *
       * @private
       * @param {Array|Object} collection The collection to sample.
       * @returns {*} Returns the random element.
       */function baseSample(collection){return arraySample(values(collection));}/**
       * The base implementation of `_.sampleSize` without param guards.
       *
       * @private
       * @param {Array|Object} collection The collection to sample.
       * @param {number} n The number of elements to sample.
       * @returns {Array} Returns the random elements.
       */function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}/**
       * The base implementation of `_.set`.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to set.
       * @param {*} value The value to set.
       * @param {Function} [customizer] The function to customize path creation.
       * @returns {Object} Returns `object`.
       */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(key==='__proto__'||key==='constructor'||key==='prototype'){return object;}if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined$1;if(newValue===undefined$1){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
       * The base implementation of `setData` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to associate metadata with.
       * @param {*} data The metadata.
       * @returns {Function} Returns `func`.
       */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
       * The base implementation of `setToString` without support for hot loop shorting.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};/**
       * The base implementation of `_.shuffle`.
       *
       * @private
       * @param {Array|Object} collection The collection to shuffle.
       * @returns {Array} Returns the new shuffled array.
       */function baseShuffle(collection){return shuffleSelf(values(collection));}/**
       * The base implementation of `_.slice` without an iteratee call guard.
       *
       * @private
       * @param {Array} array The array to slice.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns the slice of `array`.
       */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
       * The base implementation of `_.some` without support for iteratee shorthands.
       *
       * @private
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} predicate The function invoked per iteration.
       * @returns {boolean} Returns `true` if any element passes the predicate check,
       *  else `false`.
       */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return !result;});return !!result;}/**
       * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
       * performs a binary search of `array` to determine the index at which `value`
       * should be inserted into `array` in order to maintain its sort order.
       *
       * @private
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {boolean} [retHighest] Specify returning the highest qualified index.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else {high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
       * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
       * which invokes `iteratee` for `value` and each element of `array` to compute
       * their sort ranking. The iteratee is invoked with one argument; (value).
       *
       * @private
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {Function} iteratee The iteratee invoked per element.
       * @param {boolean} [retHighest] Specify returning the highest qualified index.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       */function baseSortedIndexBy(array,value,iteratee,retHighest){var low=0,high=array==null?0:array.length;if(high===0){return 0;}value=iteratee(value);var valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined$1;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined$1,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else {setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else {high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
       * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
       * support for iteratee shorthands.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @returns {Array} Returns the new duplicate free array.
       */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
       * The base implementation of `_.toNumber` which doesn't ensure correct
       * conversions of binary, hexadecimal, or octal string values.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {number} Returns the number.
       */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return +value;}/**
       * The base implementation of `_.toString` which doesn't convert nullish
       * values to empty strings.
       *
       * @private
       * @param {*} value The value to process.
       * @returns {string} Returns the string.
       */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
  if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
  return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
       * The base implementation of `_.uniqBy` without support for iteratee shorthands.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new duplicate free array.
       */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else {seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
       * The base implementation of `_.unset`.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {Array|string} path The property path to unset.
       * @returns {boolean} Returns `true` if the property is deleted, else `false`.
       */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}/**
       * The base implementation of `_.update`.
       *
       * @private
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to update.
       * @param {Function} updater The function to produce the updated value.
       * @param {Function} [customizer] The function to customize path creation.
       * @returns {Object} Returns `object`.
       */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
       * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
       * without support for iteratee shorthands.
       *
       * @private
       * @param {Array} array The array to query.
       * @param {Function} predicate The function invoked per iteration.
       * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Array} Returns the slice of `array`.
       */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
       * The base implementation of `wrapperValue` which returns the result of
       * performing a sequence of actions on the unwrapped `value`, where each
       * successive action is supplied the return value of the previous.
       *
       * @private
       * @param {*} value The unwrapped value.
       * @param {Array} actions Actions to perform to resolve the unwrapped value.
       * @returns {*} Returns the resolved value.
       */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
       * The base implementation of methods like `_.xor`, without support for
       * iteratee shorthands, that accepts an array of arrays to inspect.
       *
       * @private
       * @param {Array} arrays The arrays to inspect.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of values.
       */function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}/**
       * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
       *
       * @private
       * @param {Array} props The property identifiers.
       * @param {Array} values The property values.
       * @param {Function} assignFunc The function to assign values.
       * @returns {Object} Returns the new object.
       */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined$1;assignFunc(result,props[index],value);}return result;}/**
       * Casts `value` to an empty array if it's not an array like object.
       *
       * @private
       * @param {*} value The value to inspect.
       * @returns {Array|Object} Returns the cast array-like object.
       */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
       * Casts `value` to `identity` if it's not a function.
       *
       * @private
       * @param {*} value The value to inspect.
       * @returns {Function} Returns cast function.
       */function castFunction(value){return typeof value=='function'?value:identity;}/**
       * Casts `value` to a path array if it's not one.
       *
       * @private
       * @param {*} value The value to inspect.
       * @param {Object} [object] The object to query keys on.
       * @returns {Array} Returns the cast property path array.
       */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}/**
       * A `baseRest` alias which can be replaced with `identity` by module
       * replacement plugins.
       *
       * @private
       * @type {Function}
       * @param {Function} func The function to apply a rest parameter to.
       * @returns {Function} Returns the new function.
       */var castRest=baseRest;/**
       * Casts `array` to a slice if it's needed.
       *
       * @private
       * @param {Array} array The array to inspect.
       * @param {number} start The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns the cast slice.
       */function castSlice(array,start,end){var length=array.length;end=end===undefined$1?length:end;return !start&&end>=length?array:baseSlice(array,start,end);}/**
       * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
       *
       * @private
       * @param {number|Object} id The timer id or timeout object of the timer to clear.
       */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
       * Creates a clone of  `buffer`.
       *
       * @private
       * @param {Buffer} buffer The buffer to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Buffer} Returns the cloned buffer.
       */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}/**
       * Creates a clone of `arrayBuffer`.
       *
       * @private
       * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
       * @returns {ArrayBuffer} Returns the cloned array buffer.
       */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
       * Creates a clone of `dataView`.
       *
       * @private
       * @param {Object} dataView The data view to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the cloned data view.
       */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
       * Creates a clone of `regexp`.
       *
       * @private
       * @param {Object} regexp The regexp to clone.
       * @returns {Object} Returns the cloned regexp.
       */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
       * Creates a clone of the `symbol` object.
       *
       * @private
       * @param {Object} symbol The symbol object to clone.
       * @returns {Object} Returns the cloned symbol object.
       */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
       * Creates a clone of `typedArray`.
       *
       * @private
       * @param {Object} typedArray The typed array to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the cloned typed array.
       */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
       * Compares values to sort them in ascending order.
       *
       * @private
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {number} Returns the sort order indicator for `value`.
       */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined$1,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined$1,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return -1;}}return 0;}/**
       * Used by `_.orderBy` to compare multiple properties of a value to another
       * and stable sort them.
       *
       * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
       * specify an order of "desc" for descending or "asc" for ascending sort order
       * of corresponding values.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {boolean[]|string[]} orders The order to sort by for each property.
       * @returns {number} Returns the sort order indicator for `object`.
       */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index-other.index;}/**
       * Creates an array that is the composition of partially applied arguments,
       * placeholders, and provided arguments into a single array of arguments.
       *
       * @private
       * @param {Array} args The provided arguments.
       * @param {Array} partials The arguments to prepend to those provided.
       * @param {Array} holders The `partials` placeholder indexes.
       * @params {boolean} [isCurried] Specify composing for a curried function.
       * @returns {Array} Returns the new array of composed arguments.
       */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
       * This function is like `composeArgs` except that the arguments composition
       * is tailored for `_.partialRight`.
       *
       * @private
       * @param {Array} args The provided arguments.
       * @param {Array} partials The arguments to append to those provided.
       * @param {Array} holders The `partials` placeholder indexes.
       * @params {boolean} [isCurried] Specify composing for a curried function.
       * @returns {Array} Returns the new array of composed arguments.
       */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
       * Copies the values of `source` to `array`.
       *
       * @private
       * @param {Array} source The array to copy values from.
       * @param {Array} [array=[]] The array to copy values to.
       * @returns {Array} Returns `array`.
       */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
       * Copies properties of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy properties from.
       * @param {Array} props The property identifiers to copy.
       * @param {Object} [object={}] The object to copy properties to.
       * @param {Function} [customizer] The function to customize copied values.
       * @returns {Object} Returns `object`.
       */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined$1;if(newValue===undefined$1){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else {assignValue(object,key,newValue);}}return object;}/**
       * Copies own symbols of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy symbols from.
       * @param {Object} [object={}] The object to copy symbols to.
       * @returns {Object} Returns `object`.
       */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
       * Copies own and inherited symbols of `source` to `object`.
       *
       * @private
       * @param {Object} source The object to copy symbols from.
       * @param {Object} [object={}] The object to copy symbols to.
       * @returns {Object} Returns `object`.
       */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}/**
       * Creates a function like `_.groupBy`.
       *
       * @private
       * @param {Function} setter The function to set accumulator values.
       * @param {Function} [initializer] The accumulator object initializer.
       * @returns {Function} Returns the new aggregator function.
       */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
       * Creates a function like `_.assign`.
       *
       * @private
       * @param {Function} assigner The function to assign values.
       * @returns {Function} Returns the new assigner function.
       */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined$1,guard=length>2?sources[2]:undefined$1;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined$1;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined$1:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
       * Creates a `baseEach` or `baseEachRight` function.
       *
       * @private
       * @param {Function} eachFunc The function to iterate over a collection.
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new base function.
       */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
       * Creates a base function for methods like `_.forIn` and `_.forOwn`.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new base function.
       */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
       * Creates a function that wraps `func` to invoke it with the optional `this`
       * binding of `thisArg`.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @returns {Function} Returns the new wrapped function.
       */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
       * Creates a function like `_.lowerFirst`.
       *
       * @private
       * @param {string} methodName The name of the `String` case method to use.
       * @returns {Function} Returns the new case function.
       */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined$1;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
       * Creates a function like `_.camelCase`.
       *
       * @private
       * @param {Function} callback The function to combine each word.
       * @returns {Function} Returns the new compounder function.
       */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
       * Creates a function that produces an instance of `Ctor` regardless of
       * whether it was invoked as part of a `new` expression or by `call` or `apply`.
       *
       * @private
       * @param {Function} Ctor The constructor to wrap.
       * @returns {Function} Returns the new wrapped function.
       */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
  // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
  // for more details.
  var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
  // See https://es5.github.io/#x13.2.2 for more details.
  return isObject(result)?result:thisBinding;};}/**
       * Creates a function that wraps `func` to enable currying.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @param {number} arity The arity of `func`.
       * @returns {Function} Returns the new wrapped function.
       */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined$1,args,holders,undefined$1,undefined$1,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
       * Creates a `_.find` or `_.findLast` function.
       *
       * @private
       * @param {Function} findIndexFunc The function to find the collection index.
       * @returns {Function} Returns the new find function.
       */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined$1;};}/**
       * Creates a `_.flow` or `_.flowRight` function.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new flow function.
       */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined$1;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG|WRAP_CURRY_FLAG|WRAP_PARTIAL_FLAG|WRAP_REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else {wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
       * Creates a function that wraps `func` to invoke it with optional `this`
       * binding of `thisArg`, partial application, and currying.
       *
       * @private
       * @param {Function|string} func The function or method name to wrap.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param {Array} [partials] The arguments to prepend to those provided to
       *  the new function.
       * @param {Array} [holders] The `partials` placeholder indexes.
       * @param {Array} [partialsRight] The arguments to append to those provided
       *  to the new function.
       * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
       * @param {Array} [argPos] The argument positions of the new function.
       * @param {number} [ary] The arity cap of `func`.
       * @param {number} [arity] The arity of `func`.
       * @returns {Function} Returns the new wrapped function.
       */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG,isBind=bitmask&WRAP_BIND_FLAG,isBindKey=bitmask&WRAP_BIND_KEY_FLAG,isCurried=bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined$1:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
       * Creates a function like `_.invertBy`.
       *
       * @private
       * @param {Function} setter The function to set accumulator values.
       * @param {Function} toIteratee The function to resolve iteratees.
       * @returns {Function} Returns the new inverter function.
       */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
       * Creates a function that performs a mathematical operation on two values.
       *
       * @private
       * @param {Function} operator The function to perform the operation.
       * @param {number} [defaultValue] The value used for `undefined` arguments.
       * @returns {Function} Returns the new mathematical operation function.
       */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined$1&&other===undefined$1){return defaultValue;}if(value!==undefined$1){result=value;}if(other!==undefined$1){if(result===undefined$1){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else {value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
       * Creates a function like `_.over`.
       *
       * @private
       * @param {Function} arrayFunc The function to iterate over iteratees.
       * @returns {Function} Returns the new over function.
       */function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
       * Creates the padding for `string` based on `length`. The `chars` string
       * is truncated if the number of characters exceeds `length`.
       *
       * @private
       * @param {number} length The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padding for `string`.
       */function createPadding(length,chars){chars=chars===undefined$1?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
       * Creates a function that wraps `func` to invoke it with the `this` binding
       * of `thisArg` and `partials` prepended to the arguments it receives.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {Array} partials The arguments to prepend to those provided to
       *  the new function.
       * @returns {Function} Returns the new wrapped function.
       */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
       * Creates a `_.range` or `_.rangeRight` function.
       *
       * @private
       * @param {boolean} [fromRight] Specify iterating from right to left.
       * @returns {Function} Returns the new range function.
       */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined$1;}// Ensure the sign of `-0` is preserved.
  start=toFinite(start);if(end===undefined$1){end=start;start=0;}else {end=toFinite(end);}step=step===undefined$1?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
       * Creates a function that performs a relational operation on two values.
       *
       * @private
       * @param {Function} operator The function to perform the operation.
       * @returns {Function} Returns the new relational operation function.
       */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
       * Creates a function that wraps `func` to continue currying.
       *
       * @private
       * @param {Function} func The function to wrap.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @param {Function} wrapFunc The function to create the `func` wrapper.
       * @param {*} placeholder The placeholder value.
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param {Array} [partials] The arguments to prepend to those provided to
       *  the new function.
       * @param {Array} [holders] The `partials` placeholder indexes.
       * @param {Array} [argPos] The argument positions of the new function.
       * @param {number} [ary] The arity cap of `func`.
       * @param {number} [arity] The arity of `func`.
       * @returns {Function} Returns the new wrapped function.
       */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG,newHolders=isCurry?holders:undefined$1,newHoldersRight=isCurry?undefined$1:holders,newPartials=isCurry?partials:undefined$1,newPartialsRight=isCurry?undefined$1:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG:WRAP_PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG:WRAP_PARTIAL_FLAG);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined$1,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
       * Creates a function like `_.round`.
       *
       * @private
       * @param {string} methodName The name of the `Math` method to use when rounding.
       * @returns {Function} Returns the new round function.
       */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin(toInteger(precision),292);if(precision&&nativeIsFinite(number)){// Shift with exponential notation to avoid floating-point issues.
  // See [MDN](https://mdn.io/round#Examples) for more details.
  var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return +(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
       * Creates a set object of `values`.
       *
       * @private
       * @param {Array} values The values to add to the set.
       * @returns {Object} Returns the new set.
       */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
       * Creates a `_.toPairs` or `_.toPairsIn` function.
       *
       * @private
       * @param {Function} keysFunc The function to get the keys of a given object.
       * @returns {Function} Returns the new pairs function.
       */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
       * Creates a function that either curries or invokes `func` with optional
       * `this` binding and partially applied arguments.
       *
       * @private
       * @param {Function|string} func The function or method name to wrap.
       * @param {number} bitmask The bitmask flags.
       *    1 - `_.bind`
       *    2 - `_.bindKey`
       *    4 - `_.curry` or `_.curryRight` of a bound function
       *    8 - `_.curry`
       *   16 - `_.curryRight`
       *   32 - `_.partial`
       *   64 - `_.partialRight`
       *  128 - `_.rearg`
       *  256 - `_.ary`
       *  512 - `_.flip`
       * @param {*} [thisArg] The `this` binding of `func`.
       * @param {Array} [partials] The arguments to be partially applied.
       * @param {Array} [holders] The `partials` placeholder indexes.
       * @param {Array} [argPos] The argument positions of the new function.
       * @param {number} [ary] The arity cap of `func`.
       * @param {number} [arity] The arity of `func`.
       * @returns {Function} Returns the new wrapped function.
       */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined$1;}ary=ary===undefined$1?ary:nativeMax(toInteger(ary),0);arity=arity===undefined$1?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined$1;}var data=isBindKey?undefined$1:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined$1?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else {result=createHybrid.apply(undefined$1,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
       * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
       * of source objects to the destination object for all destination properties
       * that resolve to `undefined`.
       *
       * @private
       * @param {*} objValue The destination value.
       * @param {*} srcValue The source value.
       * @param {string} key The key of the property to assign.
       * @param {Object} object The parent object of `objValue`.
       * @returns {*} Returns the value to assign.
       */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined$1||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
       * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
       * objects into destination objects that are passed thru.
       *
       * @private
       * @param {*} objValue The destination value.
       * @param {*} srcValue The source value.
       * @param {string} key The key of the property to merge.
       * @param {Object} object The parent object of `objValue`.
       * @param {Object} source The parent object of `srcValue`.
       * @param {Object} [stack] Tracks traversed source values and their merged
       *  counterparts.
       * @returns {*} Returns the value to assign.
       */function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
  stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined$1,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}/**
       * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
       * objects.
       *
       * @private
       * @param {*} value The value to inspect.
       * @param {string} key The key of the property to inspect.
       * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
       */function customOmitClone(value){return isPlainObject(value)?undefined$1:value;}/**
       * A specialized version of `baseIsEqualDeep` for arrays with support for
       * partial deep comparisons.
       *
       * @private
       * @param {Array} array The array to compare.
       * @param {Array} other The other array to compare.
       * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
       * @param {Function} customizer The function to customize comparisons.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Object} stack Tracks traversed `array` and `other` objects.
       * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
       */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Check that cyclic values are equal.
  var arrStacked=stack.get(array);var othStacked=stack.get(other);if(arrStacked&&othStacked){return arrStacked==other&&othStacked==array;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined$1;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
  while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined$1){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
  if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
       * A specialized version of `baseIsEqualDeep` for comparing objects of
       * the same `toStringTag`.
       *
       * **Note:** This function only supports comparing values with tags of
       * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {string} tag The `toStringTag` of the objects to compare.
       * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
       * @param {Function} customizer The function to customize comparisons.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Object} stack Tracks traversed `object` and `other` objects.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
  // Invalid dates are coerced to `NaN`.
  return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
  // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
  // for more details.
  return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
  var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
  stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
       * A specialized version of `baseIsEqualDeep` for objects with support for
       * partial deep comparisons.
       *
       * @private
       * @param {Object} object The object to compare.
       * @param {Object} other The other object to compare.
       * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
       * @param {Function} customizer The function to customize comparisons.
       * @param {Function} equalFunc The function to determine equivalents of values.
       * @param {Object} stack Tracks traversed `object` and `other` objects.
       * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
       */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Check that cyclic values are equal.
  var objStacked=stack.get(object);var othStacked=stack.get(other);if(objStacked&&othStacked){return objStacked==other&&othStacked==object;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
  if(!(compared===undefined$1?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
  if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
       * A specialized version of `baseRest` which flattens the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @returns {Function} Returns the new function.
       */function flatRest(func){return setToString(overRest(func,undefined$1,flatten),func+'');}/**
       * Creates an array of own enumerable property names and symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names and symbols.
       */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
       * Creates an array of own and inherited enumerable property names and
       * symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names and symbols.
       */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
       * Gets metadata for `func`.
       *
       * @private
       * @param {Function} func The function to query.
       * @returns {*} Returns the metadata for `func`.
       */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
       * Gets the name of `func`.
       *
       * @private
       * @param {Function} func The function to query.
       * @returns {string} Returns the function name.
       */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
       * Gets the argument placeholder value for `func`.
       *
       * @private
       * @param {Function} func The function to inspect.
       * @returns {*} Returns the placeholder value.
       */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
       * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
       * this function returns the custom method, otherwise it returns `baseIteratee`.
       * If arguments are provided, the chosen function is invoked with them and
       * its result is returned.
       *
       * @private
       * @param {*} [value] The value to convert to an iteratee.
       * @param {number} [arity] The arity of the created iteratee.
       * @returns {Function} Returns the chosen function or its result.
       */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
       * Gets the data for `map`.
       *
       * @private
       * @param {Object} map The map to query.
       * @param {string} key The reference key.
       * @returns {*} Returns the map data.
       */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
       * Gets the property names, values, and compare flags of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the match data of `object`.
       */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
       * Gets the native function at `key` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the method to get.
       * @returns {*} Returns the function if it's native, else `undefined`.
       */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined$1;}/**
       * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the raw `toStringTag`.
       */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined$1;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else {delete value[symToStringTag];}}return result;}/**
       * Creates an array of the own enumerable symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of symbols.
       */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return [];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};/**
       * Creates an array of the own and inherited enumerable symbols of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of symbols.
       */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
       * Gets the `toStringTag` of `value`.
       *
       * @private
       * @param {*} value The value to query.
       * @returns {string} Returns the `toStringTag`.
       */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined$1,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
       * Gets the view, applying any `transforms` to the `start` and `end` positions.
       *
       * @private
       * @param {number} start The start of the view.
       * @param {number} end The end of the view.
       * @param {Array} transforms The transformations to apply to the view.
       * @returns {Object} Returns an object containing the `start` and `end`
       *  positions of the view.
       */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return {'start':start,'end':end};}/**
       * Extracts wrapper details from the `source` body comment.
       *
       * @private
       * @param {string} source The source to inspect.
       * @returns {Array} Returns the wrapper details.
       */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
       * Checks if `path` exists on `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array|string} path The path to check.
       * @param {Function} hasFunc The function to check properties.
       * @returns {boolean} Returns `true` if `path` exists, else `false`.
       */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return !!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
       * Initializes an array clone.
       *
       * @private
       * @param {Array} array The array to clone.
       * @returns {Array} Returns the initialized clone.
       */function initCloneArray(array){var length=array.length,result=new array.constructor(length);// Add properties assigned by `RegExp#exec`.
  if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
       * Initializes an object clone.
       *
       * @private
       * @param {Object} object The object to clone.
       * @returns {Object} Returns the initialized clone.
       */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
       * Initializes an object clone based on its `toStringTag`.
       *
       * **Note:** This function only supports cloning values with tags of
       * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
       *
       * @private
       * @param {Object} object The object to clone.
       * @param {string} tag The `toStringTag` of the object to clone.
       * @param {boolean} [isDeep] Specify a deep clone.
       * @returns {Object} Returns the initialized clone.
       */function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return new Ctor();case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return new Ctor();case symbolTag:return cloneSymbol(object);}}/**
       * Inserts wrapper `details` in a comment at the top of the `source` body.
       *
       * @private
       * @param {string} source The source to modify.
       * @returns {Array} details The details to insert.
       * @returns {string} Returns the modified source.
       */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
       * Checks if `value` is a flattenable `arguments` object or array.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
       */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
       * Checks if `value` is a valid array-like index.
       *
       * @private
       * @param {*} value The value to check.
       * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
       * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
       */function isIndex(value,length){var type=_typeof(value);length=length==null?MAX_SAFE_INTEGER:length;return !!length&&(type=='number'||type!='symbol'&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
       * Checks if the given arguments are from an iteratee call.
       *
       * @private
       * @param {*} value The potential iteratee value argument.
       * @param {*} index The potential iteratee index or key argument.
       * @param {*} object The potential iteratee object argument.
       * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
       *  else `false`.
       */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
       * Checks if `value` is a property name and not a property path.
       *
       * @private
       * @param {*} value The value to check.
       * @param {Object} [object] The object to query keys on.
       * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
       */function isKey(value,object){if(isArray(value)){return false;}var type=_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
       * Checks if `value` is suitable for use as unique object key.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
       */function isKeyable(value){var type=_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
       * Checks if `func` has a lazy counterpart.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
       *  else `false`.
       */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return !!data&&func===data[0];}/**
       * Checks if `func` has its source masked.
       *
       * @private
       * @param {Function} func The function to check.
       * @returns {boolean} Returns `true` if `func` is masked, else `false`.
       */function isMasked(func){return !!maskSrcKey&&maskSrcKey in func;}/**
       * Checks if `func` is capable of being masked.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
       */var isMaskable=coreJsData?isFunction:stubFalse;/**
       * Checks if `value` is likely a prototype object.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
       */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
       * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
       *
       * @private
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` if suitable for strict
       *  equality comparisons, else `false`.
       */function isStrictComparable(value){return value===value&&!isObject(value);}/**
       * A specialized version of `matchesProperty` for source values suitable
       * for strict equality comparisons, i.e. `===`.
       *
       * @private
       * @param {string} key The key of the property to get.
       * @param {*} srcValue The value to match.
       * @returns {Function} Returns the new spec function.
       */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined$1||key in Object(object));};}/**
       * A specialized version of `_.memoize` which clears the memoized function's
       * cache when it exceeds `MAX_MEMOIZE_SIZE`.
       *
       * @private
       * @param {Function} func The function to have its output memoized.
       * @returns {Function} Returns the new memoized function.
       */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}/**
       * Merges the function metadata of `source` into `data`.
       *
       * Merging metadata reduces the number of wrappers used to invoke a function.
       * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
       * may be applied regardless of execution order. Methods like `_.ary` and
       * `_.rearg` modify function arguments, making the order in which they are
       * executed important, preventing the merging of metadata. However, we make
       * an exception for a safe combined case where curried functions have `_.ary`
       * and or `_.rearg` applied.
       *
       * @private
       * @param {Array} data The destination metadata.
       * @param {Array} source The source metadata.
       * @returns {Array} Returns `data`.
       */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG|WRAP_ARY_FLAG);var isCombo=srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_CURRY_FLAG||srcBitmask==WRAP_ARY_FLAG&&bitmask==WRAP_REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG|WRAP_REARG_FLAG)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG;// Exit early if metadata can't be merged.
  if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
  if(srcBitmask&WRAP_BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
  newBitmask|=bitmask&WRAP_BIND_FLAG?0:WRAP_CURRY_BOUND_FLAG;}// Compose partial arguments.
  var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
  value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
  value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
  if(srcBitmask&WRAP_ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
  if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
  data[0]=source[0];data[1]=newBitmask;return data;}/**
       * This function is like
       * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * except that it includes inherited enumerable properties.
       *
       * @private
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
       * Converts `value` to a string using `Object.prototype.toString`.
       *
       * @private
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       */function objectToString(value){return nativeObjectToString.call(value);}/**
       * A specialized version of `baseRest` which transforms the rest array.
       *
       * @private
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @param {Function} transform The rest array transform.
       * @returns {Function} Returns the new function.
       */function overRest(func,start,transform){start=nativeMax(start===undefined$1?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}/**
       * Gets the parent value at `path` of `object`.
       *
       * @private
       * @param {Object} object The object to query.
       * @param {Array} path The path to get the parent value of.
       * @returns {*} Returns the parent value.
       */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}/**
       * Reorder `array` according to the specified indexes where the element at
       * the first index is assigned as the first element, the element at
       * the second index is assigned as the second element, and so on.
       *
       * @private
       * @param {Array} array The array to reorder.
       * @param {Array} indexes The arranged array indexes.
       * @returns {Array} Returns `array`.
       */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined$1;}return array;}/**
       * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
       *
       * @private
       * @param {Object} object The object to query.
       * @param {string} key The key of the property to get.
       * @returns {*} Returns the property value.
       */function safeGet(object,key){if(key==='constructor'&&typeof object[key]==='function'){return;}if(key=='__proto__'){return;}return object[key];}/**
       * Sets metadata for `func`.
       *
       * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
       * period of time, it will trip its breaker and transition to an identity
       * function to avoid garbage collection pauses in V8. See
       * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
       * for more details.
       *
       * @private
       * @param {Function} func The function to associate metadata with.
       * @param {*} data The metadata.
       * @returns {Function} Returns `func`.
       */var setData=shortOut(baseSetData);/**
       * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
       *
       * @private
       * @param {Function} func The function to delay.
       * @param {number} wait The number of milliseconds to delay invocation.
       * @returns {number|Object} Returns the timer id or timeout object.
       */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
       * Sets the `toString` method of `func` to return `string`.
       *
       * @private
       * @param {Function} func The function to modify.
       * @param {Function} string The `toString` result.
       * @returns {Function} Returns `func`.
       */var setToString=shortOut(baseSetToString);/**
       * Sets the `toString` method of `wrapper` to mimic the source of `reference`
       * with wrapper details in a comment at the top of the source body.
       *
       * @private
       * @param {Function} wrapper The function to modify.
       * @param {Function} reference The reference function.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @returns {Function} Returns `wrapper`.
       */function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}/**
       * Creates a function that'll short out and invoke `identity` instead
       * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
       * milliseconds.
       *
       * @private
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new shortable function.
       */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else {count=0;}return func.apply(undefined$1,arguments);};}/**
       * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
       *
       * @private
       * @param {Array} array The array to shuffle.
       * @param {number} [size=array.length] The size of `array`.
       * @returns {Array} Returns `array`.
       */function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined$1?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}/**
       * Converts `string` to a property path array.
       *
       * @private
       * @param {string} string The string to convert.
       * @returns {Array} Returns the property path array.
       */var stringToPath=memoizeCapped(function(string){var result=[];if(string.charCodeAt(0)===46/* . */){result.push('');}string.replace(rePropName,function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,'$1'):number||match);});return result;});/**
       * Converts `value` to a string key if it's not a string or symbol.
       *
       * @private
       * @param {*} value The value to inspect.
       * @returns {string|symbol} Returns the key.
       */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
       * Converts `func` to its source code.
       *
       * @private
       * @param {Function} func The function to convert.
       * @returns {string} Returns the source code.
       */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return '';}/**
       * Updates wrapper `details` based on `bitmask` flags.
       *
       * @private
       * @returns {Array} details The details to modify.
       * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
       * @returns {Array} Returns `details`.
       */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
       * Creates a clone of `wrapper`.
       *
       * @private
       * @param {Object} wrapper The wrapper to clone.
       * @returns {Object} Returns the cloned wrapper.
       */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*/ /**
       * Creates an array of elements split into groups the length of `size`.
       * If `array` can't be split evenly, the final chunk will be the remaining
       * elements.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to process.
       * @param {number} [size=1] The length of each chunk
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the new array of chunks.
       * @example
       *
       * _.chunk(['a', 'b', 'c', 'd'], 2);
       * // => [['a', 'b'], ['c', 'd']]
       *
       * _.chunk(['a', 'b', 'c', 'd'], 3);
       * // => [['a', 'b', 'c'], ['d']]
       */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined$1){size=1;}else {size=nativeMax(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return [];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
       * Creates an array with all falsey values removed. The values `false`, `null`,
       * `0`, `""`, `undefined`, and `NaN` are falsey.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to compact.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.compact([0, 1, false, 2, '', 3]);
       * // => [1, 2, 3]
       */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
       * Creates a new array concatenating `array` with any additional arrays
       * and/or values.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to concatenate.
       * @param {...*} [values] The values to concatenate.
       * @returns {Array} Returns the new concatenated array.
       * @example
       *
       * var array = [1];
       * var other = _.concat(array, 2, [3], [[4]]);
       *
       * console.log(other);
       * // => [1, 2, 3, [4]]
       *
       * console.log(array);
       * // => [1]
       */function concat(){var length=arguments.length;if(!length){return [];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}/**
       * Creates an array of `array` values not included in the other given arrays
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons. The order and references of result values are
       * determined by the first array.
       *
       * **Note:** Unlike `_.pullAll`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       * @see _.without, _.xor
       * @example
       *
       * _.difference([2, 1], [2, 3]);
       * // => [1]
       */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
       * This method is like `_.difference` except that it accepts `iteratee` which
       * is invoked for each element of `array` and `values` to generate the criterion
       * by which they're compared. The order and references of result values are
       * determined by the first array. The iteratee is invoked with one argument:
       * (value).
       *
       * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The values to exclude.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
       * // => [1.2]
       *
       * // The `_.property` iteratee shorthand.
       * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
       * // => [{ 'x': 2 }]
       */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined$1;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
       * This method is like `_.difference` except that it accepts `comparator`
       * which is invoked to compare elements of `array` to `values`. The order and
       * references of result values are determined by the first array. The comparator
       * is invoked with two arguments: (arrVal, othVal).
       *
       * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...Array} [values] The values to exclude.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       *
       * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
       * // => [{ 'x': 2, 'y': 1 }]
       */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined$1;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined$1,comparator):[];});/**
       * Creates a slice of `array` with `n` elements dropped from the beginning.
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to drop.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.drop([1, 2, 3]);
       * // => [2, 3]
       *
       * _.drop([1, 2, 3], 2);
       * // => [3]
       *
       * _.drop([1, 2, 3], 5);
       * // => []
       *
       * _.drop([1, 2, 3], 0);
       * // => [1, 2, 3]
       */function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return [];}n=guard||n===undefined$1?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
       * Creates a slice of `array` with `n` elements dropped from the end.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to drop.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.dropRight([1, 2, 3]);
       * // => [1, 2]
       *
       * _.dropRight([1, 2, 3], 2);
       * // => [1]
       *
       * _.dropRight([1, 2, 3], 5);
       * // => []
       *
       * _.dropRight([1, 2, 3], 0);
       * // => [1, 2, 3]
       */function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return [];}n=guard||n===undefined$1?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
       * Creates a slice of `array` excluding elements dropped from the end.
       * Elements are dropped until `predicate` returns falsey. The predicate is
       * invoked with three arguments: (value, index, array).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': true },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': false }
       * ];
       *
       * _.dropRightWhile(users, function(o) { return !o.active; });
       * // => objects for ['barney']
       *
       * // The `_.matches` iteratee shorthand.
       * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
       * // => objects for ['barney', 'fred']
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.dropRightWhile(users, ['active', false]);
       * // => objects for ['barney']
       *
       * // The `_.property` iteratee shorthand.
       * _.dropRightWhile(users, 'active');
       * // => objects for ['barney', 'fred', 'pebbles']
       */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
       * Creates a slice of `array` excluding elements dropped from the beginning.
       * Elements are dropped until `predicate` returns falsey. The predicate is
       * invoked with three arguments: (value, index, array).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': false },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': true }
       * ];
       *
       * _.dropWhile(users, function(o) { return !o.active; });
       * // => objects for ['pebbles']
       *
       * // The `_.matches` iteratee shorthand.
       * _.dropWhile(users, { 'user': 'barney', 'active': false });
       * // => objects for ['fred', 'pebbles']
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.dropWhile(users, ['active', false]);
       * // => objects for ['pebbles']
       *
       * // The `_.property` iteratee shorthand.
       * _.dropWhile(users, 'active');
       * // => objects for ['barney', 'fred', 'pebbles']
       */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
       * Fills elements of `array` with `value` from `start` up to, but not
       * including, `end`.
       *
       * **Note:** This method mutates `array`.
       *
       * @static
       * @memberOf _
       * @since 3.2.0
       * @category Array
       * @param {Array} array The array to fill.
       * @param {*} value The value to fill `array` with.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = [1, 2, 3];
       *
       * _.fill(array, 'a');
       * console.log(array);
       * // => ['a', 'a', 'a']
       *
       * _.fill(Array(3), 2);
       * // => [2, 2, 2]
       *
       * _.fill([4, 6, 8, 10], '*', 1, 3);
       * // => [4, '*', '*', 10]
       */function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return [];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
       * This method is like `_.find` except that it returns the index of the first
       * element `predicate` returns truthy for instead of the element itself.
       *
       * @static
       * @memberOf _
       * @since 1.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param {number} [fromIndex=0] The index to search from.
       * @returns {number} Returns the index of the found element, else `-1`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': false },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': true }
       * ];
       *
       * _.findIndex(users, function(o) { return o.user == 'barney'; });
       * // => 0
       *
       * // The `_.matches` iteratee shorthand.
       * _.findIndex(users, { 'user': 'fred', 'active': false });
       * // => 1
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.findIndex(users, ['active', false]);
       * // => 0
       *
       * // The `_.property` iteratee shorthand.
       * _.findIndex(users, 'active');
       * // => 2
       */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return -1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
       * This method is like `_.findIndex` except that it iterates over elements
       * of `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param {number} [fromIndex=array.length-1] The index to search from.
       * @returns {number} Returns the index of the found element, else `-1`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': true },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': false }
       * ];
       *
       * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
       * // => 2
       *
       * // The `_.matches` iteratee shorthand.
       * _.findLastIndex(users, { 'user': 'barney', 'active': true });
       * // => 0
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.findLastIndex(users, ['active', false]);
       * // => 2
       *
       * // The `_.property` iteratee shorthand.
       * _.findLastIndex(users, 'active');
       * // => 0
       */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return -1;}var index=length-1;if(fromIndex!==undefined$1){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
       * Flattens `array` a single level deep.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to flatten.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * _.flatten([1, [2, [3, [4]], 5]]);
       * // => [1, 2, [3, [4]], 5]
       */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}/**
       * Recursively flattens `array`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to flatten.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * _.flattenDeep([1, [2, [3, [4]], 5]]);
       * // => [1, 2, 3, 4, 5]
       */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY):[];}/**
       * Recursively flatten `array` up to `depth` times.
       *
       * @static
       * @memberOf _
       * @since 4.4.0
       * @category Array
       * @param {Array} array The array to flatten.
       * @param {number} [depth=1] The maximum recursion depth.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * var array = [1, [2, [3, [4]], 5]];
       *
       * _.flattenDepth(array, 1);
       * // => [1, 2, [3, [4]], 5]
       *
       * _.flattenDepth(array, 2);
       * // => [1, 2, 3, [4], 5]
       */function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return [];}depth=depth===undefined$1?1:toInteger(depth);return baseFlatten(array,depth);}/**
       * The inverse of `_.toPairs`; this method returns an object composed
       * from key-value `pairs`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} pairs The key-value pairs.
       * @returns {Object} Returns the new object.
       * @example
       *
       * _.fromPairs([['a', 1], ['b', 2]]);
       * // => { 'a': 1, 'b': 2 }
       */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
       * Gets the first element of `array`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @alias first
       * @category Array
       * @param {Array} array The array to query.
       * @returns {*} Returns the first element of `array`.
       * @example
       *
       * _.head([1, 2, 3]);
       * // => 1
       *
       * _.head([]);
       * // => undefined
       */function head(array){return array&&array.length?array[0]:undefined$1;}/**
       * Gets the index at which the first occurrence of `value` is found in `array`
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons. If `fromIndex` is negative, it's used as the
       * offset from the end of `array`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {*} value The value to search for.
       * @param {number} [fromIndex=0] The index to search from.
       * @returns {number} Returns the index of the matched value, else `-1`.
       * @example
       *
       * _.indexOf([1, 2, 1, 2], 2);
       * // => 1
       *
       * // Search from the `fromIndex`.
       * _.indexOf([1, 2, 1, 2], 2, 2);
       * // => 3
       */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return -1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
       * Gets all but the last element of `array`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to query.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.initial([1, 2, 3]);
       * // => [1, 2]
       */function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}/**
       * Creates an array of unique values that are included in all given arrays
       * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons. The order and references of result values are
       * determined by the first array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * _.intersection([2, 1], [2, 3]);
       * // => [2]
       */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
       * This method is like `_.intersection` except that it accepts `iteratee`
       * which is invoked for each element of each `arrays` to generate the criterion
       * by which they're compared. The order and references of result values are
       * determined by the first array. The iteratee is invoked with one argument:
       * (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
       * // => [2.1]
       *
       * // The `_.property` iteratee shorthand.
       * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 1 }]
       */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined$1;}else {mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
       * This method is like `_.intersection` except that it accepts `comparator`
       * which is invoked to compare elements of `arrays`. The order and references
       * of result values are determined by the first array. The comparator is
       * invoked with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of intersecting values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.intersectionWith(objects, others, _.isEqual);
       * // => [{ 'x': 1, 'y': 2 }]
       */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined$1;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined$1,comparator):[];});/**
       * Converts all elements in `array` into a string separated by `separator`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to convert.
       * @param {string} [separator=','] The element separator.
       * @returns {string} Returns the joined string.
       * @example
       *
       * _.join(['a', 'b', 'c'], '~');
       * // => 'a~b~c'
       */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}/**
       * Gets the last element of `array`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to query.
       * @returns {*} Returns the last element of `array`.
       * @example
       *
       * _.last([1, 2, 3]);
       * // => 3
       */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined$1;}/**
       * This method is like `_.indexOf` except that it iterates over elements of
       * `array` from right to left.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {*} value The value to search for.
       * @param {number} [fromIndex=array.length-1] The index to search from.
       * @returns {number} Returns the index of the matched value, else `-1`.
       * @example
       *
       * _.lastIndexOf([1, 2, 1, 2], 2);
       * // => 3
       *
       * // Search from the `fromIndex`.
       * _.lastIndexOf([1, 2, 1, 2], 2, 2);
       * // => 1
       */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return -1;}var index=length;if(fromIndex!==undefined$1){index=toInteger(fromIndex);index=index<0?nativeMax(length+index,0):nativeMin(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}/**
       * Gets the element at index `n` of `array`. If `n` is negative, the nth
       * element from the end is returned.
       *
       * @static
       * @memberOf _
       * @since 4.11.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=0] The index of the element to return.
       * @returns {*} Returns the nth element of `array`.
       * @example
       *
       * var array = ['a', 'b', 'c', 'd'];
       *
       * _.nth(array, 1);
       * // => 'b'
       *
       * _.nth(array, -2);
       * // => 'c';
       */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined$1;}/**
       * Removes all given values from `array` using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
       * to remove elements from an array by predicate.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {...*} [values] The values to remove.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
       *
       * _.pull(array, 'a', 'c');
       * console.log(array);
       * // => ['b', 'b']
       */var pull=baseRest(pullAll);/**
       * This method is like `_.pull` except that it accepts an array of values to remove.
       *
       * **Note:** Unlike `_.difference`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {Array} values The values to remove.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
       *
       * _.pullAll(array, ['a', 'c']);
       * console.log(array);
       * // => ['b', 'b']
       */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
       * This method is like `_.pullAll` except that it accepts `iteratee` which is
       * invoked for each element of `array` and `values` to generate the criterion
       * by which they're compared. The iteratee is invoked with one argument: (value).
       *
       * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {Array} values The values to remove.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
       *
       * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
       * console.log(array);
       * // => [{ 'x': 2 }]
       */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
       * This method is like `_.pullAll` except that it accepts `comparator` which
       * is invoked to compare elements of `array` to `values`. The comparator is
       * invoked with two arguments: (arrVal, othVal).
       *
       * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @since 4.6.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {Array} values The values to remove.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
       *
       * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
       * console.log(array);
       * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
       */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined$1,comparator):array;}/**
       * Removes elements from `array` corresponding to `indexes` and returns an
       * array of removed elements.
       *
       * **Note:** Unlike `_.at`, this method mutates `array`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {...(number|number[])} [indexes] The indexes of elements to remove.
       * @returns {Array} Returns the new array of removed elements.
       * @example
       *
       * var array = ['a', 'b', 'c', 'd'];
       * var pulled = _.pullAt(array, [1, 3]);
       *
       * console.log(array);
       * // => ['a', 'c']
       *
       * console.log(pulled);
       * // => ['b', 'd']
       */var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
       * Removes all elements from `array` that `predicate` returns truthy for
       * and returns an array of the removed elements. The predicate is invoked
       * with three arguments: (value, index, array).
       *
       * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
       * to pull elements from an array by value.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the new array of removed elements.
       * @example
       *
       * var array = [1, 2, 3, 4];
       * var evens = _.remove(array, function(n) {
       *   return n % 2 == 0;
       * });
       *
       * console.log(array);
       * // => [1, 3]
       *
       * console.log(evens);
       * // => [2, 4]
       */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
       * Reverses `array` so that the first element becomes the last, the second
       * element becomes the second to last, and so on.
       *
       * **Note:** This method mutates `array` and is based on
       * [`Array#reverse`](https://mdn.io/Array/reverse).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to modify.
       * @returns {Array} Returns `array`.
       * @example
       *
       * var array = [1, 2, 3];
       *
       * _.reverse(array);
       * // => [3, 2, 1]
       *
       * console.log(array);
       * // => [3, 2, 1]
       */function reverse(array){return array==null?array:nativeReverse.call(array);}/**
       * Creates a slice of `array` from `start` up to, but not including, `end`.
       *
       * **Note:** This method is used instead of
       * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
       * returned.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to slice.
       * @param {number} [start=0] The start position.
       * @param {number} [end=array.length] The end position.
       * @returns {Array} Returns the slice of `array`.
       */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return [];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else {start=start==null?0:toInteger(start);end=end===undefined$1?length:toInteger(end);}return baseSlice(array,start,end);}/**
       * Uses a binary search to determine the lowest index at which `value`
       * should be inserted into `array` in order to maintain its sort order.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       * @example
       *
       * _.sortedIndex([30, 50], 40);
       * // => 1
       */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
       * This method is like `_.sortedIndex` except that it accepts `iteratee`
       * which is invoked for `value` and each element of `array` to compute their
       * sort ranking. The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       * @example
       *
       * var objects = [{ 'x': 4 }, { 'x': 5 }];
       *
       * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
       * // => 0
       *
       * // The `_.property` iteratee shorthand.
       * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
       * // => 0
       */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
       * This method is like `_.indexOf` except that it performs a binary
       * search on a sorted `array`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {*} value The value to search for.
       * @returns {number} Returns the index of the matched value, else `-1`.
       * @example
       *
       * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
       * // => 1
       */function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return -1;}/**
       * This method is like `_.sortedIndex` except that it returns the highest
       * index at which `value` should be inserted into `array` in order to
       * maintain its sort order.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       * @example
       *
       * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
       * // => 4
       */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
       * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
       * which is invoked for `value` and each element of `array` to compute their
       * sort ranking. The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The sorted array to inspect.
       * @param {*} value The value to evaluate.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {number} Returns the index at which `value` should be inserted
       *  into `array`.
       * @example
       *
       * var objects = [{ 'x': 4 }, { 'x': 5 }];
       *
       * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
       * // => 1
       *
       * // The `_.property` iteratee shorthand.
       * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
       * // => 1
       */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
       * This method is like `_.lastIndexOf` except that it performs a binary
       * search on a sorted `array`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {*} value The value to search for.
       * @returns {number} Returns the index of the matched value, else `-1`.
       * @example
       *
       * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
       * // => 3
       */function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return -1;}/**
       * This method is like `_.uniq` except that it's designed and optimized
       * for sorted arrays.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @returns {Array} Returns the new duplicate free array.
       * @example
       *
       * _.sortedUniq([1, 1, 2]);
       * // => [1, 2]
       */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
       * This method is like `_.uniqBy` except that it's designed and optimized
       * for sorted arrays.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {Function} [iteratee] The iteratee invoked per element.
       * @returns {Array} Returns the new duplicate free array.
       * @example
       *
       * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
       * // => [1.1, 2.3]
       */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
       * Gets all but the first element of `array`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.tail([1, 2, 3]);
       * // => [2, 3]
       */function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}/**
       * Creates a slice of `array` with `n` elements taken from the beginning.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to take.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.take([1, 2, 3]);
       * // => [1]
       *
       * _.take([1, 2, 3], 2);
       * // => [1, 2]
       *
       * _.take([1, 2, 3], 5);
       * // => [1, 2, 3]
       *
       * _.take([1, 2, 3], 0);
       * // => []
       */function take(array,n,guard){if(!(array&&array.length)){return [];}n=guard||n===undefined$1?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
       * Creates a slice of `array` with `n` elements taken from the end.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {number} [n=1] The number of elements to take.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * _.takeRight([1, 2, 3]);
       * // => [3]
       *
       * _.takeRight([1, 2, 3], 2);
       * // => [2, 3]
       *
       * _.takeRight([1, 2, 3], 5);
       * // => [1, 2, 3]
       *
       * _.takeRight([1, 2, 3], 0);
       * // => []
       */function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return [];}n=guard||n===undefined$1?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
       * Creates a slice of `array` with elements taken from the end. Elements are
       * taken until `predicate` returns falsey. The predicate is invoked with
       * three arguments: (value, index, array).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': true },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': false }
       * ];
       *
       * _.takeRightWhile(users, function(o) { return !o.active; });
       * // => objects for ['fred', 'pebbles']
       *
       * // The `_.matches` iteratee shorthand.
       * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
       * // => objects for ['pebbles']
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.takeRightWhile(users, ['active', false]);
       * // => objects for ['fred', 'pebbles']
       *
       * // The `_.property` iteratee shorthand.
       * _.takeRightWhile(users, 'active');
       * // => []
       */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
       * Creates a slice of `array` with elements taken from the beginning. Elements
       * are taken until `predicate` returns falsey. The predicate is invoked with
       * three arguments: (value, index, array).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Array
       * @param {Array} array The array to query.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the slice of `array`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'active': false },
       *   { 'user': 'fred',    'active': false },
       *   { 'user': 'pebbles', 'active': true }
       * ];
       *
       * _.takeWhile(users, function(o) { return !o.active; });
       * // => objects for ['barney', 'fred']
       *
       * // The `_.matches` iteratee shorthand.
       * _.takeWhile(users, { 'user': 'barney', 'active': false });
       * // => objects for ['barney']
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.takeWhile(users, ['active', false]);
       * // => objects for ['barney', 'fred']
       *
       * // The `_.property` iteratee shorthand.
       * _.takeWhile(users, 'active');
       * // => []
       */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
       * Creates an array of unique values, in order, from all given arrays using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * _.union([2], [1, 2]);
       * // => [2, 1]
       */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
       * This method is like `_.union` except that it accepts `iteratee` which is
       * invoked for each element of each `arrays` to generate the criterion by
       * which uniqueness is computed. Result values are chosen from the first
       * array in which the value occurs. The iteratee is invoked with one argument:
       * (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * _.unionBy([2.1], [1.2, 2.3], Math.floor);
       * // => [2.1, 1.2]
       *
       * // The `_.property` iteratee shorthand.
       * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 1 }, { 'x': 2 }]
       */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined$1;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
       * This method is like `_.union` except that it accepts `comparator` which
       * is invoked to compare elements of `arrays`. Result values are chosen from
       * the first array in which the value occurs. The comparator is invoked
       * with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of combined values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.unionWith(objects, others, _.isEqual);
       * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
       */var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined$1;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined$1,comparator);});/**
       * Creates a duplicate-free version of an array, using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons, in which only the first occurrence of each element
       * is kept. The order of result values is determined by the order they occur
       * in the array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @returns {Array} Returns the new duplicate free array.
       * @example
       *
       * _.uniq([2, 1, 2]);
       * // => [2, 1]
       */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
       * This method is like `_.uniq` except that it accepts `iteratee` which is
       * invoked for each element in `array` to generate the criterion by which
       * uniqueness is computed. The order of result values is determined by the
       * order they occur in the array. The iteratee is invoked with one argument:
       * (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new duplicate free array.
       * @example
       *
       * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
       * // => [2.1, 1.2]
       *
       * // The `_.property` iteratee shorthand.
       * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 1 }, { 'x': 2 }]
       */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
       * This method is like `_.uniq` except that it accepts `comparator` which
       * is invoked to compare elements of `array`. The order of result values is
       * determined by the order they occur in the array.The comparator is invoked
       * with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new duplicate free array.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.uniqWith(objects, _.isEqual);
       * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
       */function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined$1;return array&&array.length?baseUniq(array,undefined$1,comparator):[];}/**
       * This method is like `_.zip` except that it accepts an array of grouped
       * elements and creates an array regrouping the elements to their pre-zip
       * configuration.
       *
       * @static
       * @memberOf _
       * @since 1.2.0
       * @category Array
       * @param {Array} array The array of grouped elements to process.
       * @returns {Array} Returns the new array of regrouped elements.
       * @example
       *
       * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
       * // => [['a', 1, true], ['b', 2, false]]
       *
       * _.unzip(zipped);
       * // => [['a', 'b'], [1, 2], [true, false]]
       */function unzip(array){if(!(array&&array.length)){return [];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
       * This method is like `_.unzip` except that it accepts `iteratee` to specify
       * how regrouped values should be combined. The iteratee is invoked with the
       * elements of each group: (...group).
       *
       * @static
       * @memberOf _
       * @since 3.8.0
       * @category Array
       * @param {Array} array The array of grouped elements to process.
       * @param {Function} [iteratee=_.identity] The function to combine
       *  regrouped values.
       * @returns {Array} Returns the new array of regrouped elements.
       * @example
       *
       * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
       * // => [[1, 10, 100], [2, 20, 200]]
       *
       * _.unzipWith(zipped, _.add);
       * // => [3, 30, 300]
       */function unzipWith(array,iteratee){if(!(array&&array.length)){return [];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined$1,group);});}/**
       * Creates an array excluding all given values using
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * for equality comparisons.
       *
       * **Note:** Unlike `_.pull`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {Array} array The array to inspect.
       * @param {...*} [values] The values to exclude.
       * @returns {Array} Returns the new array of filtered values.
       * @see _.difference, _.xor
       * @example
       *
       * _.without([2, 1, 2, 3], 1, 2);
       * // => [3]
       */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
       * Creates an array of unique values that is the
       * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
       * of the given arrays. The order of result values is determined by the order
       * they occur in the arrays.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @returns {Array} Returns the new array of filtered values.
       * @see _.difference, _.without
       * @example
       *
       * _.xor([2, 1], [2, 3]);
       * // => [1, 3]
       */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
       * This method is like `_.xor` except that it accepts `iteratee` which is
       * invoked for each element of each `arrays` to generate the criterion by
       * which by which they're compared. The order of result values is determined
       * by the order they occur in the arrays. The iteratee is invoked with one
       * argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
       * // => [1.2, 3.4]
       *
       * // The `_.property` iteratee shorthand.
       * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
       * // => [{ 'x': 2 }]
       */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined$1;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
       * This method is like `_.xor` except that it accepts `comparator` which is
       * invoked to compare elements of `arrays`. The order of result values is
       * determined by the order they occur in the arrays. The comparator is invoked
       * with two arguments: (arrVal, othVal).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Array
       * @param {...Array} [arrays] The arrays to inspect.
       * @param {Function} [comparator] The comparator invoked per element.
       * @returns {Array} Returns the new array of filtered values.
       * @example
       *
       * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
       * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
       *
       * _.xorWith(objects, others, _.isEqual);
       * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
       */var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined$1;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined$1,comparator);});/**
       * Creates an array of grouped elements, the first of which contains the
       * first elements of the given arrays, the second of which contains the
       * second elements of the given arrays, and so on.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Array
       * @param {...Array} [arrays] The arrays to process.
       * @returns {Array} Returns the new array of grouped elements.
       * @example
       *
       * _.zip(['a', 'b'], [1, 2], [true, false]);
       * // => [['a', 1, true], ['b', 2, false]]
       */var zip=baseRest(unzip);/**
       * This method is like `_.fromPairs` except that it accepts two arrays,
       * one of property identifiers and one of corresponding values.
       *
       * @static
       * @memberOf _
       * @since 0.4.0
       * @category Array
       * @param {Array} [props=[]] The property identifiers.
       * @param {Array} [values=[]] The property values.
       * @returns {Object} Returns the new object.
       * @example
       *
       * _.zipObject(['a', 'b'], [1, 2]);
       * // => { 'a': 1, 'b': 2 }
       */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
       * This method is like `_.zipObject` except that it supports property paths.
       *
       * @static
       * @memberOf _
       * @since 4.1.0
       * @category Array
       * @param {Array} [props=[]] The property identifiers.
       * @param {Array} [values=[]] The property values.
       * @returns {Object} Returns the new object.
       * @example
       *
       * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
       * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
       */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
       * This method is like `_.zip` except that it accepts `iteratee` to specify
       * how grouped values should be combined. The iteratee is invoked with the
       * elements of each group: (...group).
       *
       * @static
       * @memberOf _
       * @since 3.8.0
       * @category Array
       * @param {...Array} [arrays] The arrays to process.
       * @param {Function} [iteratee=_.identity] The function to combine
       *  grouped values.
       * @returns {Array} Returns the new array of grouped elements.
       * @example
       *
       * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
       *   return a + b + c;
       * });
       * // => [111, 222]
       */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined$1;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined$1;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*/ /**
       * Creates a `lodash` wrapper instance that wraps `value` with explicit method
       * chain sequences enabled. The result of such sequences must be unwrapped
       * with `_#value`.
       *
       * @static
       * @memberOf _
       * @since 1.3.0
       * @category Seq
       * @param {*} value The value to wrap.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'age': 36 },
       *   { 'user': 'fred',    'age': 40 },
       *   { 'user': 'pebbles', 'age': 1 }
       * ];
       *
       * var youngest = _
       *   .chain(users)
       *   .sortBy('age')
       *   .map(function(o) {
       *     return o.user + ' is ' + o.age;
       *   })
       *   .head()
       *   .value();
       * // => 'pebbles is 1'
       */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
       * This method invokes `interceptor` and returns `value`. The interceptor
       * is invoked with one argument; (value). The purpose of this method is to
       * "tap into" a method chain sequence in order to modify intermediate results.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Seq
       * @param {*} value The value to provide to `interceptor`.
       * @param {Function} interceptor The function to invoke.
       * @returns {*} Returns `value`.
       * @example
       *
       * _([1, 2, 3])
       *  .tap(function(array) {
       *    // Mutate input array.
       *    array.pop();
       *  })
       *  .reverse()
       *  .value();
       * // => [2, 1]
       */function tap(value,interceptor){interceptor(value);return value;}/**
       * This method is like `_.tap` except that it returns the result of `interceptor`.
       * The purpose of this method is to "pass thru" values replacing intermediate
       * results in a method chain sequence.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Seq
       * @param {*} value The value to provide to `interceptor`.
       * @param {Function} interceptor The function to invoke.
       * @returns {*} Returns the result of `interceptor`.
       * @example
       *
       * _('  abc  ')
       *  .chain()
       *  .trim()
       *  .thru(function(value) {
       *    return [value];
       *  })
       *  .value();
       * // => ['abc']
       */function thru(value,interceptor){return interceptor(value);}/**
       * This method is the wrapper version of `_.at`.
       *
       * @name at
       * @memberOf _
       * @since 1.0.0
       * @category Seq
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
       *
       * _(object).at(['a[0].b.c', 'a[1]']).value();
       * // => [3, 4]
       */var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined$1});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined$1);}return array;});});/**
       * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
       *
       * @name chain
       * @memberOf _
       * @since 0.1.0
       * @category Seq
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 40 }
       * ];
       *
       * // A sequence without explicit chaining.
       * _(users).head();
       * // => { 'user': 'barney', 'age': 36 }
       *
       * // A sequence with explicit chaining.
       * _(users)
       *   .chain()
       *   .head()
       *   .pick('user')
       *   .value();
       * // => { 'user': 'barney' }
       */function wrapperChain(){return chain(this);}/**
       * Executes the chain sequence and returns the wrapped result.
       *
       * @name commit
       * @memberOf _
       * @since 3.2.0
       * @category Seq
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var array = [1, 2];
       * var wrapped = _(array).push(3);
       *
       * console.log(array);
       * // => [1, 2]
       *
       * wrapped = wrapped.commit();
       * console.log(array);
       * // => [1, 2, 3]
       *
       * wrapped.last();
       * // => 3
       *
       * console.log(array);
       * // => [1, 2, 3]
       */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
       * Gets the next value on a wrapped object following the
       * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
       *
       * @name next
       * @memberOf _
       * @since 4.0.0
       * @category Seq
       * @returns {Object} Returns the next iterator value.
       * @example
       *
       * var wrapped = _([1, 2]);
       *
       * wrapped.next();
       * // => { 'done': false, 'value': 1 }
       *
       * wrapped.next();
       * // => { 'done': false, 'value': 2 }
       *
       * wrapped.next();
       * // => { 'done': true, 'value': undefined }
       */function wrapperNext(){if(this.__values__===undefined$1){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined$1:this.__values__[this.__index__++];return {'done':done,'value':value};}/**
       * Enables the wrapper to be iterable.
       *
       * @name Symbol.iterator
       * @memberOf _
       * @since 4.0.0
       * @category Seq
       * @returns {Object} Returns the wrapper object.
       * @example
       *
       * var wrapped = _([1, 2]);
       *
       * wrapped[Symbol.iterator]() === wrapped;
       * // => true
       *
       * Array.from(wrapped);
       * // => [1, 2]
       */function wrapperToIterator(){return this;}/**
       * Creates a clone of the chain sequence planting `value` as the wrapped value.
       *
       * @name plant
       * @memberOf _
       * @since 3.2.0
       * @category Seq
       * @param {*} value The value to plant.
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var wrapped = _([1, 2]).map(square);
       * var other = wrapped.plant([3, 4]);
       *
       * other.value();
       * // => [9, 16]
       *
       * wrapped.value();
       * // => [1, 4]
       */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined$1;if(result){previous.__wrapped__=clone;}else {result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
       * This method is the wrapper version of `_.reverse`.
       *
       * **Note:** This method mutates the wrapped array.
       *
       * @name reverse
       * @memberOf _
       * @since 0.1.0
       * @category Seq
       * @returns {Object} Returns the new `lodash` wrapper instance.
       * @example
       *
       * var array = [1, 2, 3];
       *
       * _(array).reverse().value()
       * // => [3, 2, 1]
       *
       * console.log(array);
       * // => [3, 2, 1]
       */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined$1});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
       * Executes the chain sequence to resolve the unwrapped value.
       *
       * @name value
       * @memberOf _
       * @since 0.1.0
       * @alias toJSON, valueOf
       * @category Seq
       * @returns {*} Returns the resolved unwrapped value.
       * @example
       *
       * _([1, 2, 3]).value();
       * // => [1, 2, 3]
       */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*/ /**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` thru `iteratee`. The corresponding value of
       * each key is the number of times the key was returned by `iteratee`. The
       * iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * _.countBy([6.1, 4.2, 6.3], Math.floor);
       * // => { '4': 1, '6': 2 }
       *
       * // The `_.property` iteratee shorthand.
       * _.countBy(['one', 'two', 'three'], 'length');
       * // => { '3': 2, '5': 1 }
       */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){++result[key];}else {baseAssignValue(result,key,1);}});/**
       * Checks if `predicate` returns truthy for **all** elements of `collection`.
       * Iteration is stopped once `predicate` returns falsey. The predicate is
       * invoked with three arguments: (value, index|key, collection).
       *
       * **Note:** This method returns `true` for
       * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
       * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
       * elements of empty collections.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {boolean} Returns `true` if all elements pass the predicate check,
       *  else `false`.
       * @example
       *
       * _.every([true, 1, null, 'yes'], Boolean);
       * // => false
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': false },
       *   { 'user': 'fred',   'age': 40, 'active': false }
       * ];
       *
       * // The `_.matches` iteratee shorthand.
       * _.every(users, { 'user': 'barney', 'active': false });
       * // => false
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.every(users, ['active', false]);
       * // => true
       *
       * // The `_.property` iteratee shorthand.
       * _.every(users, 'active');
       * // => false
       */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined$1;}return func(collection,getIteratee(predicate,3));}/**
       * Iterates over elements of `collection`, returning an array of all elements
       * `predicate` returns truthy for. The predicate is invoked with three
       * arguments: (value, index|key, collection).
       *
       * **Note:** Unlike `_.remove`, this method returns a new array.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the new filtered array.
       * @see _.reject
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': true },
       *   { 'user': 'fred',   'age': 40, 'active': false }
       * ];
       *
       * _.filter(users, function(o) { return !o.active; });
       * // => objects for ['fred']
       *
       * // The `_.matches` iteratee shorthand.
       * _.filter(users, { 'age': 36, 'active': true });
       * // => objects for ['barney']
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.filter(users, ['active', false]);
       * // => objects for ['fred']
       *
       * // The `_.property` iteratee shorthand.
       * _.filter(users, 'active');
       * // => objects for ['barney']
       *
       * // Combining several predicates using `_.overEvery` or `_.overSome`.
       * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
       * // => objects for ['fred', 'barney']
       */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
       * Iterates over elements of `collection`, returning the first element
       * `predicate` returns truthy for. The predicate is invoked with three
       * arguments: (value, index|key, collection).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param {number} [fromIndex=0] The index to search from.
       * @returns {*} Returns the matched element, else `undefined`.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'age': 36, 'active': true },
       *   { 'user': 'fred',    'age': 40, 'active': false },
       *   { 'user': 'pebbles', 'age': 1,  'active': true }
       * ];
       *
       * _.find(users, function(o) { return o.age < 40; });
       * // => object for 'barney'
       *
       * // The `_.matches` iteratee shorthand.
       * _.find(users, { 'age': 1, 'active': true });
       * // => object for 'pebbles'
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.find(users, ['active', false]);
       * // => object for 'fred'
       *
       * // The `_.property` iteratee shorthand.
       * _.find(users, 'active');
       * // => object for 'barney'
       */var find=createFind(findIndex);/**
       * This method is like `_.find` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param {number} [fromIndex=collection.length-1] The index to search from.
       * @returns {*} Returns the matched element, else `undefined`.
       * @example
       *
       * _.findLast([1, 2, 3, 4], function(n) {
       *   return n % 2 == 1;
       * });
       * // => 3
       */var findLast=createFind(findLastIndex);/**
       * Creates a flattened array of values by running each element in `collection`
       * thru `iteratee` and flattening the mapped results. The iteratee is invoked
       * with three arguments: (value, index|key, collection).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * function duplicate(n) {
       *   return [n, n];
       * }
       *
       * _.flatMap([1, 2], duplicate);
       * // => [1, 1, 2, 2]
       */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
       * This method is like `_.flatMap` except that it recursively flattens the
       * mapped results.
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * function duplicate(n) {
       *   return [[[n, n]]];
       * }
       *
       * _.flatMapDeep([1, 2], duplicate);
       * // => [1, 1, 2, 2]
       */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
       * This method is like `_.flatMap` except that it recursively flattens the
       * mapped results up to `depth` times.
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {number} [depth=1] The maximum recursion depth.
       * @returns {Array} Returns the new flattened array.
       * @example
       *
       * function duplicate(n) {
       *   return [[[n, n]]];
       * }
       *
       * _.flatMapDepth([1, 2], duplicate, 2);
       * // => [[1, 1], [2, 2]]
       */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined$1?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
       * Iterates over elements of `collection` and invokes `iteratee` for each element.
       * The iteratee is invoked with three arguments: (value, index|key, collection).
       * Iteratee functions may exit iteration early by explicitly returning `false`.
       *
       * **Note:** As with other "Collections" methods, objects with a "length"
       * property are iterated like arrays. To avoid this behavior use `_.forIn`
       * or `_.forOwn` for object iteration.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @alias each
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Array|Object} Returns `collection`.
       * @see _.forEachRight
       * @example
       *
       * _.forEach([1, 2], function(value) {
       *   console.log(value);
       * });
       * // => Logs `1` then `2`.
       *
       * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
       *   console.log(key);
       * });
       * // => Logs 'a' then 'b' (iteration order is not guaranteed).
       */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
       * This method is like `_.forEach` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @alias eachRight
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Array|Object} Returns `collection`.
       * @see _.forEach
       * @example
       *
       * _.forEachRight([1, 2], function(value) {
       *   console.log(value);
       * });
       * // => Logs `2` then `1`.
       */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` thru `iteratee`. The order of grouped values
       * is determined by the order they occur in `collection`. The corresponding
       * value of each key is an array of elements responsible for generating the
       * key. The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * _.groupBy([6.1, 4.2, 6.3], Math.floor);
       * // => { '4': [4.2], '6': [6.1, 6.3] }
       *
       * // The `_.property` iteratee shorthand.
       * _.groupBy(['one', 'two', 'three'], 'length');
       * // => { '3': ['one', 'two'], '5': ['three'] }
       */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else {baseAssignValue(result,key,[value]);}});/**
       * Checks if `value` is in `collection`. If `collection` is a string, it's
       * checked for a substring of `value`, otherwise
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * is used for equality comparisons. If `fromIndex` is negative, it's used as
       * the offset from the end of `collection`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object|string} collection The collection to inspect.
       * @param {*} value The value to search for.
       * @param {number} [fromIndex=0] The index to search from.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
       * @returns {boolean} Returns `true` if `value` is found, else `false`.
       * @example
       *
       * _.includes([1, 2, 3], 1);
       * // => true
       *
       * _.includes([1, 2, 3], 1, 2);
       * // => false
       *
       * _.includes({ 'a': 1, 'b': 2 }, 1);
       * // => true
       *
       * _.includes('abcd', 'bc');
       * // => true
       */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
       * Invokes the method at `path` of each element in `collection`, returning
       * an array of the results of each invoked method. Any additional arguments
       * are provided to each invoked method. If `path` is a function, it's invoked
       * for, and `this` bound to, each element in `collection`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Array|Function|string} path The path of the method to invoke or
       *  the function invoked per iteration.
       * @param {...*} [args] The arguments to invoke each method with.
       * @returns {Array} Returns the array of results.
       * @example
       *
       * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
       * // => [[1, 5, 7], [1, 2, 3]]
       *
       * _.invokeMap([123, 456], String.prototype.split, '');
       * // => [['1', '2', '3'], ['4', '5', '6']]
       */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});/**
       * Creates an object composed of keys generated from the results of running
       * each element of `collection` thru `iteratee`. The corresponding value of
       * each key is the last element responsible for generating the key. The
       * iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
       * @returns {Object} Returns the composed aggregate object.
       * @example
       *
       * var array = [
       *   { 'dir': 'left', 'code': 97 },
       *   { 'dir': 'right', 'code': 100 }
       * ];
       *
       * _.keyBy(array, function(o) {
       *   return String.fromCharCode(o.code);
       * });
       * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
       *
       * _.keyBy(array, 'dir');
       * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
       */var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});/**
       * Creates an array of values by running each element in `collection` thru
       * `iteratee`. The iteratee is invoked with three arguments:
       * (value, index|key, collection).
       *
       * Many lodash methods are guarded to work as iteratees for methods like
       * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
       *
       * The guarded methods are:
       * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
       * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
       * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
       * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the new mapped array.
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * _.map([4, 8], square);
       * // => [16, 64]
       *
       * _.map({ 'a': 4, 'b': 8 }, square);
       * // => [16, 64] (iteration order is not guaranteed)
       *
       * var users = [
       *   { 'user': 'barney' },
       *   { 'user': 'fred' }
       * ];
       *
       * // The `_.property` iteratee shorthand.
       * _.map(users, 'user');
       * // => ['barney', 'fred']
       */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
       * This method is like `_.sortBy` except that it allows specifying the sort
       * orders of the iteratees to sort by. If `orders` is unspecified, all values
       * are sorted in ascending order. Otherwise, specify an order of "desc" for
       * descending or "asc" for ascending sort order of corresponding values.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
       *  The iteratees to sort by.
       * @param {string[]} [orders] The sort orders of `iteratees`.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
       * @returns {Array} Returns the new sorted array.
       * @example
       *
       * var users = [
       *   { 'user': 'fred',   'age': 48 },
       *   { 'user': 'barney', 'age': 34 },
       *   { 'user': 'fred',   'age': 40 },
       *   { 'user': 'barney', 'age': 36 }
       * ];
       *
       * // Sort by `user` in ascending order and by `age` in descending order.
       * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
       * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
       */function orderBy(collection,iteratees,orders,guard){if(collection==null){return [];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined$1:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
       * Creates an array of elements split into two groups, the first of which
       * contains elements `predicate` returns truthy for, the second of which
       * contains elements `predicate` returns falsey for. The predicate is
       * invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the array of grouped elements.
       * @example
       *
       * var users = [
       *   { 'user': 'barney',  'age': 36, 'active': false },
       *   { 'user': 'fred',    'age': 40, 'active': true },
       *   { 'user': 'pebbles', 'age': 1,  'active': false }
       * ];
       *
       * _.partition(users, function(o) { return o.active; });
       * // => objects for [['fred'], ['barney', 'pebbles']]
       *
       * // The `_.matches` iteratee shorthand.
       * _.partition(users, { 'age': 1, 'active': false });
       * // => objects for [['pebbles'], ['barney', 'fred']]
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.partition(users, ['active', false]);
       * // => objects for [['barney', 'pebbles'], ['fred']]
       *
       * // The `_.property` iteratee shorthand.
       * _.partition(users, 'active');
       * // => objects for [['fred'], ['barney', 'pebbles']]
       */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return [[],[]];});/**
       * Reduces `collection` to a value which is the accumulated result of running
       * each element in `collection` thru `iteratee`, where each successive
       * invocation is supplied the return value of the previous. If `accumulator`
       * is not given, the first element of `collection` is used as the initial
       * value. The iteratee is invoked with four arguments:
       * (accumulator, value, index|key, collection).
       *
       * Many lodash methods are guarded to work as iteratees for methods like
       * `_.reduce`, `_.reduceRight`, and `_.transform`.
       *
       * The guarded methods are:
       * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
       * and `sortBy`
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [accumulator] The initial value.
       * @returns {*} Returns the accumulated value.
       * @see _.reduceRight
       * @example
       *
       * _.reduce([1, 2], function(sum, n) {
       *   return sum + n;
       * }, 0);
       * // => 3
       *
       * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
       *   (result[value] || (result[value] = [])).push(key);
       *   return result;
       * }, {});
       * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
       */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
       * This method is like `_.reduce` except that it iterates over elements of
       * `collection` from right to left.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [accumulator] The initial value.
       * @returns {*} Returns the accumulated value.
       * @see _.reduce
       * @example
       *
       * var array = [[0, 1], [2, 3], [4, 5]];
       *
       * _.reduceRight(array, function(flattened, other) {
       *   return flattened.concat(other);
       * }, []);
       * // => [4, 5, 2, 3, 0, 1]
       */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
       * The opposite of `_.filter`; this method returns the elements of `collection`
       * that `predicate` does **not** return truthy for.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the new filtered array.
       * @see _.filter
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': false },
       *   { 'user': 'fred',   'age': 40, 'active': true }
       * ];
       *
       * _.reject(users, function(o) { return !o.active; });
       * // => objects for ['fred']
       *
       * // The `_.matches` iteratee shorthand.
       * _.reject(users, { 'age': 40, 'active': true });
       * // => objects for ['barney']
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.reject(users, ['active', false]);
       * // => objects for ['fred']
       *
       * // The `_.property` iteratee shorthand.
       * _.reject(users, 'active');
       * // => objects for ['barney']
       */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
       * Gets a random element from `collection`.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to sample.
       * @returns {*} Returns the random element.
       * @example
       *
       * _.sample([1, 2, 3, 4]);
       * // => 2
       */function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}/**
       * Gets `n` random elements at unique keys from `collection` up to the
       * size of `collection`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Collection
       * @param {Array|Object} collection The collection to sample.
       * @param {number} [n=1] The number of elements to sample.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the random elements.
       * @example
       *
       * _.sampleSize([1, 2, 3], 2);
       * // => [3, 1]
       *
       * _.sampleSize([1, 2, 3], 4);
       * // => [2, 3, 1]
       */function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined$1){n=1;}else {n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}/**
       * Creates an array of shuffled values, using a version of the
       * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to shuffle.
       * @returns {Array} Returns the new shuffled array.
       * @example
       *
       * _.shuffle([1, 2, 3, 4]);
       * // => [4, 1, 3, 2]
       */function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}/**
       * Gets the size of `collection` by returning its length for array-like
       * values or the number of own enumerable string keyed properties for objects.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object|string} collection The collection to inspect.
       * @returns {number} Returns the collection size.
       * @example
       *
       * _.size([1, 2, 3]);
       * // => 3
       *
       * _.size({ 'a': 1, 'b': 2 });
       * // => 2
       *
       * _.size('pebbles');
       * // => 7
       */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
       * Checks if `predicate` returns truthy for **any** element of `collection`.
       * Iteration is stopped once `predicate` returns truthy. The predicate is
       * invoked with three arguments: (value, index|key, collection).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {boolean} Returns `true` if any element passes the predicate check,
       *  else `false`.
       * @example
       *
       * _.some([null, 0, 'yes', false], Boolean);
       * // => true
       *
       * var users = [
       *   { 'user': 'barney', 'active': true },
       *   { 'user': 'fred',   'active': false }
       * ];
       *
       * // The `_.matches` iteratee shorthand.
       * _.some(users, { 'user': 'barney', 'active': false });
       * // => false
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.some(users, ['active', false]);
       * // => true
       *
       * // The `_.property` iteratee shorthand.
       * _.some(users, 'active');
       * // => true
       */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined$1;}return func(collection,getIteratee(predicate,3));}/**
       * Creates an array of elements, sorted in ascending order by the results of
       * running each element in a collection thru each iteratee. This method
       * performs a stable sort, that is, it preserves the original sort order of
       * equal elements. The iteratees are invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Collection
       * @param {Array|Object} collection The collection to iterate over.
       * @param {...(Function|Function[])} [iteratees=[_.identity]]
       *  The iteratees to sort by.
       * @returns {Array} Returns the new sorted array.
       * @example
       *
       * var users = [
       *   { 'user': 'fred',   'age': 48 },
       *   { 'user': 'barney', 'age': 36 },
       *   { 'user': 'fred',   'age': 30 },
       *   { 'user': 'barney', 'age': 34 }
       * ];
       *
       * _.sortBy(users, [function(o) { return o.user; }]);
       * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
       *
       * _.sortBy(users, ['user', 'age']);
       * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
       */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return [];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*/ /**
       * Gets the timestamp of the number of milliseconds that have elapsed since
       * the Unix epoch (1 January 1970 00:00:00 UTC).
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Date
       * @returns {number} Returns the timestamp.
       * @example
       *
       * _.defer(function(stamp) {
       *   console.log(_.now() - stamp);
       * }, _.now());
       * // => Logs the number of milliseconds it took for the deferred invocation.
       */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*/ /**
       * The opposite of `_.before`; this method creates a function that invokes
       * `func` once it's called `n` or more times.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {number} n The number of calls before `func` is invoked.
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new restricted function.
       * @example
       *
       * var saves = ['profile', 'settings'];
       *
       * var done = _.after(saves.length, function() {
       *   console.log('done saving!');
       * });
       *
       * _.forEach(saves, function(type) {
       *   asyncSave({ 'type': type, 'complete': done });
       * });
       * // => Logs 'done saving!' after the two async saves have completed.
       */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
       * Creates a function that invokes `func`, with up to `n` arguments,
       * ignoring any additional arguments.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Function
       * @param {Function} func The function to cap arguments for.
       * @param {number} [n=func.length] The arity cap.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Function} Returns the new capped function.
       * @example
       *
       * _.map(['6', '8', '10'], _.ary(parseInt, 1));
       * // => [6, 8, 10]
       */function ary(func,n,guard){n=guard?undefined$1:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined$1,undefined$1,undefined$1,undefined$1,n);}/**
       * Creates a function that invokes `func`, with the `this` binding and arguments
       * of the created function, while it's called less than `n` times. Subsequent
       * calls to the created function return the result of the last `func` invocation.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Function
       * @param {number} n The number of calls at which `func` is no longer invoked.
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new restricted function.
       * @example
       *
       * jQuery(element).on('click', _.before(5, addContactToList));
       * // => Allows adding up to 4 contacts to the list.
       */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined$1;}return result;};}/**
       * Creates a function that invokes `func` with the `this` binding of `thisArg`
       * and `partials` prepended to the arguments it receives.
       *
       * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
       * may be used as a placeholder for partially applied arguments.
       *
       * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
       * property of bound functions.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to bind.
       * @param {*} thisArg The `this` binding of `func`.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new bound function.
       * @example
       *
       * function greet(greeting, punctuation) {
       *   return greeting + ' ' + this.user + punctuation;
       * }
       *
       * var object = { 'user': 'fred' };
       *
       * var bound = _.bind(greet, object, 'hi');
       * bound('!');
       * // => 'hi fred!'
       *
       * // Bound with placeholders.
       * var bound = _.bind(greet, object, _, '!');
       * bound('hi');
       * // => 'hi fred!'
       */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
       * Creates a function that invokes the method at `object[key]` with `partials`
       * prepended to the arguments it receives.
       *
       * This method differs from `_.bind` by allowing bound functions to reference
       * methods that may be redefined or don't yet exist. See
       * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
       * for more details.
       *
       * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * @static
       * @memberOf _
       * @since 0.10.0
       * @category Function
       * @param {Object} object The object to invoke the method on.
       * @param {string} key The key of the method.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new bound function.
       * @example
       *
       * var object = {
       *   'user': 'fred',
       *   'greet': function(greeting, punctuation) {
       *     return greeting + ' ' + this.user + punctuation;
       *   }
       * };
       *
       * var bound = _.bindKey(object, 'greet', 'hi');
       * bound('!');
       * // => 'hi fred!'
       *
       * object.greet = function(greeting, punctuation) {
       *   return greeting + 'ya ' + this.user + punctuation;
       * };
       *
       * bound('!');
       * // => 'hiya fred!'
       *
       * // Bound with placeholders.
       * var bound = _.bindKey(object, 'greet', _, '!');
       * bound('hi');
       * // => 'hiya fred!'
       */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG|WRAP_BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
       * Creates a function that accepts arguments of `func` and either invokes
       * `func` returning its result, if at least `arity` number of arguments have
       * been provided, or returns a function that accepts the remaining `func`
       * arguments, and so on. The arity of `func` may be specified if `func.length`
       * is not sufficient.
       *
       * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
       * may be used as a placeholder for provided arguments.
       *
       * **Note:** This method doesn't set the "length" property of curried functions.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Function
       * @param {Function} func The function to curry.
       * @param {number} [arity=func.length] The arity of `func`.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Function} Returns the new curried function.
       * @example
       *
       * var abc = function(a, b, c) {
       *   return [a, b, c];
       * };
       *
       * var curried = _.curry(abc);
       *
       * curried(1)(2)(3);
       * // => [1, 2, 3]
       *
       * curried(1, 2)(3);
       * // => [1, 2, 3]
       *
       * curried(1, 2, 3);
       * // => [1, 2, 3]
       *
       * // Curried with placeholders.
       * curried(1)(_, 3)(2);
       * // => [1, 2, 3]
       */function curry(func,arity,guard){arity=guard?undefined$1:arity;var result=createWrap(func,WRAP_CURRY_FLAG,undefined$1,undefined$1,undefined$1,undefined$1,undefined$1,arity);result.placeholder=curry.placeholder;return result;}/**
       * This method is like `_.curry` except that arguments are applied to `func`
       * in the manner of `_.partialRight` instead of `_.partial`.
       *
       * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for provided arguments.
       *
       * **Note:** This method doesn't set the "length" property of curried functions.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Function
       * @param {Function} func The function to curry.
       * @param {number} [arity=func.length] The arity of `func`.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Function} Returns the new curried function.
       * @example
       *
       * var abc = function(a, b, c) {
       *   return [a, b, c];
       * };
       *
       * var curried = _.curryRight(abc);
       *
       * curried(3)(2)(1);
       * // => [1, 2, 3]
       *
       * curried(2, 3)(1);
       * // => [1, 2, 3]
       *
       * curried(1, 2, 3);
       * // => [1, 2, 3]
       *
       * // Curried with placeholders.
       * curried(3)(1, _)(2);
       * // => [1, 2, 3]
       */function curryRight(func,arity,guard){arity=guard?undefined$1:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG,undefined$1,undefined$1,undefined$1,undefined$1,undefined$1,arity);result.placeholder=curryRight.placeholder;return result;}/**
       * Creates a debounced function that delays invoking `func` until after `wait`
       * milliseconds have elapsed since the last time the debounced function was
       * invoked. The debounced function comes with a `cancel` method to cancel
       * delayed `func` invocations and a `flush` method to immediately invoke them.
       * Provide `options` to indicate whether `func` should be invoked on the
       * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
       * with the last arguments provided to the debounced function. Subsequent
       * calls to the debounced function return the result of the last `func`
       * invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is
       * invoked on the trailing edge of the timeout only if the debounced function
       * is invoked more than once during the `wait` timeout.
       *
       * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
       * until to the next tick, similar to `setTimeout` with a timeout of `0`.
       *
       * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
       * for details over the differences between `_.debounce` and `_.throttle`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to debounce.
       * @param {number} [wait=0] The number of milliseconds to delay.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.leading=false]
       *  Specify invoking on the leading edge of the timeout.
       * @param {number} [options.maxWait]
       *  The maximum time `func` is allowed to be delayed before it's invoked.
       * @param {boolean} [options.trailing=true]
       *  Specify invoking on the trailing edge of the timeout.
       * @returns {Function} Returns the new debounced function.
       * @example
       *
       * // Avoid costly calculations while the window size is in flux.
       * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
       *
       * // Invoke `sendMail` when clicked, debouncing subsequent calls.
       * jQuery(element).on('click', _.debounce(sendMail, 300, {
       *   'leading': true,
       *   'trailing': false
       * }));
       *
       * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
       * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
       * var source = new EventSource('/stream');
       * jQuery(source).on('message', debounced);
       *
       * // Cancel the trailing debounced invocation.
       * jQuery(window).on('popstate', debounced.cancel);
       */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined$1;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
  lastInvokeTime=time;// Start the timer for the trailing edge.
  timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
  return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
  // trailing edge, the system time has gone backwards and we're treating
  // it as the trailing edge, or we've hit the `maxWait` limit.
  return lastCallTime===undefined$1||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
  timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined$1;// Only invoke if we have `lastArgs` which means `func` has been
  // debounced at least once.
  if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined$1;return result;}function cancel(){if(timerId!==undefined$1){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined$1;}function flush(){return timerId===undefined$1?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined$1){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
  clearTimeout(timerId);timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined$1){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
       * Defers invoking the `func` until the current call stack has cleared. Any
       * additional arguments are provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to defer.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {number} Returns the timer id.
       * @example
       *
       * _.defer(function(text) {
       *   console.log(text);
       * }, 'deferred');
       * // => Logs 'deferred' after one millisecond.
       */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
       * Invokes `func` after `wait` milliseconds. Any additional arguments are
       * provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to delay.
       * @param {number} wait The number of milliseconds to delay invocation.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {number} Returns the timer id.
       * @example
       *
       * _.delay(function(text) {
       *   console.log(text);
       * }, 1000, 'later');
       * // => Logs 'later' after one second.
       */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
       * Creates a function that invokes `func` with arguments reversed.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Function
       * @param {Function} func The function to flip arguments for.
       * @returns {Function} Returns the new flipped function.
       * @example
       *
       * var flipped = _.flip(function() {
       *   return _.toArray(arguments);
       * });
       *
       * flipped('a', 'b', 'c', 'd');
       * // => ['d', 'c', 'b', 'a']
       */function flip(func){return createWrap(func,WRAP_FLIP_FLAG);}/**
       * Creates a function that memoizes the result of `func`. If `resolver` is
       * provided, it determines the cache key for storing the result based on the
       * arguments provided to the memoized function. By default, the first argument
       * provided to the memoized function is used as the map cache key. The `func`
       * is invoked with the `this` binding of the memoized function.
       *
       * **Note:** The cache is exposed as the `cache` property on the memoized
       * function. Its creation may be customized by replacing the `_.memoize.Cache`
       * constructor with one whose instances implement the
       * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
       * method interface of `clear`, `delete`, `get`, `has`, and `set`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to have its output memoized.
       * @param {Function} [resolver] The function to resolve the cache key.
       * @returns {Function} Returns the new memoized function.
       * @example
       *
       * var object = { 'a': 1, 'b': 2 };
       * var other = { 'c': 3, 'd': 4 };
       *
       * var values = _.memoize(_.values);
       * values(object);
       * // => [1, 2]
       *
       * values(other);
       * // => [3, 4]
       *
       * object.a = 2;
       * values(object);
       * // => [1, 2]
       *
       * // Modify the result cache.
       * values.cache.set(object, ['a', 'b']);
       * values(object);
       * // => ['a', 'b']
       *
       * // Replace `_.memoize.Cache`.
       * _.memoize.Cache = WeakMap;
       */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
  memoize.Cache=MapCache;/**
       * Creates a function that negates the result of the predicate `func`. The
       * `func` predicate is invoked with the `this` binding and arguments of the
       * created function.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Function
       * @param {Function} predicate The predicate to negate.
       * @returns {Function} Returns the new negated function.
       * @example
       *
       * function isEven(n) {
       *   return n % 2 == 0;
       * }
       *
       * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
       * // => [1, 3, 5]
       */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return !predicate.call(this);case 1:return !predicate.call(this,args[0]);case 2:return !predicate.call(this,args[0],args[1]);case 3:return !predicate.call(this,args[0],args[1],args[2]);}return !predicate.apply(this,args);};}/**
       * Creates a function that is restricted to invoking `func` once. Repeat calls
       * to the function return the value of the first invocation. The `func` is
       * invoked with the `this` binding and arguments of the created function.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to restrict.
       * @returns {Function} Returns the new restricted function.
       * @example
       *
       * var initialize = _.once(createApplication);
       * initialize();
       * initialize();
       * // => `createApplication` is invoked once
       */function once(func){return before(2,func);}/**
       * Creates a function that invokes `func` with its arguments transformed.
       *
       * @static
       * @since 4.0.0
       * @memberOf _
       * @category Function
       * @param {Function} func The function to wrap.
       * @param {...(Function|Function[])} [transforms=[_.identity]]
       *  The argument transforms.
       * @returns {Function} Returns the new function.
       * @example
       *
       * function doubled(n) {
       *   return n * 2;
       * }
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var func = _.overArgs(function(x, y) {
       *   return [x, y];
       * }, [square, doubled]);
       *
       * func(9, 3);
       * // => [81, 6]
       *
       * func(10, 5);
       * // => [100, 10]
       */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
       * Creates a function that invokes `func` with `partials` prepended to the
       * arguments it receives. This method is like `_.bind` except it does **not**
       * alter the `this` binding.
       *
       * The `_.partial.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * **Note:** This method doesn't set the "length" property of partially
       * applied functions.
       *
       * @static
       * @memberOf _
       * @since 0.2.0
       * @category Function
       * @param {Function} func The function to partially apply arguments to.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new partially applied function.
       * @example
       *
       * function greet(greeting, name) {
       *   return greeting + ' ' + name;
       * }
       *
       * var sayHelloTo = _.partial(greet, 'hello');
       * sayHelloTo('fred');
       * // => 'hello fred'
       *
       * // Partially applied with placeholders.
       * var greetFred = _.partial(greet, _, 'fred');
       * greetFred('hi');
       * // => 'hi fred'
       */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG,undefined$1,partials,holders);});/**
       * This method is like `_.partial` except that partially applied arguments
       * are appended to the arguments it receives.
       *
       * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
       * builds, may be used as a placeholder for partially applied arguments.
       *
       * **Note:** This method doesn't set the "length" property of partially
       * applied functions.
       *
       * @static
       * @memberOf _
       * @since 1.0.0
       * @category Function
       * @param {Function} func The function to partially apply arguments to.
       * @param {...*} [partials] The arguments to be partially applied.
       * @returns {Function} Returns the new partially applied function.
       * @example
       *
       * function greet(greeting, name) {
       *   return greeting + ' ' + name;
       * }
       *
       * var greetFred = _.partialRight(greet, 'fred');
       * greetFred('hi');
       * // => 'hi fred'
       *
       * // Partially applied with placeholders.
       * var sayHelloTo = _.partialRight(greet, 'hello', _);
       * sayHelloTo('fred');
       * // => 'hello fred'
       */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG,undefined$1,partials,holders);});/**
       * Creates a function that invokes `func` with arguments arranged according
       * to the specified `indexes` where the argument value at the first index is
       * provided as the first argument, the argument value at the second index is
       * provided as the second argument, and so on.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Function
       * @param {Function} func The function to rearrange arguments for.
       * @param {...(number|number[])} indexes The arranged argument indexes.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var rearged = _.rearg(function(a, b, c) {
       *   return [a, b, c];
       * }, [2, 0, 1]);
       *
       * rearged('b', 'c', 'a')
       * // => ['a', 'b', 'c']
       */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG,undefined$1,undefined$1,undefined$1,indexes);});/**
       * Creates a function that invokes `func` with the `this` binding of the
       * created function and arguments from `start` and beyond provided as
       * an array.
       *
       * **Note:** This method is based on the
       * [rest parameter](https://mdn.io/rest_parameters).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Function
       * @param {Function} func The function to apply a rest parameter to.
       * @param {number} [start=func.length-1] The start position of the rest parameter.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var say = _.rest(function(what, names) {
       *   return what + ' ' + _.initial(names).join(', ') +
       *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
       * });
       *
       * say('hello', 'fred', 'barney', 'pebbles');
       * // => 'hello fred, barney, & pebbles'
       */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined$1?start:toInteger(start);return baseRest(func,start);}/**
       * Creates a function that invokes `func` with the `this` binding of the
       * create function and an array of arguments much like
       * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
       *
       * **Note:** This method is based on the
       * [spread operator](https://mdn.io/spread_operator).
       *
       * @static
       * @memberOf _
       * @since 3.2.0
       * @category Function
       * @param {Function} func The function to spread arguments over.
       * @param {number} [start=0] The start position of the spread.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var say = _.spread(function(who, what) {
       *   return who + ' says ' + what;
       * });
       *
       * say(['fred', 'hello']);
       * // => 'fred says hello'
       *
       * var numbers = Promise.all([
       *   Promise.resolve(40),
       *   Promise.resolve(36)
       * ]);
       *
       * numbers.then(_.spread(function(x, y) {
       *   return x + y;
       * }));
       * // => a Promise of 76
       */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start==null?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
       * Creates a throttled function that only invokes `func` at most once per
       * every `wait` milliseconds. The throttled function comes with a `cancel`
       * method to cancel delayed `func` invocations and a `flush` method to
       * immediately invoke them. Provide `options` to indicate whether `func`
       * should be invoked on the leading and/or trailing edge of the `wait`
       * timeout. The `func` is invoked with the last arguments provided to the
       * throttled function. Subsequent calls to the throttled function return the
       * result of the last `func` invocation.
       *
       * **Note:** If `leading` and `trailing` options are `true`, `func` is
       * invoked on the trailing edge of the timeout only if the throttled function
       * is invoked more than once during the `wait` timeout.
       *
       * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
       * until to the next tick, similar to `setTimeout` with a timeout of `0`.
       *
       * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
       * for details over the differences between `_.throttle` and `_.debounce`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {Function} func The function to throttle.
       * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.leading=true]
       *  Specify invoking on the leading edge of the timeout.
       * @param {boolean} [options.trailing=true]
       *  Specify invoking on the trailing edge of the timeout.
       * @returns {Function} Returns the new throttled function.
       * @example
       *
       * // Avoid excessively updating the position while scrolling.
       * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
       *
       * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
       * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
       * jQuery(element).on('click', throttled);
       *
       * // Cancel the trailing throttled invocation.
       * jQuery(window).on('popstate', throttled.cancel);
       */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
       * Creates a function that accepts up to one argument, ignoring any
       * additional arguments.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Function
       * @param {Function} func The function to cap arguments for.
       * @returns {Function} Returns the new capped function.
       * @example
       *
       * _.map(['6', '8', '10'], _.unary(parseInt));
       * // => [6, 8, 10]
       */function unary(func){return ary(func,1);}/**
       * Creates a function that provides `value` to `wrapper` as its first
       * argument. Any additional arguments provided to the function are appended
       * to those provided to the `wrapper`. The wrapper is invoked with the `this`
       * binding of the created function.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Function
       * @param {*} value The value to wrap.
       * @param {Function} [wrapper=identity] The wrapper function.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var p = _.wrap(_.escape, function(func, text) {
       *   return '<p>' + func(text) + '</p>';
       * });
       *
       * p('fred, barney, & pebbles');
       * // => '<p>fred, barney, &amp; pebbles</p>'
       */function wrap(value,wrapper){return partial(castFunction(wrapper),value);}/*------------------------------------------------------------------------*/ /**
       * Casts `value` as an array if it's not one.
       *
       * @static
       * @memberOf _
       * @since 4.4.0
       * @category Lang
       * @param {*} value The value to inspect.
       * @returns {Array} Returns the cast array.
       * @example
       *
       * _.castArray(1);
       * // => [1]
       *
       * _.castArray({ 'a': 1 });
       * // => [{ 'a': 1 }]
       *
       * _.castArray('abc');
       * // => ['abc']
       *
       * _.castArray(null);
       * // => [null]
       *
       * _.castArray(undefined);
       * // => [undefined]
       *
       * _.castArray();
       * // => []
       *
       * var array = [1, 2, 3];
       * console.log(_.castArray(array) === array);
       * // => true
       */function castArray(){if(!arguments.length){return [];}var value=arguments[0];return isArray(value)?value:[value];}/**
       * Creates a shallow clone of `value`.
       *
       * **Note:** This method is loosely based on the
       * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
       * and supports cloning arrays, array buffers, booleans, date objects, maps,
       * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
       * arrays. The own enumerable properties of `arguments` objects are cloned
       * as plain objects. An empty object is returned for uncloneable values such
       * as error objects, functions, DOM nodes, and WeakMaps.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to clone.
       * @returns {*} Returns the cloned value.
       * @see _.cloneDeep
       * @example
       *
       * var objects = [{ 'a': 1 }, { 'b': 2 }];
       *
       * var shallow = _.clone(objects);
       * console.log(shallow[0] === objects[0]);
       * // => true
       */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}/**
       * This method is like `_.clone` except that it accepts `customizer` which
       * is invoked to produce the cloned value. If `customizer` returns `undefined`,
       * cloning is handled by the method instead. The `customizer` is invoked with
       * up to four arguments; (value [, index|key, object, stack]).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to clone.
       * @param {Function} [customizer] The function to customize cloning.
       * @returns {*} Returns the cloned value.
       * @see _.cloneDeepWith
       * @example
       *
       * function customizer(value) {
       *   if (_.isElement(value)) {
       *     return value.cloneNode(false);
       *   }
       * }
       *
       * var el = _.cloneWith(document.body, customizer);
       *
       * console.log(el === document.body);
       * // => false
       * console.log(el.nodeName);
       * // => 'BODY'
       * console.log(el.childNodes.length);
       * // => 0
       */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return baseClone(value,CLONE_SYMBOLS_FLAG,customizer);}/**
       * This method is like `_.clone` except that it recursively clones `value`.
       *
       * @static
       * @memberOf _
       * @since 1.0.0
       * @category Lang
       * @param {*} value The value to recursively clone.
       * @returns {*} Returns the deep cloned value.
       * @see _.clone
       * @example
       *
       * var objects = [{ 'a': 1 }, { 'b': 2 }];
       *
       * var deep = _.cloneDeep(objects);
       * console.log(deep[0] === objects[0]);
       * // => false
       */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}/**
       * This method is like `_.cloneWith` except that it recursively clones `value`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to recursively clone.
       * @param {Function} [customizer] The function to customize cloning.
       * @returns {*} Returns the deep cloned value.
       * @see _.cloneWith
       * @example
       *
       * function customizer(value) {
       *   if (_.isElement(value)) {
       *     return value.cloneNode(true);
       *   }
       * }
       *
       * var el = _.cloneDeepWith(document.body, customizer);
       *
       * console.log(el === document.body);
       * // => false
       * console.log(el.nodeName);
       * // => 'BODY'
       * console.log(el.childNodes.length);
       * // => 20
       */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG,customizer);}/**
       * Checks if `object` conforms to `source` by invoking the predicate
       * properties of `source` with the corresponding property values of `object`.
       *
       * **Note:** This method is equivalent to `_.conforms` when `source` is
       * partially applied.
       *
       * @static
       * @memberOf _
       * @since 4.14.0
       * @category Lang
       * @param {Object} object The object to inspect.
       * @param {Object} source The object of property predicates to conform to.
       * @returns {boolean} Returns `true` if `object` conforms, else `false`.
       * @example
       *
       * var object = { 'a': 1, 'b': 2 };
       *
       * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
       * // => true
       *
       * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
       * // => false
       */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
       * Performs a
       * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
       * comparison between two values to determine if they are equivalent.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.eq(object, object);
       * // => true
       *
       * _.eq(object, other);
       * // => false
       *
       * _.eq('a', 'a');
       * // => true
       *
       * _.eq('a', Object('a'));
       * // => false
       *
       * _.eq(NaN, NaN);
       * // => true
       */function eq(value,other){return value===other||value!==value&&other!==other;}/**
       * Checks if `value` is greater than `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than `other`,
       *  else `false`.
       * @see _.lt
       * @example
       *
       * _.gt(3, 1);
       * // => true
       *
       * _.gt(3, 3);
       * // => false
       *
       * _.gt(1, 3);
       * // => false
       */var gt=createRelationalOperation(baseGt);/**
       * Checks if `value` is greater than or equal to `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is greater than or equal to
       *  `other`, else `false`.
       * @see _.lte
       * @example
       *
       * _.gte(3, 1);
       * // => true
       *
       * _.gte(3, 3);
       * // => true
       *
       * _.gte(1, 3);
       * // => false
       */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
       * Checks if `value` is likely an `arguments` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an `arguments` object,
       *  else `false`.
       * @example
       *
       * _.isArguments(function() { return arguments; }());
       * // => true
       *
       * _.isArguments([1, 2, 3]);
       * // => false
       */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};/**
       * Checks if `value` is classified as an `Array` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array, else `false`.
       * @example
       *
       * _.isArray([1, 2, 3]);
       * // => true
       *
       * _.isArray(document.body.children);
       * // => false
       *
       * _.isArray('abc');
       * // => false
       *
       * _.isArray(_.noop);
       * // => false
       */var isArray=Array.isArray;/**
       * Checks if `value` is classified as an `ArrayBuffer` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
       * @example
       *
       * _.isArrayBuffer(new ArrayBuffer(2));
       * // => true
       *
       * _.isArrayBuffer(new Array(2));
       * // => false
       */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
       * Checks if `value` is array-like. A value is considered array-like if it's
       * not a function and has a `value.length` that's an integer greater than or
       * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
       * @example
       *
       * _.isArrayLike([1, 2, 3]);
       * // => true
       *
       * _.isArrayLike(document.body.children);
       * // => true
       *
       * _.isArrayLike('abc');
       * // => true
       *
       * _.isArrayLike(_.noop);
       * // => false
       */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
       * This method is like `_.isArrayLike` except that it also checks if `value`
       * is an object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an array-like object,
       *  else `false`.
       * @example
       *
       * _.isArrayLikeObject([1, 2, 3]);
       * // => true
       *
       * _.isArrayLikeObject(document.body.children);
       * // => true
       *
       * _.isArrayLikeObject('abc');
       * // => false
       *
       * _.isArrayLikeObject(_.noop);
       * // => false
       */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
       * Checks if `value` is classified as a boolean primitive or object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
       * @example
       *
       * _.isBoolean(false);
       * // => true
       *
       * _.isBoolean(null);
       * // => false
       */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag;}/**
       * Checks if `value` is a buffer.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
       * @example
       *
       * _.isBuffer(new Buffer(2));
       * // => true
       *
       * _.isBuffer(new Uint8Array(2));
       * // => false
       */var isBuffer=nativeIsBuffer||stubFalse;/**
       * Checks if `value` is classified as a `Date` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
       * @example
       *
       * _.isDate(new Date);
       * // => true
       *
       * _.isDate('Mon April 23 2012');
       * // => false
       */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
       * Checks if `value` is likely a DOM element.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
       * @example
       *
       * _.isElement(document.body);
       * // => true
       *
       * _.isElement('<body>');
       * // => false
       */function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}/**
       * Checks if `value` is an empty object, collection, map, or set.
       *
       * Objects are considered empty if they have no own enumerable string keyed
       * properties.
       *
       * Array-like values such as `arguments` objects, arrays, buffers, strings, or
       * jQuery-like collections are considered empty if they have a `length` of `0`.
       * Similarly, maps and sets are considered empty if they have a `size` of `0`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is empty, else `false`.
       * @example
       *
       * _.isEmpty(null);
       * // => true
       *
       * _.isEmpty(true);
       * // => true
       *
       * _.isEmpty(1);
       * // => true
       *
       * _.isEmpty([1, 2, 3]);
       * // => false
       *
       * _.isEmpty({ 'a': 1 });
       * // => false
       */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return !value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return !value.size;}if(isPrototype(value)){return !baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
       * Performs a deep comparison between two values to determine if they are
       * equivalent.
       *
       * **Note:** This method supports comparing arrays, array buffers, booleans,
       * date objects, error objects, maps, numbers, `Object` objects, regexes,
       * sets, strings, symbols, and typed arrays. `Object` objects are compared
       * by their own, not inherited, enumerable properties. Functions and DOM
       * nodes are compared by strict equality, i.e. `===`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * var object = { 'a': 1 };
       * var other = { 'a': 1 };
       *
       * _.isEqual(object, other);
       * // => true
       *
       * object === other;
       * // => false
       */function isEqual(value,other){return baseIsEqual(value,other);}/**
       * This method is like `_.isEqual` except that it accepts `customizer` which
       * is invoked to compare values. If `customizer` returns `undefined`, comparisons
       * are handled by the method instead. The `customizer` is invoked with up to
       * six arguments: (objValue, othValue [, index|key, object, other, stack]).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @param {Function} [customizer] The function to customize comparisons.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * function isGreeting(value) {
       *   return /^h(?:i|ello)$/.test(value);
       * }
       *
       * function customizer(objValue, othValue) {
       *   if (isGreeting(objValue) && isGreeting(othValue)) {
       *     return true;
       *   }
       * }
       *
       * var array = ['hello', 'goodbye'];
       * var other = ['hi', 'goodbye'];
       *
       * _.isEqualWith(array, other, customizer);
       * // => true
       */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;var result=customizer?customizer(value,other):undefined$1;return result===undefined$1?baseIsEqual(value,other,undefined$1,customizer):!!result;}/**
       * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
       * `SyntaxError`, `TypeError`, or `URIError` object.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
       * @example
       *
       * _.isError(new Error);
       * // => true
       *
       * _.isError(Error);
       * // => false
       */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}/**
       * Checks if `value` is a finite primitive number.
       *
       * **Note:** This method is based on
       * [`Number.isFinite`](https://mdn.io/Number/isFinite).
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
       * @example
       *
       * _.isFinite(3);
       * // => true
       *
       * _.isFinite(Number.MIN_VALUE);
       * // => true
       *
       * _.isFinite(Infinity);
       * // => false
       *
       * _.isFinite('3');
       * // => false
       */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
       * Checks if `value` is classified as a `Function` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a function, else `false`.
       * @example
       *
       * _.isFunction(_);
       * // => true
       *
       * _.isFunction(/abc/);
       * // => false
       */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
       * Checks if `value` is an integer.
       *
       * **Note:** This method is based on
       * [`Number.isInteger`](https://mdn.io/Number/isInteger).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
       * @example
       *
       * _.isInteger(3);
       * // => true
       *
       * _.isInteger(Number.MIN_VALUE);
       * // => false
       *
       * _.isInteger(Infinity);
       * // => false
       *
       * _.isInteger('3');
       * // => false
       */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
       * Checks if `value` is a valid array-like length.
       *
       * **Note:** This method is loosely based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
       * @example
       *
       * _.isLength(3);
       * // => true
       *
       * _.isLength(Number.MIN_VALUE);
       * // => false
       *
       * _.isLength(Infinity);
       * // => false
       *
       * _.isLength('3');
       * // => false
       */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
       * Checks if `value` is the
       * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
       * @example
       *
       * _.isObject({});
       * // => true
       *
       * _.isObject([1, 2, 3]);
       * // => true
       *
       * _.isObject(_.noop);
       * // => true
       *
       * _.isObject(null);
       * // => false
       */function isObject(value){var type=_typeof(value);return value!=null&&(type=='object'||type=='function');}/**
       * Checks if `value` is object-like. A value is object-like if it's not `null`
       * and has a `typeof` result of "object".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
       * @example
       *
       * _.isObjectLike({});
       * // => true
       *
       * _.isObjectLike([1, 2, 3]);
       * // => true
       *
       * _.isObjectLike(_.noop);
       * // => false
       *
       * _.isObjectLike(null);
       * // => false
       */function isObjectLike(value){return value!=null&&_typeof(value)=='object';}/**
       * Checks if `value` is classified as a `Map` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a map, else `false`.
       * @example
       *
       * _.isMap(new Map);
       * // => true
       *
       * _.isMap(new WeakMap);
       * // => false
       */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
       * Performs a partial deep comparison between `object` and `source` to
       * determine if `object` contains equivalent property values.
       *
       * **Note:** This method is equivalent to `_.matches` when `source` is
       * partially applied.
       *
       * Partial comparisons will match empty array and empty object `source`
       * values against any array or object value, respectively. See `_.isEqual`
       * for a list of supported value comparisons.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {Object} object The object to inspect.
       * @param {Object} source The object of property values to match.
       * @returns {boolean} Returns `true` if `object` is a match, else `false`.
       * @example
       *
       * var object = { 'a': 1, 'b': 2 };
       *
       * _.isMatch(object, { 'b': 2 });
       * // => true
       *
       * _.isMatch(object, { 'b': 1 });
       * // => false
       */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
       * This method is like `_.isMatch` except that it accepts `customizer` which
       * is invoked to compare values. If `customizer` returns `undefined`, comparisons
       * are handled by the method instead. The `customizer` is invoked with five
       * arguments: (objValue, srcValue, index|key, object, source).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {Object} object The object to inspect.
       * @param {Object} source The object of property values to match.
       * @param {Function} [customizer] The function to customize comparisons.
       * @returns {boolean} Returns `true` if `object` is a match, else `false`.
       * @example
       *
       * function isGreeting(value) {
       *   return /^h(?:i|ello)$/.test(value);
       * }
       *
       * function customizer(objValue, srcValue) {
       *   if (isGreeting(objValue) && isGreeting(srcValue)) {
       *     return true;
       *   }
       * }
       *
       * var object = { 'greeting': 'hello' };
       * var source = { 'greeting': 'hi' };
       *
       * _.isMatchWith(object, source, customizer);
       * // => true
       */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
       * Checks if `value` is `NaN`.
       *
       * **Note:** This method is based on
       * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
       * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
       * `undefined` and other non-number values.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
       * @example
       *
       * _.isNaN(NaN);
       * // => true
       *
       * _.isNaN(new Number(NaN));
       * // => true
       *
       * isNaN(undefined);
       * // => true
       *
       * _.isNaN(undefined);
       * // => false
       */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value)&&value!=+value;}/**
       * Checks if `value` is a pristine native function.
       *
       * **Note:** This method can't reliably detect native functions in the presence
       * of the core-js package because core-js circumvents this kind of detection.
       * Despite multiple requests, the core-js maintainer has made it clear: any
       * attempt to fix the detection will be obstructed. As a result, we're left
       * with little choice but to throw an error. Unfortunately, this also affects
       * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
       * which rely on core-js.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a native function,
       *  else `false`.
       * @example
       *
       * _.isNative(Array.prototype.push);
       * // => true
       *
       * _.isNative(_);
       * // => false
       */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}/**
       * Checks if `value` is `null`.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
       * @example
       *
       * _.isNull(null);
       * // => true
       *
       * _.isNull(void 0);
       * // => false
       */function isNull(value){return value===null;}/**
       * Checks if `value` is `null` or `undefined`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
       * @example
       *
       * _.isNil(null);
       * // => true
       *
       * _.isNil(void 0);
       * // => true
       *
       * _.isNil(NaN);
       * // => false
       */function isNil(value){return value==null;}/**
       * Checks if `value` is classified as a `Number` primitive or object.
       *
       * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
       * classified as numbers, use the `_.isFinite` method.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a number, else `false`.
       * @example
       *
       * _.isNumber(3);
       * // => true
       *
       * _.isNumber(Number.MIN_VALUE);
       * // => true
       *
       * _.isNumber(Infinity);
       * // => true
       *
       * _.isNumber('3');
       * // => false
       */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag;}/**
       * Checks if `value` is a plain object, that is, an object created by the
       * `Object` constructor or one with a `[[Prototype]]` of `null`.
       *
       * @static
       * @memberOf _
       * @since 0.8.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * _.isPlainObject(new Foo);
       * // => false
       *
       * _.isPlainObject([1, 2, 3]);
       * // => false
       *
       * _.isPlainObject({ 'x': 0, 'y': 0 });
       * // => true
       *
       * _.isPlainObject(Object.create(null));
       * // => true
       */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
       * Checks if `value` is classified as a `RegExp` object.
       *
       * @static
       * @memberOf _
       * @since 0.1.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
       * @example
       *
       * _.isRegExp(/abc/);
       * // => true
       *
       * _.isRegExp('/abc/');
       * // => false
       */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
       * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
       * double precision number which isn't the result of a rounded unsafe integer.
       *
       * **Note:** This method is based on
       * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
       * @example
       *
       * _.isSafeInteger(3);
       * // => true
       *
       * _.isSafeInteger(Number.MIN_VALUE);
       * // => false
       *
       * _.isSafeInteger(Infinity);
       * // => false
       *
       * _.isSafeInteger('3');
       * // => false
       */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
       * Checks if `value` is classified as a `Set` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a set, else `false`.
       * @example
       *
       * _.isSet(new Set);
       * // => true
       *
       * _.isSet(new WeakSet);
       * // => false
       */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
       * Checks if `value` is classified as a `String` primitive or object.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a string, else `false`.
       * @example
       *
       * _.isString('abc');
       * // => true
       *
       * _.isString(1);
       * // => false
       */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}/**
       * Checks if `value` is classified as a `Symbol` primitive or object.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
       * @example
       *
       * _.isSymbol(Symbol.iterator);
       * // => true
       *
       * _.isSymbol('abc');
       * // => false
       */function isSymbol(value){return _typeof(value)=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}/**
       * Checks if `value` is classified as a typed array.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
       * @example
       *
       * _.isTypedArray(new Uint8Array);
       * // => true
       *
       * _.isTypedArray([]);
       * // => false
       */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
       * Checks if `value` is `undefined`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
       * @example
       *
       * _.isUndefined(void 0);
       * // => true
       *
       * _.isUndefined(null);
       * // => false
       */function isUndefined(value){return value===undefined$1;}/**
       * Checks if `value` is classified as a `WeakMap` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
       * @example
       *
       * _.isWeakMap(new WeakMap);
       * // => true
       *
       * _.isWeakMap(new Map);
       * // => false
       */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
       * Checks if `value` is classified as a `WeakSet` object.
       *
       * @static
       * @memberOf _
       * @since 4.3.0
       * @category Lang
       * @param {*} value The value to check.
       * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
       * @example
       *
       * _.isWeakSet(new WeakSet);
       * // => true
       *
       * _.isWeakSet(new Set);
       * // => false
       */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}/**
       * Checks if `value` is less than `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than `other`,
       *  else `false`.
       * @see _.gt
       * @example
       *
       * _.lt(1, 3);
       * // => true
       *
       * _.lt(3, 3);
       * // => false
       *
       * _.lt(3, 1);
       * // => false
       */var lt=createRelationalOperation(baseLt);/**
       * Checks if `value` is less than or equal to `other`.
       *
       * @static
       * @memberOf _
       * @since 3.9.0
       * @category Lang
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @returns {boolean} Returns `true` if `value` is less than or equal to
       *  `other`, else `false`.
       * @see _.gte
       * @example
       *
       * _.lte(1, 3);
       * // => true
       *
       * _.lte(3, 3);
       * // => true
       *
       * _.lte(3, 1);
       * // => false
       */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
       * Converts `value` to an array.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {Array} Returns the converted array.
       * @example
       *
       * _.toArray({ 'a': 1, 'b': 2 });
       * // => [1, 2]
       *
       * _.toArray('abc');
       * // => ['a', 'b', 'c']
       *
       * _.toArray(1);
       * // => []
       *
       * _.toArray(null);
       * // => []
       */function toArray(value){if(!value){return [];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
       * Converts `value` to a finite number.
       *
       * @static
       * @memberOf _
       * @since 4.12.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {number} Returns the converted number.
       * @example
       *
       * _.toFinite(3.2);
       * // => 3.2
       *
       * _.toFinite(Number.MIN_VALUE);
       * // => 5e-324
       *
       * _.toFinite(Infinity);
       * // => 1.7976931348623157e+308
       *
       * _.toFinite('3.2');
       * // => 3.2
       */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
       * Converts `value` to an integer.
       *
       * **Note:** This method is loosely based on
       * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {number} Returns the converted integer.
       * @example
       *
       * _.toInteger(3.2);
       * // => 3
       *
       * _.toInteger(Number.MIN_VALUE);
       * // => 0
       *
       * _.toInteger(Infinity);
       * // => 1.7976931348623157e+308
       *
       * _.toInteger('3.2');
       * // => 3
       */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
       * Converts `value` to an integer suitable for use as the length of an
       * array-like object.
       *
       * **Note:** This method is based on
       * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {number} Returns the converted integer.
       * @example
       *
       * _.toLength(3.2);
       * // => 3
       *
       * _.toLength(Number.MIN_VALUE);
       * // => 0
       *
       * _.toLength(Infinity);
       * // => 4294967295
       *
       * _.toLength('3.2');
       * // => 3
       */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
       * Converts `value` to a number.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to process.
       * @returns {number} Returns the number.
       * @example
       *
       * _.toNumber(3.2);
       * // => 3.2
       *
       * _.toNumber(Number.MIN_VALUE);
       * // => 5e-324
       *
       * _.toNumber(Infinity);
       * // => Infinity
       *
       * _.toNumber('3.2');
       * // => 3.2
       */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
       * Converts `value` to a plain object flattening inherited enumerable string
       * keyed properties of `value` to own properties of the plain object.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {Object} Returns the converted plain object.
       * @example
       *
       * function Foo() {
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.assign({ 'a': 1 }, new Foo);
       * // => { 'a': 1, 'b': 2 }
       *
       * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
       * // => { 'a': 1, 'b': 2, 'c': 3 }
       */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
       * Converts `value` to a safe integer. A safe integer can be compared and
       * represented correctly.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {number} Returns the converted integer.
       * @example
       *
       * _.toSafeInteger(3.2);
       * // => 3
       *
       * _.toSafeInteger(Number.MIN_VALUE);
       * // => 0
       *
       * _.toSafeInteger(Infinity);
       * // => 9007199254740991
       *
       * _.toSafeInteger('3.2');
       * // => 3
       */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER):value===0?value:0;}/**
       * Converts `value` to a string. An empty string is returned for `null`
       * and `undefined` values. The sign of `-0` is preserved.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Lang
       * @param {*} value The value to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.toString(null);
       * // => ''
       *
       * _.toString(-0);
       * // => '-0'
       *
       * _.toString([1, 2, 3]);
       * // => '1,2,3'
       */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*/ /**
       * Assigns own enumerable string keyed properties of source objects to the
       * destination object. Source objects are applied from left to right.
       * Subsequent sources overwrite property assignments of previous sources.
       *
       * **Note:** This method mutates `object` and is loosely based on
       * [`Object.assign`](https://mdn.io/Object/assign).
       *
       * @static
       * @memberOf _
       * @since 0.10.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.assignIn
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * function Bar() {
       *   this.c = 3;
       * }
       *
       * Foo.prototype.b = 2;
       * Bar.prototype.d = 4;
       *
       * _.assign({ 'a': 0 }, new Foo, new Bar);
       * // => { 'a': 1, 'c': 3 }
       */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
       * This method is like `_.assign` except that it iterates over own and
       * inherited source properties.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias extend
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.assign
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       * }
       *
       * function Bar() {
       *   this.c = 3;
       * }
       *
       * Foo.prototype.b = 2;
       * Bar.prototype.d = 4;
       *
       * _.assignIn({ 'a': 0 }, new Foo, new Bar);
       * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
       */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
       * This method is like `_.assignIn` except that it accepts `customizer`
       * which is invoked to produce the assigned values. If `customizer` returns
       * `undefined`, assignment is handled by the method instead. The `customizer`
       * is invoked with five arguments: (objValue, srcValue, key, object, source).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias extendWith
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @see _.assignWith
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   return _.isUndefined(objValue) ? srcValue : objValue;
       * }
       *
       * var defaults = _.partialRight(_.assignInWith, customizer);
       *
       * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
       * This method is like `_.assign` except that it accepts `customizer`
       * which is invoked to produce the assigned values. If `customizer` returns
       * `undefined`, assignment is handled by the method instead. The `customizer`
       * is invoked with five arguments: (objValue, srcValue, key, object, source).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @see _.assignInWith
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   return _.isUndefined(objValue) ? srcValue : objValue;
       * }
       *
       * var defaults = _.partialRight(_.assignWith, customizer);
       *
       * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
       * Creates an array of values corresponding to `paths` of `object`.
       *
       * @static
       * @memberOf _
       * @since 1.0.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Array} Returns the picked values.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
       *
       * _.at(object, ['a[0].b.c', 'a[1]']);
       * // => [3, 4]
       */var at=flatRest(baseAt);/**
       * Creates an object that inherits from the `prototype` object. If a
       * `properties` object is given, its own enumerable string keyed properties
       * are assigned to the created object.
       *
       * @static
       * @memberOf _
       * @since 2.3.0
       * @category Object
       * @param {Object} prototype The object to inherit from.
       * @param {Object} [properties] The properties to assign to the object.
       * @returns {Object} Returns the new object.
       * @example
       *
       * function Shape() {
       *   this.x = 0;
       *   this.y = 0;
       * }
       *
       * function Circle() {
       *   Shape.call(this);
       * }
       *
       * Circle.prototype = _.create(Shape.prototype, {
       *   'constructor': Circle
       * });
       *
       * var circle = new Circle;
       * circle instanceof Circle;
       * // => true
       *
       * circle instanceof Shape;
       * // => true
       */function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}/**
       * Assigns own and inherited enumerable string keyed properties of source
       * objects to the destination object for all destination properties that
       * resolve to `undefined`. Source objects are applied from left to right.
       * Once a property is set, additional values of the same property are ignored.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.defaultsDeep
       * @example
       *
       * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
       * // => { 'a': 1, 'b': 2 }
       */var defaults=baseRest(function(object,sources){object=Object(object);var index=-1;var length=sources.length;var guard=length>2?sources[2]:undefined$1;if(guard&&isIterateeCall(sources[0],sources[1],guard)){length=1;}while(++index<length){var source=sources[index];var props=keysIn(source);var propsIndex=-1;var propsLength=props.length;while(++propsIndex<propsLength){var key=props[propsIndex];var value=object[key];if(value===undefined$1||eq(value,objectProto[key])&&!hasOwnProperty.call(object,key)){object[key]=source[key];}}}return object;});/**
       * This method is like `_.defaults` except that it recursively assigns
       * default properties.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @see _.defaults
       * @example
       *
       * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
       * // => { 'a': { 'b': 2, 'c': 3 } }
       */var defaultsDeep=baseRest(function(args){args.push(undefined$1,customDefaultsMerge);return apply(mergeWith,undefined$1,args);});/**
       * This method is like `_.find` except that it returns the key of the first
       * element `predicate` returns truthy for instead of the element itself.
       *
       * @static
       * @memberOf _
       * @since 1.1.0
       * @category Object
       * @param {Object} object The object to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {string|undefined} Returns the key of the matched element,
       *  else `undefined`.
       * @example
       *
       * var users = {
       *   'barney':  { 'age': 36, 'active': true },
       *   'fred':    { 'age': 40, 'active': false },
       *   'pebbles': { 'age': 1,  'active': true }
       * };
       *
       * _.findKey(users, function(o) { return o.age < 40; });
       * // => 'barney' (iteration order is not guaranteed)
       *
       * // The `_.matches` iteratee shorthand.
       * _.findKey(users, { 'age': 1, 'active': true });
       * // => 'pebbles'
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.findKey(users, ['active', false]);
       * // => 'fred'
       *
       * // The `_.property` iteratee shorthand.
       * _.findKey(users, 'active');
       * // => 'barney'
       */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
       * This method is like `_.findKey` except that it iterates over elements of
       * a collection in the opposite order.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Object
       * @param {Object} object The object to inspect.
       * @param {Function} [predicate=_.identity] The function invoked per iteration.
       * @returns {string|undefined} Returns the key of the matched element,
       *  else `undefined`.
       * @example
       *
       * var users = {
       *   'barney':  { 'age': 36, 'active': true },
       *   'fred':    { 'age': 40, 'active': false },
       *   'pebbles': { 'age': 1,  'active': true }
       * };
       *
       * _.findLastKey(users, function(o) { return o.age < 40; });
       * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
       *
       * // The `_.matches` iteratee shorthand.
       * _.findLastKey(users, { 'age': 36, 'active': true });
       * // => 'barney'
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.findLastKey(users, ['active', false]);
       * // => 'fred'
       *
       * // The `_.property` iteratee shorthand.
       * _.findLastKey(users, 'active');
       * // => 'pebbles'
       */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
       * Iterates over own and inherited enumerable string keyed properties of an
       * object and invokes `iteratee` for each property. The iteratee is invoked
       * with three arguments: (value, key, object). Iteratee functions may exit
       * iteration early by explicitly returning `false`.
       *
       * @static
       * @memberOf _
       * @since 0.3.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Object} Returns `object`.
       * @see _.forInRight
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forIn(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
       */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
       * This method is like `_.forIn` except that it iterates over properties of
       * `object` in the opposite order.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Object} Returns `object`.
       * @see _.forIn
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forInRight(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
       */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
       * Iterates over own enumerable string keyed properties of an object and
       * invokes `iteratee` for each property. The iteratee is invoked with three
       * arguments: (value, key, object). Iteratee functions may exit iteration
       * early by explicitly returning `false`.
       *
       * @static
       * @memberOf _
       * @since 0.3.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Object} Returns `object`.
       * @see _.forOwnRight
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forOwn(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => Logs 'a' then 'b' (iteration order is not guaranteed).
       */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
       * This method is like `_.forOwn` except that it iterates over properties of
       * `object` in the opposite order.
       *
       * @static
       * @memberOf _
       * @since 2.0.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Object} Returns `object`.
       * @see _.forOwn
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.forOwnRight(new Foo, function(value, key) {
       *   console.log(key);
       * });
       * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
       */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
       * Creates an array of function property names from own enumerable properties
       * of `object`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to inspect.
       * @returns {Array} Returns the function names.
       * @see _.functionsIn
       * @example
       *
       * function Foo() {
       *   this.a = _.constant('a');
       *   this.b = _.constant('b');
       * }
       *
       * Foo.prototype.c = _.constant('c');
       *
       * _.functions(new Foo);
       * // => ['a', 'b']
       */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
       * Creates an array of function property names from own and inherited
       * enumerable properties of `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to inspect.
       * @returns {Array} Returns the function names.
       * @see _.functions
       * @example
       *
       * function Foo() {
       *   this.a = _.constant('a');
       *   this.b = _.constant('b');
       * }
       *
       * Foo.prototype.c = _.constant('c');
       *
       * _.functionsIn(new Foo);
       * // => ['a', 'b', 'c']
       */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
       * Gets the value at `path` of `object`. If the resolved value is
       * `undefined`, the `defaultValue` is returned in its place.
       *
       * @static
       * @memberOf _
       * @since 3.7.0
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the property to get.
       * @param {*} [defaultValue] The value returned for `undefined` resolved values.
       * @returns {*} Returns the resolved value.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }] };
       *
       * _.get(object, 'a[0].b.c');
       * // => 3
       *
       * _.get(object, ['a', '0', 'b', 'c']);
       * // => 3
       *
       * _.get(object, 'a.b.c', 'default');
       * // => 'default'
       */function get(object,path,defaultValue){var result=object==null?undefined$1:baseGet(object,path);return result===undefined$1?defaultValue:result;}/**
       * Checks if `path` is a direct property of `object`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path to check.
       * @returns {boolean} Returns `true` if `path` exists, else `false`.
       * @example
       *
       * var object = { 'a': { 'b': 2 } };
       * var other = _.create({ 'a': _.create({ 'b': 2 }) });
       *
       * _.has(object, 'a');
       * // => true
       *
       * _.has(object, 'a.b');
       * // => true
       *
       * _.has(object, ['a', 'b']);
       * // => true
       *
       * _.has(other, 'a');
       * // => false
       */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
       * Checks if `path` is a direct or inherited property of `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path to check.
       * @returns {boolean} Returns `true` if `path` exists, else `false`.
       * @example
       *
       * var object = _.create({ 'a': _.create({ 'b': 2 }) });
       *
       * _.hasIn(object, 'a');
       * // => true
       *
       * _.hasIn(object, 'a.b');
       * // => true
       *
       * _.hasIn(object, ['a', 'b']);
       * // => true
       *
       * _.hasIn(object, 'b');
       * // => false
       */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
       * Creates an object composed of the inverted keys and values of `object`.
       * If `object` contains duplicate values, subsequent values overwrite
       * property assignments of previous values.
       *
       * @static
       * @memberOf _
       * @since 0.7.0
       * @category Object
       * @param {Object} object The object to invert.
       * @returns {Object} Returns the new inverted object.
       * @example
       *
       * var object = { 'a': 1, 'b': 2, 'c': 1 };
       *
       * _.invert(object);
       * // => { '1': 'c', '2': 'b' }
       */var invert=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}result[value]=key;},constant(identity));/**
       * This method is like `_.invert` except that the inverted object is generated
       * from the results of running each element of `object` thru `iteratee`. The
       * corresponding inverted value of each inverted key is an array of keys
       * responsible for generating the inverted value. The iteratee is invoked
       * with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.1.0
       * @category Object
       * @param {Object} object The object to invert.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {Object} Returns the new inverted object.
       * @example
       *
       * var object = { 'a': 1, 'b': 2, 'c': 1 };
       *
       * _.invertBy(object);
       * // => { '1': ['a', 'c'], '2': ['b'] }
       *
       * _.invertBy(object, function(value) {
       *   return 'group' + value;
       * });
       * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
       */var invertBy=createInverter(function(result,value,key){if(value!=null&&typeof value.toString!='function'){value=nativeObjectToString.call(value);}if(hasOwnProperty.call(result,value)){result[value].push(key);}else {result[value]=[key];}},getIteratee);/**
       * Invokes the method at `path` of `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the method to invoke.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {*} Returns the result of the invoked method.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
       *
       * _.invoke(object, 'a[0].b.c.slice', 1, 3);
       * // => [2, 3]
       */var invoke=baseRest(baseInvoke);/**
       * Creates an array of the own enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects. See the
       * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
       * for more details.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keys(new Foo);
       * // => ['a', 'b'] (iteration order is not guaranteed)
       *
       * _.keys('hi');
       * // => ['0', '1']
       */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
       * Creates an array of the own and inherited enumerable property names of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property names.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.keysIn(new Foo);
       * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
       */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
       * The opposite of `_.mapValues`; this method creates an object with the
       * same values as `object` and keys generated by running each own enumerable
       * string keyed property of `object` thru `iteratee`. The iteratee is invoked
       * with three arguments: (value, key, object).
       *
       * @static
       * @memberOf _
       * @since 3.8.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Object} Returns the new mapped object.
       * @see _.mapValues
       * @example
       *
       * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
       *   return key + value;
       * });
       * // => { 'a1': 1, 'b2': 2 }
       */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}/**
       * Creates an object with the same keys as `object` and values generated
       * by running each own enumerable string keyed property of `object` thru
       * `iteratee`. The iteratee is invoked with three arguments:
       * (value, key, object).
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Object} Returns the new mapped object.
       * @see _.mapKeys
       * @example
       *
       * var users = {
       *   'fred':    { 'user': 'fred',    'age': 40 },
       *   'pebbles': { 'user': 'pebbles', 'age': 1 }
       * };
       *
       * _.mapValues(users, function(o) { return o.age; });
       * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
       *
       * // The `_.property` iteratee shorthand.
       * _.mapValues(users, 'age');
       * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
       */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}/**
       * This method is like `_.assign` except that it recursively merges own and
       * inherited enumerable string keyed properties of source objects into the
       * destination object. Source properties that resolve to `undefined` are
       * skipped if a destination value exists. Array and plain object properties
       * are merged recursively. Other objects and value types are overridden by
       * assignment. Source objects are applied from left to right. Subsequent
       * sources overwrite property assignments of previous sources.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 0.5.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} [sources] The source objects.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = {
       *   'a': [{ 'b': 2 }, { 'd': 4 }]
       * };
       *
       * var other = {
       *   'a': [{ 'c': 3 }, { 'e': 5 }]
       * };
       *
       * _.merge(object, other);
       * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
       */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
       * This method is like `_.merge` except that it accepts `customizer` which
       * is invoked to produce the merged values of the destination and source
       * properties. If `customizer` returns `undefined`, merging is handled by the
       * method instead. The `customizer` is invoked with six arguments:
       * (objValue, srcValue, key, object, source, stack).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The destination object.
       * @param {...Object} sources The source objects.
       * @param {Function} customizer The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @example
       *
       * function customizer(objValue, srcValue) {
       *   if (_.isArray(objValue)) {
       *     return objValue.concat(srcValue);
       *   }
       * }
       *
       * var object = { 'a': [1], 'b': [2] };
       * var other = { 'a': [3], 'b': [4] };
       *
       * _.mergeWith(object, other, customizer);
       * // => { 'a': [1, 3], 'b': [2, 4] }
       */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
       * The opposite of `_.pick`; this method creates an object composed of the
       * own and inherited enumerable property paths of `object` that are not omitted.
       *
       * **Note:** This method is considerably slower than `_.pick`.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {...(string|string[])} [paths] The property paths to omit.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.omit(object, ['a', 'c']);
       * // => { 'b': '2' }
       */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG|CLONE_FLAT_FLAG|CLONE_SYMBOLS_FLAG,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});/**
       * The opposite of `_.pickBy`; this method creates an object composed of
       * the own and inherited enumerable string keyed properties of `object` that
       * `predicate` doesn't return truthy for. The predicate is invoked with two
       * arguments: (value, key).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The source object.
       * @param {Function} [predicate=_.identity] The function invoked per property.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.omitBy(object, _.isNumber);
       * // => { 'b': '2' }
       */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
       * Creates an object composed of the picked `object` properties.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The source object.
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.pick(object, ['a', 'c']);
       * // => { 'a': 1, 'c': 3 }
       */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});/**
       * Creates an object composed of the `object` properties `predicate` returns
       * truthy for. The predicate is invoked with two arguments: (value, key).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The source object.
       * @param {Function} [predicate=_.identity] The function invoked per property.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       *
       * _.pickBy(object, _.isNumber);
       * // => { 'a': 1, 'c': 3 }
       */function pickBy(object,predicate){if(object==null){return {};}var props=arrayMap(getAllKeysIn(object),function(prop){return [prop];});predicate=getIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}/**
       * This method is like `_.get` except that if the resolved value is a
       * function it's invoked with the `this` binding of its parent object and
       * its result is returned.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @param {Array|string} path The path of the property to resolve.
       * @param {*} [defaultValue] The value returned for `undefined` resolved values.
       * @returns {*} Returns the resolved value.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
       *
       * _.result(object, 'a[0].b.c1');
       * // => 3
       *
       * _.result(object, 'a[0].b.c2');
       * // => 4
       *
       * _.result(object, 'a[0].b.c3', 'default');
       * // => 'default'
       *
       * _.result(object, 'a[0].b.c3', _.constant('default'));
       * // => 'default'
       */function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
  if(!length){length=1;object=undefined$1;}while(++index<length){var value=object==null?undefined$1:object[toKey(path[index])];if(value===undefined$1){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
       * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
       * it's created. Arrays are created for missing index properties while objects
       * are created for all other missing properties. Use `_.setWith` to customize
       * `path` creation.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 3.7.0
       * @category Object
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to set.
       * @param {*} value The value to set.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }] };
       *
       * _.set(object, 'a[0].b.c', 4);
       * console.log(object.a[0].b.c);
       * // => 4
       *
       * _.set(object, ['x', '0', 'y', 'z'], 5);
       * console.log(object.x[0].y.z);
       * // => 5
       */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
       * This method is like `_.set` except that it accepts `customizer` which is
       * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
       * path creation is handled by the method instead. The `customizer` is invoked
       * with three arguments: (nsValue, key, nsObject).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to set.
       * @param {*} value The value to set.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = {};
       *
       * _.setWith(object, '[0][1]', 'a', Object);
       * // => { '0': { '1': 'a' } }
       */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return object==null?object:baseSet(object,path,value,customizer);}/**
       * Creates an array of own enumerable string keyed-value pairs for `object`
       * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
       * entries are returned.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias entries
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the key-value pairs.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.toPairs(new Foo);
       * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
       */var toPairs=createToPairs(keys);/**
       * Creates an array of own and inherited enumerable string keyed-value pairs
       * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
       * or set, its entries are returned.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @alias entriesIn
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the key-value pairs.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.toPairsIn(new Foo);
       * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
       */var toPairsIn=createToPairs(keysIn);/**
       * An alternative to `_.reduce`; this method transforms `object` to a new
       * `accumulator` object which is the result of running each of its own
       * enumerable string keyed properties thru `iteratee`, with each invocation
       * potentially mutating the `accumulator` object. If `accumulator` is not
       * provided, a new object with the same `[[Prototype]]` will be used. The
       * iteratee is invoked with four arguments: (accumulator, value, key, object).
       * Iteratee functions may exit iteration early by explicitly returning `false`.
       *
       * @static
       * @memberOf _
       * @since 1.3.0
       * @category Object
       * @param {Object} object The object to iterate over.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @param {*} [accumulator] The custom accumulator value.
       * @returns {*} Returns the accumulated value.
       * @example
       *
       * _.transform([2, 3, 4], function(result, n) {
       *   result.push(n *= n);
       *   return n % 2 == 0;
       * }, []);
       * // => [4, 9]
       *
       * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
       *   (result[value] || (result[value] = [])).push(key);
       * }, {});
       * // => { '1': ['a', 'c'], '2': ['b'] }
       */function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else {accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
       * Removes the property at `path` of `object`.
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Object
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to unset.
       * @returns {boolean} Returns `true` if the property is deleted, else `false`.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 7 } }] };
       * _.unset(object, 'a[0].b.c');
       * // => true
       *
       * console.log(object);
       * // => { 'a': [{ 'b': {} }] };
       *
       * _.unset(object, ['a', '0', 'b', 'c']);
       * // => true
       *
       * console.log(object);
       * // => { 'a': [{ 'b': {} }] };
       */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
       * This method is like `_.set` except that accepts `updater` to produce the
       * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
       * is invoked with one argument: (value).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.6.0
       * @category Object
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to set.
       * @param {Function} updater The function to produce the updated value.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = { 'a': [{ 'b': { 'c': 3 } }] };
       *
       * _.update(object, 'a[0].b.c', function(n) { return n * n; });
       * console.log(object.a[0].b.c);
       * // => 9
       *
       * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
       * console.log(object.x[0].y.z);
       * // => 0
       */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
       * This method is like `_.update` except that it accepts `customizer` which is
       * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
       * path creation is handled by the method instead. The `customizer` is invoked
       * with three arguments: (nsValue, key, nsObject).
       *
       * **Note:** This method mutates `object`.
       *
       * @static
       * @memberOf _
       * @since 4.6.0
       * @category Object
       * @param {Object} object The object to modify.
       * @param {Array|string} path The path of the property to set.
       * @param {Function} updater The function to produce the updated value.
       * @param {Function} [customizer] The function to customize assigned values.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var object = {};
       *
       * _.updateWith(object, '[0][1]', _.constant('a'), Object);
       * // => { '0': { '1': 'a' } }
       */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined$1;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
       * Creates an array of the own enumerable string keyed property values of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property values.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.values(new Foo);
       * // => [1, 2] (iteration order is not guaranteed)
       *
       * _.values('hi');
       * // => ['h', 'i']
       */function values(object){return object==null?[]:baseValues(object,keys(object));}/**
       * Creates an array of the own and inherited enumerable string keyed property
       * values of `object`.
       *
       * **Note:** Non-object values are coerced to objects.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Object
       * @param {Object} object The object to query.
       * @returns {Array} Returns the array of property values.
       * @example
       *
       * function Foo() {
       *   this.a = 1;
       *   this.b = 2;
       * }
       *
       * Foo.prototype.c = 3;
       *
       * _.valuesIn(new Foo);
       * // => [1, 2, 3] (iteration order is not guaranteed)
       */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*/ /**
       * Clamps `number` within the inclusive `lower` and `upper` bounds.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Number
       * @param {number} number The number to clamp.
       * @param {number} [lower] The lower bound.
       * @param {number} upper The upper bound.
       * @returns {number} Returns the clamped number.
       * @example
       *
       * _.clamp(-10, -5, 5);
       * // => -5
       *
       * _.clamp(10, -5, 5);
       * // => 5
       */function clamp(number,lower,upper){if(upper===undefined$1){upper=lower;lower=undefined$1;}if(upper!==undefined$1){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined$1){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
       * Checks if `n` is between `start` and up to, but not including, `end`. If
       * `end` is not specified, it's set to `start` with `start` then set to `0`.
       * If `start` is greater than `end` the params are swapped to support
       * negative ranges.
       *
       * @static
       * @memberOf _
       * @since 3.3.0
       * @category Number
       * @param {number} number The number to check.
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
       * @see _.range, _.rangeRight
       * @example
       *
       * _.inRange(3, 2, 4);
       * // => true
       *
       * _.inRange(4, 8);
       * // => true
       *
       * _.inRange(4, 2);
       * // => false
       *
       * _.inRange(2, 2);
       * // => false
       *
       * _.inRange(1.2, 2);
       * // => true
       *
       * _.inRange(5.2, 4);
       * // => false
       *
       * _.inRange(-3, -2, -6);
       * // => true
       */function inRange(number,start,end){start=toFinite(start);if(end===undefined$1){end=start;start=0;}else {end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
       * Produces a random number between the inclusive `lower` and `upper` bounds.
       * If only one argument is provided a number between `0` and the given number
       * is returned. If `floating` is `true`, or either `lower` or `upper` are
       * floats, a floating-point number is returned instead of an integer.
       *
       * **Note:** JavaScript follows the IEEE-754 standard for resolving
       * floating-point values which can produce unexpected results.
       *
       * @static
       * @memberOf _
       * @since 0.7.0
       * @category Number
       * @param {number} [lower=0] The lower bound.
       * @param {number} [upper=1] The upper bound.
       * @param {boolean} [floating] Specify returning a floating-point number.
       * @returns {number} Returns the random number.
       * @example
       *
       * _.random(0, 5);
       * // => an integer between 0 and 5
       *
       * _.random(5);
       * // => also an integer between 0 and 5
       *
       * _.random(5, true);
       * // => a floating-point number between 0 and 5
       *
       * _.random(1.2, 5.2);
       * // => a floating-point number between 1.2 and 5.2
       */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined$1;}if(floating===undefined$1){if(typeof upper=='boolean'){floating=upper;upper=undefined$1;}else if(typeof lower=='boolean'){floating=lower;lower=undefined$1;}}if(lower===undefined$1&&upper===undefined$1){lower=0;upper=1;}else {lower=toFinite(lower);if(upper===undefined$1){upper=lower;lower=0;}else {upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*/ /**
       * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the camel cased string.
       * @example
       *
       * _.camelCase('Foo Bar');
       * // => 'fooBar'
       *
       * _.camelCase('--foo-bar--');
       * // => 'fooBar'
       *
       * _.camelCase('__FOO_BAR__');
       * // => 'fooBar'
       */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
       * Converts the first character of `string` to upper case and the remaining
       * to lower case.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to capitalize.
       * @returns {string} Returns the capitalized string.
       * @example
       *
       * _.capitalize('FRED');
       * // => 'Fred'
       */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
       * Deburrs `string` by converting
       * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
       * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
       * letters to basic Latin letters and removing
       * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to deburr.
       * @returns {string} Returns the deburred string.
       * @example
       *
       * _.deburr('déjà vu');
       * // => 'deja vu'
       */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
       * Checks if `string` ends with the given target string.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to inspect.
       * @param {string} [target] The string to search for.
       * @param {number} [position=string.length] The position to search up to.
       * @returns {boolean} Returns `true` if `string` ends with `target`,
       *  else `false`.
       * @example
       *
       * _.endsWith('abc', 'c');
       * // => true
       *
       * _.endsWith('abc', 'b');
       * // => false
       *
       * _.endsWith('abc', 'b', 2);
       * // => true
       */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined$1?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
       * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
       * corresponding HTML entities.
       *
       * **Note:** No other characters are escaped. To escape additional
       * characters use a third-party library like [_he_](https://mths.be/he).
       *
       * Though the ">" character is escaped for symmetry, characters like
       * ">" and "/" don't need escaping in HTML and have no special meaning
       * unless they're part of a tag or unquoted attribute value. See
       * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
       * (under "semi-related fun fact") for more details.
       *
       * When working with HTML you should always
       * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
       * XSS vectors.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category String
       * @param {string} [string=''] The string to escape.
       * @returns {string} Returns the escaped string.
       * @example
       *
       * _.escape('fred, barney, & pebbles');
       * // => 'fred, barney, &amp; pebbles'
       */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
       * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
       * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to escape.
       * @returns {string} Returns the escaped string.
       * @example
       *
       * _.escapeRegExp('[lodash](https://lodash.com/)');
       * // => '\[lodash\]\(https://lodash\.com/\)'
       */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
       * Converts `string` to
       * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the kebab cased string.
       * @example
       *
       * _.kebabCase('Foo Bar');
       * // => 'foo-bar'
       *
       * _.kebabCase('fooBar');
       * // => 'foo-bar'
       *
       * _.kebabCase('__FOO_BAR__');
       * // => 'foo-bar'
       */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
       * Converts `string`, as space separated words, to lower case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the lower cased string.
       * @example
       *
       * _.lowerCase('--Foo-Bar--');
       * // => 'foo bar'
       *
       * _.lowerCase('fooBar');
       * // => 'foo bar'
       *
       * _.lowerCase('__FOO_BAR__');
       * // => 'foo bar'
       */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
       * Converts the first character of `string` to lower case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.lowerFirst('Fred');
       * // => 'fred'
       *
       * _.lowerFirst('FRED');
       * // => 'fRED'
       */var lowerFirst=createCaseFirst('toLowerCase');/**
       * Pads `string` on the left and right sides if it's shorter than `length`.
       * Padding characters are truncated if they can't be evenly divided by `length`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to pad.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padded string.
       * @example
       *
       * _.pad('abc', 8);
       * // => '  abc   '
       *
       * _.pad('abc', 8, '_-');
       * // => '_-abc_-_'
       *
       * _.pad('abc', 3);
       * // => 'abc'
       */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
       * Pads `string` on the right side if it's shorter than `length`. Padding
       * characters are truncated if they exceed `length`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to pad.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padded string.
       * @example
       *
       * _.padEnd('abc', 6);
       * // => 'abc   '
       *
       * _.padEnd('abc', 6, '_-');
       * // => 'abc_-_'
       *
       * _.padEnd('abc', 3);
       * // => 'abc'
       */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
       * Pads `string` on the left side if it's shorter than `length`. Padding
       * characters are truncated if they exceed `length`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to pad.
       * @param {number} [length=0] The padding length.
       * @param {string} [chars=' '] The string used as padding.
       * @returns {string} Returns the padded string.
       * @example
       *
       * _.padStart('abc', 6);
       * // => '   abc'
       *
       * _.padStart('abc', 6, '_-');
       * // => '_-_abc'
       *
       * _.padStart('abc', 3);
       * // => 'abc'
       */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
       * Converts `string` to an integer of the specified radix. If `radix` is
       * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
       * hexadecimal, in which case a `radix` of `16` is used.
       *
       * **Note:** This method aligns with the
       * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
       *
       * @static
       * @memberOf _
       * @since 1.1.0
       * @category String
       * @param {string} string The string to convert.
       * @param {number} [radix=10] The radix to interpret `value` by.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {number} Returns the converted integer.
       * @example
       *
       * _.parseInt('08');
       * // => 8
       *
       * _.map(['6', '08', '10'], _.parseInt);
       * // => [6, 8, 10]
       */function parseInt(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}/**
       * Repeats the given string `n` times.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to repeat.
       * @param {number} [n=1] The number of times to repeat the string.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {string} Returns the repeated string.
       * @example
       *
       * _.repeat('*', 3);
       * // => '***'
       *
       * _.repeat('abc', 2);
       * // => 'abcabc'
       *
       * _.repeat('abc', 0);
       * // => ''
       */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined$1){n=1;}else {n=toInteger(n);}return baseRepeat(toString(string),n);}/**
       * Replaces matches for `pattern` in `string` with `replacement`.
       *
       * **Note:** This method is based on
       * [`String#replace`](https://mdn.io/String/replace).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to modify.
       * @param {RegExp|string} pattern The pattern to replace.
       * @param {Function|string} replacement The match replacement.
       * @returns {string} Returns the modified string.
       * @example
       *
       * _.replace('Hi Fred', 'Fred', 'Barney');
       * // => 'Hi Barney'
       */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
       * Converts `string` to
       * [snake case](https://en.wikipedia.org/wiki/Snake_case).
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the snake cased string.
       * @example
       *
       * _.snakeCase('Foo Bar');
       * // => 'foo_bar'
       *
       * _.snakeCase('fooBar');
       * // => 'foo_bar'
       *
       * _.snakeCase('--FOO-BAR--');
       * // => 'foo_bar'
       */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
       * Splits `string` by `separator`.
       *
       * **Note:** This method is based on
       * [`String#split`](https://mdn.io/String/split).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to split.
       * @param {RegExp|string} separator The separator pattern to split by.
       * @param {number} [limit] The length to truncate results to.
       * @returns {Array} Returns the string segments.
       * @example
       *
       * _.split('a-b-c', '-', 2);
       * // => ['a', 'b']
       */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined$1;}limit=limit===undefined$1?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return [];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
       * Converts `string` to
       * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
       *
       * @static
       * @memberOf _
       * @since 3.1.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the start cased string.
       * @example
       *
       * _.startCase('--foo-bar--');
       * // => 'Foo Bar'
       *
       * _.startCase('fooBar');
       * // => 'Foo Bar'
       *
       * _.startCase('__FOO_BAR__');
       * // => 'FOO BAR'
       */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
       * Checks if `string` starts with the given target string.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to inspect.
       * @param {string} [target] The string to search for.
       * @param {number} [position=0] The position to search from.
       * @returns {boolean} Returns `true` if `string` starts with `target`,
       *  else `false`.
       * @example
       *
       * _.startsWith('abc', 'a');
       * // => true
       *
       * _.startsWith('abc', 'b');
       * // => false
       *
       * _.startsWith('abc', 'b', 1);
       * // => true
       */function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
       * Creates a compiled template function that can interpolate data properties
       * in "interpolate" delimiters, HTML-escape interpolated data properties in
       * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
       * properties may be accessed as free variables in the template. If a setting
       * object is given, it takes precedence over `_.templateSettings` values.
       *
       * **Note:** In the development build `_.template` utilizes
       * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
       * for easier debugging.
       *
       * For more information on precompiling templates see
       * [lodash's custom builds documentation](https://lodash.com/custom-builds).
       *
       * For more information on Chrome extension sandboxes see
       * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category String
       * @param {string} [string=''] The template string.
       * @param {Object} [options={}] The options object.
       * @param {RegExp} [options.escape=_.templateSettings.escape]
       *  The HTML "escape" delimiter.
       * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
       *  The "evaluate" delimiter.
       * @param {Object} [options.imports=_.templateSettings.imports]
       *  An object to import into the template as free variables.
       * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
       *  The "interpolate" delimiter.
       * @param {string} [options.sourceURL='lodash.templateSources[n]']
       *  The sourceURL of the compiled template.
       * @param {string} [options.variable='obj']
       *  The data object variable name.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Function} Returns the compiled template function.
       * @example
       *
       * // Use the "interpolate" delimiter to create a compiled template.
       * var compiled = _.template('hello <%= user %>!');
       * compiled({ 'user': 'fred' });
       * // => 'hello fred!'
       *
       * // Use the HTML "escape" delimiter to escape data property values.
       * var compiled = _.template('<b><%- value %></b>');
       * compiled({ 'value': '<script>' });
       * // => '<b>&lt;script&gt;</b>'
       *
       * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
       * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
       * compiled({ 'users': ['fred', 'barney'] });
       * // => '<li>fred</li><li>barney</li>'
       *
       * // Use the internal `print` function in "evaluate" delimiters.
       * var compiled = _.template('<% print("hello " + user); %>!');
       * compiled({ 'user': 'barney' });
       * // => 'hello barney!'
       *
       * // Use the ES template literal delimiter as an "interpolate" delimiter.
       * // Disable support by replacing the "interpolate" delimiter.
       * var compiled = _.template('hello ${ user }!');
       * compiled({ 'user': 'pebbles' });
       * // => 'hello pebbles!'
       *
       * // Use backslashes to treat delimiters as plain text.
       * var compiled = _.template('<%= "\\<%- value %\\>" %>');
       * compiled({ 'value': 'ignored' });
       * // => '<%- value %>'
       *
       * // Use the `imports` option to import `jQuery` as `jq`.
       * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
       * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
       * compiled({ 'users': ['fred', 'barney'] });
       * // => '<li>fred</li><li>barney</li>'
       *
       * // Use the `sourceURL` option to specify a custom sourceURL for the template.
       * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
       * compiled(data);
       * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
       *
       * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
       * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
       * compiled.source;
       * // => function(data) {
       * //   var __t, __p = '';
       * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
       * //   return __p;
       * // }
       *
       * // Use custom template delimiters.
       * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
       * var compiled = _.template('hello {{ user }}!');
       * compiled({ 'user': 'mustache' });
       * // => 'hello mustache!'
       *
       * // Use the `source` property to inline compiled templates for meaningful
       * // line numbers in error messages and stack traces.
       * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
       *   var JST = {\
       *     "main": ' + _.template(mainText).source + '\
       *   };\
       * ');
       */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
  // (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined$1;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
  var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
  // The sourceURL gets injected into the source that's eval-ed, so be careful
  // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
  // and escape the comment, thus injecting code that gets evaled.
  var sourceURL='//# sourceURL='+(hasOwnProperty.call(options,'sourceURL')?(options.sourceURL+'').replace(/\s/g,' '):'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
  source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
  if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
  // order to produce the correct `offset` value.
  return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  var variable=hasOwnProperty.call(options,'variable')&&options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
  source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
  source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined$1,importsValues);});// Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.
  result.source=source;if(isError(result)){throw result;}return result;}/**
       * Converts `string`, as a whole, to lower case just like
       * [String#toLowerCase](https://mdn.io/toLowerCase).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the lower cased string.
       * @example
       *
       * _.toLower('--Foo-Bar--');
       * // => '--foo-bar--'
       *
       * _.toLower('fooBar');
       * // => 'foobar'
       *
       * _.toLower('__FOO_BAR__');
       * // => '__foo_bar__'
       */function toLower(value){return toString(value).toLowerCase();}/**
       * Converts `string`, as a whole, to upper case just like
       * [String#toUpperCase](https://mdn.io/toUpperCase).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the upper cased string.
       * @example
       *
       * _.toUpper('--foo-bar--');
       * // => '--FOO-BAR--'
       *
       * _.toUpper('fooBar');
       * // => 'FOOBAR'
       *
       * _.toUpper('__foo_bar__');
       * // => '__FOO_BAR__'
       */function toUpper(value){return toString(value).toUpperCase();}/**
       * Removes leading and trailing whitespace or specified characters from `string`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to trim.
       * @param {string} [chars=whitespace] The characters to trim.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {string} Returns the trimmed string.
       * @example
       *
       * _.trim('  abc  ');
       * // => 'abc'
       *
       * _.trim('-_-abc-_-', '_-');
       * // => 'abc'
       *
       * _.map(['  foo  ', '  bar  '], _.trim);
       * // => ['foo', 'bar']
       */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined$1)){return string.replace(reTrim,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
       * Removes trailing whitespace or specified characters from `string`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to trim.
       * @param {string} [chars=whitespace] The characters to trim.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {string} Returns the trimmed string.
       * @example
       *
       * _.trimEnd('  abc  ');
       * // => '  abc'
       *
       * _.trimEnd('-_-abc-_-', '_-');
       * // => '-_-abc'
       */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined$1)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
       * Removes leading whitespace or specified characters from `string`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to trim.
       * @param {string} [chars=whitespace] The characters to trim.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {string} Returns the trimmed string.
       * @example
       *
       * _.trimStart('  abc  ');
       * // => 'abc  '
       *
       * _.trimStart('-_-abc-_-', '_-');
       * // => 'abc-_-'
       */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined$1)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
       * Truncates `string` if it's longer than the given maximum string length.
       * The last characters of the truncated string are replaced with the omission
       * string which defaults to "...".
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to truncate.
       * @param {Object} [options={}] The options object.
       * @param {number} [options.length=30] The maximum string length.
       * @param {string} [options.omission='...'] The string to indicate text is omitted.
       * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
       * @returns {string} Returns the truncated string.
       * @example
       *
       * _.truncate('hi-diddly-ho there, neighborino');
       * // => 'hi-diddly-ho there, neighbo...'
       *
       * _.truncate('hi-diddly-ho there, neighborino', {
       *   'length': 24,
       *   'separator': ' '
       * });
       * // => 'hi-diddly-ho there,...'
       *
       * _.truncate('hi-diddly-ho there, neighborino', {
       *   'length': 24,
       *   'separator': /,? +/
       * });
       * // => 'hi-diddly-ho there...'
       *
       * _.truncate('hi-diddly-ho there, neighborino', {
       *   'omission': ' [...]'
       * });
       * // => 'hi-diddly-ho there, neig [...]'
       */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined$1){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined$1?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
       * The inverse of `_.escape`; this method converts the HTML entities
       * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
       * their corresponding characters.
       *
       * **Note:** No other HTML entities are unescaped. To unescape additional
       * HTML entities use a third-party library like [_he_](https://mths.be/he).
       *
       * @static
       * @memberOf _
       * @since 0.6.0
       * @category String
       * @param {string} [string=''] The string to unescape.
       * @returns {string} Returns the unescaped string.
       * @example
       *
       * _.unescape('fred, barney, &amp; pebbles');
       * // => 'fred, barney, & pebbles'
       */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
       * Converts `string`, as space separated words, to upper case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the upper cased string.
       * @example
       *
       * _.upperCase('--foo-bar');
       * // => 'FOO BAR'
       *
       * _.upperCase('fooBar');
       * // => 'FOO BAR'
       *
       * _.upperCase('__foo_bar__');
       * // => 'FOO BAR'
       */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
       * Converts the first character of `string` to upper case.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category String
       * @param {string} [string=''] The string to convert.
       * @returns {string} Returns the converted string.
       * @example
       *
       * _.upperFirst('fred');
       * // => 'Fred'
       *
       * _.upperFirst('FRED');
       * // => 'FRED'
       */var upperFirst=createCaseFirst('toUpperCase');/**
       * Splits `string` into an array of its words.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category String
       * @param {string} [string=''] The string to inspect.
       * @param {RegExp|string} [pattern] The pattern to match words.
       * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
       * @returns {Array} Returns the words of `string`.
       * @example
       *
       * _.words('fred, barney, & pebbles');
       * // => ['fred', 'barney', 'pebbles']
       *
       * _.words('fred, barney, & pebbles', /[^, ]+/g);
       * // => ['fred', 'barney', '&', 'pebbles']
       */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined$1:pattern;if(pattern===undefined$1){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*/ /**
       * Attempts to invoke `func`, returning either the result or the caught error
       * object. Any additional arguments are provided to `func` when it's invoked.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {Function} func The function to attempt.
       * @param {...*} [args] The arguments to invoke `func` with.
       * @returns {*} Returns the `func` result or error object.
       * @example
       *
       * // Avoid throwing errors for invalid selectors.
       * var elements = _.attempt(function(selector) {
       *   return document.querySelectorAll(selector);
       * }, '>_>');
       *
       * if (_.isError(elements)) {
       *   elements = [];
       * }
       */var attempt=baseRest(function(func,args){try{return apply(func,undefined$1,args);}catch(e){return isError(e)?e:new Error(e);}});/**
       * Binds methods of an object to the object itself, overwriting the existing
       * method.
       *
       * **Note:** This method doesn't set the "length" property of bound functions.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {Object} object The object to bind and assign the bound methods to.
       * @param {...(string|string[])} methodNames The object method names to bind.
       * @returns {Object} Returns `object`.
       * @example
       *
       * var view = {
       *   'label': 'docs',
       *   'click': function() {
       *     console.log('clicked ' + this.label);
       *   }
       * };
       *
       * _.bindAll(view, ['click']);
       * jQuery(element).on('click', view.click);
       * // => Logs 'clicked docs' when clicked.
       */var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});/**
       * Creates a function that iterates over `pairs` and invokes the corresponding
       * function of the first predicate to return truthy. The predicate-function
       * pairs are invoked with the `this` binding and arguments of the created
       * function.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {Array} pairs The predicate-function pairs.
       * @returns {Function} Returns the new composite function.
       * @example
       *
       * var func = _.cond([
       *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
       *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
       *   [_.stubTrue,                      _.constant('no match')]
       * ]);
       *
       * func({ 'a': 1, 'b': 2 });
       * // => 'matches A'
       *
       * func({ 'a': 0, 'b': 1 });
       * // => 'matches B'
       *
       * func({ 'a': '1', 'b': '2' });
       * // => 'no match'
       */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return [toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
       * Creates a function that invokes the predicate properties of `source` with
       * the corresponding property values of a given object, returning `true` if
       * all predicates return truthy, else `false`.
       *
       * **Note:** The created function is equivalent to `_.conformsTo` with
       * `source` partially applied.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {Object} source The object of property predicates to conform to.
       * @returns {Function} Returns the new spec function.
       * @example
       *
       * var objects = [
       *   { 'a': 2, 'b': 1 },
       *   { 'a': 1, 'b': 2 }
       * ];
       *
       * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
       * // => [{ 'a': 1, 'b': 2 }]
       */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG));}/**
       * Creates a function that returns `value`.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {*} value The value to return from the new function.
       * @returns {Function} Returns the new constant function.
       * @example
       *
       * var objects = _.times(2, _.constant({ 'a': 1 }));
       *
       * console.log(objects);
       * // => [{ 'a': 1 }, { 'a': 1 }]
       *
       * console.log(objects[0] === objects[1]);
       * // => true
       */function constant(value){return function(){return value;};}/**
       * Checks `value` to determine whether a default value should be returned in
       * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
       * or `undefined`.
       *
       * @static
       * @memberOf _
       * @since 4.14.0
       * @category Util
       * @param {*} value The value to check.
       * @param {*} defaultValue The default value.
       * @returns {*} Returns the resolved value.
       * @example
       *
       * _.defaultTo(1, 10);
       * // => 1
       *
       * _.defaultTo(undefined, 10);
       * // => 10
       */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
       * Creates a function that returns the result of invoking the given functions
       * with the `this` binding of the created function, where each successive
       * invocation is supplied the return value of the previous.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {...(Function|Function[])} [funcs] The functions to invoke.
       * @returns {Function} Returns the new composite function.
       * @see _.flowRight
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var addSquare = _.flow([_.add, square]);
       * addSquare(1, 2);
       * // => 9
       */var flow=createFlow();/**
       * This method is like `_.flow` except that it creates a function that
       * invokes the given functions from right to left.
       *
       * @static
       * @since 3.0.0
       * @memberOf _
       * @category Util
       * @param {...(Function|Function[])} [funcs] The functions to invoke.
       * @returns {Function} Returns the new composite function.
       * @see _.flow
       * @example
       *
       * function square(n) {
       *   return n * n;
       * }
       *
       * var addSquare = _.flowRight([square, _.add]);
       * addSquare(1, 2);
       * // => 9
       */var flowRight=createFlow(true);/**
       * This method returns the first argument it receives.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {*} value Any value.
       * @returns {*} Returns `value`.
       * @example
       *
       * var object = { 'a': 1 };
       *
       * console.log(_.identity(object) === object);
       * // => true
       */function identity(value){return value;}/**
       * Creates a function that invokes `func` with the arguments of the created
       * function. If `func` is a property name, the created function returns the
       * property value for a given element. If `func` is an array or object, the
       * created function returns `true` for elements that contain the equivalent
       * source properties, otherwise it returns `false`.
       *
       * @static
       * @since 4.0.0
       * @memberOf _
       * @category Util
       * @param {*} [func=_.identity] The value to convert to a callback.
       * @returns {Function} Returns the callback.
       * @example
       *
       * var users = [
       *   { 'user': 'barney', 'age': 36, 'active': true },
       *   { 'user': 'fred',   'age': 40, 'active': false }
       * ];
       *
       * // The `_.matches` iteratee shorthand.
       * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
       * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
       *
       * // The `_.matchesProperty` iteratee shorthand.
       * _.filter(users, _.iteratee(['user', 'fred']));
       * // => [{ 'user': 'fred', 'age': 40 }]
       *
       * // The `_.property` iteratee shorthand.
       * _.map(users, _.iteratee('user'));
       * // => ['barney', 'fred']
       *
       * // Create custom iteratee shorthands.
       * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
       *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
       *     return func.test(string);
       *   };
       * });
       *
       * _.filter(['abc', 'def'], /ef/);
       * // => ['def']
       */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG));}/**
       * Creates a function that performs a partial deep comparison between a given
       * object and `source`, returning `true` if the given object has equivalent
       * property values, else `false`.
       *
       * **Note:** The created function is equivalent to `_.isMatch` with `source`
       * partially applied.
       *
       * Partial comparisons will match empty array and empty object `source`
       * values against any array or object value, respectively. See `_.isEqual`
       * for a list of supported value comparisons.
       *
       * **Note:** Multiple values can be checked by combining several matchers
       * using `_.overSome`
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {Object} source The object of property values to match.
       * @returns {Function} Returns the new spec function.
       * @example
       *
       * var objects = [
       *   { 'a': 1, 'b': 2, 'c': 3 },
       *   { 'a': 4, 'b': 5, 'c': 6 }
       * ];
       *
       * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
       * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
       *
       * // Checking for several possible values
       * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
       * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
       */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG));}/**
       * Creates a function that performs a partial deep comparison between the
       * value at `path` of a given object to `srcValue`, returning `true` if the
       * object value is equivalent, else `false`.
       *
       * **Note:** Partial comparisons will match empty array and empty object
       * `srcValue` values against any array or object value, respectively. See
       * `_.isEqual` for a list of supported value comparisons.
       *
       * **Note:** Multiple values can be checked by combining several matchers
       * using `_.overSome`
       *
       * @static
       * @memberOf _
       * @since 3.2.0
       * @category Util
       * @param {Array|string} path The path of the property to get.
       * @param {*} srcValue The value to match.
       * @returns {Function} Returns the new spec function.
       * @example
       *
       * var objects = [
       *   { 'a': 1, 'b': 2, 'c': 3 },
       *   { 'a': 4, 'b': 5, 'c': 6 }
       * ];
       *
       * _.find(objects, _.matchesProperty('a', 4));
       * // => { 'a': 4, 'b': 5, 'c': 6 }
       *
       * // Checking for several possible values
       * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
       * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
       */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG));}/**
       * Creates a function that invokes the method at `path` of a given object.
       * Any additional arguments are provided to the invoked method.
       *
       * @static
       * @memberOf _
       * @since 3.7.0
       * @category Util
       * @param {Array|string} path The path of the method to invoke.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Function} Returns the new invoker function.
       * @example
       *
       * var objects = [
       *   { 'a': { 'b': _.constant(2) } },
       *   { 'a': { 'b': _.constant(1) } }
       * ];
       *
       * _.map(objects, _.method('a.b'));
       * // => [2, 1]
       *
       * _.map(objects, _.method(['a', 'b']));
       * // => [2, 1]
       */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
       * The opposite of `_.method`; this method creates a function that invokes
       * the method at a given path of `object`. Any additional arguments are
       * provided to the invoked method.
       *
       * @static
       * @memberOf _
       * @since 3.7.0
       * @category Util
       * @param {Object} object The object to query.
       * @param {...*} [args] The arguments to invoke the method with.
       * @returns {Function} Returns the new invoker function.
       * @example
       *
       * var array = _.times(3, _.constant),
       *     object = { 'a': array, 'b': array, 'c': array };
       *
       * _.map(['a[2]', 'c[0]'], _.methodOf(object));
       * // => [2, 0]
       *
       * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
       * // => [2, 0]
       */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
       * Adds all own enumerable string keyed function properties of a source
       * object to the destination object. If `object` is a function, then methods
       * are added to its prototype as well.
       *
       * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
       * avoid conflicts caused by modifying the original.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {Function|Object} [object=lodash] The destination object.
       * @param {Object} source The object of functions to add.
       * @param {Object} [options={}] The options object.
       * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
       * @returns {Function|Object} Returns `object`.
       * @example
       *
       * function vowels(string) {
       *   return _.filter(string, function(v) {
       *     return /[aeiou]/i.test(v);
       *   });
       * }
       *
       * _.mixin({ 'vowels': vowels });
       * _.vowels('fred');
       * // => ['e']
       *
       * _('fred').vowels().value();
       * // => ['e']
       *
       * _.mixin({ 'vowels': vowels }, { 'chain': false });
       * _('fred').vowels();
       * // => ['e']
       */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
       * Reverts the `_` variable to its previous value and returns a reference to
       * the `lodash` function.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @returns {Function} Returns the `lodash` function.
       * @example
       *
       * var lodash = _.noConflict();
       */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
       * This method returns `undefined`.
       *
       * @static
       * @memberOf _
       * @since 2.3.0
       * @category Util
       * @example
       *
       * _.times(2, _.noop);
       * // => [undefined, undefined]
       */function noop(){// No operation performed.
  }/**
       * Creates a function that gets the argument at index `n`. If `n` is negative,
       * the nth argument from the end is returned.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {number} [n=0] The index of the argument to return.
       * @returns {Function} Returns the new pass-thru function.
       * @example
       *
       * var func = _.nthArg(1);
       * func('a', 'b', 'c', 'd');
       * // => 'b'
       *
       * var func = _.nthArg(-2);
       * func('a', 'b', 'c', 'd');
       * // => 'c'
       */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
       * Creates a function that invokes `iteratees` with the arguments it receives
       * and returns their results.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {...(Function|Function[])} [iteratees=[_.identity]]
       *  The iteratees to invoke.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var func = _.over([Math.max, Math.min]);
       *
       * func(1, 2, 3, 4);
       * // => [4, 1]
       */var over=createOver(arrayMap);/**
       * Creates a function that checks if **all** of the `predicates` return
       * truthy when invoked with the arguments it receives.
       *
       * Following shorthands are possible for providing predicates.
       * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
       * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {...(Function|Function[])} [predicates=[_.identity]]
       *  The predicates to check.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var func = _.overEvery([Boolean, isFinite]);
       *
       * func('1');
       * // => true
       *
       * func(null);
       * // => false
       *
       * func(NaN);
       * // => false
       */var overEvery=createOver(arrayEvery);/**
       * Creates a function that checks if **any** of the `predicates` return
       * truthy when invoked with the arguments it receives.
       *
       * Following shorthands are possible for providing predicates.
       * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
       * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {...(Function|Function[])} [predicates=[_.identity]]
       *  The predicates to check.
       * @returns {Function} Returns the new function.
       * @example
       *
       * var func = _.overSome([Boolean, isFinite]);
       *
       * func('1');
       * // => true
       *
       * func(null);
       * // => true
       *
       * func(NaN);
       * // => false
       *
       * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
       * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
       */var overSome=createOver(arraySome);/**
       * Creates a function that returns the value at `path` of a given object.
       *
       * @static
       * @memberOf _
       * @since 2.4.0
       * @category Util
       * @param {Array|string} path The path of the property to get.
       * @returns {Function} Returns the new accessor function.
       * @example
       *
       * var objects = [
       *   { 'a': { 'b': 2 } },
       *   { 'a': { 'b': 1 } }
       * ];
       *
       * _.map(objects, _.property('a.b'));
       * // => [2, 1]
       *
       * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
       * // => [1, 2]
       */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
       * The opposite of `_.property`; this method creates a function that returns
       * the value at a given path of `object`.
       *
       * @static
       * @memberOf _
       * @since 3.0.0
       * @category Util
       * @param {Object} object The object to query.
       * @returns {Function} Returns the new accessor function.
       * @example
       *
       * var array = [0, 1, 2],
       *     object = { 'a': array, 'b': array, 'c': array };
       *
       * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
       * // => [2, 0]
       *
       * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
       * // => [2, 0]
       */function propertyOf(object){return function(path){return object==null?undefined$1:baseGet(object,path);};}/**
       * Creates an array of numbers (positive and/or negative) progressing from
       * `start` up to, but not including, `end`. A step of `-1` is used if a negative
       * `start` is specified without an `end` or `step`. If `end` is not specified,
       * it's set to `start` with `start` then set to `0`.
       *
       * **Note:** JavaScript follows the IEEE-754 standard for resolving
       * floating-point values which can produce unexpected results.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @param {number} [step=1] The value to increment or decrement by.
       * @returns {Array} Returns the range of numbers.
       * @see _.inRange, _.rangeRight
       * @example
       *
       * _.range(4);
       * // => [0, 1, 2, 3]
       *
       * _.range(-4);
       * // => [0, -1, -2, -3]
       *
       * _.range(1, 5);
       * // => [1, 2, 3, 4]
       *
       * _.range(0, 20, 5);
       * // => [0, 5, 10, 15]
       *
       * _.range(0, -4, -1);
       * // => [0, -1, -2, -3]
       *
       * _.range(1, 4, 0);
       * // => [1, 1, 1]
       *
       * _.range(0);
       * // => []
       */var range=createRange();/**
       * This method is like `_.range` except that it populates values in
       * descending order.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {number} [start=0] The start of the range.
       * @param {number} end The end of the range.
       * @param {number} [step=1] The value to increment or decrement by.
       * @returns {Array} Returns the range of numbers.
       * @see _.inRange, _.range
       * @example
       *
       * _.rangeRight(4);
       * // => [3, 2, 1, 0]
       *
       * _.rangeRight(-4);
       * // => [-3, -2, -1, 0]
       *
       * _.rangeRight(1, 5);
       * // => [4, 3, 2, 1]
       *
       * _.rangeRight(0, 20, 5);
       * // => [15, 10, 5, 0]
       *
       * _.rangeRight(0, -4, -1);
       * // => [-3, -2, -1, 0]
       *
       * _.rangeRight(1, 4, 0);
       * // => [1, 1, 1]
       *
       * _.rangeRight(0);
       * // => []
       */var rangeRight=createRange(true);/**
       * This method returns a new empty array.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {Array} Returns the new empty array.
       * @example
       *
       * var arrays = _.times(2, _.stubArray);
       *
       * console.log(arrays);
       * // => [[], []]
       *
       * console.log(arrays[0] === arrays[1]);
       * // => false
       */function stubArray(){return [];}/**
       * This method returns `false`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `false`.
       * @example
       *
       * _.times(2, _.stubFalse);
       * // => [false, false]
       */function stubFalse(){return false;}/**
       * This method returns a new empty object.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {Object} Returns the new empty object.
       * @example
       *
       * var objects = _.times(2, _.stubObject);
       *
       * console.log(objects);
       * // => [{}, {}]
       *
       * console.log(objects[0] === objects[1]);
       * // => false
       */function stubObject(){return {};}/**
       * This method returns an empty string.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {string} Returns the empty string.
       * @example
       *
       * _.times(2, _.stubString);
       * // => ['', '']
       */function stubString(){return '';}/**
       * This method returns `true`.
       *
       * @static
       * @memberOf _
       * @since 4.13.0
       * @category Util
       * @returns {boolean} Returns `true`.
       * @example
       *
       * _.times(2, _.stubTrue);
       * // => [true, true]
       */function stubTrue(){return true;}/**
       * Invokes the iteratee `n` times, returning an array of the results of
       * each invocation. The iteratee is invoked with one argument; (index).
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {number} n The number of times to invoke `iteratee`.
       * @param {Function} [iteratee=_.identity] The function invoked per iteration.
       * @returns {Array} Returns the array of results.
       * @example
       *
       * _.times(3, String);
       * // => ['0', '1', '2']
       *
       *  _.times(4, _.constant(0));
       * // => [0, 0, 0, 0]
       */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return [];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
       * Converts `value` to a property path array.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Util
       * @param {*} value The value to convert.
       * @returns {Array} Returns the new property path array.
       * @example
       *
       * _.toPath('a.b.c');
       * // => ['a', 'b', 'c']
       *
       * _.toPath('a[0].b.c');
       * // => ['a', '0', 'b', 'c']
       */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}/**
       * Generates a unique ID. If `prefix` is given, the ID is appended to it.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Util
       * @param {string} [prefix=''] The value to prefix the ID with.
       * @returns {string} Returns the unique ID.
       * @example
       *
       * _.uniqueId('contact_');
       * // => 'contact_104'
       *
       * _.uniqueId();
       * // => '105'
       */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*/ /**
       * Adds two numbers.
       *
       * @static
       * @memberOf _
       * @since 3.4.0
       * @category Math
       * @param {number} augend The first number in an addition.
       * @param {number} addend The second number in an addition.
       * @returns {number} Returns the total.
       * @example
       *
       * _.add(6, 4);
       * // => 10
       */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
       * Computes `number` rounded up to `precision`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Math
       * @param {number} number The number to round up.
       * @param {number} [precision=0] The precision to round up to.
       * @returns {number} Returns the rounded up number.
       * @example
       *
       * _.ceil(4.006);
       * // => 5
       *
       * _.ceil(6.004, 2);
       * // => 6.01
       *
       * _.ceil(6040, -2);
       * // => 6100
       */var ceil=createRound('ceil');/**
       * Divide two numbers.
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Math
       * @param {number} dividend The first number in a division.
       * @param {number} divisor The second number in a division.
       * @returns {number} Returns the quotient.
       * @example
       *
       * _.divide(6, 4);
       * // => 1.5
       */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
       * Computes `number` rounded down to `precision`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Math
       * @param {number} number The number to round down.
       * @param {number} [precision=0] The precision to round down to.
       * @returns {number} Returns the rounded down number.
       * @example
       *
       * _.floor(4.006);
       * // => 4
       *
       * _.floor(0.046, 2);
       * // => 0.04
       *
       * _.floor(4060, -2);
       * // => 4000
       */var floor=createRound('floor');/**
       * Computes the maximum value of `array`. If `array` is empty or falsey,
       * `undefined` is returned.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Math
       * @param {Array} array The array to iterate over.
       * @returns {*} Returns the maximum value.
       * @example
       *
       * _.max([4, 2, 8, 6]);
       * // => 8
       *
       * _.max([]);
       * // => undefined
       */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined$1;}/**
       * This method is like `_.max` except that it accepts `iteratee` which is
       * invoked for each element in `array` to generate the criterion by which
       * the value is ranked. The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {*} Returns the maximum value.
       * @example
       *
       * var objects = [{ 'n': 1 }, { 'n': 2 }];
       *
       * _.maxBy(objects, function(o) { return o.n; });
       * // => { 'n': 2 }
       *
       * // The `_.property` iteratee shorthand.
       * _.maxBy(objects, 'n');
       * // => { 'n': 2 }
       */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined$1;}/**
       * Computes the mean of the values in `array`.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @returns {number} Returns the mean.
       * @example
       *
       * _.mean([4, 2, 8, 6]);
       * // => 5
       */function mean(array){return baseMean(array,identity);}/**
       * This method is like `_.mean` except that it accepts `iteratee` which is
       * invoked for each element in `array` to generate the value to be averaged.
       * The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {number} Returns the mean.
       * @example
       *
       * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
       *
       * _.meanBy(objects, function(o) { return o.n; });
       * // => 5
       *
       * // The `_.property` iteratee shorthand.
       * _.meanBy(objects, 'n');
       * // => 5
       */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
       * Computes the minimum value of `array`. If `array` is empty or falsey,
       * `undefined` is returned.
       *
       * @static
       * @since 0.1.0
       * @memberOf _
       * @category Math
       * @param {Array} array The array to iterate over.
       * @returns {*} Returns the minimum value.
       * @example
       *
       * _.min([4, 2, 8, 6]);
       * // => 2
       *
       * _.min([]);
       * // => undefined
       */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined$1;}/**
       * This method is like `_.min` except that it accepts `iteratee` which is
       * invoked for each element in `array` to generate the criterion by which
       * the value is ranked. The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {*} Returns the minimum value.
       * @example
       *
       * var objects = [{ 'n': 1 }, { 'n': 2 }];
       *
       * _.minBy(objects, function(o) { return o.n; });
       * // => { 'n': 1 }
       *
       * // The `_.property` iteratee shorthand.
       * _.minBy(objects, 'n');
       * // => { 'n': 1 }
       */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined$1;}/**
       * Multiply two numbers.
       *
       * @static
       * @memberOf _
       * @since 4.7.0
       * @category Math
       * @param {number} multiplier The first number in a multiplication.
       * @param {number} multiplicand The second number in a multiplication.
       * @returns {number} Returns the product.
       * @example
       *
       * _.multiply(6, 4);
       * // => 24
       */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
       * Computes `number` rounded to `precision`.
       *
       * @static
       * @memberOf _
       * @since 3.10.0
       * @category Math
       * @param {number} number The number to round.
       * @param {number} [precision=0] The precision to round to.
       * @returns {number} Returns the rounded number.
       * @example
       *
       * _.round(4.006);
       * // => 4
       *
       * _.round(4.006, 2);
       * // => 4.01
       *
       * _.round(4060, -2);
       * // => 4100
       */var round=createRound('round');/**
       * Subtract two numbers.
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Math
       * @param {number} minuend The first number in a subtraction.
       * @param {number} subtrahend The second number in a subtraction.
       * @returns {number} Returns the difference.
       * @example
       *
       * _.subtract(6, 4);
       * // => 2
       */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
       * Computes the sum of the values in `array`.
       *
       * @static
       * @memberOf _
       * @since 3.4.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @returns {number} Returns the sum.
       * @example
       *
       * _.sum([4, 2, 8, 6]);
       * // => 20
       */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
       * This method is like `_.sum` except that it accepts `iteratee` which is
       * invoked for each element in `array` to generate the value to be summed.
       * The iteratee is invoked with one argument: (value).
       *
       * @static
       * @memberOf _
       * @since 4.0.0
       * @category Math
       * @param {Array} array The array to iterate over.
       * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
       * @returns {number} Returns the sum.
       * @example
       *
       * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
       *
       * _.sumBy(objects, function(o) { return o.n; });
       * // => 20
       *
       * // The `_.property` iteratee shorthand.
       * _.sumBy(objects, 'n');
       * // => 20
       */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/ // Add methods that return wrapped values in chain sequences.
  lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
  lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
  mixin(lodash,lodash);/*------------------------------------------------------------------------*/ // Add methods that return unwrapped values in chain sequences.
  lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
  lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*/ /**
       * The semantic version number.
       *
       * @static
       * @memberOf _
       * @type {string}
       */lodash.VERSION=VERSION;// Assign default placeholders.
  arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
  arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined$1?1:nativeMax(toInteger(n),0);var result=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result.__filtered__){result.__takeCount__=nativeMin(n,result.__takeCount__);}else {result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
  arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
  arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
  arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined$1){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
  baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
  isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined$1});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
  arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
  baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'';if(!hasOwnProperty.call(realNames,key)){realNames[key]=[];}realNames[key].push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined$1,WRAP_BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined$1}];// Add methods to `LazyWrapper`.
  LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
  lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
  lodash.prototype.first=lodash.prototype.head;if(symIterator){lodash.prototype[symIterator]=wrapperToIterator;}return lodash;};/*--------------------------------------------------------------------------*/ // Export lodash.
  var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
  if(freeModule){// Export for Node.js.
  (freeModule.exports=_)._=_;// Export for CommonJS support.
  freeExports._=_;}else {// Export to the global object.
  root._=_;}}).call(commonjsGlobal);});

  var source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements: function insertElements(type, attributes) {
      var _this = this;

      if (is$1.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is$1.array(attributes)) {
        attributes.forEach(function (attribute) {
          insertElement(type, _this.media, attribute);
        });
      }
    },
    // Update source
    // Sources are not checked for support so be careful
    change: function change(input, angle) {
      var _this2 = this;

      // Set the default source to be the first or only source
      var currentInput = input.length ? input[0] : input; // If angle has been specified set the video angle to be this

      if (angle) currentInput = input.find(function (x) {
        return x.angle === angle;
      });

      if (!getDeep(currentInput, 'sources.length') && !currentInput.length) {
        this.debug.warn('Invalid source format');
        return;
      } // Store instance of the player to be loaded after changing source


      var playerClone = lodash.cloneDeep(this);

      var durationClone = this.duration; // Cancel current network requests

      html5.cancelRequests.call(this); // Destroy instance and re-setup

      this.destroy.call(this, function () {
        // Reset quality options
        _this2.options.quality = []; // Remove elements

        removeElement(_this2.media);
        _this2.media = null; // Reset class name

        if (is$1.element(_this2.elements.container)) {
          _this2.elements.container.removeAttribute('class');
        } // Retrieve the list of sources and type


        var _currentInput = currentInput,
            sources = _currentInput.sources,
            type = _currentInput.type; // Set the type and provider

        var _sources = _slicedToArray(sources, 1),
            _sources$ = _sources[0],
            _sources$$provider = _sources$.provider,
            provider = _sources$$provider === void 0 ? providers.html5 : _sources$$provider,
            src = _sources$.src;

        var tagName = provider === 'html5' ? type : 'div';
        var attributes = provider === 'html5' ? {} : {
          src: src
        };
        Object.assign(_this2, {
          provider: provider,
          type: type,
          // Check for support
          supported: support.check(type, provider, _this2.config.playsinline),
          // Create new element
          media: createElement(tagName, attributes)
        }); // Inject the new element

        _this2.elements.container.appendChild(_this2.media); // Autoplay the new source?


        if (is$1.boolean(currentInput.autoplay)) {
          _this2.config.autoplay = currentInput.autoplay;
        } // Set attributes for audio and video


        if (_this2.isHTML5) {
          if (_this2.config.crossorigin) {
            _this2.media.setAttribute('crossorigin', '');
          }

          if (_this2.config.autoplay) {
            _this2.media.setAttribute('autoplay', '');
          }

          if (!is$1.empty(currentInput.poster)) {
            _this2.poster = currentInput.poster;
          }

          if (_this2.config.loop.active) {
            _this2.media.setAttribute('loop', '');
          }

          if (_this2.config.muted) {
            _this2.media.setAttribute('muted', '');
          }

          if (_this2.config.playsinline) {
            _this2.media.setAttribute('playsinline', '');
          }

          if (_this2.config.preload) {
            _this2.media.setAttribute('preload', _this2.config.preload);
          }
        } // Restore class hook


        ui.addStyleHook.call(_this2, _this2.elements.container); // Set new sources for html5

        if (_this2.isHTML5) {
          source.insertElements.call(_this2, 'source', sources);
        } // Set video title


        _this2.config.title = currentInput.title; // Current angle

        if (currentInput.angle) _this2.media.angle = currentInput.angle; // Store Input

        _this2.media.sources = input; // Set up from scratch

        media.setup.call(_this2); // HTML5 stuff

        if (_this2.isHTML5) {
          // Setup captions
          if (Object.keys(currentInput).includes('tracks')) {
            source.insertElements.call(_this2, 'track', currentInput.tracks);
          }
        } // Set up sync points


        _this2.config.syncPoints = currentInput.syncPoints; // If HTML5 or embed but not fully supported, setupInterface and call ready now

        if (_this2.isHTML5 || _this2.isEmbed && !_this2.supported.ui) {
          // Setup interface
          ui.build.call(_this2);
        } // Load HTML5 sources


        if (_this2.isHTML5) {
          _this2.media.load();
        } // Destroy media fragment


        if (_this2.mediaFragment && _this2.mediaFragment.active) {
          _this2.mediaFragment.destroy();

          _this2.mediaFragment = null;
        } // Create new instance of media fragment if still enabled


        if (_this2.config.mediaFragment.enabled) {
          _this2.mediaFragment = new MediaFragment(_this2);
        } // Update previewThumbnails config & reload plugin


        if (!is$1.empty(currentInput.previewThumbnails)) {
          Object.assign(_this2.config.previewThumbnails, currentInput.previewThumbnails); // Cleanup previewThumbnails plugin if it was loaded

          if (_this2.previewThumbnails && _this2.previewThumbnails.loaded) {
            _this2.previewThumbnails.destroy();

            _this2.previewThumbnails = null;
          } // Create new instance if it is still enabled


          if (_this2.config.previewThumbnails.enabled) {
            _this2.previewThumbnails = new PreviewThumbnails(_this2);
          }
        } // Create new instance of the editor plugin


        if (_this2.editor && _this2.editor.loaded) {
          _this2.editor.destroy();

          _this2.editor = null;
        } // Create new instance if it is still enabled


        if (_this2.config.editor.enabled) {
          _this2.editor = new Editor(_this2);

          _this2.editor.loadConfig(playerClone, durationClone);
        } // Create new instance of video markers


        if (_this2.markers) {
          _this2.markers.destroy();

          _this2.markers = null;
        } // Create new instance if it is still enabled


        if (_this2.config.markers.enabled) {
          _this2.markers = new Markers(_this2);

          _this2.markers.loadConfig(playerClone);
        } // Create new instance of trim plugin


        if (_this2.trim && _this2.trim.loaded) {
          _this2.trim.destroy();

          _this2.trim = null;
        } // Create new instance if it is still enabled


        if (_this2.config.trim.enabled) {
          _this2.trim = new Trim(_this2);

          _this2.trim.loadConfig(playerClone);
        } // Update trimming tool support


        _this2.trim.update(); // Update the fullscreen support


        _this2.fullscreen.update();
      }, true);
    }
  };

  // TODO: Use a WeakMap for private globals
  // const globals = new WeakMap();
  // Plyr instance

  var Plyr = /*#__PURE__*/function () {
    function Plyr(target, options) {
      var _this = this;

      _classCallCheck(this, Plyr);

      this.timers = {}; // State

      this.ready = false;
      this.loading = false;
      this.failed = false; // Touch device

      this.touch = support.touch; // Set the media element

      this.media = target; // String selector passed

      if (is$1.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      } // jQuery, NodeList or Array passed, use first element


      if (window.jQuery && this.media instanceof jQuery || is$1.nodeList(this.media) || is$1.array(this.media)) {
        // eslint-disable-next-line
        this.media = this.media[0];
      } // Set config


      this.config = extend({}, defaults$1, Plyr.defaults, options || {}, function () {
        try {
          return JSON.parse(_this.media.getAttribute('data-plyr-config'));
        } catch (e) {
          return {};
        }
      }()); // Elements cache

      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        menu: {
          settings: {
            popup: null,
            menu: null,
            panels: {},
            buttons: {}
          },
          angleSelector: {
            popup: null,
            menu: null,
            panels: {},
            buttons: {}
          }
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

      if (is$1.nullOrUndefined(this.media) || !is$1.element(this.media)) {
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


      var clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone; // Set media type based on tag or data attribute
      // Supported: video, audio, vimeo, youtube

      var type = this.media.tagName.toLowerCase(); // Embed properties

      var iframe = null;
      var url = null; // Different setup based on type

      switch (type) {
        case 'div':
          // Find the frame
          iframe = this.media.querySelector('iframe'); // <iframe> type

          if (is$1.element(iframe)) {
            // Detect provider
            url = parseUrl(iframe.getAttribute('src'));
            this.provider = getProviderByUrl(url.toString()); // Rework elements

            this.elements.container = this.media;
            this.media = iframe; // Reset classname

            this.elements.container.className = ''; // Get attributes from URL and set config

            if (url.search.length) {
              var truthy = ['1', 'true'];

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


          if (is$1.empty(this.provider) || !Object.keys(providers).includes(this.provider)) {
            this.debug.error('Setup failed: Invalid provider');
            return;
          } // Audio will come later for external providers


          this.type = types.video;
          break;

        case 'video':
        case 'audio':
          this.type = type;
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

      if (!is$1.element(this.elements.container)) {
        this.elements.container = createElement('div', {
          tabindex: 0
        });
        wrap(this.media, this.elements.container);
      } // Migrate custom properties from media to container (so they work 😉)


      ui.migrateStyles.call(this); // Add style hook

      ui.addStyleHook.call(this, this.elements.container); // Setup media

      media.setup.call(this); // Listen for events if debugging

      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(' '), function (event) {
          _this.debug.log("event: ".concat(event.type));
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
        this.once('canplay', function () {
          return silencePromise(_this.play());
        });
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


    _createClass(Plyr, [{
      key: "play",

      /**
       * Play the media, or play the advertisement (if they are not blocked)
       */
      value: function play() {
        var _this2 = this;

        if (!is$1.function(this.media.play)) {
          return null;
        } // Intecept play with ads


        if (this.ads && this.ads.enabled) {
          this.ads.managerPromise.then(function () {
            return _this2.ads.play();
          }).catch(function () {
            return silencePromise(_this2.media.play());
          });
        } // Return the promise (for HTML5)


        return this.media.play();
      }
      /**
       * Pause the media
       */

    }, {
      key: "pause",
      value: function pause() {
        if (!this.playing || !is$1.function(this.media.pause)) {
          return null;
        }

        return this.media.pause();
      }
      /**
       * Get playing state
       */

    }, {
      key: "togglePlay",

      /**
       * Toggle playback based on current status
       * @param {Boolean} input
       */
      value: function togglePlay(input) {
        // Toggle based on current state if nothing passed
        var toggle = is$1.boolean(input) ? input : !this.playing;

        if (toggle) {
          return this.play();
        }

        return this.pause();
      }
      /**
       * Stop playback
       */

    }, {
      key: "stop",
      value: function stop() {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is$1.function(this.media.stop)) {
          this.media.stop();
        }
      }
      /**
       * Restart playback
       */

    }, {
      key: "restart",
      value: function restart() {
        this.currentTime = 0;
      }
      /**
       * Rewind
       * @param {Number} seekTime - how far to rewind in seconds. Defaults to the config.seekTime
       */

    }, {
      key: "rewind",
      value: function rewind(seekTime) {
        this.currentTime -= is$1.number(seekTime) ? seekTime : this.config.seekTime;
      }
      /**
       * Fast forward
       * @param {Number} seekTime - how far to fast forward in seconds. Defaults to the config.seekTime
       */

    }, {
      key: "forward",
      value: function forward(seekTime) {
        this.currentTime += is$1.number(seekTime) ? seekTime : this.config.seekTime;
      }
      /**
       * Rewind Frame
       */

    }, {
      key: "frameRewind",
      value: function frameRewind() {
        this.currentTime -= 1 / this.config.frameRate;
      }
      /**
       * Forward Frame
       */

    }, {
      key: "frameForward",
      value: function frameForward() {
        this.currentTime += 1 / this.config.frameRate;
      }
      /**
       * Seek to a time
       * @param {Number} input - where to seek to in seconds. Defaults to 0 (the start)
       */

    }, {
      key: "increaseVolume",

      /**
       * Increase volume
       * @param {Boolean} step - How much to decrease by (between 0 and 1)
       */
      value: function increaseVolume(step) {
        var volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is$1.number(step) ? step : 0);
      }
      /**
       * Decrease volume
       * @param {Boolean} step - How much to decrease by (between 0 and 1)
       */

    }, {
      key: "decreaseVolume",
      value: function decreaseVolume(step) {
        this.increaseVolume(-step);
      }
      /**
       * Set muted state
       * @param {Boolean} mute
       */

    }, {
      key: "toggleCaptions",

      /**
       * Toggle captions
       * @param {Boolean} input - Whether to enable captions
       */
      value: function toggleCaptions(input) {
        captions.toggle.call(this, input, false);
      }
      /**
       * Set the caption track by index
       * @param {Number} - Caption index
       */

    }, {
      key: "airplay",

      /**
       * Trigger the airplay dialog
       * TODO: update player with state, support, enabled
       */
      value: function airplay() {
        // Show dialog if supported
        if (support.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      }
      /**
       * Toggle the player controls
       * @param {Boolean} [toggle] - Whether to show the controls
       */

    }, {
      key: "toggleControls",
      value: function toggleControls(toggle) {
        // Don't toggle if missing UI support or if it's audio
        if (this.supported.ui && !this.isAudio) {
          // Get state before change
          var isHidden = hasClass(this.elements.container, this.config.classNames.hideControls); // Negate the argument if not undefined since adding the class to hides the controls

          var force = typeof toggle === 'undefined' ? undefined : !toggle; // Apply and get updated state

          var hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force); // Close menu

          if (hiding && is$1.array(this.config.controls) && this.config.controls.includes('settings') && !is$1.empty(this.config.settings)) {
            var menuItem = this.elements.menu.angleSelector;
            var button = this.elements.buttons.angleSelector;
            controls.toggleMenu.call(this, false, menuItem, button);
          } // Trigger event on change


          if (hiding !== isHidden) {
            var eventName = hiding ? 'controlshidden' : 'controlsshown';
            triggerEvent.call(this, this.media, eventName);
          }

          return !hiding;
        }

        return false;
      }
      /**
       * Add event listeners
       * @param {String} event - Event type
       * @param {Function} callback - Callback for when event occurs
       */

    }, {
      key: "on",
      value: function on$1(event, callback) {
        on.call(this, this.elements.container, event, callback);
      }
      /**
       * Add event listeners once
       * @param {String} event - Event type
       * @param {Function} callback - Callback for when event occurs
       */

    }, {
      key: "once",
      value: function once$1(event, callback) {
        once.call(this, this.elements.container, event, callback);
      }
      /**
       * Remove event listeners
       * @param {String} event - Event type
       * @param {Function} callback - Callback for when event occurs
       */

    }, {
      key: "off",
      value: function off$1(event, callback) {
        off(this.elements.container, event, callback);
      }
      /**
       * Destroy an instance
       * Event listeners are removed when elements are removed
       * http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
       * @param {Function} callback - Callback for when destroy is complete
       * @param {Boolean} soft - Whether it's a soft destroy (for source changes etc)
       */

    }, {
      key: "destroy",
      value: function destroy(callback) {
        var _this3 = this;

        var soft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!this.ready) {
          return;
        }

        var done = function done() {
          // Reset overflow (incase destroyed while in fullscreen)
          document.body.style.overflow = ''; // GC for embed

          _this3.embed = null; // If it's a soft destroy, make minimal changes

          if (soft) {
            if (Object.keys(_this3.elements).length) {
              // Remove elements
              removeElement(_this3.elements.buttons.play);
              removeElement(_this3.elements.captions);
              removeElement(_this3.elements.controls);
              removeElement(_this3.elements.wrapper);
              removeElement(_this3.editor.elements.container); // Clear for GC

              _this3.elements.buttons.play = null;
              _this3.elements.captions = null;
              _this3.elements.controls = null;
              _this3.elements.wrapper = null;
            } // Callback


            if (is$1.function(callback)) {
              callback();
            }
          } else {
            // Event
            triggerEvent.call(_this3, _this3.elements.container, 'destroyed', true); // Cancel all network requests

            html5.cancelRequests.call(_this3); // Unbind listeners

            unbindListeners.call(_this3); // Replace the container with the original element provided

            replaceElement(_this3.elements.original, _this3.elements.container); // Destroy the editor (editor is inserted after the container element)

            _this3.editor.destroy(); // Callback


            if (is$1.function(callback)) {
              callback.call(_this3.elements.original);
            } // Reset state


            _this3.ready = false; // Clear for garbage collection

            setTimeout(function () {
              _this3.elements = null;
              _this3.media = null;
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

          if (this.embed !== null && is$1.function(this.embed.destroy)) {
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
      }
      /**
       * Check for support for a mime type (HTML5 only)
       * @param {String} type - Mime type
       */

    }, {
      key: "supports",
      value: function supports(type) {
        return support.mime.call(this, type);
      }
      /**
       * Check for support
       * @param {String} type - Player type (audio/video)
       * @param {String} provider - Provider (html5/youtube/vimeo)
       * @param {Boolean} inline - Where player has `playsinline` sttribute
       */

    }, {
      key: "isHTML5",
      get: function get() {
        return this.provider === providers.html5;
      }
    }, {
      key: "isEmbed",
      get: function get() {
        return this.isYouTube || this.isVimeo;
      }
    }, {
      key: "isYouTube",
      get: function get() {
        return this.provider === providers.youtube;
      }
    }, {
      key: "isVimeo",
      get: function get() {
        return this.provider === providers.vimeo;
      }
    }, {
      key: "isVideo",
      get: function get() {
        return this.type === types.video;
      }
    }, {
      key: "isAudio",
      get: function get() {
        return this.type === types.audio;
      }
    }, {
      key: "playing",
      get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      /**
       * Get paused state
       */

    }, {
      key: "paused",
      get: function get() {
        return Boolean(this.media.paused);
      }
      /**
       * Get stopped state
       */

    }, {
      key: "stopped",
      get: function get() {
        return Boolean(this.paused && this.currentTime === 0);
      }
      /**
       * Get ended state
       */

    }, {
      key: "ended",
      get: function get() {
        return Boolean(this.media.ended || this.mediaFragment.active && this.currentTime >= this.duration && this.paused);
      }
    }, {
      key: "currentTime",
      set: function set(input) {
        // Bail if media duration isn't available yet
        if (!this.duration) {
          return;
        } // Validate input


        var inputIsValid = is$1.number(input) && input > 0; // Media fragment start time offset

        var offset = this.mediaFragment.enabled && this.mediaFragment.startTime || 0; // Set

        this.media.currentTime = inputIsValid ? Math.min(input + offset, this.duration + offset) : 0 + offset; // Logging

        this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
      }
      /**
       * Get current time
       */
      ,
      get: function get() {
        // Media fragment start time offset
        var offset = this.mediaFragment.enabled && this.mediaFragment.startTime || 0;
        return Number(this.media.currentTime - offset);
      }
      /**
       * Get buffered
       */

    }, {
      key: "buffered",
      get: function get() {
        var buffered = this.media.buffered; // YouTube / Vimeo return a float between 0-1

        if (is$1.number(buffered)) {
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

    }, {
      key: "seeking",
      get: function get() {
        return Boolean(this.media.seeking);
      }
      /**
       * Get the duration of the current media
       */

    }, {
      key: "duration",
      get: function get() {
        // Faux duration set via config or media fragment
        var fauxDuration = parseFloat(this.config.duration || this.mediaFragment.enabled && this.mediaFragment.duration); // Media duration can be NaN or Infinity before the media has loaded

        var realDuration = (this.media || {}).duration;
        var duration = !is$1.number(realDuration) || realDuration === Infinity ? 0 : realDuration; // If config duration is funky, use regular duration

        return fauxDuration || duration;
      }
      /**
       * Set the player volume
       * @param {Number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
       */

    }, {
      key: "volume",
      set: function set(value) {
        var volume = value;
        var max = 1;
        var min = 0;

        if (is$1.string(volume)) {
          volume = Number(volume);
        } // Load volume from storage if no value specified


        if (!is$1.number(volume)) {
          volume = this.storage.get('volume');
        } // Use config if all else fails


        if (!is$1.number(volume)) {
          volume = this.config.volume;
        } // Maximum is volumeMax


        if (volume > max) {
          volume = max;
        } // Minimum is volumeMin


        if (volume < min) {
          volume = min;
        } // Update config


        this.config.volume = volume; // Set the player volume

        this.media.volume = volume; // If muted, and we're increasing volume manually, reset muted state

        if (!is$1.empty(value) && this.muted && volume > 0) {
          this.muted = false;
        }
      }
      /**
       * Get the current player volume
       */
      ,
      get: function get() {
        return Number(this.media.volume);
      }
    }, {
      key: "muted",
      set: function set(mute) {
        var toggle = mute; // Load muted state from storage

        if (!is$1.boolean(toggle)) {
          toggle = this.storage.get('muted');
        } // Use config if all else fails


        if (!is$1.boolean(toggle)) {
          toggle = this.config.muted;
        } // Update config


        this.config.muted = toggle; // Set mute on the player

        this.media.muted = toggle;
      }
      /**
       * Get current muted state
       */
      ,
      get: function get() {
        return Boolean(this.media.muted);
      }
      /**
       * Check if the media has audio
       */

    }, {
      key: "hasAudio",
      get: function get() {
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

    }, {
      key: "speed",
      set: function set(input) {
        var _this4 = this;

        var speed = null;

        if (is$1.number(input)) {
          speed = input;
        }

        if (!is$1.number(speed)) {
          speed = this.storage.get('speed');
        }

        if (!is$1.number(speed)) {
          speed = this.config.speed.selected;
        } // Clamp to min/max


        var min = this.minimumSpeed,
            max = this.maximumSpeed;
        speed = clamp(speed, min, max); // Update config

        this.config.speed.selected = speed; // Set media speed

        setTimeout(function () {
          _this4.media.playbackRate = speed;
        }, 0);
      }
      /**
       * Get current playback speed
       */
      ,
      get: function get() {
        return Number(this.media.playbackRate);
      }
      /**
       * Get the minimum allowed speed
       */

    }, {
      key: "minimumSpeed",
      get: function get() {
        if (this.isYouTube) {
          // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
          return Math.min.apply(Math, _toConsumableArray(this.options.speed));
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

    }, {
      key: "maximumSpeed",
      get: function get() {
        if (this.isYouTube) {
          // https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate
          return Math.max.apply(Math, _toConsumableArray(this.options.speed));
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

    }, {
      key: "quality",
      set: function set(input) {
        var config = this.config.quality;
        var options = this.options.quality;

        if (!options.length) {
          return;
        }

        var quality = [!is$1.empty(input) && Number(input), this.storage.get('quality'), config.selected, config.default].find(is$1.number);
        var updateStorage = true;

        if (!options.includes(quality)) {
          var value = closest$1(options, quality);
          this.debug.warn("Unsupported quality option: ".concat(quality, ", using ").concat(value, " instead"));
          quality = value; // Don't update storage if quality is not supported

          updateStorage = false;
        } // Update config


        config.selected = quality; // Set quality

        this.media.quality = quality; // Save to storage

        if (updateStorage) {
          this.storage.set({
            quality: quality
          });
        }
      }
      /**
       * Get current quality level
       */
      ,
      get: function get() {
        return this.media.quality;
      }
      /**
       * Toggle loop
       * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
       * @param {Boolean} input - Whether to loop or not
       */

    }, {
      key: "loop",
      set: function set(input) {
        var toggle = is$1.boolean(input) ? input : this.config.loop.active;
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
      ,
      get: function get() {
        return Boolean(this.media.loop);
      }
      /**
       * Set new media source
       * @param {Object} input - The new source object (see docs)
       */

    }, {
      key: "source",
      set: function set(input) {
        source.change.call(this, input);
      }
      /**
       * Get current source
       */
      ,
      get: function get() {
        return this.media.currentSrc;
      }
      /**
       * Get list of avaiable sources
       */

    }, {
      key: "sources",
      get: function get() {
        return this.media.sources;
      }
      /**
       * Get current angle
       */

    }, {
      key: "angle",
      get: function get() {
        return this.media.angle;
      }
      /**
       * Set new media angle
       * @param {Object} input - The new angle name (see docs)
       */
      ,
      set: function set(input) {
        var _this5 = this;

        var currentTime = this.currentTime;
        var currentMatchTime = videoToMatchTime(this.mediaFragment.getMediaTime(currentTime), this.config.syncPoints);
        source.change.call(this, this.media.sources, input);
        triggerEvent.call(this, this.media, 'angleChange', false, {
          angle: input
        });

        if (this.config.matchTime && this.config.syncPoints) {
          this.on('durationchange', function () {
            if (_this5.duration) _this5.currentTime = matchToVideoTime(currentMatchTime, _this5.config.syncPoints);
          });
        }
      }
      /**
       * Get a download URL (either source or custom)
       */

    }, {
      key: "download",
      get: function get() {
        var download = this.config.urls.download;
        return is$1.url(download) ? download : this.source;
      }
      /**
       * Set the download URL
       */
      ,
      set: function set(input) {
        if (!is$1.url(input)) {
          return;
        }

        this.config.urls.download = input;
        controls.setDownloadUrl.call(this);
      }
      /**
       * Set the poster image for a video
       * @param {String} input - the URL for the new poster image
       */

    }, {
      key: "poster",
      set: function set(input) {
        if (!this.isVideo) {
          this.debug.warn('Poster can only be set for video');
          return;
        }

        ui.setPoster.call(this, input, false).catch(function () {});
      }
      /**
       * Get the current poster image
       */
      ,
      get: function get() {
        if (!this.isVideo) {
          return null;
        }

        return this.media.getAttribute('poster') || this.media.getAttribute('data-poster');
      }
      /**
       * Get the current aspect ratio in use
       */

    }, {
      key: "ratio",
      get: function get() {
        if (!this.isVideo) {
          return null;
        }

        var ratio = reduceAspectRatio(getAspectRatio.call(this));
        return is$1.array(ratio) ? ratio.join(':') : ratio;
      }
      /**
       * Set video aspect ratio
       */
      ,
      set: function set(input) {
        if (!this.isVideo) {
          this.debug.warn('Aspect ratio can only be set for video');
          return;
        }

        if (!is$1.string(input) || !validateRatio(input)) {
          this.debug.error("Invalid aspect ratio specified (".concat(input, ")"));
          return;
        }

        this.config.ratio = input;
        setAspectRatio.call(this);
      }
      /**
       * Set the autoplay state
       * @param {Boolean} input - Whether to autoplay or not
       */

    }, {
      key: "autoplay",
      set: function set(input) {
        var toggle = is$1.boolean(input) ? input : this.config.autoplay;
        this.config.autoplay = toggle;
      }
      /**
       * Get the current autoplay state
       */
      ,
      get: function get() {
        return Boolean(this.config.autoplay);
      }
    }, {
      key: "currentTrack",
      set: function set(input) {
        captions.set.call(this, input, false);
      }
      /**
       * Get the current caption track index (-1 if disabled)
       */
      ,
      get: function get() {
        var _this$captions = this.captions,
            toggled = _this$captions.toggled,
            currentTrack = _this$captions.currentTrack;
        return toggled ? currentTrack : -1;
      }
      /**
       * Set the wanted language for captions
       * Since tracks can be added later it won't update the actual caption track until there is a matching track
       * @param {String} - Two character ISO language code (e.g. EN, FR, PT, etc)
       */

    }, {
      key: "language",
      set: function set(input) {
        captions.setLanguage.call(this, input, false);
      }
      /**
       * Get the current track's language
       */
      ,
      get: function get() {
        return (captions.getCurrentTrack.call(this) || {}).language;
      }
      /**
       * Toggle picture-in-picture playback on WebKit/MacOS
       * TODO: update player with state, support, enabled
       * TODO: detect outside changes
       */

    }, {
      key: "pip",
      set: function set(input) {
        // Bail if no support
        if (!support.pip) {
          return;
        } // Toggle based on current state if not passed


        var toggle = is$1.boolean(input) ? input : !this.pip; // Toggle based on current state
        // Safari

        if (is$1.function(this.media.webkitSetPresentationMode)) {
          this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
        } // Chrome


        if (is$1.function(this.media.requestPictureInPicture)) {
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
      ,
      get: function get() {
        if (!support.pip) {
          return null;
        } // Safari


        if (!is$1.empty(this.media.webkitPresentationMode)) {
          return this.media.webkitPresentationMode === pip.active;
        } // Chrome


        return this.media === document.pictureInPictureElement;
      }
    }], [{
      key: "supported",
      value: function supported(type, provider, inline) {
        return support.check(type, provider, inline);
      }
      /**
       * Load an SVG sprite into the page
       * @param {String} url - URL for the SVG sprite
       * @param {String} [id] - Unique ID
       */

    }, {
      key: "loadSprite",
      value: function loadSprite$1(url, id) {
        return loadSprite(url, id);
      }
      /**
       * Setup multiple instances
       * @param {*} selector
       * @param {Object} options
       */

    }, {
      key: "setup",
      value: function setup(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var targets = null;

        if (is$1.string(selector)) {
          targets = Array.from(document.querySelectorAll(selector));
        } else if (is$1.nodeList(selector)) {
          targets = Array.from(selector);
        } else if (is$1.array(selector)) {
          targets = selector.filter(is$1.element);
        }

        if (is$1.empty(targets)) {
          return null;
        }

        return targets.map(function (t) {
          return new Plyr(t, options);
        });
      }
    }]);

    return Plyr;
  }();

  Plyr.defaults = cloneDeep(defaults$1);

  return Plyr;

})));
