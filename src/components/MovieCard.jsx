import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div
      className="
        group bg-white rounded-2xl overflow-hidden shadow-md  shadow-amber-50
        transition-all duration-500 
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
        hover:rotate-[0.4deg] 
        animate-fadeUp
      "
    >
      {/* Poster */}
      <div className="overflow-hidden">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="
            w-full h-72 object-cover 
            transition-transform duration-700 
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 leading-tight">
          {movie.Title}
        </h2>

        <div className="flex justify-between text-sm text-gray-600">
          <p><span className="font-medium text-gray-900">Type:</span> {movie.Type}</p>
          <p><span className="font-medium text-gray-900">Year:</span> {movie.Year}</p>
        </div>

        <button
          className="
            mt-3 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg 
            hover:bg-blue-700 transition-colors duration-300
          "
          onClick={() => navigate(`/details/${movie.imdbID}`)}
        >
          View Movie
        </button>
      </div>
    </div>
  );
}
