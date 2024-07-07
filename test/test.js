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

              //test cycle 2
        it('should return 9 when multiplying 3 and 3', () => {
            var a = 3
            var b = 3
        
            var c = multiply(a,b)
        
            expect(c).to.equal(9)
            })

  

    })



