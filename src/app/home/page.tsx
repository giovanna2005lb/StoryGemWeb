'use client';

import NavBar from "@/components/nav-bar";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CharacterCard from "@/components/character-card";
import { useEffect, useState } from "react";
import { Character } from "@/lib/character";

export default function HomePage(){
    
    const [characters, setCharacters] = useState<Character[]>([]); 
    
    useEffect(() => {
        async function getCharacters() {
            const response = await fetch("http://localhost:8080/home");
            const data =  await response.json();
            setCharacters(data);
        }
        getCharacters();
    }, []);

    return (

        <>
        <div className="flex flex-col min-h-screen">
            
            <NavBar active="Home"/>

            <main className="flex-1 flex flex-col items-center pt-8 pb-10">
                    <h2 className="text-3xl text-[#647992]">"Um espaço vazio para sua mente criar"</h2>
                    <h1 className="text-6xl text-[#1CCAD8] pt-5">Construa seu próprio universo!</h1>
                    <div className="flex items-center justify-center gap-19">
                        <Image
                            src="/earth.gif"
                            alt="Animação da terra girando"
                            width={130}
                            height={130}
                        />
                        <div className="w-full flex items-center justify-center mt-10">
                            <Link href="/creations">
                                <Button className="bg-[#1C2541] border-4 border-[#1CCAD8] rounded-lg text-5xl py-8 px-15 hover:opacity-90 
                            transition-opacity duration-500 ease-in-out hover:cursor-pointer">
                                <span className="text-[#1CCAD8]">START</span></Button>
                            </Link>
                        </div>
                        <Image
                            src="/neptune.gif"
                                alt="Animação de netuno girando"
                            width={100}
                            height={100}
                        />
                    </div>

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

                    <div className="w-full mt-25 flex gap-10 justify-center">
                        {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                        ))}
                    </div>
                    
            </main>
        </div>
        </>
    )
}