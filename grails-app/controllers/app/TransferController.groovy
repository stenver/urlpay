package app

import grails.converters.JSON

class TransferController {

    def send(){
        println(request.JSON)
        Transfer transfer = Transfer.findByUrlHash(request.JSON["urlHash"])

        if (transfer == null)
            transfer = new Transfer(request.JSON)
        else
            transfer.properties = request.JSON
        // Now we have by default the same currency selected when receiving the payment
        transfer.receiverCurrency = transfer.senderCurrency
        transfer.save(flush: true, failOnError: true)
        render transfer as JSON
    }

    def receive(){
        Transfer transfer = Transfer.findByUrlHash(request.JSON["urlHash"])
        transfer.receiverTransfered = true;
        transfer.receiverCurrency = request.JSON["receiverCurrency"]
        transfer.receiverAccount = request.JSON["receiverAccount"]

        println(transfer)

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
