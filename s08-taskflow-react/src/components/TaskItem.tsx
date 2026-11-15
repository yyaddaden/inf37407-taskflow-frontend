import type { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({
  task,
  onComplete,
  onDelete,
}: TaskItemProps) {

  const isDone = task.status === "done";

  return (
    <article className={`task ${isDone ? "done" : ""}`}>
      <h3>{task.title}</h3>
      <div className="actions">
        {isDone && <span className="badge">✓ Terminée</span>}
        {!isDone && (
          <button onClick={() => onComplete(task.id)}>Terminer</button>
        )}
        <button className="danger" onClick={() => onDelete(task.id)}>
          Supprimer
        </button>
      </div>
    </article>
  );
}
