import React, { Component } from 'react'
import '../../style/CostChangeItemListing.css'
import HomeNav from '../Navbar/HomeNav'
import CostChangeAlertButton from '../Buttons/CostChangeAlertButtion'
import picture from '../../images/item-image.png'
import Searchbar from '../Searchbars/FullLengthSearchbar'
import UploadButton from '../Buttons/UploadFile'
import { FaFileDownload, FaArrowLeft } from "react-icons/fa";
import FilterButton from '../Buttons/FilterButton'
import SortButton from '../Buttons/SortButton'

function CostChangeItemListing()
{
    return (
        <div>
            <HomeNav/>
            <div className='CC-title'>
                <a href='/CostChange' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
                <text>Item Listing</text>
                {<CostChangeAlertButton/>}
            </div>
            <br/>
            <div className='CC-ItemListingContainer'>
                <div className='CC-ItemListingDetails'>
                    <div className='fieldName'>
                        <p>Item #  </p>
                        <p>Item Description :  </p><br/>
                        <p>SKU : </p>
                        <p>Category : </p>
                        <p>Current Price : </p>
                        <p>New Price : </p>
                    </div>
                    <div className='inputFields'>
                        <input type='text' name='ItemNumber'></input>
                        <input type='text' name='ItemDescription' id='itemDescription'></input>
                        <input type='text' name='SKU'></input>
                        <input type='text' name='Category' ></input>
                        <input type='number' name='CurrentPrice' ></input>
                        <input type='number' name='NewPrice' ></input>
                    </div>
                </div>
                <div className='CC-ItemListingImage'>
                    <img src={picture} alt='image' className='CC-ItemImage'></img>
                </div>
            </div><br/>
            <button className='CC-ItemListingSubmitBtn'>Submit</button>
        </div>
    )
}

export default CostChangeItemListing