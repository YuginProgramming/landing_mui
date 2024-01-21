import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Authentication from './pages/Authentication/Authentication.js';
import MachineLearning from './pages/MachineLearning/MachineLearning.js';
import Hosting from './pages/Hosting/Hosting.js';
import Functions from './pages/Functions/Functions.js';
import Database from './pages/Database/Database.js';
import Storage from './pages/Storage/Storage.js';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme.js';

ReactDOM.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentication" element={<Authentication />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();