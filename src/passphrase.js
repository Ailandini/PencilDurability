class Passphrase {
    constructor() {
        this.phrase = Math.random().toString(36).substring(2,8);
    }

    phrase() {
        return this.phrase;
    }
}

module.exports = {
    Passphrase
}