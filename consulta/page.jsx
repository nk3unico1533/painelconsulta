"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Select from "@/components/Select";
import Card from "@/components/Card";

export default function Consulta() {
  const [tipo, setTipo] = useState("cpf");
  const [valor, setValor] = useState("");
  const [result, setResult] = useState(null);

  async function consultar() {
    const res = await fetch("/api/consulta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo, valor })
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <div className="max-w-xl mx-auto mt-16 bg-[#15151c] p-8 rounded-2xl border border-purple-600/30 shadow-xl">

      <h2 className="text-2xl font-semibold mb-6">
        🔍 Consulta
      </h2>

      <Select
        label="Tipo"
        options={[
          { value: "cpf", label: "Consulta CPF" },
          { value: "nome", label: "Consulta Nome" },
          { value: "full", label: "Full" }
        ]}
        value={tipo}
        onChange={(e)=>setTipo(e.target.value)}
      />

      <Input
        label="Valor"
        value={valor}
        onChange={(e)=>setValor(e.target.value)}
      />

      <Button text="Consultar" className="mt-4 w-full" onClick={consultar} />

      {result && (
        <div className="mt-8">
          <Card title="Resultado">
            <p><span className="font-medium text-purple-300">Nome:</span> {result.nome}</p>
            <p><span className="font-medium text-purple-300">CPF:</span> {result.cpf}</p>
          </Card>
        </div>
      )}
    </div>
  );
}