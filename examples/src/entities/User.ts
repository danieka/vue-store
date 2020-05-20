export class User {
    name = ''

    constructor(id: number) {
        this.loadFromServer(id)
    }

    loadFromServer(id: number) {
        setTimeout(() => this.name = `John Doe ${id}`, 2000)
    }

    store() {
        console.error("Stored the following value to the server", this.name)
    }
}