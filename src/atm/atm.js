const State = {
  START: 1,
  TRANSACT: 2,
};

module.exports = class ATM {
  constructor(bank) {
    this.bank = bank;
    this.customerNumber = -1;
    this.currentAccount = undefined;
    this.state = State.START;
  }

  reset() {
    this.customerNumber = -1;
    this.currentAccount = undefined;
    this.state = State.START;
  }

  /**
   * Finds customer in bank.
   */
  validateCustomer(customerNum, pin) {
    if (this.state == State.START) {
      const customer = this.bank.findCustomer(customerNum);
      if (customer != undefined && customer.match(pin)) {
        this.customerNumber = customerNum;
        this.currentCustomer = customer;
        this.currentAccount = this.currentCustomer.account;
        this.state = State.TRANSACT;
        return true;
      }
      return false;
    }
    return false;
  }

  /**
   * Withdraws amount from current account.
   */
  withdraw(value) {
    if (this.state == State.TRANSACT) {
      this.currentAccount.withdraw(value);
    }
  }

  /**
   * Deposits amount to current account.
   */
  deposit(value) {
    if (this.state == State.TRANSACT) {
      this.currentAccount.deposit(value);
    }
  }

  /**
   * Gets the balance of the current account.
   */
  getBalance() {
    if (this.state == State.TRANSACT) {
      return this.currentAccount.balance;
    }
    return -1;
  }

  transfer(customerNum, amount) {
    if (this.state == State.TRANSACT) {
      const receivingCustomer = this.bank.findCustomer(customerNum);
      const receivingAccount = receivingCustomer.account;
      this.currentAccount.withdraw(amount);
      receivingAccount.deposit(amount);
    }
  }
};
