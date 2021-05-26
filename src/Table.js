import React from 'react';
import _ from 'lodash';

const greenOrRed = (str, high, low) => {
  const v = parseFloat(str);
  if (v > high) return 'green bold';
  if (v < low) return 'red bold';
};

export class Table extends React.Component {
  render() {
    const { data, count = 4 } = this.props;
    if (!data || !data.length) {
      return (
        <div className='font-12'>Not available at this time... </div>
      );
    }
    const unit = _.get(data, '0.unit') || 'million';

    return (
      <table className='table table-sm' style={{ marginBottom: 0, fontSize: 10 }}>
        <thead className='bold'>
          <th className='left lighter'>Unit: ({unit})</th>
          {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d}`}>{data[d] && data[d].quarterStr}</td>)}
        </thead>
        <tbody>
          <tr>
            <td className='bold'>Operating Cashflows</td>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter ${greenOrRed(data[d] && data[d].cashFlowOperating, 0, -999999999999999)}`}>{data[d] && data[d].cashFlowOperating && parseFloat(data[d].cashFlowOperating).toFixed(2)}</td>)}
          </tr>
          <tr>
            <td className='bold'>Financing Cashflows</td>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter`}>{data[d] && data[d].cashFlowFinancing && parseFloat(data[d].cashFlowFinancing).toFixed(2)}</td>)}
          </tr>
          <tr>
            <td className='bold'>Investing Cashflows</td>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter`}>{data[d] && data[d].totalInvestingCashFlows && parseFloat(data[d].totalInvestingCashFlows).toFixed(2)}</td>)}
          </tr>
          <tr>
            <td className='bold'>Total Capital Expenditures</td>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter`}>{data[d] && data[d].capitalExpenditures && parseFloat(data[d].capitalExpenditures).toFixed(2)}</td>)}
          </tr>
          <tr>
            <td className='bold'>Changes In Cash</td>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter ${greenOrRed(data[d] && data[d].changeInCash, 0, -999999999999999)}`}>{data[d] && data[d].changeInCash && parseFloat(data[d].changeInCash).toFixed(2)}</td>)}
          </tr>
          <tr>
            <td className='bold'>Free Cash flow</td>
            {_.range(count).map(d => <td key={d} className={`bg-lightgray-ul-${d} hov lighter ${greenOrRed(data[d] && data[d].freeCashFlow, 0, -999999999999999)}`}>{data[d] && data[d].freeCashFlow && parseFloat(data[d].freeCashFlow).toFixed(2)}</td>)}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
