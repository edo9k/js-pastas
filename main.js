const A = require('./arquivo')
const P = require('./pasta')

const raiz = new P('/')

const etc = new P('etc')
const bin = new P('bin')
const home = new P('home')
const lib = new P('lib')


// nivel 1
raiz.adicionarArquivo(etc)
raiz.adicionarArquivo(bin)
raiz.adicionarArquivo(home)
raiz.adicionarArquivo(lib)


// nivel 2
const usuario = new P('usuario')
home.adicionarArquivo(usuario)

// nivel 3
const novaPasta = new P()
usuario.adicionarArquivo(novaPasta)

/* 
 * vou adicionar copias do mesmo arquivo 
 * dentro de todos os direitorios 
 */
const exemplo1 = new A('exemplo.txt', 1)
const exemplo2 = new A('exemplo.ogg', 100)

etc.adicionarArquivo(exemplo1)
etc.adicionarArquivo(exemplo2)

bin.adicionarArquivo(exemplo1)
bin.adicionarArquivo(exemplo2)

lib.adicionarArquivo(exemplo1)
lib.adicionarArquivo(exemplo2)


const curriculo = new A('cv.pdf', 42)
novaPasta.adicionarArquivo(curriculo)

console.log(`Tamanho total de arquivos e pastas partindo de raiz ${ raiz.tamanho }`)

