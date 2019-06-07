webpackHotUpdate("static/development/pages/ModifyCar.js",{

/***/ "./components/carrecord.js":
/*!*********************************!*\
  !*** ./components/carrecord.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.js */ "./components/web3.js");

var abi = [{
  "constant": false,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }, {
    "name": "_name",
    "type": "string"
  }],
  "name": "addAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_VIN",
    "type": "string"
  }, {
    "name": "_brand",
    "type": "string"
  }, {
    "name": "_year",
    "type": "int256"
  }, {
    "name": "_color",
    "type": "string"
  }, {
    "name": "_license",
    "type": "string"
  }],
  "name": "addCar",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_VIN",
    "type": "string"
  }, {
    "name": "_day",
    "type": "int256"
  }, {
    "name": "_month",
    "type": "int256"
  }, {
    "name": "_year",
    "type": "int256"
  }, {
    "name": "_eventtype",
    "type": "string"
  }, {
    "name": "_mileage",
    "type": "int256"
  }, {
    "name": "_desc",
    "type": "string"
  }],
  "name": "addEvent",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_VIN",
    "type": "string"
  }, {
    "name": "_color",
    "type": "string"
  }, {
    "name": "_license",
    "type": "string"
  }],
  "name": "changeCarInfo",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_name",
    "type": "string"
  }],
  "name": "removeAdmin",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "constructor"
}, {
  "constant": true,
  "inputs": [{
    "name": "_name",
    "type": "string"
  }],
  "name": "checkAdmin",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "checkIfAdmin",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_addr",
    "type": "address"
  }],
  "name": "checkIfOwner",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_VIN",
    "type": "string"
  }],
  "name": "getCar",
  "outputs": [{
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_VIN",
    "type": "string"
  }, {
    "name": "_index",
    "type": "uint256"
  }],
  "name": "getEvent",
  "outputs": [{
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "int256"
  }, {
    "name": "",
    "type": "string"
  }, {
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_VIN",
    "type": "string"
  }],
  "name": "getEventsCount",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
var address = '0xb96bfa435cfdfcb9c91445c1e6675ef6b3e7099e';
var instance = new _web3_js__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, address);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ })

})
//# sourceMappingURL=ModifyCar.js.58193b93685f8340c0ee.hot-update.js.map