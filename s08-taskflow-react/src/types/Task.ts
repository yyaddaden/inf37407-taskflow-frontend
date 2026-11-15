// Modèle de données partagé par tous les composants.
export type TaskStatus = "todo" | "doing" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Filtre d'affichage : "all" ou un statut.
export type Filter = "all" | "todo" | "done";