import React from 'react';
import '../../style/ExportButton.css';
import { FaFileExport } from 'react-icons/fa'

const ExportButton = () => {
    return (
        <button className="export-button">
            Export All<i><FaFileExport/></i>
        </button>
    );
};

export default ExportButton;