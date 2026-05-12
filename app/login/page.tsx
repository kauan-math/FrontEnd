import LoginForm from "@/components/LoginForms";
import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#08080f]
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          w-full
          max-w-md
        "
      >
        <div
          className="
            group
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-8
            backdrop-blur-md
            transition-all
            duration-300
            ease-out
            hover:border-blue-500/30
            hover:shadow-lg
            hover:shadow-blue-500/10
          "
        >
          <div className="flex flex-col items-center mb-8">
            <div
              className="
                w-16
                h-16
                rounded-full
                bg-blue-900/40
                border
                border-blue-500/30
                flex
                items-center
                justify-center
                text-blue-300
                text-2xl
                font-medium
                mb-4
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              🔐
            </div>

            <h1
              className="
                text-3xl
                font-medium
                text-zinc-100
                underline
                decoration-blue-500/70
              "
            >
              Login
            </h1>

            <p className="text-zinc-400 text-sm mt-2">
              Entre com sua conta para continuar
            </p>
          </div>

          <LoginForm onSend={loginAction} />
        </div>
      </div>
    </main>
  );
}