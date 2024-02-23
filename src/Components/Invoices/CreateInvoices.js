import React, {Component} from 'react'
import HomeNav from '../Navbar/HomeNav'
import {FaArrowLeft, FaCross, FaSearch, FaTrash} from "react-icons/fa";
import '../../style/CreateInvoices.css'
import UploadButton from '../Buttons/UploadFile'
import InvoiceAlertsButton from '../Buttons/InvoiceAlertsButtion'

export class CreateInvoices extends Component {
  render() {
    return (
        <div>
            <HomeNav/>
            <div className='title'>
                <a href='/InvoicesMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
                  <text>Create Invoices</text>
                  {<InvoiceAlertsButton/>}
            </div>
            
            <br/>
            
            {<UploadButton/>}
            <br/><br/>

            <text className='ORtext'> OR </text>
            <br/>

            <div className='StoreSelector'>
              <div>
                <p>Retailer Store</p>
                <select className='RetailerStoreInput'>
                  <option> Select Store </option>
                  <option>Store 1</option>
                  <option>Store 2</option>
                  <option>Store 3</option>
                </select>
              </div>
              
              <div>
                <p>Purchase Order(s):</p>
                <div className='POInput'>
                  <input placeholder='Enter P.O Number'></input>
                  <i>{<FaSearch/>}</i>
                </div>
              </div>              
            </div>

            <div className='SelectedPO'>
              <div>
                <p>Selected PO(s):</p>
                <form className='form-container'>
                  <div className='TableWrapper'>
                    <table>
                      <tr>
                        <td>PO 1</td>
                        <td> <button>{<FaTrash/>}</button> </td>
                      </tr>
                      <tr>
                        <td>PO 2</td>
                        <td> <button>{<FaTrash/>}</button> </td>
                      </tr>
                      <tr>
                        <td>PO 3</td>
                        <td> <button>{<FaTrash/>}</button> </td>
                      </tr>
                    </table>
                  </div>
                  <a>Populate Items</a>
                </form>
                
              </div>
            </div>
        </div>
    )
  }
}

export default CreateInvoices