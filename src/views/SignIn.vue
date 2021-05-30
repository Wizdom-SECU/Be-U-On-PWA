<template>
  <main style="height: 100%; display: flex; align-items: center;">
    <form class="form-signin text-center">
      <img class="mb-4" src="../assets/bootstrap-logo.svg" alt="" width="72" height="57">
      <h3 class="h3 mb-3">Please Sign In</h3>
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
        <label for="floatingEmail">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">Be-U-On © SECU 2021</p>
    </form>
  </main>
</template>

<script>
export default {

}
</script>

<style>
.{
  display: flex;
  align-items: center;
}
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