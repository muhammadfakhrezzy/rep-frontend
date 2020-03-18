import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile, faTasks, faList, faAngleLeft, faSignOutAlt, faBars, faCircle, faArrowCircleRight, faTimes, faQuestionCircle, faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHackerrank, faGoogle } from '@fortawesome/free-brands-svg-icons'
import {faBell} from '@fortawesome/free-regular-svg-icons'

library.add(faFile, faHackerrank, faTasks, faList, faAngleLeft, faBell, faSignOutAlt, faBars, faCircle, faGoogle, faArrowCircleRight, faTimes, faQuestionCircle, faInfoCircle, faUserCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
