class HireApp{
    greeting(User){
        console.log('Welcome to the Scooter Hire App!' )
    }    
}

class User{
    
    constructor(name,age){
    this.name=name
    this.age=age
    this.s
    }
}



class Customer extends User{
    
    scooter=[];
    constructor(name,age,bankBalance){
    super(name,age)
    this.bankBalance=bankBalance
    }
    hire(scooters){
        
        if(this.age>=18){
         if(scooters.charge===100){
            if(scooters.broken===false){
            this.scooter.push(scooters)
            }}}
            // }else{throw new Error('it must be fully charged')}
            // }else{throw new Error("You must be 18 or above to rent scooter")}
    }


   scooterCharge(scooters){
       if(scooters.charge<100){
        scooters.charge=100
        }
    }

    breakScooter(scooters){
        if(scooters.broken === false)
        scooters.broken=true
        // console.log('Maintenance man must fix your broken scooter')
    }
    repairScooter(scooters){
        if(scooters.broken=== true){
            scooters.broken = false
        }
    } 
}


class MaintenanaceUser extends User{
    constructor(name,age){
    super(name,age)
    }   
   
}



class Scooter{
    
    constructor(station,range,charge,broken,returnScooter){
        this.station=station;
        this.range=range;
        this.charge=charge;
        this.broken=broken
        this.returnScooter=returnScooter
    }
    async charge() {
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');   
    }
    checkBroken(){
        if(this.broken === true){
            throw new Error('you must call maintenance guy')
        }
    }

    return(){
        if(this.returnScooter===false)
        this.returnScooter=true
        }
    }


class CardInfo{
    constructor(name,cardNumber,cvc,expiryDate){
        this.name=name;
        this.cardNumber=cardNumber;
        this.cvc=cvc;
        this.expiryDate=expiryDate
    }

}




class ChargingStation{
availableScooters=[]

addScooter(scooter){
    this.availableScooters.push(scooter);
}

RemoveBroken(){
    for(let i=0; i<this.availableScooters.length;i++){
        if(this.availableScooters[i].broken === true){
            this.availableScooters.splice(i,1)
            }
        }
    }
}

class Shape {

    constructor(numberOfSides=4, colour="red") {
        this.numberOfSides = numberOfSides
        this.colour = colour
    }
}

welcome = new HireApp()

nouha=new Customer('nouha',19,200)
welcome.greeting(nouha)

circle = new Shape(6,'blue')
console.log(circle)

scooter1 =new Scooter('user1001',32,10,false,false)
scooter2 =new Scooter('user2002',32,100,false,false)
scooter3 =new Scooter('user3003',32,100,false,false)
scooter4 =new Scooter('user4004',32,100,false,false)
scooter5 =new Scooter('user5005',32,100,false,false)


london = new ChargingStation()

london.addScooter(scooter1)
london.addScooter(scooter2)
london.addScooter(scooter3)
london.addScooter(scooter4)
london.addScooter(scooter5)

//

john = new MaintenanaceUser('john',35)
//create charging station
// if(scooter1.charge === 100)
// {
//     ChargingStation.addScooter(scooter1);
// }



// 
nouha.scooterCharge(scooter1)
nouha.hire(scooter1)
nouha.hire(scooter2)
// nouha.hire(scooter3)
// nouha.hire(scooter4)
// nouha.hire(scooter5)
nouha.breakScooter(scooter1)
london.RemoveBroken()
scooter1.checkBroken()
nouha.repairScooter(scooter1)

scooter1.return()

// console.log(nouha) 

