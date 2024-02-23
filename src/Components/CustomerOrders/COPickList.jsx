import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaFileSignature, FaTrash} from "react-icons/fa";
import '../../style/COPickList.css'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar';
import SortButton from '../Buttons/SortButton';
import FilterButton from '../Buttons/FilterButton';
import CustomerOrdersAlertsButton from '../Buttons/CustomerOrdersAlertsButtion';

export class COPickList extends Component 
{
  render() 
  {
    return (
        <div>
          <HomeNav/>

          <div className='title'>
            <a href='/CustomerOrdersMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
            <text>Customer Orders</text>
            {<CustomerOrdersAlertsButton/>}
          </div>

          <div className='InvoiceDetailsTitle'>Order Acceptance</div>

          <div className='COPL_OrderStatus'>
              <label>Order Status :</label> &nbsp;
              <input disabled value={"In-Progress"}></input>
          </div>
          <br/>
          <div className='COPL_AcceptanceTitle'>
            <h2>Acceptance Item info :</h2>
          </div>
          <br/>
          <div className='ItemDetailsTitle'>Item Details</div>
          <br/>
            <div className='TableContainer'>
                <table className='InvoiceTable'>
                    <thead>
                        <th></th>
                        <th>Item ID</th>
                        <th>Item Description</th>
                        <th>Order Qty</th>
                        <th>Fulfillment ID</th>
                        <th>E-Way Bill</th>
                        <th>AWB No.</th>
                        <th>TPL</th>
                        <th>Dispatch Location</th>
                        <th>Shipment Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-12003431-1996</td>
                            <td>Hp Laptop Pavillion</td>
                            <td>1</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td> <input className='dispatchLoc' name='dispatchLoc' value={"Bangalore"}disabled></input> </td>
                            <td> - </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='COPL_GenerateBtn'>
                <button>Generate Pick List</button> 
            </div>
        </div>
    )
  }
}

export default COPickList