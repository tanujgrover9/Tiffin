import React from 'react';
export const Detail = ({ label, value }: { label: string; value: string }) => (
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">{label[0]}</div>
<div>
<div className="text-sm font-medium">{label}</div>
<div className="text-xs text-slate-500">{value}</div>
</div>
</div>
);