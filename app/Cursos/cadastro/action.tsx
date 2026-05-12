"use server";

import { cookies } from "next/headers";

interface createCursos {
    nome: string;
    professor: string;
    descricao: string;
    cargaHoraria: number;
}

export async function createCurso(curso: createCursos) {
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch("http://127.0.0.1:8080/cursos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curso),
    });

    if (!response.ok) {
      return "Erro ao cadastrar curso";
    }

    return null;

  } catch (e) {
    console.error(e);
    return "Erro ao cadastrar curso";
  }
}