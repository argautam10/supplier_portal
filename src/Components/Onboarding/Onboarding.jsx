import React, { Component } from 'react'
import OnboardingMain from './OnboardingMain'
import OnboardingDoc from './OnboardingDoc'
import OnboardingBankDetails from './OnboardingBankDetails'
import OnboardingSummary from './OnboardingSummary'
import OnboardingSubmission from './OnboardingSubmission'

export default class Onboarding extends Component
{
    state = {
        step:1,
        RegisteredCompanyName : '',
        CompanyContactNumber : '',
        GSTIN : '',
        TIN : '',
        Currency : '',
        CompanyRegisteredAddress : '',
        CorrespondenceAddress : '',
        SpocName : '',
        SpocTitle : '',
        SpocContactNumber : '',
        SpocEmailID : '',
        LicenseAgreementDoc : '',
        InsuranceDoc : '',
        RegulatoryComplianceInformationDoc : '',
        LitigationRecordsDoc : '',
        FinancialRecordsDoc : '',
        CompanyOwnershipDoc : '',
        NdaDoc : '',
        SupplierDiversityCertificationsDoc : '',
        SustainableSourcingReportsDoc : '',
        SecurityCertificationsDoc : '',
        BusinessLicensingDoc : '',
        CancelledChequeDoc : '',
        TaxFormsIdentificationDoc : '',
        SubcontractorsDoc : '',
        BankIFCScode : '',
        BankCity : '',
        BankState : '',
        BankBranchName : '',
        BankAccountNumber : '',
        BankName : '',
        PaymentMode : ''
    }

    // go back to previous step
    prevStep = () => 
    {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => 
    {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // Handle fields change
    handleChange = (input) => e => 
    {
        this.setState({ [input]: e.target.value });
    }

    render() 
    {
        const { step } = this.state;
        const 
        {
            RegisteredCompanyName, CompanyContactNumber, GSTIN, TIN ,
            Currency, CompanyRegisteredAddress, CorrespondenceAddress ,
            SpocName ,SpocTitle ,SpocContactNumber ,SpocEmailID ,LicenseAgreementDoc ,
            InsuranceDoc ,RegulatoryComplianceInformationDoc ,LitigationRecordsDoc ,
            FinancialRecordsDoc ,CompanyOwnershipDoc ,NdaDoc ,SupplierDiversityCertificationsDoc ,
            SustainableSourcingReportsDoc ,SecurityCertificationsDoc ,BusinessLicensingDoc ,
            CancelledChequeDoc ,TaxFormsIdentificationDoc ,SubcontractorsDoc ,
            BankIFCScode ,BankCity ,BankState ,BankBranchName ,BankAccountNumber ,BankName, PaymentMode
        } = this.state;
        
        const values = 
        {
            RegisteredCompanyName, CompanyContactNumber, GSTIN, TIN ,
            Currency, CompanyRegisteredAddress, CorrespondenceAddress ,
            SpocName ,SpocTitle ,SpocContactNumber ,SpocEmailID ,LicenseAgreementDoc ,
            InsuranceDoc ,RegulatoryComplianceInformationDoc ,LitigationRecordsDoc ,
            FinancialRecordsDoc ,CompanyOwnershipDoc ,NdaDoc ,SupplierDiversityCertificationsDoc ,
            SustainableSourcingReportsDoc ,SecurityCertificationsDoc ,BusinessLicensingDoc ,
            CancelledChequeDoc ,TaxFormsIdentificationDoc ,SubcontractorsDoc ,
            BankIFCScode ,BankCity ,BankState ,BankBranchName ,BankAccountNumber ,BankName, PaymentMode 
        }
        
        console.log
        (
            "The File is ",values.LicenseAgreementDoc
        );

        switch(step) 
        {
          case 1: 
            return (
              <OnboardingMain 
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
              />
            )
          case 2: 
            return (
              <OnboardingDoc 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
              />
            )
          case 3: 
              return (
                <OnboardingBankDetails 
                  prevStep={ this.prevStep }
                  handleChange={ this.handleChange }
                  nextStep={ this.nextStep }
                  values={ values }
                />
              )
            case 4: 
              return (
                <OnboardingSummary
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
                />
              )
            // case 5: 
            //   return (
            //     <OnboardingSubmission
            //     prevStep={ this.prevStep }
            //     nextStep={ this.nextStep }
            //     handleChange={ this.handleChange }
            //     values={ values }
            //     />
            //   )
          default: 
              // do nothing
        }
    }

}