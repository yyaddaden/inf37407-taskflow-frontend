import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import type { Task } from "./types/Task";

import { useEffect, useState } from "react";

const STORAGE_KEY = "taskflow.tasks";

const initialTasks: Task[] = [
  { id: 1, title: "Créer une API Django", status: "todo" },
  { id: 2, title: "Développer le frontend React", status: "doing" },
  { id: 3, title: "Écrire des tests unitaires", status: "done" },
];

function loadTasks(): Task[] {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : initialTasks;
}

export default function App() {
  // State : App centralise les données partagées.
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  const remaining = tasks.filter((task) => task.status !== "done").length;

  // Effets : synchronisation avec des systèmes externes.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    document.title = `TaskFlow (${remaining})`;
  }, [remaining]);

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
      <Header remaining={remaining} />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </main>
  );
}
