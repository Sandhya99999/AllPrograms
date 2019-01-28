TermNumber = int(input('Enter a number upto which you want to print the terms like this series(1, 4, 27, 256, .....):'))
print('The terms in the above series upto', TermNumber, 'are', end = '')
TermCounter = 2
Product = 1
while Product <= TermNumber:
  print('', Product, end = '')
  Counter = 1
  Product = 1
  while Counter <= TermCounter:
    Product = Product * TermCounter
    Counter += 1
  TermCounter += 1
print('.')