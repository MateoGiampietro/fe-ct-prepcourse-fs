/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return array[0]
   } else {
      return undefined
   }
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return array[array.length - 1]
   } else {
      return undefined
   }
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   if (array.length > 0) {
      return (array.length)
   } else {
      return undefined
   }
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = array.map((array) => { return array + 1 } );
   return (nuevoArray) 
   
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento) ;
   return (array)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento) ;
   return (array)
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ') ;
   return (frase)
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento) === true) {
      return (true)
   } else {
      return (false)
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0 ;
   for (var i = 0 ; i < arrayOfNums.length ; i++) {
      suma = arrayOfNums[i] + suma ;
   } return (suma)
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0 ;
   for (var i = 0 ; i < resultadosTest.length ; i++) {
      promedio = resultadosTest[i] + promedio ;
   } promedio = promedio / i ;
   return (promedio)
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numMax = null
   for (var i = 0 ; i < arrayOfNums.length ; i++ ) {
      var numMax = Math.max(numMax, arrayOfNums[i])
   } return (numMax)
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicacion = 1 ;
   if (arguments.length === 0) {
      multiplicacion = 0 ;
      return (multiplicacion)
   }
   for (var i = 0 ; i < arguments.length ; i++) {
      multiplicacion = multiplicacion * arguments[i]
   } return (multiplicacion)
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0 ;
   for (var i = 0 ; i < array.length ; i++ ) {
      if (array[i] > 18) {
         contador = contador + 1
      }
   } return (contador)
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia > 1 && numeroDeDia < 7) {
      return ('Es dia laboral')
   } else {
      return ('Es fin de semana')
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numeroString = num.toString() ;
   numeroString = numeroString[0] ;
   if (numeroString === '9') {
      return true
   } else {
      return false
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var i = 0 ;
   var seguro = true ;
   while (i < (array.length - 1) && seguro === true) {
      if (array[i] === array[i+1]) {
         i = i + 1 ;
      } else {
         seguro = false ;
      }
   } return (seguro)
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var buscar = ['Enero', 'Marzo', 'Noviembre'] ;
   var nuevoArray = array.map((mes) => {
      if (buscar.includes(mes)) {
         return mes 
      } else {
         return null
      }
   }).filter((mes) => mes !== null)
   if (nuevoArray.length === buscar.length) {
      return (nuevoArray)
   } else {
      return ('No se encontraron los meses pedidos')
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaSeis = [] ;
   for (var i = 0; i < 11 ; i++) {
      tablaSeis[i] = i * 6 ;
   } return (tablaSeis)
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nuevoArray = array.map((int) => {
      if (int > 100) {
         return int
      } else {
         return null
      }
   }).filter((int) => int !== null)
   return (nuevoArray)
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array = [] ;
   for (var i = 0 ; i < 10 ; i++) {
      num = num + 2 ;
      array[i] = num ;
      if (num === i) {
         break ;
      }
   } if (num === i) {
      return ('Se interrumpió la ejecución')
   } else {
      return (array)
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array = [] ;
   for (var i = 0 ; i < 10 ; i++) {
      if (i === 5) {
         continue ;
      } else {
         num = num + 2 ;
         array[i] = num ;
      }
   } 
   array = array.filter((num) => num !== undefined) ;
   return (array)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
