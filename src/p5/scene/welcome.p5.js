import Scene, { connect } from '@p5/lib/scene.p5'
import { TreePot, Desk, Photo } from '@p5/model/furniture.p5'
import Text from '@p5/text.p5'
import { PRIMARY } from '@vars/color'

let treePot
let hi
let testContent
let desk
let photo

class Welcome extends Scene {
  state = {}

  setup() {
    treePot = new TreePot()
    hi = new Text('Hi!')
    desk = new Desk()
    photo = new Photo()
    testContent = new Text(this.props.content.test_content)

    hi.color = PRIMARY
    hi.font = 'fira_m'
    hi.fontSize = 72
    hi.y = -100
    hi.updateProp()

    desk.x = 300

    photo.x = desk.getCenterX() / 2
    photo.y = photo.placeOnTop(desk)
    photo.updateProp()
  }

  dynamic() {
    testContent.text = this.props.content.test_content
  }

  render() {
    this.p5.background('#FCF2F2')

    hi.render()
    // testContent.render()

    treePot.show()
    desk.show()

    photo.show()
    photo.update()

    treePot.update()
  }
}

const mapStateToProps = (state) => ({
  router: state.router,
  content: state.content,
})

export default connect(mapStateToProps)(Welcome)
