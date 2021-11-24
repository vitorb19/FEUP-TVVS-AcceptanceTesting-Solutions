module.exports = class BankAccount {
  /**
   * Constructs a bank account with a given balance.
   */
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  /**
   * Deposits money into the account.
   */
  deposit(amount) {
    this.balance = this.balance + amount;
  }

  /**
   * Withdraws money from the account.
   */
  withdraw(amount) {
    if (amount > this.balance)
      throw new Error("cannot withdraw more than balance");
    this.balance = this.balance - amount;
  }
};
