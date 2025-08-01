import type React from "react";
import { formatDuration } from "../../utils/helper";
import type { IFeatured } from "../../utils/types";

const HomePageHeading: React.FC<IFeatured> = (data) => {
  return (
    <div className="absolute left-20 top-45 z-20">
      <div className="text-white flex flex-col gap-3">
        <p className="text-2xl uppercase tracking-wider mb-2 text-gray-500">
          {data.Category}
        </p>

        <div className="w-full h-full max-w-lg">
          <img
            src={`src/assets/${data.TitleImage}`}
            alt="movie"
            className="w-full h-full"
          />
        </div>

        <p className="text-xl">
          {data.ReleaseYear} {data.MpaRating} {formatDuration(data.Duration)}
        </p>

        <p className="text-gray-200 leading-relaxed max-w-lg text-xl">
          {data.Description}
        </p>

        <div className="flex space-x-4 gap-3" style={{ marginTop: "15px" }}>
          <button className="cursor-pointer bg-white min-w-40 min-h-13 rounded-full justify-center text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center">
            <svg
              className="w-7 h-7 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl text-black font-semibold">Play</span>
          </button>
          <button className="cursor-pointer bg-gradient-to-r from-blue-800 to-blue-900 min-w-40 min-h-13 rounded-full justify-center text-white px-8 py-3 font-medium hover:from-blue-900 hover:to-indigo-900 transition-all duration-200 flex items-center">
            <span className="text-2xl text-white font-semibold">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeading;
