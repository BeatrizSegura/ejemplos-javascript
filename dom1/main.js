//var cajas= document.getElementsByTagName('div')
//var cajas= document.getElementsByClassName('caja')
//cajas[0].textContent='Hola Mundo'
//cajas[1].innerHTML= '<b>Hola JavaScript</b>'

var cajas= document.getElementById('primera')
cajas.textContent = 'Primera Caja';

//document.write('<div class= "caja"> Nuevo Elemento </div>')  No se recomienda agregar los elementos de este modo

// 5 pasos
// 1. Crear el nuevo elemento
        var elementoNuevo = document.createElement('div')
// 2. Crear el contenido
        var nodoContenido = document.createTextNode('Nuevo elemento')
// 3. Añadir el contenido al elemento
        elementoNuevo.appendChild(nodoContenido)
// 4. Agregar atributos
        elementoNuevo.setAttribute('class','caja colorcoral')   //nombre , valor
// 5. Agregar el elemento al documento
        var contenedor = document.getElementById('contenedor')
        var primera= document.getElementById('primera')    
        contenedor.insertBefore(elementoNuevo,primera)          //Agrega al inicio 

        //var contenedor = document.getElementById('contenedor')   Agrega el elemento al final
        //contenedor.appendChild(elementoNuevo)

//Eliminar la caja con el id tercera
        var tercera = document.getElementById('tercera')
        contenedor.removeChild(tercera)