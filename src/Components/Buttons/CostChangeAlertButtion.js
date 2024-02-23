import React from 'react'
import '../../style/CostChangeAlertButton.css'
import { FaBell } from "react-icons/fa";

function CostChangeAlertButton() {
  return (
    <button class="AlertButton">
        Cost Change Alerts {<FaBell class="CostChangeAlertButton-icon"/>}
    </button>
  )
}

export default CostChangeAlertButton