//Factory Function
// function pizzaFactory(pizzaSize) {
//     const crust = "Thin Crust"
//     const size = pizzaSize
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     }
// } 

// const myPizza = pizzaFactory("Medium")
// myPizza.bake()

class Pizza {
    crust = "Original";
    #sauce = "Red Sauce";
    #size;
    constructor (pizzaSize) {
        this.#size = pizzaSize
    }
    getCrust() {
        return this.crust
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
    }
}

const myPizza = new Pizza("Large")
myPizza.hereYouGo()
console.log(myPizza.sauce)