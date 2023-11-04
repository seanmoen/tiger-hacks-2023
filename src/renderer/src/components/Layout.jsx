import { Navbar } from "./navbar"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}