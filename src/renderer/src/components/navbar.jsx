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
                <button className="my-4 mx-8 p-2 rounded-lg text-2xl navitem">
                    <Link to={page.path}>
                        {page.name}
                    </Link>
                </button>
            )
        })}
        </div>
    )

}


