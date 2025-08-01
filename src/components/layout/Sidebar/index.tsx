import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigationItems } from "../../../constants/index";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div
        className={`fixed left-1 top-0 w-64 bg-transparent transition-all duration-300 z-40 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div style={{ margin: 20 }}>
          <div className="flex items-center space-x-3 gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-gray-300 text-sm">👤</span>
            </div>
            <span className="font-medium text-white">Daniel</span>
          </div>
        </div>
      </div>

      <div
        className={`fixed left-1 bottom-0 w-64 bg-transparent transition-all duration-300 z-50 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div style={{ margin: 20 }}>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              LANGUAGE
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              GET HELP
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              EXIT
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed left-1 top-45 transition-all duration-300 z-45 ${
          isHovered ? "w-64 bg-transparent" : "w-16 bg-transparent"
        } h-full`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full">
          <div
            className={`h-20 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <div className="flex-1 p-4">
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center transition-all duration-200 cursor-pointer w-full h-12 rounded-full ${
                      isActive
                        ? "bg-gray-600 bg-opacity-50"
                        : "hover:bg-gray-700 hover:bg-opacity-30"
                    } ${isHovered ? "px-4 py-3 rounded-lg" : ""}`}
                  >
                    <div className="flex justify-center items-center w-15">
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="w-6 h-6"
                      />
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isHovered ? "w-32 opacity-100 ml-3" : "w-0 opacity-0"
                      }`}
                    >
                      <span className="text-white font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`h-32 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
