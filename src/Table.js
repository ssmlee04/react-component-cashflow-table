import React from 'react';
import _ from 'lodash';

const color = (num) => {
  if (num > 0) return 'green bold';
  if (num < 0) return 'red bold';
  return;
};

export class Table extends React.Component {
  render() {
    const { data } = this.props;
    if (!data || !data.length) {
      return (
        <div className='font-8'>Not available at this time... </div>
      );
    }
    const unit = _.get(data, '0.unit') || 'million';

    return (
      <table className='table table-sm' style={{ marginBottom: 0, fontSize: 7 }}>
        <thead className='bold'>
          <th className='left lighter'>Unit: ({unit})</th>
          <th className='bg-lightgray-ultra-5'>{data[0] && data[0].quarterStr}</th>
          <th className='bg-lightgray-ultra-4'>{data[1] && data[1].quarterStr}</th>
          <th className='bg-lightgray-ultra-3'>{data[2] && data[2].quarterStr}</th>
          <th className='bg-lightgray-ultra-2'>{data[3] && data[3].quarterStr}</th>
        </thead>
        <tbody>
          <tr>
            <td className='bold'>Operating Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].cashFlowOperating && parseFloat(data[0].cashFlowOperating).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].cashFlowOperating && parseFloat(data[1].cashFlowOperating).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].cashFlowOperating && parseFloat(data[2].cashFlowOperating).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].cashFlowOperating && parseFloat(data[3].cashFlowOperating).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Financing Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].cashFlowFinancing && parseFloat(data[0].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].cashFlowFinancing && parseFloat(data[1].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].cashFlowFinancing && parseFloat(data[2].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].cashFlowFinancing && parseFloat(data[3].cashFlowFinancing).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Investing Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].totalInvestingCashFlows && parseFloat(data[0].totalInvestingCashFlows).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].totalInvestingCashFlows && parseFloat(data[1].totalInvestingCashFlows).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].totalInvestingCashFlows && parseFloat(data[2].totalInvestingCashFlows).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].totalInvestingCashFlows && parseFloat(data[3].totalInvestingCashFlows).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Total Investments</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].investments && parseFloat(data[0].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].investments && parseFloat(data[1].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].investments && parseFloat(data[2].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].investments && parseFloat(data[3].investments).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Total Capital Expenditures</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].capitalExpenditures && parseFloat(data[0].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].capitalExpenditures && parseFloat(data[1].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].capitalExpenditures && parseFloat(data[2].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].capitalExpenditures && parseFloat(data[3].capitalExpenditures).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Changes In Cash</td>
            <td className={`bg-lightgray-ultra-5 ${color(data[0] && data[0].changeInCash)}`}>{data[0] && data[0].changeInCash && parseFloat(data[0].changeInCash).toFixed(2)}</td>
            <td className={`bg-lightgray-ultra-4 ${color(data[1] && data[1].changeInCash)}`}>{data[1] && data[1].changeInCash && parseFloat(data[1].changeInCash).toFixed(2)}</td>
            <td className={`bg-lightgray-ultra-3 ${color(data[2] && data[2].changeInCash)}`}>{data[2] && data[2].changeInCash && parseFloat(data[2].changeInCash).toFixed(2)}</td>
            <td className={`bg-lightgray-ultra-2 ${color(data[3] && data[3].changeInCash)}`}>{data[3] && data[3].changeInCash && parseFloat(data[3].changeInCash).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Free Cash flow</td>
            <td className={`bg-lightgray-ultra-5 ${color(data[0] && data[0].freeCashFlow)}`}>{data[0] && data[0].freeCashFlow && parseFloat(data[0].freeCashFlow).toFixed(2)}</td>
            <td className={`bg-lightgray-ultra-4 ${color(data[1] && data[1].freeCashFlow)}`}>{data[1] && data[1].freeCashFlow && parseFloat(data[1].freeCashFlow).toFixed(2)}</td>
            <td className={`bg-lightgray-ultra-3 ${color(data[2] && data[2].freeCashFlow)}`}>{data[2] && data[2].freeCashFlow && parseFloat(data[2].freeCashFlow).toFixed(2)}</td>
            <td className={`bg-lightgray-ultra-2 ${color(data[3] && data[3].freeCashFlow)}`}>{data[3] && data[3].freeCashFlow && parseFloat(data[3].freeCashFlow).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
