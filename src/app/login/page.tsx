"use client";
import { useState } from "react";
import NavBar from "@/components/nav-bar";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: pwd }),
    });
  
    if (res.ok) {
      const data = await res.text();
      console.log("Login successful", data);
      router.push("/home");
    } else {
      alert("Login falhou");
    }
  };
  

  return (
    <>
      <NavBar active="Login" />
      <main className="flex flex-col items-center mt-20 bg-[#0B132B] text-white px-4 min-h-[calc(100vh-5rem)]">
        <h1 className="text-4xl mb-8">Entrar</h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
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
            onClick={handleLogin}
            className="bg-[#1CCAD8] hover:bg-[#0B132B] hover:text-[#ABEFF5] text-[#0B132B] font-bold py-2 rounded"
          >
            Entrar
          </button>
        </div>
      </main>
    </>
  );
}
