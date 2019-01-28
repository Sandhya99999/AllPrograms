#include <stdio.h>

int main(void) {
  int Counter, Number[10], LargerNumber;
  printf("To print the maximum number among 10 numbers, enter the first number:");
  scanf("%d", &Number[0]);
  for ( Counter = 1; Counter < 10; Counter++ )
  {
    printf("Enetr the next number:");
    scanf("%d", &Number[Counter]);
  }
  printf("The maximum number among the 10 numbers that you have entered is ");
  LargerNumber = Number[0];
  for ( Counter = 0; Counter < 10; Counter++ )
  {
    if ( Number[Counter] > LargerNumber )
    {
      LargerNumber = Number[Counter];
    }
  }
  printf("%d. \n", LargerNumber);
  return 0;
}