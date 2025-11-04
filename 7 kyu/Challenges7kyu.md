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

