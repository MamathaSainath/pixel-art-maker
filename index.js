const HEIGHT = 20
const WIDTH = 20
let paletteColor = 'white'
let colorArray = ['black','blue','red','pink','grey','yellow','violet','aqua']

function createArt() {
    let eleDiv = document.createElement('div')
    //document.body.appendChild(eleDiv)
    let isMouseDown
    eleDiv.className = 'aside'
    for(let i= 0; i < HEIGHT; i++) {
        let innerDiv = document.createElement('div')
        innerDiv.className = "innerContainer"
        eleDiv.appendChild(innerDiv)
        for(let j=0; j< WIDTH; j++) {
            let pixelDiv = document.createElement("div")
            pixelDiv.className = 'pixel'
            pixelDiv.onclick = () => pixelDiv.style.backgroundColor=paletteColor
            pixelDiv.addEventListener('mouseover',(e) => {
                console.log(e)
                isMouseDown=true
            })
            pixelDiv.addEventListener('mousedown',(e)=> {
                console.log(e)
                if(isMouseDown)
                pixelDiv.style.backgroundColor=paletteColor
            })
            innerDiv.appendChild(pixelDiv)
        }
    }
    colorPalette(eleDiv)
    document.body.appendChild(eleDiv)
}
function colorPalette(eleDiv){
    let colorMainDiv = document.createElement('div')

    eleDiv.appendChild(colorMainDiv)
    colorMainDiv.className = 'color-main'
    colorArray.forEach((element)=>{
        let colorDiv = document.createElement('div')
        colorDiv.className = 'pixel'
        colorDiv.style.backgroundColor = element
        colorDiv.onclick= (e)=>{
            paletteColor = e.target.style.backgroundColor
        }



        colorMainDiv.appendChild(colorDiv)
    });

    eleDiv.appendChild(colorMainDiv)

}