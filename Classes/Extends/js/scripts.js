class Pizza {
    constructor (pizzaSize) {
        this.crust = "Thin Crust"
        this.size = pizzaSize
        this.price = "$11.99"
    }
    getCrust() {
        return this.crust
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize)
        this.type = "Hawaiian"
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
    }
}

const mySpecialty = new SpecialtyPizza("Medium")
mySpecialty.slice();