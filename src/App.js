import './style/App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import RegistrationID from './Components/Registration/RegistrationID';
import ForgetPassword from './Components/ForgotPassword/ForgotPassword';
import ChangePassword from './Components/ForgotPassword/ChangePassword';
import ChangePasswordConf from './Components/ForgotPassword/ChangePasswordConf';
import Navbar from './Components/Navbar/Navbar';
import HomeNav from './Components/Navbar/HomeNav';
import OnboardingNav from './Components/Navbar/OnboardingNav';
import Dashboard from './Components/Dashboard/Dashboard';
import UserMgmtMain from './Components/UserManagement/UserMgmtMain';
import UMViewSites from './Components/UserManagement/UMViewSites';
import UMViewUser from './Components/UserManagement/UMViewUser';
import UMRemoveUser from './Components/UserManagement/UMRemoveUser';
import UMCreateUser from './Components/UserManagement/UMCreateUser';
import PurchaseOrderMain from './Components/PurchaseOrder/PurchaseOrderMain';
import SiteAddCnfrm from './Components/UserManagement/SiteAddCnfrm';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AlertASN from './Components/Alerts/AlertASN';
import AlertPO from './Components/Alerts/AlertPO';
import AlertDeals from './Components/Alerts/AlertDeals';
import AlertInvoices from './Components/Alerts/AlertInvoices';
import AlertReturns from './Components/Alerts/AlertReturns';
import InvoicesMain from './Components/Invoices/InvoicesMain';
import CreateInvoices from './Components/Invoices/CreateInvoices';
import InvoiceDetails from './Components/Invoices/InvoiceDetails';
import InvoiceItemDetails from './Components/Invoices/InvoiceItemDetails';
import CostChange from './Components/CostChange/CostChange';
import CostChangeItemListing from './Components/CostChange/CostChangeItemListing';
import CostChangeConfirm from './Components/CostChange/CostChangeConfirm';
import CustomerOrdersMain from './Components/CustomerOrders/CustomerOrdersMain';
import CustomerOrderDetails from './Components/CustomerOrders/CustomerOrderDetails';
import COPickList from './Components/CustomerOrders/COPickList';
import COPickerListConfirm from './Components/CustomerOrders/COPickerListConfirm';
import ItemListingMain from './Components/ItemListing/ItemListingMain';
import ItemListingItemEditPage from './Components/ItemListing/ItemListingItemEditPage';
import Onboarding from './Components/Onboarding/Onboarding';
import UMAddSite from './Components/UserManagement/UMAddSite';
import ASNMain from './Components/ASN/ASNView';
import ASNView_detail from './Components/ASN/ASNView_detail';

function App()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
        <Route path='/Registration' element={<Registration />}></Route>
        <Route path='/RegistrationID' element={<RegistrationID />}></Route>
        <Route path='/ForgotPassword' element={<ForgetPassword />}></Route>
        <Route path='/ChangePassword' element={<ChangePassword />}></Route>
        <Route path='/ChangePasswordConf' element={<ChangePasswordConf />}></Route>
        <Route path='/HomeNav' element={<HomeNav/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/OnboardingNav' element={<OnboardingNav/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/PurchaseOrderMain' element={<PurchaseOrderMain/>}></Route>
        <Route path='/UserMgmtMain' element={<UserMgmtMain/>}></Route>
        <Route path='/UMViewSites' element={<UMViewSites/>}></Route>
        <Route path='/UMViewUser' element={<UMViewUser/>}></Route>
        <Route path='/UMRemoveUser' element={<UMRemoveUser/>}></Route>
        <Route path='/UMCreateUser' element={<UMCreateUser/>}></Route>
        <Route path='/SiteAddCnfrm' element={<SiteAddCnfrm/>}></Route>
        <Route path='/AlertASN' element={<AlertASN/>}></Route>
        <Route path='/AlertDeals' element={<AlertDeals/>}></Route>
        <Route path='/AlertPO' element={<AlertPO/>}></Route>
        <Route path='/AlertReturns' element={<AlertReturns/>}></Route>
        <Route path='/AlertInvoices' element={<AlertInvoices/>}></Route>
        <Route path='/InvoicesMain' element={<InvoicesMain/>}></Route>
        <Route path='/CreateInvoices' element={<CreateInvoices/>}></Route>
        <Route path='/InvoiceDetails' element={<InvoiceDetails/>}></Route>
        <Route path='/InvoiceItemDetails' element={<InvoiceItemDetails/>}></Route>
        <Route path='/CostChange' element={<CostChange/>}></Route>
        <Route path='/CostChangeItemListing' element={<CostChangeItemListing/>}></Route>
        <Route path='/CostChangeConfirm' element={<CostChangeConfirm/>}></Route>
        <Route path='/CustomerOrdersMain' element={<CustomerOrdersMain/>}></Route>
        <Route path='/CustomerOrderDetails' element={<CustomerOrderDetails/>}></Route>
        <Route path='/COPickList' element={<COPickList/>}></Route>
        <Route path='/COPickerListConfirm' element={<COPickerListConfirm/>}></Route>
        <Route path='/ItemListingMain' element={<ItemListingMain/>}></Route>
        <Route path='/ItemListingItemEditPage' element={<ItemListingItemEditPage/>}></Route>
        <Route path='/Onboarding' element={<Onboarding/>}></Route>        
        <Route path='/UMAddSite' element={<UMAddSite/>}></Route>
        <Route path='/ASNMain' element={<ASNMain />} />
        <Route path='/asn/:asn' element={<ASNView_detail />} />    

      </Routes>
    </BrowserRouter>
  );
}

export default App;
