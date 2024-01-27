import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import './style.css';

import AdminPage from "./AdminPage";
import ScheduleInterface from "./ScheduleInterface";
import UsersInterface from "./UsersInterface";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Login />}></Route>
          <Route path = '/admin' element = {<AdminPage />}></Route>
          <Route path = '/schedules' element = {<ScheduleInterface />}></Route>
          <Route path = '/users' element = {<UsersInterface />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
