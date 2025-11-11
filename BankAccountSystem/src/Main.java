import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Bank bank = new Bank();
        Scanner sc = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\n====== 🏦 BANK ACCOUNT MANAGEMENT SYSTEM ======");
            System.out.println("1. Create Account");
            System.out.println("2. Deposit Money");
            System.out.println("3. Withdraw Money");
            System.out.println("4. Check Balance");
            System.out.println("5. View All Accounts");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.print("Enter account number: ");
                    String accNo = sc.nextLine();
                    System.out.print("Enter holder name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter initial balance: ");
                    double bal = sc.nextDouble();
                    bank.createAccount(accNo, name, bal);
                    break;

                case 2:
                    System.out.print("Enter account number: ");
                    accNo = sc.nextLine();
                    System.out.print("Enter amount to deposit: ");
                    double dep = sc.nextDouble();
                    bank.deposit(accNo, dep);
                    break;

                case 3:
                    System.out.print("Enter account number: ");
                    accNo = sc.nextLine();
                    System.out.print("Enter amount to withdraw: ");
                    double wd = sc.nextDouble();
                    bank.withdraw(accNo, wd);
                    break;

                case 4:
                    System.out.print("Enter account number: ");
                    accNo = sc.nextLine();
                    Account acc = bank.findAccount(accNo);
                    if (acc != null)
                        System.out.println("💰 Current Balance: " + acc.getBalance());
                    else
                        System.out.println("❌ Account not found.");
                    break;

                case 5:
                    bank.showAllAccounts();
                    break;

                case 6:
                    System.out.println("👋 Exiting... Thank you!");
                    break;

                default:
                    System.out.println("❌ Invalid choice. Try again.");
            }
        } while (choice != 6);

        sc.close();
    }
}
