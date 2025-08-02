import React, { useCallback, useEffect, useState } from "react";
import HomePageHeading from "../../components/HomePageHeading";
import TrendingNow from "../../components/TrendingNow";
import type { IFeatured, TrendingItem } from "../../utils/types";
import data from "../../data/data.json";

interface HomeProps {
  onMovieSelect: (movie: TrendingItem) => void;
}

const Home: React.FC<HomeProps> = ({ onMovieSelect }) => {
  const [activeData, setActiveData] = useState<IFeatured | TrendingItem>(
    data.Featured
  );

  useEffect(() => {
    setActiveData(data.Featured);
  }, []);

  const handleMovieSelect = useCallback(
    (movie: TrendingItem) => {
      const fullMovieData = data.TendingNow.find(
        (featured) => featured.Id === movie.Id
      );
      if (fullMovieData) {
        setActiveData(fullMovieData);
        onMovieSelect(fullMovieData);
      }
    },
    [onMovieSelect]
  );

  return (
    <div className="h-full flex">
      <HomePageHeading {...activeData} />
      <TrendingNow onMovieSelect={handleMovieSelect} />
    </div>
  );
};

export default Home;
