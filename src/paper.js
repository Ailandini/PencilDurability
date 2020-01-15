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

    eraseText(text_to_erase, passphrase) {
        if(!(passphrase instanceof Passphrase)) {
            return;
        }
        this.text = this.text.substring(0, this.text.length -1);
    }
}

export {
    Paper
}