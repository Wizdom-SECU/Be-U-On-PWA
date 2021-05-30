import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp, h } from 'vue'
import router from './router'
import App from './App.vue'
import {auth} from './firebase'

let app = null
auth.onAuthStateChanged(user => {
  console.debug('Firebase is ready!')
  if (user) {
    // valid user
    // router.push({ name: 'Home' })
  } else {
    console.debug('not login or alredy logout')
    // router.push({ name: 'SignIn' })
    if (app) {
      // already logout
    } else {
      // anonymous
    }
  }
  // initialize vue firebase after firebase
  if (!app) app = createApp(App).use(router).mount('#app')
})