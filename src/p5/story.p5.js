import store from '@ducks'
import config from '@p5/config.p5'

// customize forEach
export function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}

export var _p5
export var canvas

var fonts = {}
var imgs = {}

function loadFonts(p5) {
  const c_fonts = config.fonts
  forEach(Object.keys(c_fonts), (font, i) => {
    p5.loadFont(c_fonts[font], (p5_font) => {
      fonts = {
        ...fonts,
        [font]: p5_font,
      }
    })
  })
}

function loadImages(p5) {
  const c_imgs = config.imgs
  forEach(Object.keys(c_imgs), (img, i) => {
    p5.loadImage(c_imgs[img], (p5_img) => {
      imgs = {
        ...imgs,
        [img]: p5_img,
      }
    })
  })
}

// Image provider
export function Image(img) {
  this.imgs = imgs

  this.get = function(img) {
    const imgs = this.imgs


    if (!imgs[img])
      throw new Error('Image: "' + img + '" not found.')
    return imgs[img]
  }

  return this.get(img)
}
Image.prototype.constructor = Image
Image.loadImages = loadImages

// Font provider
export function Font(font) {
  this.fonts = fonts

  this.get = function(font) {
    const fonts = this.fonts
    if (!fonts[font])
      throw new Error('Font: "' + font + '" not found.')
    return fonts[font]
  }

  return this.get(font)
}
Font.prototype.constructor = Font
Font.loadFonts = loadFonts

// Main Story function
function Story(p5, propsInitial) {
  _p5 = p5

  var props = propsInitial.canvas

  store.subscribe(() => {
    const states = store.getState()
    console.log('states')
    console.log(states)
  })

  // Assign 404
  const routes = Object.assign({}, {
    '404': function(p5) {
      return {
        render: function() {
          p5.fill('#000')
          p5.textFont(new Font('fira_r'), 36)
          const text = '404 - Scene not found'
          p5.text(text, -p5.textWidth(text) / 2, 0)
        }
      }
    },
  }, config.routes)

  const story = {
    parentNode: document.createElement('div'),

    // Router Function
    // Need to sperate in future
    router: function(props) {
      this.currentScene()
      if (!routes[props.path])
        return routes['404'](p5)
      return new routes[props.path](props)
    },

    currentScene() {
      return routes[this.props.path]
    },

    props: props,

    init: function() {
      this.parentNode = p5._userNode

      // p5 functions
      p5.preload = () => {
        Font.loadFonts(p5)
        Image.loadImages(p5)
      }
      p5.setup = () => {
        canvas = p5.createCanvas(this.parentNode.offsetWidth, this.parentNode.offsetHeight, p5.WEBGL)

        this.canvas = this.parentNode.children[0]
        this.canvas.style.width = '100%'
        this.canvas.style.height = '100%'

        this.scene = this.router(this.props)
        this.scene.setup()

        if (this.currentScene().prototype.dynamic) this.scene.dynamic()
      }

      p5.draw = () => {
        p5.ambientLight(200)
        p5.pointLight(255, 255, 255, p5.mouseX - p5.width / 2, p5.mouseY - p5.height / 2, 50);

        p5.push()
        p5.noStroke()
        p5.background(p5.color('#FFE5E6'))

        p5.pointLight(255, 255, 255, 0, 0, 10);
        p5.ambientMaterial(p5.color('#FFE5E6'))
        p5.translate(0, 0, -20)
        p5.plane(p5.width + 45, p5.height + 45)
        p5.pop()

        this.scene.render()
      }

      const _this = this

      p5.onDidMount = function(props) {
        _this.props = props
      }

      p5.onPropsChange = function(props) {
        _this.props = props.canvas
        _this.scene = _this.router(_this.props)
      }
    }
  }

  story.init()
}

export default Story