import React, { useState, useEffect } from "react";

export default function Loader({ message = "Loading..." }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loader when the page is fully loaded
    const handleLoad = () => setVisible(false);

    // Check if page is already loaded
    if (document.readyState === "complete") {
      setVisible(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        <svg
          className="animate-spin h-12 w-12 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <span className="text-white text-sm">{message}</span>
      </div>
    </div>
  );
}