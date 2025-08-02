import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
const backgroundImage = "/assets/FeaturedCoverImage.png";
import type { TrendingItem } from "../../../utils/types";

interface LayoutProps {
  children: React.ReactNode;
  selectedMovie?: TrendingItem | null;
  isVideoPlaying?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  selectedMovie,
  isVideoPlaying,
}) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(backgroundImage);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedMovie && isVideoPlaying) {
      setVideoUrl(selectedMovie.VideoUrl);
    } else if (!selectedMovie) {
      setVideoUrl(null);
      setCurrentBackground(backgroundImage);
    }
  }, [selectedMovie, isVideoPlaying]);

  return (
    <div className="flex h-screen">
      <div
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        <Sidebar />
      </div>
      <div
        className={`flex flex-1 ml-64 bg-contain bg-no-repeat transition-all duration-300 ${
          isSidebarHovered ? "blur-sm" : "blur-none"
        }`}
        style={{
          backgroundImage: videoUrl ? "none" : `url(${currentBackground})`,
          position: "relative",
          maskImage: isSidebarHovered
            ? "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,1) 85%)"
            : "none",
          WebkitMaskImage: isSidebarHovered
            ? "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.95) 70%, rgba(0,0,0,1) 85%)"
            : "none",
        }}
      >
        {videoUrl && (
          <video
            key={videoUrl}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
        <div
          style={{
            zIndex: 2,
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
