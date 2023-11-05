import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getChallengeById } from "../data/api";

export function ViewChallenge() {

    let { challengeId } = useParams()
    console.log(challengeId)

    const [challenge, setChallenge] = useState({})

    useEffect(() => {
        async function findChallenge() {
            let challengeObject = await getChallengeById(challengeId)
            console.log(challengeObject)
            setChallenge(challengeObject.data)
        }
        findChallenge()
    }, [])

    console.log(challenge)

    return (
        <div className="flex w-full h-full justify-center items-center border-2 border-orange-500 m-4 rounded-lg">
            {challenge && 
                <div className="flex flex-col w-3/4 h-auto justify-center">
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">
                            Challenge ID:
                        </div>
                        <div>
                            {challenge._id}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">
                            Challenge Title:
                        </div>
                        <div>
                            {challenge.title}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">
                            Description:
                        </div>
                        <div>
                            {challenge.description}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">
                            Date Started:
                        </div>
                        <div>
                            {challenge.startDate}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="font-bold text-xl">
                            Winners:
                        </div>
                        <div>
                            {JSON.stringify(challenge.winners)}
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}