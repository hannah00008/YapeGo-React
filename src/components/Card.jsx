import React from "react";
export default function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
      <div className="text-3xl">{icon}</div>
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <div className="mt-2 text-gray-600">{children}</div>
    </div>
  );
}
