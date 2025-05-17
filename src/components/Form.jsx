'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function Form({ formId, sections, initialAnswers }) {
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [currentSec, setCurrentSec] = useState(0);

  useEffect(() => {
    setAnswers(initialAnswers || {});
  }, [initialAnswers]);

  const totalSecs = sections.length;
  const sec = sections[currentSec];

  const shouldShow = q => {
    if (!q.dependsOn) return true;
    const { parentId, value } = q.dependsOn;
    const parentVal = answers[parentId];
    if (value == null) return parentVal != null && parentVal !== '';
    if (Array.isArray(parentVal)) return parentVal.includes(value);
    return parentVal === value;
  };

  const handleChange = (id, value) =>
    setAnswers(prev => ({ ...prev, [id]: value }));

  const handleCheckbox = (id, option) => {
    const prev = Array.isArray(answers[id]) ? answers[id] : [];
    handleChange(
      id,
      prev.includes(option)
        ? prev.filter(v => v !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { isConfirmed } = await Swal.fire({
      title: '¿Enviar respuestas?',
      text: 'Verifica tus respuestas antes de confirmar.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, enviar',
      cancelButtonText: 'Cancelar',
    });
    if (!isConfirmed) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId, answers }),
      });
      if (!res.ok) throw new Error('Error al enviar');
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Enviado correctamente',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (err) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleGenerateTxt = () => {
    const lines = [];
    sections.forEach((section, si) => {
      lines.push(`=== Sección ${si + 1}: ${section.title} ===`);
      section.questions.forEach(q => {
        if (!shouldShow(q)) return;
        const ans = answers[q.id];
        const text = ans == null
          ? '[sin respuesta]'
          : Array.isArray(ans) ? ans.join(', ') : ans;
        lines.push(`${q.question}: ${text}`);
      });
      lines.push('');
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `respuestas_${formId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const progress = Math.round(((currentSec + 1) / totalSecs) * 100);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto"
    >
      {/* Progreso */}
      <div className="mb-6">
        <div className="flex justify-between text-gray-700 font-medium mb-1">
          <span>Sección {currentSec + 1} de {totalSecs}</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{sec.title}</h2>

      {/* Preguntas */}
      <div className="space-y-8">
        {sec.questions.map((q, idx) =>
          shouldShow(q) && (
            <div
              key={q.id}
              className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center mb-3">
                {/* Círculo ajustado */}
                <div className="flex-shrink-0 h-8 w-8 bg-blue-700 text-white font-semibold text-sm rounded-full flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {q.question}
                </h3>
              </div>
              {q.note && <p className="text-sm text-gray-600 mb-4">{q.note}</p>}

              {q.type === 'text' && (
                <textarea
                  rows={5}
                  placeholder="Escribe tu respuesta..."
                  className="w-full bg-white border border-gray-300 rounded-md p-3 focus:ring-4 focus:ring-blue-600"
                  value={answers[q.id] || ''}
                  onChange={e => handleChange(q.id, e.target.value)}
                />
              )}

              {q.type === 'radio' && (
                <div className="space-y-3">
                  {q.options.map(opt => (
                    <label key={opt} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={answers[q.id] === opt}
                        onChange={() => handleChange(q.id, opt)}
                        className="h-5 w-5 text-blue-700 border-gray-400 focus:ring-blue-600 cursor-pointer"
                      />
                      <span className="text-gray-800">{opt}</span>
                    </label>
                  ))}
                </div>
              )}

              {q.type === 'checkbox' && (
                <div className="space-y-3">
                  {q.options.map(opt => (
                    <label key={opt} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={Array.isArray(answers[q.id]) && answers[q.id].includes(opt)}
                        onChange={() => handleCheckbox(q.id, opt)}
                        className="h-5 w-5 text-blue-700 border-gray-400 focus:ring-blue-600 cursor-pointer"
                      />
                      <span className="text-gray-800">{opt}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* Navegación y acciones */}
      <div className="mt-8 flex justify-between items-center">
        <button
          type="button"
          onClick={() => setCurrentSec(i => Math.max(i - 1, 0))}
          disabled={currentSec === 0}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 disabled:opacity-50 cursor-pointer"
        >
          Anterior
        </button>

        <div className="space-x-4">
          {currentSec === totalSecs - 1 && (
            <button
              type="button"
              onClick={handleGenerateTxt}
              className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 cursor-pointer"
            >
              Generar TXT
            </button>
          )}
          {currentSec < totalSecs - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentSec(i => i + 1)}
              className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 cursor-pointer"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className={`px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 ${
                submitting ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {submitting ? 'Enviando...' : 'Enviar respuestas'}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}