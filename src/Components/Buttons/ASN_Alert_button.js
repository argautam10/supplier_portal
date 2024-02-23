import React from 'react';
import '../../style/ASN_Alert_button.css';
import { BsFillBellFill } from "react-icons/bs";

const ASN_Alert_button = () => {
    return (
        <button className="ASN_Alert_button">
            ASN Alerts <i><BsFillBellFill /></i>
        </button>
    );
};

export default ASN_Alert_button