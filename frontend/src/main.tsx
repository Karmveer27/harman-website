import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.tsx";
import TestScreen from "./screens/TestScreen.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<App />}>
            <Route index={true} element={<HomeScreen />} />
            <Route path={"/test"} element={<TestScreen />} />
        </Route>
    )
)

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);
