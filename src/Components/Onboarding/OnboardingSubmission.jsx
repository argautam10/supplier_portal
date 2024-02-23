import React, { useState } from 'react'
import '../../style/OnboardingSubmission.css'
import OnboardingNav from '../Navbar/OnboardingNav';
import { Step, ProgressBar } from "react-step-progress-bar"
import "react-step-progress-bar/styles.css";
import '../../style/Stepper.css'
import { FaArrowLeft } from 'react-icons/fa';

const OnboardingSubmission=( { prevStep, nextStep, handleChange, values } )=>
{
    const Previous = e => 
    {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => 
    {
        e.preventDefault();
        nextStep();
    }
   
    return (
        <div class='OnboardingMain-container'>
            <OnboardingNav/>
            <ProgressBar percent={100} filledBackground="#00338E" className="Onboarding-ProgressBar">
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Business Information
                    </div>
                )} 
                </Step>
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Document Upload
                    </div>
                )} 
                </Step>
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Bank Details
                    </div>
                )} 
                </Step>
                <Step transition="scale">
                {({ accomplished }) => (
                    <div className={`indexedStep ${accomplished ? "accomplished" : null}`} >
                        Summary
                    </div>
                )} 
                </Step>
            </ProgressBar>
            <div class='OBDoc-backBtn-container'>
                <a href='/OnboardingMain' className='OBOBDoc-backBtn' onClick={Previous}> <i>{<FaArrowLeft/>}</i>  Back </a>
            </div>
            <div className='OnboardingSub-Title'>
                <p>Thank you for your Submission . Verification will commence soon. Login to check the progress</p>
            </div>
            <div class='OnboardingSubmission-form-box'>
                <p>
                    Data from backend regarding the submission comes here
                </p>
            </div>
        </div>
    )
};

export default OnboardingSubmission;