import { ref } from '@vue/composition-api';

export class ReactiveMap<K, T>{ 
    all: T[] = []
    map = new Map<K, T>()
    constructor(private readonly constructor: any) {}

    private _get(id: K) {
        if (!this.map.has(id)) {
            console.error(new this.constructor)
            const newValue = new this.constructor
            
            ()
            this.map.set(id, newValue)
            this.all.push(newValue)
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

    list() {
        return ref<T>(this.all)
    }
}
