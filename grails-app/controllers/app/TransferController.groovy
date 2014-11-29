package app

import grails.converters.JSON

class TransferController {

    def send(){
        Transfer transfer = new Transfer(request.JSON)
        transfer.save(flush: true, failOnError: true)
        render transfer as JSON
    }

    def receive(){
        Transfer transfer = Transfer.findByUrlHash(request.JSON["urlHash"])
        transfer.properties = request
        transfer.save(flush: true, failOnError: true)
        render transfer as JSON
    }

    def show(){
        def transfer = Transfer.findByUrlHash(params["urlHash"])
        render transfer as JSON
    }
}
