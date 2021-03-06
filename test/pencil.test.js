import { expect, assert } from 'chai';
import { Pencil } from '../src/pencil';
import { Paper } from '../src/paper';

describe('tests for Pencil module', function () {
    var pencil_one;
    var sheet_one;
    beforeEach(function() {
        sheet_one = new Paper();
    })
    describe('point durability tests', function () {
        beforeEach(function () {
            pencil_one = new Pencil(12);
        });

        it('pencil takes a parameter for point durability and can return it', function () {
            expect(pencil_one.getPointDurability(), '12');
        });
        describe('point durability after writing tests', function () {
            
            it('writing with "" with the pencil does not decrease pencil durability', function () {
                pencil_one.write("", sheet_one);
                assert.equal(pencil_one.getPointDurability(), '12');
            });
            it('writing "h" reduced pencil durability by 1', function () {
                pencil_one.write("h", sheet_one);
                assert.equal(pencil_one.getPointDurability(), '11');
            });
            it('writing "hello" reduces pencil durability by 5', function () {
                pencil_one.write("hello", sheet_one);
                assert.equal(pencil_one.getPointDurability(), 7);
            });
            it('writing " hello " only reduces pencil durability by 5', function () {
                pencil_one.write(" hello ", sheet_one);
                assert.equal(pencil_one.getPointDurability(), 7);
            });
            it('writing "HELLO" reduces pencil durability by 2x "hello"', function () {
                pencil_one.write("HELLO", sheet_one);
                assert.equal(pencil_one.getPointDurability(), 2);
            });
            it('writing "HeLlO" reduces point durability to 4', function () {
                pencil_one.write("HeLlO", sheet_one);
                assert.equal(pencil_one.getPointDurability(), 4);
            });
            it('check that write still calculates correctly when spaces are in the middle of text', function () {
                pencil_one.write("He ww HH d r", sheet_one);
                assert.equal(pencil_one.getPointDurability(), 1);
            });
            it('check that point durability never drops below 0', function () {
                pencil_one.write("Hello World Everyone!", sheet_one);
                assert.equal(pencil_one.getPointDurability(), 0);
            });
        });
    });
    describe('sharpen tests', function () {

        beforeEach(function () {
            pencil_one = new Pencil(12, 1);
        });
        it('calling getLength() on pencil returns pencil length', function () {
            assert.equal(pencil_one.getLength(), 1);
        });

        describe('pencil length after sharpening', function () {
            beforeEach(function () {
                pencil_one.write("Hello World", sheet_one);
                pencil_one.sharpen();
            });
            it('calling sharpen() on a pencil returns its point durability to the original value', function () {
                assert.equal(pencil_one.getPointDurability(), 12);
            });
            it('calling sharpen() reducees pencil length by 1', function () {
                assert.equal(pencil_one.getLength(), 0);
            });
            it('sharpening when length is 0 does not decrease length or return point durability', function () {
                var current_point_durability = pencil_one.getPointDurability();
                pencil_one.sharpen();
                assert.equal(pencil_one.getPointDurability(), current_point_durability);
                assert.equal(pencil_one.getLength(), 0);
            });
        });
    });
    describe('eraser durability tests', function () {
        beforeEach(function () {
            pencil_one = new Pencil(20, 2, 10);
            pencil_one.write('Hello World', sheet_one);
        });
        it('calling getEraserDurability returns eraser durability', function() {
            assert.equal(pencil_one.getEraserDurability(), 10);
        });
        describe('eraser durability after erase tests', function() {
            it('Using eraser on five characters reduces eraser durability by 5', function() {
                pencil_one.erase('World', sheet_one);
                assert.equal(pencil_one.getEraserDurability(), 5);
            });
            it('erasing a space does not decrement the eraser durability', function(){
                pencil_one.erase(' ', sheet_one);
                assert.equal(pencil_one.getEraserDurability(), 10);
            });
            it('Using eraser on any word whose length is less than eraser durability changes the durability to current - length', function() {
                pencil_one.erase('W', sheet_one);
                assert.equal(pencil_one.getEraserDurability(), 9);
            });
            it('erasing text containing spaces only decrements eraser durability for non-space length', function() {
                pencil_one.erase('o W', sheet_one);
                assert.equal(pencil_one.getEraserDurability(), 8);
            });
            it('erasing text that is not on the given paper does not decrement eraser durability', function() {
                pencil_one.erase('cats', sheet_one);
                assert.equal(pencil_one.getEraserDurability(), 10);
            });
            it('dropping below 0 ED returns ED to 0', function() {
                pencil_one.write('!!!', sheet_one);
                pencil_one.erase('Hello World!!!', sheet_one);
                assert.equal(pencil_one.getEraserDurability(), 0);
            })
        });
    });
    describe('write function tests', function() {
        beforeEach(function(){
            pencil_one = new Pencil(6, 1, 6);
        });
        it('pencil writes "hello" on sheet_one', function(){
            pencil_one.write('Hello', sheet_one);
            assert.equal(sheet_one.getText(), 'Hello');
        });
        it('pencil stops writing when PD becomes 0 and text has trailing spaces', function(){
            pencil_one.write('Hello World!', sheet_one);
            assert.equal(sheet_one.getText(), 'Hello ')
        });
        it('pencil writing stops correctly when PD becomes 0 and text has innerspaces', function() {
            pencil_one.write('H     World!', sheet_one);
            assert.equal(sheet_one.getText(), 'H     Wor');
        });
        it('pencil writing stops correctly when PD becomes 0 and text has leading spaces', function() {
            pencil_one.write('   H     World!', sheet_one);
            assert.equal(sheet_one.getText(), '   H     Wor');
        });
    });
    describe('erase function tests', function() {
        beforeEach(function(){
            pencil_one = new Pencil(6, 1, 4);
            pencil_one.write('Hello', sheet_one);
        });
        it('pencil erases second character when two are present from sheet_one', function() {
            pencil_one.erase('l', sheet_one);
            assert.equal(sheet_one.getText(), 'Hel o'); 
        });
        it('pencil erases everything up until ED is 0', function() {
            pencil_one.erase('Hello', sheet_one);
            assert.equal(sheet_one.getText(), 'H    ');
        });
    });
    describe('edit function tests', function() {
        beforeEach(function () {
            pencil_one = new Pencil(15,1,10);
            pencil_one.write('Hello World', sheet_one);
        });
        it('pencil edit does nothing if no text has been erased', function () {
            pencil_one.edit('edit', sheet_one);
            assert.equal(sheet_one.getText(), 'Hello World');
        });
        it('pencil edit adds text to left-most erased location', function () {
            pencil_one.erase('Hello', sheet_one);
            pencil_one.erase('Wor', sheet_one);
            pencil_one.edit('ed', sheet_one);
            assert.equal(sheet_one.getText(), 'ed       ld');
        });
        it('pencil edit decrements point durability as expected', function () {
            pencil_one.erase('Hello', sheet_one);
            pencil_one.edit('edit', sheet_one);
            assert.equal(pencil_one.getPointDurability(), 0);
        });
        it('pencil edit writes as expected when point durability is expended', function () {
            pencil_one.erase('Hello', sheet_one);
            pencil_one.edit('edit', sheet_one);
            assert.equal(sheet_one.getText(), 'edi   World');
        });
        it('pencil edit does not decrement point durability if there is no where to edit', function () {
            pencil_one.edit('edit', sheet_one);
            assert.equal(pencil_one.getPointDurability(), 3);
        });
    });
});

