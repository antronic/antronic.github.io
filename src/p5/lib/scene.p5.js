import store from '@ducks'
import { _p5, forEach, Font, Image } from '@p5/story.p5'

class Scene {
  name = 'untitled_scene'
  props
  state
  p5 = _p5

  constructor(props) {
    Object.assign(this.props, {}, props)
  }

  dispatch = (action) => {
    store.dispatch(action)
  }

  getState = store.getState

  setState = (states) => Object.assign(this.state, {}, states)

  preload() {}
  setup() {}
  render() {}

  dynamic() {}
}

const mapStateToProps = (states) => ({})
const mapDispatchToProps = (dispatch) => ({})

export const connect = function (mstp = mapStateToProps, mdtp = mapDispatchToProps) {
  return function(NewScene) {
    NewScene.prototype.props = {
      ...mstp(store.getState()),
      ...mdtp({}),
    }

    store.subscribe(() => {
      NewScene.prototype.props = {
        ...NewScene.prototype.props,
        ...mstp(store.getState()),
        ...mdtp({}),
      }

      if (NewScene.prototype.dynamic) NewScene.prototype.dynamic()
    })

    return NewScene
  }
}

export default Scene