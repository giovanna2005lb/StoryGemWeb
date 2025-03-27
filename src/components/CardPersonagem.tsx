import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface CardPersonagemProps {
  personagem: {
    nome: string;
    idade: string;
    descricao: string;
    poderes: string;
    imagem: File | null;
  };
}

const CardPersonagem = ({ personagem }: CardPersonagemProps) => {
  const { nome, idade, descricao, poderes, imagem } = personagem;

  const imagemSrc = imagem ? URL.createObjectURL(imagem) : "/default-icon.jpeg";

  return (
    <Card className="flex flex-col gap-4 w-80 p-4 bg-[#1C2541] text-white">
      <CardHeader className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image src={imagemSrc} alt={nome} width={64} height={64} />
        </div>
        <div className="flex flex-col justify-center">
          <CardTitle>{nome}</CardTitle>
          <CardDescription>{idade} anos</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-1 grow">
        <p><strong>Descrição:</strong></p>
        <CardDescription>{descricao}</CardDescription>
        <p><strong>Poderes:</strong></p>
        <CardDescription>{poderes}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CardPersonagem;
