package app

import grails.converters.JSON

class TransferController {

    def send(){
        println(request.JSON)
        Transfer transfer = new Transfer(request.JSON)
        // Now we have by default the same currency selected when receiving the payment
        transfer.receiverCurrency = transfer.senderCurrency
        transfer.save(flush: true, failOnError: true)
        render transfer as JSON
    }

    def receive(){
        Transfer transfer = Transfer.findByUrlHash(request.JSON["urlHash"])
        transfer.properties = request
        transfer.receiverTransfered = true;
        transfer.receiverCurrency = request.JSON["receiverCurrency"]
        transfer.receiverAccount = request.JSON["receiverAccount"]
        transfer.save(flush: true, failOnError: true)
        render transfer as JSON
    }

    def show(){
        def transfer = Transfer.findByUrlHash(params["urlHash"])
        if (transfer.receiverTransfered) {
            response.status = 404;
        } else {
            render transfer as JSON
        }
    }
}
