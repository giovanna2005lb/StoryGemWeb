"use client";

import Link from "next/link";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User,Button, cn, DropdownSection} from "@heroui/react";
import { LogIn, Plus } from "lucide-react";
import Image from "next/image";

interface NavBarProps {
    active: "Home" | "Criações" | "Árvore Genealógica" | "Linha do Tempo"
}

const links = [
    { label: "Home", href: "/home" },
    { label: "Criações", href: "/creations" },
    { label: "Árvore Genealógica", href: "/family_tree" },
    { label: "Linha do Tempo", href: "/timeline" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-b-4 border-[#1CCAD8] bg-[#0B132B]"; // Borda de destaque

    return (
        <nav className="flex justify-between bg-[#1C2541] h-20 items-center">
            <ul className="flex gap-12 text-3xl mx-auto h-full items-center">
                {links.map(link => (
                <li key={link.label} className={`h-full flex items-end pb-2 ${active === link.label ? classActive : ""}`}>
                    <Link href={link.href} className="px-10 py-3">
                    {link.label}
                    </Link>
                </li>
    ))}
            </ul>
        
            <div className="flex items-center gap-4">
                <Dropdown placement="bottom-end" className="bg-[#1C2541] px-2 items-center border-[#0B132B] border-5">
                    <DropdownTrigger>
                        <Image
                        className="rounded-full"
                        src="/default-icon.jpeg"
                        alt="Icone padrão"
                        width={50}
                        height={50}
                        />
                    </DropdownTrigger>
                    <DropdownMenu 
                    aria-label="Profile Actions" 
                    variant="flat" 
                    className="w-30 py-2 bg-[#1C2541]  rounded-lg shadow-lg">
                        <DropdownItem key="login">
                            <div className="flex items-center gap-2">
                                <LogIn className="w-5 h-5" />
                                <span>Login</span>
                            </div>
                        </DropdownItem>
                        <DropdownItem key="register">
                            <div className="flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                <span>Register</span>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </nav>
    );
}