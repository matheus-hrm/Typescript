

/* 
    Qual a motivação por trás de usar tipos ?
    - Prevenir erros
    - Tornar a DX (Developer Experience) melhor

*/

export default function(){
    // Tipos primitivos
    const string = "Olá Mundo!";
    const number = 10;
    const boolean = true;
    
    console.log(string.toUpperCase());

    // Type annotations (tipos explícitos)

    const MeuNome: string = 'Matheus'

    // Arrays

    type ArraydeStrings = string[]
    type ArraydeNumeros = Array<number>

    const algumaArray = ['Olá', 'Mundo']
    let arraydeNumeros : ArraydeNumeros = [1,2,3,4,5]

    // Tupla
    // É um array com tipos fixos e tamanho fixo
    const empregado: [string, number] = ['Pedro', 10]

    let estado : string
    const tuplaExemplo = [
        (estado = ''),
        function setState(s: string){
            estado = s
        }
    ] // as const -> para não ser inferido como string[]

    tuplaExemplo.push('Erro!')
    const [_, setState] = tuplaExemplo
    

    // any 

    let obj : any = { x : 0 }
    
    obj.foo() 
    obj() 
    obj.bar = 100
    obj = 'Hello'
    const n : number = obj

    // anotações de tipos para funções
    // funcao nome(parametros : tipoParametro) : tipoRetorno 
    function soma(x: number, y: number) : number {
        return x + y
    }

    // Objetos 

    function coord(ponto: {x: number, y: number}) : void {
        console.log('As coordenadas são: ', ponto.x, ponto.y)
    }

    //Propriedades opcionais
    function printName(obj: {first: string, last?: string}) : void {
        console.log(obj.last?.toUpperCase())
    }
    printName({first: 'Matheus'})
    printName({first: 'Matheus', last: 'Ferreira'})

    // Union

    function printId(id: number | string) : void {
        console.log('Seu id é: ', id)
    }

    function printId2 (id: number | string) : void {
        if(typeof id === 'string'){
            console.log(id.toUpperCase())
        } else {
            console.log(id)
        }
    }

    // Type aliases (tipos personalizados)

    type Ponto = {
        x: number
        y: number
    }

    function coord2(ponto: Ponto) : void {
        console.log('As coordenadas são: ', ponto.x, ponto.y)
    }

    // Interfaces
    /* Diferenças entre type e interface
        - Interfaces podem ser estendidas
        - Interfaces são mais comuns
    */

    interface Animal {
        nome: string
        tipo: 'terrestre' | 'aquático'
        domestico: boolean
    }

    
    interface Gato extends Animal {
        raca: string
    }

    const Gato : Gato = {
        nome: 'Gato',
        tipo: 'terrestre',
        domestico: true,
        raca: 'Vira-lata'
    }

    // Estendendo tipos

    type Empregado = {
        nome: string
        sobrenome: string
        dataNascimento: Date
    }

    type Empregado2 = Empregado & {
        setor: string
        funcao: string
    }

    // Tipos literais

    type Cores = 'Vermelho' | 'Azul' | 'Verde'
    const cor1 : Cores = 'Vermelho'

    // Enums

    enum Cores2 {
        Vermelho,
        Azul,
        Verde
    }

    const cor2 : Cores2 = Cores2.Azul // 1

}
