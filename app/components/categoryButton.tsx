import React from "react";

const CategoryButton: React.FC<CategoryButtonProps> = ({ name }) => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 text-xs font-medium rounded-lg text-sm px-3.5 py-2 text-center m-1"
    >
      {name}
    </button>
  );
};

interface CategoryButtonProps {
  name: string;
}

export default CategoryButton;
