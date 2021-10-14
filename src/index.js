import _ from 'lodash';
import React from 'react';
import Table from './Table';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './../index.css';

const calculateCashflows = (data) => {
  let divider = 1000000;
  let unit = 'million';
  let u = 'm';
  if (!data || !data.length) return data;
  if (data[data.length - 1].ocf > 1000000000) {
    divider = 1000000000;
    unit = 'billion';
    u = 'b';
  }
  data = _.sortBy(data.filter(d => d.reportDate), (d) => {
    return d.reportDate;
  });

  return data.map((d, i) => {
    const qq = ~~d.reportDate.slice(5, 7);
    let yy =d.reportDate.slice(0, 4);
    let qtr;
    if (qq <= 3) {
      qtr = 'Q1';
    }
    else if (qq <= 6) {
      qtr = 'Q2';
    }
    else if (qq <= 9) {
      qtr = 'Q3';
    }
    else if (qq <= 12) {
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


export class CashflowTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { profile, prop = 'cashflow_stmt', imgProp = 'cashflow_table', count = 4, theme = 'light' } = this.props;
    const { copied } = this.state;
    if (!profile) {
      return (
        <div style={{ fontSize: 12 }}>Not available at this time... </div>
      );
    }
    if (profile[imgProp] && profile[imgProp].url) {
      const btnClass = copied ? 'react-components-show-url btn btn-sm btn-danger disabled font-12' : 'react-components-show-url btn btn-sm btn-warning font-12';
      const btnText = copied ? 'Copied' : 'Copy Img';
      return (
        <div className='react-components-show-button'>
          <img alt={`${profile.ticker} - ${profile.name} cashflow statements`} src={profile[imgProp].url} style={{ width: '100%' }} />
          <CopyToClipboard text={profile[imgProp].url || ''}
            onCopy={() => this.setState({ copied: true })}
          >
            <button className={btnClass} value={btnText}>{btnText}</button>
          </CopyToClipboard>
        </div>
      );
    }

    const greenOrRed = (str, high, low) => {
      const v = parseFloat(str);
      if (v > high) return 'bold theme-green-' + theme;
      if (v < low) return 'bold theme-red-' + theme;
      return '';
    };

    const data = calculateCashflows(_.get(profile, `${prop}.data`, []));
    const arr = data.slice(count * -1);
    if (!arr || !arr.length) {
      return (
        <div className='font-12'>Not available at this time... </div>
      );
    }
    const unit = _.get(data, '0.unit') || 'million';

    return (
      <div style={{ width: '100%', padding: 5 }} className={`theme-black-${theme}`}>
        <div className={`theme-darkred-${theme} mb-2`} style={{ fontWeight: 'bold' }}>{profile.ticker} - {profile.name}&nbsp;<span className={`theme-green-${theme}`}>Cashflow Statement</span></div>
        <table className='table table-sm' style={{ marginBottom: 0, fontSize: 10 }}>
          <thead className='bold'>
            <th className='left lighter'>Unit: ({unit})</th>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d}`}>{arr[d] && arr[d].quarterStr}</td>)}
          </thead>
          <tbody>
            <tr>
              <td className='bold'>Operating Cashflows</td>
              {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov ${greenOrRed(arr[d] && arr[d].cashFlowOperating, 0, 0)}`}>{arr[d] && arr[d].cashFlowOperating && parseFloat(arr[d].cashFlowOperating).toFixed(2)}</td>)}
            </tr>
            <tr>
              <td className='bold'>Financing Cashflows</td>
              {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter`}>{arr[d] && arr[d].cashFlowFinancing && parseFloat(arr[d].cashFlowFinancing).toFixed(2)}</td>)}
            </tr>
            <tr>
              <td className='bold'>Investing Cashflows</td>
              {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter`}>{arr[d] && arr[d].totalInvestingCashFlows && parseFloat(arr[d].totalInvestingCashFlows).toFixed(2)}</td>)}
            </tr>
            <tr>
              <td className='bold'>Total Capital Expenditures</td>
              {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter`}>{arr[d] && arr[d].capitalExpenditures && parseFloat(arr[d].capitalExpenditures).toFixed(2)}</td>)}
            </tr>
            <tr>
              <td className='bold'>Changes In Cash</td>
              {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov ${greenOrRed(arr[d] && arr[d].changeInCash, 0, 0)}`}>{arr[d] && arr[d].changeInCash && parseFloat(arr[d].changeInCash).toFixed(2)}</td>)}
            </tr>
            <tr>
              <td className='bold'>Free Cash flow</td>
              {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov ${greenOrRed(arr[d] && arr[d].freeCashFlow, 0, 0)}`}>{arr[d] && arr[d].freeCashFlow && parseFloat(arr[d].freeCashFlow).toFixed(2)}</td>)}
            </tr>
          </tbody>
        </table>
        <div style={{ fontSize: 12, padding: 5, paddingTop: 2 }}>Crafted by <a href='https://twitter.com/tradeideashq' target='_blank' className={`theme-darkred-${theme}`}>@tradeideashq</a> with love <span style={{ fontSize: 16, color: 'red' }}>💡</span></div>
      </div>
    );
  }
}

export default CashflowTable;
