import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import RadioScreen from './Screens/RadioScreen';
import Login from './components/login/Login';
import Signup from './components/Signup/Signup';
import CreateStationScreen from './Screens/CreateStationScreen';
import EditStationScreen from './Screens/EditStationScreen';
import UpdateStationScreen from './Screens/UpdateStationScreen';
import NoFound from './components/noMatch/NoFound';
import Settings from './components/settingss/Settings';

const App = () => {
  const user = localStorage.getItem("token");
  // console.log(user);
  return (
    <Routes>
      {user && user !== undefined && <Route path="/" exact element={<RadioScreen />} />}
      {user && user !== undefined && <Route path="/settings" exact element={<Settings />} />}
      {user && user !== undefined && <Route path="/create" exact element={<CreateStationScreen />} />}
      {user && user !== undefined && <Route path="/edit" exact element={<EditStationScreen />} />}
      {user && user !== undefined && <Route path="/update/:id" exact element={<UpdateStationScreen />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
};

export default App;
