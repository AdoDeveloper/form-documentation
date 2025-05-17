'use client';

import CopyLink from './CopyLink';

export default function FormHeader({ title, url }) {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 rounded-t-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-2xl font-bold text-white tracking-tight">
        {title}
      </h1>
      <CopyLink url={url} />
    </header>
  );
}
