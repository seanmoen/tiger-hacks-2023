import { getAllUsers, getAllChallenges } from "../data/api"
import { useState, useEffect } from "react"

export function Leaderboard() {
    const [users, setUsers] = useState([])
    const [winUsers, setWinUsers] = useState([])
    const [challenges, setChallenges] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        async function grabAllUsersAndChallenges() {
            let allUsers = await getAllUsers()
            allUsers = allUsers.data
            setUsers(allUsers.data)
            let allChallenges = await getAllChallenges()
            allChallenges = allChallenges.data
            setChallenges(allChallenges.data)

            console.log(allChallenges)
            console.log(allUsers)

            let winnerObject = {}

            for (let challenge of allChallenges) {
                console.log(challenge)
                challenge.winners.forEach((winner) => {
                    if (winner in winnerObject) {
                        winnerObject[winner] += 1
                    } else {
                        winnerObject[winner] = 1
                    }
                })
            }

            let keys = Object.keys(winnerObject)

            keys.sort((a, b) => winnerObject[a] - winnerObject[b])

            let sortedWinnerArray = keys.reverse()
            
            let finalWinnerArray = []
            for (let winner of sortedWinnerArray) {
                let winnerObjectSorted = {}

                winnerObjectSorted["id"] = winner
                winnerObjectSorted["username"] = allUsers.find((user) => user._id == winner).username
                winnerObjectSorted["wins"] = winnerObject[winner]

                finalWinnerArray.push(winnerObjectSorted)
            }

            console.log(finalWinnerArray)
            setWinUsers(finalWinnerArray)
            setLoaded(true)
        }
       
        grabAllUsersAndChallenges()
    }, [])

    return (
        <div className="flex w-full h-full justify-center">
        {loaded && 
            <div className="flex h-1/2 w-1/2 justify-center items-center border-2 border-orange-500 m-4">
                <div className="flex flex-col w-full h-full justify-center items-center m-4">
                    <span className="flex flex-row w-full h-full justify-between">
                        <h1 className="font-bold">Ranking</h1>
                        <h1 className="font-bold">Username</h1>
                        <h1 className="font-bold">Wins</h1>
                    </span>
                {winUsers.map((user, index) => {
                    return (
                        <div className="flex flex-row w-full h-full border-2 justify-between border-orange-500 m-2 p-2 rounded-lg">
                            <div className="font-bold">
                                {index + 1}
                            </div>
                            <div>
                                {user.username}
                            </div>
                            <div>
                                {user.wins}
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>}
        </div>
    )
}