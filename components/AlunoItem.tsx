import Link from "next/link";
import NavBar from "./Navigation";

interface Props {
    id: number;
    nome: string;
}

export default function AlunoItem({ id, nome }: Props) {
    return (
    <Link href={`/alunos/${id}`}>
        <li
        className="flex
            h-12
            w-full 
            items-center 
            justify-center 
            gap-5 
            px-5 
            transition-colors  
            md:w-[158px] 
            rounded-lg 
            border-2 
            p-5 
            bg-blue-500  
            delay-150 
            duration-150 
            ease-in-out 
            hover:-translate-y-1 
            hover:scale-105 
            hover:bg-violet-800"
        >
        {nome}
        </li>
    </Link>
    );
}
