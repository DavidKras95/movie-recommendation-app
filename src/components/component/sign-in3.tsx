import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import MovieCardRating from "../MovieCardRating"
import Rating from "../Rating";
import Link from "next/link";
// import { getColdStartMovies } from "@/lib/getColdStartMovies";
import Cookies from 'js-cookie';
import { getColdStartMovies } from '@/lib/getColdStartMovies';

function SignIn3() {
  const [coldStartMovies, setColdStartMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Sign-in3");
      let token = await Cookies.get("token");
      console.log(token);
      console.log("Sign-in3");
      console.log(token);
  
      // const movies = await getColdStartMovies(0, "Action","Drama","","Sydney Sweeney","Adam Sandler");
      // setColdStartMovies(["ziv","sis"]);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once after the initial render

  return (
    <>
      <div className="py-12 max-w-7xl">
        <div className="mx-auto space-y-10">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-gray-500" />
                <div className="w-3 h-3 rounded-full bg-gray-500" />
                <div className="w-3 h-3 rounded-full bg-gray-300" />
              </div>
              <p className="text-sm text-gray-100">Stage 3 of 3</p>
            </div>
            <h1 className="text-4xl font-bold text-white">Sign In to CineMate</h1>
            <p className="text-gray-300 ">
              Please Rating at least 10 movies from the list
            </p>
          </div>
          <div>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 pl-4 pr-4 ">
              <div className="grid grid-cols-4 gap-12">
                { coldStartMovies.map((movie) => ( 
                  <div className="rounded-2xl flex flex-col items-center justify-cente bg-[#3c3aa6] hover:scale-105 transition pt-2 pl-2 pr-2">
                    {/* <MovieCardRating key={movie.id} movie={movie} />  */}
                    <div className="flex items-center justify-center scale-150 pb-2">
                      <Rating />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link href="/Main" >
            <Button className="w-full p-6 bg-slate-700  text-2xl">Submit</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignIn3;
