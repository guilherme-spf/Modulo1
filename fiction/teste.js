console.clear();
const prompt = require('prompt-sync')();

let status = {habilidade:0,forca:0,fome:0,sono:0}

function vhabilidade(a){
    status.habilidade = status.habilidade + a
}

vhabilidade(5)
console.log(status.habilidade)