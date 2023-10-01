
let nomedoHeroi = "Pedro"
let xpdoHeroi = 5500


if (xpdoHeroi < 1000) {
    nivel = "Ferro";
} else if (xpdoHeroi >= 1001 && xpdoHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpdoHeroi >= 2001 && xpdoHeroi <= 5000) {
    nivel = "Prata";
} else if (xpdoHeroi >= 5001 && xpdoHeroi <= 6000) {
    nivel = "Prata - Ouro";
} else if (xpdoHeroi >= 6001 && xpdoHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpdoHeroi >= 7001 && xpdoHeroi <= 8000) {
    nivel = "Platina";
} else if (xpdoHeroi >= 8001 && xpdoHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpdoHeroi >= 9001 && xpdoHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


console.log("O Herói de nome " + nomedoHeroi + " está no nível de " + nivel);
