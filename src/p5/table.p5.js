import Model from '@p5/legacy/Model.p5'
import TreePot from '@p5/assets/1x/tree_pot.png'

function Table() {
  this._super.call(this)
  const p = this.p5
  let img
  this.preload = function() {
    img = p.loadImage(TreePot)
  }

  this.setup = function () {
  }

  this.show = function() {
    p.texture(img)

    p.translate(0, (p.height / 2) - (img.height / 2))
    p.plane(img.width, img.height)
  }
}

Table.prototype = Object.create(Model.prototype)
Table.prototype.constructor = Table
Table.prototype._super = Model

export default Table