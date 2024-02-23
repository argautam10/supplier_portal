import React, { Component } from 'react'
import '../../style/ItemListingMain.css'
import HomeNav from '../Navbar/HomeNav'
import Searchbar from '../Searchbars/FullLengthSearchbar'
import UploadButton from '../Buttons/UploadFile'
import { FaFileDownload,FaFileUpload } from "react-icons/fa";
import FilterButton from '../Buttons/FilterButton'
import SortButton from '../Buttons/SortButton'

function ItemListingMain()
{
    return (
        <div>
            <HomeNav/>
            <div className='ItemListing-title'>
                <text>Item Listing</text>
            </div>
            <div class="ItemListing-searchbar">
                <Searchbar/>
            </div>

            <div class="ItemListing-UploadDownloadBtn">
                <div class="upload-btn-wrapper">
                    <button class="Uploadbtn">Upload a file <i class="fa"> {<FaFileUpload/>} </i></button>
                    <input type="file" name="myfile"/> <text>(formats: pdf, xlxs, .jpg)</text>
                </div>
                <button class="ItemListing-DownloadTemplateButton">
                    {<FaFileDownload class="ItemListing-DownloadTemplateButton-icon"/>} <div>Download Template</div>
                </button>
            </div>
            <div className='ItemListing-TableContainer'>
                <table className='ItemListingTable'>
                    <thead>
                        <th></th>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                        <tr>
                            <td><input type='checkbox'></input></td>
                            <td>i-7882121-2544</td>
                            <td>HP-Pavilion Laptop</td>
                            <td>SKU8222-22321</td>
                            <td>₹1,20,000</td>
                            <td>Submitted</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className='ItemListing-Edit-btn'>Edit</button>
        </div>
    )
}

export default ItemListingMain