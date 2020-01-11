class Pencil {
    constructor(input_point_durability) {
        this.point_durability = input_point_durability;
    }

    getPointDurability() {
        return this.point_durability;
    }

    write(text_to_write) {
        if(text_to_write.length == 0){
            return;
        }
        return this.point_durability--;
    }
}

module.exports = {
    Pencil
}