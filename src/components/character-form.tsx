import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CharacterFormProps {
  onSave: (personagem: any) => void;
  onCancel: () => void;
  initialValues?: any; // Passa o personagem a ser editado, se existir
}

export default function CharacterForm({ onSave, onCancel, initialValues}: CharacterFormProps) {
  
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [powers, setPowers] = useState("");
    const [imgUrl, setImgUrl] = useState<string>(initialValues?.imgUrl || "");

    useEffect(() => {
      if (initialValues) {
        setName(initialValues.name);
        setAge(initialValues.age);
        setDescription(initialValues.description);
        setPowers(initialValues.powers);
        setImgUrl(initialValues.imgUrl || null);
      }
    }, [initialValues]);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        try {
          const base64Image = await fileToBase64(file);
          setImgUrl(base64Image); // Definir a URL base64 da imagem
        } catch (error) {
          console.error("Erro ao converter imagem:", error);
        }
      }
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault(); //impede o comportamento padrao de recarregar a pagina

      if (!name || !age || !description || !powers) {
        alert("Preencha todos os campos obrigatórios!");
        return;
      }
      onSave({
        id: initialValues?.id,
        name,
        age,
        description,
        powers,
        imgUrl
      });
    };

    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
      });
    };

    return (
      <form onSubmit={handleSubmit} className=" border-1 flex flex-col gap-2 p-4  mb-30 mx-80 rounded-2xl bg-[#1C2541]">
        <span className="text-xl">Nome *</span>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 p-2 rounded-2xl"
        />

        <span className="text-xl">Idade *</span>
        <input
          type="text"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border-2 p-2 rounded-2xl"
        />

        <span className="text-xl">Descrição *</span>
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 p-2 rounded-2xl"
        />

        <span className="text-xl">Poderes *</span>
        <input
          type="text"
          placeholder="Poderes"
          value={powers}
          onChange={(e) => setPowers(e.target.value)}
          className="border-2 p-2 rounded-2xl"
        />

        <span className="text-xl">Imagem</span>
        <input
          type="file"
          onChange={handleImageChange}
          className="border-2 p-2 rounded-2xl"
        />

        <div className="flex gap-4 mt-4">
          <Button 
            type="submit"
            variant="outline"
            className="bg-[#116A71]
            text-white text-lg"
          >
            Salvar
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-[#F44336] text-white text-lg"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        </div>
      </form>
    );
  };
