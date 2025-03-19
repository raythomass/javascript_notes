class Pizza {
    constructor(pizzaName, pizzaSize) {
        this.name = pizzaName
        this.crust = "Thin Crust"
        this.size = pizzaSize
        this.price = "$11.99"
        this.toppings = []
    }
    getToppings() {
        return this.toppings
    }
    setToppings(topping) {
        this.toppings.push(topping)
    }
    bake() {
        console.log(`Baking a ${this.size}, ${this.crust}, ${this.name}. The total will come out to ${this.price}`)
    }
}

const myPizza = new Pizza("Pepperoni", "Medium" )

myPizza.bake()
myPizza.setToppings("Sausage")
myPizza.setToppings("Pineapple")
console.log(myPizza.getToppings())