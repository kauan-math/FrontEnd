"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Aluno } from "@/interfaces/alunos";

interface CreateAluno {
    nome: string;
    idade: number;
    cpf: number;
    email: string;
}

export async function getAlunos(id: number): Promise<Aluno[]> {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/alunos/`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        next: { tags: ["listar"] },
    });

    if (response.status === 401) {
        redirect("/login");
    }

    const data = await response.json();
    return data;
}

export async function createAluno(aluno: CreateAluno) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get("access_token")?.value;

    const response = await fetch(`http://localhost:8080/alunos`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(aluno),
    });

    const data = await response.json();

    if (response.status === 201) {
        revalidateTag("listar", "max");
        return;
    }

    if (response.status === 401) {
        redirect("/login");
    }

    return data.message;
}