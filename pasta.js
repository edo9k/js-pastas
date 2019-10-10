/** @format */

class Pasta {
  constructor(nome = 'Nova Pasta') {
    this._refs = []
    this._nome = nome

    console.log(`Criada a pasta ${this._nome}`)
  }

  get nome() {
    return this._nome
  }

  set nome(novoNome) {
    this._nome = novoNome
  }

  adicionarArquivo(ref) {
    this._refs = [ref, ...this._refs]
    console.log(`Adicionado o arquivo/pasta ${ref.nome} à ${this._nome}`)
  }

  removerArquivo(ref) {
    this._refs = this._refs.filter(r => r !== ref)
    console.log(`Removido o arquivo/pasta ${ref.nome} de ${this._nome}`)
  }

  get tamanho() {
    let total = 0

    if (this._refs.length === 0) return 0

    total = this._refs
      .map(x => x.tamanho) /* pega todos os tamanhos */
      .reduce((acc, cur) => acc + cur, 0) /* soma todos eles */

    /* 
     * podemos pegar 'tamanho' por tanto pastas e arquivos tem o mesmo metodo
     * embora em arquivo ele só retorne o tamanho do arquivo, e em pasta ele 
     * tenha que gerar uma soma de cada arquivo, e chamar o mesmo metodo em cada 
     * pasta interna.
     */

    return total
  }
}

module.exports = Pasta
