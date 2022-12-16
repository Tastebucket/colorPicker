// //console.log("Rock n Roll")
// const generate = document.querySelector("#generate")
// const colorPalette = document.querySelector("#color-palette")
// const myPalette = document.querySelector("#my-palette")



// const makePalette = () => {
//     //create 150 squares (divs)
//     //append to color palette div
//     for (let i=1; i <= 150; i++) {
//         const square = document.createElement('div')
//         square.classList.add("square")
//         colorPalette.appendChild(square)
//         //rgb(#,#,#)
//         const randomR = Math.floor(Math.random() * 255)
//         const randomG = Math.floor(Math.random() * 255)
//         const randomB = Math.floor(Math.random() * 255)

//         const randomColor = `rgb(${randomR},${randomB},${randomG})`
//         square.style.backgroundColor = randomColor
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     makePalette ()
// })
// //generate.addEventListener('click',makePalette)

const generate = document.querySelector("#generate")
const reset = document.querySelector("#reset")
const colorPalette = document.querySelector("#color-palette")
const myPalette = document.querySelector("#my-palette")


// event is a giant object that has multiple properties
const addColor = (event) => {
  console.log(event)
  // console.log(event.target.style.backgroundColor)

  // make a new square (div)
  // give it the class of square
  //make its background color the same as the originally clicked square
  //append the new square to my palette

  const newSquare = document.createElement('div')
  newSquare.classList.add('square')
  const originalSquareColor = event.target.style.backgroundColor
  newSquare.style.backgroundColor = originalSquareColor

  myPalette.appendChild(newSquare)
}

const makePalette = () => {

  // remove colors 
  while (colorPalette.firstChild) {
    colorPalette.removeChild(colorPalette.firstChild)
  }

  // create 150 squares (divs)
  // append them to the color palette div

  // add colors
  for (let i = 1; i <= 150; i++) {
    const square = document.createElement('div')
    square.classList.add("square")
    colorPalette.appendChild(square)

    
    // rgb(#, #, #) 0 -> 255
    // create random numerical values foer rgb colors
    const randomR = Math.floor(Math.random() * 255) 
    const randomG = Math.floor(Math.random() * 255)
    const randomB = Math.floor(Math.random() * 255)

    const randomColor = `rgb(${randomR}, ${randomG}, ${randomB})`

    square.style.backgroundColor = randomColor
    
    square.addEventListener('click', addColor)
  }
}

const resetPalette = () => {

    // remove colors 
    while (myPalette.firstChild) {
      myPalette.removeChild(myPalette.firstChild)
    }
}
generate.addEventListener("click", makePalette)
reset.addEventListener("click", resetPalette)


document.addEventListener('DOMContentLoaded', () => {
  makePalette()
})

const removeColor = (event) => {
    //target square that was clicked
    //remove that square from my palette
    const unwantedSquare = event.target
    myPalette.removeChild(unwantedSquare)  
  }
  myPalette.addEventListener("click", removeColor)
  