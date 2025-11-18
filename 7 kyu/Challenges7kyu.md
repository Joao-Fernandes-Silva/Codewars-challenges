# Codewars Challenges

This file documents the 7 kyu challenges I have solved on [Codewars](https://www.codewars.com/).  
Each entry contains the **challenge name**, its **difficulty level**, and a short **description** of the problem.

---

## 7 kyu Challenges

### 1. Get the Middle Character
- **Description**: 
- You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
- If the string's length is odd, return the middle character.
- If the string's length is even, return the middle 2 characters.

- **Examples**
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"


### 2. A square of squares
**Description**:
- Given an integral number, determine if it's a square number:
- In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
- The tests will always use some integral number, so don't worry about that in dynamic typed languages.

- **Examples**
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false


### 3. Exes and Ohs
- **Description**: 
- Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

- **Examples**
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


### 4. Jaden Casing Strings
- **Description**: 
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

- **Examples**
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


### 5. Shortest Word
- **Description**: Simple, given a string of words, return the length of the shortest word(s).
- String will never be empty and you do not need to account for different data types.


### 6. Shortest Word
- **Description**: Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

- **Examples**: 
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


### 7. Pop Growth
- **Description**: In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
At the end of the 2nd year there will be 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
At the end of the 3rd year there will be 1141 + 1141 * 0.02 + 50 => 1213
It will need 3 entire years.

More generally given parameters:
- p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
- the function nb_year should return n number of entire years needed to get a population greater or equal to p.
- aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Note:
- Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
- There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

- **Examples**: 

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10


### 8. Pop Growth
- **Description**: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

- **Examples**: 
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false


### 9. Printer Errors
- **Description**: In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

- **Examples**: 
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
