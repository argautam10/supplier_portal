import React, { useState } from 'react';
import HomeNav from '../Navbar/HomeNav';
import { FaUserAlt, FaUserCheck, FaBuilding, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../../style/UserMgmtMain.css';
import FullLengthSearchbar from '../Searchbars/FullLengthSearchbar';
import ASN_Alert_button from '../Buttons/ASN_Alert_button';
import { FaBell, FaCloudDownloadAlt, FaDownload, FaPlusCircle } from "react-icons/fa";
import HomeButton from '../Buttons/HomeButton';
import FilterButton from '../Buttons/FilterButton';
import ExportButton from '../Buttons/ExportButton';
import SortButton from '../Buttons/SortButton';
import "../../style/ASNMain.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const asnData = [
  {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  },
  {
    asn: 'ASN1241',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1242',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  },
   {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  }, {
    asn: 'ASN1240',
    creationDate: '12-April-2023',
    shippingDate: '1-April-2023',
    delivery: 'D-12001349',
    status: 'Delivered'
  },
  // ... more data
];

function ASNMain() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  const totalPages = Math.ceil(asnData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = asnData.slice(startIndex, endIndex);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(asnData.map(item => item.asn));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectOne = (asn) => {
    if (selectedItems.includes(asn)) {
      setSelectedItems(selectedItems.filter(item => item !== asn));
    } else {
      setSelectedItems([...selectedItems, asn]);
    }
  };

  return (
    <div>
      <HomeNav />
      <div className='Invoices-heading'>
        <HomeButton />
        <div className='InvoiceTitle'>
          <p>ASN</p>
        </div>
      </div>
      <ASN_Alert_button />
      <FullLengthSearchbar />
      <a href='/CreateInvoices' className='CreateInvBtn'>Create New ASN &nbsp; {<FaPlusCircle />}</a>
      <ExportButton />
      <FilterButton />
      <SortButton />
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={handleSelectAll} />
              </th>
              <th>ASN #</th>
              <th>Creation Date</th>
              <th>Shipping Date</th>
              <th>Delivery #</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" checked={selectedItems.includes(row.asn)} onChange={() => handleSelectOne(row.asn)} />
                </td>
                <td><Link to={`/asn/${row.asn}`}>{row.asn}</Link></td>
                <td>{row.creationDate}</td>
                <td>{row.shippingDate}</td>
                <td>{row.delivery}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handleBack} disabled={currentPage === 1}>
            <FaArrowLeft style={{ marginBottom: "-2px", marginRight: "3px" }} />Back
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-item ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next <FaArrowRight style={{ marginBottom: "-2px", marginLeft: "3px" }} />
          </button>
        </div>
        <button className="dispatch-button">
            Dispatch Selected
        </button>
      </div>
    </div>
  )
}

export default ASNMain;
