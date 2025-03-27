'use client';

import {Button} from "@heroui/react";
import NavBar from "@/components/nav-bar";
import Image from "next/image";


export default function HomePage(){
    return (
        <>
        <div className="flex flex-col min-h-screen">
            
            <NavBar active="Home"/>

            <main className="flex-1 flex flex-col items-center pt-8 pb-10">
                    <h2 className="text-3xl text-[#647992]">"Um espaço vazio para sua mente criar"</h2>
                    <h1 className="text-6xl text-[#1CCAD8] pt-5">Construa seu próprio universo!</h1>
                    <Image
                        className="absolute top-60 right-120"
                        src="/earth.gif"
                        alt="Animação da terra girando"
                        width={130}
                        height={130}
                    />
                    <Image
                        className="absolute top-64 left-130"
                        src="/neptune.gif"
                        alt="Animação de netuno girando"
                        width={100}
                        height={100}
                    />

                    <Image
                        className="absolute brightness-500 top-27 left-110"
                        src="/shiny-stars.gif"
                        alt="Animação de estrelas brilhando"
                        width={50}
                        height={50}
                    />

                    <Image
                        className="absolute brightness-500 top-45 right-100"
                        src="/shiny-stars.gif"
                        alt="Animação de estrelas brilhando"
                        width={50}
                        height={50}
                    />

                    <Image
                        className="absolute brightness-500 top-70 left-160"
                        src="/shiny-stars.gif"
                        alt="Animação de estrelas brilhando"
                        width={50}
                        height={50}
                    />
                    
                    <Button
                    className=" absolute text-5xl py-10 px-30 top-70
                        bg-gradient-to-br from-[#1CCAD8] to-[#03383c]
                        text-white shadow-lg rounded-lg">
                    </Button>

                    <button className="relative bg-[#1C2541] rounded-lg mt-14 text-5xl py-3 px-15 hover:opacity-90 
                transition-opacity duration-500 ease-in-out">
                    <span className="text-[#1CCAD8]">START</span></button>

                    <Image
                        className="mt-20"
                        src="/form-examples.png"
                        alt="Imagem exemplo de formularios"
                        width={1100}
                        height={1100}
                    />
            </main>
        </div>
        </>
    )
}