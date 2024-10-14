class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if(this.tipo === "mago"){
            alert("o " + this.tipo + " atacou usando magia")
        } else if(this.tipo === "guerreiro"){
            alert("o " + this.tipo + " atacou usando espada")
        } else if(this.tipo === "monge"){
            alert("o " + this.tipo + " atacou usando artes marciais")
        } else if(this.tipo === "ninja"){
            alert("o " + this.tipo + " atacou usando shuriken")
        }
    }
}

let guerreiro = new Heroi("Ragnar", 45, "guerreiro")
alert(guerreiro.nome)
alert(guerreiro.idade)
guerreiro.atacar()