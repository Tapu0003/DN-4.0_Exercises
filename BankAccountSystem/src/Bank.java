import java.io.*;
import java.util.*;

public class Bank {
    private List<Account> accounts;
    private static final String FILE_NAME = "accounts.txt";

    public Bank() {
        accounts = new ArrayList<>();
        loadAccounts();
    }

    public void createAccount(String accNo, String name, double initialBalance) {
        accounts.add(new Account(accNo, name, initialBalance));
        saveAccounts();
        System.out.println("✅ Account created successfully!");
    }

    public Account findAccount(String accNo) {
        for (Account acc : accounts) {
            if (acc.getAccountNumber().equals(accNo)) return acc;
        }
        return null;
    }

    public void deposit(String accNo, double amount) {
        Account acc = findAccount(accNo);
        if (acc != null) {
            acc.deposit(amount);
            saveAccounts();
        } else {
            System.out.println("❌ Account not found.");
        }
    }

    public void withdraw(String accNo, double amount) {
        Account acc = findAccount(accNo);
        if (acc != null) {
            acc.withdraw(amount);
            saveAccounts();
        } else {
            System.out.println("❌ Account not found.");
        }
    }

    public void showAllAccounts() {
        if (accounts.isEmpty()) {
            System.out.println("No accounts found.");
        } else {
            System.out.println("\n🏦 All Accounts:");
            for (Account acc : accounts) {
                System.out.println(acc);
            }
        }
    }

    private void saveAccounts() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            oos.writeObject(accounts);
        } catch (IOException e) {
            System.out.println("Error saving accounts: " + e.getMessage());
        }
    }

    private void loadAccounts() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            accounts = (List<Account>) ois.readObject();
        } catch (FileNotFoundException e) {
            System.out.println("📁 No previous account data found. Starting fresh.");
        } catch (Exception e) {
            System.out.println("Error loading accounts: " + e.getMessage());
        }
    }
}
