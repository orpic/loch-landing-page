import { toast } from "react-toastify";
import { EMAIL_VALIDATION_REGEX, URL_LOCH_APP_WELCOME } from "../constants";
import { useState } from "react";

const CoreSignUp = () => {
  const [emailAddress, setEmailAddress] = useState<string>("");
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="text-[#B0B1B3] flex flex-col">
        <p className="font-medium text-4xl ">Sign up for</p>
        <p className="font-medium text-4xl mb-6">exclusive access.</p>

        <input
          value={emailAddress}
          onChange={(e) => {
            //
            toast.dismiss();
            setEmailAddress(e.target.value);
          }}
          placeholder="Your email address"
          className="placeholder:text-[#CACBCC] ring-1 ring-[#E5E5E6] p-3 rounded-lg mb-5 text text-[#19191A] hover:ring-[#404041] transition-all"
        />

        <button
          onClick={async () => {
            if (!EMAIL_VALIDATION_REGEX.test(emailAddress)) {
              toast.dismiss();
              toast.error("Please enter a valid email");
              return;
            }
            setEmailAddress("");
            window.open(URL_LOCH_APP_WELCOME, "_self");
          }}
          className="bg-[#19191A] text-white p-3 rounded-lg mb-8"
        >
          Get Started
        </button>
        <p className="text-[#19191A] font-semibold text-sm">
          You'll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default CoreSignUp;
