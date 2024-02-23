import React from 'react'
import '../../style/InvoiceAlertButton.css'
import { FaBell } from "react-icons/fa";

function CustomerOrdersAlertsButton() 
{
  return (
    <a className="InvoiceAlertButton" href='/AlertInvoices'>
        <div>Customer Orders Alerts</div> {<FaBell className="InvoiceAlertButton-icon"/>}
    </a>
  )
}

export default CustomerOrdersAlertsButton