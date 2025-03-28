"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import CardPersonagem from "@/components/character-card";
import FormularioPersonagem from "@/components/character-form";
import { PencilLine, Trash2 } from "lucide-react";

// SERVER ACTIONS
async function getCharacters(){
  const response = await fetch("http://localhost:8080/characters"); //resposta http
  return await response.json(); //converte as respostas para json e ja as retorna
}
//n esquece o async na funcao
export default function CreationsPage() {
  // const data : Array<Character> = await getCharacters();

  const [showForm, setShowForm] = useState(false); 
  const [characters, setCharacters] = useState<any[]>([]); 
  const [isDeleting, setIsDeleting] = useState(false); 
  const [isEditing, setIsEditing] = useState(false); 
  const [editingIndex, setEditingIndex] = useState<number | null>(null); 
  
  const handleAddCharacter = (personagem: any) => {
    setCharacters((prevCharacters) => [...prevCharacters, personagem]);
    setShowForm(false); 
  };

  const handleDeleteCharacter = (index: number) => {
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

  const handleSaveEdit = (updatedCharacter: any) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char, i) => (i === editingIndex ? updatedCharacter : char))
    );
    setIsEditing(false);
    setEditingIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar active="Criações" />

      {!showForm && (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {characters.length === 0 ? (
            <p className="text-center">Nenhum personagem criado ainda.</p>
          ) : (
            characters.map((personagem, index) => (
              <div key={index} className="relative">
                <CardPersonagem character={personagem} />
                {isDeleting && (
                  <button
                    onClick={() => handleDeleteCharacter(index)}
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
          onClick={() => setIsEditing(!isEditing)} 
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

      {showForm && (
        <div className="mt-6">
          <FormularioPersonagem
            onSave={handleAddCharacter}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {isEditing && editingIndex !== null && (
        <div className="mt-6">
          <FormularioPersonagem
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
            initialValues={characters[editingIndex]} 
          />
        </div>
      )}
    </div>
  );
}
