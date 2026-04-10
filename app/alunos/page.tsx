export default function AlunosPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black text-4xl">Lista de alunos</h1>

            <div className="flex flex-1 flex-col items-center justify-center">
                <ul className="flex flex-col justify-center items-center list-disc gap-10 border-4 border-indigo-200 border-b-indigo-500 p-10 max-w-200 flex-row flex-wrap "> 
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-yellow-500">Aluno 1</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 2</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 3</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 4</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 5</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 6</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 7</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 8</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 9</li>
                    <li className="flex h-12 w-full items-center justify-center gap-5 px-5 transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] rounded-lg border-2 p-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Aluno 10</li>
                </ul>
            </div>
            </div>
    );
}