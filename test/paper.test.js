import {expect, assert} from 'chai';
const Paper = require('../src/paper');

describe('tests for paper module', function(){
    it('Paper.newPage() creates an empty instance of a piece of paper', function(){
        expect(Paper.newPage()).to.not.be.a('null');
    });
});