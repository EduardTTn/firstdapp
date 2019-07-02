webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_carrecord_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/carrecord.js */ "./components/carrecord.js");
/* harmony import */ var semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react/dist/commonjs/views/Card */ "./node_modules/semantic-ui-react/dist/commonjs/views/Card/index.js");
/* harmony import */ var semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_web3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/web3 */ "./components/web3.js");
/* harmony import */ var _components_snackbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/snackbar */ "./components/snackbar.js");











var _jsxFileName = "/home/ed/plsbefinal/pages/index.js";










var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.loadBlockchainData();
    } //verifies if an user is admin or the owner of the contract

  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
        var accounts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _components_web3__WEBPACK_IMPORTED_MODULE_18__["default"].eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.t0 = this;
                _context.next = 6;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.checkIfOwner(accounts[0]).call();

              case 6:
                _context.t1 = _context.sent;
                _context.t2 = {
                  isOwner: _context.t1
                };

                _context.t0.setState.call(_context.t0, _context.t2);

                _context.t3 = this;
                _context.next = 12;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.checkIfAdmin(accounts[0]).call();

              case 12:
                _context.t4 = _context.sent;
                _context.t5 = {
                  isAdmin: _context.t4
                };

                _context.t3.setState.call(_context.t3, _context.t5);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }]);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onClick",
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(event) {
        var VIN, y, i, z;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                VIN = _this.state.VIN;

                _this.setState({
                  disableEventButton: true
                });

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context2.prev = 4;
                _context2.next = 7;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getEventsCount(VIN).call();

              case 7:
                y = _context2.sent;
                i = 0;

              case 9:
                if (!(i < y)) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 12;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getEvent(VIN, i).call();

              case 12:
                z = _context2.sent;

                _this.setState({
                  events: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.events), [z])
                });

              case 14:
                i++;
                _context2.next = 9;
                break;

              case 17:
                _this.setState({
                  showTable: true
                });

                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](4);

                _this.setState({
                  errorMessage: _context2.t0.message
                });

              case 23:
                _this.setState({
                  loading: false
                });

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 20]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(event) {
        var VIN, x, g;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                VIN = _this.state.VIN;

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _this.setState({
                  disableEventButton: false
                });

                _this.setState({
                  showTable: false
                });

                _this.setState({
                  events: []
                });

                _context3.prev = 6;
                _context3.next = 9;
                return _components_carrecord_js__WEBPACK_IMPORTED_MODULE_12__["default"].methods.getCar(VIN).call();

              case 9:
                x = _context3.sent;

                if (x[0] === "") {
                  _this.setState({
                    errorMessage: 'INVALID CAR'
                  });
                }

                g = _this.state.VIN;

                if (g === '') {
                  _this.setState({
                    errorMessage: 'Please fill the search form'
                  });
                } // set state.car to x only if there are valid values in X


                if (x[0] !== '' && x[2] !== '' && x[3] !== '') {
                  _this.setState({
                    car: x
                  });
                }

                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](6);

                _this.setState({
                  errorMessage: _context3.t0.message
                });

              case 19:
                _this.setState({
                  loading: false
                });

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[6, 16]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleChange", function (event) {
      event.preventDefault();

      _this.setState({
        showTable: false
      });

      _this.setState({
        VIN: event.target.value
      });

      _this.setState({
        errorMessage: ''
      });

      _this.setState({
        hideEvents: true
      });

      _this.setState({
        car: null
      });
    });

    _this.state = {
      VIN: '',
      car: null,
      eventsCount: '',
      events: [],
      disableEventButton: true,
      loading: false,
      errorMessage: '',
      showTable: false,
      accounts: [],
      isOwner: false,
      isAdmin: false
    };
    return _this;
  } //upon clicking, the function returns the events of the car registered in the contract


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(Index, [{
    key: "renderEvents",
    //renders an event in a table row
    value: function renderEvents() {
      var x = this.state.VIN;
      var r = this.state.events.map(function (event) {
        return [react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, event[0].toString(), "/", event[1].toString(), "/", event[2].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, event[3].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, event[4].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, event[5].toString()), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Cell, {
          key: x,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, event[6].toString()))];
      });
      return r;
    } //renders all the events in a row

  }, {
    key: "renderTables",
    value: function renderTables() {
      var tableStyle = {
        width: '68%',
        margin: '20px auto'
      };

      if (this.state.events && this.state.events.length) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"], {
          celled: true,
          style: tableStyle,
          color: 'purple',
          key: 'purple',
          inverted: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "Date"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "Type"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Mileage"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, "Description"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].HeaderCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Made by"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Table"].Body, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, this.state.disableEventButton === false ? null : this.renderEvents()));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Message"], {
          info: true,
          style: {
            width: '15%',
            margin: '30px auto'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, " This car has no events recorded ");
      }
    } //upon submitting, the function returns the basic info of a car registered in the contract

  }, {
    key: "render",
    value: function render() {
      var cardStyle = {
        display: 'block',
        width: '28%',
        margin: '7px auto',
        height: 'auto'
      };
      var formStyle = {
        width: '100%'
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
        fixed: "top",
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "/index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        as: "a",
        header: true,
        style: {
          margin: '3px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Image"], {
        size: "normal",
        src: "https://img.icons8.com/cotton/75/000000/retro-car.png",
        style: {
          marginleft: '1.5em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        style: {
          margin: '5px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Car Record"))), this.state.isOwner === false ? null : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "/ManageAdmin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Manage Admin")), this.state.isAdmin === false ? null : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"], {
        item: true,
        simple: true,
        text: "Manage Cars",
        disabled: this.props.admin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "/AddCar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Add Car")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "/ModifyCar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Modify Car")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
        href: "/AddEvent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Add Event")), "}"))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, "\n        body {\n         background: url(\"https://images.pexels.com/photos/707047/pexels-photo-707047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1280&w=1900\");\n         background-repeat: no-repeat;\n         background-position: center; \n        }\n      ")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        style: {
          margin: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Car Info"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"], {
        className: "form-inline",
        style: formStyle,
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        inline: true,
        style: {
          width: '60%',
          margin: '150px auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        style: {
          fontSize: 'xx-large'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Search:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Field, {
        style: {
          width: '90%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        placeholder: "VIN",
        "aria-placeholder": {
          color: 'blue'
        },
        style: {
          width: '100%',
          height: '75px',
          fontSize: 'large'
        },
        value: this.state.VIN,
        onChange: this.handleChange,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        onClick: this.onSubmit,
        color: "purple",
        style: {
          width: '150px',
          height: '75px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        color: "black",
        name: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Message"], {
        style: {
          width: '15%',
          margin: '30px auto'
        },
        error: true,
        header: "Notification:",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      })), this.state.car != null && this.state.car[0] != null ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, " BRAND: "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, this.state.car[0]), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "YEAR:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.car[1]) >= 1 ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(this.state.car[1]) : ''), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "COLOR:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, this.state.car[2]), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "LICENSE:"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react_dist_commonjs_views_Card__WEBPACK_IMPORTED_MODULE_13___default.a.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, this.state.car[3])), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        loading: !!this.state.loading,
        style: cardStyle,
        variant: "contained",
        color: "purple",
        disabled: this.state.disableEventButton === true || this.state.errorMessage !== '',
        onClick: this.onClick,
        error: !!this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Show Events")) : null, this.state.showTable === true ? this.renderTables() : null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, this.state.loading === true ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_snackbar__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }) : null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.cb305045589bc1b1bca1.hot-update.js.map