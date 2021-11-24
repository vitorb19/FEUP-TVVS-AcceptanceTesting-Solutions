const BankAccount = require("./bankAccount");

module.exports = class Customer {
  /**
   * Constructs a customer with a given number and PIN.
   */
  constructor(customerNumber, customerPin, currentBalance) {
    this.customerNumber = customerNumber;
    this.pin = customerPin;
    this.account = new BankAccount(currentBalance);
  }

  /**
   * Tests if this customer matches a customer number and PIN.
   */
  match(pin) {
    return this.pin == pin;
  }
};
