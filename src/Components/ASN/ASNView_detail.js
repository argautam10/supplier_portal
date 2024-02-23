import React, { useState } from 'react';
import HomeNav from '../Navbar/HomeNav';
// import { FaUserAlt, FaUserCheck, FaBuilding, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../style/UserMgmtMain.css';
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar';
import ASN_Alert_button from '../Buttons/ASN_Alert_button';
import { FaBell, FaCloudDownloadAlt, FaDownload, FaPlusCircle } from "react-icons/fa";
import HomeButton from '../Buttons/HomeButton';
import FilterButton from '../Buttons/FilterButton';
import ExportButton from '../Buttons/ExportButton';
import DownloadAsnButton from '../Buttons/DownloadAsnButton';
import "../../style/ASNView_detail.css";
// import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { useParams,Navigate } from 'react-router-dom';
import ExportOnly from '../Buttons/ExportOnly';
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { IoIosCloudDownload } from "react-icons/io";
import { RiArrowDownDoubleLine } from "react-icons/ri";


const container1 = [
  {
    
    creationDate: '12-April-2023',
    containerId: "C4545-124-965",
    totalItems: 3,
    totalShippingQty:120,
    shippingDate: '1-April-2023',
    eta:'26-April-2023',
    location:"MG-Road Bangalore"
  },
]

const container2 = [
  {
    itemId: 'i-78809121-2544',
    item: 'Hp Laptop Victus',
    po: 'PO-R-MUM-3101290427',
    poQty: 20,
    deliveryQty:20,
    shippingQty: 200,
    remainingQty:280
  },
  {
    itemId: 'i-78809121-2544',
    item: 'Hp Laptop Victus',
    po: 'PO-R-MUM-3101290427',
    poQty: 20,
    deliveryQty:20,
    shippingQty: 200,
    remainingQty:280
  },
  {
    itemId: 'i-78809121-2544',
    item: 'Hp Laptop Victus',
    po: 'PO-R-MUM-3101290427',
    poQty: 20,
    deliveryQty:20,
    shippingQty: 200,
    remainingQty:280
  },
]


function ASNView_detail() {

    const { asn } = useParams(); // Get the ASN number from URL params
    const navigate = useNavigate();
    const handleBackButtonClick  = ()=> {navigate(-1)}
    
    const [containerDetailsOpen, setContainerDetailsOpen] = useState(true);
    const [containerDetailsOpen1, setContainerDetailsOpen1] = useState(true);
    const [containerDetailsOpen2, setContainerDetailsOpen2] = useState(false);
    const [containerDetailsOpen3, setContainerDetailsOpen3] = useState(false);
    
    const toggleContainerDetails = () => {
        setContainerDetailsOpen(!containerDetailsOpen);
    };
    const toggleContainerDetails1 = () => {
        setContainerDetailsOpen1(!containerDetailsOpen1);
    };
    const toggleContainerDetails2 = () => {
        setContainerDetailsOpen2(!containerDetailsOpen2);
    };
    const toggleContainerDetails3 = () => {
        setContainerDetailsOpen3(!containerDetailsOpen3);
    };
  return (
    <div>

        <HomeNav />
      <div className='Invoices-heading'>
        <HomeButton />
        <div className='InvoiceTitle'>
          <p>ASN</p>
         
        </div>
      </div>
      <ASN_Alert_button />
      <FullLengthSearchbar />
      <ExportOnly />
      <DownloadAsnButton />
       <button className='back_button' onClick={handleBackButtonClick} >
         <FaArrowLeft style={{fontSize:"10px",marginRight:"5px",outline:"none",border:"none"}}/>Back</button>
         <div className='asn_ribbon' >
          <span style={{marginLeft:"45%"}}>{asn}</span>
         
            
             {containerDetailsOpen ? (
                        <RiArrowUpDoubleFill  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails}  />
                    ) : (
                        <RiArrowDownDoubleLine  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails} />
                    )}
          
         </div>
         {containerDetailsOpen && (
       <div className='asn_detail_container'>

       <div className='asn_detail'>
        <p>Creation Date</p>
        <p>12-April-2023</p>
        <p>Consignment Status</p>
        <p>In-Transit</p>
        <p>Container Quantity</p>
        <p>2</p>

       </div>
       <div className='asn_detail'>
        <p>Shipped Qty</p>
        <p>760</p>
        <p>Shipping Date</p>
        <p>21-Aril-2023</p>
        <p>ETA</p>
        <p>25-April-2023</p>
        <p>E-Way Bill Number</p>
        <p>E-4362-8189-0092 <i><IoIosCloudDownload /></i></p>

       </div>
       <div className='asn_detail'>
        <p>AWB Number</p>
        <p>AWB-234-56985698<i><IoIosCloudDownload /></i></p>
        <p>Delivery Challan No</p>
        <p>D-12001359<i><IoIosCloudDownload /></i></p>
        <p>Driver Name</p>
        <p>Venugopal</p>
        <p>Vehicle Number</p>
        <p>DL50MB5613</p>
       </div>


       </div>
       )}

       <div className='asn_ribbon'>
          <span style={{marginLeft:"45%"}}>Container Details</span>
          {containerDetailsOpen1 ? (
                        <RiArrowUpDoubleFill  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails1}  />
                    ) : (
                        <RiArrowDownDoubleLine  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails1} />
                    )}
           
         </div>
         {containerDetailsOpen1 && (
         <div>
         <div className='asn_ribbon' style={{backgroundColor:"white", color:"black"}}>
          <span style={{marginLeft:"45%"}}>Container #1</span>
          
          {containerDetailsOpen2 ? (
                        <RiArrowUpDoubleFill  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails2}  />
                    ) : (
                        <RiArrowDownDoubleLine  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails2} />
                    )}

{containerDetailsOpen2 && (          
          <div>
        <table>
          <thead>
            <tr>
             
              <th>Creation Date</th>
              <th>Container Id #</th>
              <th> Total Itmes</th>
              <th>Total Shipping Qty #</th>
              <th>Shipping Date</th>
              <th>ETA</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {container1.map((row, index) => (
              <tr key={index}>
                <td>{row.creationDate}</td>
                <td>{row.containerId}</td>
                <td>{row.totalItems}</td>
                <td>{row.totalShippingQty}</td>
                <td>{row.shippingDate}</td>
                <td>{row.eta}</td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
)}
         </div> 
         <div className='asn_ribbon' style={{backgroundColor:"white", color:"black",marginBottom:"50px"}} >
          <span style={{marginLeft:"45%"}}>Container #2</span>
          
          {containerDetailsOpen3 ? (
                        <RiArrowUpDoubleFill  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails3}  />
                    ) : (
                        <RiArrowDownDoubleLine  style={{ float:"right",fontSize:"20px",cursor: "pointer"}}
                        onClick={toggleContainerDetails3} />
                    )}
          {containerDetailsOpen3 && (
          <div>
        <table>
          <thead>
            <tr>
             
              <th>Item ID</th>
              <th> Items</th>
              <th> PO #</th>
              <th> PO Qty</th>
              <th> Delivered Qty</th>
              <th>Shipping Qty</th>
              <th>Remaining Qty</th>
            </tr>
          </thead>
          <tbody>
            {container2.map((row, index) => (
              <tr key={index}>
                <td>{row.itemId}</td>
                <td>{row.item}</td>
                <td>{row.po}</td>
                <td>{row.poQty}</td>
                <td>{row.deliveryQty}</td>
                <td>{row.shippingQty}</td>
                <td>{row.remainingQty}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
          )}
         </div>

         </div>
         )}
      </div>
    
  )
}

export default ASNView_detail

