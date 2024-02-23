import React, {useState} from 'react'
import '../../style/UMCreateUser.css'
import HomeNav from '../Navbar/HomeNav'
import HomeButton from '../Buttons/HomeButton'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UMCreateUser()
{    
    let navigate = useNavigate();
    const pathCompute = `/SiteAddCnfrm`
    const [supplierName, setsupplierName] = useState()
    const [email, setemail] = useState()
    const [mobile, setmobile] = useState()
    
    function getLoggedin(e)
    {
        e.preventDefault();
        axios({
            method: 'post',
            url: "http://localhost:8080/suppliersite/createAdmUser",
            data:Data,
        })
        .then(function (response){
            e.preventDefault();
            navigate(pathCompute
                //,{ state: { name: Data.supplierName}}
            );
        })
        .catch(function (error){
            console.log("error", error)
            alert("Invalid Credentials")
        })
    }

    const [Data,setData]=useState({
        "supplierName": '',
        "email": '',
        "mobile": ''
    });

    const handleChange=(event)=>{
        event.preventDefault();
        const{name,value}=event.target;
        setData((prevData)=>({
            ...prevData,
            [name]:value,
        
        }));
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
      };

    return (
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
        <div class="UMCreateUser-container">
            <div class='UMCreateUser-Title'>
                <p>Create User</p>
            </div>
            <div class="UMCreateUser-BasicDetailsContianer">
                <form class="BasicDetails-container">
                    <p class="BasicDetailsContianer-title">Basic Details</p>
                    <div class="BasicDetails-contents">
                       <p>Full Name</p>
                       <input class="BasicDetails-input" name="supplierName" value={Data.supplierName} onChange={handleChange} placeholder='Enter Full Name'></input>
                    </div>
                    <div class="BasicDetails-contents">
                       <p>Email ID</p>
                       <input class="BasicDetails-input" name="email" value={Data.email} onChange={handleChange} placeholder='Enter Email ID'></input>
                    </div>
                    <div class="BasicDetails-contents">
                       <p>Mobile Number</p>
                       <input class="BasicDetails-input" name="mobile" value={Data.mobile} onChange={handleChange} placeholder='Enter Mobile Number'></input>
                    </div>
                </form>

                <div class="ModuleAccess-container">
                    <p class="ViewSitesContianer-title">Module Access</p>
                    <div class="ModuleOptions">
                        <ul>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">ASN</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">P.O</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Invoices</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Item Listing</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Returns</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Deal</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Analytics</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Customer Orders</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="ModuleOptions-container">Alerts</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="SiteAccess-container">
                    <p class="ViewSitesContianer-title">Site Access</p>
                    <div class="SiteAccessOptions">
                        <ul>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Mumbai</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">kolkata</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Delhi</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Bangalore</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Kochi</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Chennai</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Hyderabad</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Pune</label>
                            </li>
                            <li>
                                <input type="checkbox"></input>
                                <label class="SiteAccessOptions-container">Nashik</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ViewExistingSites-Buttons">
                <button>Create User</button>
            </div>
        </div>
        
    </div>
    )
}

export default UMCreateUser