// const newPage = function(){
//     return new Paper();
// }

class Paper {
    constructor() {
        this.text = '';
    }

    getText() {
        return this.text;
    }

    addText(text_to_add) {
        this.text = text_to_add;
    }
}

module.exports = {
    Paper
}