package app

class Transfer {

    String urlHash;

    double amount;
    String country;

    String firstName;
    String lastName;
    String senderCurrency;

    String cardType;
    String securityCode;
    String creditCardNumber;
    boolean senderTransfered;

    String receiverCurrency;
    String receiverAccount;
    boolean receiverTransfered;

    static constraints = {
        urlHash unique: true
        amount nullable: true
        country nullable: true

        firstName nullable: true
        lastName nullable: true
        creditCardNumber nullable: true

        senderCurrency nullable: true
        securityCode nullable: true
        senderTransfered nullable: true
        cardType nullable: true

        receiverCurrency nullable: true
        receiverAccount nullable: true
        receiverTransfered nullable: true
    }
}
