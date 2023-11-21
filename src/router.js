import { createBrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Layout from "./MainNavigation/Layout";
import ErrorPage from "./components/ErrorPage";
import Nav1 from "./components/Nav1";
import Nav2 from "./components/Nav2";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, path: '', element: <Home /> },
            { path: 'nav1', element: <Nav1 /> },
            { path: 'nav2', element: <Nav2/>},            
        ],
    },
]);
