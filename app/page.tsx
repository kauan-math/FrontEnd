"use client"
import Link from "next/link";

export default function Home() {
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
            <p
              className="text-[11px] font-mono tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Sistema
            </p>
            <h1
              className="text-[32px] font-light tracking-[-0.02em] leading-tight"
              style={{
                fontFamily: "'Georgia', serif",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Gerenciador
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>
                de Alunos
              </span>
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

         
          <div className="flex flex-col gap-6">
            <p
              className="text-[10px] font-mono tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.18)" }}
            >
              Navegação
            </p>

            <nav className="flex flex-col gap-px">
              {[
                { href: "/alunos", label: "Alunos" },
                { href: "/login", label: "Login" },
                { href: "/Cursos", label: "Cursos" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between py-4 border-b transition-all duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.95)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[18px] opacity-70"></span>
                    <span
                      className="text-[15px] tracking-[0.04em] font-light"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {label}
                    </span>
                  </div>

                
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "rgba(255,255,255,0.2)" }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          <p
            className="text-[10px] font-mono tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.1)" }}
          >
            v1.0 — {new Date().getFullYear()}
          </p>
        </main>
      </div>
    </>
  );
}