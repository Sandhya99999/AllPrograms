print('To print maximum number among 10 numbers.')
List = []
FirstNumber = int(input('Enter the first numbers:'))
List.append(FirstNumber)
for Count in range(1, 10):
  NextNumber = int(input('Enter the next number:'))
  List.append(NextNumber)
print('The maximum number among the 10 numbers that you have entered is', end = '')
LargerNumber = List[0]
for Count in range(1, 10):
  if List[Count] > LargerNumber:
    LargerNumber = List[Count]
print('', LargerNumber, end = '')
print('.')