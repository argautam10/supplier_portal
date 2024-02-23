import React from 'react'
import HomeNav from '../Navbar/HomeNav'
import HomeButton from '../Buttons/HomeButton'
import {FaPlusCircle, FaSearch} from "react-icons/fa";
import '../../style/UMAddSite.css'

function UMAddSites()
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
        <div class="AddSites-container">
            <div class='AddSites-Title'>
                <p>Add Supplier Site Details</p>
            </div>
            <div class="AddSites-AddSitesContianer">
                <div class="ViewExistingSites-container">                    
                <div class="SupplierSiteDetailes-contents">
                        <p>Site Name :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteName'></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Address :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteAddress'></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Location on Map :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteLoc'></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Contact :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteContact'></input>
                    </div>
                </div>
                <div class="SupplierSiteDetailes-container">
                    <div class="SupplierSiteDetailes-contents">
                        <p>Latitude :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteLatitude'></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Longitude :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteLongitude'></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Landmark :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteLandmark'></input>
                    </div>
                    <div class="SupplierSiteDetailes-contents">
                        <p>Site Code :</p>
                        <input class="SupplierAddSiteDetailes-input" name='AddSiteCode'></input>
                    </div>
                </div>
            </div><br/>
            <div class="ViewExistingSites-Buttons">
                    <button>Add Site</button>
            </div>
        </div>
      </div>
    )
}

export default UMAddSites