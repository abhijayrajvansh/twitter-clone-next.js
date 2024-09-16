"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { generateSignedToken } from "@/graphql/queries";

const GoogleSignIn = () => {
  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {
    const token = cred.credential;
    // to use useLazyQuery instead of useQuery
    const { data } = useQuery(generateSignedToken, { variables: { token } });
    console.log({data})
  }, []);

  return (
    <div className="w-full flex justify-center bg-white rounded-md">
      <GoogleLogin onSuccess={handleLoginWithGoogle} />
    </div>
  );
};

export default GoogleSignIn;
