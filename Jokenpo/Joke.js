console.clear();
const prompt = require('prompt-sync')();

// introdução 
console.log('Olá, bem vindo ao nosso jogo de Batalha Pokemon !!');
let nome = prompt("Qual seu nome? ")
console.clear()

console.log(`Bem vindo ${nome}!!, você irá batalhar contra Gary, um dos melhores mestres da região.`);
console.log('Para isso você devera escolher entre os seguintes Pokemons:')
console.log('Charmander, Bulbassauro e Squirtle.')
console.log('Onde Charmander ganha de Bulbassauro, o Bulbassauro ganha de Squirtle e Squirtle ganha de Charmander.');
console.log()

// estrutura de repetição
let continua = "sim"

while(continua == "sim"){
  //Variaveis
  let choices = ["charmander", "bulbassauro", "squirtle"];
  var pontosJ = 0
  var pontosM = 0

  //validação
  let rodadas = +prompt('Escolha quantas rodadas deseja jogar ( No maximo 10 rodadas): ')

  while(rodadas > 10){
    console.log("Numero de rodadas invalido")
    console.log()
    rodadas = +prompt("Escolha quantas rodadas deseja jogar ( No maximo 10 rodadas): ")
  }
  console.clear()
  
  // jogo
  for(let i = 0; i < rodadas; i++){
    let user = prompt('Faça sua escolha para jogar: ').toLowerCase();
    let machine = Math.floor(Math.random() * choices.length);
    console.clear()

    if(user == "charmander" & machine == 2){
      console.log(`${nome} escolheu ${user} e Gary escolheu squirtle`)
      console.log()
      console.log('Gary Ganha !!')
      pontosM++
      console.log(`o Placar esta ${pontosJ} X ${pontosM} `)

    }else if(user == "charmander" & machine == 1){
      console.log(`${nome} escolheu ${user} e Gary escolheu bulbassauro`)
      console.log()
      console.log(`${nome} Ganhou !!`)
      pontosJ++
      console.log(`O Placar esta ${pontosJ} X ${pontosM}`)

    }else if(user == "bulbassauro" & machine == 0){
      console.log(`${nome} escolheu ${user} e Gary escolheu charmander`)
      console.log()
      console.log('Gary Ganha !!')
      pontosM++
      console.log(`o Placar esta ${pontosJ} X ${pontosM} `) 

    }else if(user == "bulbassauro" & machine == 2){
      console.log(`${nome} escolheu ${user} e Gary escolheu squirtle`)
      console.log()
      console.log(`${nome} Ganhou !!`)
      pontosJ++
      console.log(`O Placar esta ${pontosJ} X ${pontosM}`)

    }else if(user == "squirtle" & machine == 1){
      console.log(`${nome} escolheu ${user} e Gary escolheu bulbassauro`)
      console.log()
      console.log('Gary Ganha !!')
      pontosM++
      console.log(`o Placar esta ${pontosJ} X ${pontosM} `)

    }else if(user == "squirtle" & machine == 0){
      console.log(`${nome} escolheu ${user} e Gary escolheu charmander`)
      console.log()
      console.log(`${nome} Ganhou !!`)
      pontosJ++
      console.log(`O Placar esta ${pontosJ} X ${pontosM}`)

    }else{
      console.log('EMPATE !!')
      console.log('Niguem Pontua')
   }
 }
console.clear()
console.log(`O Placar final ficou ${pontosJ} X ${pontosM} `)
  // Final
 if(pontosJ > pontosM){
  console.log(`Parabens!! ${nome} Você foi o grande ganhador !!`)
 }else if(pontosJ == pontosM){
  console.log('A luta foi dura, mas mesmo assim nenhum saiu vitorioso')
 }else{
  console.log('Infelizmente você não conseguiu ganhar de Gary')
 }
 continua = prompt('Deseja jogar denovo? ').toLowerCase()
}