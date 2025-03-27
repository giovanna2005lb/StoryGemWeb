"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import { Trash2 } from "lucide-react";

export default function PaginaLinhaDoTempo() {
  const [events, setEvents] = useState<any[]>([]); 
  const [showForm, setShowForm] = useState(false); 
  const [eventName, setEventName] = useState(""); 
  const [eventDescription, setEventDescription] = useState(""); 

  const handleAddEvent = () => {
    if (eventName && eventDescription) {
      setEvents((prevEvents) => [
        ...prevEvents,
        { id: Date.now(), name: eventName, description: eventDescription },
      ]);
      setEventName(""); 
      setEventDescription(""); 
      setShowForm(false);
    } else {
      alert("Por favor, preencha tanto o nome quanto a descrição do evento.");
    }
  };

  const handleDeleteEvent = (index: number) => {
    setEvents((prevEvents) => prevEvents.filter((_, i) => i !== index));
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("draggedEventIndex", index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); 
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    const draggedEventIndex = e.dataTransfer.getData("draggedEventIndex");
    const draggedIndex = parseInt(draggedEventIndex, 10);

    if (draggedIndex !== targetIndex) {
      const reorderedEvents = [...events];
      const [draggedEvent] = reorderedEvents.splice(draggedIndex, 1);
      reorderedEvents.splice(targetIndex, 0, draggedEvent);

      setEvents(reorderedEvents);
    }
  };

  return (
    <>
      <NavBar active="Linha do Tempo" />
      <div className="min-h-screen flex flex-col">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl">Sua Linha do Tempo</h1>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#117144]"
          >
            {showForm ? "Cancelar" : "Adicionar Evento"}
          </Button>
        </div>

        {showForm && (
          <div className="flex justify-center mb-4">
            <div className="flex flex-col gap-4 w-96">
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Nome do evento"
                className="border-2 p-2"
              />
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Descrição do evento"
                className="border-2 p-2"
              />
              <Button onClick={handleAddEvent} className="bg-[#4CAF50] text-white">
                Adicionar Evento
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-4 p-4">
          {events.length === 0 ? (
            <p className="text-center">Nenhum evento na linha do tempo.</p>
          ) : (
            events.map((event, index) => (
              <div
                key={event.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                className="bg-[#1C2541] p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">{event.name}</p>
                  <p className="text-sm">{event.description}</p>
                  <button
                    onClick={() => handleDeleteEvent(index)}
                    className="bg-[#480F0F] p-2 rounded-full"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
