import React from 'react';
import '../../style/ExportOnly.css';
import { FaFileExport } from 'react-icons/fa'

const ExportOnly = () => {
    return (
        <button className="export-button">
            Export <i><FaFileExport/></i>
        </button>
    );
};

export default ExportOnly;