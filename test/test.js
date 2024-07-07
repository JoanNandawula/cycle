import {expect} from 'chai';
import {multiply} from '../multiply.js'

describe('Multiply', function() {
    //test cycle 1
    it('should return 1 when multiplying 1 and 1', () => {
    var a = 1
    var b = 1

    var c = multiply(a,b)

    expect(c).to.equal(1)
    })

        //test cycle 2
        it('should return 4 when multiplying 2 and 2', () => {
            var a = 2
            var b = 2
        
            var c = multiply(a,b)
        
            expect(c).to.equal(4)
            })

              //test cycle 3
        it('should return 9 when multiplying 3 and 3', () => {
            var a = 3
            var b = 3
        
            var c = multiply(a,b)
        
            expect(c).to.equal(9)
            })

                  //test cycle 4
        it('should return 16 when multiplying 4 and 4', () => {
            var a = 4
            var b = 4
        
            var c = multiply(a,b)
        
            expect(c).to.equal(16)
            })

                         //test cycle 5
        it('should return 1035 when multiplying 23 and 45', () => {
            var a = 23
            var b = 45
        
            var c = multiply(a,b)
        
            expect(c).to.equal(1035)
            })


  

    })



