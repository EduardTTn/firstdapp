webpackHotUpdate("static/development/pages/ManageAdmin.js",{

/***/ "./pages/ManageAdmin.js":
/*!******************************!*\
  !*** ./pages/ManageAdmin.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_carrecord_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/carrecord.js */ "./components/carrecord.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_web3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/web3.js */ "./components/web3.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_snackbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/snackbar */ "./components/snackbar.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");









var _jsxFileName = "/home/ed/plsbefinal/pages/ManageAdmin.js";










var ManageAdmin =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(ManageAdmin, _Component);

  function ManageAdmin() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ManageAdmin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ManageAdmin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      loading: false,
      errorMessage: '',
      errorRemoveMessage: '',
      errorSearchMessage: '',
      name: '',
      removeadmin: '',
      address: '',
      accounts: [],
      adminsearch: '',
      isAdmin: false,
      showifadmin: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 2;
                _context.t0 = _this;
                _context.next = 6;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 6:
                _context.t1 = _context.sent;
                _context.t2 = {
                  accounts: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _this.setState({
                  errorRemoveMessage: ''
                });

                _this.setState({
                  errorSearchMessage: ''
                });

                _context.next = 13;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_10__["default"].methods.addAdmin(_this.state.address, _this.state.name).send({
                  from: _this.state.accounts[0]
                });

              case 13:
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t3 = _context["catch"](2);

                _this.setState({
                  loading: false
                });

                if (_this.state.address === '' || _this.state.name === '') {
                  _this.setState({
                    errorMessage: "Fields can't be empty"
                  });
                } else if (_context.t3.message.includes('invalid address')) _this.setState({
                  errorMessage: 'invalid address'
                });

              case 19:
                _this.setState({
                  loading: false
                });

                console.log(accounts);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmitRemove",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _context2.t0 = _this;
                _context2.next = 4;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 4:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  accounts: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

                _this.setState({
                  errorMessage: ''
                });

                _this.setState({
                  errorRemoveMessage: ''
                });

                _context2.prev = 9;

                _this.setState({
                  loading: true,
                  errorSearchMessage: ''
                });

                if (!(_this.state.removeadmin === '')) {
                  _context2.next = 15;
                  break;
                }

                _this.setState({
                  errorRemoveMessage: 'Field is empty'
                });

                _context2.next = 17;
                break;

              case 15:
                _context2.next = 17;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_10__["default"].methods.removeAdmin(_this.state.removeadmin).send({
                  from: _this.state.accounts[0]
                });

              case 17:
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t3 = _context2["catch"](9);

                _this.setState({
                  errorRemoveMessage: _context2.t3.message
                });

              case 22:
                _this.setState({
                  loading: false
                });

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[9, 19]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSubmitSearch",
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                event.preventDefault();
                _context3.t0 = _this;
                _context3.next = 5;
                return _components_web3_js__WEBPACK_IMPORTED_MODULE_13__["default"].eth.getAccounts();

              case 5:
                _context3.t1 = _context3.sent;
                _context3.t2 = {
                  accounts: _context3.t1
                };

                _context3.t0.setState.call(_context3.t0, _context3.t2);

                _this.setState({
                  errorMessage: ''
                });

                _this.setState({
                  errorRemoveMessage: ''
                });

                _this.setState({
                  loading: true,
                  errorSearchMessage: ''
                });

                if (!(_this.state.adminsearch === '')) {
                  _context3.next = 15;
                  break;
                }

                _this.setState({
                  errorSearchMessage: 'Field is empty'
                });

                _context3.next = 22;
                break;

              case 15:
                _context3.t3 = _this;
                _context3.next = 18;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_10__["default"].methods.checkAdmin(_this.state.adminsearch).call();

              case 18:
                _context3.t4 = _context3.sent;
                _context3.t5 = {
                  isAdmin: _context3.t4
                };

                _context3.t3.setState.call(_context3.t3, _context3.t5);

                _this.setState({
                  showifadmin: true
                });

              case 22:
                _context3.next = 27;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t6 = _context3["catch"](0);

                _this.setState({
                  errorSearchMessage: _context3.t6.message
                });

              case 27:
                _this.setState({
                  loading: false
                });

                console.log(accounts);

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 24]]);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangeAddress", function (event) {
      event.preventDefault();

      _this.setState({
        address: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });

      _this.setState({
        showifadmin: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChangeName", function (event) {
      event.preventDefault();

      _this.setState({
        name: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });

      _this.setState({
        errorRemoveMessage: ''
      });

      _this.setState({
        errorSearchMessage: ''
      });

      _this.setState({
        showifadmin: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleRemoveName", function (event) {
      event.preventDefault();

      _this.setState({
        removeadmin: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });

      _this.setState({
        errorRemoveMessage: ''
      });

      _this.setState({
        errorSearchMessage: ''
      });

      _this.setState({
        showifadmin: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSearch", function (event) {
      event.preventDefault();

      _this.setState({
        adminsearch: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });

      _this.setState({
        errorRemoveMessage: ''
      });

      _this.setState({
        errorSearchMessage: ''
      });

      _this.setState({
        showifadmin: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ManageAdmin, [{
    key: "render",
    value: function render() {
      var buttonStyle = {
        margin: '4px'
      };
      var cardStyle = {
        width: '50%',
        margin: '100px auto'
      };
      var labelStyle = {
        margin: '10px'
      };
      var formstyle = {
        opacity: '100%'
      };
      {
        var _React$createElement;

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"], {
          fixed: "top",
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/index",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
          as: "a",
          header: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Image"], {
          size: "normal",
          src: "https://img.icons8.com/cotton/50/000000/retro-car.png",
          style: {
            marginLeft: '1.5em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, "Car Record"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Menu"].Item, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/ManageAdmin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "Manage Admin")), " :", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dropdown"], {
          item: true,
          simple: true,
          text: "Manage Cars",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Menu, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/AddCar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, "Add Car")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/ModifyCar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, "Modify Car")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: "/AddEvent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dropdown"].Item, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, "Add Event")), "}"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
          rel: "stylesheet",
          href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("style", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          __self: this
        }, "\n        body {\n         background: url(\"https://images.pexels.com/photos/707047/pexels-photo-707047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1900\");\n         background-repeat: no-repeat;\n         background-position: center; \n        }\n      ")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
          style: {
            margin: '20px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, "Manage Admins"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
          inverted: true,
          style: cardStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
          style: labelStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, "Add Admin")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
          inverted: true,
          className: "form-inline",
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          style: formstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
          inline: true,
          style: {
            width: '60%',
            margin: '30px auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          required: true,
          style: {
            width: '70%',
            margin: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          fluid: true,
          label: "Admin Address:",
          placeholder: "Address of the Admin",
          "aria-placeholder": {
            color: 'purple'
          },
          style: {
            width: '100%'
          },
          value: this.state.address,
          onChange: this.handleChangeAddress,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          fluid: true,
          label: "Admin Name:",
          placeholder: "Name of the Admin",
          "aria-placeholder": {
            color: 'purple'
          },
          style: {
            width: '96.555%'
          },
          value: this.state.name,
          onChange: this.handleChangeName,
          error: !!this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          onClick: this.onSubmit,
          color: "purple",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          },
          __self: this
        }, "Add"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
          style: buttonStyle,
          error: true,
          header: "Error!",
          content: this.state.errorMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
          inverted: true,
          style: cardStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
          style: labelStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, "Remove Admin")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], {
          inverted: true,
          className: "form-inline",
          onSubmit: this.onSubmit,
          error: !!this.state.errorRemoveMessage,
          style: formstyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
          inline: true,
          style: {
            width: '60%',
            margin: '50px auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, "Admin Name:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          style: {
            width: '70%',
            margin: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Input, {
          placeholder: "Name of the Admin",
          "aria-placeholder": {
            color: 'purple'
          },
          style: {
            width: '100%'
          },
          value: this.state.removeadmin,
          onChange: this.handleRemoveName,
          error: !!this.state.errorRemoveMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          onClick: this.onSubmitRemove,
          color: "purple",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, "Remove"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
          style: buttonStyle,
          error: true,
          header: "Error!",
          content: this.state.errorRemoveMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
          inverted: true,
          style: cardStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
          style: labelStyle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, "Check Admin")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"], (_React$createElement = {
          inverted: true
        }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "inverted", true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "className", "form-inline"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "onSubmit", this.onSubmitSearch), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "error", !!this.state.errorSearchMessage), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "style", formstyle), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__source", {
          fileName: _jsxFileName,
          lineNumber: 286
        }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Group, {
          inline: true,
          style: {
            width: '60%',
            margin: '50px auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, "Admin Name:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          style: {
            width: '70%',
            margin: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
          placeholder: "Name of the Admin",
          "aria-placeholder": {
            color: 'purple'
          },
          style: {
            width: '100%'
          },
          value: this.state.adminsearch,
          onChange: this.handleSearch,
          error: !!this.state.errorSearchMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Form"].Field, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
          onClick: this.onSubmitSearch,
          color: "purple",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          color: "white",
          name: "search",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
          style: buttonStyle,
          error: true,
          header: "Error!",
          content: this.state.errorSearchMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310
          },
          __self: this
        }, this.state.showifadmin === true ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
          info: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          },
          __self: this
        }, this.state.isAdmin === true ? 'Is an Admin' : 'Is not an Admin') : null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, this.state.loading === true ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_snackbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }) : null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }));
      }
    }
  }]);

  return ManageAdmin;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ManageAdmin);

/***/ })

})
//# sourceMappingURL=ManageAdmin.js.cfde5f1e27724a35d669.hot-update.js.map