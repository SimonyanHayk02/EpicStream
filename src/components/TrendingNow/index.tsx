import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingNow.scss";
import type { TrendingItem } from "../../utils/types";
import data from "../../data/data.json";

interface TrendingNowProps {
  onMovieSelect: (movie: TrendingItem) => void;
}

const TrendingNow: React.FC<TrendingNowProps> = ({ onMovieSelect }) => {
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);

  useEffect(() => {
    const viewedMovies = JSON.parse(
      sessionStorage.getItem("viewedMovies") || "[]"
    );

    let sortedItems = [...data.TendingNow];

    if (viewedMovies.length > 0) {
      sortedItems.sort((a, b) => {
        const aIndex = viewedMovies.indexOf(a.Id);
        const bIndex = viewedMovies.indexOf(b.Id);

        if (aIndex === -1 && bIndex === -1) {
          return new Date(b.Date).getTime() - new Date(a.Date).getTime();
        }
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;

        return aIndex - bIndex;
      });
    } else {
      sortedItems.sort(
        (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
      );
    }

    sortedItems = sortedItems.slice(0, 50);

    setTrendingItems(sortedItems);
  }, []);

  const handleMovieClick = (movie: TrendingItem) => {
    const viewedMovies = JSON.parse(
      sessionStorage.getItem("viewedMovies") || "[]"
    );
    const updatedViewedMovies = [
      movie.Id,
      ...viewedMovies.filter((id: string) => id !== movie.Id),
    ];
    sessionStorage.setItem("viewedMovies", JSON.stringify(updatedViewedMovies));

    onMovieSelect(movie);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="absolute bottom-0 left-20 right-20 z-30">
      <div
        className="flex items-center justify-between mb-4"
        style={{ marginBottom: "15px" }}
      >
        <h2 className="text-2xl font-bold text-white">Trending Now</h2>
      </div>

      <div className="trending-carousel">
        <Slider {...settings}>
          {trendingItems.map((item) => (
            <div
              key={item.Id}
              style={{ marginRight: "10px" }}
              onClick={() => handleMovieClick(item)}
            >
              <div className="w-full h-64 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                <img
                  src={`/assets/${item.CoverImage}`}
                  alt={item.Title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingNow;
