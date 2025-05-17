import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import HistorySection from '@/components/HistorySection';

export default async function Page({ params }) {
  const { link } = await params;

  // 1) Obtener formulario y preguntas (sections)
  const { data: form, error: formError } = await supabaseAdmin
    .from('forms')
    .select('id, questions')
    .eq('link', link)
    .single();

  if (formError || !form) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center max-w-sm p-6 bg-white rounded-xl shadow-lg border">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Formulario no encontrado
          </h2>
          <p className="text-gray-700 mb-6">
            Revisa que el enlace sea correcto o crea uno nuevo.
          </p>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    );
  }

  // 2) Cargar historial de respuestas
  const { data: history } = await supabaseAdmin
    .from('responses')
    .select('answers, created_at')
    .eq('form_id', form.id)
    .order('created_at', { ascending: false });

  const fullUrl = `${process.env.NEXT_PUBLIC_APP_URL}/forms/${link}`;

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Se delega toda la UI interactiva al Client Component */}
      <HistorySection
        formId={form.id}
        link={link}
        fullUrl={fullUrl}
        sections={form.questions}
        history={history || []}
      />
    </div>
  );
}
