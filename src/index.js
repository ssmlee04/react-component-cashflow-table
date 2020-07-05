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
  if (data[0].cf > 1000000000) {
    divider = 1000000000;
    unit = 'billion';
    u = 'b';
  }
  data = _.sortBy(data.filter(d => d.reportDate), (d) => {
    return -d.reportDate;
  }).reverse();

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
    d.totalInvestingCashFlows = d.tic / divider;
    d.investments = d.iv / divider;
    d.capitalExpenditures = d.ce / divider;
    return d;
  });
};


export class CashflowTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { profile } = this.props;
    if (!profile) return true;
    if (nextState.copied) return true;
    if (profile.ticker !== nextProps.profile.ticker) return true;
    return false;
  }

  render() {
    const { profile } = this.props;
    const { copied } = this.state;
    if (!profile) {
      return (
        <div style={{ fontSize: 14 }}>Not available at this time... </div>
      );
    }
    if (profile.cashflow_table && profile.cashflow_table.url) {
      const btnClass = copied ? 'react-components-show-url btn btn-sm btn-danger disabled font-10' : 'react-components-show-url btn btn-sm btn-warning font-10';
      const btnText = copied ? 'Copied' : 'Copy Img';
      return (
        <div className='react-components-show-button'>
          <img alt={`${profile.ticker} - ${profile.name} revenue and income margins`} src={profile.cashflow_table.url} style={{ width: '100%' }} />
          <CopyToClipboard text={profile.cashflow_table.url || ''}
            onCopy={() => this.setState({ copied: true })}
          >
            <button className={btnClass} value={btnText}>{btnText}</button>
          </CopyToClipboard>
        </div>
      );
    }

    const data = calculateCashflows(_.get(profile, 'cashflow_stmt.data', []));
    return (
      <div style={{ width: '100%', padding: 5, fontSize: 14 }}>
        <div style={{ color: 'darkred', fontWeight: 'bold' }}>{profile.ticker} - {profile.name}</div>
        <Table data={data} />
      </div>
    );
  }
}

export default CashflowTable;
