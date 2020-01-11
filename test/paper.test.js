import {expect, assert} from 'chai';
const PAPER = require('../src/paper');

describe('tests for paper module', function(){
    var sheet_one = PAPER.newPage();
    it('Paper.newPage() creates an empty instance of a piece of paper', function(){
        expect(sheet_one).to.not.be.a('null');
    });
    it('Assigning Paper.newPage() assigns an object of type Paper', function(){
        assert(sheet_one instanceof PAPER.Paper);
    });
    it("Calling Paper's method 'getText' returns a string", function() {
        expect(sheet_one.getText()).to.be.a('string');
    });
});