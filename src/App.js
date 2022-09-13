import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import './index.css'
import Main from "./layout/Main";
import {Context} from "./Context/Context";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
        <Context>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Context>
      <Footer />
    </>
  );
}

export default App;
