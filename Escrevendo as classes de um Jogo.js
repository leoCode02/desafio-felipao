const nomeHeroi = "Herói 1";
const idadeHeroi = 25;
const tipoHeroi = "ninja";

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = ""
        const tiposEspeciais = ["mago", "guerreiro", "monge", "ninja"];
        
        for (let i = 0; i < tiposEspeciais.length; i++) {
            if (this.tipo === tiposEspeciais[i]) {
                ataque = `${this.tipo === "mago" ? "magia" : this.tipo === "guerreiro" ? "espada" : this.tipo === "monge" ? "artes marciais" : "shuriken"}`;
                break;
            }
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
heroi.atacar();
