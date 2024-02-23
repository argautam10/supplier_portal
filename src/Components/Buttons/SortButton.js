import React from 'react';
import '../../style/SortButton.css';
import { FaSort } from 'react-icons/fa'

const SortButton = () => {
    return (
        <button className="sort-button">
            Sort <i className="fas fa-sort"><FaSort/></i>
        </button>
    );
};

export default SortButton;
