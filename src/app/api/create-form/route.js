// src/app/api/create-form/route.js
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseAdmin'
import { sections } from '@/lib/questions'
import { v4 as uuidv4 } from 'uuid'

export async function POST() {
  // Genera un link único para el formulario
  const link = uuidv4()

  // Inserta en Supabase, guardando toda la estructura de secciones y preguntas
  const { error } = await supabaseAdmin
    .from('forms')
    .insert([{ link, questions: sections }])

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  // Construye la URL completa al formulario recién creado
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/forms/${link}`

  return NextResponse.json({ url })
}