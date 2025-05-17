'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Clipboard, ArrowRightCircle } from 'lucide-react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formUrl, setFormUrl] = useState('');
  const [error, setError] = useState('');
  const [linkInput, setLinkInput] = useState('');

  const createForm = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/create-form', { method: 'POST' });
      if (!res.ok) throw new Error('No se pudo crear el formulario');
      const { url } = await res.json();
      setFormUrl(url);
      setLinkInput('');
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Formulario creado',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    } catch (err) {
      setError(err.message);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    } finally {
      setLoading(false);
    }
  };

  const goToForm = () => {
    if (!linkInput.trim()) return;
    router.push(`/forms/${linkInput.trim()}`);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formUrl);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Enlace copiado',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    } catch {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Error al copiar',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
            Gestor de Formularios
          </h1>

          {/* Crear */}
          <button
            onClick={createForm}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 mb-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <PlusCircle className="h-5 w-5" />
            {loading ? 'Creando...' : 'Nuevo Formulario'}
          </button>

          {/* URL generado */}
          {formUrl && (
            <div className="w-full mb-4 p-4 bg-green-100 border border-green-300 rounded-lg flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-800 flex-1 truncate">
                  Formulario creado:{' '}
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline ml-1 hover:text-green-600"
                  >
                    {formUrl}
                  </a>
                </p>
                <button
                  onClick={copyToClipboard}
                  className="p-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  title="Copiar enlace"
                >
                  <Clipboard className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="w-full mb-4 p-3 bg-red-100 border border-red-300 rounded-md">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Acceder */}
          <div className="w-full flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="UUID del formulario"
              value={linkInput}
              onChange={e => setLinkInput(e.target.value)}
              className="flex-grow px-3 py-2 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            />
            <button
              onClick={goToForm}
              disabled={!linkInput.trim()}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              <ArrowRightCircle className="h-5 w-5" />
              Acceder
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-6 text-sm text-gray-500">
        Development by Adolfo Cortez
      </footer>
    </div>
  );
}