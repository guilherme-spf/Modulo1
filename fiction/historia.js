console.clear();
const prompt = require('prompt-sync')();

function timer(hora,horadd){
    horaCerta = hora + horadd
    return horaCerta
}

let hora = 5
let dia = 1
let status = {habilidade:0,força:0,fome:0,sono:0}

for(let i = 0; i <= 7; i++){
    while(hora <= 24){
        console.log(`Jay acorda e são ${hora} do dia ${dia}, ele pode fazer: 
        1- Ir treinar no CT (+5H)
        2- Ir para Academia (+2H)
        3- Comer(+1H)
        4- Dormir(+8H)`)
        let escolha = +prompt()
        console.log()

        if(escolha == 1){
            status.habilidade = status.habilidade + 3
            status.força = status.força + 1
            status.fome = status.fome + 4
            status.sono = status.sono + 2
            hora = timer(hora, 5)
        }else if(escolha == 2){
            status.força = status.força + 4
            status.fome = status.fome + 4
            status.sono = status.sono + 4
            hora = timer(hora, 2)
        }else if(escolha == 3){
            status.fome = 0
            hora = timer(hora, 1)
        }else if(escolhar == 4){
            status.sono = 0
            hora = timer(hora, 8)
        }else{
            console.log("Escolha Invalida")
        }
    }
    dia++
    hora = hora - 24
}
