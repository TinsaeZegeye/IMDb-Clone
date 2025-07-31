import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { GoThumbsup } from "react-icons/go";

export default function Card({result}) {
  return (
      <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sma:m-2 transition-shadow duration-200 group'>
          <Link href={`/movies/${result.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                  className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
                  
                  style={
                      {
                          maxWidth: '100%', 
                          height: 'auto', 
                      }
                  }
                placeholder='blur'
                blurDataURL='/spinner.svg'
                width={500}
                height={300}
                alt={result.title || 'Movie image'}
              />
              <div className='p-2'>
                  <p className='line-clamp-2 text-md'>
                      {result.overview}
                  </p>
                  <h2 className='truncate text-lg font-bold'>
                      {result.title || result.name}
                  </h2>
                  <p className='flex items-center'>
                      {result.release_date || result.first_air_date}
                      <GoThumbsup className='mr-1 ml-3 h-5'/>
                      {result.vote_count}
                  </p>
                  
              </div>
          </Link>
    </div>
  )
}
