import React, { Component } from 'react'
import '../../style/CostChange.css'
import HomeNav from '../Navbar/HomeNav'
import CostChangeAlertButton from '../Buttons/CostChangeAlertButtion'
import Searchbar from '../Searchbars/FullLengthSearchbar'
import { FaFileDownload, FaFileUpload } from "react-icons/fa";
import FilterButton from '../Buttons/FilterButton'
import SortButton from '../Buttons/SortButton'

function CostChange()
{
    return (
        <div>
            <HomeNav/>
            <div className='CostChange-title'>
                <text>Cost Change</text>
                {<CostChangeAlertButton/>}
            </div>
            <div class="CostChange-searchbar">
                <Searchbar/>
            </div>

            <div class="CostChange-UploadDownloadBtn">
                <div class="upload-btn-wrapper">
                    <button class="Uploadbtn">Upload a file <i class="fa"> {<FaFileUpload/>} </i></button>
                    <input type="file" name="CostChangeUploadFile"/> <text>(formats: pdf, xlxs, .jpg)</text>
                </div>
                <button class="CostChange-DownloadTemplateButton">
                    {<FaFileDownload class="CostChange-DownloadTemplateButton-icon"/>} <div>Download Template</div>
                </button>
            </div>
            
            <div class="CostChange-TableBtns">
                <button class="CostChange-UpdateHistory">
                    <div>Upload History</div>
                </button>
                <div>
                    {<FilterButton/>}
                    {<SortButton/>}
                </div>
            </div>

            <div className='CostChange-TableContainer'>
                <table className='InvoiceTable'>
                    <thead>
                        <th>Item ID</th>
                        <th>SKU</th>
                        <th>Item Category</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn' disabled>Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                        <tr>
                            <td>i-7882121-2544</td>
                            <td>SKU8222-22321</td>
                            <td>Phone</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                            <td> <button className='changePriceBtn'  >Change Price</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CostChange