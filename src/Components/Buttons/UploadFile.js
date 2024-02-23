import React from 'react'
import '../../style/UploadFile.css'
import {FaFileUpload} from "react-icons/fa";

function UploadButton() {
  return (
    <div class="upload-btn-wrapper">
      <button class="Uploadbtn">Upload a file <i class="fa"> {<FaFileUpload/>} </i></button>
      <input type="file" name="myfile"/> <text>(formats: pdf, xlxs, .jpg)</text>
  </div>
  )
}

export default UploadButton