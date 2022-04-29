module.exports = class Cliente{
    constructor(){
        this.id = 0;
        this.nome = "";
        this.telefone = "";
    }

    
    static primeiro(){
        return new Cliente();
    }
    
    static todos(){
        return [
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente()
        ]
    }
    nomeUperCase(){
        return this.nome.toUpperCase();
    }

    
}