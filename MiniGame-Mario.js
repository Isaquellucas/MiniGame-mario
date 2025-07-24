const personagem = {
    nome: "Mario",
    moedas: 7,
    vida: 20
}

class Mario {
    constructor (vida, moedas){
        this.vida = vida
        this.moedas = moedas
    }
    coletarMoeda (){
        console.log ("Mario pegou uma moeda");
        personagem.moedas++
            personagem.moedas <= 1
                ? (console.log("Mário pegou outra moeda"), personagem.moedas++)
                : this.moedas > 2 && console.log("Mario esta trapaceando 😡\n");//esta com mai de 2 moedas
    }
    tomarDano (){
        for (let dano = 1; dano < 2 ; dano++){
            console.log (`${personagem.nome} tomou dano, a vida do ${personagem.nome} agora é ${personagem.vida - dano}!\n`);
        }
        
    }
    comerCogumelo (){
        if (personagem.vida <= 4){
            console.log (`${personagem.nome} esta com pouca vida!\t cuidado`);//dá uma vida extra para continuar o jogo
            console.log (`${personagem.nome} comeu um cogumelo🍄`);
            personagem.vida++
        }
    }
    status(){
        if (personagem.vida <= 2){
           console.log  ("game over")
        }else {
            console.log (`${personagem.nome} esta com ${personagem.moedas} moedas, e esta com ${personagem.vida} de vida\n`);
            console.log ("\n obrigado por jogar :}");
        }

    }
    main (){
        this.coletarMoeda();
        this.tomarDano();
        this.comerCogumelo();
        this.status();

    }
}

const resultado = new Mario(personagem.vida, personagem.moedas)
resultado.main()