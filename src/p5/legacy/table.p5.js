import Model, { Component } from '@p5/legacy/Model.p5'

function Table() {
  this._super.call(this)
  const p = this.p5

  // components
  const Bottom = Component(this)
  Bottom.set({
    x: this.x,
    y: this.y,

    width: 450,
    height: 150,
  })

  Bottom.show = function() {
    p.rect(this.x, this.y, this.width, this.height)
  }

  this.components = [Bottom]

  this.setPosition(...this.getCenter())
  this.setPosition(...this.getOnFloor())

  this.show = function() {
    // p.noStroke()
    // p.fill(p.color('#7497CA'))

    // // Top.show()
    // Bottom.set({
    //   x: this.x,
    //   y: this.y,
    // })
    // Bottom.show()
  }
}

Table.prototype = Object.create(Model.prototype)
Table.prototype.constructor = Table
Table.prototype._super = Model

export default Table