class Pencil {
    constructor(input_point_durability) {
        this.point_durability = input_point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        var amount_to_reduce_length = text_to_write.trim().length;
        var number_of_caps = text_to_write.replace(/[^A-Z]/g,"").length;
        
        this.point_durability = this.point_durability - (amount_to_reduce_length + number_of_caps);
    }
}

module.exports = {
    Pencil
}