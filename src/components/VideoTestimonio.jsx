import React from "react";
export default function VideoTestimonio({ src, nombre }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      <video controls className="rounded-xl w-full">
        <source src={src} type="video/mp4" />
      </video>
      <p className="mt-2 font-semibold">{nombre}</p>
    </div>
  );
}
