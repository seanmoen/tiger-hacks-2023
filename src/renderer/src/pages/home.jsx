import { Challenge } from "../components/Challenge";
import { useState, useEffect } from "react";
import TigerHacks from "../../../../TigerHacks.png"
import Logo from "../../../../TigerLogo.png"
import { useAuth0 } from "@auth0/auth0-react";

export function Home() {
  const { user, isLoading } = useAuth0()
  const [loaded, setLoaded] = useState(false)
  const [username, setUsername] = useState("")

    useEffect(() => {
      if (!isLoading) {
        setLoaded(true)
        setUsername(user.nickname)
      }
    }, [isLoading])

    return (
        <div className="flex flex-col width-screen height-screen">
          {loaded &&
          <div>
            <h1 className="flex items-center justify-center text-5xl font-bold m-5">
              Hello {username}, welcome to Social Duel
            </h1>
            <p className="flex items-center justify-center text-xl m-5 italic">
              Complete this challenge for a chance to win a prize!
            </p>
          </div>}
  
          <div className="flex flex-col items-center justify-center">
            <Challenge id="65466b9f02b1db375924b1b7" />
          </div>
          <div className="w-full h-2 bg-orange-500">
          </div>
          <div className="flex flex-row justify-center mt-4">
            <div className="flex justify-between h-56 w-56">
              <img src={TigerHacks}/>
            </div>
            <div className="flex justify-between h-56 w-56">
              <img src={Logo}/>
            </div>
          </div>

        </div>
    )
}