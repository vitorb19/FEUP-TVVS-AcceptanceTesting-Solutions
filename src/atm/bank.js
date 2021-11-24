module.exports = class Bank {
  /**
   * Constructs a bank with no customers.
   */
  constructor() {
    this.customers = {};
  }

  /**
   * Adds a customer to the bank.
   */
  addCustomer(customer) {
    this.customers[customer.customerNumber] = customer;
  }

  /**
   * Finds a customer in the bank.
   */
  findCustomer(customerNumber) {
    return this.customers[customerNumber];
  }
};
