// Objects

/*Disambiguation

container: that which holds something with substance, NOT to be confused with the substance itself
-Much in the same way that with a glass of water, you do not confuse the glass with the water and vice versa

value: the substance/data
-As a book is to words, arithmetic is to plus/minus, the relationship between a value and container is interdependant

property: a value



terminology continued-
variable: a container for values/data
object: a container that holds multiple values
-Objects have properties(values) and actions(methods)
-Objects pretty much self-contained variable/function duos?

let x= 'Hello'
let y= 'Bonjour'
console.log(y)
The above: var x is called to be displayed onto the console. Its 'property' or 'value' is then presented

The following is a representation of an object:
*/
let x= {
afternoon: '12:00',
evening: '17:00'
}
//The above is in 'Object-literal' convention. Within the object (just between the '{}'), we have the properties in a key-value pair (afternoon being the key, the string '12:00' being the value)
console.log(x.evening)
//Already we have differences between an object and a variable/function.
/*
  -between properties we have commas acting as separators
  -in a key-value pair, unlike a variable-value convention, instead of an '=' assignment operator, we have a colon ':'
  -no declaration of a variable type within the object, assuming object is the universal baseline replacement for said declaration? Following code takes the mantle so to speak?
      -The statements...
      let x= 'hello'
      let y= 'world'
      console.log(x + ' ' + y)
      prints 'hello world'
      are equivalent to...
      let x= {
        rst: 'hello',
        nd: 'world',
      }
      console.log(x.)
*/