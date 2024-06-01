"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { Movie } from "../../typings";
import Rating from "./Rating";


Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
        Autoplay(),
      ]);
  
    return (
        <div className="overflow-hidden lg:-mt-10 relative cursor-pointer"
            ref={emblaRef}>
            
            <div className="flex">
                {movies.map((movie) => (
                <div key={movie.id} className="flex-full py-8 min-w-0 relative">
                <Image
                key={movie.id}
                src={getImagePath(movie.backdrop_path, true)}
                alt=""
                width={1920}
                height={1080}
                    />

                <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-10 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white ">
                    <h2 className="text-5xl font-bold max-w-xl z-50">
                    {movie.title} 
                    </h2>
                    <p className="max-w-xl line-clamp-6">{movie.overview}</p>
                    <p>{movie.vote_average}  ({movie.vote_count})</p>
    
            </div>
                </div>
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#1A1C29]" />
        </div>
    
        );
  }
  
  export default CarouselBanner;