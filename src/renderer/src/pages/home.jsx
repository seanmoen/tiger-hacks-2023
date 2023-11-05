import { Challenge } from "../components/Challenge";
import { useState, useEffect } from "react";
export function Home() {

    const [submission, setSubmission] = useState("");

    async function handleSubmit() {
      let object = {}
      object.submissionLink = submission
      //createSubmission doesn't exist
      await createSubmission(object)
  }

    return (
        <div className="flex flex-col width-screen height-screen">
          <div>
            <h1 className="flex items-center justify-center text-5xl m-5">
              Welcome to Social Challenge
            </h1>
            <p className="flex items-center justify-center text-xl m-5">
              Complete this challenge for a chance to win a prize!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Challenge id="65466b9f02b1db375924b1b7" />

            <div>
              <p>
                Submit a link to your project on Devposts to enter!
              </p>
              <form className="flex flex-col items-center justify-center m-5">
                <input onChange={(e) => setSubmission(e.target.value)} placeholder={"Enter a Link to your DevPosts"}/>
                <button onClick={handleSubmit}>Submit User</button>
              </form>
            </div>
          </div>
          
        </div>
    )
}