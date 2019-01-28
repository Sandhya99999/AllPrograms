var readln = (typeof readline === 'function') ? (readline) : (function() {
   importPackage(java.io);
   importPackage(java.lang);
   var stdin = new BufferedReader(new InputStreamReader(System['in']));
   return function() {
     return String(stdin.readLine());   
   };                                    
 }());
importPackage(java.io);
importPackage(java.lang);
var readln = (typeof readline === 'function') ? (readline) : (function() {
var stdin = new BufferedReader(new InputStreamReader(System['in']));
return function() {
    return String(stdin.readLine());   
  };                                    
}());
print("To find maximum number between n numbers, enter the number: ")
var Limit = parseInt(readln())
var Numbers = [Limit]
print("Enter the first number:")
Numbers[0] = parseInt(readln())
for(var Counter = 1; Counter < Limit; Counter++) {
  print("Enter the next number:")
  Numbers[Counter] = parseInt(readln())
}
var Read = "The maximum number among "
for(var Counter = 0; Counter < Limit; Counter++) {
  Read = Read + " " + Numbers[Counter]
}
var LargerNumber = 0
var Counter = 0

while(Counter < Limit) {
  if(Numbers[Counter] > LargerNumber)
    LargerNumber = Numbers[Counter]
  Counter++
}
Read = Read + " is " + LargerNumber + "."
print(Read)