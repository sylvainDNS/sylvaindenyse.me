const { Elm } = require('./Main.elm')
const images = require('./Images/*.jpg')


Elm.Main.init({
  node: document.querySelector('main'),
  flags: images
})