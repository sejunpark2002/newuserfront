import React from 'react';
import ShowUser from './ShowUser';
import Home from '../view/Home/Home';
import ShowReport from '../view/Report/ShowReport';
import { Route, Routes } from 'react-router-dom';

const Rightcolumn = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<ShowUser />} />
        <Route path="/report" element={<ShowReport />} />
      </Routes>
    </>
  );
};

export default Rightcolumn;
