"use client";

import NavBar from "@/components/nav-bar";
import {Button} from "@heroui/react";

export default function ManagerCharacterPage(){
    return (
        <>
            <div>
                <NavBar active="Criações"/>
                <main className="flex justify-center gap-10">
                    <Button className="bg-[#091A09] hover:bg-[#0c2b0c] border-4 border-[#116A71] rounded-2xl flex justify-center items-center text-2xl h-20 w-40">
                    Adicionar
                    </Button>
                </main>
            </div>
        </>
    )
}