


let test = [1,2,3,4,5,6,7,8,9,"A" , "b" , "C","D","E","F" ]

let partcolor = []

for(i= 0 ; i < 6 ; i++ ) {
    partcolor.push(test[Math.floor(Math.random() * test.length)])
}
let final = `#${partcolor.join("")}`

document.body.append(final)
document.body.style.background = final