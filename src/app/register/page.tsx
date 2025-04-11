"use client";
import { useState } from "react";
import NavBar from "@/components/nav-bar";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  
  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password: pwd,
        }),
      });
  
      if (res.ok) {
        const msg = await res.text();
        alert("Usuário registrado com sucesso!");
        router.push("/login");
      } else {
        const text = await res.text();
        alert("Erro ao registrar: " + (text || "Erro desconhecido"));
      }
    } catch (err) {
      if (err instanceof Error) {
        alert("Erro na requisição: " + err.message);
      } else {
        alert("Erro na requisição desconhecido.");
      }
    }
  };
  

  return (
    <>
      <NavBar active="Register" />
      <main className="flex flex-col items-center mt-20 bg-[#0B132B] text-white px-4 min-h-[calc(100vh-5rem)]">
        <h1 className="text-4xl mb-8">Criar Conta</h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Nome"
            className="p-3 rounded bg-[#1C2541] border border-[#1CCAD8]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#1C2541] border border-[#1CCAD8]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="p-3 rounded bg-[#1C2541] border border-[#1CCAD8]"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <button
            onClick={handleRegister}
            className="bg-[#1CCAD8] hover:bg-[#0B132B] hover:text-[#ABEFF5] text-[#0B132B] font-bold py-2 rounded"
          >
            Criar Conta
          </button>
        </div>
      </main>
    </>
  );
}
