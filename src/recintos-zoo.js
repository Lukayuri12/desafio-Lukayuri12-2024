class Animal {
    constructor(nome, tamanho, biomas, carnivoro = false) {
        this.nome = nome;
        this.tamanho = tamanho;
        this.biomas = biomas;
        this.carnivoro = carnivoro;
    }
}

class RecintosZoo {
    constructor(numero, bioma, capacidade, animaisExistentes = []){
        this.numero = numero;
        this.bioma = bioma;
        this.capacidade = capacidade;
        this.animaisExistentes = animaisExistentes;
    }

    analisaRecintos(animal, quantidade) {
        if (!animal.biomas.includes(this.bioma)) return false; 
        if (this.espacoDisponivel() < animal.tamanho * quantidade) return false; 
        if (animal.carnivoro && this.animaisExistentes.some(animal => animal.nome !== animal.nome)) return false;
        if (animal.nome === 'HIPOPOTAMO' && this.bioma !== 'savana e rio' && this.animaisExistentes.length > 0) return false;
        if (animal.nome === 'MACACO' && this.animaisExistentes.length === 0 && quantidade === 1) return false;

        return true;
    }

}

class Zoologico {
    constructor() {
        this.recintos = this.criarRecintos();
    }

    criarRecintos() {
        return [
            this.criarRecinto(1, 'savana', 10, ['MACACO']),
            this.criarRecinto(2, 'floresta', 5, []),
            this.criarRecinto(3, 'savana e rio', 7, ['GAZELA']),
            this.criarRecinto(4, 'rio', 8, []),
            this.criarRecinto(5, 'savana', 9, ['LEAO'])
        ];
    }

    criarRecinto(numero, bioma, capacidade, animais) {
        return new Recinto(numero, bioma, capacidade, animais.map(nome => this.criarAnimal(nome)));
    }

    criarAnimal(nome) {
        const animais = {
            'MACACO': new Animal('MACACO', 1, ['savana', 'floresta']),
            'GAZELA': new Animal('GAZELA', 2, ['savana']),
            'LEAO': new Animal('LEAO', 3, ['savana'], true)
        };
        return animais[nome];
    }
}

export { RecintosZoo as RecintosZoo };
