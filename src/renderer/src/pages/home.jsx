import { Challenge } from "../components/Challenge";
import { useState, useEffect } from "react";
import TigerHacks from "../../../../TigerHacks.png"
import Logo from "../../../../TigerLogo.png"

export function Home() {
    return (
        <div className="flex flex-col width-screen height-screen">
          <div>
            <h1 className="flex items-center justify-center text-5xl font-bold m-5">
              Welcome to Social Duel
            </h1>
            <p className="flex items-center justify-center text-xl m-5 italic">
              Complete this challenge for a chance to win a prize!
            </p>
          </div>
  
          <div className="flex flex-col items-center justify-center">
            <Challenge id="65466b9f02b1db375924b1b7" />
          </div>
          <div className="w-full h-2 bg-orange-500">
          </div>
          <div className="flex flex-row justify-center mt-4">
            <div className="flex justify-between h-56 w-56">
              <img src={TigerHacks}/>
            </div>
            <div className="flex justify-between h-56 w-56">
              <img src={Logo}/>
            </div>
          </div>

        </div>
    )
}