import java.util.Scanner;
class Maximum {
  public static void main(String[] args) {
    int Counter, LargerNumber = 0; 
    int[] Number = new int[10];
    System.out.print("To print the maximum number among 10 numbers, enter the first number:");
    Scanner object = new Scanner(System.in);
    Number[0] = object.nextInt();
    for(Counter = 1; Counter < 10; Counter++)
    {
      System.out.print("Enter the next number:");
      Number[Counter] = object.nextInt();
    }
    System.out.print("The maximum number among 10 numbers that you have entered is ");
    LargerNumber = Number[0];
    for(Counter = 0; Counter < 10; Counter++)
    {
      if(Number[Counter] > LargerNumber)
      {
        LargerNumber = Number[Counter];
      }
    }
    System.out.print(LargerNumber + ".");
    System.out.println("");
  }
}