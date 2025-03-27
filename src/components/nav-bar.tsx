import Link from "next/link";
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
            <Image
                className="absolute rounded-full right-6"
                src="/default-icon.jpeg"
                alt="Icone padrão"
                width={50}
                height={50}
            />
        </nav>
    );
}

