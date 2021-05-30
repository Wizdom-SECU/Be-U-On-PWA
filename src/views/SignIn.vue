<template>
  <main style="height: 100%; display: flex; align-items: center;">
    <form class="form-signin text-center" @submit.prevent="onSubmit()">
      <img class="mb-4" src="../assets/buon_LOGO.png" alt="" width="120">
      <h3 class="h3 mb-3">Please Sign In</h3>
      <div class="form-floating">
        <input
        type="email"
        class="form-control"
        id="floatingEmail"
        placeholder="name@example.com"
        autocomplete="username"
        v-model="email">
        <label for="floatingEmail">Email address</label>
      </div>
      <div class="form-floating">
        <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        autocomplete="current-password"
        v-model="password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" id="sign-in-button" type="submit" :disabled="disabled">
        <span v-if="disabled" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        <span v-if="disabled" class="sr-only">Loading...</span>
        <span v-else class="sr-only">Sign In</span>
      </button>
      <p class="mt-5 mb-3 text-muted">Be-U-On © SECU 2021</p>
    </form>
  </main>
</template>

<script>
import {auth} from '../firebase'
export default {
  data () {
    return {
      email: '',
      password: '',
      disabled: false
    }
  },
  methods: {
    onSubmit () {
      console.debug('login')
      const {email, password} = this
      this.disabled = true
      if (email) {
        if (password) {
          console.log('login')
          auth.signInWithEmailAndPassword(email, password).then(credential => {
            this.disabled = false
            console.debug(credential)
            this.$router.replace({ name: 'OTP' })
          }).catch(err => {
            this.disabled = false
          })
        } else {
          this.disabled = false
          console.warn('invalid password')
        }
      } else {
        this.disabled = false
        console.warn('invalid email')
      }
    }
  }
}
</script>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-floating {
  position: relative;
}
</style>