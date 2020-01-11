class Pencil {
    constructor(input_point_durability) {
        this.point_durability = input_point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        var amount_to_reduce_length = text_to_write.trim().length;
        if(text_to_write.toUpperCase() == text_to_write) {
            amount_to_reduce_length *= 2;
        }
        this.point_durability = this.point_durability - amount_to_reduce_length;
    }
}

module.exports = {
    Pencil
}