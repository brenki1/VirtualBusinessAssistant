class Pessoa {
    private CPF : string;
    private nome : string;
    private endereco : string;
    private nascimento : string;  //DD/MM/AA
    
    constructor(CPF: string, nome: string, endereco: string, nascimento: string) {
        this.CPF = CPF;
        this.nome = nome;
        this.endereco = endereco;
        this.nascimento = nascimento;
    }


    public getCPF(): string {
        return this.CPF;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public getNascimento(): string {
        return this.nascimento;
    }

    public setCPF(CPF: string): void {
        this.CPF = CPF;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public setNascimento(nascimento: string): void {
        this.nascimento = nascimento;
    }

    public validaCPF(cpf) {

        if (typeof cpf !== 'string') return false
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
        cpf = cpf.split('').map(el => +el)
        const rest = (count) => (cpf.slice(0, count-12)
        .reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10
        return rest(10) === cpf[9] && rest(11) === cpf[10]
        
    }



    // TODO: MÉTODOS NO GERAL

    //GET&SET ✅
    //VALIDAÇAO DE CPF ✔️ (testar)

}