import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PaginaPrincipal } from '../pages/PaginaPrincipal';

export function AppRouter() {
  return (
    <Routes>
     <Route path="/" element={<PaginaPrincipal />} /> 
     
    </Routes>
  );
}