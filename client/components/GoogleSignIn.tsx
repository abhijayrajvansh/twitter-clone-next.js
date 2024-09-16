"use client";

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { generateSignedToken } from "@/graphql/queries";

const GoogleSignIn = () => {
  const [fetchedSignedToken, { data }] = useLazyQuery(generateSignedToken);

  const handleGoogleSignIn = useCallback ((cred: CredentialResponse) => {
      fetchedSignedToken({ variables: { token: cred.credential } });
    },
    []
  );

  useEffect(() => {
    if (data) {
      console.log("Data received:", data);
    }
  }, [data]); 

  return (
    <div className="w-full flex justify-center bg-white rounded-md">
      <GoogleLogin onSuccess={handleGoogleSignIn} />
    </div>
  );
};

export default GoogleSignIn;

