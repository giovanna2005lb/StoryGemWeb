"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import CardPersonagem from "@/components/character-card";
import CharacterForm from "@/components/character-form";
import { PencilLine, Trash2 } from "lucide-react";
import { Character } from "@/lib/character";

// SERVER ACTIONS
async function getCharacters(){
  const response = await fetch("http://localhost:8080/creations"); //resposta http
  return await response.json(); //converte as respostas para json e ja as retorna
}

export default function CreationsPage() {

  const [showForm, setShowForm] = useState(false); 
  const [characters, setCharacters] = useState<any[]>([]); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [isEditing, setIsEditing] = useState(false); 
  const [editingIndex, setEditingIndex] = useState<number | null>(null); 
  
  // roda por padrão quando a pagina é iniciada
  useEffect(() => {
    async function loadCharacters(){
      const data = await getCharacters();
      setCharacters(data);
    }
    loadCharacters();
  }, []);

  // CRIAR NOVA FICHA 
  const handleAddCharacter = async (character: Character) => {
    try {
      
      if (character.imgUrl && character.imgUrl.length > 255) {
        character.imgUrl = null;
      }
      // envia as informacoes para o metodo POST (em formato JSON)
      const response = await fetch("http://localhost:8080/creations", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(character)
      });

      if(!response.ok) {
        throw new Error("Erro ao cadastrar ficha");
      }

      // após criar, roda a função puxando as infos do GET
      const updatedC = await getCharacters();

      // atualiza a lista de fichas e fecha o formulario
      setCharacters(updatedC);
      setShowForm(false);

    } catch (error) {
      console.error("Erro ao atualizar ficha:", error);
    }
  };

  const handleDeleteCharacter = async (index: number, character : Character) => {
    try {
      
      console.log("id:", character.id)
      const response = await fetch("http://localhost:8080/creations", {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(character)
      });

      if(!response.ok) {
        throw new Error("Erro ao deletar ficha");
      }

      // após criar, roda a função puxando as infos do GET
      const updatedC = await getCharacters();

      // atualiza a lista de fichas e fecha o formulario
      setCharacters(updatedC);
    } catch (error) {
      console.error("Erro ao deletar ficha:", error);
    }
    setCharacters((prevCharacters) =>
      prevCharacters.filter((_, i) => i !== index)
    );
  };

  const handleEditCharacter = (index: number) => {
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleSaveEdit = async (updatedCharacter: Character) => {

    try {
      if (editingIndex === null) return;

      const response = await fetch("http://localhost:8080/creations",
        {
          method: "PUT",
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(updatedCharacter)
        });

        if (!response.ok) throw new Error("Erro ao atualizar");

        setCharacters((prevCharacters) =>
          prevCharacters.map((char, i) => (i === editingIndex ? updatedCharacter : char))
        );
        setIsEditing(false);
        setEditingIndex(null);

    } catch (error) {
      console.error("Erro na edição:", error)
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar active="Criações" />

      {!showForm && (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {characters.length === 0 ? (
            <p className="text-center">Nenhum personagem criado ainda.</p>
          ) : (
            characters.map((character, index) => (
              <div key={index} className="relative">
                <CardPersonagem character={character} />
                {isDeleting && (
                  <button
                    onClick={() => handleDeleteCharacter(index, character)}
                    className="absolute top-0 right-0 p-2 bg-red-500 rounded-full"
                  >
                    <Trash2 />
                  </button>
                )}
                {isEditing && (
                  <button
                    onClick={() => handleEditCharacter(index)}
                    className="absolute top-0 right-0 p-2 bg-yellow-500 rounded-full"
                  >
                    <PencilLine />
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      )}

      <div className="flex justify-center gap-4 mt-auto mb-6">
        <Button
          variant="outline"
          className="border-[#1CCAD8] border-4 bg-[#362C07] w-50 h-14 text-lg"
          onClick={() => setIsEditing(!isEditing)} /* true */
        >
          Editar
        </Button>
        <Button
          variant="outline"
          className="border-4 border-[#1CCAD8] bg-[#091A09] w-54 h-16 text-lg translate-y-[-8px]"
          onClick={() => {
            setIsEditing(false);
            setShowForm(!showForm);
          }}
        >
          Adicionar
        </Button>
        <Button
          variant="outline"
          className="border-[#1CCAD8] border-4 bg-[#480F0F] w-50 h-14 text-lg"
          onClick={() => setIsDeleting(!isDeleting)} 
        >
          Deletar
        </Button>
      </div>
      
      {/* FORMULARIO DE CRIAÇÃO */}
      {showForm && (
        <div className="mt-6">
          <CharacterForm
            onSave={handleAddCharacter}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* FORMULARIO DE EDIÇÃO */}
      {isEditing && editingIndex !== null && (
        <div className="mt-6">
          <CharacterForm
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            initialValues={{ ...characters[editingIndex], id: characters[editingIndex].id }} 
          />
        </div>
      )}
    </div>
  );
}
