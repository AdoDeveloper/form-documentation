'use client';

import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';

export default function CopyLink({ url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('❌ No se pudo copiar al portapapeles');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        copied
          ? 'bg-green-600 text-white shadow-md'
          : 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100'
      }`}
    >
      {copied ? <Check size={16} /> : <Clipboard size={16} />}
      <span>{copied ? '¡Copiado!' : 'Copiar enlace'}</span>
    </button>
  );
}