console.clear();
const prompt = require('prompt-sync')();

console.log('Olá, bem vindo ao nosso jogo de Jokenpo !!');
console.log('Você tera que escolher entre Pedra, Papel e Tesoura');
console.log('Onde Pedra ganha de Tesoura, Tesoura ganha de Papel e Papel ganha de Pedra');
console.log()

let choices = ["pedra", "papel", "tesoura"];

let user = prompt('Faça sua escolha para jogar: ').toLowerCase();
let machine = Math.floor(Math.random() * choices.length);

if(user == "pedra" & machine == 1){
    console.log('Maquina Ganha !!')
}else if(user == "pedra" & machine == 2){
    console.log('Você Ganhou !!')
}else if(user == "papel" & machine == 2){
    console.log('Maquina Ganha !!')    
}else if(user == "papel" & machine == 0){
    console.log('Você Ganhou !!')
}else if(user == "tesoura" & machine == 0){
    console.log('Maquina Ganha !!')
}else if(user == "tesoura" & machine == 1){
    console.log('Você Ganhou !!')    
}else{
    console.log('EMPATE !!')
}

console.log(choices[machine])