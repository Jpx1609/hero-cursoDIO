// efetuar a leitura de informação do usuário e permitir que saia quando quiser
const prompt = require('prompt-sync')({ sigint: true });

class hero {
    constructor() {
        this.name = '';
        this.age  = 0;
        this.type = "";
    }

    menu() {
        this.name    = prompt("Qual o nome do seu heroi: ");
        this.age     = prompt("Qual a idade do seu heroi: ");
        let selected = prompt("1 - Mago \n2 - Guerreiro \n3 - Monge \n4 - Ninja \nEscolha um tipo de classe: ");
        let attackArm;

        if (selected == "1") {
            // mago
                this.type = "mago";
                attackArm = "magia";
            } else if(selected == "2") {
            // guerreiro
                this.type = "guerreiro";
                attackArm = "espada" ; 
            } else if(selected == "3") {
            // monge
                this.type = "Monge";
                attackArm = "artes marciais"; 
            } else if (selected == "4") {
            // ninja
            this.type = "ninja";
            attackArm = "shuriken";
            } else {
            console.log("Escolha inválida!");
            return;
        }

        console.log(`O ${this.type} ${this.name} atacou usando ${attackArm}`);    
    }

}

    const yourHero = new hero();
    yourHero.menu();


