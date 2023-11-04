import { useState, useEffect } from "react"
import { createUser, getUserById } from "../data/api"
import { getAllUsers } from "../data/api"

export function Profile() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState([])

    async function handleSubmit() {
        let object = {}
        object.username = username
        object.email = email
        object.joinDate = new Date()
        object.challenges = []
        await createUser(object)
    }

    useEffect(() => {
        async function grabUser() {
            let user = await getUserById("6546a4e5656a25a752da06e7")
            console.log(user)
            setUser(user.data)
        }
        grabUser()
    }, [])

    return (
        <>
            <h1>This is the profile page</h1>
            <input onChange={(e) => setUsername(e.target.value)} placeholder={"Username"}/>
            <input onChange={(e) => setEmail(e.target.value)} placeholder={"Email"}/>
            <button onClick={handleSubmit}>Submit User</button>
            {JSON.stringify(user)}
        </>
    )
}