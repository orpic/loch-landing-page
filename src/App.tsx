import React, { useState } from "react";
import { CoreSignUp, Showcase } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { IN_APP_NOTIFICATION_DEFAULT_TIME } from "./constants";

function App() {
  const [isCoreSignUpOpen, setIsCoreSignUpOpen] = useState(false);
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={IN_APP_NOTIFICATION_DEFAULT_TIME}
        hideProgressBar={false}
        newestOnTop={true}
        transition={Slide}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={true}
        theme="dark"
      />
      <main className="flex flex-row">
        <section className="basis-7/12 xl1300:basis-full lg900:w-full  h-screen custom-gradient flex flex-col font-newInterFont ">
          <Showcase />
        </section>
        <section className="basis-5/12 xl1300:hidden h-screen font-newInterFont">
          <CoreSignUp />
        </section>
      </main>
      <div
        onClick={() => {
          setIsCoreSignUpOpen((prev) => !prev);
        }}
        className="hidden xl1300:block fixed bg-[#2f15d0] px-3 py-2 rounded-full  bottom-12 right-12 text-white shadow-md shadow-neutral-900 z-20"
      >
        {isCoreSignUpOpen
          ? "..I'll explore a bit more"
          : "Get exclusive access"}
      </div>
      <div
        className={` ${
          isCoreSignUpOpen ? "hidden xl:block top-0 left-0 z-10" : "hidden "
        } fixed h-screen w-screen bg-white`}
      >
        <CoreSignUp />
      </div>
    </React.Fragment>
  );
}

export default App;
