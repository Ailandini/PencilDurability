import { expect, assert } from 'chai';
import { Pencil } from '../src/pencil';

describe('tests for Pencil module', function () {
    var pencil_one;

    describe('point durability tests', function () {
        beforeEach(function () {
            pencil_one = new Pencil(12);
        });

        it('pencil takes a parameter for point durability and can return it', function () {
            expect(pencil_one.getPointDurability(), '12');
        });
        describe('point durability after writing tests', function () {
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
            it('writing " hello " only reduces pencil durability by 5', function () {
                pencil_one.write(" hello ");
                assert.equal(pencil_one.getPointDurability(), 7);
            });
            it('writing "HELLO" reduces pencil durability by 2x "hello"', function () {
                pencil_one.write("HELLO");
                assert.equal(pencil_one.getPointDurability(), 2);
            });
            it('writing "HeLlO" reduces point durability to 4', function () {
                pencil_one.write("HeLlO");
                assert.equal(pencil_one.getPointDurability(), 4);
            });
            it('check that write still calculates correctly when spaces are in the middle of text', function () {
                pencil_one.write("He ww HH d r");
                assert.equal(pencil_one.getPointDurability(), 1);
            });
            it('check that point durability never drops below 0', function(){
                pencil_one.write("Hello World Everyone!");
                assert.equal(pencil_one.getPointDurability(), 0);
            });
        });
    });

});

