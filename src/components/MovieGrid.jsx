import MovieCard from './MovieCard'

export default function MovieGrid({ movie }) {
  if (!movie) return <p>Search for something...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 p-4">
      {movie.map((m, index) => (
        <MovieCard key={index} movie={m} />
      ))}
    </div>
  );
}

