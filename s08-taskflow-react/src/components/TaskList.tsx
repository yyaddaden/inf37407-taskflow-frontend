import TaskItem from "./TaskItem";
import type { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskList({
  tasks,
  onComplete,
  onDelete,
}: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
