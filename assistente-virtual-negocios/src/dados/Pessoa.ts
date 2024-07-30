class Pessoa {
    private CPF : string;
    private nome : string;
    private endereco : string;
    private nascimento : string;  //DD/MM/AA
    
    constructor(CPF, nome, endereco, nascimento) {
        this.CPF = CPF;
        this.nome = nome;
        this.endereco = endereco;
        this.nascimento = nascimento;
    }


    public getnome(){
        return this.nome;
    }



    // TODO: MÉTODOS GET&SET, que são meio diferentes em TS, ponto a ser discutido; MÉTODOS NO GERAL, EX: VALIDAÇÃO DE CPF

}