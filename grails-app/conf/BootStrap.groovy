import app.User

class BootStrap {

    def init = { servletContext ->
        if(User.count() == 0) {
            new User(name: "Esimene", description: "The very first person", age: 10).save(failOnError: true)
            new User(name: "Teine", description: "The very second person", age: 20).save(failOnError: true)
            new User(name: "Kolmas", description: "The very third person", age: 30).save(failOnError: true)
            new User(name: "Neljas", description: "The very fourth person", age: 40).save(failOnError: true)
        }
    }
    def destroy = {
    }
}
