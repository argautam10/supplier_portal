import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaCross, FaFile, FaFileAlt, FaFileArchive, FaFileDownload, FaFileSignature, FaSearch, FaTrash} from "react-icons/fa";
import '../../style/CustomerOrdersMain.css'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar';
import SortButton from '../Buttons/SortButton';
import FilterButton from '../Buttons/FilterButton';
import CustomerOrdersAlertsButton from '../Buttons/CustomerOrdersAlertsButtion';
import ExportButton from '../Buttons/ExportButton';
import HomeButton from '../Buttons/HomeButton';

export class CustomerOrdersMain extends Component 
{
  render() 
  {
    return (
        <div>
          <HomeNav/>
          <div className='title'>
            <HomeButton/>
            <text>Customer Orders</text>
            {<CustomerOrdersAlertsButton/>}
          </div>
          <br/>
          <div>
              {<FullLengthSearchbar/>}
              <br/>
              <div>
                  {<SortButton/>}
                  {<FilterButton/>}
                  <ExportButton/>
              </div>
              <br/>
              <div className='TableContainer'>
                <table className='CustomerOrderTable'>
                    <thead>
                        <th>Customer Order No</th>
                        <th>Customer Mobile No</th>
                        <th>Ordered Date</th>
                        <th>Expected Delivery Date</th>
                        <th>Delivery Time</th>
                        <th>Order Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>CO-3101290427</td>
                            <td>+91-97293222012</td>
                            <td>12-April-2023</td>
                            <td>18-April-2023</td>
                            <td>10AM - 9 PM</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
              </div>
          </div>
        </div>
    )
  }
}

export default CustomerOrdersMain