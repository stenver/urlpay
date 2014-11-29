package app

import grails.converters.JSON

class TransferController {

    def send(){
        println(request.JSON)
        render {request.JSON} as JSON
    }

    def receive(){
        println(request.JSON)
        render {request.JSON} as JSON
    }
}
