package app

import grails.converters.JSON

class UserController {

    def index() {
        render User.list() as JSON
    }

    // Unused - left for sample
    def create(){
        render new User() as JSON
    }

    def save(){
        def u = new User(request.JSON)
        u.save(flush: true, failOnError: true)
        render u as JSON
    }

    // Unused - left for sample
    def show(){
        def u = User.get(params.long("id"))
        render u as JSON
    }

    // Unused - left for sample
    def edit(){
        render User.get(params.long("id")) as JSON
    }

    def update(){
        def u = User.get(params.long("id"))
        u.properties = request.JSON
        u.save()
        render u as JSON
    }

    def delete(){
        def user = User.get(params.long("id"))
        user.delete(flush: true, failOnError:true)
        render user as JSON
    }
}
