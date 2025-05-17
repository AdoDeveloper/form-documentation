'use client';

import Link from 'next/link';
import FormHeader from './FormHeader';
import Form from './Form';
import HistoryButton from './HistoryButton';

/**
 * Recibe por props todo lo necesario para renderizar:
 * - formId: identificador
 * - link: string del UUID
 * - fullUrl: URL completa del formulario
 * - sections: las preguntas (sections)
 * - history: array de { answers, created_at }
 */
export default function HistorySection({ formId, link, fullUrl, sections, history }) {
  // Preparamos las últimas respuestas para inicializar el Form
  const latest = history?.[0]?.answers || {};

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border">
      {/* Header con copiar enlace */}
      <FormHeader title="Formulario de Documentación" url={fullUrl} />

      {/* ID + Botón Ver historial */}
      <div className="p-6 flex justify-between items-center bg-gray-50 border-t">
        <div className="text-sm text-gray-700">
          <strong>ID del formulario:</strong>{' '}
          <code className="bg-gray-100 p-1 rounded">{link}</code>
        </div>
        <HistoryButton history={history} questions={sections} />
      </div>

      {/* Formulario interactivo */}
      <main className="p-8">
        <Form
          formId={formId}
          sections={sections}
          initialAnswers={latest}
        />
      </main>

      <footer className="bg-gray-50 px-6 py-4 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Volver al inicio
        </Link>
      </footer>
    </div>
  );
}
