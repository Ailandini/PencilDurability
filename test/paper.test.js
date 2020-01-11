import { expect, assert } from 'chai';
import { Paper } from '../src/paper';

describe('tests for Paper module', function () {
    var sheet_one = new Paper();
    describe('Paper methods that don\'t require a Pencil', function () {
        it('//Depricated removed newPage() method// PAPER.newPage() creates an empty instance of a piece of paper', function () {
            expect(sheet_one).to.not.be.a('null');
        });
        it('//Depricated removed newPage() method// Assigning PAPER.newPage() assigns an object of type Paper', function () {
            assert(sheet_one instanceof Paper);
        });
        it("Calling Paper's method 'getText' returns a string", function () {
            expect(sheet_one.getText()).to.be.a('string');
        });
    });
    describe('Paper methods that require a Pencil', function() {
        describe('tests for addText', function() {
            it('addText adds the given text to the sheet, and getText returns updated value', function() {
                sheet_one.addText('Hello');
                assert.equal(sheet_one.getText(), 'Hello');
            });
        });
    });
});