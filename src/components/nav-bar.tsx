import Link from "next/link";

interface NavBarProps {
    active: "Home" | "Criações" | "Árvore genealógica" | "Linha do Tempo"
}

const links = [
    { label: "Home", href: "/home" },
    { label: "Criações", href: "/creations" },
    { label: "Árvore genealógica", href: "/family_tree" },
    { label: "Linha do Tempo", href: "/timeline" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-b-4 border-teal-300 bg-indigo-950"; // Apenas a borda inferior

    return (
        <nav className="flex justify-between bg-blue-950 px-6 h-18 items-center">
            <ul className="flex gap-12 text-2xl mx-auto h-full items-center">
                {links.map(link => (
                <li key={link.label} className={`h-full flex items-end pb-2 ${active === link.label ? classActive : ""}`}>
                    <Link href={link.href} className="px-4 py-2">
                    {link.label}
                    </Link>
                </li>
    ))}
            </ul>

            <img className="size-12 rounded-full" src="http://github.com/giovanna2005lb.png" alt="" />
        </nav>
    );
}

