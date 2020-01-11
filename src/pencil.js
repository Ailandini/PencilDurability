class Pencil {
    constructor(point_durability) {
        this.point_durability = point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        return;
    }
}

module.exports = {
    Pencil
}