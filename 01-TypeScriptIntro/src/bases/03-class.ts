import axios from 'axios';
import { Move, Pokeapiresponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon{


get imageUrl():string{
    return `https://pokemon.com/${ this.id}.jpg`;
}

    constructor(
        public readonly id:number,
        public name:string
        ){      
    }
    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak(){
        console.log(`${this.name},${this.name}`)
    }
    async getMoves(): Promise<Move[]>{
        10;
        const { data }= await axios.get<Pokeapiresponse>('http://pokeapi.co/api/v2/pokemon/4');
        const moves=data.moves;
        return moves;
    }
}
export const charmander= new Pokemon(1,'charmander')

// charmander.speak();
// charmander.scream()
charmander.getMoves();