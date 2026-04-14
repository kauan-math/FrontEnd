import AlunoItem from "@/components/AlunoItem";

export default async function AlunosPage() {
    const alunos = await fetch("http://localhost:8080/alunos").then((res) => res.json());

    console.log(alunos);
    
    return (
        <div className="
        flex flex-col flex-1 
        items-center
        justify-center
        bg-zinc-50
        font-sans
        dark:bg-black">
            <h1 className="
            flex flex-col flex-1
            items-center
            justify-center
            bg-zinc-50 
            font-sans 
            dark:bg-black 
            text-4xl">Lista de alunos</h1>

            <div className="
            flex flex-1 flex-col
            items-center 
            justify-center">
                <ul className="
                flex 
                justify-center 
                items-center 
                list-disc 
                gap-10 
                border-4 
                border-indigo-200 
                border-b-indigo-500 
                p-10 
                max-w-200 
                flex-row 
                flex-wrap "> 
                    <AlunoItem id={1} nome="Kauan" />
                    <AlunoItem id={2} nome="Pedro" />
                    <AlunoItem id={3} nome="Mucham" />
                    <AlunoItem id={4} nome="Anthony" />
                    <AlunoItem id={5} nome="Vinicius" />
                    <AlunoItem id={6} nome="Alex" />
                    <AlunoItem id={7} nome="Juan" />
                    <AlunoItem id={8} nome="Nathan" />
                    <AlunoItem id={9} nome="Eduardo" />
                    <AlunoItem id={10} nome="Sr. Jujutsu Kaizen" />
                </ul>
            </div>
        </div>
    );
}