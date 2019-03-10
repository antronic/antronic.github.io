import { connect } from '@p5/scene.p5'
import { TreePot, Desk, Photo } from '@p5/model/furniture.p5'
import Text from '@p5/text.p5'
import { PRIMARY } from '@vars/color'

const Welcome = function (p5, props) {
  const treePot = new TreePot()
  const hi = new Text('Hi!')
  const desk = new Desk()
  const photo = new Photo()

  hi.color = PRIMARY
  hi.font = 'fira_m'
  hi.fontSize = 72
  hi.y = -100
  hi.updateProp()

  desk.x = 300

  photo.x = desk.getCenterX() / 2
  photo.y = photo.placeOnTop(desk)
  photo.updateProp()

  return {
    name: 'Welcome Scene',
    render: function() {
      hi.render()
      treePot.show()
      desk.show()

      photo.show()
      photo.update()

      treePot.update()
    },
  }
}

export default connect(Welcome)