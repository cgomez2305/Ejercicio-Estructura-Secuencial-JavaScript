//Ejercicio 1
let A=2,B=5,C=1;
console.log(3*A - 4*B / A**2)
console.log((((B + C) / 2 * A + 10) * 3 * B) - 6)

//Ejercicio 2

let inversion,interes,total=0;
inversion=parseInt(prompt('ingrese la inversion: '))
interes=parseFloat(0.012)
total=parseFloat(inversion*interes)
console.log('lo que ganara sera',{total})

//Ejercicio 3

let base,altura=0;
base=parseFloat(prompt('ingresar la base: '))
altura=parseFloat(prompt('ingresar la altura: '))
operacion=(base*altura)/2
console.log('el area es: ',{operacion})

//Ejercicio 4

nombre=prompt('ingresar el nombre: ')
salario=parseInt(980000)
comision=parseInt(170000)
numeroDeVehiculos=parseInt(prompt('ingrese el numero de carros vendidos:'))
totalVentas=parseInt(prompt('ingrese el total de las ventas'))
operacion=parseInt(salario+(comision*numeroDeVehiculos)+(totalVentas*0.05))
console.log(operacion)

//Ejercicio 5

nota1=parseFloat(prompt('ingrese nota 1 (40%):'))
nota2=parseFloat(prompt('ingrese la nota 2 (40%):'))
nota3=parseFloat(prompt('ingrese la nota 3(60%):'))
nota4=parseFloat(prompt('ingrese la nota 4(60%):'))
operacion=parseFloat((((nota1+nota2)/2)*0.4)+(((nota3+nota4)/2)*0.6) )
console.log('su promedio es: ',{operacion})

//Ejercicio 6 

edad=parseInt(prompt('ingrese su edad:'))
operacion=parseFloat((220-edad)/10)
console.log('su numero de pulsaciones es:',{operacion})

//Ejercicio 7

sueldoBase=parseFloat(prompt('ingrese el sueldo Base:'))
venta1=parseFloat(prompt('ingrese la venta1: '))
venta2=parseFloat(prompt('ingrese la venta2: '))
venta3=parseFloat(prompt('ingrese la venta3: '))
operacion=parseFloat(((venta1+venta2+venta3)*0.1)+sueldoBase)
console.log('su sueldo total es: ',{operacion})

//Ejercicio 8

notaexma=parseFloat(prompt('ingrese la nota del examen en matematicas: '))
tarea1ma=parseFloat(prompt('ingrese la nota tarea1 matematicas: '))
tarea2ma=parseFloat(prompt('ingrese la nota tarea2 matematicas: '))
tarea3ma=parseFloat(prompt('ingrese la nota3  tarea3 matematicas'))
opmat=((notaexma*0.9)+((tarea1ma+tarea2ma+tarea3ma)/3)*0.1)
notaexfi=parseFloat(prompt('ingrese la nota del examen de fisica: '))
tarea1fi=parseFloat(prompt('ingrese la nota tarea1 fisica: '))
tarea2fi=parseFloat(prompt('ingrese la nota tarea2 fisica: '))
opfi=((notaexma*0.8)+((tarea1fi+tarea2fi)/2)*0.2)
notaexqu=parseFloat(prompt('ingrese la nota del examen de quimica: '))
tarea1qu=parseFloat(prompt('ingrese la nota tarea1 quimica: '))
tarea2qu=parseFloat(prompt('ingrese la nota tarea2 quimica: '))
tare3qu=parseFloat(prompt('ingrese la nota3  tarea3 quimica: '))
opqu=((notaexma*0.85)+((tarea1ma+tarea2ma+tarea3ma)/3)*0.15)
console.log('matematicas ',{opmat},' fisica ',{opfi},' quimica ',{opqu})

