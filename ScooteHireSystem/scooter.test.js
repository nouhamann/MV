const {HireApp,User,Customer,MaintenanaceUser,Scooter,ChargingStation}= require('./scooter.js')

test('greeting to scooter app',()=>{
    const welcome= new HireApp()
    welcome.greeting()
    expect(welcome.greeting()).toBe('Welcome to the Scooter Hire App!')
})

test('is an instance of a Customer',() =>{
    const eleanor = new Customer('eleanor',20,30000)
    expect(eleanor instanceof Customer).toBeTruthy()
})

test('is not an instance of a Scooter',()=>{
    expect(nouha instanceof Scooter).toBeFalsy()
})

test('Hire scooter',()=>{
    const joe = new Customer('joe',30,400)
    const scooter30 = new Scooter('london',32,100,false,false)
    joe.hire(scooter30)
    expect.arrayContaining(scooter30)
})

test('check break scooter function',()=>{
    const lol = new Customer('lol',20,400)
    const scoo = new Scooter('looll',32,100,false,false)
    lol.breakScooter(scoo)
    expect(scoo.broken).toBeTruthy()
})

test('check scooter charge function',()=>{
    const anna = new Customer('anna',21,200)
    const scooter = new Scooter('london', 32,90,false,false)
    anna.scooterCharge(scooter)
    expect(scooter.charge).toBe(100)
})

test('check make payment function',()=>{
    const holly = new Customer('holly',21,300)
    const scooter =new Scooter('london',32,100,false,true)
    holly.hire(scooter)
    holly.makePayment()
    expect(holly.bankBalance).toBe(296)
})

test('add scooter function',()=>{
    london = new ChargingStation()
    scooter = new Scooter('london',32,100,false,false)
    london.addScooter(scooter)
    expect(london.availableScooters).toHaveLength(1)

})

test('checkBroken function',()=>{
    const scooter= new Scooter('lool',32,100,true,false)

    try{
        scooter.checkBroken()
    }
    catch(error){
        expect(error.toString()).toBe('Error: you must call maintenance guy')
    }
})

// test('hire function',()=>{

// })