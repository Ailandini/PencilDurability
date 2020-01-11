class Pencil {
    constructor(input_point_durability) {
        this.point_durability = input_point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        const amount_to_reduce_length = calculatePointDurabilityReduction(text_to_write);
        var new_point_durability = (this.point_durability - amount_to_reduce_length);

        if(new_point_durability < 0) {
            new_point_durability = 0;
        }
        
        this.point_durability = new_point_durability;
    }
}

function calculatePointDurabilityReduction(text_to_write) {
    const number_of_caps = text_to_write.replace(/[^A-Z]/g,"").length;
    const no_space_text_length = text_to_write.replace(/\s/g, "").length;

    return no_space_text_length + number_of_caps;
}

module.exports = {
    Pencil
}