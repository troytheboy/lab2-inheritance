class checkingsAccount {
  private balance:number;
  private name:string;

  constructor(initialBalance:number, ownerName:string) {
    this.balance = initialBalance;
    this.name = ownerName;
  }

  public deposit(amount:number) {
    this.balance += amount;
  }

  public withdraw(amount:number) {
    this.balance -= amount;
  }

  public checkBalance() {
    console.log(`${this.name} has a balance of $${this.balance}`)
  }

}

var account = new checkingsAccount(25, 'Troy');
account.deposit(10);
account.withdraw(20);
account.checkBalance();
