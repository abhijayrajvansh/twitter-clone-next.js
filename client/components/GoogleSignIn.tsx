"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { gqlClient } from "@/graphql";
import { generateSignedToken } from "@/graphql/queries";

const GoogleSignIn = () => {
  const handleGoogleSignIn = async (cred: CredentialResponse) => {
    console.log(cred)
  };

  return (
    <div className="w-full flex justify-center">
      <GoogleLogin theme="outline" size="large" width={310} onSuccess={(cred) => handleGoogleSignIn(cred)} />
    </div>
  );
}; 

export default GoogleSignIn;
