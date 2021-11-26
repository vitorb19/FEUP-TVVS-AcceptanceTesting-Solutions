const assert = require("assert");
const { Before, Given, When, Then } = require("@cucumber/cucumber");
const Bank = require("../../../../src/atm/bank");
const ATM = require("../../../../src/atm/atm");
const Customer = require("../../../../src/atm/customer");

Before({ tags: "@atm" }, function () {
  this.bank = new Bank();
  this.atm = new ATM(this.bank);
});

Given("a customer with id {int} and pin {int} exists", function (id, pin) {
  this.bank.addCustomer(new Customer(id, pin, 0));
});

Given(
  "a customer with id {int} and pin {int} with balance {float} exists",
  function (id, pin, balance) {
    this.bank.addCustomer(new Customer(id, pin, balance));
  }
);

When("I login to ATM with id {int} and pin {int}", function (id, pin) {
  this.validLogin = this.atm.validateCustomer(id, pin);
});

Then("I can login", function () {
  assert.equal(this.validLogin, true);
});

Then("I cannot login", function () {
  assert.equal(this.validLogin, false);
});

When("I withdraw {float} from ATM", function (amount) {
  this.atm.withdraw(amount);
});

When("I overdraw {float} from ATM", function (amount) {
  assert.throws(() => this.atm.withdraw(amount), Error);
});

Then("my account balance is {float}", function (balance) {
  assert.equal(this.atm.getBalance(), balance);
});

When("I transfer {float} to customer id {int}", function (amount, toId) {
  this.atm.transfer(toId, amount);
});

Then("customer id {int} account balance is {float}", function (id, balance) {
  assert.equal(this.bank.findCustomer(id).account.balance, balance);
});
