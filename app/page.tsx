// Import your Client Component
import HomePage from "./HomePage";

async function getMovies() {
  const res = await fetch("https://api.trakt.tv/movies/trending", {
    headers: { "trakt-api-key": process.env.TRAKT_KEY },
  });
  const posts = await res.json();
  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const movies = await getMovies();
  // Forward fetched data to your Client Component
  return <HomePage movies={movies} />;
}
