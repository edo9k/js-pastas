/** @format */

class Arquivo {
  constructor(nome = 'Novo Arquivo', tamanho = 0) {
    this._nome = nome
    this._tamanho = tamanho

    console.log(`Criado o arquivo ${this._nome}`)
  }

  get nome() {
    return this._nome
  }

  set nome(novoNome) {
    this._nome = novoNome
  }

  get tamanho() {
    return this._tamanho
  }

  set tamanho(novoTamanho) {
    this._tamanho = novoTamanho
  }
}

module.exports = Arquivo
