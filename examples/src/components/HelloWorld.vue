<template>
  <div>
    <div>
      {{ user.name }}
    </div>
    <input v-model="user.name" />
    <button @click="user.store()">Store</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { userStore } from '../stores/UserStore'

export default Vue.extend({
  setup: function() {
    const user = userStore.get(8)
    return {
      user
    }
  }
});
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
