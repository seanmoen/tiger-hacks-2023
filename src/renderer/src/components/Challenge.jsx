import { useState, useEffect } from "react";
import { getChallengeById } from "../data/api";
import { useNavigate } from "react-router";

export function Challenge({id}) {
    const [challenge, setChallenge] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    let navigate = useNavigate()

    function handleNavigate() {
        navigate(`../viewChallenge/${id}`)
    }

    useEffect(() => {
        async function grabChallenge() {
            let fetchedChallenge = await getChallengeById(id)
            setChallenge(fetchedChallenge.data)
            setIsLoaded(true)
        }
        grabChallenge()

    }, [])

    return (
        <>
            {isLoaded && 
            <div onClick={handleNavigate} className="flex flex-row m-4 w-1/2 border-2 border-orange-500 rounded-2xl hover:bg-hover-gray hover:cursor-pointer">
                <h1 className="text-2xl m-2 font-bold p-2">
                    {challenge.title}
                </h1>
                <p className="flex justify-center items-center border-l-2 border-orange-500 p-2 italic">
                    {new Date(challenge?.startDate).toLocaleDateString()} - {new Date(challenge?.endDate).toLocaleDateString()}
                </p>
                <p className="flex justify-center items-center border-l-2 border-orange-500 p-2">
                    <div className="flex flex-row">
                        <div className="font-bold">
                            Challenge: 
                        </div>
                        <div className="italic">
                            {challenge.description}
                        </div>
                    </div>
                    
                </p>
            </div>
            }
        </>
    )
}
