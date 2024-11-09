import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {PaginaPrincipal} from "../pages/PaginaPrincipal.jsx"
import { PaginaInformes } from '../pages/PaginaInformes.jsx';
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/informes" element={<PaginaInformes />} />
     
    </Routes>
  );
}