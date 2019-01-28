import java.util.Scanner;
class NaturalNumbers {
  public static void main(String[] args) {
    int Count;
    System.out.print("Enter a number upto which you want to print the natural numbers:");
    Scanner object = new Scanner(System.in);
    Count = object.nextInt();
    System.out.print("The natural numbers upto " + Count + " are");
    for(int Counter = 1; Counter <= Count; Counter++)
    {
      System.out.print(" " + Counter);
    }
    System.out.print(".\n");
  }
}