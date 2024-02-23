import React from 'react'
import HomeNav from '../Navbar/HomeNav'
import HomeButton from '../Buttons/HomeButton'
import {FaPlusCircle, FaSearch} from "react-icons/fa";
import '../../style/UMViewSites.css'


function UMViewSites()
{
    return(
      <div>
        <div>
            <HomeNav/>
        </div>
        <div class='usermgmt-heading'>
            <HomeButton/>
            <div class='usermgmt'>
                <p>User Management</p>
            </div>
        </div>
        <div class="ViewSites-container">
            <div class='ViewSites-Title'>
                <button class="ViewSites-AddBtn">
                    Add Site <FaPlusCircle/>
                </button>
                <p>View Supplier Sites</p>
            </div>
            <div class="ViewSites-ViewSitesContianer">
                <div class="ViewExistingSites-container">

                    <p class="ViewSitesContianer-title">View Existing Sites</p><br/>
                    
                    <div class="ViewExistingSitesSearchbar-container">
                        <div class="ViewExistingSitesSearchbar-content">
                            <input class="ViewExistingSitesSearchbar-input" placeholder='Search'></input>
                            <FaSearch class="ViewExistingSitesSearchbar-icon"/>
                        </div>
                    </div>

                    <div class="ViewExistingSitesOptions">
                        <ul>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Mumbai</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Kolkata</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Delhi</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Bangalore</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Kochi</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Chennai</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Hyderabad</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Pune</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ViewExistingSitesOptions-container">Nashik</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="SupplierSiteDetailes-container">
                    <p class="ViewSitesContianer-title">Supplier Site Details</p>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Name :</p>
                        <input class="SupplierSiteDetailes-input"></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Address :</p>
                        <input class="SupplierSiteDetailes-input"></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Location on Map :</p>
                        <input class="SupplierSiteDetailes-input"></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Contact :</p>
                        <input class="SupplierSiteDetailes-input"></input>
                    </div>
                </div>
            </div>
            <div class="ViewExistingSites-Buttons">
                    <button>Remove Site</button>
                    <button>Edit Site Info</button>
            </div>
        </div>
      </div>
    )
}

export default UMViewSites