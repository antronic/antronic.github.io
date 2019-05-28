import { connect } from '@p5/lib/scene.p5'
import Text from '@p5/text.p5'

const Sample = function(p5, props) {
  const title = new Text('Sample Page')

  title.y = -100

  return {
    name: 'Name',

    render: function() {
      title.show()
    },
  }
}

export default connect(Sample)
