import React, { useEffect, useState } from "react";

const StatsCounter = () => {
  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end]);

    return (
      <h2 className="text-4xl font-bold text-white">
        {count}<span className="text-blue-200">+</span>
      </h2>
    );
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #084298, #0B5ED7)",
      }}
      className="py-14"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div className="border-r border-[#1e6fd9] last:border-none">
          <div className="text-5xl mb-2 text-blue-200">🎓</div>
          <Counter end={600} />
          <p className="uppercase tracking-widest text-sm text-blue-100 mt-1">
            Students
          </p>
        </div>

        <div className="border-r border-[#1e6fd9] last:border-none">
          <div className="text-5xl mb-2 text-blue-200">🏫</div>
          <Counter end={40} />
          <p className="uppercase tracking-widest text-sm text-blue-100 mt-1">
            Hi-tech Classrooms
          </p>
        </div>

        <div>
          <div className="text-5xl mb-2 text-blue-200">👨‍🏫</div>
          <Counter end={50} />
          <p className="uppercase tracking-widest text-sm text-blue-100 mt-1">
            Best Faculty
          </p>
        </div>

      </div>
    </div>
  );
};

export default StatsCounter;
