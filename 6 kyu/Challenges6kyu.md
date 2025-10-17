# Codewars Challenges

This file documents the 6 kyu challenges I have solved on [Codewars](https://www.codewars.com/).  
Each entry contains the **challenge name**, its **difficulty level**, and a short **description** of the problem.

---

## 6 kyu Challenges

### 1. Convert string to camel case

- **Description**: Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

- **Examples**
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"


### 2. Roman Numerals Decoder

- **Description**: Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
- Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

- **Examples**
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1

- **Help**:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000


### 3. Spinning Words
- **Description**: Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata).
- Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

- **Examples**
"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"


### 4. Spinning Words
- **Description**: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
- What if the string is empty? Then the result should be empty object literal, {}.


### 5. Who likes it?
- **Description**:You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or others. We want to create the text that should be displayed next to such an item.
- Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
- Note: For 4 or more names, the number in "and 2 others" simply increases.

- **Examples**
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


### 6. Create Phone Number
- **Description**: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
- The returned format must be correct in order to complete this challenge.
- Don't forget the space after the closing parentheses!

- **Examples**
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


### 7. Digital Root
- **Description**: Digital root is the recursive sum of all the digits in a number.
- Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

- **Examples**
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

