package app

class Transfer {
    String urlHash;

    double amount;
    String country;

    String senderCurrency;
    String creditCardNumber;
    boolean senderTransfered;

    String receiverCurrency;
    String receiverAccount;
    boolean receiverTransfered;

    static constraints = {
        urlHash unique: true
        amount nullable: true
        country nullable: true
        creditCardNumber nullable: true

        senderCurrency nullable: true
        senderTransfered nullable: true

        receiverCurrency nullable: true
        receiverAccount nullable: true
        receiverTransfered nullable: true
    }
}
