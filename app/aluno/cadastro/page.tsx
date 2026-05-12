"use client"

import { getAluno } from "../[id]/actions";
import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AlunoPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({} as Aluno);

  const initials = aluno.nome
    ? aluno.nome.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "?";

  useEffect(() => {
    getAluno(Number(id)).then((response) => setAluno(response));
  }, [id]);

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: "#000",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        }}
      />

  
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 100% 0%, rgba(255,255,255,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 0% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 py-16">
        <main className="flex w-full max-w-xl flex-col gap-16">

         
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/20">
              Aluno
            </p>
            <div className="flex items-center gap-4">
            
              <div
                className="flex items-center justify-center w-11 h-11 rounded-full text-[13px] font-mono tracking-wider text-white/50"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {initials}
              </div>
              <h1
                className="text-[32px] font-light tracking-[-0.02em] leading-tight"
                style={{ fontFamily: "'Georgia', serif", color: "rgba(255,255,255,0.9)" }}
              >
                {aluno.nome ?? (
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>Carregando…</span>
                )}
              </h1>
            </div>
          </div>

          <div
            className="w-full"
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.04), transparent)",
            }}
          />

          <div className="flex flex-col gap-px">
            {[
              { label: "Idade", value: aluno.idade },
              { label: "CPF",   value: aluno.cpf   },
              { label: "E-mail",value: aluno.email  },
            ].map(({ label, value }) =>
              value ? (
                <div
                  key={label}
                  className="flex items-baseline justify-between py-4 border-b border-white/[0.06]"
                >
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/25">
                    {label}
                  </span>
                  <span
                    className="text-[15px] font-light text-white/75"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {value}
                  </span>
                </div>
              ) : null
            )}
          </div>

          <div className="flex items-center gap-8">
            <Link
              href={`/aluno/${id}/editar`}
              className="group flex items-center gap-2 text-[13px] font-mono tracking-[0.12em] uppercase text-white/45 hover:text-white/90 transition-colors duration-200"
            >
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213l-4.5 1 1-4.5 12.862-12.226z" />
              </svg>
              Editar
            </Link>

            <div className="w-px h-4 bg-white/10" />

            <Link
              href="/alunos"
              className="group flex items-center gap-2 text-[13px] font-mono tracking-[0.12em] uppercase text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Voltar
            </Link>
          </div>

        
          <p className="text-[10px] font-mono tracking-[0.2em] text-white/10">
            v1.0 — {new Date().getFullYear()}
          </p>

        </main>
      </div>
    </>
  );
}