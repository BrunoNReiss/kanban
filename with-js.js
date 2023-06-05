/*A constante elements recebe todos os elementos p que estão dentro da classe with-js*/ 
const elements = document.querySelectorAll('.with-js p')
const LIMIT = 200

/*Para cada p que tem dentro de elementos*/ 
for (let p of elements) {
  /*Vamos colocar como texto interno o o proprio texto interno
  aplicando o substring, metodo que recebe 2 argumentos, o primeiro:
   de onde ele vai começar, e o segundo: quantos caracteres após o inicio, e na sequencia os caracteres que vai substituir
  */ 
const aboveLimit = p.innerText.length > LIMIT
const dotsOrEmpty = aboveLimit ? '...' : '' 
p.innerText = p.innerText.substring (0, LIMIT) + dotsOrEmpty
}