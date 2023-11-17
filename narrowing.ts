export default function () {

    /*  
        Type of
        "string"
        "number"
        "boolean"
        "symbol"
        "bigint"
        "object"
        "function"
        "undefined"
    */

    console.log(typeof 'Matheus')

    // Predicados de tipo

    type TemNome = { nome: string }
    type TemSobrenome = { sobrenome: string }

    function eTemNome(obj: any): obj is TemNome {
        return !!obj && typeof obj === 'object' && 'nome' in obj
    }
    

    // Tipo never

    interface Triângulo {
        tipo: 'triângulo'
        lado : number
    }

    interface Quadrado { 
        tipo: 'quadrado'
        lado: number
    }

    type Forma = Triângulo | Quadrado

    function area(forma: Forma) : number {
      switch(forma.tipo) {
        case 'triângulo': 
            return forma.lado * forma.lado
        case 'quadrado':
            return forma.lado * forma.lado
        default:
            const _exaustivo: never = forma
            return _exaustivo
      }
    }
    /* 
        A checagem de exaustividade é uma maneira de garantir 
        que você não esqueceu de tratar algum caso.
    */

    function ThrowError(mensagem: string) : never {
        throw new Error(mensagem)
    }
    
}
