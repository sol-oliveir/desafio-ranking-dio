
let saldoVitoria = calcular (80,25);

function calcular (vitoria, derrota){ 
    let saldoVitoria = vitoria - derrota
    let nivel = "Nivel Ouro"

switch(saldoVitoria){
    case ("saldo <=10"):
        console.log("O Heroi esta com saldo de Vitorias de a 0 a 10 e está no Nivel Ferro!")
        break
    case ("saldo =11<=20"):
        console.log("O Heroi esta com saldo de Vitorias de 11 a 20 e está no Nivel Bronze!")
        break
    case ("saldo =21<=50"):
        console.log("O Heroi esta com saldo de Vitorias de 21 a 50 e está no Nivel Prata!")
        break
    case ("saldo =51<=80"):
        console.log("O Heroi esta com saldo de Vitorias de 51 a 80 e está no Nivel Ouro!")
        break
    case ("saldo =81<=100"):
        console.log("O Heroi esta com saldo de Vitorias de 81 a 100 e está no Nivel Diamante!")
        break
    case ("saldo >101"):
        console.log("O Heroi esta com saldo de Vitorias maior que 101 e está no Nível Imortal !")
        break
    
}


console.log("O Heroi esta com saldo de Vitorias de " + saldoVitoria +  " e está no " + nivel + "!")

}