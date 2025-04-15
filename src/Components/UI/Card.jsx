import React from "react";

function Card({ title, description, buttonText, className = "" }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg p-6 w-[250px] h-auto ${className} 
        hover:cursor-pointer transition-transform transform hover:scale-105 hover:bg-[#716aff] 
        text-gray-800 hover:text-white duration-300 ease-in-out`}
    >
      {title && (
        <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
      )}
      {description && <p className="text-sm text-center">{description}</p>}

      {buttonText && (
        <div className="mt-4 flex justify-center">
          <button
            className="bg-[#af00ed] text-white px-4 py-2 rounded-lg hover:bg-[#af00ed] transition-colors 
            duration-300 hover:cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
