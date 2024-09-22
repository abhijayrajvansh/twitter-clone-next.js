"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { gqlClient } from "@/graphql";
import { generateSignedToken } from "@/graphql/queries";

const GoogleSignIn = () => {
  const handleGoogleSignIn = async (cred: CredentialResponse) => {
    
    const response = await gqlClient.query({
      query: generateSignedToken,
      variables: {
        token: cred.credential,
      },
    });

    console.log(response)
    console.log(cred.credential)
  };

  return (
    <div className="w-full flex justify-center bg-white rounded-md">
      <GoogleLogin onSuccess={(cred) => handleGoogleSignIn(cred)} />
    </div>
  );
};

export default GoogleSignIn;
