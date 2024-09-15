"use client";

import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleSignIn = () => {
  return <GoogleLogin onSuccess={(cred) => console.log(cred)} />;
};

export default GoogleSignIn;
