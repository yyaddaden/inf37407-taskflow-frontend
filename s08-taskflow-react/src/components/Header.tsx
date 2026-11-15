interface HeaderProps {
  remaining: number;
}

export default function Header({ remaining }: HeaderProps) {
  return (
    <header className="header">
      <h1>TaskFlow</h1>
      {/* Rendu conditionnel : liste vide et pluriel */}
      <p>
        {remaining === 0
          ? "Aucune tâche à faire 🎉"
          : `${remaining} tâche${remaining > 1 ? "s" : ""} à faire`}
      </p>
    </header>
  );
}