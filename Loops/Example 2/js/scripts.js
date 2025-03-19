// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

//ANOTHER WAY
// let i = 0;
// for (i <= 10; i++) {
//     console.log(i)
// }

//ANOTHER WAY
// for (let i = 0; i <= 10;) {
//     console.log(i)
//     i++
// }

//LOOP OVER LETTER
// let name = "Raymond"
// for(let i = 0; i<= name.length; i++) {
//     console.log(name.charAt(i))
// }

let name = "Raymond";
let counter = 0;
let myLetter;
while(counter <= 3) {
    myLetter = name[counter]
    if(counter === 1) {
        counter += 2
        continue;
    }
    console.log(myLetter)

    if(myLetter === "d") break;

    counter++
}