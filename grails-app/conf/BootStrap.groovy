import app.Transfer
import app.User

class BootStrap {

    def init = { servletContext ->
        if(Transfer.count() == 0) {
            new Transfer(amount: 300, urlHash: "firstHash").save(failOnError: true)
            new Transfer(amount: 300, urlHash: "secondHash").save(failOnError: true)
        }
    }
    def destroy = {
    }
}
