import { expect, assert } from 'chai';
import { Paper } from '../src/paper';
import { Passphrase } from '../src/passphrase';

describe('tests for Paper module', function () {
    var sheet_one = new Paper();
    describe('Paper methods that don\'t require a Pencil Passphrase', function () {
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
    describe('Paper methods that require a Pencil Passphrase', function () {
        var passphrase = new Passphrase();
        beforeEach(function(){
            sheet_one = new Paper();
        });
        describe('tests for addText', function () {
            it('addText adds the given text to the sheet, and getText returns updated value', function () {
                sheet_one.addText('Hello', passphrase);
                assert.equal(sheet_one.getText(), 'Hello');
            });
            it('addText without a non-passphrase object returns empty', function() {
                sheet_one.addText('Hello', '');
                assert.equal(sheet_one.getText(), '');
            });
            it('addText without a second parameter returns empty', function(){
                sheet_one.addText('Hello');
                assert.equal(sheet_one.getText(), '');
            });
        });
    });
});