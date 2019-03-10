const Scene = function(p5) {
  return {
    p5,
    name: 'untitled_scene',

    preload: function () { },
    setup: function () { },
    render: function () { },
  }
}

export const connect = function (newScene) {
  return function(p5, props) {
    return Object.assign(Scene(p5, props), newScene(p5, props))
  }
}

export default Scene