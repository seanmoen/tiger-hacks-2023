import { Link } from "react-router-dom"
import { LoginButton } from "../components/buttons/login-button"
import Logo from "../../../../TigerLogo.png"

export function Landing() {

    function handleClick() {
        alert("Button has been clicked")
    }

    return (
        <div className="flex flex-col w-auto h-screen justify-center items-center bg-gradient-to-br from-orange1 to-orange2">
            <h1 className="text-8xl bg-orange text-white p-2 border-4 rounded-2xl font-bold italic">Social Challenge</h1>
            <div className="w-64 h-64">
                <img src={Logo}/>
            </div>
            <h2 className="text-2xl italic m-4">The world's most competitive challenge platform</h2>
	        <LoginButton/>
        </div>
    )
}
