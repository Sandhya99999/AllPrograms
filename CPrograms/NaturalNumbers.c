#include <stdio.h>
int main(void) {
  int Count, Counter;
  printf("Enter a number upto which you want to print the natural numbers:");
  scanf("%d", &Count);
  printf("The natural numbers upto %d are", Count);
  for( Counter = 1; Counter <= Count; Counter++ )
  {
    printf(" %d", Counter);
  }
  printf(".\n");
  return 0;
}