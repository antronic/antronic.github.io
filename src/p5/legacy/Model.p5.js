import { _p5, forEach, Font, Image } from '@p5/story.p5'

export default function Model() {
  this.p5 = _p5
  this.name = 'untitled_model'
  this.components = []

  this.width = 100
  this.height = 100

  this.Font = Font
  this.Image = Image

  this.x = 0
  this.y = 0
  this.z = 0

  this._x = this.x
  this._y = this.y
  this._z = this.z

  this.ry = _p5.PI
}

Model.prototype.getOnFloor = function() {
  const y = (this.p5.height / 2) - (this.height / 2)
  return [this.x, y]
}

Model.prototype.getCenterX = function() {
  return this.x
}
Model.prototype.getCenterY = function() {
  return this.y
}
Model.prototype.getCenter = function() {
  return [this.getCenterX(), this.getCenterY()]
}

Model.prototype.placeOnTop = function(model) {
  return model.y - (this.height / 2) - (model.height / 2)
}
Model.prototype.onMouseHover = function() {}

Model.prototype.mouseHover = function() {
  // console.log('this.p5.mouseX', this.p5.mouseX)
  // console.log('this.x', this.x)
  if (this.p5.mouseX > this._x - (this.width / 2) + this.p5.width / 2
    && this.p5.mouseX < this._x + (this.width / 2) + this.p5.width / 2

    && this.p5.mouseY > this._y - (this.height / 2) + this.p5.height / 2
    && this.p5.mouseY < this._y + (this.height / 2) + this.p5.height / 2) {
    this.onMouseHover()
    return true
  }

  return false
}

Model.prototype.preload = function() {}
Model.prototype.setup = function() {}
Model.prototype.show = function() {}

Model.prototype.setPosition = function (x, y) {
  this.x = x
  this.y = y
}

/*
export const Component = function(parent) {
  return {
    name: 'untitled_component',
    parent: parent,
    p5: parent.p5,
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    z: 0,

    set: function(newProps) {
      const _this = this
      forEach(Object.keys(newProps), function(i, j) {
        _this[i] = newProps[i]
      })
    },


    update: function() {
      this.show()
    },
    show: function() {},
  }
}*/