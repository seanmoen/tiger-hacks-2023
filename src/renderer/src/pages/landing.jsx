import { LoginButton } from "../components/buttons/login-button"
import Logo from "../../../../TigerLogo.png"

export function Landing() {
    return (
        <div className="flex flex-col w-auto h-screen justify-center items-center bg-gradient-to-br from-orange1 to-orange2">
            <h1 className="titleSequence">Social Duel</h1>
            <div className="w-64 h-64">
                <img src={Logo}/>
            </div>
            <h2 className="slogan">A battle royale for community engagement</h2>
	        <LoginButton/>
        </div>
    )
}
