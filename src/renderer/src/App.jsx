import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Landing } from "./pages/landing"
import { Home } from "./pages/home"
import { PastChallenges } from "./pages/pastChallenges"
import { Leaderboard } from "./pages/leaderboard"
import { ViewChallenge } from "./pages/viewChallenge"
import { Layout } from "./components/Layout"
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUsers, createUser } from "./data/api"
import { useEffect, useState } from "react"

function App() {
const { user } = useAuth0();
const [usersLoaded, setUsersLoaded] = useState(false)
const [users, setUsers] = useState([])

console.log(user)

useEffect(() => {
  async function grabAllUsers() {
    let allUsers = await getAllUsers()
    setUsers(allUsers.data)
    setUsersLoaded(true)
  }
  grabAllUsers()
}, [])

if (user && usersLoaded) {
  if (!users.find((userObject) => userObject.email == user.email)) {
    console.log("We are adding a user")
    addUser()
  }
}

function addUser() {
  let object = {}
  object["email"] = user.email
  object["username"] = user.nickname
  object["joinDate"] = new Date()
  object["challenges"] = []

  createUser(object)
}

  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
          <Route element={<Layout/>}>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/pastChallenges"} element={<PastChallenges/>}/>
            <Route path={"/leaderboard"} element={<Leaderboard/>}/>
            <Route path={"/viewChallenge/:challengeId"} element={<ViewChallenge/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
