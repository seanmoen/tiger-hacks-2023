import { Link } from "react-router-dom"

export function Landing() {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <h1 className="text-4xl text-white font-bold">Landing Page</h1>
            <button className="p-4 m-4 border-2 border-white rounded-lg">
                <Link to="/home">
                    Go to Home page
                </Link>
            </button>
        </div>
    )
}