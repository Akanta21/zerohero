import loadImage from './load-image'

let addImg = (src) => {
  let imgElement = document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then((images) => {
  console.log(images)
  image.forEach(img => addImg(img.src))
})
