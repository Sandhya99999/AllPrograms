import java.util.Scanner;
class Series {
  public static void main(String[] args) {
    int TermNumber, TermCounter =2, Counter = 1, Product = 1;
    System.out.print("Enter a number upto which you want to print like this series(1, 4, 27, 256, .....):");
    Scanner object = new Scanner(System.in);
    TermNumber = object.nextInt();
    System.out.print("the terms in the above series upto " + TermNumber + " are");
    while(Product <= TermNumber)
    {
      System.out.print(" " + Product);
      Product = 1;
      for(Counter = 1; Counter <= TermCounter; Counter++)
      {
        Product = Product * TermCounter;
      }
      TermCounter++;
    }
    System.out.print(".");
    System.out.println("");
  }
}