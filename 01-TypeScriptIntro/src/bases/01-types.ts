export const name = 'Matias';
export const age:number = 34;
export const isValid:boolean=true;

export const templateString =`Esto es un string 
multi linea
que puede tener " dobles
' simples
inyectar valores ${name}
numeros: ${age}
booleans: ${isValid}`
console.log(templateString)