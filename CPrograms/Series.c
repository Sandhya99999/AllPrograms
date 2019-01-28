#include <stdio.h>

int main(void) {
  int TermNumber, Product = 1, TermCounter = 2, Counter;
  printf("Enetr a number upto which you want to print the terms like this series (1, 4, 27, 256, .....):");
  scanf("%d", &TermNumber);
  printf("The terms in the above series upto %d are",TermNumber);
  while ( Product <= TermNumber )
  {
    printf(" %d", Product);
    Product = 1;
    for ( Counter = 1; Counter <= TermCounter; Counter++ )
    {
      Product = Product * TermCounter;
    }
    TermCounter++;
  }
  printf(".\n");
  return 0;
}