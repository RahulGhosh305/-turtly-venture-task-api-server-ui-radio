import React from 'react';
import RadioScreen from '../Screens/RadioScreen';
import SettingScreen from '../Screens/SettingScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import CreateStationScreen from '../Screens/CreateStationScreen';
import EditStationScreen from '../Screens/EditStationScreen';
import UpdateStationScreen from '../Screens/UpdateStationScreen';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

const RootRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<RadioScreen />} />
            <Route path="settings" element={<SettingScreen />} />
            <Route path="registration" element={<RegistrationScreen />} />
            <Route path="edit" element={<EditStationScreen />} />
            <Route path="update/:id" element={<UpdateStationScreen />} />
            <Route path="create" element={<CreateStationScreen />} /> */}

            <Route path="/" element={<PrivateRoute><RadioScreen /></PrivateRoute>} />
            <Route path="registration" element={<RegistrationScreen />} />
            <Route path="create" element={<PrivateRoute><CreateStationScreen /></PrivateRoute>} />
            <Route path="update/:id" element={<PrivateRoute><UpdateStationScreen /></PrivateRoute>} />
            <Route path="edit" element={<PrivateRoute><EditStationScreen /></PrivateRoute>} />
            <Route path="settings" element={<PrivateRoute><SettingScreen /></PrivateRoute>} />


        </Routes>
    );
};

export default RootRoutes;