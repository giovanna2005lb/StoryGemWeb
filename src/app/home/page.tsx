'use client';

import NavBar from "@/components/nav-bar";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
                    <div className="w-full flex items-center justify-center mt-10">
                        <Link href="/creations">
                            <Button className="bg-[#1C2541] border-4 border-[#1CCAD8] rounded-lg text-5xl py-8 px-15 hover:opacity-90 
                        transition-opacity duration-500 ease-in-out hover:cursor-pointer">
                            <span className="text-[#1CCAD8]">START</span></Button>
                        </Link>
                    </div>

                    <div className="w-full mt-25 flex gap-10 justify-center">
                        <Card className="flex flex-col gap-5 w-80 h-90 bg-[#1C2541] border-2 border-[#5f6880] items-center">
                            <CardHeader className="flex items-center w-full pl-2">
                                <Image
                                    className="rounded-full"
                                    src="/default-icon.jpeg"
                                    alt="imagem padrao"
                                    width={70}
                                    height={70}
                                />
                                <div className="flex flex-col justify-center pl-4">
                                    <CardTitle className="text-3xl text-accent">João Carlos</CardTitle>
                                    <CardDescription className="text-xl text-[#858995]">Idade: ??</CardDescription>
                                </div>
                            </CardHeader>
                            {/* DIV DO CONTEÚDO DO CARD */}
                            <div className="w-75 h-full bg-[#2d3757] rounded-sm p-0">
                                <CardContent className="flex flex-col gap-0 grow p-2">
                                    <p className="text-accent font-bold text-lg">Descrição</p>
                                    <CardDescription className="break-words text-gray-400">
                                        Brincalhão e extrovertido
                                    </CardDescription>
                                    <p className="text-accent font-bold text-lg pt-1">Poderes</p>
                                    <CardDescription className="break-words text-gray-400">
                                        Ser engraçado
                                    </CardDescription>
                                </CardContent>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-5 w-80 h-90 bg-[#1C2541] border-2 border-[#5f6880] items-center">
                            <CardHeader className="flex items-center w-full pl-2">
                                <Image
                                    className="rounded-full"
                                    src="/default-icon.jpeg"
                                    alt="imagem padrao"
                                    width={70}
                                    height={70}
                                />
                                <div className="flex flex-col justify-center pl-4">
                                    <CardTitle className="text-3xl text-accent">Giovanna Laturague</CardTitle>
                                    <CardDescription className="text-xl text-[#858995]">Idade: 19</CardDescription>
                                </div>
                            </CardHeader>
                            {/* DIV DO CONTEÚDO DO CARD */}
                            <div className="w-75 h-full bg-[#2d3757] rounded-sm p-0">
                                <CardContent className="flex flex-col gap-0 grow p-2">
                                    <p className="text-accent font-bold text-lg">Descrição</p>
                                    <CardDescription className="break-words text-gray-400">
                                        Super gente fina e ama bater um papo
                                    </CardDescription>
                                    <p className="text-accent font-bold text-lg pt-1">Poderes</p>
                                    <CardDescription className="break-words text-gray-400">
                                        Excelente em jogos
                                    </CardDescription>
                                </CardContent>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-5 w-80 h-90 bg-[#1C2541] border-2 border-[#5f6880] items-center">
                            <CardHeader className="flex items-center w-full pl-2">
                                <Image
                                    className="rounded-full"
                                    src="/default-icon.jpeg"
                                    alt="imagem padrao"
                                    width={70}
                                    height={70}
                                />
                                <div className="flex flex-col justify-center pl-4">
                                    <CardTitle className="text-3xl text-accent">Lavinia Park</CardTitle>
                                    <CardDescription className="text-xl text-[#858995]">Idade: 21</CardDescription>
                                </div>
                            </CardHeader>
                            {/* DIV DO CONTEÚDO DO CARD */}
                            <div className="w-75 h-full bg-[#2d3757] rounded-sm p-0">
                                <CardContent className="flex flex-col gap-0 grow p-2">
                                    <p className="text-accent font-bold text-lg">Descrição</p>
                                    <CardDescription className="break-words text-gray-400">
                                        Complicada de lidar, porém ama um rolezinho insalubre
                                    </CardDescription>
                                    <p className="text-accent font-bold text-lg pt-1">Poderes</p>
                                    <CardDescription className="break-words text-gray-400">
                                        Sabe dançar macarena de cor
                                    </CardDescription>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                    
            </main>
        </div>
        </>
    )
}