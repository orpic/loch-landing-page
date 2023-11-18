import React from "react";
import { Showcase, SignUp } from "./components";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { IN_APP_NOTIFICATION_DEFAULT_TIME } from "./constants";

function App() {
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
        // limit={2}
      />
      <main className="flex flex-row">
        <Showcase />
        <SignUp />
      </main>
    </React.Fragment>
  );
}

export default App;
