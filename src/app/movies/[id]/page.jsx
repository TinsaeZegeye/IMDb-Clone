import Image from 'next/image';
import React from 'react'

async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7c7f7e0cc215dc207d1326ebf7c822bb`);

    return await res.json();    
}

export default async function MoviePage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
  return (
      <div className='w-f'>
          <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-2-6xl mx-auto md:space-x-6'>
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                className='rounded-lg'
                style={
                    {
                        maxWidth: '100%', 
                        height: '100%', 
                    }
                }
                placeholder='blur'
                blurDataURL='/spinner.svg'
                width={500}
                height={300}
                alt={movie.title || 'Movie image'}
              />
              <div className='p-2'>
                  <h2 className='text-lg mb-3 font-bold'>{ movie.title}</h2>
                  <p className='text-lg mb-3 '><span className='font-semibold mr-1'>Overview:</span>{movie.overview}</p>
                  <p className='mb-3'><span className='font-semibold mr-1'>Date Release:</span>{movie.release_date || movie.first_air_date}</p>
                  <p className='mb-3'><span className='font-semibold mr-1'>Rating:</span>{ movie.vote_count}</p>
              </div>
          </div>  
    </div>
  )
}