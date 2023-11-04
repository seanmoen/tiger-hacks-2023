import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Landing } from "./pages/landing"
import { Home } from "./pages/home"
import { PastChallenges } from "./pages/pastChallenges"
import { Profile } from "./pages/profile"
import { Layout } from "./components/Layout"
import { useAuth0 } from '@auth0/auth0-react';

/*
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/public-page";
*/
function App() {

const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
   useAuth0();
	if (error) {console.log(error)}

  return (
    <Router>
      <Routes>
	  {/*
	        <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/public" element={<PublicPage />} />
      <Route path="/protected" element={<ProtectedPage />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
      */}

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
