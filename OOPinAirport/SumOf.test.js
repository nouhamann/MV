
const Maths = require('./SumOf.js') // gets class Maths from the correct directory 
const math = new Maths // creates instance of class
// const {SumOf,Multiply} = require('./SumOf') //gets multiple functions from directory


test('2 + 5 = 7',()=>{ 
    expect(math.SumOf(2,5)).toBe(7) //uses class to refer to the method SumOf
})


test('6 + 55 = 61',()=>{
    expect(math.SumOf(6,55)).toBe(61)
})


test('5 + 9 = 14',()=>{
    expect(math.SumOf(5,9)).toBe(14)
})

test('5 * 9 = 45',()=>{
    expect(math.Multiply(5,9)).toBe(45)
})

test('10 / 5 = 2',()=>{
    expect(math.Division(10,5)).toBe(2)
})


// test('Allows only numbers',()=>{
//     expect(SumOf('a',4)).toThrow(Error)
//     expect(SumOf('8','m')).toThrow(Error)
// })