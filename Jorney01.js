const prompt = require('prompt-sync')();
console.clear();

let vist = prompt('Para uma experiencia personalizada, digite seu nome: ');


console.log(`Olá, ${vist}!! Bem vindo a nossa jornada, onde estaremos acompanhando Jay Wepper em sua missão para salvar sua aldeia.`);
console.log();
console.log("Em um dia normal uma senhora chega a aldeia de Jay com um comunicado, ela se diz uma vidente e viu que grandes catastrofes viriam se não entregassem as 5 partes mistiscas no ritual de inverno, que só poderiam ser obtidas derrotando os cincos guardiões da floresta.");
console.log();
console.log("Assim por meio de votação nosso heroi Jay foi o escolhido para obter as 5 partes, ele teria que entrar na floresta e pegar as seguintes partes misticas: gorro do Saci, olho do Boto, presa do Boitátá, cabelo do Curupira e uma escama da Cuca.");

console.log();


let x = 0

let perg1 = prompt('Jay conseguiu o Gorro do Saci?: ').toLocaleLowerCase();
if(perg1 == "sim"){
    x++
  console.log("Jay consegue derrotar o Saci e pegar seu gorro");
}else{
    console.log("Jay não consegue derrotar o Saci e foge sem o gorro");
}
console.log();


let perg2 = prompt('Jay conseguiu o Olho do Boto?: ').toLowerCase();
if(perg2 == "sim"){
    x++
    console.log("Jay consegue derrotar o Boto e pegar seu olho");
  }else{
      console.log("Jay não consegue derrotar o boto e foge sem o olho");
  }
console.log();


let perg3 = prompt('Jay conseguiu a Presa do Boitátá?: ').toLowerCase();
if(perg3 == "sim"){
    x++
    console.log("Jay consegue derrotar o Boitátá e pegar sua presa");
  }else{
      console.log("Jay não consegue derrotar o Boitátá e foge sem a presa");
  }
console.log();


let perg4 = prompt('Jay conseguiu o Cabelo do Curupira?: ').toLowerCase();
if(perg4 == "sim"){
    x++
    console.log("Jay consegue derrotar o Curupira e pegar seu cabelo");
  }else{
      console.log("Jay não consegue derrotar o Curupira e foge sem o cabelo");
  }
console.log();


let perg5 = prompt('Jay conseguiu a Escama da Cuca?: ').toLowerCase();
if(perg5 == "sim"){
    x++
    console.log("Jay consegue derrotar a Cuca e pegar sua escama");
  }else{
      console.log("Jay não consegue derrotar a Cuca e foge sem a escama");
  }
console.log();

console.log('Indo para o final da historia, vamos ver como isso termina?!');
console.log();


if(x == 1){
    console.log("Jay não consegue evitar as catastrofes, mas obtem conhecimento sobre elas e pode se preparar");
}else if(x == 2){
    console.log("Jay não consegue evitar as catastrofes, mas consegue um meio de evitar muitas perdas");
}else if(x == 3){
    console.log("Jay consegue evitar algumas catastrofes, mas muitas ainda chegam a sua vila");
}else if(x == 4){
    console.log("Jay evita a maioria das catastrofes e sua vila sofre danos minimos");
}else if(x == 5){
    console.log("Jay consegue com sucesso salvar sua vila evitando todas as catastrofes");
}else{
    console.log("Jay falha e sua vila sofre muito com as catastrofes");
}
console.log();

console.log('Obrigado por paticipar dessa historia !!');





