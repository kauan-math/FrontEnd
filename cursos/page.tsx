
import Link from "next/link";
import { deleteCurso, getCursos } from "./action";
import CursosItem from "@/components/CursosItem";

export default async function Cursos() {
  const cursos = await getCursos();

  return (
    <div className="min-h-screen bg-black px-8 py-16 flex justify-center">
      <main className="w-full max-w-2xl">

        <div className="mb-10">
          <p className="text-[10px] font-mono tracking-[.25em] uppercase text-white/20 mb-1">
            Catálogo
          </p>
          <h1 className="text-4xl font-light text-white/90" style={{ fontFamily: "'Georgia', serif" }}>
            Cursos
          </h1>
        </div>

        <div className="border-t border-white/10">
          {cursos.map((curso, i) => (
            <CursosItem
              key={curso.id}
              id={curso.id}
              nome={curso.nome}
              onDelete={deleteCurso}
            />
          ))}
        </div>

        <div className="flex items-center gap-6 mt-10">
          <Link href="/Cursos/cadastro" className="flex items-center gap-2 text-[12px] font-mono tracking-[.1em] uppercase text-white/50 hover:text-white/90 border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-lg transition-all">
            + Cadastrar curso
          </Link>
          <Link href="/" className="text-[12px] font-mono tracking-[.1em] uppercase text-white/25 hover:text-white/60 transition-colors">
            ← Voltar
          </Link>
        </div>

      </main>
    </div>
  );
}