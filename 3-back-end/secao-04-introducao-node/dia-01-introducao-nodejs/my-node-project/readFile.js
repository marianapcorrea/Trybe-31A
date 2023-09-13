const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt','utf-8');
    console.log(data)
  } catch (e) {
    console.error('Erro ao ler o arquivo: %s', e.message)
  }
}

main()