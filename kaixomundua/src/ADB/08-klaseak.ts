class PersonaNormal{

    constructor(
        public nombre: string,
        public direccion: string
    ){}

}

class Heroe extends PersonaNormal{
    
    constructor (
        public alterEgo: string,
        public nombreReal: string,
        public edad?: number  
    ){
        super( nombreReal,"New York, USA")
    }

}

const ironMan = new Heroe("IronMan","Tony",33);

console.log(ironMan);