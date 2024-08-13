import React from 'react';
import ats from "../img/ATS.svg";

const ResetPassword = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-2">
      <div className="absolute top-10 flex justify-center w-full">
        <img src={ats} alt="ats" className='w-[101.67px] h-[45px] sm:h-[60px]' />
      </div>
      <div className="max-w-[440px] max-h-[550px] w-full bg-white rounded-md shadow-lg mt-20 sm:mt-10 p-6 sm:p-12 border border-gray-200">
        <h1 className="text-3xl font-bold text-center">Reset Password</h1>
        <p className="text-center text-xs mt-3 mb-8 font-semibold text-[#1C1C1C] w-full">
          Set the new password for your account,  so you can <br /> sign in and access all the features.
        </p>
        <div className="my-6 text-left">
          <label className="block text-[#1C1C1C] text-sm font-semibold mb-2" htmlFor="verification-code">Verification code</label>
          <div className="flex justify-center space-x-2.5">
            <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-[#EAEAEA] rounded-md bg-[#F7f7f8]" />
            <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-[#EAEAEA] rounded-md bg-[#F7f7f8]" />
            <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-[#EAEAEA] rounded-md bg-[#F7f7f8]" />
            <span className="pt-3 text-[#999999]">-</span>
            <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-[#EAEAEA] rounded-md bg-[#F7f7f8]" />
            <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-[#EAEAEA] rounded-md bg-[#F7f7f8]" />
            <input type="text" maxLength="1" className="w-10 h-10 sm:w-[46px] sm:h-[40px] text-center border border-[#EAEAEA] rounded-md bg-[#F7f7f8]" />
          </div>
        </div>
        <div className="my-6 text-left">
          <label className="block text-[#1C1C1C] text-sm font-semibold mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border border-[#EAEAEA] rounded-lg bg-[#F7F7F8]" />
        </div>
        <div className="my-6 text-left">
          <label className="block text-[#1C1C1C] text-sm font-semibold mb-2" htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" className="w-full px-3 py-2 border border-[#EAEAEA] rounded-lg bg-[#F7F7F8]" />
        </div>
        <button className="w-full px-4 p-2.5 mt-2 text-white bg-[#882EFD] rounded-md focus:outline-none sm:max-w-full">
          Reset Password
        </button>
        <div className="pl-4 pb-2 my-4 text-xs flex w-full">
          Never mind, I remember my password. Back to <span className="text-[#882EFD] cursor-pointer font-bold ml-1">Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
