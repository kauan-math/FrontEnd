"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCurso } from "@/cursos/action";

interface Props {
  id: number;
  index: number;
  nome: string;
  onDelete: (id: number) => void;
}

export default function CursosItem({ id, index, nome, onDelete }: Props) {
  const router = useRouter();

  async function handleDelete() {
    await deleteCurso(id);
    router.refresh();
  }

  return (
    <div
      className="group flex items-center justify-between py-4 border-b transition-all duration-200"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      {/* Número + Nome */}
      <Link href={`/Curso/${id}`} className="flex items-center gap-5 flex-1 min-w-0">
        <span
          className="text-[11px] font-mono tracking-[.15em] shrink-0 transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.2)", width: "28px" }}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span
          className="text-[15px] truncate transition-colors duration-200 group-hover:text-white/90"
          style={{
            fontFamily: "'Georgia', serif",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {nome}
        </span>
      </Link>

      {/* Ações */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-4 shrink-0">
        <Link
          href={`/Curso/${id}/editar`}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150"
          style={{ color: "rgba(255,255,255,0.3)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
          title="Editar"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.213l-4.5 1 1-4.5 12.862-12.226z" />
          </svg>
        </Link>

        <button
          onClick={handleDelete}
          className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150"
          style={{ color: "rgba(255,255,255,0.3)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(239,68,68,0.85)";
            (e.currentTarget as HTMLElement).style.background = "rgba(239,68,68,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
          title="Excluir"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}