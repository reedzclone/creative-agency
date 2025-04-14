// components/StatsCounter/StatsCounter.jsx
import React, { useState, useEffect } from "react";
import "./StatsCounter.scss";

const StatsCounter = () => {
  const stats = [
    { label: "Projects", target: 98 },
    { label: "People", target: 65 },
    { label: "Years", target: 10 },
    { label: "Offices", target: 15 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const increment = 10; // How often to update (ms)
    const steps = duration / increment;

    const intervals = stats.map((stat, index) => {
      const stepValue = stat.target / steps;

      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.target) {
            newCounts[index] = Math.min(
              stat.target,
              newCounts[index] + stepValue
            );
          }
          return newCounts;
        });
      }, increment);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="stats-counter">
      {stats.map((stat, index) => (
        <div key={stat.label} className="stat-item">
          <span className="stat-label">{stat.label}</span>
          <span className="stat-number">{Math.round(counts[index])}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
