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

var greenOrRed = function greenOrRed(str, high, low) {
  var v = parseFloat(str);
  if (v > high) return 'green bold';
  if (v < low) return 'red bold';
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
      var _this$props = this.props,
          data = _this$props.data,
          _this$props$count = _this$props.count,
          count = _this$props$count === void 0 ? 4 : _this$props$count;

      if (!data || !data.length) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "font-12"
        }, "Not available at this time... ");
      }

      var unit = _lodash["default"].get(data, '0.unit') || 'million';
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-sm",
        style: {
          marginBottom: 0,
          fontSize: 10
        }
      }, /*#__PURE__*/_react["default"].createElement("thead", {
        className: "bold"
      }, /*#__PURE__*/_react["default"].createElement("th", {
        className: "left lighter"
      }, "Unit: (", unit, ")"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d)
        }, data[d] && data[d].quarterStr);
      })), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Operating Cashflows"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d, " hov lighter ").concat(greenOrRed(data[d] && data[d].cashFlowOperating, 0, -999999999999999))
        }, data[d] && data[d].cashFlowOperating && parseFloat(data[d].cashFlowOperating).toFixed(2));
      })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Financing Cashflows"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d, " hov lighter")
        }, data[d] && data[d].cashFlowFinancing && parseFloat(data[d].cashFlowFinancing).toFixed(2));
      })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Investing Cashflows"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d, " hov lighter")
        }, data[d] && data[d].totalInvestingCashFlows && parseFloat(data[d].totalInvestingCashFlows).toFixed(2));
      })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Total Capital Expenditures"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d, " hov lighter")
        }, data[d] && data[d].capitalExpenditures && parseFloat(data[d].capitalExpenditures).toFixed(2));
      })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Changes In Cash"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d, " hov lighter ").concat(greenOrRed(data[d] && data[d].changeInCash, 0, -999999999999999))
        }, data[d] && data[d].changeInCash && parseFloat(data[d].changeInCash).toFixed(2));
      })), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
        className: "bold"
      }, "Free Cash flow"), _lodash["default"].range(count).map(function (d) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: d,
          className: "bg-lightgray-ul-".concat(d, " hov lighter ").concat(greenOrRed(data[d] && data[d].freeCashFlow, 0, -999999999999999))
        }, data[d] && data[d].freeCashFlow && parseFloat(data[d].freeCashFlow).toFixed(2));
      }))));
    }
  }]);

  return Table;
}(_react["default"].Component);

exports.Table = Table;
var _default = Table;
exports["default"] = _default;