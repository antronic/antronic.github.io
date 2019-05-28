import { canvas } from '@p5/story.p5'

import Model from '@p5/legacy/Model.p5'
import { PRIMARY } from '@vars/color'

export function TreePot() {
  this._super.call(this)
  const p = this.p5
  const Image = this.Image

  let tree_pot = new Image('tree_pot')
  this.height = tree_pot.height

  this.show = function () {
    p.push()
    p.texture(tree_pot)

    p.translate(...this.getOnFloor())
    p.plane(tree_pot.width, tree_pot.height)
    p.pop()
  }

  this.update = function () {
    // this.x += 0.1
    // this.y -= 0.1
  }
}

TreePot.prototype = Object.create(Model.prototype)
TreePot.prototype.constructor = TreePot
TreePot.prototype._super = Model

export function Desk() {
  this._super.call(this)
  const p = this.p5
  const Image = this.Image

  const desk = new Image('desk')
  this.width = desk.width
  this.height = desk.height
  this.setPosition(...this.getOnFloor())

  this.show = function() {
    p.push()
    p.texture(desk)
    p.translate(this.x, this.y)

    p.plane(desk.width, desk.height)
    p.pop()
  }
}
Desk.prototype = Object.create(Model.prototype)
Desk.prototype.constructor = Desk
Desk.prototype._super = Model

export function Photo() {
  this._super.call(this)
  const p = this.p5
  const Image = this.Image
  const job_img = new Image('job_img')
  const wood = new Image('wood-texture_1083-21')

  const FLOAT_UP = 20

  this.width = 100
  this.height = 115

  this._x = this.x
  this._y = this.y
  this._z = this.z

  this._ry = this.ry

  this.show = function() {
    p.angleMode(p.DEGREES)
    p.push()
    p.noStroke()

    // p.texture(wood)
    p.translate(this.x, this.y, this.z - 10)
    p.rotateY(this.ry)
    p.ambientMaterial(p.color('#1F5FDF'))
    p.box(this.width, this.height, 20)
    p.pop()

    p.push()
    p.translate(this.x - 5, this.y - 5, this.z + 15)
    p.rotateY(this.ry)
    p.texture(job_img)
    p.plane(this.width - 25, this.height - 25)
    p.pop()
  }

  this.updateProp = function () {
    this._x = this.x
    this._y = this.y
  }

  this.floatUp = function() {
    if (this.y <= this._y && this.y >= this._y - FLOAT_UP)  {
      this.y -= 5
      this.z += 6
      this.x -= 1

      this.ry -= 0.1
    }
  }

  this.onClick = function() {
    console.log('clicked')
  }

  this.dropDown = function() {
    if (this.y < this._y)  {
      this.y += 5
      this.z -= 6
      this.x += 1
      this.ry += 0.1
    } else if (this.y > this._y) {
      this.y = this._y
    }
  }

  this.update = function() {
    // Event Observer
    this.mouseClick()

    if (!this.mouseHover())
      this.dropDown()
  }

  this.onMouseHover = function() {
    this.floatUp()
  }
}
Photo.prototype = Object.create(Model.prototype)
Photo.prototype.constructor = Photo
Photo.prototype._super = Model

export default {
  TreePot,
}