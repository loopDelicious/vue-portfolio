import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '../custom.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faVideo, faExternalLinkAlt, faBars, faMapMarkerAlt, faCheckSquare, faLocationArrow, faChevronCircleDown, faChevronCircleRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)
library.add(faFontAwesome, faTwitter, faLinkedin, faGithub, faMedium, faYoutube, faVideo, faExternalLinkAlt, faBars, faMapMarkerAlt, faCheckSquare, faLocationArrow, faChevronCircleDown, faChevronCircleRight, faChevronDown )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
