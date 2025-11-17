"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (user === "admin" && pass === "123") {
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-[#15151c] p-8 rounded-2xl w-full max-w-md border border-purple-600/30 shadow-xl">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Aurora <span className="text-purple-400">Panel</span>
        </h1>

        <form onSubmit={handleLogin}>
          <Input label="Usuário" value={user} onChange={(e)=>setUser(e.target.value)} />
          <Input label="Senha" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

          <Button text="Entrar" className="mt-4 w-full" />
        </form>
      </div>
    </div>
  );
}