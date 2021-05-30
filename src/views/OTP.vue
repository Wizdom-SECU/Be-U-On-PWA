<template>
  <main style="height: 100%; display: flex; align-items: center;">
    <form class="form-2fa text-center" @submit.prevent="onSubmit()">
      <h3 class="h3 mb-3">2Factor Authentication</h3>
      <div class="form-floating">
        <input
        type="number"
        class="form-control"
        id="floatingCode"
        placeholder="Code Here"
        autocomplete="username"
        v-model="code">
        <label for="floatingCode">Verification Code</label>
      </div>
      <button class="w-100 btn btn-lg btn-success" id="verify-button" type="submit" :disabled="disabled">
        <span v-if="disabled" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
        <span v-if="disabled" class="sr-only">Loading...</span>
        <span v-else class="sr-only">verify</span>
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
      code: '',
      disabled: false
    }
  },
  methods: {
    onSubmit () {
      console.debug('login')
      const {code} = this
      this.disabled = true
      if (code) {
        setTimeout(_ => {
          this.disabled = false
          this.$router.replace({ name: 'Home' })
        }, 1000)
      } else {
        this.disabled = false
        console.warn('invalid code')
      }
    }
  }
}
</script>

<style>
.form-2fa {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-2fa input[type="number"] {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-2fa #verify-button {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-floating {
  position: relative;
}
</style>