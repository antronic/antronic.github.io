import Model from '@p5/legacy/Model.p5'

function TreePot() {
  this._super.call(this)
  const p = this.p5
  const Image = this.Image

  let tree_pot = new Image('tree_pot')
  this.y = (p.height / 2) - (tree_pot.height / 2)

  this.show = function () {
    p.texture(tree_pot)

    p.translate(this.x, this.y)
    p.plane(tree_pot.width, tree_pot.height)
  }

  this.update = function() {
    // this.x += 0.1
    // this.y -= 0.1
  }
}

TreePot.prototype = Object.create(Model.prototype)
TreePot.prototype.constructor = TreePot
TreePot.prototype._super = Model

export default TreePot