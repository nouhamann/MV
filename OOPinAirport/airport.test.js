const {Bag,Passenger,Plane,Traveller, crewMember}= require('./airport')
const passenger = new Passenger
const plane = new Plane

describe('Bag', function () {
    test('weight has to be lower than 23kg', function () {
        const bag = new Bag(10);
        expect(bag.isOverLimit()).toBe('Bag is correct weight');
    });

    test('Weight cannot be overlimit', ()=>{
        const bag = new Bag(30)
        expect(bag.isOverLimit()).toBe('Bag is over limit')
    })
})



describe('Passenger',()=>{
    test('is an instance of a Passenger', () => {
        const betty = new Passenger('Nouha','passport233','10A')
        expect(betty instanceof Passenger).toBeTruthy()
    })
})

describe('CrewMember',()=>{
    test('is an instance of a CrewMember', () => {
        const nouha = new crewMember('nouha','passport1002','attendant','12003')
        expect(nouha instanceof crewMember).toBeTruthy()
    })
})

describe('Passenger',()=>{
    test('bag has been added', ()=>{
        const n = new Passenger("nouha","100099",'10A')
        const nBag= new Bag(20)
        n.addBag(nBag)
        expect(n.bags).toHaveLength(1)
    })
})

describe('Traveller',()=>{
    test('is an instance of a Traveller', ()=>{
        const eleanor = new Traveller('Eleanor','passport123')
        expect(eleanor instanceof Traveller).toBeTruthy()
    })
})

describe('Plane',()=>{
    test('passenger has been added',()=>{
        const plane1= new Plane('etihad')
        const passenger2= new Passenger('eren','passport139','139A')
        plane1.board(passenger)
        expect.arrayContaining(passenger)
    })
})