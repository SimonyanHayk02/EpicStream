import { type NavigationItem } from "../utils/types";
import searchIcon from "../assets/icons/search-icon.png";
import homeIcon from "../assets/icons/home-icon.png";
import tvIcon from "../assets/icons/tv-icon.png";
import moviesIcon from "../assets/icons/movies-icon.png";
import genresIcon from "../assets/icons/genres-icon.png";
import watchLaterIcon from "../assets/icons/watch-later-icon.png";

export const navigationItems: NavigationItem[] = [
  { id: "search", label: "Search", icon: searchIcon, path: "/search" },
  { id: "home", label: "Home", icon: homeIcon, path: "/" },
  { id: "tv-shows", label: "TV Shows", icon: tvIcon, path: "/tv-shows" },
  { id: "genres", label: "Genres", icon: genresIcon, path: "/genres" },
  { id: "movies", label: "Movies", icon: moviesIcon, path: "/movies" },
  {
    id: "watch-later",
    label: "Watch Later",
    icon: watchLaterIcon,
    path: "/watch-later",
  },
];
