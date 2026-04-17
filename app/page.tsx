import Navbar from "@/components/Navigation";
import { TooltipFrase } from "@/components/Frases";

export default function Home() {
  return (
    <div className="
    flex 
    flex-col 
    flex-1 
    bg-zinc-50 
    font-sans 
    dark:bg-black">
        <Navbar />
        <div className="
        flex 
        flex-col 
        gap-6 
        text-center 
        w-full 
        mt-20">
          <h1 className="
          text-4xl 
          font-mono 
          gap-2 
          w-full
          flex 
          justify-center
          
          ">
            Gerenciamento de <span className="text-blue-500">Alunos</span>
          </h1>
          <p className="
          max-w-md 
          text-lg 
          leading-8 
          text-zinc-600 
          dark:text-zinc-400">
            {" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="
              font-medium 
              text-zinc-950 
              dark:text-zinc-50"
            ></a>{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="
              font-medium 
              text-zinc-950 
              dark:text-zinc-50"
            ></a>{" "}
          </p>
        </div>
        <div className="
        flex 
        flex-col 
        gap-4 
        text-base 
        font-medium 
        sm:flex-row"
        ></div>
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
  <TooltipFrase
    fraseClassName="text-yellow-400 font-bold italic text-base"
  >
    <span className="cursor-pointer text-2xl">✨ Dica</span>
  </TooltipFrase>
</div>
    </div>
  );
}
