import React from "react";

interface CardProps {
  id: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ id, title }) => (
  <a
    href="#"
    className="block max-w-lg p-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    data-testid="card"
  >
    <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
      {" "}
      {/* Apply 'truncate' class to title */}
      {title}
    </h5>
    <p className="font-normal text-lg text-gray-700 dark:text-gray-400">{id}</p>
  </a>
);

export default Card;
