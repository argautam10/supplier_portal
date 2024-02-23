import React from 'react';
import '../../style/DownloadAsnButton.css';
import { IoIosCloudDownload } from "react-icons/io";

const DownloadAsnButton = () => {
    return (
        <button className="Download_button">
            Download Asn<i><IoIosCloudDownload /></i>
        </button>
    );
};

export default DownloadAsnButton;