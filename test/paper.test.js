import { expect, assert } from 'chai';
import { Paper } from '../src/paper';
import { Passphrase } from '../src/passphrase';

describe('tests for Paper module', function () {
    var sheet_one = new Paper();
    var passphrase = new Passphrase();
    describe('Paper methods that don\'t require a Pencil Passphrase', function () {
        it('//Depricated removed newPage() method// Assigning PAPER.newPage() assigns an object of type Paper', function () {
            assert(sheet_one instanceof Paper);
        });
        it("Calling Paper's method 'getText' returns a string", function () {
            expect(sheet_one.getText()).to.be.a('string');
        });
        describe('tests for clear() method', function () {
            it('clear() returns written text back to ""', function () {
                sheet_one.addText('Hello World', passphrase);
                sheet_one.clear();
                assert.equal(sheet_one.getText(), '');
            });
        });
    });
    describe('Paper methods that require a Pencil Passphrase', function () {
        beforeEach(function () {
            sheet_one = new Paper();
        });
        describe('tests for addText', function () {
            it('addText adds the given text to the sheet, and getText returns updated value', function () {
                sheet_one.addText('Hello', passphrase);
                assert.equal(sheet_one.getText(), 'Hello');
            });
            it('addText without a non-passphrase object returns empty', function () {
                sheet_one.addText('Hello', '');
                assert.equal(sheet_one.getText(), '');
            });
            it('if there is already text on the paper, addText appends the new text to the current text', function () {
                sheet_one.addText('Hello', passphrase);
                sheet_one.addText(' World!', passphrase);
                assert.equal(sheet_one.getText(), 'Hello World!');
            });
        });
        describe('tests for eraseText', function () {
            beforeEach(function () {
                sheet_one.addText('Hello World! Hello', passphrase);
            });
            it('passing a single character that is on the paper, removes the right most occurrence of that text', function () {
                sheet_one.eraseText('o', passphrase);
                assert.equal(sheet_one.getText(), 'Hello World! Hell ');
            });
            it('passing a text value not contained on the paper erases nothing', function () {
                sheet_one.eraseText('cats', passphrase);
                assert.equal(sheet_one.getText(), 'Hello World! Hello');
            });
            it('passing text to eraseText that is on paper removes the right most occurrence of that full text', function () {
                sheet_one.eraseText('Hello', passphrase);
                assert.equal(sheet_one.getText(), 'Hello World!      ');
            });
            it('passing the same text more than once erases that text one instance at a time right-to-left', function () {
                sheet_one.eraseText('o', passphrase);
                sheet_one.eraseText('o', passphrase);
                assert.equal(sheet_one.getText(), 'Hello W rld! Hell ');
            });
        });
        describe('tests for editText', function () {
            beforeEach(function () {
                sheet_one = new Paper();
                sheet_one.addText('Hello World', passphrase);
            });
            it('when nothing is erased from the paper, do not change the text', function() {
                sheet_one.editText('edited', passphrase);
                assert.equal(sheet_one.getText(), 'Hello World');
            });
        });
    });
});