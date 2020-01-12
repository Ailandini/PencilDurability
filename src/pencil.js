import { Passphrase } from './passphrase'

class Pencil {
    constructor(input_point_durability = 10, input_pencil_length = 1, input_eraser_durability = 10) {
        this.point_durability = this.original_point_durability = input_point_durability;
        this.pencil_length = input_pencil_length;
        this.eraser_durability = input_eraser_durability;
        this.passphrase = new Passphrase;
    }

    getPointDurability() {
        return this.point_durability;
    }

    getLength() {
        return this.pencil_length;
    }

    getEraserDurability() {
        return this.eraser_durability;
    }

    write(text_to_write, paper_to_write_on) {
        const amount_to_reduce_length = calculatePointDurabilityReduction(text_to_write);
        var new_point_durability = (this.point_durability - amount_to_reduce_length);
        var number_of_characters_to_write = text_to_write.length;
        if(new_point_durability < 0) {
            new_point_durability = 0;
            number_of_characters_to_write = 0;
            var text_to_write_index = 0;
            var text_cost = this.point_durability;
            while((text_cost > 0 && text_to_write.length > text_to_write_index) || text_to_write[text_to_write_index] == " ") {
                var text_to_write_char = text_to_write[text_to_write_index]
                if(text_to_write_char == " ") {

                }
                else if(text_to_write_char.toUpperCase() == text_to_write_char){
                    text_cost -= 2;
                }
                else {
                    text_cost--;
                }
                number_of_characters_to_write++;
                text_to_write_index++;
            }
        }


        
        this.point_durability = new_point_durability;
        const text_that_can_be_written = text_to_write.substring(0, number_of_characters_to_write);
        
        paper_to_write_on.addText(text_that_can_be_written, this.passphrase);
    }

    sharpen() {
        if(this.pencil_length == 0){
            return;
        }
        this.point_durability = this.original_point_durability;
        this.pencil_length--;
    }
}

function calculatePointDurabilityReduction(text_to_write) {
    const number_of_caps = text_to_write.replace(/[^A-Z]/g,"").length;
    const no_space_text_length = text_to_write.replace(/\s/g, "").length;

    return no_space_text_length + number_of_caps;
}

export {
    Pencil
}