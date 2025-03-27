import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface FormularioPersonagemProps {
  onSave: (personagem: any) => void;
  onCancel: () => void;
  initialValues?: any; // Passa o personagem a ser editado, se existir
}

const FormularioPersonagem = ({
  onSave,
  onCancel,
  initialValues,
}: FormularioPersonagemProps) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [poderes, setPoderes] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  useEffect(() => {
    if (initialValues) {
      setNome(initialValues.nome);
      setIdade(initialValues.idade);
      setDescricao(initialValues.descricao);
      setPoderes(initialValues.poderes);
      setImagem(initialValues.imagem || null); 
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      nome,
      idade,
      descricao,
      poderes,
      imagem,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border-2 p-2"
      />
      <input
        type="text"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        className="border-2 p-2"
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="border-2 p-2"
      />
      <input
        type="text"
        placeholder="Poderes"
        value={poderes}
        onChange={(e) => setPoderes(e.target.value)}
        className="border-2 p-2"
      />
      <input
        type="file"
        onChange={(e) => setImagem(e.target.files ? e.target.files[0] : null)}
        className="border-2 p-2"
      />
      <div className="flex gap-4 mt-4">
        <Button type="submit" variant="outline" className="bg-[#116A71] text-white">
          Salvar
        </Button>
        <Button
          type="button"
          variant="outline"
          className="bg-[#F44336] text-white"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default FormularioPersonagem;
