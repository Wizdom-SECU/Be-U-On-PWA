
<template>
  <div class="modal" tabindex="-1"
    v-if="offlineReady || needRefresh"
    role="alert"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" v-if="offlineReady">App ready to work offline</h5>
          <h5 class="modal-title" v-else>New content available, click on reload button to update.</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Close</button>
          <button type="button" class="btn btn-primary" v-if="needRefresh" @click="updateServiceWorker()">Reload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = async() => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>