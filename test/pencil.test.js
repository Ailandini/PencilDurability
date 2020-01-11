import { expect, assert } from 'chai';
import { Pencil } from '../src/pencil';

describe('tests for Pencil module', function () {
    var pencil_one;
    
    beforeEach(function () {
        pencil_one = new Pencil(12);
    });

    it('pencil takes a parameter for point durability and can return it', function () {
        expect(pencil_one.getPointDurability(), '12');
    });
    it('writing with "" with the pencil does not decrease pencil durability', function () {
        pencil_one.write("");
        assert.equal(pencil_one.getPointDurability(), '12');
    });
    it('writing "h" reduced pencil durability by 1', function () {
        pencil_one.write("h");
        assert.equal(pencil_one.getPointDurability(), '11');
    });
    it('writing "hello" reduces pencil durability by 5', function () {
        pencil_one.write("hello");
        assert.equal(pencil_one.getPointDurability(), 7);
    });
    it('writing " hello " only reduces pencil durability by 5', function(){
        pencil_one.write(" hello ");
        assert.equal(pencil_one.getPointDurability(), 7);
    });
    it('writing "HELLO" reduces pencil durability by 2x "hello"', function(){
        pencil_one.write("HELLO");
        assert.equal(pencil_one.getPointDurability(), 2);
    });
});