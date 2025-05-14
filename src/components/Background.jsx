import React from "react";

export default function Background() {
  return (
    <div className="fixed w-full h-screen z-10 flex flex-col justify-center items-center text-center">
      <div className="py-4 text-zinc-500 text-2xl font-semibold" aria-label="Documents">
        Documents
      </div>

      <h1 
        className="text-7xl lg:text-9xl leading-none tracking-tighter font-semibold text-zinc-700"
        aria-label="Main Heading: AVNDocs"
      >
        AVNDocs.
      </h1>
    </div>
  );
}
