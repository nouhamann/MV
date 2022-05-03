class HireApp{
    greeting(){
        return('Welcome to the Scooter Hire App!')
    }    
}

class User{
    
    constructor(name,age){
    this.name=name
    this.age=age
    }
}



class Customer extends User{
    
    scooter;
    // scooters=[];
    constructor(name,age,bankBalance){
    super(name,age)
    this.bankBalance=bankBalance
    }
    hire(scooter){
        
        if(this.age>=18){
         if(scooter.charge===100){
            if(scooter.broken===false){
            
            this.scooter=scooter;

            // this.scooters.push(scooter)
            }
            }else{throw new Error('it must be fully charged')}
            }else{throw new Error("You must be 18 or above to rent scooter")}
    }

   scooterCharge(scooter){
       scooter.charge=100
   }

    breakScooter(scooter){
        scooter.broken=true
    }

    makePayment(){
        if(this.scooter.returnScooter === true){
            this.bankBalance -= 4
        }
    }  
}


class MaintenanaceUser extends User{
    // scooter=[];

    constructor(name,age){
    super(name,age)
    }
    repair(scooter){
        return scooter.broken = false;
    }
}



class Scooter{
    
    constructor(station,range,charge,broken,returnScooter){
        this.station=station;
        this.range=range;
        this.charge=charge;
        this.broken=broken;
        this.returnScooter=returnScooter
    
    }
    async charging() {
        if(this.charge < 100 ){
        console.log('Starting charge');

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

        console.log('Charge complete');
        this.charge = 100  
        }
   }
   checkBroken(){
    if(this.broken === true){
        throw new Error('you must call maintenance guy')
    }
}
    returns(){
        if(this.returnScooter === false){
            this.returnScooter = true
            }
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

welcome = new HireApp()
console.log(welcome.greeting())
nouha=new Customer('nouha',19,200)
scooter1=new Scooter('hiii',32,100,false)
scooterBroken=new Scooter('test',32,100,false)
london = new ChargingStation()

welcome.greeting()
london.addScooter(scooter1)
london.addScooter(scooterBroken)

// london.RemoveBroken()
// console.log(london.availableScooters)

john = new MaintenanaceUser('john',35)
//create charging station
// if(scooter1.charge === 100)
// {
//     ChargingStation.addScooter(scooter1);
// }

nouha.hire(scooter1)
// nouha.hire(scooterBroken)
nouha.breakScooter(scooter1)
// scooter1.checkBroken()
// scooter1.return()
// scooter1.checkBroken()
// brokenScooters = RemoveBroken();
// 
//     //remove from broken scooter array
// }
scooter1.returns()
nouha.makePayment()
// scooter1 = john.repair(scooter1);
console.log(nouha);

module.exports={HireApp,User,Customer,MaintenanaceUser,Scooter,ChargingStation}

