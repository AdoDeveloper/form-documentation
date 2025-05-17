// src/app/api/submit-response/route.js

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'

export async function POST(request) {
  try {
    const { formId, answers } = await request.json()

    // Validación básica
    if (!formId || typeof answers !== 'object') {
      return NextResponse.json(
        { error: 'Parámetros inválidos (formId y answers son requeridos)' },
        { status: 400 }
      )
    }

    // Inserta la respuesta y devuelve el id y timestamp
    const { data, error } = await supabaseAdmin
      .from('responses')
      .insert([{ form_id: formId, answers }])
      .select('id, created_at')
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(
      {
        success: true,
        responseId: data.id,
        createdAt: data.created_at
      },
      { status: 201 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: err.message || 'Error interno del servidor' },
      { status: 500 }
    )
  }
}