import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import type { Task } from "./types/Task";

import { useState } from "react";

const initialTasks: Task[] = [
  { id: 1, title: "Créer une API Django", status: "todo" },
  { id: 2, title: "Développer le frontend React", status: "doing" },
  { id: 3, title: "Écrire des tests unitaires", status: "done" },
];

export default function App() {
  // State : App centralise les données partagées.
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, status: "todo" };
    setTasks((prev) => [...prev, newTask]);
  };

  const completeTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: "done" } : task)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <main className="app">
      <Header />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </main>
  );
}
