"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Table = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var color = function color(num) {
  if (num > 0) return 'green bold';
  if (num < 0) return 'red bold';
  return;
};

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      if (!data || !data.length) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "font-12"
        }, "Not available at this time... ");
      }

      var unit = _lodash["default"].get(data, '0.unit') || 'million';
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-sm",
        style: {
          marginBottom: 0
        }
      }, /*#__PURE__*/_react["default"].createElement("thead", {
        className: "bold"
      }, /*#__PURE__*/_react["default"].createElement("th", {
        className: "left lighter"
      }, "Unit: (", unit, ")"), /*#__PURE__*/_react["default"].createElement("th", {
        className: "bg-lightgray-ultra-5"
      }, data[0] && data[0].quarterStr), /*#__PURE__*/_react["default"].createElement("th", {
        className: "bg-lightgray-ultra-4"
      }, data[1] && data[1].quarterStr), /*#__PURE__*/_react["default"].createElement("th", {
        className: "bg-lightgray-ultra-3"
      }, data[2] && data[2].quarterStr), /*#__PURE__*/_react["default"].createElement("th", {
        className: "bg-lightgray-ultra-2"
      }, data[3] && data[3].quarterStr)), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Operating Cashflows"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5"
      }, data[0] && data[0].cashFlowOperating && parseFloat(data[0].cashFlowOperating).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4"
      }, data[1] && data[1].cashFlowOperating && parseFloat(data[1].cashFlowOperating).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3"
      }, data[2] && data[2].cashFlowOperating && parseFloat(data[2].cashFlowOperating).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2"
      }, data[3] && data[3].cashFlowOperating && parseFloat(data[3].cashFlowOperating).toFixed(2))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Financing Cashflows"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5"
      }, data[0] && data[0].cashFlowFinancing && parseFloat(data[0].cashFlowFinancing).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4"
      }, data[1] && data[1].cashFlowFinancing && parseFloat(data[1].cashFlowFinancing).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3"
      }, data[2] && data[2].cashFlowFinancing && parseFloat(data[2].cashFlowFinancing).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2"
      }, data[3] && data[3].cashFlowFinancing && parseFloat(data[3].cashFlowFinancing).toFixed(2))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Investing Cashflows"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5"
      }, data[0] && data[0].totalInvestingCashFlows && parseFloat(data[0].totalInvestingCashFlows).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4"
      }, data[1] && data[1].totalInvestingCashFlows && parseFloat(data[1].totalInvestingCashFlows).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3"
      }, data[2] && data[2].totalInvestingCashFlows && parseFloat(data[2].totalInvestingCashFlows).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2"
      }, data[3] && data[3].totalInvestingCashFlows && parseFloat(data[3].totalInvestingCashFlows).toFixed(2))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Total Investments"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5"
      }, data[0] && data[0].investments && parseFloat(data[0].investments).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4"
      }, data[1] && data[1].investments && parseFloat(data[1].investments).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3"
      }, data[2] && data[2].investments && parseFloat(data[2].investments).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2"
      }, data[3] && data[3].investments && parseFloat(data[3].investments).toFixed(2))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Total Capital Expenditures"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5"
      }, data[0] && data[0].capitalExpenditures && parseFloat(data[0].capitalExpenditures).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4"
      }, data[1] && data[1].capitalExpenditures && parseFloat(data[1].capitalExpenditures).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3"
      }, data[2] && data[2].capitalExpenditures && parseFloat(data[2].capitalExpenditures).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2"
      }, data[3] && data[3].capitalExpenditures && parseFloat(data[3].capitalExpenditures).toFixed(2))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Changes In Cash"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5 ".concat(color(data[0] && data[0].changeInCash))
      }, data[0] && data[0].changeInCash && parseFloat(data[0].changeInCash).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4 ".concat(color(data[1] && data[1].changeInCash))
      }, data[1] && data[1].changeInCash && parseFloat(data[1].changeInCash).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3 ".concat(color(data[2] && data[2].changeInCash))
      }, data[2] && data[2].changeInCash && parseFloat(data[2].changeInCash).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2 ".concat(color(data[3] && data[3].changeInCash))
      }, data[3] && data[3].changeInCash && parseFloat(data[3].changeInCash).toFixed(2))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Free Cash flow"), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-5 ".concat(color(data[0] && data[0].freeCashFlow))
      }, data[0] && data[0].freeCashFlow && parseFloat(data[0].freeCashFlow).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-4 ".concat(color(data[1] && data[1].freeCashFlow))
      }, data[1] && data[1].freeCashFlow && parseFloat(data[1].freeCashFlow).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-3 ".concat(color(data[2] && data[2].freeCashFlow))
      }, data[2] && data[2].freeCashFlow && parseFloat(data[2].freeCashFlow).toFixed(2)), /*#__PURE__*/_react["default"].createElement("td", {
        className: "bg-lightgray-ultra-2 ".concat(color(data[3] && data[3].freeCashFlow))
      }, data[3] && data[3].freeCashFlow && parseFloat(data[3].freeCashFlow).toFixed(2)))));
    }
  }]);

  return Table;
}(_react["default"].Component);

exports.Table = Table;
var _default = Table;
exports["default"] = _default;