import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import TestScreen from "./screens/TestScreen.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<App />}>
            <Route index={true} element={<HomeScreen />} />
            <Route path={"/test"} element={<TestScreen />} />
        </Route>
    )
)

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);
