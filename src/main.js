import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp, h } from 'vue'
import router from './router'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {auth} from './firebase'

let app = null
auth.onAuthStateChanged(user => {
  console.debug('Firebase is ready!')
  if (user) {
    // valid user
    if (app) {
      // alredy login
    } else {
      console.debug('user already open app')
      // router.replace({ name: 'Home' })
    }
  } else {
    console.debug('not login or alredy logout')
    if (app) {
      // already logout
    } else {
      // already open app
      console.debug('anonymous already open app')
      // router.replace({ name: 'SignIn' })
    }
  }
  // initialize vue firebase after firebase
  if (!app) app = createApp(App).use(router).use(VueSweetalert2).mount('#app')
})

