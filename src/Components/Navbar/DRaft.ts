// import React from 'react'
// import logo from '../../images/KPMG-logo.jpg'
// import '../../style/Navbar.css'
// import {FaUserAlt,FaInfoCircle} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


// function Navbar() {
  
//     let navigate = useNavigate();
    
//     return (
    
//     <div class='Navbar-container'>

//         <div class='Navbar-topline'>
//             <div class='Navbar-heading'>
//                 <p>Supplier Portal</p>
//             </div>
//             <div class='Navbar-logo-box'>
//                 <img src={logo} alt='KPMG_logo' class='Navbar-logo'/>
//             </div>
//             <div class='Navbar-component'>
//                 <div class='Navbar-component-content'>
//                     <div class='Navbar-component-Logout'>
//                         {<FaUserAlt className='Navbar-Ricons'/>}
//                         <a class='Navbar-component-a'>User</a>
//                     </div>
//                     <div class='Navbar-component-About'>
//                         {<FaInfoCircle className='Navbar-Ricons'/>}
//                         <a href='#' class='Navbar-component-a'>About</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         <div class='Navbar-menu'>
//             <div class='Navbar-menu-content'>
//                 <li> 
//                     <a href="./Dashboard" class='Navbar-menu-content-dropdown-a'>Dashboard</a>
//                 </li>
//                 <li>
//                     <select class='Navbar-menu-content-dropdown'>
//                         <option selected><a href="#" class='Navbar-menu-content-dropdown-a'>Purchase Order </a></option>
//                         <option><a href="#" class='Navbar-menu-content-dropdown-a'>Retailer Returns</a></option>
//                         <option><a href="#" class='Navbar-menu-content-dropdown-a'>ASN</a></option>
//                     </select>
//                 </li>
//                 <li>
//                     <select class='Navbar-menu-content-dropdown'>
//                         <option selected><a href="#" class='Navbar-menu-content-dropdown-a'>Item Listing</a></option>
//                         <option><a href="./CostChange" class='Navbar-menu-content-dropdown-a'>Cost Change</a></option>
//                     </select>
//                 </li>
//                 <li>
//                     <select class='Navbar-menu-content-dropdown'>
//                         <option selected><a href="#" class='Navbar-menu-content-dropdown-a'>Customer Orders</a></option>
//                         <option><a href="#" class='Navbar-menu-content-dropdown-a'>Customer Returns</a></option>
//                     </select>
//                 </li>
//                 <li>
//                     <a href="/InvoicesMain" class='Navbar-menu-content-dropdown-a'>Invoices</a>
//                 </li>
//                 <li>
//                     <a href="#" class='Navbar-menu-content-dropdown-a'>Deals</a>
//                 </li>
//                 <li>
//                     <a href="#" class='Navbar-menu-content-dropdown-a'>Analytics</a>
//                 </li>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar