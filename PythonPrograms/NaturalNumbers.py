Count = int(input('Enter a number upto which you want to print the natural numbers:'))
print('The natural numbers upto {0} are'.format(Count), end = '')
Counter = 1
while Counter <= Count:
  print(' {0}'.format(Counter), end = '')
  Counter += 1
print('.')