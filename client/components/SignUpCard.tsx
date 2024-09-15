"use clinet";

import GoogleSignIn from "./GoogleSignIn";

const SignUpCard = () => {
  return (
    <div className="mt-4 bg-black border border-gray-700 px-4 py-3 rounded-2xl">
      <h2>Sign Up!</h2>
      <div className="text-sm py-2 w-full space-y-3">
        <p>
          login with your google account to start posting here on X or twitter
          clone.
        </p>
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default SignUpCard;
