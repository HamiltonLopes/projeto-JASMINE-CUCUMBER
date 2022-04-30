module.exports = class Cliente{
    constructor(x = 0, y = "", z = ""){
        this.id = x;
        this.nome = y;
        this.telefone = z;
    }

    
    static primeiro(){
        return new Cliente();
    }
    
    static todos(){
        return [
            new Cliente(1, "joao", "123456"),
            new Cliente(2, 'marcos', '123123123123'),
            new Cliente(3, 'andre', '43434534'),
            new Cliente(4, 'carlos', '5345656'),
            new Cliente(5, 'fo', '654647'),
            new Cliente(6, 'da', '6575678'),
            new Cliente(7, 'se', '87698690'),
            new Cliente(8, 'ehue', '8656674'),
            new Cliente(9, 'keko', '735675374'),
            new Cliente(10, 'tchubilyu', '475763766')
        ]
    }
    nomeUperCase(){
        return this.nome.toUpperCase();
    }

    
}