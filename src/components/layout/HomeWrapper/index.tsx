import React, { useState } from "react";
import Home from "../../../pages/Home";
import Layout from "../Layout";
import type { TrendingItem } from "../../../utils/types";

const HomeWrapper: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<TrendingItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleMovieSelect = (movie: TrendingItem) => {
    setSelectedMovie(movie);

    setTimeout(() => {
      setIsVideoPlaying(true);
    }, 2000);
  };

  return (
    <Layout selectedMovie={selectedMovie} isVideoPlaying={isVideoPlaying}>
      <Home onMovieSelect={handleMovieSelect} />
    </Layout>
  );
};

export default HomeWrapper;
