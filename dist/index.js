"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CashflowTable = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("./Table"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

require("./../index.css");

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

var calculateCashflows = function calculateCashflows(data) {
  var divider = 1000000;
  var unit = 'million';
  var u = 'm';
  if (!data || !data.length) return data;

  if (data[0].cf > 1000000000) {
    divider = 1000000000;
    unit = 'billion';
    u = 'b';
  }

  data = _lodash["default"].sortBy(data.filter(function (d) {
    return d.reportDate;
  }), function (d) {
    return d.reportDate;
  }).slice(-4);
  return data.map(function (d, i) {
    var qq = ~~d.reportDate.slice(5, 7);
    var yy = d.reportDate.slice(0, 4);
    var qtr;

    if (qq <= 3) {
      qtr = 'Q1';
    } else if (qq <= 6) {
      qtr = 'Q2';
    } else if (qq <= 9) {
      qtr = 'Q3';
    } else if (qq <= 12) {
      qtr = 'Q4';
    }

    d.quarterStr = yy + qtr;
    d.unit = unit;
    d.u = u;
    d.cashFlow = d.cf / divider;
    d.cashFlowFinancing = d.cff / divider;
    d.cashFlowOperating = d.ocf / divider;
    d.totalInvestingCashFlows = d.tic / divider;
    d.investments = d.iv / divider;
    d.capitalExpenditures = d.ce / divider;
    d.changeInCash = d.cic / divider;
    d.freeCashFlow = d.fcf / divider;
    return d;
  });
};

var CashflowTable = /*#__PURE__*/function (_React$Component) {
  _inherits(CashflowTable, _React$Component);

  var _super = _createSuper(CashflowTable);

  function CashflowTable(props) {
    var _this;

    _classCallCheck(this, CashflowTable);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(CashflowTable, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var profile = this.props.profile;
      if (!profile) return true;
      if (nextState.copied) return true;
      if (profile.ticker !== nextProps.profile.ticker) return true;
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          profile = _this$props.profile,
          _this$props$prop = _this$props.prop,
          prop = _this$props$prop === void 0 ? 'cashflow_stmt' : _this$props$prop,
          _this$props$imgProp = _this$props.imgProp,
          imgProp = _this$props$imgProp === void 0 ? 'cashflow_table' : _this$props$imgProp;
      var copied = this.state.copied;

      if (!profile) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            fontSize: 14
          }
        }, "Not available at this time... ");
      }

      if (profile[imgProp] && profile[imgProp].url) {
        var btnClass = copied ? 'react-components-show-url btn btn-sm btn-danger disabled font-10' : 'react-components-show-url btn btn-sm btn-warning font-10';
        var btnText = copied ? 'Copied' : 'Copy Img';
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "react-components-show-button"
        }, /*#__PURE__*/_react["default"].createElement("img", {
          alt: "".concat(profile.ticker, " - ").concat(profile.name, " cashflow statements"),
          src: profile[imgProp].url,
          style: {
            width: '100%'
          }
        }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
          text: profile[imgProp].url || '',
          onCopy: function onCopy() {
            return _this2.setState({
              copied: true
            });
          }
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: btnClass,
          value: btnText
        }, btnText)));
      }

      var data = calculateCashflows(_lodash["default"].get(profile, "".concat(prop, ".data"), [])).slice(-4);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          width: '100%',
          padding: 5,
          fontSize: 12
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          color: 'darkred',
          fontWeight: 'bold',
          marginBottom: 5,
          fontSize: 14
        }
      }, profile.ticker, " - ", profile.name, " ", /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          color: 'green'
        }
      }, "Cashflow Statement")), /*#__PURE__*/_react["default"].createElement(_Table["default"], {
        data: data
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          fontSize: 12,
          color: 'gray'
        }
      }, "Generated by ", /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          color: 'darkred'
        }
      }, "@earningsfly"), " with \u2764\uFE0F"));
    }
  }]);

  return CashflowTable;
}(_react["default"].Component);

exports.CashflowTable = CashflowTable;
var _default = CashflowTable;
exports["default"] = _default;