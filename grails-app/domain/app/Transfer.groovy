package app

class Transfer {
    String urlHash;

    double amount;
    String currency;
    String country;

    String creditCardNumber;
    boolean senderTransfered;

    String receiverAccount;
    boolean receiverTransfered;

    static constraints = {
        urlHash unique: true
        amount nullable: true
        currency nullable: true
        country nullable: true
        creditCardNumber nullable: true
        senderTransfered nullable: true
        receiverAccount nullable: true
        receiverTransfered nullable: true
    }
}
