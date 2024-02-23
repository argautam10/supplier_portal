import React from 'react';
import '../../style/FilterButton.css';
import { FaFilter } from 'react-icons/fa'

const FilterButton = () => {
    return (
        <button className="filter-button">
            Filter By <i className="fas fa-filter"><FaFilter/></i>
        </button>
    );
};

export default FilterButton;
