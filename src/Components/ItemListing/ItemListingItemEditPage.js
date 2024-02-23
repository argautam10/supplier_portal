import React, { Component } from 'react'
import '../../style/ItemListingItemEditPage.css'
import HomeNav from '../Navbar/HomeNav'
import { FaArrowLeft } from "react-icons/fa";


function ItemListingItemEditPage()
{
    return (
        <div>
            <HomeNav/>
            <div className='ItemListing-title'>
                <a href='/ItemListingMain' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
                <text>Item Listing</text>
                <text> </text>
            </div>
            <br/>
            <div className='ItemListingItemEditPage-Container'>
                <form className='ItemListingItemEditPage-Form'>
                    <div className='ItemListing-Form-LeftPane'>
                        <div className='ItemListing-Form-row'>
                            <div className='ItemListing-col-25'>
                                <label>Item Number : </label>
                            </div>
                            <div className='ItemListing-col-75'>
                                <input className='ItemListingItemEditPage-input'></input>
                            </div>
                        </div>
                        <br/>
                        <div className='ItemListing-Form-row'>
                            <div className='ItemListing-col-25'>
                                <label>Item Description : </label>
                            </div>
                            <div className='ItemListing-col-75'>
                                <textarea className='ItemListingItemEditPage-textarea'></textarea>
                            </div>
                        </div>
                        <br/>
                        <div className='ItemListing-Form-row'>
                            <div className='ItemListing-col-25'>
                                <label>SKU ID : </label>
                            </div>
                            <div className='ItemListing-col-75'>
                                <input className='ItemListingItemEditPage-input'></input>
                            </div>
                        </div>
                        <br/>
                        <div className='ItemListing-Form-row'>
                            <div className='ItemListing-col-25'>
                                <label>Category : </label>
                            </div>
                            <div className='ItemListing-col-75'>
                                <input className='ItemListingItemEditPage-input'></input>
                            </div>
                        </div>
                        <br/>
                        <div className='ItemListing-Form-row'>
                            <div className='ItemListing-col-25'>
                                <label>Status : </label>
                            </div>
                            <div className='ItemListing-col-75'>
                                <input className='ItemListingItemEditPage-input'></input>
                            </div>
                        </div>
                    </div>
                    <div className='ItemListing-Form-RightPane'>
                        <img className='ItemListingItemEditPage-Image' src='' alt='ItemImage'></img><br/>
                        <button className='ItemListingItemEditPage-ChangeBtn'>Change Image</button>
                    </div>
                </form>
            </div>
            <br/>
            <div className='ItemListingItemEditPage-btn'>
                <button className=''>Edit</button>
                <button className=''>Save</button>
                <button className=''>Remove Item</button>
            </div>
        </div>
    )
}

export default ItemListingItemEditPage