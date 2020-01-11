class Pencil {
    constructor(input_point_durability) {
        this.point_durability = input_point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        this.point_durability = this.point_durability - text_to_write.length;
    }
}

module.exports = {
    Pencil
}