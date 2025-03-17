let soup = "Chicken Noolde"
let customerBanned = false;

let soupAccess = customerBanned
    ? "No soup for you"
    : soup
    ? `we have ${soup}`
    : "NO soup today"

console.log(soupAccess)