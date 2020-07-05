import React from 'react';
import _ from 'lodash';

export class Table extends React.Component {
  render() {
    const { data } = this.props;
    if (!data || !data.length) {
      return (
        <div className='font-12'>Not available at this time... </div>
      );
    }
    const unit = _.get(data, '0.unit') || 'million';
    const arr = data.slice(-4);

    return (
      <table className='table table-sm'>
        <thead className='bold'>
          <th className='left lighter'>Unit: ({unit})</th>
          <th className='bg-lightgray-ultra-5'>{arr[0] && arr[0].quarterStr}</th>
          <th className='bg-lightgray-ultra-4'>{arr[1] && arr[1].quarterStr}</th>
          <th className='bg-lightgray-ultra-3'>{arr[2] && arr[2].quarterStr}</th>
          <th className='bg-lightgray-ultra-2'>{arr[3] && arr[3].quarterStr}</th>
        </thead>
        <tbody>
          <tr>
            <td className='bold'>Total Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{arr[3] && arr[3].cashFlow && parseFloat(arr[3].cashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{arr[2] && arr[1].cashFlow && parseFloat(arr[2].cashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{arr[1] && arr[2].cashFlow && parseFloat(arr[1].cashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{arr[0] && arr[3].cashFlow && parseFloat(arr[0].cashFlow).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Financing Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{arr[3] && arr[3].cashFlowFinancing && parseFloat(arr[3].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{arr[2] && arr[1].cashFlowFinancing && parseFloat(arr[2].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{arr[1] && arr[2].cashFlowFinancing && parseFloat(arr[1].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{arr[0] && arr[3].cashFlowFinancing && parseFloat(arr[0].cashFlowFinancing).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Investing Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{arr[0] && arr[0].totalInvestingCashFlows && parseFloat(arr[0].totalInvestingCashFlows).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{arr[1] && arr[1].totalInvestingCashFlows && parseFloat(arr[1].totalInvestingCashFlows).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{arr[2] && arr[2].totalInvestingCashFlows && parseFloat(arr[2].totalInvestingCashFlows).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{arr[3] && arr[3].totalInvestingCashFlows && parseFloat(arr[3].totalInvestingCashFlows).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Operating Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{arr[0] && arr[0].operatingCashFlow && parseFloat(arr[0].operatingCashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{arr[1] && arr[1].operatingCashFlow && parseFloat(arr[1].operatingCashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{arr[2] && arr[2].operatingCashFlow && parseFloat(arr[2].operatingCashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{arr[3] && arr[3].operatingCashFlow && parseFloat(arr[3].operatingCashFlow).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Total Investments</td>
            <td className='bg-lightgray-ultra-5'>{arr[0] && arr[0].investments && parseFloat(arr[0].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{arr[1] && arr[1].investments && parseFloat(arr[1].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{arr[2] && arr[2].investments && parseFloat(arr[2].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{arr[3] && arr[3].investments && parseFloat(arr[3].investments).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Total Capital Expendistures</td>
            <td className='bg-lightgray-ultra-5'>{arr[0] && arr[0].capitalExpenditures && parseFloat(arr[0].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{arr[1] && arr[1].capitalExpenditures && parseFloat(arr[1].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{arr[2] && arr[2].capitalExpenditures && parseFloat(arr[2].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{arr[3] && arr[3].capitalExpenditures && parseFloat(arr[3].capitalExpenditures).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
