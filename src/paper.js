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
        const vacancies = this.text_vacancies;
        const text_to_be_edited = this.text;
        if(!(passphrase instanceof Passphrase) || vacancies.length == 0) {
            return;
        }
        const vacancy_location = vacancies[0][0];
        const vacancy_length = vacancies[0][1];

        const overlap_start = vacancy_location + vacancy_length;
        const overlap_text = edit_text.substring(vacancy_length);
        
        const adjusted_overlap_text = decideEditOverflowOutput(text_to_be_edited, overlap_text, overlap_start);
        
        const adjusted_edit_text = edit_text.substring(0,vacancy_length) + adjusted_overlap_text;
        const text_after_edit = text_to_be_edited.substring(0, vacancy_location) + adjusted_edit_text + text_to_be_edited.substring(vacancy_location + edit_text.length);
        
        this.text = text_after_edit;
        this.text_vacancies = vacancies.splice(1);
    }
}

function decideEditOverflowOutput(text_to_be_edited, overlap_text, overlap_start) {
    const overlap_length = overlap_text.length;
    var adjusted_overlap_text = '';
    var count = 0;
    for(var i=overlap_start; i < overlap_start + overlap_length; i++) {
        if(text_to_be_edited[i] != ' ') {
            adjusted_overlap_text += '@';
        } 
        else {
            adjusted_overlap_text += overlap_text[count];
        }
        count++;
    }
    return adjusted_overlap_text;
}

export {
    Paper
}