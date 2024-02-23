import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaFileSignature, FaTrash} from "react-icons/fa";
import '../../style/CustomerOrdersDetails.css'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar';
import SortButton from '../Buttons/SortButton';
import FilterButton from '../Buttons/FilterButton';
import CustomerOrdersAlertsButton from '../Buttons/CustomerOrdersAlertsButtion';

export class CustomerOrderDetails extends Component 
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
          
          <div className='InvoiceDetailsTitle'>Customer Order Summary</div>
          <div className='DetailContainer'>
              <div className='left-pane'>
                <div className='fieldName'>
                    <p>Order ID</p><br/>
                    <p>Order Date </p><br/>
                    <p>Gift Wrap </p><br/>
                    <p>Gift Message</p><br/>
                </div>
                <div className='inputFields'>
                  <input type='text' name='orderID' disabled></input><br/><br/><br/>
                  <input type='date' name='orderDate' disabled></input><br/><br/><br/>
                  <input type='text' name='giftWrap' disabled></input><br/><br/>
                  <br/>
                  <textarea name='giftMessage' rows="3" cols="33" disabled></textarea>
                </div>
              </div>
              <div className='left-pane'>
                <div className='fieldName'>
                    <p>Customer Name</p><br/>
                    <p>Customer Phone No </p><br/>
                    <p>Delivery Type </p><br/>
                    <p>Order Date</p><br/>
                    <p>Order Status</p><br/>
                </div>
                <div className='inputFields'>
                  <input type='text' name='orderID' disabled></input><br/><br/><br/>
                  <input type='text' name='orderDate' disabled></input><br/><br/><br/>
                  <input type='text' name='giftWrap' disabled></input><br/><br/><br/>
                  <input type='date' name='giftWrap' disabled></input><br/><br/>
                  <input type='text' name='giftWrap' disabled></input><br/>
                </div>
              </div>
              <div className='left-pane'>
                <div className='fieldName'>
                        <p>Expected Delivery Date</p><br/>
                        <p>Shipping Address </p><br/>
                </div>
                <div className='inputFields'>
                    <input type='text' name='expectedDeliveryDate' disabled></input><br/><br/><br/><br/>
                    <textarea name='giftMessage' rows="5" cols="33" disabled></textarea>
                </div>
              </div>
          </div>
          <br/><br/><br/>
          <div className='ItemDetailsTitle'>Item Details</div>
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
            <div id='AcceptRejectBtns'>
                <button className='AcceptBtn'>Accept</button> &nbsp;&nbsp;
                <button className='RejectBtn'>Reject</button> &nbsp;&nbsp;
            </div>
        </div>
    )
  }
}

export default CustomerOrderDetails