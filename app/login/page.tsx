import LoginForm from "@/components/LoginForms";
import { loginAction } from "./actions";

export default function LoginPage() {
    return(
        <div>
            <h1 className="
            flex 
            text-3xl 
            font-mono 
            mb-50 
            flex-1 
            py-10 
            justify-center 
            text-center 
            top-10 
            underline decoration-blue-500/70">
            Login
            </h1>

            <LoginForm onSend={loginAction}/>

        </div>
    )}