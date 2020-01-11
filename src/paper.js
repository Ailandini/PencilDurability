const newPage = function(){
    return new Paper();
}

class Paper {
    constructor() {
        this.text = '';
    }

    getText() {
        return this.text;
    }
}

module.exports = {
    newPage,
    Paper
}