import React from 'react';
import { BrowserRouter, Routes, Route,  Outlet, Link } from "react-router-dom";
import BrandList from './components/BrandList';
import CarList from './components/CarList';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BrandList />} />
        <Route path="carList" element={<CarList />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;