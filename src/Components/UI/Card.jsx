import React from "react";

function Card({ title, description, className = "" }) {
  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 border border-gray-200 w-[200px] h-auto ${className}`}
    >
      {title && (
        <h2 className="text-lg font-bold text-gray-800 flex justify-center">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-gray-600 mt-2 flex justify-center">{description}</p>
      )}
    </div>
  );
}

export default Card;
