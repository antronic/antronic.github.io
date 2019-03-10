import { _p5, Font } from "@p5/story.p5"

function Text(text = 'no_text', x = 0, y = 0, center = true) {
  this.text = text
  this.font = 'fira_r'
  this.fontSize = 36
  this.color = '#000'
  this.textCenter = center
  this.height = this.fontSize
  this.width = _p5.textWidth(text)

  this.x = x
  this.y = y

  this.setPosition = function(x = 0, y = 0, center = true) {
    this.x = x
    this.y = y

    if (center)
      this.x = x - this.width / 2
  }

  this.render = function() {
    _p5.push()
    _p5.fill(_p5.color(this.color))
    _p5.text(this.text, this.x, this.y)
    _p5.pop()
  }

  this.updateProp = function() {
    _p5.fill(_p5.color(this.color))
    _p5.textFont(new Font(this.font), this.fontSize)
    this.width = _p5.textWidth(text)
    this.setPosition(this.x, this.y, this.textCenter)
  }

  return this
}
Text.prototype.constructor = Text

export default Text