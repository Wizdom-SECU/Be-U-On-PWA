<template>
  <div class="container px-3 py-4">
    <div class="card text-center">
      <div class="card-header">Profile</div>
      <div class="card-body">
        <h5 class="card-title" @click="onRename">{{displayName}}</h5>
        <p class="card-text">{{email}}</p>
        <a href="#" class="btn btn-danger" @click="onLogout">Logout</a>
      </div>
      <div class="card-footer text-muted">{{lastSignInTime}}</div>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'
import moment from 'moment'
export default {
  created () {
    const user = auth.currentUser
    const {displayName, email} = user
    const {lastSignInTime} = user.metadata
    console.debug(user.metadata.lastSignInTime)
    this.displayName = displayName || 'Anonymous'
    this.email = email
    this.lastSignInTime = moment(lastSignInTime).fromNow()
  },
  data () {
    return {
      role: '',
      displayName: '',
      email: '',
      lastSignInTime: ''
    }
  },
  methods: {
    onLogout () {
      auth.signOut().then(_ => {
        this.$router.push({ name: 'SignIn' })
      })
    },
    onRename () {
      const rename = prompt('Please enter your name', this.displayName)
      if (rename) {
        auth.currentUser.updateProfile({displayName: rename }).then(_ => {
          this.displayName = rename
        }).catch(err => { console.error(err) })
      }
    }
  }
}
</script>