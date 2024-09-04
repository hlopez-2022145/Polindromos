
let palabra = 'Anita lava la tina'

let palabraSinEspacios = palabra.toLocaleLowerCase().replace(/\s+/g,'')

let palabraInvertida = palabraSinEspacios.split('').reverse().join('')

console.log(palabraSinEspacios === palabraInvertida ? 'Es palindromo' : 'No es palindromo')

  
