import { Link } from "react-router-dom"
import { pages } from "./pages"
import Logo from "../../../../TigerLogo.png"

export function Navbar() {
    return (
        <div className="flex items-center w-full bg-orange-500 justify-center">
            <div className="h-24 w-24 rounded-lg">
                <img src={Logo}/>
            </div>
            {pages.map((page) => {
            return (
                <button className="my-4 mx-8 p-2 border-4 border-white rounded-lg text-2xl">
                    <Link to={page.path}>
                        {page.name}
                    </Link>
                </button>
            )
        })}
        </div>
    )

}


