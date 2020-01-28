import { Passphrase } from './passphrase';

class Paper {
    constructor() {
        this.text = '';
        this.text_vacancies = [];
    }

    getText() {
        return this.text;
    }

    getVacancies() {
        return this.text_vacancies;
    }

    addText(text_to_add, passphrase) {
        if(!(passphrase instanceof Passphrase)) {
            return;
        }
        this.text += text_to_add;
    }

    clear() {
        this.text = '';
    }

    eraseText(text_to_erase, passphrase) {
        if(!(passphrase instanceof Passphrase) || this.text.indexOf(text_to_erase) < 0) {
            return;
        }
        const erase_index = this.text.lastIndexOf(text_to_erase);
        const erase_text_length = text_to_erase.length;
        const remaining_text = this.text.substring(0, erase_index) + ' '.repeat(erase_text_length) + this.text.substring(erase_index+erase_text_length);
        this.text = remaining_text;

        this.text_vacancies.push([erase_index, erase_text_length]);
        this.text_vacancies.sort();
    }

    editText(edit_text, passphrase) {
        var vacancies = this.text_vacancies;
        if(!(passphrase instanceof Passphrase) || vacancies.length == 0) {
            return;
        }
        const edit_location = vacancies[0][0];
        const vacancy_length = vacancies[0][1];
        const text_overflow_index = edit_location + vacancy_length;
        var overlap_text = edit_text.substring(vacancy_length);
        
        var adjusted_overlap_text = '';
        var count = 0;
        for(var i=text_overflow_index; i < text_overflow_index + overlap_text.length; i++) {
            if(this.text[i] != ' ') {
                adjusted_overlap_text += '@';
            } 
            else {
                adjusted_overlap_text += overlap_text[count];
            }
            count++;
        }
        
        var adjusted_edit_text = edit_text.substring(0,vacancy_length) + adjusted_overlap_text;
        const text_after_edit = this.text.substring(0, edit_location) + adjusted_edit_text + this.text.substring(edit_location + edit_text.length);
        
        this.text = text_after_edit;
        this.text_vacancies = vacancies.splice(1);
    }
}


export {
    Paper
}