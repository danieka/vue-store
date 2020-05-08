# vue-store

Vue-store is a typescript library for state management in Vue. Vue-store depends on the Composition API.

Vue-store contains a couple of reactive primitives from which you build your store. Entities in the store are vanilla Typescript classes.

# Quickstart

Download it and include it.

# Example

### User.ts
```
export class User {
    name = ''

    constructor() {
        this.loadFromServer()
    }

    loadFromServer() {
        setTimeout(() => this.name = "John Doe", 2000)
    }
}
```

### UserStore.ts

```
import { ReactiveMap } from '../../library/ReactiveMap'
import { User } from '../entities/User'

class UserStore extends ReactiveMap<number, User> {
    constructor() {
        super(User)
    }
}

export const userStore = new UserStore();
```

### Component.vue
```
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
```

