import Welcome from '@p5/scene/welcome.p5'

export default {
  fonts: {
    fira_l: 'fonts/otf/FiraCode-Light.otf',
    fira_m: 'fonts/otf/FiraCode-Medium.otf',
    fira_r: 'fonts/otf/FiraCode-Regular.otf',
    fira_b: 'fonts/otf/FiraCode-Bold.otf',
    fira_re: 'fonts/otf/FiraCode-Retina.otf',
  },
  imgs: {
    tree_pot: require('@p5/assets/1x/tree_pot.png'),
    desk: require('@p5/assets/1x/desk.png'),
    job_img: require('@p5/assets/wall-extend.jpg'),
    'wood-texture_1083-21': require('@p5/assets/wood-texture_1083-21.jpg'),
  },
  routes: {
    '/welcome': Welcome,
  },
}