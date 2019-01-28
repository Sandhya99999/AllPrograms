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
print("Enter a number upto which you want to print like this series(1, 4, 27, 256, .....)")
var TermNumber = parseInt(readln())
var Terms = "The terms in the above series upto " + TermNumber + " are"
var TermCounter = 2, Counter = 1, Product = 1 
while(Product <= TermNumber){
  Terms = Terms + " " + Product
  Product = 1 
  Counter = 1 
  while(Counter <= TermCounter){
    Product = Product * TermCounter
    Counter++
  }
  TermCounter++
}
print(Terms + ".")