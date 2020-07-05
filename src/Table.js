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

    return (
      <table className='table table-sm'>
        <thead className='bold'>
          <th className='left lighter'>Unit: ({unit})</th>
          <th className='bg-lightgray-ultra-5'>{data[0] && data[0].quarterStr}</th>
          <th className='bg-lightgray-ultra-4'>{data[1] && data[1].quarterStr}</th>
          <th className='bg-lightgray-ultra-3'>{data[2] && data[2].quarterStr}</th>
          <th className='bg-lightgray-ultra-2'>{data[3] && data[3].quarterStr}</th>
        </thead>
        <tbody>
          <tr>
            <td className='bold'>Total Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].cashFlow && parseFloat(data[0].cashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].cashFlow && parseFloat(data[1].cashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].cashFlow && parseFloat(data[2].cashFlow).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].cashFlow && parseFloat(data[3].cashFlow).toFixed(2)}</td>
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
            <td className='bold'>Operating Cashflows</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].totalInvestingCashFlows && data[0].cashFlow && data[0].cashFlowFinancing && parseFloat(data[0].cashFlow - data[0].totalInvestingCashFlows - data[0].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-5'>{data[1] && data[1].totalInvestingCashFlows && data[1].cashFlow && data[1].cashFlowFinancing && parseFloat(data[1].cashFlow - data[1].totalInvestingCashFlows - data[1].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-5'>{data[2] && data[2].totalInvestingCashFlows && data[2].cashFlow && data[2].cashFlowFinancing && parseFloat(data[2].cashFlow - data[2].totalInvestingCashFlows - data[2].cashFlowFinancing).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-5'>{data[3] && data[3].totalInvestingCashFlows && data[3].cashFlow && data[3].cashFlowFinancing && parseFloat(data[3].cashFlow - data[3].totalInvestingCashFlows - data[3].cashFlowFinancing).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Total Investments</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].investments && parseFloat(data[0].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].investments && parseFloat(data[1].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].investments && parseFloat(data[2].investments).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].investments && parseFloat(data[3].investments).toFixed(2)}</td>
          </tr>
          <tr>
            <td className='bold'>Total Capital Expendistures</td>
            <td className='bg-lightgray-ultra-5'>{data[0] && data[0].capitalExpenditures && parseFloat(data[0].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-4'>{data[1] && data[1].capitalExpenditures && parseFloat(data[1].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-3'>{data[2] && data[2].capitalExpenditures && parseFloat(data[2].capitalExpenditures).toFixed(2)}</td>
            <td className='bg-lightgray-ultra-2'>{data[3] && data[3].capitalExpenditures && parseFloat(data[3].capitalExpenditures).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
