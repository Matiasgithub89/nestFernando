class newPokemon{
    constructor(
        public readonly id:number,
        public  name: string,
        ){}     
    scream(){
        console.log(`NO QUIERO!!!`);
    }
    speack(){
        console.log(`NO quiero hablar!`);
    }
}

const MyDecorator=()=>{
    return (target: Function)=>{
        console.log(target)
        return newPokemon
    }
}


@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id:number,
        public  name: string,
        ){}     
    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speack(){
        console.log(`${this.name},${this.name}!`)
    }
}
export const charmander = new Pokemon(4,'Charmander')
charmander .scream();
charmander.speack();