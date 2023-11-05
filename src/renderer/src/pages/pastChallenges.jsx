import { Challenge } from "../components/Challenge";
import { useState, useEffect } from "react";
import { getAllChallenges } from "../data/api";



export function PastChallenges() {

    const [challenges, setChallenges] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function grabChallenges() {
            let fetchedChallenges = await getAllChallenges()
            console.log(fetchedChallenges)
            setChallenges(fetchedChallenges.data)
            setIsLoaded(true)
        }
        grabChallenges()

    }, [])

    return (
        <div className="flex flex-col width-screen height-screen">
          <div>
            <h1 className="flex items-center justify-center text-5xl m-5">
              Previous Challenges
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center">
            {challenges.map((challenge) => {
                if (new Date(challenge?.endDate) <= new Date())
                return ( 
                        <Challenge id={challenge._id}/>
                )
            })}

          </div>
          
        </div>
        )
}