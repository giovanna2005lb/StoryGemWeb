import Link from "next/link";

interface NavBarProps {
    active: "Home" | "Criações" | "Arvore genealógica" | "Linha do Tempo"
}

const links = [
    { label: "Home", href: "/home" },
    { label: "Criações", href: "/creations" },
    { label: "Arvore genealógica", href: "/family_tree" },
    { label: "Linha do Tempo", href: "/timeline" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-separate border-spacing-10 border-b-4 border-teal-300 relative" // py-2 px-4 bg-indigo-950 rounded-lg

    return (
        <nav className="flex justify-between bg-blue-950 px-6 h-22 items-center content-center">
            <ul className="flex gap-12 text-2xl mx-auto">
                {links.map(link =>
                (
                    <li className={active === link.label ? classActive : ""}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>

                )
                )}
            </ul>
            <img className="size-13 rounded-full  " src="http://github.com/giovanna2005lb.png" alt="" />
        </nav>
    )
}
