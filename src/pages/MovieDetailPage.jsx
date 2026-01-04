import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function MovieDetailPage() {
  const { id } = useParams();
  const apikey = import.meta.env.VITE_OMDB_API_KEY;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=${apikey}` 
      );
      setMovie(response.data);
    };
    getMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="text-gray-400 text-center py-24 text-xl animate-pulse">
        Loading movie details…
      </div> 
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white pb-20">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Poster */}
        <div className="relative w-full">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full rounded-3xl shadow-2xl border border-gray-800"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Movie Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight">
            {movie.Title}
          </h1>

          <div className="flex items-center gap-4 text-gray-300 text-lg">
            <span className="text-yellow-400 font-semibold text-xl">
              ★ {movie.imdbRating} <span className="text-white font-light italic text-sm">({movie.imdbVotes})</span>
            </span>
            <span>• {movie.Year}</span>
            <span>• {movie.Runtime}</span>
            <span className="bg-gray-800/60 px-3 py-1 rounded-full text-sm border border-gray-700">
              {movie.Rated}
            </span>
          </div>

          {/* Genres */}
          <div className="flex gap-2 flex-wrap">
            {movie.Genre?.split(",").map((g) => (
              <span
                key={g}
                className="bg-indigo-600/20 border border-indigo-700 px-3 py-1 text-sm rounded-full text-indigo-300"
              >
                {g}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-3">
            <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 font-medium">
              Watch Trailer
            </button>
            <button className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition border border-gray-700 font-medium">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          {movie.Plot}
        </p>
      </div>

      {/* Info Grid */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6 mt-6">
        <Info title="Director" value={movie.Director} />
        <Info title="Writer" value={movie.Writer} />
        <Info title="Cast" value={movie.Actors} />
        <Info title="Language" value={movie.Language} />
        <Info title="Country" value={movie.Country} />
        <Info title="Box Office" value={movie.BoxOffice} />
      </div>

    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-xl p-5 rounded-xl border border-gray-800 shadow-lg">
      <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">
        {title}
      </h3>
      <p className="text-gray-200 mt-1 text-lg">
        {value}
      </p>
    </div>
  );
} 