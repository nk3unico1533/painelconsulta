export default function handler(req, res) {
  const { tipo, valor } = req.body;

  // Exemplo estático (troque depois pela API real)
  res.status(200).json({
    nome: "Fulano da Silva",
    cpf: valor,
    sexo: "M",
    nascimento: "1990-01-01"
  });
}