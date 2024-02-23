import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar'
import HomeButton from '../Buttons/HomeButton'
import FilterButton from '../Buttons/FilterButton'
import ExportButton from '../Buttons/ExportButton'
import {FaBell, FaCloudDownloadAlt, FaDownload, FaPlusCircle} from "react-icons/fa";
import '../../style/InvoicesMain.css'
import SortButton from '../Buttons/SortButton'

export class InvoicesMain extends Component {
  render() {
    return (
        <div>
            <HomeNav/>
            <div class='Invoices-heading'>
                <HomeButton/>
                <div className='InvoiceTitle'>
                    <p>Invoices</p>
                </div>
            </div>
            <FullLengthSearchbar/>
            <a href='/CreateInvoices' className='CreateInvBtn'>Create New Invoice &nbsp; {<FaPlusCircle/>}</a>
            <ExportButton/>
            <FilterButton/>
            <SortButton/>
            <br/>
            <div className='TableContainer'>
                <table className='InvoiceTable'>
                    <thead>
                        <th>Invoice #</th>
                        <th>Invoice Date</th>
                        <th>Type</th>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>Due</th>
                        <th>Invoice Status</th>
                        <th>On Hold</th>
                        <th>Payment Status</th>
                        <th>Due Date</th>
                        <th>Payment Remainder</th>
                        <th>Download</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-12001359</td>
                            <td>21-April-2023</td>
                            <td>Standard</td>
                            <td>INR</td>
                            <td>₹23,00,000</td>
                            <td>₹23,00,000</td>
                            <td>Approved</td>
                            <td>No</td>
                            <td>Not Paid</td>
                            <td>30-April-2023</td>
                            <td> <button>Send Reminder &nbsp; {<FaBell/>}</button> </td>
                            <td> <i>{<FaCloudDownloadAlt/>}</i>  </td>
                        </tr>
                        <tr>
                        <td>INV-12001359</td>
                            <td>21-April-2023</td>
                            <td>Standard</td>
                            <td>INR</td>
                            <td>₹23,00,000</td>
                            <td>₹23,00,000</td>
                            <td>Approved</td>
                            <td>No</td>
                            <td>Not Paid</td>
                            <td>30-April-2023</td>
                            <td> <button>Send Reminder &nbsp; {<FaBell/>}</button> </td>
                            <td> <i>{<FaCloudDownloadAlt/>}</i>  </td>
                        </tr>
                        <tr>
                        <td>INV-12001359</td>
                            <td>21-April-2023</td>
                            <td>Standard</td>
                            <td>INR</td>
                            <td>₹23,00,000</td>
                            <td>₹23,00,000</td>
                            <td>Approved</td>
                            <td>No</td>
                            <td>Not Paid</td>
                            <td>30-April-2023</td>
                            <td> <button>Send Reminder &nbsp; {<FaBell/>}</button> </td>
                            <td> <i>{<FaCloudDownloadAlt/>}</i>  </td>
                        </tr>
                        <tr>
                        <td>INV-12001359</td>
                            <td>21-April-2023</td>
                            <td>Standard</td>
                            <td>INR</td>
                            <td>₹23,00,000</td>
                            <td>₹23,00,000</td>
                            <td>Approved</td>
                            <td>No</td>
                            <td>Not Paid</td>
                            <td>30-April-2023</td>
                            <td> <button>Send Reminder &nbsp; {<FaBell/>}</button> </td>
                            <td> <i>{<FaCloudDownloadAlt/>}</i>  </td>
                        </tr>
                        <tr>
                        <td>INV-12001359</td>
                            <td>21-April-2023</td>
                            <td>Standard</td>
                            <td>INR</td>
                            <td>₹23,00,000</td>
                            <td>₹23,00,000</td>
                            <td>Approved</td>
                            <td>No</td>
                            <td>Not Paid</td>
                            <td>30-April-2023</td>
                            <td> <button>Send Reminder &nbsp; {<FaBell/>}</button> </td>
                            <td> <i>{<FaCloudDownloadAlt/>}</i>  </td>
                        </tr>
                        <tr>
                            <td>INV-12001359</td>
                            <td>21-April-2023</td>
                            <td>Standard</td>
                            <td>INR</td>
                            <td>₹23,00,000</td>
                            <td>₹23,00,000</td>
                            <td>Approved</td>
                            <td>No</td>
                            <td>Not Paid</td>
                            <td>30-April-2023</td>
                            <td> <button>Send Reminder &nbsp; {<FaBell/>}</button> </td>
                            <td> <i>{<FaCloudDownloadAlt/>}</i>  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}

export default InvoicesMain