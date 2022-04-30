const Cliente = require('../../models/cliente');
describe('Clientes', () =>{
    beforeEach(()=>{
    
    })

    it('Teste 1', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined();
        expect(cliente.nome).not.toBeUndefined();
        expect(cliente.telefone).not.toBeUndefined();
    });

    it('Teste 2', ()=>{
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10);
    });

    it('Teste 3', ()=>{
        let cliente = Cliente.primeiro();
        cliente.nome = 'danilo';
        expect(cliente.nomeUperCase()).toEqual('DANILO');
    });

});