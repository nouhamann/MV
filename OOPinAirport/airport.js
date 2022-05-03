class Bag{
    constructor(weight){
        this.weight = weight
    }
    isOverLimit(){
        if (this.weight>23){
            return 'Bag is over limit'
        }return 'Bag is correct weight'
    }
}

try{
    const bag = new Bag(19)
}catch{
    alert('error')
}


class Traveller{
    bags=[];
    constructor(name,passportNumber){
        this.name=name;
        this.passportNumber=passportNumber;
    }
    addBag(Bag){
        this.bags.push(Bag)
    }
}


class Passenger extends Traveller{
    
    constructor(name, passportNumber, seatNumber){
        super(name,passportNumber);
        this.seatNumber = seatNumber;
    }
    callAttendant(){
        return 'Excuse me, I need some assistance'
    }
    
}


class crewMember extends Traveller{
    constructor(name,passportNumber,position,staffNumber){
        super(name,passportNumber);
        this.position= position;
        this.staffNumber=staffNumber;
    }
    setDoorsToManual(){
        return 'Door has been set to manual'
    }
}


class Airport{
    constructor(name){
        this.name=name
    }
}


class Plane{
    passenger=[];
    constructor(type){
        this.type=type
    }
    board(Passenger){
        this.passenger.push(Passenger)

    }
}

class Runway{
    static maxPlanesOnRunway=10;
    static planes = [];

    constructor(name){
        this.name = name
    }
    addPlane(Plane){
        if (Runway.planes.length>Runway.maxPlanesOnRunway){
            throw new Error("Runways are at maximum capacity")
        }
        Runway.planes.push(Plane)
    }
}


const eleanor = new crewMember('Eleanor','passport210','Attendant','350')
const eleanorBag=new Bag(21)
eleanor.addBag(eleanorBag)
console.log(eleanor)


const plane= new Plane('British Airways')
const plane2 = new Plane('Emirates')
const plane3 = new Plane('Easyjet')


const nouha= new Passenger('Nouha', 'passport250','10A' )
const nouhaBag = new Bag(20)
nouha.addBag(nouhaBag)
plane.board(nouha)
console.log(nouha)

const runwayOne = new Runway('One')
runwayOne.addPlane(plane)
runwayOne.addPlane(plane2)
runwayOne.addPlane(plane3)


console.log(Runway.planes)




if(!nouhaBag.isOverLimit()){
    nouha.addBag(nouhaBag)
}
module.exports={Bag,Passenger,Plane,Airport,crewMember,Runway,Traveller}