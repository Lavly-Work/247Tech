import React from "react";
import { useInView } from "react-intersection-observer";

export default function Testing() {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <main className="h-screen">
        <div className="p-10">Try</div>
        <div ref={ref} className="p-10">
          Try2{`${inView}`}
        </div>
      </main>
    </>
  );
}
