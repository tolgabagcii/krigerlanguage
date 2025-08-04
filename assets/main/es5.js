"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var SOFT_MS = 10;
document.addEventListener('pointerdown', function (e) {
  if (e.target.closest('.vibrate') && navigator.vibrate) {
    navigator.vibrate(SOFT_MS);
  }
}, {
  passive: true
});
var shield = document.getElementById('categoryOverlay');
var events = ['pointerdown', 'pointerup', 'click', 'mousedown', 'mouseup', 'touchstart', 'touchend'];
function blokla(e) {
  e.stopPropagation();
  e.preventDefault();
}
function kilitCategory() {
  events.forEach(function (evt) {
    return shield.addEventListener(evt, blokla, true);
  });
}
function kilitAcCategory() {
  events.forEach(function (evt) {
    return shield.removeEventListener(evt, blokla, true);
  });
}
var wordData = {};
Object.keys(window).forEach(function (key) {
  if (/^json\d+$/.test(key) && _typeof(window[key]) === 'object') {
    Object.assign(wordData, window[key]);
  }
});
function playCorrectSound() {
  var a = document.getElementById('correctSound');
  a.currentTime = 0;
  a.play();
}
function playIncorrectSound() {
  var a = document.getElementById('incorrectSound');
  a.currentTime = 0;
  a.play();
}
function playFinishSound() {
  var a = document.getElementById('finishSound');
  a.currentTime = 0;
  a.play();
}
var QuizApp = /*#__PURE__*/function () {
  function QuizApp() {
    _classCallCheck(this, QuizApp);
    this.state = {
      activeCategory: 'Meyveler',
      totalQuestions: Object.keys(wordData['Meyveler']).length,
      writeMode: false,
      listenMode: false,
      colorMode: false,
      imageMode: false,
      languageMode: 'random',
      currentWord: null,
      optionWords: [],
      currentQuestionLanguage: '',
      selectedOption: null,
      answered: false,
      correctAnswers: 0,
      incorrectAnswers: 0,
      emptyAnswers: 0,
      currentQuestionIndex: 0,
      quizFinished: false
    };
    this.categories = Object.keys(wordData);
    this.words = this.getWordsByCategory(this.state.activeCategory);
    this.remainingWords = _toConsumableArray(this.words);
    this.init();
  }
  _createClass(QuizApp, [{
    key: "setSidebarStatus",
    value: function setSidebarStatus(status) {
      var left = document.getElementById('leftSidebar');
      var right = document.getElementById('rightSidebar');
      if (!left || !right) return;
      left.classList.remove('status-correct', 'status-incorrect');
      right.classList.remove('status-correct', 'status-incorrect');
      if (status === 'correct') {
        left.classList.add('status-correct');
        right.classList.add('status-correct');
      } else if (status === 'incorrect') {
        left.classList.add('status-incorrect');
        right.classList.add('status-incorrect');
      }
    }
  }, {
    key: "lockRightSidebar",
    value: function lockRightSidebar() {
      document.getElementById('rightSidebar').style.pointerEvents = 'none';
    }
  }, {
    key: "unlockRightSidebar",
    value: function unlockRightSidebar() {
      document.getElementById('rightSidebar').style.pointerEvents = 'auto';
    }
  }, {
    key: "clearSidebarStatus",
    value: function clearSidebarStatus() {
      var left = document.getElementById('leftSidebar');
      var right = document.getElementById('rightSidebar');
      if (!left || !right) return;
      left.classList.remove('status-correct', 'status-incorrect');
      right.classList.remove('status-correct', 'status-incorrect');
    }
  }, {
    key: "getAllWords",
    value: function getAllWords() {
      var allWords = [];
      for (var category in wordData) {
        for (var wordKey in wordData[category]) {
          var word = wordData[category][wordKey];
          word.category = category;
          word.id = wordKey;
          allWords.push(word);
        }
      }
      return allWords;
    }
  }, {
    key: "getWordsByCategory",
    value: function getWordsByCategory(category) {
      var arr = [];
      for (var wKey in wordData[category]) {
        var w = _objectSpread(_objectSpread({}, wordData[category][wKey]), {}, {
          category: category,
          id: wKey
        });
        arr.push(w);
      }
      return arr;
    }
  }, {
    key: "setCategory",
    value: function setCategory(category) {
      this.unlockRightSidebar();
      this.state.activeCategory = category;
      this.state.quizFinished = false;
      this.words = this.getWordsByCategory(category);
      this.remainingWords = _toConsumableArray(this.words);
      this.state.totalQuestions = this.words.length;
      this.state.currentQuestionIndex = this.state.correctAnswers = this.state.incorrectAnswers = this.state.emptyAnswers = 0;
      this.loadNewQuestion();
      this.updateStats();
      this.updateProgress();
    }
  }, {
    key: "init",
    value: function init() {
      this.bindEvents();
      this.loadNewQuestion();
      this.updateStats();
      this.updateProgress();
      setTimeout(function () {
        var container = document.getElementById('quizContainer');
        container.classList.add('loaded');
      }, 200);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      document.getElementById('leftExpandBtn').addEventListener('click', function () {
        document.getElementById('leftSidebar').classList.toggle('expanded');
      });
      document.getElementById('rightExpandBtn').addEventListener('click', function () {
        document.getElementById('rightSidebar').classList.toggle('expanded');
      });
      document.getElementById('writeMode').addEventListener('click', function () {
        return _this.toggleWriteMode();
      });
      document.getElementById('imageMode').addEventListener('click', function () {
        return _this.toggleImageMode();
      });
      document.getElementById('listenMode').addEventListener('click', function () {
        return _this.toggleListenMode();
      });
      document.getElementById('languageMode').addEventListener('click', function () {
        return _this.toggleLanguageMode();
      });
      document.getElementById('colorMode').addEventListener('click', function () {
        return _this.toggleColorMode();
      });
      document.getElementById('listenBtn').addEventListener('click', function () {
        return _this.playAudio();
      });
      document.getElementById('prevBtn').addEventListener('click', function () {
        return _this.prevQuestion();
      });
      document.getElementById('nextBtn').addEventListener('click', function () {
        return _this.nextQuestion();
      });
      document.getElementById('textInput').addEventListener('input', function (e) {
        var controls = document.getElementById('textInputControls');
        if (e.target.value.trim().length > 0) {
          controls.classList.add('show');
        } else {
          controls.classList.remove('show');
        }
      });
      document.getElementById('textSubmitBtn').addEventListener('click', function () {
        return _this.submitTextAnswer();
      });
    }
  }, {
    key: "toggleWriteMode",
    value: function toggleWriteMode() {
      this.state.writeMode = !this.state.writeMode;
      var writeBtn = document.getElementById('writeMode');
      var optionsContainer = document.getElementById('optionsContainer');
      var textInputArea = document.getElementById('textInputArea');
      if (this.state.writeMode) {
        this.state.selectedOption = null;
        this.state.answered = false;
        document.querySelectorAll('.option-btn').forEach(function (b) {
          return b.classList.remove('selected', 'correct', 'incorrect');
        });
        this.clearSidebarStatus();
        this.updateNextButton();
        document.getElementById('exampleSentence').classList.remove('show');
        closeBottomControls();
        var input = document.getElementById('textInput');
        input.value = '';
        input.classList.remove('error');
        document.getElementById('correctAnswer').style.display = 'none';
        document.getElementById('textInputControls').classList.remove('show');
        writeBtn.classList.add('active');
        optionsContainer.style.display = 'none';
        textInputArea.style.display = 'block';
        input.focus();
      } else {
        writeBtn.classList.remove('active');
        optionsContainer.style.display = 'grid';
        textInputArea.style.display = 'none';
        document.getElementById('textInputControls').classList.remove('show');
      }
    }
  }, {
    key: "toggleImageMode",
    value: function toggleImageMode() {
      if (!this.state.currentWord['görsel url']) {
        this.state.imageMode = false;
        document.getElementById('imageMode').classList.remove('active');
        return;
      }
      this.state.imageMode = !this.state.imageMode;
      var imageBtn = document.getElementById('imageMode');
      var imagePreview = document.getElementById('imagePreview');
      if (this.state.imageMode) {
        imageBtn.classList.add('active');
        imagePreview.classList.add('show', 'has-image');
        this.updateImage();
      } else {
        imageBtn.classList.remove('active');
        imagePreview.classList.remove('show', 'has-image');
      }
    }
  }, {
    key: "applyImageMode",
    value: function applyImageMode() {
      var imageBtn = document.getElementById('imageMode');
      var imagePrev = document.getElementById('imagePreview');
      if (this.state.imageMode && this.state.currentWord['görsel url']) {
        imageBtn.classList.add('active');
        imagePrev.classList.add('show', 'has-image');
        this.updateImage();
      } else {
        imageBtn.classList.remove('active');
        imagePrev.classList.remove('show', 'has-image');
      }
    }
  }, {
    key: "toggleListenMode",
    value: function toggleListenMode() {
      this.state.listenMode = !this.state.listenMode;
      var listenBtn = document.getElementById('listenMode');
      var headerListenBtn = document.getElementById('listenBtn');
      if (this.state.listenMode) {
        listenBtn.classList.add('active');
        headerListenBtn.style.display = 'flex';
        if (this.state.currentWord && this.state.currentWord['ses url']) {
          this.playAudio();
        }
      } else {
        listenBtn.classList.remove('active');
        headerListenBtn.style.display = 'none';
      }
    }
  }, {
    key: "toggleLanguageMode",
    value: function toggleLanguageMode() {
      var languageBtn = document.getElementById('languageMode');
      var languageText = languageBtn.querySelector('.sidebar-btn-text');
      var flagImg = languageBtn.querySelector('#languageFlag');
      var fallbackIcon = languageBtn.querySelector('i');
      if (this.state.languageMode === 'tr') {
        this.state.languageMode = 'de';
        languageText.textContent = 'Deutsch';
      } else if (this.state.languageMode === 'de') {
        this.state.languageMode = 'random';
        languageText.textContent = 'Random';
      } else {
        this.state.languageMode = 'tr';
        languageText.textContent = 'Türkçe';
      }
      switch (this.state.languageMode) {
        case 'de':
          flagImg.src = 'https://flagcdn.com/de.svg';
          flagImg.style.display = 'inline-block';
          fallbackIcon.style.display = 'none';
          break;
        case 'tr':
          flagImg.src = 'https://flagcdn.com/tr.svg';
          flagImg.style.display = 'inline-block';
          fallbackIcon.style.display = 'none';
          break;
        default:
          flagImg.src = '';
          flagImg.style.display = 'none';
          fallbackIcon.style.display = 'inline-block';
      }
      this.state.currentQuestionLanguage = this.state.languageMode === 'random' ? Math.random() > 0.5 ? 'tr' : 'de' : this.state.languageMode;
      this.state.optionWords = this.getRandomOptions();
      this.state.selectedOption = null;
      this.state.answered = false;
      this.clearSidebarStatus();
      this.updateNextButton();
      this.renderQuestion();
    }
  }, {
    key: "toggleColorMode",
    value: function toggleColorMode() {
      this.state.colorMode = !this.state.colorMode;
      var colorBtn = document.getElementById('colorMode');
      if (this.state.colorMode) {
        colorBtn.classList.add('active');
      } else {
        colorBtn.classList.remove('active');
      }
      this.renderQuestion();
      this.restoreAnswerStyles();
    }
  }, {
    key: "playAudio",
    value: function playAudio() {
      if (this.state.currentWord && this.state.currentWord['ses url']) {
        var audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = this.state.currentWord['ses url'];
        audioPlayer.play();
      }
    }
  }, {
    key: "updateImage",
    value: function updateImage() {
      if (this.state.currentWord && this.state.currentWord['görsel url']) {
        var imagePlaceholder = document.getElementById('imagePlaceholder');
        imagePlaceholder.innerHTML = "<img src=\"".concat(this.state.currentWord['görsel url'], "\" alt=\"Quiz Image\">");
      }
    }
  }, {
    key: "loadNewQuestion",
    value: function loadNewQuestion() {
      this.unlockRightSidebar();
      document.getElementById("textSubmitBtn").style.display = "block";
      document.querySelector(".textbolum").style.display = "flex";
      document.getElementById("textInput").readOnly = false;
      document.getElementById("textInput").style.userSelect = "auto";
      document.getElementById("textInput").style.pointerEvents = "auto";
      document.getElementById("textInput").style.cursor = "text";
      document.getElementById("textInput").style.border = "1px solid #ffffff61";
      document.getElementById("textInput").style.backgroundColor = "auto";
      this.clearSidebarStatus();
      if (this.remainingWords.length === 0) {
        this.remainingWords = _toConsumableArray(this.words);
        this.state.currentQuestionIndex = 0;
      }
      var rand = Math.floor(Math.random() * this.remainingWords.length);
      this.state.currentWord = this.remainingWords.splice(rand, 1)[0];
      if (this.state.languageMode === 'random') {
        this.state.currentQuestionLanguage = Math.random() > 0.5 ? 'tr' : 'de';
      } else {
        this.state.currentQuestionLanguage = this.state.languageMode;
      }
      this.state.optionWords = this.getRandomOptions();
      document.getElementById('writeMode').style.pointerEvents = 'auto';
      this.state.selectedOption = null;
      this.state.answered = false;
      this.updateImage();
      this.renderQuestion();
      document.getElementById('exampleSentence').classList.remove('show');
      if (this.state.listenMode && this.state.currentWord['ses url']) {
        this.playAudio();
      }
      this.updateImageButton();
      document.getElementById('textInput').value = '';
      document.getElementById('textInput').classList.remove('error');
      document.getElementById('correctAnswer').style.display = 'none';
      document.getElementById('textInputControls').classList.remove('show');
      this.updateNextButton();
      closeBottomControls();
    }
  }, {
    key: "getRandomOptions",
    value: function getRandomOptions() {
      var _this2 = this;
      var options = [this.state.currentWord];
      var otherWords = this.words.filter(function (word) {
        return word !== _this2.state.currentWord;
      });
      while (options.length < 4 && otherWords.length > 0) {
        var randomIndex = Math.floor(Math.random() * otherWords.length);
        options.push(otherWords[randomIndex]);
        otherWords.splice(randomIndex, 1);
      }
      return this.shuffleArray(options);
    }
  }, {
    key: "shuffleArray",
    value: function shuffleArray(array) {
      var newArray = _toConsumableArray(array);
      for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [newArray[j], newArray[i]];
        newArray[i] = _ref[0];
        newArray[j] = _ref[1];
      }
      return newArray;
    }
  }, {
    key: "updateImageButton",
    value: function updateImageButton() {
      var imageBtn = document.getElementById('imageMode');
      var preview = document.getElementById('imagePreview');
      var hasImage = !!this.state.currentWord['görsel url'];
      imageBtn.style.display = hasImage ? 'flex' : 'none';
      if (hasImage && this.state.imageMode) {
        preview.classList.add('show', 'has-image');
        this.updateImage();
      } else {
        preview.classList.remove('show', 'has-image');
      }
    }
  }, {
    key: "updateNextButton",
    value: function updateNextButton() {
      var nextBtn = document.getElementById('nextBtn');
      if (this.state.answered) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    }
  }, {
    key: "renderQuestion",
    value: function renderQuestion() {
      var _this3 = this;
      var questionText = document.getElementById('questionText');
      var optionsContainer = document.getElementById('optionsContainer');
      var question;
      if (this.state.currentQuestionLanguage === 'tr') {
        question = "\"".concat(this.state.currentWord.Türkçe, "\" kelimesinin Almanca kar\u015F\u0131l\u0131\u011F\u0131 nedir?");
      } else {
        var germanWord = this.state.currentWord.Almanca;
        if (this.state.colorMode) {
          var coloredText = this.state.currentWord['renkli yazı metni'];
          var color = this.state.currentWord.renk;
          var regex = new RegExp(coloredText, 'gi');
          germanWord = germanWord.replace(regex, "<span class=\"colored-word\" style=\"color:".concat(color, "\">").concat(coloredText, "</span>"));
        }
        question = "\"".concat(germanWord, "\" kelimesinin T\xFCrk\xE7e kar\u015F\u0131l\u0131\u011F\u0131 nedir?");
      }
      questionText.innerHTML = question;
      optionsContainer.innerHTML = '';
      var letters = ['A', 'B', 'C', 'D'];
      this.state.optionWords.forEach(function (word, index) {
        var button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = "<span class=\"option-letter\">".concat(letters[index], "</span> ");
        var optionText;
        if (_this3.state.currentQuestionLanguage === 'tr') {
          var _germanWord = word.Almanca;
          if (_this3.state.colorMode) {
            var _coloredText = word['renkli yazı metni'];
            var _color = word.renk;
            var _regex = new RegExp(_coloredText, 'gi');
            _germanWord = _germanWord.replace(_regex, "<span class=\"colored-word\" style=\"color:".concat(_color, "\">").concat(_coloredText, "</span>"));
          }
          optionText = _germanWord;
        } else {
          optionText = word.Türkçe;
        }
        button.innerHTML += optionText;
        button.addEventListener('click', function () {
          if (!_this3.state.answered) {
            _this3.selectOption(index);
          }
        });
        optionsContainer.appendChild(button);
      });
      this.applyImageMode();
    }
  }, {
    key: "selectOption",
    value: function selectOption(index) {
      var _this4 = this;
      var options = document.querySelectorAll('.option-btn');
      options.forEach(function (opt) {
        opt.classList.remove('selected', 'incorrect', 'correct');
      });
      options[index].classList.add('selected');
      this.state.selectedOption = index;
      var selectedWord = this.state.optionWords[index];
      var isCorrect = selectedWord === this.state.currentWord;
      if (isCorrect) {
        this.state.correctAnswers++;
        options[index].classList.add('correct');
        this.setSidebarStatus('correct');
        playCorrectSound();
      } else {
        this.state.incorrectAnswers++;
        options[index].classList.add('incorrect');
        this.setSidebarStatus('incorrect');
        playIncorrectSound();
        var correctIndex = this.state.optionWords.findIndex(function (word) {
          return word === _this4.state.currentWord;
        });
        if (correctIndex !== -1) {
          options[correctIndex].classList.add('correct');
        }
      }
      this.state.answered = true;
      this.lockRightSidebar();
      this.updateStats();
      this.showExampleSentence(isCorrect);
      this.updateNextButton();
      openBottomControls();
      document.getElementById('writeMode').style.pointerEvents = 'none';
    }
  }, {
    key: "restoreAnswerStyles",
    value: function restoreAnswerStyles() {
      var _this5 = this;
      if (!this.state.answered) return;
      var options = document.querySelectorAll('.option-btn');
      if (!options.length) return;
      var selIdx = this.state.selectedOption;
      var correctIdx = this.state.optionWords.findIndex(function (w) {
        return w === _this5.state.currentWord;
      });
      if (selIdx !== null) {
        options[selIdx].classList.add('selected');
      }
      if (selIdx === correctIdx) {
        options[selIdx].classList.add('correct');
        this.setSidebarStatus('correct');
      } else {
        options[selIdx].classList.add('incorrect');
        if (correctIdx !== -1) options[correctIdx].classList.add('correct');
        this.setSidebarStatus('incorrect');
      }
      this.updateNextButton();
    }
  }, {
    key: "submitTextAnswer",
    value: function submitTextAnswer() {
      document.getElementById('writeMode').style.pointerEvents = 'none';
      var answer = document.getElementById('textInput').value.trim().toLowerCase();
      var correctAnswer = this.state.currentQuestionLanguage === 'tr' ? this.state.currentWord.Almanca.toLowerCase() : this.state.currentWord.Türkçe.toLowerCase();
      var inputElement = document.getElementById('textInput');
      var correctAnswerElement = document.getElementById('correctAnswer');
      var isCorrect = answer === correctAnswer;
      if (answer === correctAnswer) {
        console.log("doğru");
        document.getElementById("textSubmitBtn").style.display = "none";
        document.querySelector(".textbolum").style.display = "block";
        document.getElementById("textInput").readOnly = true;
        document.getElementById("textInput").style.userSelect = "none";
        document.getElementById("textInput").style.pointerEvents = "none";
        document.getElementById("textInput").style.cursor = "default";
        document.getElementById("textInput").style.border = "1px solid rgb(97 205 94)";
        document.getElementById("textInput").style.backgroundColor = "rgb(52 98 38 / 55%)";
        this.state.correctAnswers++;
        playCorrectSound();
        inputElement.classList.remove('error');
        correctAnswerElement.style.display = 'none';
      } else {
        this.state.incorrectAnswers++;
        inputElement.classList.add('error');
        playIncorrectSound();
        var answerHTML;
        if (this.state.currentQuestionLanguage === 'tr') {
          var german = this.state.currentWord.Almanca;
          if (this.state.colorMode) {
            var tag = this.state.currentWord['renkli yazı metni'];
            var color = this.state.currentWord.renk;
            var re = new RegExp(tag, 'gi');
            german = german.replace(re, "<span class=\"colored-word\" style=\"color:".concat(color, "\">").concat(tag, "</span>"));
          }
          answerHTML = german;
        } else {
          answerHTML = this.state.currentWord.Türkçe;
        }
        correctAnswerElement.innerHTML = "Do\u011Fru cevap: <strong>".concat(answerHTML, "</strong>");
        if (answer === correctAnswer) {
          correctAnswerElement.className = 'correct-answer correct';
          this.setSidebarStatus('correct');
        } else {
          console.log("yanlış");
          correctAnswerElement.className = 'correct-answer incorrect';
          this.setSidebarStatus('incorrect');
        }
        correctAnswerElement.style.display = 'block';
        document.getElementById("textSubmitBtn").style.display = "none";
        document.querySelector(".textbolum").style.display = "block";
        document.getElementById("textInput").readOnly = true;
        document.getElementById("textInput").style.userSelect = "none";
        document.getElementById("textInput").style.pointerEvents = "none";
        document.getElementById("textInput").style.cursor = "default";
      }
      this.state.answered = true;
      this.lockRightSidebar();
      this.updateStats();
      this.showExampleSentence(isCorrect);
      this.updateNextButton();
      openBottomControls();
      document.getElementById('writeMode').style.pointerEvents = 'none';
    }
  }, {
    key: "showExampleSentence",
    value: function showExampleSentence(isCorrect) {
      var _this6 = this;
      var box = document.getElementById('exampleSentence');
      box.innerHTML = "<span class=\"result-message ".concat(isCorrect ? 'correct' : 'incorrect', "\">\n        ").concat(isCorrect ? 'DOĞRU' : 'YANLIŞ', " !\n     </span>");
      box.classList.add('show');
      setTimeout(function () {
        box.innerHTML = "<span class=\"sentence-card\">\n                       ".concat(_this6.state.currentWord['örnek cümle'], "\n                     </span>");
      }, 1000);
    }
  }, {
    key: "prevQuestion",
    value: function prevQuestion() {
      if (this.state.currentQuestionIndex > 0) {
        this.state.currentQuestionIndex--;
        this.loadNewQuestion();
        this.updateProgress();
      }
    }
  }, {
    key: "nextQuestion",
    value: function nextQuestion() {
      if (this.state.quizFinished) return;
      var input = document.getElementById("textInput");
      input.style.userSelect = "auto";
      input.style.pointerEvents = "auto";
      input.style.cursor = "text";
      input.style.border = "1px solid #e2e8f03a";
      input.style.backgroundColor = "#131f2400";
      if (this.state.currentQuestionIndex < this.state.totalQuestions - 1) {
        this.state.currentQuestionIndex++;
        this.loadNewQuestion();
        this.updateProgress();
      } else {
        this.showQuizCompleted();
        this.state.quizFinished = true;
        var nextBtn = document.getElementById('nextBtn');
        if (nextBtn) nextBtn.disabled = true;
      }
    }
  }, {
    key: "showQuizCompleted",
    value: function showQuizCompleted() {
      playFinishSound();
      var overlay = document.getElementById('quizCompletedOverlay');
      var black = document.getElementById('blackScreen');
      black.style.display = 'flex';
      black.classList.add('fade');
      black.addEventListener('animationend', function h() {
        black.classList.remove('fade');
        black.style.display = 'none';
        black.removeEventListener('animationend', h);
        overlay.style.display = 'flex';
        overlay.classList.add('show');
        document.getElementById('resultCorrect').textContent = quizApp.state.correctAnswers;
        document.getElementById('resultIncorrect').textContent = quizApp.state.incorrectAnswers;
        document.getElementById('resultEmpty').textContent = quizApp.state.emptyAnswers;
        openBottomControls();
        kilitCategory();
        document.querySelectorAll('.category-item.selected').forEach(function (el) {
          return el.classList.remove('selected');
        });
        var topic = document.getElementById('topiclist');
        topic.style.transition = 'bottom 0.5s cubic-bezier(0.68,-0.55,0.27,1.55)';
        topic.style.bottom = '-100px';
        setTimeout(function () {
          document.getElementById('categoryPanel').classList.add('show');
          document.getElementById('categoryOverlay').classList.add('show');
        }, 200);
      });
    }
  }, {
    key: "updateStats",
    value: function updateStats() {
      document.getElementById('correctCount').textContent = this.state.correctAnswers;
      document.getElementById('incorrectCount').textContent = this.state.incorrectAnswers;
      document.getElementById('emptyCount').textContent = this.state.emptyAnswers;
    }
  }, {
    key: "updateProgress",
    value: function updateProgress() {
      var progress = (this.state.currentQuestionIndex + 1) / this.state.totalQuestions * 100;
      document.getElementById('progressBar').style.width = "".concat(progress, "%");
      document.getElementById('questionCounter').textContent = "".concat(this.state.currentQuestionIndex + 1, "/").concat(this.state.totalQuestions);
    }
  }]);
  return QuizApp;
}();
document.addEventListener('DOMContentLoaded', function () {
  var app = new QuizApp();
  window.quizApp = app;
});
var allWordsForTable = [];
var filteredWords = [];
function initializeWordList() {
  allWordsForTable = [];
  var app = window.quizApp;
  var activeCategory = app && app.state ? app.state.activeCategory : null;
  var categories = activeCategory ? [activeCategory] : Object.keys(wordData);
  categories.forEach(function (cat) {
    var wordsOfCat = wordData[cat] || {};
    for (var key in wordsOfCat) {
      var w = wordsOfCat[key];
      allWordsForTable.push({
        german: w.Almanca,
        turkish: w.Türkçe,
        type: w['kelime türü'],
        example: w['örnek cümle'],
        category: cat
      });
    }
  });
  filteredWords = _toConsumableArray(allWordsForTable);
}
function openWordListModal() {
  initializeWordList();
  displayWordsInTable();
  document.getElementById('wordListModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeWordListModal() {
  document.getElementById('wordListModal').classList.remove('show');
  document.body.style.overflow = 'auto';
  document.getElementById('wordSearchInput').value = '';
}
function displayWordsInTable() {
  var list = document.getElementById('wordsList');
  list.innerHTML = '';
  var colorModeActive = document.getElementById('colorMode').classList.contains('active');
  filteredWords.forEach(function (word) {
    var _original$sesUrl;
    var row = document.createElement('div');
    row.className = 'word-row';
    var germanWord = word.german;
    if (colorModeActive) {
      var _original = findOriginalWordData(word.german, word.turkish);
      if (_original && _original['renkli yazı metni'] && _original.renk) {
        var txt = _original['renkli yazı metni'];
        var clr = _original.renk;
        germanWord = germanWord.replace(new RegExp(txt, 'gi'), "<span style=\"color:".concat(clr, ";font-weight:bold;\n                         background:rgba(").concat(hexToRgb(clr), ",.1);\n                         padding:2px 4px;border-radius:4px;\">").concat(txt, "</span>"));
      }
    }
    var original = findOriginalWordData(word.german, word.turkish);
    var hasAudio = original && ((_original$sesUrl = original['ses url']) === null || _original$sesUrl === void 0 ? void 0 : _original$sesUrl.trim()) !== '';
    var audioURL = hasAudio ? original['ses url'] : '';
    row.innerHTML = "\n      <span class=\"german-word\">".concat(germanWord, "</span>\n      <span class=\"turkish-word\">").concat(word.turkish, "</span>\n      <span class=\"word-type-tag\">").concat(word.type, "</span>\n      \n    ");
    list.appendChild(row);
  });
}
function findOriginalWordData(german, turkish) {
  for (var category in wordData) {
    for (var wordKey in wordData[category]) {
      var word = wordData[category][wordKey];
      if (word.Almanca === german && word.Türkçe === turkish) {
        return word;
      }
    }
  }
  return null;
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) : '0,0,0';
}
function searchInWordList() {
  var searchTerm = document.getElementById('wordSearchInput').value.toLowerCase().trim();
  if (searchTerm === '') {
    filteredWords = _toConsumableArray(allWordsForTable);
  } else {
    filteredWords = allWordsForTable.filter(function (word) {
      return word.german.toLowerCase().includes(searchTerm) || word.turkish.toLowerCase().includes(searchTerm) || word.category.toLowerCase().includes(searchTerm) || word.type.toLowerCase().includes(searchTerm) || word.example.toLowerCase().includes(searchTerm);
    });
  }
  displayWordsInTable();
}
function clearWordSearch() {
  document.getElementById('wordSearchInput').value = '';
  filteredWords = _toConsumableArray(allWordsForTable);
  displayWordsInTable();
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('downloadPdfBtn').addEventListener('click', downloadTableAsPDF);
  document.querySelector('.close-modal').addEventListener('click', closeWordListModal);
  document.getElementById('wordSearchInput').addEventListener('input', searchInWordList);
  document.getElementById('clearSearch').addEventListener('click', clearWordSearch);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeWordListModal();
    }
  });
  document.getElementById('wordListBtn').addEventListener('click', openWordListModal);
});
function playWordAudio(audioUrl) {
  if (!audioUrl || audioUrl.trim() === '') {
    console.log('Ses URL\'si bulunamadı');
    return;
  }
  var audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = audioUrl;
  audioPlayer.play()["catch"](function (error) {
    console.error('Ses çalma hatası:', error);
    alert('Ses dosyası çalınamadı.');
  });
}
function downloadTableAsPDF() {
  if (typeof window.jsPDF === 'undefined') {
    loadJsPDFAndDownload();
    return;
  }
  var jsPDF = window.jsPDF.jsPDF;
  var doc = new jsPDF();
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text('Almanca-Türkçe Kelime Listesi', 20, 20);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  var today = new Date().toLocaleDateString('tr-TR');
  doc.text("Olu\u015Fturulma Tarihi: ".concat(today), 20, 30);
  var tableData = filteredWords.map(function (word) {
    return [word.german.replace(/<[^>]*>/g, ''), word.turkish, word.type, word.example];
  });
  var headers = [['Almanca', 'Türkçe', 'Tür', 'Örnek Cümle']];
  doc.autoTable({
    head: headers,
    body: tableData,
    startY: 40,
    styles: {
      fontSize: 9,
      cellPadding: 3
    },
    headStyles: {
      fillColor: [30, 42, 63],
      textColor: 255,
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    columnStyles: {
      0: {
        cellWidth: 40
      },
      1: {
        cellWidth: 40
      },
      2: {
        cellWidth: 25
      },
      3: {
        cellWidth: 80
      }
    },
    margin: {
      top: 40,
      right: 20,
      bottom: 20,
      left: 20
    }
  });
  doc.save("kelime-listesi-".concat(today, ".pdf"));
}
function loadJsPDFAndDownload() {
  var jsPDFScript = document.createElement('script');
  jsPDFScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  var autoTableScript = document.createElement('script');
  autoTableScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.31/jspdf.plugin.autotable.min.js';
  jsPDFScript.onload = function () {
    autoTableScript.onload = function () {
      downloadTableAsPDF();
    };
    document.head.appendChild(autoTableScript);
  };
  document.head.appendChild(jsPDFScript);
}
document.addEventListener('DOMContentLoaded', function () {
  var topiclist = document.getElementById('topiclist');
  var isDragging = false;
  var startY = 0;
  var horLock = false;
  var Y_TOLERANS = 10;
  var VERTICAL_THRESHOLD = 15;
  var currentZoom = 76;
  var longPressTimer;
  var longPressDuration = 200;
  topiclist.style.cssText = "\n        position: fixed;\n        bottom: 1%;\n        width: 120px;\n        background-color: white;\n        height: 1.5%;\n        border-radius: 20px;\n        cursor: pointer;\n        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n        border: 1px solid rgba(0,0,0,0.1);\n        z-index: 1000;\n        left: 50%;\n        transform: translateX(-50%) scale(".concat(1 / (currentZoom / 100), ");\n    ");
  var zoomUI = document.createElement('div');
  zoomUI.id = 'zoom-control-ui';
  zoomUI.style.cssText = "\n        position: fixed;\n        bottom: 6%;\n        left: 50%;\n        transform: translateX(-50%) scale(".concat(1 / (currentZoom / 100), ");\n        background: #1c1c1cbf;\n        color: white;\n        padding: 20px 30px;\n        border-radius: 10px;\n        font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n        font-size: 15px;\n        font-weight: 600;\n        z-index: 1000;\n        display: none;\n        backdrop-filter: blur(1px);\n        box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        opacity: 0;\n        transform-origin: center bottom;\n    ");
  zoomUI.innerHTML = "\n        <span id=\"zoom-value\">".concat(currentZoom, "%</span>\n    ");
  document.body.appendChild(zoomUI);
  topiclist.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    longPressTimer = setTimeout(function () {
      startDrag(e.clientX, e.clientY);
    }, longPressDuration);
  });
  topiclist.addEventListener('touchstart', function (e) {
    longPressTimer = setTimeout(function () {
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, longPressDuration);
  });
  function startDrag(clientX, clientY) {
    isDragging = true;
    startX = clientX;
    startY = clientY;
    horLock = false;
    var inverseScale = 1 / (currentZoom / 100);
    topiclist.style.transform = "translateX(-50%) scaleX(".concat(1.3 * inverseScale, ")");
    topiclist.style.backgroundColor = 'rgba(240,240,240,0.9)';
    topiclist.style.cursor = 'ew-resize';
    topiclist.style.boxShadow = 'rgb(0 0 0 / 81%) 0px 2px 10px';
    zoomUI.style.display = 'block';
    setTimeout(function () {
      zoomUI.style.opacity = '1';
      zoomUI.style.transform = "translateX(-50%) scale(".concat(inverseScale, ")");
    }, 10);
  }
  document.addEventListener('mousemove', function (e) {
    return handlePointer(e.clientX, e.clientY);
  });
  document.addEventListener('touchmove', function (e) {
    var t = e.touches[0];
    handlePointer(t.clientX, t.clientY);
    e.preventDefault();
  });
  function handlePointer(px, py) {
    if (!isDragging) return;
    var dx = px - startX;
    var dy = py - startY;
    if (Math.abs(dy) > Y_TOLERANS) {
      endDrag();
      return;
    }
    var zoomChange = dx * 0.3;
    currentZoom = Math.max(30, Math.min(200, currentZoom + zoomChange));
    document.documentElement.style.zoom = currentZoom + '%';
    document.getElementById('zoom-value').textContent = "".concat(Math.round(currentZoom), "%");
    var inv = 1 / (currentZoom / 100);
    topiclist.style.transform = "translateX(-50%) scaleX(".concat(1.3 * inv, ")");
    zoomUI.style.transform = "translateX(-50%) scale(".concat(inv, ")");
    startX = px;
  }
  document.addEventListener('mousemove', function (e) {
    return handlePointer(e.clientX, e.clientY);
  });
  document.addEventListener('touchmove', function (e) {
    var t = e.touches[0];
    handlePointer(t.clientX, t.clientY);
    e.preventDefault();
  });
  document.addEventListener('mousemove', function (e) {
    return handlePointer(e.clientX, e.clientY);
  });
  document.addEventListener('touchmove', function (e) {
    var t = e.touches[0];
    handlePointer(t.clientX, t.clientY);
    e.preventDefault();
  });
  document.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    var deltaX = e.touches[0].clientX - startX;
    var deltaY = e.touches[0].clientY - startY;
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;
    var zoomChange = deltaX * 0.3;
    currentZoom = Math.max(30, Math.min(200, currentZoom + zoomChange));
    document.documentElement.style.zoom = currentZoom + '%';
    document.getElementById('zoom-value').textContent = "".concat(Math.round(currentZoom), "%");
    var inverseScale = 1 / (currentZoom / 100);
    topiclist.style.transform = "translateX(-50%) scaleX(".concat(1.3 * inverseScale, ")");
    zoomUI.style.transform = "translateX(-50%) scale(".concat(inverseScale, ")");
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    e.preventDefault();
    e.preventDefault();
  });
  function endDrag() {
    clearTimeout(longPressTimer);
    if (!isDragging) return;
    isDragging = false;
    var inverseScale = 1 / (currentZoom / 100);
    topiclist.style.transform = "translateX(-50%) scale(".concat(inverseScale, ")");
    topiclist.style.backgroundColor = 'white';
    topiclist.style.cursor = 'pointer';
    topiclist.style.boxShadow = 'rgb(0 0 0 / 81%) 0px 2px 10px';
    zoomUI.style.opacity = '0';
    zoomUI.style.transform = "translateX(-50%) scale(".concat(inverseScale, ")");
    setTimeout(function () {
      zoomUI.style.display = 'none';
    }, 300);
  }
  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
  document.addEventListener('mouseleave', endDrag);
  topiclist.addEventListener('mouseenter', function () {
    if (!isDragging) {
      var inverseScale = 1 / (currentZoom / 100);
      topiclist.style.transform = "translateX(-50%) scale(".concat(1.05 * inverseScale, ")");
      topiclist.style.boxShadow = 'rgb(0 0 0 / 81%) 0px 2px 10px';
    }
  });
  topiclist.addEventListener('mouseleave', function () {
    if (!isDragging) {
      var inverseScale = 1 / (currentZoom / 100);
      topiclist.style.transform = "translateX(-50%) scale(".concat(inverseScale, ")");
      topiclist.style.boxShadow = 'rgb(0 0 0 / 81%) 0px 2px 10px';
    }
  });
  var style = document.createElement('style');
  style.textContent = "\n        #topiclist {\n            user-select: none;\n            touch-action: none;\n            will-change: transform, background-color;\n            transform-origin: center bottom;\n            user-select: none;\n  touch-action: pan-x;\n        }\n        \n        #zoom-control-ui {\n            will-change: transform, opacity;\n            transform-origin: center bottom;\n        }\n        \n        @media (max-width: 768px) {\n            #topiclist {\n                width: 100px;\n                height: 12px;\n            }\n            \n            #zoom-control-ui {\n                font-size: 14px;\n                padding: 8px 16px;\n            }\n        }\n    ";
  document.head.appendChild(style);
});
var TextToSpeechManager = /*#__PURE__*/function () {
  function TextToSpeechManager() {
    _classCallCheck(this, TextToSpeechManager);
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.germanVoice = null;
    this.turkishVoice = null;
    this.isInitialized = false;
    this.init();
  }
  _createClass(TextToSpeechManager, [{
    key: "init",
    value: function init() {
      var _this7 = this;
      if (this.synth.getVoices().length === 0) {
        this.synth.addEventListener('voiceschanged', function () {
          _this7.loadVoices();
        });
      } else {
        this.loadVoices();
      }
    }
  }, {
    key: "loadVoices",
    value: function loadVoices() {
      var _this$germanVoice, _this$turkishVoice;
      this.voices = this.synth.getVoices();
      this.germanVoice = this.voices.find(function (voice) {
        return voice.lang.startsWith('de-') || voice.lang === 'de' || voice.name.toLowerCase().includes('german') || voice.name.toLowerCase().includes('deutsch');
      });
      this.turkishVoice = this.voices.find(function (voice) {
        return voice.lang.startsWith('tr-') || voice.lang === 'tr' || voice.name.toLowerCase().includes('turkish') || voice.name.toLowerCase().includes('türkçe');
      });
      if (!this.germanVoice) {
        this.germanVoice = this.voices.find(function (voice) {
          return voice.lang.includes('en');
        }) || this.voices[0];
      }
      if (!this.turkishVoice) {
        this.turkishVoice = this.voices.find(function (voice) {
          return voice.lang.includes('en');
        }) || this.voices[0];
      }
      this.isInitialized = true;
      console.log('TTS Initialized:', {
        germanVoice: ((_this$germanVoice = this.germanVoice) === null || _this$germanVoice === void 0 ? void 0 : _this$germanVoice.name) || 'Not found',
        turkishVoice: ((_this$turkishVoice = this.turkishVoice) === null || _this$turkishVoice === void 0 ? void 0 : _this$turkishVoice.name) || 'Not found'
      });
    }
  }, {
    key: "speak",
    value: function speak(text) {
      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
      if (!this.isInitialized) {
        console.warn('TTS not initialized yet');
        return;
      }
      this.synth.cancel();
      var utterance = new SpeechSynthesisUtterance(text);
      if (language === 'de') {
        var _this$germanVoice2;
        utterance.voice = this.germanVoice;
        utterance.lang = ((_this$germanVoice2 = this.germanVoice) === null || _this$germanVoice2 === void 0 ? void 0 : _this$germanVoice2.lang) || 'de-DE';
        utterance.rate = 0.8;
      } else if (language === 'tr') {
        var _this$turkishVoice2;
        utterance.voice = this.turkishVoice;
        utterance.lang = ((_this$turkishVoice2 = this.turkishVoice) === null || _this$turkishVoice2 === void 0 ? void 0 : _this$turkishVoice2.lang) || 'tr-TR';
        utterance.rate = 0.9;
      }
      utterance.volume = 1;
      utterance.pitch = 1;
      utterance.onerror = function (event) {
        console.error('TTS Error:', event.error);
      };
      utterance.onstart = function () {
        console.log('TTS Started:', text, 'Language:', language);
      };
      this.synth.speak(utterance);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.synth.cancel();
    }
  }]);
  return TextToSpeechManager;
}();
var ttsManager = new TextToSpeechManager();
document.addEventListener('DOMContentLoaded', function () {
  var originalPlayAudio = null;
  var waitForQuizApp = setInterval(function () {
    if (typeof window !== 'undefined' && document.getElementById('listenBtn')) {
      window.playCurrentQuestionAudio = function () {
        var questionText = document.getElementById('questionText').textContent;
        var wordToSpeak = '';
        var language = '';
        if (questionText.includes('Türkçe karşılığı nedir')) {
          var match = questionText.match(/"([^"]+)"/);
          if (match) {
            wordToSpeak = match[1];
            language = 'de';
          }
        } else if (questionText.includes('Almanca karşılığı nedir')) {
          var _match = questionText.match(/"([^"]+)"/);
          if (_match) {
            wordToSpeak = _match[1];
            language = 'tr';
          }
        }
        if (wordToSpeak && language) {
          console.log('Okutulacak kelime:', wordToSpeak, 'Dil:', language);
          ttsManager.speak(wordToSpeak, language);
        } else {
          console.warn('Okutulacak kelime bulunamadı');
        }
      };
      var listenBtn = document.getElementById('listenBtn');
      if (listenBtn) {
        listenBtn.replaceWith(listenBtn.cloneNode(true));
        var newListenBtn = document.getElementById('listenBtn');
        newListenBtn.addEventListener('click', function () {
          window.playCurrentQuestionAudio();
        });
      }
      clearInterval(waitForQuizApp);
    }
  }, 100);
});
setTimeout(function () {
  if (typeof window.app !== 'undefined' && window.app.playAudio) {
    window.app.playAudio = function () {
      window.playCurrentQuestionAudio();
    };
  }
}, 1000);
function playWordAudioWithTTS(audioUrl, germanWord, turkishWord) {
  if (audioUrl && audioUrl.trim() !== '') {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioUrl;
    audioPlayer.play()["catch"](function (error) {
      console.error('Ses çalma hatası, TTS kullanılıyor:', error);
      ttsManager.speak(germanWord, 'de');
    });
  } else {
    ttsManager.speak(germanWord, 'de');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    if (typeof window.displayWordsInTable === 'function') {
      var originalDisplayWordsInTable = window.displayWordsInTable;
      window.displayWordsInTable = function () {
        originalDisplayWordsInTable();
        var tableBody = document.getElementById('wordsTableBody');
        if (tableBody) {
          var rows = tableBody.querySelectorAll('tr');
          rows.forEach(function (row, index) {
            var listenBtn = row.querySelector('.listen-btn');
            if (listenBtn && filteredWords[index]) {
              var word = filteredWords[index];
              var originalWord = findOriginalWordData(word.german, word.turkish);
              var audioUrl = originalWord ? originalWord['ses url'] : '';
              listenBtn.innerHTML = "\n                                <i class=\"fas fa-volume-up\"></i>\n                                Dinle\n                            ";
              listenBtn.disabled = false;
              listenBtn.onclick = function () {
                return playWordAudioWithTTS(audioUrl, word.german, word.turkish);
              };
            }
          });
        }
      };
    }
  }, 2000);
});
window.ttsControls = {
  stop: function stop() {
    return ttsManager.stop();
  },
  speak: function speak(text) {
    var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
    return ttsManager.speak(text, language);
  },
  speakCurrentQuestion: function speakCurrentQuestion() {
    return window.playCurrentQuestionAudio();
  },
  isSupported: function isSupported() {
    return 'speechSynthesis' in window;
  },
  testGermanVoice: function testGermanVoice() {
    return ttsManager.speak('der Apfel', 'de');
  },
  testTurkishVoice: function testTurkishVoice() {
    return ttsManager.speak('elma', 'tr');
  }
};
if (!('speechSynthesis' in window)) {
  console.warn('⚠️ Bu tarayıcı Text-to-Speech API\'sini desteklemiyor');
  var notification = document.createElement('div');
  notification.style.cssText = "\n        position: fixed;\n        top: 20px;\n        right: 20px;\n        background: #ff6b6b;\n        color: white;\n        padding: 12px 20px;\n        border-radius: 8px;\n        font-size: 14px;\n        z-index: 10000;\n        opacity: 0;\n        transition: opacity 0.3s;\n        font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n    ";
  notification.textContent = 'Tarayıcınız sesli okuma özelliğini desteklemiyor';
  document.body.appendChild(notification);
  setTimeout(function () {
    return notification.style.opacity = '1';
  }, 100);
  setTimeout(function () {
    notification.style.opacity = '0';
    setTimeout(function () {
      return notification.remove();
    }, 300);
  }, 5000);
}
var EnhancedListenUI = /*#__PURE__*/function () {
  function EnhancedListenUI() {
    _classCallCheck(this, EnhancedListenUI);
    this.isPlaying = false;
    this.currentPlayingButton = null;
    this.optionListenButtons = [];
    this.init();
  }
  _createClass(EnhancedListenUI, [{
    key: "init",
    value: function init() {
      this.setupMainListenButton();
      this.setupOptionListenButtons();
      this.setupSpeechEvents();
      this.addCustomStyles();
      this.observeQuestionChanges();
    }
  }, {
    key: "isListenModeActive",
    value: function isListenModeActive() {
      var listenModeBtn = document.getElementById('listenMode');
      return listenModeBtn && listenModeBtn.classList.contains('active');
    }
  }, {
    key: "setupMainListenButton",
    value: function setupMainListenButton() {
      var _this8 = this;
      var listenBtn = document.getElementById('listenBtn');
      if (listenBtn) {
        listenBtn.replaceWith(listenBtn.cloneNode(true));
        var newListenBtn = document.getElementById('listenBtn');
        newListenBtn.addEventListener('click', function () {
          if (_this8.isListenModeActive()) {
            _this8.handleMainListenClick(newListenBtn);
          } else {
            _this8.showListenModeWarning();
          }
        });
      }
    }
  }, {
    key: "showListenModeWarning",
    value: function showListenModeWarning() {
      var notification = document.createElement('div');
      notification.style.cssText = "\n            position: fixed;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            background: #ff6b6b;\n            color: white;\n            padding: 15px 25px;\n            border-radius: 10px;\n            font-size: 14px;\n            font-weight: 500;\n            z-index: 10000;\n            opacity: 0;\n            transition: opacity 0.3s;\n            font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n            box-shadow: 0 10px 30px rgba(0,0,0,0.3);\n            text-align: center;\n        ";
      notification.innerHTML = "\n            <i class=\"fas fa-exclamation-triangle\" style=\"margin-right: 8px;\"></i>\n            Dinleme \xF6zelli\u011Fini kullanmak i\xE7in \xF6nce dinleme modunu aktif edin!\n        ";
      document.body.appendChild(notification);
      setTimeout(function () {
        return notification.style.opacity = '1';
      }, 100);
      setTimeout(function () {
        notification.style.opacity = '0';
        setTimeout(function () {
          return notification.remove();
        }, 300);
      }, 3000);
    }
  }, {
    key: "handleMainListenClick",
    value: function handleMainListenClick(button) {
      if (this.isPlaying) {
        this.stopAllAudio();
        this.resetMainButton(button);
      } else {
        this.setMainButtonPlaying(button);
        this.playCurrentQuestion();
      }
    }
  }, {
    key: "setupOptionListenButtons",
    value: function setupOptionListenButtons() {
      var _this9 = this;
      setTimeout(function () {
        _this9.createOptionListenButtons();
      }, 500);
    }
  }, {
    key: "createOptionListenButtons",
    value: function createOptionListenButtons() {
      var _this10 = this;
      if (!this.isListenModeActive()) {
        return;
      }
      var optionsContainer = document.getElementById('optionsContainer');
      if (!optionsContainer) return;
      var optionBtns = optionsContainer.querySelectorAll('.option-btn');
      optionBtns.forEach(function (optionBtn, index) {
        var existingListenBtn = optionBtn.querySelector('.option-listen-btn');
        if (existingListenBtn) {
          existingListenBtn.remove();
        }
        var listenBtn = document.createElement('button');
        listenBtn.className = 'option-listen-btn';
        listenBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        listenBtn.title = 'Bu şıkkı dinle';
        listenBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          _this10.handleOptionListenClick(listenBtn, index);
        });
        optionBtn.style.position = 'relative';
        optionBtn.appendChild(listenBtn);
      });
    }
  }, {
    key: "handleOptionListenClick",
    value: function handleOptionListenClick(button, optionIndex) {
      if (this.isPlaying && this.currentPlayingButton === button) {
        this.stopAllAudio();
        this.resetButton(button);
      } else {
        this.stopAllAudio();
        this.setButtonPlaying(button);
        this.playOptionText(optionIndex);
      }
    }
  }, {
    key: "handleCorrectAnswerListenClick",
    value: function handleCorrectAnswerListenClick(button) {
      if (this.isPlaying && this.currentPlayingButton === button) {
        this.stopAllAudio();
        this.resetButton(button);
      } else {
        this.stopAllAudio();
        this.setButtonPlaying(button);
        this.playCorrectAnswer();
      }
    }
  }, {
    key: "playCorrectAnswer",
    value: function playCorrectAnswer() {
      var questionText = document.getElementById('questionText').textContent;
      var correctAnswerText = '';
      var language = '';
      if (questionText.includes('Türkçe karşılığı nedir')) {
        if (typeof app !== 'undefined' && app.state && app.state.currentWord) {
          correctAnswerText = app.state.currentWord.Türkçe;
          language = 'tr';
        }
      } else if (questionText.includes('Almanca karşılığı nedir')) {
        if (typeof app !== 'undefined' && app.state && app.state.currentWord) {
          correctAnswerText = app.state.currentWord.Almanca;
          language = 'de';
        }
      }
      if (correctAnswerText && language) {
        if (typeof window.ttsManager !== 'undefined') {
          window.ttsManager.speak(correctAnswerText, language);
        } else if (typeof ttsManager !== 'undefined') {
          ttsManager.speak(correctAnswerText, language);
        }
      }
    }
  }, {
    key: "playCurrentQuestion",
    value: function playCurrentQuestion() {
      if (typeof window.playCurrentQuestionAudio === 'function') {
        window.playCurrentQuestionAudio();
      } else {
        console.warn('playCurrentQuestionAudio fonksiyonu bulunamadı');
      }
    }
  }, {
    key: "playOptionText",
    value: function playOptionText(optionIndex) {
      var optionBtns = document.querySelectorAll('.option-btn');
      if (optionBtns[optionIndex]) {
        var optionText = optionBtns[optionIndex].textContent.trim();
        var cleanText = optionText.replace(/^[A-D]\s+/, '');
        var language = this.detectLanguage(cleanText);
        if (typeof window.ttsManager !== 'undefined') {
          window.ttsManager.speak(cleanText, language);
        } else if (typeof ttsManager !== 'undefined') {
          ttsManager.speak(cleanText, language);
        } else {
          console.warn('TTS Manager bulunamadı');
        }
      }
    }
  }, {
    key: "detectLanguage",
    value: function detectLanguage(text) {
      var germanIndicators = ['der ', 'die ', 'das ', 'ein ', 'eine ', 'ü', 'ö', 'ä', 'ß'];
      var turkishIndicators = ['ı', 'ğ', 'ş', 'ç', 'ü', 'ö'];
      var lowerText = text.toLowerCase();
      var germanScore = germanIndicators.filter(function (indicator) {
        return lowerText.includes(indicator);
      }).length;
      var turkishScore = turkishIndicators.filter(function (indicator) {
        return lowerText.includes(indicator);
      }).length;
      return germanScore > turkishScore ? 'de' : 'tr';
    }
  }, {
    key: "setMainButtonPlaying",
    value: function setMainButtonPlaying(button) {
      this.isPlaying = true;
      this.currentPlayingButton = button;
      button.innerHTML = "\n            <i class=\"fas fa-stop\"></i>\n            <span>Dinleniyor...</span>\n        ";
      button.classList.add('playing');
    }
  }, {
    key: "setButtonPlaying",
    value: function setButtonPlaying(button) {
      this.isPlaying = true;
      this.currentPlayingButton = button;
      button.innerHTML = '<i class="fas fa-stop"></i>';
      button.classList.add('playing');
    }
  }, {
    key: "resetMainButton",
    value: function resetMainButton(button) {
      this.isPlaying = false;
      this.currentPlayingButton = null;
      button.innerHTML = "\n            <i class=\"fas fa-volume-up\"></i>\n            <span>Dinle</span>\n        ";
      button.classList.remove('playing');
    }
  }, {
    key: "resetButton",
    value: function resetButton(button) {
      this.isPlaying = false;
      this.currentPlayingButton = null;
      button.innerHTML = '<i class="fas fa-volume-up"></i>';
      button.classList.remove('playing');
    }
  }, {
    key: "stopAllAudio",
    value: function stopAllAudio() {
      if (typeof ttsManager !== 'undefined') {
        ttsManager.stop();
      }
      var audioPlayer = document.getElementById('audioPlayer');
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
      }
    }
  }, {
    key: "setupSpeechEvents",
    value: function setupSpeechEvents() {
      var _this11 = this;
      if ('speechSynthesis' in window) {
        var checkSpeechEnd = function checkSpeechEnd() {
          if (!window.speechSynthesis.speaking && _this11.isPlaying) {
            _this11.handleSpeechEnd();
          }
        };
        setInterval(checkSpeechEnd, 100);
      }
    }
  }, {
    key: "handleSpeechEnd",
    value: function handleSpeechEnd() {
      if (this.currentPlayingButton) {
        if (this.currentPlayingButton.id === 'listenBtn') {
          this.resetMainButton(this.currentPlayingButton);
        } else {
          this.resetButton(this.currentPlayingButton);
        }
      }
    }
  }, {
    key: "observeQuestionChanges",
    value: function observeQuestionChanges() {
      var _this12 = this;
      var questionText = document.getElementById('questionText');
      if (questionText) {
        var observer = new MutationObserver(function () {
          setTimeout(function () {
            _this12.createOptionListenButtons();
          }, 100);
        });
        observer.observe(questionText, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    }
  }, {
    key: "addCustomStyles",
    value: function addCustomStyles() {
      var styleId = 'enhanced-listen-ui-styles';
      if (document.getElementById(styleId)) return;
      var style = document.createElement('style');
      style.id = styleId;
      style.textContent = "\n            #listenBtn.playing {\n                background: #dc3545 !important;\n                color: white !important;\n                animation: pulse 1.5s infinite;\n            }\n            \n            \n            \n            .option-listen-btn {\n                position: absolute !important;\n                top: 8px !important;\n                right: 8px !important;\n                background: rgba(255, 255, 255, 0.9) !important;\n                border: 1px solid var(--gray-300) !important;\n                border-radius: 50% !important;\n                width: 32px !important;\n                height: 32px !important;\n                display: flex !important;\n                align-items: center !important;\n                justify-content: center !important;\n                cursor: pointer !important;\n                font-size: 12px !important;\n                color: var(--gray-600) !important;\n                transition: all 0.2s ease !important;\n                z-index: 10 !important;\n                box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;\n            }\n            \n            \n            \n            .option-listen-btn.playing {\n                background: #dc3545 !important;\n                color: white !important;\n                animation: pulse 1.5s infinite !important;\n            }\n            \n            \n            \n            \n            \n            \n            \n            @keyframes pulse {\n                0% {\n                    box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);\n                }\n                70% {\n                    box-shadow: 0 0 0 8px rgba(220, 53, 69, 0);\n                }\n                100% {\n                    box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);\n                }\n            }\n            \n            .option-btn {\n                padding-right: 50px !important;\n            }\n            \n            @media (max-width: 768px) {\n                .option-listen-btn {\n                    width: 28px !important;\n                    height: 28px !important;\n                    font-size: 11px !important;\n                    top: 6px !important;\n                    right: 6px !important;\n                }\n                \n                .option-btn {\n                    padding-right: 45px !important;\n                }\n                \n                \n            }\n            \n            .words-table .listen-btn.playing {\n                background: #dc3545 !important;\n                color: white !important;\n                animation: pulse 1.5s infinite !important;\n            }\n            \n            \n        ";
      document.head.appendChild(style);
    }
  }, {
    key: "forceStop",
    value: function forceStop() {
      this.stopAllAudio();
      if (this.currentPlayingButton) {
        if (this.currentPlayingButton.id === 'listenBtn') {
          this.resetMainButton(this.currentPlayingButton);
        } else {
          this.resetButton(this.currentPlayingButton);
        }
      }
    }
  }, {
    key: "isCurrentlyPlaying",
    value: function isCurrentlyPlaying() {
      return this.isPlaying;
    }
  }, {
    key: "onListenModeToggle",
    value: function onListenModeToggle() {
      var _this13 = this;
      setTimeout(function () {
        _this13.createOptionListenButtons();
      }, 100);
    }
  }]);
  return EnhancedListenUI;
}();
var enhancedListenUI;
document.addEventListener('DOMContentLoaded', function () {
  var waitForTTS = setInterval(function () {
    if (typeof ttsManager !== 'undefined' || typeof window.ttsManager !== 'undefined') {
      enhancedListenUI = new EnhancedListenUI();
      clearInterval(waitForTTS);
    }
  }, 100);
  setTimeout(function () {
    if (!enhancedListenUI) {
      enhancedListenUI = new EnhancedListenUI();
    }
  }, 5000);
});
document.addEventListener('DOMContentLoaded', function () {
  var listenModeBtn = document.getElementById('listenMode');
  if (listenModeBtn) {
    listenModeBtn.addEventListener('click', function () {
      setTimeout(function () {
        if (enhancedListenUI) {
          enhancedListenUI.onListenModeToggle();
        }
      }, 100);
    });
  }
});
function enhanceWordListButtons() {
  var wordListModal = document.getElementById('wordListModal');
  if (!wordListModal) return;
  var listenButtons = wordListModal.querySelectorAll('.listen-btn');
  listenButtons.forEach(function (btn, index) {
    var originalOnclick = btn.onclick;
    btn.onclick = function () {
      var playingBtn = wordListModal.querySelector('.listen-btn.playing');
      if (playingBtn && playingBtn !== btn) {
        playingBtn.classList.remove('playing');
        playingBtn.innerHTML = "\n                    <i class=\"fas fa-volume-up\"></i>\n                    Dinle\n                ";
      }
      if (btn.classList.contains('playing')) {
        btn.classList.remove('playing');
        btn.innerHTML = "\n                    <i class=\"fas fa-volume-up\"></i>\n                    Dinle\n                ";
        if (typeof ttsManager !== 'undefined') {
          ttsManager.stop();
        }
      } else {
        btn.classList.add('playing');
        btn.innerHTML = "\n                    <i class=\"fas fa-stop\"></i>\n                    Dinleniyor...\n                ";
        if (originalOnclick) {
          originalOnclick();
        }
        setTimeout(function () {
          var checkEnd = setInterval(function () {
            if (!window.speechSynthesis.speaking) {
              btn.classList.remove('playing');
              btn.innerHTML = "\n                                <i class=\"fas fa-volume-up\"></i>\n                                Dinle\n                            ";
              clearInterval(checkEnd);
            }
          }, 100);
        }, 500);
      }
    };
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var originalOpenModal = window.openWordListModal;
  if (originalOpenModal) {
    window.openWordListModal = function () {
      originalOpenModal();
      setTimeout(function () {
        enhanceWordListButtons();
      }, 100);
    };
  }
});
window.enhancedListenControls = {
  stopAll: function stopAll() {
    if (enhancedListenUI) {
      enhancedListenUI.forceStop();
    }
  },
  isPlaying: function isPlaying() {
    return enhancedListenUI ? enhancedListenUI.isCurrentlyPlaying() : false;
  },
  refreshOptionButtons: function refreshOptionButtons() {
    if (enhancedListenUI) {
      enhancedListenUI.createOptionListenButtons();
    }
  }
};
(function () {
  var sleep = function sleep(ms) {
    return new Promise(function (r) {
      return setTimeout(r, ms);
    });
  };
  var ttsManager = {
    speaking: false,
    currentUtter: null,
    voicesReady: false,
    voices: [],
    _keepAliveTimer: null,
    ensureVoices: function ensureVoices() {
      var _arguments = arguments,
        _this14 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var timeoutMs, have;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              timeoutMs = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 2000;
              have = window.speechSynthesis.getVoices();
              if (!(have && have.length)) {
                _context.next = 6;
                break;
              }
              _this14.voices = have;
              _this14.voicesReady = true;
              return _context.abrupt("return");
            case 6:
              _context.next = 8;
              return new Promise(function (resolve) {
                var done = false;
                var finish = function finish() {
                  if (!done) {
                    done = true;
                    resolve();
                  }
                };
                var onVoices = function onVoices() {
                  window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
                  _this14.voices = window.speechSynthesis.getVoices() || [];
                  _this14.voicesReady = _this14.voices.length > 0;
                  finish();
                };
                window.speechSynthesis.addEventListener('voiceschanged', onVoices);
                setTimeout(function () {
                  window.speechSynthesis.removeEventListener('voiceschanged', onVoices);
                  _this14.voices = window.speechSynthesis.getVoices() || [];
                  _this14.voicesReady = _this14.voices.length > 0;
                  finish();
                }, timeoutMs);
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    pickVoice: function pickVoice(lang) {
      var vs = this.voices || [];
      if (!vs.length) return null;
      var want = lang === 'de' ? 'de-DE' : 'tr-TR';
      var exact = vs.find(function (v) {
        return v.lang === want;
      });
      if (exact) return exact;
      var base = want.split('-')[0];
      return vs.find(function (v) {
        return (v.lang || '').toLowerCase().startsWith(base);
      }) || null;
    },
    _startKeepAlive: function _startKeepAlive() {
      this._stopKeepAlive();
      this._keepAliveTimer = setInterval(function () {
        try {
          if (window.speechSynthesis.speaking && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        } catch (_unused) {}
      }, 200);
    },
    _stopKeepAlive: function _stopKeepAlive() {
      if (this._keepAliveTimer) {
        clearInterval(this._keepAliveTimer);
        this._keepAliveTimer = null;
      }
    },
    stop: function stop() {
      try {
        window.speechSynthesis.cancel();
      } catch (_unused2) {}
      this.speaking = false;
      this.currentUtter = null;
      this._stopKeepAlive();
    },
    speak: function speak(text, lang) {
      var _arguments2 = arguments,
        _this15 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var hooks, _hooks$onerror, _window$speechSynthes, _window$speechSynthes2, MAX_RETRIES, START_TIMEOUT, attempt, trySpeak;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              hooks = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : {};
              if (!(!('speechSynthesis' in window) || !(text !== null && text !== void 0 && text.trim()))) {
                _context3.next = 4;
                break;
              }
              (_hooks$onerror = hooks.onerror) === null || _hooks$onerror === void 0 ? void 0 : _hooks$onerror.call(hooks);
              return _context3.abrupt("return");
            case 4:
              _this15.stop();
              try {
                (_window$speechSynthes = (_window$speechSynthes2 = window.speechSynthesis).resume) === null || _window$speechSynthes === void 0 ? void 0 : _window$speechSynthes.call(_window$speechSynthes2);
              } catch (_unused3) {}
              _context3.next = 8;
              return _this15.ensureVoices(2000);
            case 8:
              MAX_RETRIES = 3;
              START_TIMEOUT = 1400;
              attempt = 0;
              trySpeak = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                  var p, utter, v, started, startTimer, _hooks$onerror4;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        attempt++;
                        try {
                          p = new SpeechSynthesisUtterance(' ');
                          p.volume = 0;
                          window.speechSynthesis.speak(p);
                          window.speechSynthesis.cancel();
                        } catch (_unused4) {}
                        utter = new SpeechSynthesisUtterance(text);
                        utter.lang = lang === 'de' ? 'de-DE' : 'tr-TR';
                        v = _this15.pickVoice(lang);
                        if (v) utter.voice = v;
                        started = false;
                        utter.onstart = function () {
                          var _hooks$onstart;
                          started = true;
                          _this15.speaking = true;
                          (_hooks$onstart = hooks.onstart) === null || _hooks$onstart === void 0 ? void 0 : _hooks$onstart.call(hooks);
                          _this15._startKeepAlive();
                          clearTimeout(startTimer);
                        };
                        utter.onend = function () {
                          var _hooks$onend;
                          _this15.speaking = false;
                          _this15.currentUtter = null;
                          _this15._stopKeepAlive();
                          (_hooks$onend = hooks.onend) === null || _hooks$onend === void 0 ? void 0 : _hooks$onend.call(hooks);
                          clearTimeout(startTimer);
                        };
                        utter.onerror = function () {
                          _this15.speaking = false;
                          _this15.currentUtter = null;
                          _this15._stopKeepAlive();
                          if (!started && attempt < MAX_RETRIES) {
                            setTimeout(trySpeak, 250);
                          } else {
                            var _hooks$onerror2;
                            (_hooks$onerror2 = hooks.onerror) === null || _hooks$onerror2 === void 0 ? void 0 : _hooks$onerror2.call(hooks);
                          }
                          clearTimeout(startTimer);
                        };
                        startTimer = setTimeout(function () {
                          if (!started) {
                            var _hooks$onerror3;
                            try {
                              window.speechSynthesis.cancel();
                            } catch (_unused5) {}
                            if (attempt < MAX_RETRIES) setTimeout(trySpeak, 200);else (_hooks$onerror3 = hooks.onerror) === null || _hooks$onerror3 === void 0 ? void 0 : _hooks$onerror3.call(hooks);
                          }
                        }, START_TIMEOUT);
                        _context2.prev = 11;
                        _this15.currentUtter = utter;
                        window.speechSynthesis.speak(utter);
                        _context2.next = 26;
                        break;
                      case 16:
                        _context2.prev = 16;
                        _context2.t0 = _context2["catch"](11);
                        clearTimeout(startTimer);
                        if (!(attempt < MAX_RETRIES)) {
                          _context2.next = 25;
                          break;
                        }
                        _context2.next = 22;
                        return sleep(200);
                      case 22:
                        trySpeak();
                        _context2.next = 26;
                        break;
                      case 25:
                        (_hooks$onerror4 = hooks.onerror) === null || _hooks$onerror4 === void 0 ? void 0 : _hooks$onerror4.call(hooks);
                      case 26:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2, null, [[11, 16]]);
                }));
                return function trySpeak() {
                  return _ref2.apply(this, arguments);
                };
              }();
              trySpeak();
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    }
  };
  window.ttsManager = window.ttsManager || ttsManager;
  var injectStyles = function injectStyles() {
    var css = "\n      #textInputArea { position: relative !important; }\n      #correctAnswer { position: relative !important; padding-right: 54px !important; }\n\n      .ti-listen {\n        position: absolute !important;\n        top: 50% !important; transform: translateY(-50%) !important;\n        right: 12px !important; z-index: 20 !important;\n        width: 36px !important; height: 36px !important; border-radius: 50% !important;\n        display: flex !important; align-items: center !important; justify-content: center !important;\n        cursor: pointer !important; transition: transform .2s ease !important;\n        border:1px solid currentColor !important; background: transparent !important;\n        font-size: 0 !important;\n      }\n      \n      .ti-listen.correct { color:#22c55e !important; }\n      .ti-listen.incorrect { color:#ef4444 !important; width:32px !important; height:32px !important; }\n\n      .ti-icon { width:18px; height:18px; display:block; }\n      .ti-icon.stop { width:16px; height:16px; }\n\n      .ti-listen.is-loading::after {\n        content:\"\"; position:absolute; inset:-3px;\n        border-radius:50%;\n        border: 2px solid currentColor;\n        border-right-color: transparent; border-bottom-color: transparent;\n        opacity:.35;\n        animation: ti-spin .8s linear infinite;\n      }\n      @keyframes ti-spin { to { transform: rotate(360deg); } }\n\n      .ti-shake { animation: ti-shk .25s linear 1; }\n      @keyframes ti-shk {\n        0%,100% { transform: translateY(-50%) translateX(0); }\n        25% { transform: translateY(-50%) translateX(-1px); }\n        75% { transform: translateY(-50%) translateX(1px); }\n      }\n    ";
    var s = document.createElement('style');
    s.textContent = css;
    document.head.appendChild(s);
  };
  var TextInputListenEnhancement = /*#__PURE__*/function () {
    function TextInputListenEnhancement() {
      var _this16 = this;
      _classCallCheck(this, TextInputListenEnhancement);
      this.correctBtn = null;
      this.incorrectBtn = null;
      this.activeBtn = null;
      injectStyles();
      this.setupListenModeWatchers();
      this.observeQA();
      ['nextBtn', 'prevBtn'].forEach(function (id) {
        var b = document.getElementById(id);
        if (b) b.addEventListener('click', function () {
          return _this16.cleanup();
        });
      });
      document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
          try {
            var _window$speechSynthes3, _window$speechSynthes4;
            (_window$speechSynthes3 = (_window$speechSynthes4 = window.speechSynthesis).resume) === null || _window$speechSynthes3 === void 0 ? void 0 : _window$speechSynthes3.call(_window$speechSynthes4);
          } catch (_unused7) {}
        }
      });
      this.onListenModeChange();
    }
    _createClass(TextInputListenEnhancement, [{
      key: "isListenModeOn",
      value: function isListenModeOn() {
        var el = document.getElementById('listenMode');
        if (el) {
          var t = (el.tagName || '').toLowerCase();
          var type = (el.getAttribute('type') || '').toLowerCase();
          if (t === 'input' && (type === 'checkbox' || type === 'radio')) return !!el.checked;
          return el.classList.contains('active') || el.getAttribute('aria-pressed') === 'true' || el.dataset.on === 'true';
        }
        return document.body.classList.contains('listen-mode-on');
      }
    }, {
      key: "setupListenModeWatchers",
      value: function setupListenModeWatchers() {
        var _this17 = this;
        var el = document.getElementById('listenMode');
        if (!el) {
          var bodyObs = new MutationObserver(function () {
            return _this17.onListenModeChange();
          });
          bodyObs.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
          });
          return;
        }
        var t = (el.tagName || '').toLowerCase();
        var type = (el.getAttribute('type') || '').toLowerCase();
        if (t === 'input' && (type === 'checkbox' || type === 'radio')) {
          el.addEventListener('change', function () {
            return _this17.onListenModeChange();
          });
        } else {
          el.addEventListener('click', function () {
            return _this17.onListenModeChange();
          });
          var attrObs = new MutationObserver(function () {
            return _this17.onListenModeChange();
          });
          attrObs.observe(el, {
            attributes: true,
            attributeFilter: ['class', 'aria-pressed', 'data-on']
          });
        }
      }
    }, {
      key: "onListenModeChange",
      value: function onListenModeChange() {
        if (!this.isListenModeOn()) {
          this.cleanup();
          return;
        }
        this.onInputStyleChange();
        this.onCorrectAnswerChange();
      }
    }, {
      key: "observeQA",
      value: function observeQA() {
        var _this18 = this;
        var textInput = document.getElementById('textInput');
        var correctAnswer = document.getElementById('correctAnswer');
        var submit = document.getElementById('textSubmitBtn');
        if (!textInput || !correctAnswer) return;
        var inputObs = new MutationObserver(function () {
          return _this18.onInputStyleChange();
        });
        inputObs.observe(textInput, {
          attributes: true,
          attributeFilter: ['style', 'class']
        });
        var ansObs = new MutationObserver(function () {
          return _this18.onCorrectAnswerChange();
        });
        ansObs.observe(correctAnswer, {
          attributes: true,
          attributeFilter: ['style', 'class'],
          childList: true,
          subtree: true
        });
        if (submit) submit.addEventListener('click', function () {
          return setTimeout(function () {
            _this18.onInputStyleChange();
            _this18.onCorrectAnswerChange();
          }, 0);
        });
      }
    }, {
      key: "onInputStyleChange",
      value: function onInputStyleChange() {
        if (!this.isListenModeOn()) {
          this.removeCorrectBtn();
          return;
        }
        var input = document.getElementById('textInput');
        if (!input) return;
        var bg = (input.style.backgroundColor || '').toLowerCase();
        var border = (input.style.border || '').toLowerCase();
        var isGreen = bg.includes('199, 232, 212') || border.includes('green');
        if (isGreen) {
          this.addCorrectBtn();
          this.removeIncorrectBtn();
        } else {
          this.removeCorrectBtn();
        }
      }
    }, {
      key: "onCorrectAnswerChange",
      value: function onCorrectAnswerChange() {
        if (!this.isListenModeOn()) {
          this.removeIncorrectBtn();
          return;
        }
        var ca = document.getElementById('correctAnswer');
        if (!ca) return;
        var visible = ca.style.display === 'block' || window.getComputedStyle(ca).display === 'block';
        if (visible && ca.textContent.trim() !== '') {
          this.addIncorrectBtn();
          this.removeCorrectBtn();
        } else {
          this.removeIncorrectBtn();
        }
      }
    }, {
      key: "addCorrectBtn",
      value: function addCorrectBtn() {
        if (this.correctBtn || !this.isListenModeOn()) return;
        var area = document.getElementById('textInputArea');
        if (!area) return;
        var btn = this.createBtn('correct');
        area.appendChild(btn);
        this.correctBtn = btn;
      }
    }, {
      key: "addIncorrectBtn",
      value: function addIncorrectBtn() {
        if (this.incorrectBtn || !this.isListenModeOn()) return;
        var ca = document.getElementById('correctAnswer');
        if (!ca) return;
        var btn = this.createBtn('incorrect');
        ca.appendChild(btn);
        this.incorrectBtn = btn;
      }
    }, {
      key: "removeCorrectBtn",
      value: function removeCorrectBtn() {
        if (this.correctBtn) {
          this.correctBtn.remove();
          this.correctBtn = null;
        }
      }
    }, {
      key: "removeIncorrectBtn",
      value: function removeIncorrectBtn() {
        if (this.incorrectBtn) {
          this.incorrectBtn.remove();
          this.incorrectBtn = null;
        }
      }
    }, {
      key: "createBtn",
      value: function createBtn(type) {
        var _this19 = this;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = "ti-listen ".concat(type);
        this.setBtnState(btn, 'idle');
        btn.addEventListener('click', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
            var _this19$getCorrectTex, text, lang;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  e.preventDefault();
                  if (_this19.isListenModeOn()) {
                    _context4.next = 3;
                    break;
                  }
                  return _context4.abrupt("return");
                case 3:
                  if (!btn.classList.contains('is-playing')) {
                    _context4.next = 8;
                    break;
                  }
                  ttsManager.stop();
                  _this19.setBtnState(btn, 'idle');
                  _this19.activeBtn = null;
                  return _context4.abrupt("return");
                case 8:
                  if (_this19.activeBtn && _this19.activeBtn !== btn) _this19.setBtnState(_this19.activeBtn, 'idle');
                  _this19$getCorrectTex = _this19.getCorrectTextAndLang(), text = _this19$getCorrectTex.text, lang = _this19$getCorrectTex.lang;
                  if (text) {
                    _context4.next = 12;
                    break;
                  }
                  return _context4.abrupt("return");
                case 12:
                  _this19.setBtnState(btn, 'loading');
                  _this19.activeBtn = btn;
                  ttsManager.speak(text, lang, {
                    onstart: function onstart() {
                      return _this19.setBtnState(btn, 'playing');
                    },
                    onend: function onend() {
                      if (_this19.activeBtn === btn) _this19.setBtnState(btn, 'idle');
                      _this19.activeBtn = null;
                    },
                    onerror: function onerror() {
                      btn.classList.add('ti-shake');
                      setTimeout(function () {
                        return btn.classList.remove('ti-shake');
                      }, 260);
                      if (_this19.activeBtn === btn) _this19.setBtnState(btn, 'idle');
                      _this19.activeBtn = null;
                    }
                  });
                case 15:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());
        return btn;
      }
    }, {
      key: "setBtnState",
      value: function setBtnState(btn, state) {
        btn.classList.remove('is-loading', 'is-playing');
        if (state === 'loading') {
          btn.classList.add('is-loading');
          btn.innerHTML = this.svgVolume();
        } else if (state === 'playing') {
          btn.classList.add('is-playing');
          btn.innerHTML = this.svgStop();
        } else {
          btn.innerHTML = this.svgVolume();
        }
      }
    }, {
      key: "svgVolume",
      value: function svgVolume() {
        return "\n        <svg class=\"ti-icon volume\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <path d=\"M3 10v4h4l5 4V6L7 10H3z\"></path>\n          <path d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06A4.49 4.49 0 0 0 16.5 12z\"></path>\n          <path d=\"M14 3.23v2.06c2.89 1 5 3.77 5 6.71s-2.11 5.71-5 6.71v2.06c4.01-1.11 7-4.89 7-8.77s-2.99-7.66-7-8.77z\"></path>\n        </svg>\n      ";
      }
    }, {
      key: "svgStop",
      value: function svgStop() {
        return "\n        <svg class=\"ti-icon stop\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <rect x=\"6\" y=\"6\" width=\"12\" height=\"12\" rx=\"2\" ry=\"2\"></rect>\n        </svg>\n      ";
      }
    }, {
      key: "getCorrectTextAndLang",
      value: function getCorrectTextAndLang() {
        var _document$getElementB, _document$getElementB2;
        var q = ((_document$getElementB = document.getElementById('questionText')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.textContent) || '';
        var lang = /\bAlmanca\b|Almancası|Almanca karşılığı/i.test(q) ? 'de' : 'tr';
        var text = '';
        var ca = document.getElementById('correctAnswer');
        var strong = ca ? ca.querySelector('strong') : null;
        var caVisible = ca && (ca.style.display === 'block' || window.getComputedStyle(ca).display === 'block');
        if (caVisible && strong) text = strong.textContent.trim();else text = (((_document$getElementB2 = document.getElementById('textInput')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value) || '').trim();
        return {
          text: text,
          lang: lang
        };
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.setBtnStateIfExists(this.correctBtn, 'idle');
        this.setBtnStateIfExists(this.incorrectBtn, 'idle');
        this.removeCorrectBtn();
        this.removeIncorrectBtn();
        this.activeBtn = null;
        ttsManager.stop();
      }
    }, {
      key: "setBtnStateIfExists",
      value: function setBtnStateIfExists(btn, state) {
        if (btn) this.setBtnState(btn, state);
      }
    }]);
    return TextInputListenEnhancement;
  }();
  document.addEventListener('DOMContentLoaded', function () {
    return new TextInputListenEnhancement();
  });
})();
document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.getElementById('toggleControlsBtn');
  var bottomControls = document.querySelector('.bottom-controls');
  var enaltbar = document.querySelector('.enaltbar');
  if (toggleBtn && bottomControls && enaltbar) {
    toggleBtn.addEventListener('click', function () {
      bottomControls.classList.toggle('hidden');
      toggleBtn.classList.toggle('rotated');
      if (bottomControls.classList.contains('hidden')) {
        enaltbar.style.height = '0px';
      } else {
        enaltbar.style.height = '';
      }
    });
  }
});
function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}
function openBottomControls() {
  if (!isMobile()) return;
  var bottom = document.querySelector('.bottom-controls');
  var btn = document.getElementById('toggleControlsBtn');
  var bar = document.querySelector('.enaltbar');
  if (!bottom || !btn || !bar) return;
  clearTimeout(window.__openBottomTimer);
  window.__openBottomTimer = setTimeout(function () {
    bottom.classList.remove('hidden');
    btn.classList.add('rotated');
    bar.style.height = '';
  }, 1000);
}
function closeBottomControls() {
  if (!isMobile()) return;
  var bottom = document.querySelector('.bottom-controls');
  var btn = document.getElementById('toggleControlsBtn');
  var bar = document.querySelector('.enaltbar');
  if (!bottom || !btn || !bar) return;
  clearTimeout(window.__openBottomTimer);
  bottom.classList.add('hidden');
  btn.classList.remove('rotated');
  bar.style.height = '0px';
}
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sidebar-btn').forEach(function (btn) {
    return btn.addEventListener('click', closeBottomControls);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var app = new QuizApp();
  window.quizApp = app;
  loadCategories();
  closeBottomControls();
});
document.getElementById('topiclist').addEventListener('click', function (e) {
  kilitAcCategory();
  e.stopPropagation();
  document.getElementById('categoryPanel').classList.add('show');
  document.getElementById('categoryOverlay').classList.add('show');
});
document.getElementById('categoryOverlay').addEventListener('click', function () {
  document.getElementById('categoryPanel').classList.remove('show');
  document.getElementById('categoryOverlay').classList.remove('show');
});
function loadCategories() {
  var categoryList = document.getElementById('categoryList');
  categoryList.innerHTML = '';
  var categories = Object.keys(wordData);
  categories.forEach(function (category, index) {
    var words = Object.keys(wordData[category]).length;
    var item = document.createElement('div');
    item.className = 'category-item';
    item.innerHTML = "\n      <div class=\"category-number\">".concat(index + 1, "</div>\n      <div class=\"category-details\">\n        <h4>").concat(category, "</h4>\n        <p>").concat(words, " kelime</p>\n      </div>\n    ");
    item.addEventListener('click', function () {
      document.querySelectorAll('.category-item.selected').forEach(function (el) {
        return el.classList.remove('selected');
      });
      item.classList.add('selected');
      var quizOverlay = document.getElementById('quizCompletedOverlay');
      if (quizOverlay) {
        quizOverlay.classList.remove('show');
        quizOverlay.style.display = 'none';
      }
      window.quizApp.setCategory(category);
      if (document.getElementById('wordListModal').classList.contains('show')) {
        initializeWordList();
        displayWordsInTable();
      }
      document.getElementById('categoryPanel').classList.remove('show');
      document.getElementById('categoryOverlay').classList.remove('show');
      document.getElementById('topiclist').style.bottom = '10px';
    });
    categoryList.appendChild(item);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  var DEFAULT_CAT = 'Meyveler';
  setTimeout(function () {
    document.querySelectorAll('#categoryList .category-item.selected').forEach(function (el) {
      return el.classList.remove('selected');
    });
    var target = _toConsumableArray(document.querySelectorAll('#categoryList .category-item')).find(function (li) {
      var _li$querySelector;
      return ((_li$querySelector = li.querySelector('h4')) === null || _li$querySelector === void 0 ? void 0 : _li$querySelector.textContent.trim().toLowerCase()) === DEFAULT_CAT.toLowerCase();
    });
    if (target) target.classList.add('selected');
  }, 0);
});
document.addEventListener('DOMContentLoaded', function () {
  var topiclist = document.getElementById('topiclist');
  var categoryPanel = document.getElementById('categoryPanel');
  var overlay = document.getElementById('categoryOverlay');
  if (!topiclist || !categoryPanel || !overlay) return;
  var originalPosition = topiclist.style.bottom;
  topiclist.addEventListener('click', function (e) {
    e.stopPropagation();
    topiclist.style.transition = 'bottom 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
    topiclist.style.bottom = '-100px';
    setTimeout(function () {
      categoryPanel.classList.add('show');
      overlay.classList.add('show');
    }, 200);
  });
  overlay.addEventListener('click', function () {
    categoryPanel.classList.remove('show');
    setTimeout(function () {
      overlay.classList.remove('show');
      topiclist.style.bottom = originalPosition || '10px';
    }, 100);
  });
});
(function () {
  var ready = Promise.all([new Promise(function (r) {
    return window.addEventListener('load', r, {
      once: true
    });
  }), document.fonts && document.fonts.ready || Promise.resolve()]);
  ready.then(function () {
    var imgs = _toConsumableArray(document.querySelectorAll('img,object[type="image/svg+xml"]'));
    return Promise.all(imgs.map(function (el) {
      if (el.tagName === 'IMG' && el.decode) return el.decode()["catch"](function () {});
      if (el.tagName === 'OBJECT') return new Promise(function (r) {
        return el.addEventListener('load', r, {
          once: true
        });
      });
      return Promise.resolve();
    }));
  }).then(function () {
    return new Promise(function (r) {
      return setTimeout(r, 4000);
    });
  }).then(function () {
    var l = document.getElementById('pageLoader');
    if (!l) return;
    l.classList.add('hide');
    setTimeout(function () {
      return l.remove();
    }, 500);
  });
})();