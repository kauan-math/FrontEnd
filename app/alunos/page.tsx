import AlunoItem from "@/components/AlunoItem";
import { getAlunos } from "./action";
import Link from "next/link";

export default async function AlunosPage() {
  const alunos = await getAlunos();

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
        <main className="flex w-full max-w-2xl flex-col gap-16">

          <div className="flex flex-col gap-3">
            <p
              className="text-[11px] font-mono tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Cadastro
            </p>
            <h1
              className="text-[32px] font-light tracking-[-0.02em] leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Lista de{" "}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Alunos</span>
            </h1>
          </div>

          <div
            className="w-full"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.04), transparent)",
            }}
          />

          <div className="flex flex-col">
            {alunos.length === 0 && (
              <p className="py-8 text-center text-[13px] font-mono tracking-[0.15em] text-white/20">
                Nenhum aluno cadastrado.
              </p>
            )}

            {alunos.map((aluno) => (
              <div
                key={aluno.id}
                className="flex items-center justify-between py-4 border-b border-white/[0.06] hover:border-white/[0.14] transition-colors duration-200"
              >
                <AlunoItem nome={aluno.nome} id={aluno.id} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/aluno/cadastro"
              className="group flex items-center gap-2 text-[13px] font-mono tracking-[0.12em] uppercase text-white/45 hover:text-white/90 transition-colors duration-200"
            >
              <span className="text-[16px] inline-block transition-transform duration-200 group-hover:rotate-90">
                +
              </span>
              Cadastrar aluno
            </Link>

            <div className="w-px h-4 bg-white/10" />

            <Link
              href="/"
              className="group flex items-center gap-2 text-[13px] font-mono tracking-[0.12em] uppercase text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Voltar
            </Link>
          </div>

          <p
            className="text-[10px] font-mono tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.1)" }}
          >
            
          </p>
        </main>
      </div>
    </>
  );
}