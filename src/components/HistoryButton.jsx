'use client';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function HistoryButton({ history, questions }) {
  const showHistory = () => {
    // Construye un HTML legible con fecha y cada pregunta/respuesta
    const html = history
      .map(entry => {
        const date = new Date(entry.created_at).toLocaleString();
        const items = Object.entries(entry.answers)
          .map(([id, ans]) => {
            const q = questions.find(q => q.id === id);
            const text = Array.isArray(ans) ? ans.join(', ') : ans;
            return `<li><strong>${q?.question || id}:</strong> ${text}</li>`;
          })
          .join('');
        return `
          <div style="margin-bottom:1rem; text-align:left;">
            <strong>${date}</strong>
            <ul style="padding-left:1.2rem;">${items}</ul>
          </div>
        `;
      })
      .join('');

    Swal.fire({
      title: 'Historial de respuestas',
      html,
      width: 600,
      scrollbarPadding: false,
      confirmButtonText: 'Cerrar',
    });
  };

  return (
    <button
      onClick={showHistory}
      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 cursor-pointer"
    >
      Ver historial
    </button>
  );
}
