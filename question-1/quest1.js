
function createBankAccount() {
  let balance = 0; 
  let transactions = []; 

  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be positive";
      }
      balance += amount;
      transactions.push(`Deposited: ${amount}`);
      return `Deposited ${amount}`;
    },

    withdraw(amount) {
      if (amount <= 0) {
        return "Withdrawal amount must be positive";
      }
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      transactions.push(`Withdrawn: ${amount}`);
      return `Withdrawn ${amount}`;
    },

    getBalance() {
      return balance;
    },

    getTransactionHistory() {
      return transactions.slice();
    }
  };
}