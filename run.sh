#!/bin/bash

echo "Baixando painel..."
curl -L https://files-chatgpt.sandbox.googleusercontent.com/file/MTB-nRG6DydPRe8xNwJe0qggzJExNEonAoK1SRmyliY=/neon-quantum-deploy.zip -o neon.zip

echo "Extraindo..."
unzip -o neon.zip -d .

echo "Removendo zip..."
rm neon.zip

echo "Fazendo commit..."
git add .
git commit -m "upload painel neon futurista"

echo "Enviando para o GitHub..."
git push

echo "Finalizado!"