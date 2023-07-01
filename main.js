let institucion = 'IDAT';
let nombre = 'Carlos';
const edad = 15;
console.log(
	`Hola Mundo, soy ${nombre} y tengo ${edad} años, estudio en ${institucion}`
);

let precioArroz = 3;

if (precioArroz <= 4) {
	console.log('ok puedes comprar el arroz porque está 4 soles o menos');
} else {
	console.log('el arroz está más de 4 soles');
}

// supongamos que quieres ingresar a una universidad donde solo permiten a mayores de edad
// y además tienes que haber estudiado en IDAT
if (edad >= 18 && institucion === 'IDAT') {
	console.log('ok puedes ingresar');
} else {
	console.log('no puedes ingresar');
}

if (edad >= 18 || institucion === 'IDAT') {
	console.log(
		'ok puedes ingresar porque o tienes 18 años o has estudiado en IDAT'
	);
}

let numeroDeLaSuerte = '17';

if (numeroDeLaSuerte == 17) {
	console.log('PRIMERO', 'que bien! el numero de la suerte es 17');
} else {
	console.log('PRIMERO', 'el numero de la suerte no es 17');
}

if (numeroDeLaSuerte === 17) {
	console.log('SEGUNDO', 'que bien! el numero de la suerte es 17');
} else {
	console.log('SEGUNDO', 'el numero de la suerte no es 17');
}

if (numeroDeLaSuerte != 18) {
	console.log('TERCERO', 'el numero si es diferente de 18');
} else {
	console.log('TERCERO', 'el numero no es diferente de 18');
}

if (numeroDeLaSuerte !== 18) {
	console.log('CUARTO', 'el numero si es diferente de 18');
} else {
	console.log('CUARTO', 'el numero no es diferente de 18');
}

for (let index = 0; index < 10; index++) {
	console.log('Hola!', index);
}

let contador = 5;

while (contador >= 1) {
	console.log('Hola!', contador);
	contador--;
}

console.log('2 elevado al 8', 2 ** 8);

console.log(124 % 12);

if (92 % 2 === 0) {
	console.log('92 es numero par');
}

const mayorDeEdad = edad >= 18;

console.log('mayorDeEdad', mayorDeEdad);

if (!mayorDeEdad) {
	console.log('ok tienes una beca por ser menor de edad');
} else {
	console.log('lo siento, no tienes una beca porque eres mayor de edad');
}

console.log(
	'Si eres mayor de edad tomas coca cola, pero si eres menor de edad tomas inka cola. Resultado:',
	mayorDeEdad ? 'coca cola' : 'inka cola'
);
