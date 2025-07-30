import Results from './components/Results'

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  const rep = await fetch(
    `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=7c7f7e0cc215dc207d1326ebf7c822bb&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!rep.ok) {
    throw new Error("Failed to fetch Data!");
  }

  const data = await rep.json();

  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
