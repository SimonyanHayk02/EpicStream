import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mb-8 flex flex-col justify-center items-center gap-4">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4 gap-4 flex justify-center items-center">
          <button
            onClick={() => window.history.back()}
            style={{ padding: "5px 14px" }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 mr-4"
          >
            Go Back
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            style={{ padding: "5px 14px" }}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            Go Home
          </button>
        </div>

        <div className="mt-12 text-gray-500">
          <p className="text-sm">Error Code: 404 | Status: Not Found</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
