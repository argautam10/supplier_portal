import React from 'react'
import logo from '../../images/KPMG-logo.jpg'
import '../../style/Navbar.css'
import {FaInfoCircle,FaSignOutAlt,FaAngleDown} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import {ASNMain} from "../ASN/ASNView";


function Navbar() {
  
    let navigate = useNavigate();
    
    return (
    
    <div class='Navbar-container'>

        <div class='Navbar-topline'>
            <div class='Navbar-heading'>
                <p>Supplier Portal</p>
            </div>
            <div class='Navbar-logo-box'>
                <img src={logo} alt='KPMG_logo' class='Navbar-logo'/>
            </div>
            <div class='Navbar-component'>
                <div class='Navbar-component-content'>
                    <div class='Navbar-component-Logout'>
                        {<FaSignOutAlt className='Navbar-Ricons'/>}
                        <a href='./' class='Navbar-component-a'>Logout</a>
                    </div>
                    <div class='Navbar-component-About'>
                        {<FaInfoCircle className='Navbar-Ricons'/>}
                        <a href='#' class='Navbar-component-a'>About</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class='Navbar-menu'>
            <div class='Navbar-menu-content'>
                <li> 
                    <a href="./Dashboard" class='Navbar-menu-content-dropdown-a'>Dashboard</a>
                </li>




                <li>
                    <div class='Navbar-dropdown'>
                        <button className='Navbar-dropdown-btn'>Purchase Order</button>
                        {<FaAngleDown className='Navbar-dropdown-icon'/>}
                        <div className='Navbar-dropdown-content'>
                            <a href="#">Purchase Order </a>
                            <a href="#">Retailer Returns</a>
                            <a href="./ASNMain">ASN</a>
                        </div>

                        <option selected></option>
                        
                    </div>
                </li>











                <li>
                    <select class='Navbar-menu-content-dropdown'>
                        <option selected><a href="#" class='Navbar-menu-content-dropdown-a'>Item Listing</a></option>
                        <option><a href="./CostChange" class='Navbar-menu-content-dropdown-a'>Cost Change</a></option>
                    </select>
                </li>
                <li>
                    <select class='Navbar-menu-content-dropdown'>
                        <option selected><a href="#" class='Navbar-menu-content-dropdown-a'>Customer Orders</a></option>
                        <option><a href="#" class='Navbar-menu-content-dropdown-a'>Customer Returns</a></option>
                    </select>
                </li>
                <li>
                    <a href="/InvoicesMain" class='Navbar-menu-content-dropdown-a'>Invoices</a>
                </li>
                <li>
                    <a href="#" class='Navbar-menu-content-dropdown-a'>Deals</a>
                </li>
                <li>
                    <a href="#" class='Navbar-menu-content-dropdown-a'>Analytics</a>
                </li>
            </div>
        </div>
    </div>
  )
}

export default Navbar