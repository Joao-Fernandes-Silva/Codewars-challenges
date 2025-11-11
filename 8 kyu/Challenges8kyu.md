# Codewars Challenges

This file documents the 8 kyu challenges I have solved on [Codewars](https://www.codewars.com/).  
Each entry contains the **challenge name**, its **difficulty level**, and a short **description** of the problem.

---

## 8 kyu Challenges

### 1. Return Negative
- **Description**: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
make_negative(1);  # return -1
make_negative(-5); # return -5
make_negative(0);  # return 0


### 2. Max and Min value of a list
- **Description**: Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

- **Examples**:
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Notes: You may consider that there will not be any empty arrays/vectors.


### 3. DNA to RNA Conversion
- **Description**: Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T'). Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U'). Create a function which translates a given DNA string into RNA.

- **Examples**:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.