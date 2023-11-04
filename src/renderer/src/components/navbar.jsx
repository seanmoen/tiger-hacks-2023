import { Link } from "react-router-dom"
import { pages } from "./pages"

export function Navbar() {
    return (
        <>
            {pages.map((page) => {
            return (
                <button className="m-6 p-6 border-2 border-black rounded-lg">
                    <Link to={page.path}>
                        {page.name}
                    </Link>
                </button>
            )
        })}
        </>
    )

}


