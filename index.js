let partidasJogadas = 130;
let partidasPerdidas = 70;
let resultado = calcularPartidas (partidasJogadas, partidasPerdidas);
let partidasGanhas = resultado;
let nivel = "";

function calcularPartidas(){
	return partidasJogadas - partidasPerdidas;
}

if(partidasGanhas <= 10){
	nivel = "Ferro"
} else if (partidasGanhas > 10 && partidasGanhas <= 20){
	nivel = "Bronze"
} else if (partidasGanhas > 20 && partidasGanhas <= 50){
	nivel = "Prata"
} else if (partidasGanhas > 50 && partidasGanhas <= 80){
	nivel = "Ouro"
} else if (partidasGanhas > 80 && partidasGanhas <= 90){
	nivel = "Diamante"
} else if (partidasGanhas > 90 && partidasGanhas <= 100){
	nivel = "Lendário"
} else {
	nivel = "Imortal"
}

console.log("O Herói tem de saldo de " + partidasGanhas + " vitórias e está no nível de " + nivel)