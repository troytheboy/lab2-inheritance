class savingsAccount {
  private balance:number;
  private name:string;
  private withdrawls:number;

  constructor(initialBalance:number, ownerName:string) {
    this.balance = initialBalance;
    this.name = ownerName;
    this.withdrawls = 0;
  }

  public deposit(amount:number) {
    this.balance += amount;
  }

  public withdraw(amount:number) {
    if (this.withdrawls > 3) {
      console.log("Sorry, you've already exceeded the maximum withdrawls");
    } else {
      this.withdrawls++;
      this.balance -= amount;
    }
  }

  public checkBalance() {
    console.log(`${this.name} has a balance of $${this.balance}`)
  }

}

var account = new savingsAccount(25, 'Troy');
account.deposit(10);
account.withdraw(20);
account.withdraw(20);
account.withdraw(20);
account.withdraw(20);
account.checkBalance();
