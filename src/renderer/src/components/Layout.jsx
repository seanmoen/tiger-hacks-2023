import { Navbar } from "./navbar"
import { Outlet } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function Layout() {
    const { isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate()

    useEffect(() => {
       if (!isLoading && !isAuthenticated) {
            navigate("../")
        }
    }, [isAuthenticated, navigate])

    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}