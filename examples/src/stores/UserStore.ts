import { ReactiveMap } from '../../library/ReactiveMap'
import { User } from '../entities/User'

class UserStore extends ReactiveMap<number, User> {
    constructor() {
        super(User)
    }
}

export const userStore = new UserStore();
