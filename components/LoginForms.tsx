"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navigation";

interface Props {
    onSend: (email: string, password: string) => Promise<void | string>;
}

export default function LoginForm({onSend}: Props) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit() {
        const response = await onSend(email, password);
        if (response) {
            alert(response);
            return;
        }
        console.log(response);
        router.push("/")
    }


    
return(

<div  className="
    flex flex-col flex-1 
    justify-center 
    items-center 
    gap-2">
        <Navbar />

                <input className="
                border-2 
                rounded-xs 
                border-amber-50/50 p-1
                shadow-2xl
                shadow-violet-500 
                hover:shadow-fuchsia-500"
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

                <input className="
                border-2 
                rounded-xs 
                border-amber-50/50 
                p-1 
                shadow-2xl
                shadow-violet-500 
                hover:shadow-fuchsia-500"
                type="password"
                placeholder="Senha"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}  />

                <button className="
                bg-blue-500 
                text-white 
                px-4 
                py-2 
                rounded 
                hover:bg-purple-800 
                hover:scale-105 
                shadow-x1 
                shadow-violet-200/25 
                transition 
                duration-150 
                ease-in-out
                cursor-pointer
                "
                onClick={handleSubmit}
                >
                Entrar
                </button>
            </div>
    
    )
}