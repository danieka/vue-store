export class User {
    name = ''

    constructor() {
        this.loadFromServer()
    }

    loadFromServer() {
        setTimeout(() => this.name = "John Doe", 2000)
    }
}