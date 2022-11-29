"use client";

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.movie.ids.trakt}>
          {movie.movie.title}
        </div>
      ))}
    </div>
  );
}
