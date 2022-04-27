class Bag{
    constructor(weight){
        this.weight = weight
    }
    isOverLimit(){
        if (this.weight>23){
            throw new Error('Bag is over limit')
        }
    }
}

try{
    const bag = new Bag(19)
}catch{
    alert('error')
}

class Passenger{
    bags=[];
    constructor(name, passportNumber, seatNumber){
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber
    }
    addBag(Bag){
        this.bags.push(Bag)
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

class crewMember{
    constructor(name,position,staffNumber){
        this.name=name;
        this.position= position;
        this.staffNumber=staffNumber
    }
}

const plane= new Plane('British Airways')
const nouha= new Passenger('Nouha', 'passport250','10A' )
const nouhaBag = new Bag(20)
plane.board(nouha)

if(!nouhaBag.isOverLimit()){
    nouha.addBag(nouhaBag)
}
