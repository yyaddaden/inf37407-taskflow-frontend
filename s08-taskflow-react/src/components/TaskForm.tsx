import { useState } from "react";
import type { SubmitEvent } from "react";

interface TaskFormProps {
  onAdd: (title: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  // Champ contrôlé : le state est la source de vérité.
  const [title, setTitle] = useState("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); // évite le rechargement de la page
    if (!title.trim()) return;
    onAdd(title.trim()); // l'action remonte vers le parent
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title">Titre de la tâche</label>
      <div className="row">
        <input
          id="task-title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Ex. : Créer une API Django"
        />
        <button type="submit" disabled={!title.trim()}>
          Ajouter
        </button>
      </div>
    </form>
  );
}