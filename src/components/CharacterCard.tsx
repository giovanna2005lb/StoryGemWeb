import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Character {
  name: string;
  age: string;
  description: string;
  powers: string;
  image: File | null;
}

interface CharacterProps {
  character : Character
}

export default function CharacterCard({character} : CharacterProps){
  
  // Condicao para a insercao de imagem
  const imgSrc = character.image ? URL.createObjectURL(character.image) : "/default-icon.jpeg";

  return (
    <>
    <h1>teste</h1>
    <Card className="flex flex-col gap-5 w-80 h-90 bg-[#1C2541] border-2 border-[#5f6880] items-center">
      <CardHeader className="flex items-center w-full pl-2">
          <Image
            className="rounded-full"
            src={imgSrc}
            alt={character.name}
            width={70}
            height={70}
          />
          <div className="flex flex-col justify-center pl-4">
            <CardTitle className="text-3xl text-accent">{character.name}</CardTitle>
            <CardDescription className="text-xl text-[#858995]">{character.age}</CardDescription>
         </div>
      </CardHeader>
      {/* DIV DO CONTEÚDO DO CARD */}
      <div className="w-75 h-full bg-[#2d3757] rounded-sm p-0">
        <CardContent className="flex flex-col gap-0 grow p-2">
          <p className="text-accent font-bold text-lg">Descrição</p>
          <CardDescription className="break-words text-gray-400">
            {character.description}
          </CardDescription>
          <p className="text-accent font-bold text-lg pt-1">Poderes</p>
          <CardDescription className="break-words text-gray-400">
            {character.powers}
          </CardDescription>
      </CardContent>
      </div>
    </Card>

    
    </>
    
  )
}
