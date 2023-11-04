import { useState, useEffect } from "react";
import { getAllChallenges, getChallengeById } from "../data/api";

export function Challenge({id}) {
    console.log(id)
    const [challenge, setChallenge] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        async function grabChallenge() {
            let fetchedChallenge = await getChallengeById(id)
            console.log(fetchedChallenge)
            setChallenge(fetchedChallenge.data)
            setIsLoaded(true)
        }
        grabChallenge()

    }, [])

    return (
        <>
            {isLoaded && <>
                <h1>
                    {challenge.title}
                </h1>
                <p>
                    From {new Date(challenge?.startDate).toLocaleDateString()} to {new Date(challenge?.endDate).toLocaleDateString()}
                </p>
                <p>
                    Challenge: {challenge.description}
                </p>
            </>
            }
        </>
    )
}
