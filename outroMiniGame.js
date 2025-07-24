class Mario {
    constructor (vida, moedas, nome ){
        this.vida = vida 
        this.moedas = moedas 
        this.nome = nome 
    }
    realizarAcao (acao){
    
        switch (true) {
            case acao === "moeda" :
                this.moedas++
                break;
            case acao === "cogumelo":
                this.vida++ 
                break 
            case acao === "inimigo":
                this.vida--
                break
            case acao === "estrela":
                console.log (`${this.nome} ficou invencivel por 10 segundos 😎`);
            default: 
                console.log (`${this.nome} ignorou a ação de ${acao}`);
                break;
        }
    }
    status (){
        fase.forEach((acao) => {
            mario.realizarAcao(acao); // Mario reage a cada item!
        });
            //consoles.logs
            console.log ("\n========= STATUS =========\n")
            console.log (`Nome ${this.nome}`);
            console.log(`Vida: ${this.vida}`);
            console.log(`Moedas: ${this.moedas}`);

        if (this.vida == 0){
            console.log (" GAME OVER 💀");
        }else {
            console.log ("Status: em andamento")
        }
    }
}

const fase = ["moeda", "cogumelo", "inimigo", "moeda", "estrela", "buraco", "moeda"];

const mario = new Mario (3, 0, "Mario")
mario.status()
