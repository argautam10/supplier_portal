import React, { Component } from 'react'
import '../../style/COPickerListConfirm.css'
import HomeNav from '../Navbar/HomeNav'
import CostChangeAlertButton from '../Buttons/CostChangeAlertButtion'
import { FaFileDownload, FaArrowLeft } from "react-icons/fa";
import TickMark from '../../images/TickMark.png'
import CustomerOrdersAlertsButton from '../Buttons/CustomerOrdersAlertsButtion';

function COPickerListConfirm()
{
    return (
        <div>
            <HomeNav/>
            <div className='COPL-title'>
                <a href='/COPickList' className='backBtn'> <i>{<FaArrowLeft/>}</i>  Back </a>
                <text>Customer Orders</text>
                {<CustomerOrdersAlertsButton/>}
            </div>
            <br/>
            <div className='COPL-ConfirmContainer'>
                <div className='COPL-ConfirmBox'>
                    <br/><br/>
                    <div className='COPL-TickMark'>
                        <img src={TickMark} className='COPL-TickMarkImage'></img>
                    </div>
                    <br/><br/>
                    <text>Pick list Generation Successful.</text>
                </div>
            </div>
            <br/>
            <a href='/CustomerOrderMain' className='COPL-ConfirmBtn'>Continue</a>
        </div>
    )
}

export default COPickerListConfirm