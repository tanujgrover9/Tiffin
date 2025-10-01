// ------------------ src/components/Stats.tsx ------------------
import React from 'react';

type StatType = {
  label: string;
  value: string;
};

export const Stat = () => {
  const stats: StatType[] = [
    { label: 'Years exp', value: '3+' },
    { label: 'Projects', value: '12' },
    { label: 'Clients', value: '8' },
    { label: 'Open source', value: '5' },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-lg p-3 shadow text-center">
          <div className="text-xl font-semibold">{stat.value}</div>
          <div className="text-xs text-slate-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};