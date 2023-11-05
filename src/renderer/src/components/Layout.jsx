import { Navbar } from "./navbar"
import { Outlet } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";

export function Layout() {

    const { isAuthenticated } = useAuth0();
    
    if (!isAuthenticated) {
        useNavigate("/")
    }

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}