function concatenarUno()
{
    var cadena = document.getElementById('resultado')
    cadena.textContent = cadena.textContent + '1'
}

function concatenarDos()
{
    var cadena2 = document.getElementById('resultado')
    cadena2.textContent = cadena2.textContent + '2'
}

function concatenarTres()
{
    var cadena3 = document.getElementById('resultado')
    cadena3.textContent = cadena3.textContent + '3'
}

function concatenarCuatro()
{
    var cadena4 = document.getElementById('resultado')
    cadena4.textContent = cadena4.textContent + '4'
}

function concatenarCinco()
{
    var cadena5 = document.getElementById('resultado')
    cadena5.textContent = cadena5.textContent + '5'
}

function concatenarSeis()
{
    var cadena6 = document.getElementById('resultado')
    cadena6.textContent = cadena6.textContent + '6'
}

function concatenarSiete()
{
    var cadena7 = document.getElementById('resultado')
    cadena7.textContent = cadena7.textContent + '7'
}

function concatenarOcho()
{
    var cadena8 = document.getElementById('resultado')
    cadena8.textContent = cadena8.textContent + '8'
}

function concatenarNueve()
{
    var cadena9 = document.getElementById('resultado')
    cadena9.textContent = cadena9.textContent + '9'
}

function concatenarCero()
{
    var cadena10 = document.getElementById('resultado')
    cadena10.textContent = cadena10.textContent + '0'
}

function concatenarMas()
{
    var cadena11 = document.getElementById('resultado')
    cadena11.textContent = cadena11.textContent + '+'
}

function concatenarMenos()
{
    var cadena12 = document.getElementById('resultado')
    cadena12.textContent = cadena12.textContent + '-'
}

function concatenarPor()
{
    var cadena13 = document.getElementById('resultado')
    cadena13.textContent = cadena13.textContent + '*'
}

function concatenarEntre()
{
    var cadena14 = document.getElementById('resultado')
    cadena14.textContent = cadena14.textContent + '/'
}

function concatenarIzq() 
{
    var cadena15 = document.getElementById('resultado')
    cadena15.textContent = cadena15.textContent + '('
}

function concatenarDer()
{
    var cadena16 = document.getElementById('resultado')
    cadena16.textContent = cadena16.textContent + ')'
} 

function evaluarPosfija()
{
    var pila = new Array
    var op2
    var op1
    var simb
    var value
    var cadena = document.getElementById('resultado')
    for(var i=0; i<cadena.length; i++)
    {
        if(i!='+'||i!='-'||i!='*'||i!='/')
            pila.push(i)
        else
        {
            simb= i;
            op2= pila.pop
            op1= pila.pop
            value= op1 + i + op2
            pila.push(value)
        }
    }
    cadena.textContent= pila.pop
}

function evaluarInfija()
{
    var pila= new Array

    for(var i=0; i<cadena.length; i++)
    {
        if(i!='+'||i!='-'||i!='*'||i!='/')
            pila.push(i)
        else
        {
            while(pila!=null && )
        }
    }
}

var btnUno = document.getElementById("uno")
btnUno.addEventListener('click',concatenarUno)

var btnDos = document.getElementById("dos")
btnDos.addEventListener('click',concatenarDos)

var btnTres = document.getElementById("tres")
btnTres.addEventListener('click',concatenarTres)

var btnCuatro = document.getElementById("cuatro")
btnCuatro.addEventListener('click',concatenarCuatro)

var btnCinco = document.getElementById("cinco")
btnCinco.addEventListener('click',concatenarCinco)

var btnSeis = document.getElementById("seis")
btnSeis.addEventListener('click',concatenarSeis)

var btnSiete = document.getElementById("siete")
btnSiete.addEventListener('click',concatenarSiete)

var btnOcho = document.getElementById("ocho")
btnOcho.addEventListener('click',concatenarOcho)

var btnNueve = document.getElementById("nueve")
btnNueve.addEventListener('click',concatenarNueve)

var btnCero = document.getElementById("cero")
btnCero.addEventListener('click',concatenarCero)

var btnMas = document.getElementById("mas")
btnMas.addEventListener('click',concatenarMas)

var btnMenos = document.getElementById("menos")
btnMenos.addEventListener('click',concatenarMenos)

var btnPor = document.getElementById("por")
btnPor.addEventListener('click',concatenarPor)

var btnEntre = document.getElementById("entre")
btnEntre.addEventListener('click',concatenarEntre)

var btnIzq = document.getElementById("izq")
btnIzq.addEventListener('click',concatenarIzq)

var btnDer = document.getElementById("der")
btnDer.addEventListener('click',concatenarDer) 

var btnPosfija = document.getElementById("posfija")
btnPosfija.addEventListener('click',evaluarPosfija)

var btnInfija = document.getElementById("infija")
btnInfija.addEventListener('click',evaluarInfija)
