import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Landing } from "./pages/landing"
import { Home } from "./pages/home"
import { PastChallenges } from "./pages/pastChallenges"
import { Profile } from "./pages/profile"
import { Layout } from "./components/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route element={<Layout/>}>
          <Route path={"/home"} element={<Home/>}/>
          <Route path={"/pastChallenges"} element={<PastChallenges/>}/>
          <Route path={"/profile"} element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
