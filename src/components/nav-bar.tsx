"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"  
import Link from "next/link";
import { LogIn, Plus } from "lucide-react";
import Image from "next/image";

interface NavBarProps {
    active: "Home" | "Criações" | "Árvore Genealógica" | "Linha do Tempo" | "Login" | "Register"
}

const links = [
    { label: "Home", href: "/home" },
    { label: "Criações", href: "/creations" },
    { label: "Árvore Genealógica", href: "/family_tree" },
    { label: "Linha do Tempo", href: "/timeline" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-b-4 border-[#1CCAD8] bg-[#0B132B]";

    return (
        <nav className="flex justify-between bg-[#1C2541] h-20 items-center px-6">
      <ul className="flex gap-12 text-3xl mx-auto h-full items-center">
        {links.map((link) => (
          <li
            key={link.label}
            className={`h-full flex items-end pb-2 ${active === link.label ? classActive : ""}`}
          >
            <Link href={link.href} className="px-10 py-3">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <Image
              className="rounded-full"
              src="/default-icon.jpeg"
              alt="Icone padrão"
              width={50}
              height={50}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            aria-label="Perfil"
            className="w-30 py-2 bg-[#1C2541] rounded-lg shadow-lg border-[#0B132B] border-2 mt-3"
          >
            <DropdownMenuItem key="login" className="hover:bg-[#0B132B] hover:text-[#ABEFF5]">
              <Link href="/login" className="flex items-center gap-5 text-[#ABEFF5] w-full h-full">
                <LogIn className="w-9 h-9" />
                <span className="text-xl">Login</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-[#0B132B] border-2" />
            <DropdownMenuItem key="register" className="hover:bg-[#0B132B] hover:text-[#ABEFF5]">
              <Link href="/register" className="flex items-center gap-4 text-[#ABEFF5] w-full h-full">
                <Plus className="w-9 h-9" />
                <span className="text-xl">Register</span>
              </Link>
            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
    );
}