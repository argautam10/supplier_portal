import React, { Component } from 'react'
import '../../style/CostChangeConfirm.css'
import HomeNav from '../Navbar/HomeNav'
import CostChangeAlertButton from '../Buttons/CostChangeAlertButtion'
import { FaFileDownload, FaArrowLeft } from "react-icons/fa";
import TickMark from '../../images/TickMark.png'

function CostChangeConfirm()
{
    return (
        <div>
            <HomeNav/>
            <div className='CC-title'>
                <a href='/CostChangeItemListing' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
                <text>Cost Change</text>
                {<CostChangeAlertButton/>}
            </div>
            <br/>
            <div className='CC-ConfirmContainer'>
                <div className='CC-ConfirmBox'>
                    <br/><br/>
                    <div className='CC-TickMark'>
                        <img src={TickMark} className='CC-TickMarkImage'></img>
                    </div>
                    <br/><br/>
                    <text>Cost Change Request submitted successfully.</text>
                </div>
            </div>
            <br/>
            <a href='/CostChange' className='CC-ConfirmBtn'>Continue</a>
        </div>
    )
}

export default CostChangeConfirm