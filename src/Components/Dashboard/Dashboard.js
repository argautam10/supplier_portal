import React from "react";
import HomeNav from "../Navbar/HomeNav";
import "../../style/Dashboard.css";
import { FaArrowRight } from "react-icons/fa";
import CostChangeLogo from "../../images/CostChangeIcon.png";
import ReturnsLogo from "../../images/ReturnsIcon.png";
import PurchaseOrderLogo from "../../images/PurchaseOrderIcon.png";
import InvoicesLogo from "../../images/InvoicesIcon.png";
import DealsLogo from "../../images/Dealicon.png";
import AlertLogo from "../../images/AlertIcon.png";
import ASNLogo from "../../images/ASNicon.png";
import Analytics from "../../images/Analytics.png";
import axios from "axios";

function Dashboard() 
{
  const [data, setData] = React.useState({ alertsList:[], asnList:[], dealsList:[] });
  React.useEffect(() => 
  {
     const fetchData = async () => {
        const result = await axios("http://localhost:8080/api/dashboard/service/getAllDashboardData");
        setData(result.data);
     };
     fetchData();
  }, []);

  function DealsContainer({Deals})
  {
    return(
    <div class="Deal-Container">
      <div class="Deal-Tile">
        <div class="Deal-Tile-title">
          { <img src={DealsLogo} alt="icon" class="Deal-Tile-icon"/>}{" "}
          &nbsp; Deals
        </div>
        <div className="Deal-Title-Contents">
        {
          // Deals.dealsList.map((DealsObj) => {
          //   return (
          //     <p>
          //       {" "}
          //       {DealsObj.asid} : {DealsObj.asnNumber} - {" "}
          //       <b>{DealsObj.status}</b>{" "}
          //       <i>{DealsObj.creationDateTime}</i>{" "}
          //     </p>
          //   );
          // })
        }
        </div>
        
        {<FaArrowRight class="Deal-Tile-arrow" />}
        
      </div>
    </div>
    )
  }
  
  function ASNContainer({ ASN }) 
    { 
      return(
        <div class="ASN-Container">
          <div class="ASN-Tile">
            <div class="ASN-Tile-title">
              {<img src={ASNLogo} alt="icon" class="ASN-Tile-icon" />}{" "} &nbsp; ASN
            </div>
            <div className="ASN-Title-Contents">
              {
                ASN.asnList.map((ASNObj) => {
                  return (
                        <p>
                           {" "}
                           {ASNObj.asid} : {ASNObj.asnNumber} - {" "}
                           <b>{ASNObj.status}</b>{" "}
                           <i>{ASNObj.creationDateTime}</i>{" "}
                        </p>
                     );
                })
              }
            </div>

            {<FaArrowRight class="ASN-Tile-arrow" />}
          </div>
        </div>
      )
    }
    

   function AlertsContainer({ Alert }) 
   { return (
         <div class="Alerts-Container">
            <div class="Alerts-Tile">
               <div class="Alerts-Tile-title">
                  {<img src={AlertLogo} alt="icon" class="Alerts-Tile-icon" />}{" "}
                  &nbsp; Alerts
               </div>
               <br />
               <div className="Alerts-Tile-Contents">
                  {Alert.alertsList.map((AlertObj) => {
                    return (
                        <p>
                           {" "}
                           {AlertObj.alertId} : {AlertObj.module} - {" "}
                           <b>{AlertObj.message}</b>{" "}
                           <i>{AlertObj.creationDateTime}</i>{" "}
                        </p>
                     );
                  })}
               </div>
               <br />
               {<FaArrowRight class="Alerts-Tile-arrow" />}
            </div>
         </div>
      );
   }

   

   return (
      <div class="Dashboard-container">
         <div>
            <HomeNav />
         </div>
         <div class="Dashboard-Contents">
            <div class="OverviewContainer">
               <div class="OverviewHeader">
                  <h2>Overview</h2>
               </div><br/>
               <div class="OverviewContents">
                  <div class="Tile-container">
                     <div class="Tile">
                        <div class="Tile-title">
                           {
                              <img
                                 src={CostChangeLogo}
                                 alt="icon"
                                 class="Tile-icon"
                              />
                           }{" "}
                           &nbsp; Cost Change
                        </div>
                        <p>
                           Item id-i-7882121-2544 - <b>Submitted</b>
                        </p>
                        <p>
                           Item id-i-21910212-1262 - <b>Approved</b>
                        </p>
                        <p> &nbsp; </p>
                        {<FaArrowRight class="Tile-arrow" />}
                     </div>
                     <div class="Tile">
                        <div class="Tile-title">
                           {
                              <img
                                 src={ReturnsLogo}
                                 alt="icon"
                                 class="Tile-icon"
                              />
                           }{" "}
                           &nbsp; Returns
                        </div>
                        <p>
                           Return id-R81020 - <b>Initiated Return</b>
                        </p>
                        <p>
                           Return id-R00355 - <b>Picked Up</b>
                        </p>
                        <p> &nbsp; </p>
                        {<FaArrowRight class="Tile-arrow" />}
                     </div>
                  </div>

                  <div class="Tile-container">
                     <div class="Tile">
                        <div class="Tile-title">
                           {
                              <img
                                 src={InvoicesLogo}
                                 alt="icon"
                                 class="Tile-icon"
                              />
                           }{" "}
                           &nbsp; Invoices
                        </div>
                        <p>
                           INV-12001359 - <b>Generated</b>
                        </p>
                        <p>
                           INV-12001389 - <b>Sent to Customer</b>
                        </p>
                        <p>
                           INV-99202129 - <b>Sent to Customer</b>
                        </p>
                        {<FaArrowRight class="Tile-arrow" />}
                     </div>
                     <div class="Tile">
                        <div class="Tile-title">
                           {
                              <img
                                 src={PurchaseOrderLogo}
                                 alt="icon"
                                 class="Tile-icon"
                              />
                           }{" "}
                           &nbsp; Purchase Order
                        </div>
                        <p>
                           PO-R-BNG-5681001021 - <b>Approved</b>
                        </p>
                        <p>
                           PO-R-DEL-5483219422 - <b>Pending</b>
                        </p>
                        <p>
                           PO-R-MUM-3178234413 - <b>Approved</b>
                        </p>
                        {<FaArrowRight class="Tile-arrow" />}
                     </div>
                  </div>

                  
                  
                  {/* <DealsContainer Deals={data}/> */}
                  <ASNContainer ASN={data} />

               </div>
            </div>

            <div class="Dashboard-Contents2">
               <div class="Analytics-Container">
                  {<img src={Analytics} alt="icon" class="Analytics-icon" />}
               </div>

               <AlertsContainer Alert={data} />
            </div>
         </div>
      </div>
   );
}

export default Dashboard;