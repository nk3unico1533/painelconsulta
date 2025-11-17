export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Bem-vindo ao <span className="text-purple-400">Aurora Panel</span>
      </h1>

      <a href="/consulta" className="underline text-purple-300">
        Ir para Consultas →
      </a>
    </div>
  );
}