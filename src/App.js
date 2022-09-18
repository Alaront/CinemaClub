import React from "react";
import './assets/index.sass'
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./pages/Main";
import {Context} from "./Context/Context";
import {Route, Routes} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import PageFilm from "./pages/PageFilm";

function App() {
  return (
    <>
      <Header />
        <Context>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="film/:id" element={<PageFilm />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Context>
      <Footer />
    </>
  );
}

export default App;
