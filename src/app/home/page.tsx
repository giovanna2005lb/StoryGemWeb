import NavBar from "@/components/nav-bar";

export default function HomePage(){
    return (
        <>
        <div className="flex flex-col min-h-screen">
            
            <NavBar active="Home"/>

            <main className="flex-1 flex flex-col items-center pt-6">
                    <h2 className="text-2xl text-[#647992]">"Um espaço vazio para sua mente criar"</h2>
                    <h1 className="text-6xl text-[#1CCAD8] pt-4">Construa seu próprio universo!</h1>
            </main>
        </div>
        </>
    )
}