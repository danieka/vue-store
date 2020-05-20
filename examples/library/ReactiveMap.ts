import { ref} from '@vue/composition-api';

export class ReactiveMap<K, T>{ 
    map = new Map<K, T>()
    constructor(private readonly factory: any) {}

    private _get(id: K) {
        if (!this.map.has(id)) {
            console.error(new this.factory)
            const newValue = new this.factory(id)
            this.map.set(id, newValue)
        }
        return this.map.get(id)
    }

    get(id: K) {
        return ref<T>(this._get(id))
    }

    set(id: K, item: T) {
        const obj = this._get(id)
        Object.assign(obj, item)
    }
}
