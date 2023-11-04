import { Challenge } from "../components/Challenge";
export function Home() {

    return (
        <>
          <div>
            <h1 className="flex items-center justify-center text-5xl m-5">
              Welcome to Social Challenge
            </h1>
            <p className="flex items-center justify-center text-xl m-5">
              Complete this challenge for a chance to win a prize!
            </p>
          </div>

          <Challenge id="65466b9f02b1db375924b1b7"/>
          
        </>
    )
}