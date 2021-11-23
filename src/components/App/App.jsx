import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import "../App/App.less";

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<MainPage />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
