import { Passphrase } from '../src/passphrase'
import { assert, expect } from 'chai';

describe('tests for passphrase class', function () {
    var passphrase = new Passphrase;
    it('passphrase variable is an instance of Passphrase', function(){
        assert(passphrase instanceof Passphrase);
    });
    it('other objects are not instances of passphrase', function(){
        assert(!('' instanceof Passphrase));
    });
    it('passphrase.phrase returns the arbitrary passphrase', function(){
        expect(passphrase.phrase).to.be.a('string');
    });
});