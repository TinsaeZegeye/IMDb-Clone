import Image from 'next/image';

async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json();    
}

export default async function MoviePage({ params }) {
    const movieId = (await params).id;
    const movie = await getMovie(movieId);
    const imagePath = movie.backdrop_path || movie.poster_path;
    
    return (
        <div className='w-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center max-w-6xl mx-auto md:space-x-6'>
                <div className='relative w-full max-w-[500px] h-[300px]'>
                    <Image
                        src={imagePath ? `https://image.tmdb.org/t/p/original/${imagePath}` : '/fallbackimage.svg'}
                        className='rounded-lg object-cover'
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder='blur'
                        blurDataURL='/spinner.svg'
                        alt={movie.title || 'Movie image'}
                    />
                </div>
                <div className='p-2'>
                    <h2 className='text-lg mb-3 font-bold'>{movie.title}</h2>
                    <p className='text-lg mb-3'>
                        <span className='font-semibold mr-1'>Overview:</span>
                        {movie.overview}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Date Released:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating:</span>
                        {movie.vote_average} ({movie.vote_count} votes)
                    </p>
                </div>
            </div>  
        </div>
    )
}