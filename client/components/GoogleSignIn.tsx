"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import React, { useCallback } from "react";

const GoogleSignIn = () => {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {
    
  }, [])


  return <div className="w-full flex justify-center bg-white rounded-md">
    <GoogleLogin onSuccess={(cred) => console.log(cred)} />
  </div>;
};

export default GoogleSignIn;
