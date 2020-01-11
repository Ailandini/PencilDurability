class Pencil {
    constructor(input_point_durability) {
        this.point_durability = input_point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        //Would be own private function
        const amount_to_reduce_length = calculatePointDurabilityReduction(text_to_write);
        this.point_durability = (this.point_durability - amount_to_reduce_length);
    }
}

function calculatePointDurabilityReduction(text_to_write) {
    const number_of_caps = text_to_write.replace(/[^A-Z]/g,"").length;
    const no_space_text_length = text_to_write.trim().length;

    return no_space_text_length + number_of_caps;
}

module.exports = {
    Pencil
}