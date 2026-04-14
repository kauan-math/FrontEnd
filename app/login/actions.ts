"use server";

export async function loginAction(email: string, password: string) {
    const response = await fetch("http://localhost:8080/funcionarios/login", {
        method: "POST",
        body: JSON.stringify({ email, senha: password,    
        }),
        headers: {
                "Content-Type": "application/json",
            },
    }).then(res => res.json());

    console.log(response);
    
}