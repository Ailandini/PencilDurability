import { Passphrase } from './passphrase';

class Paper {
    constructor() {
        this.text = '';
    }

    getText() {
        return this.text;
    }

    addText(text_to_add, passphrase) {
        if(!(passphrase instanceof Passphrase)) {
            return;
        }
        this.text += text_to_add;
    }
}

export {
    Paper
}