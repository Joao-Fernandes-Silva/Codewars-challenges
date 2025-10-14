def solution(roman : str) -> int:
    single = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    special = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    total = 0
    i = 0

    while i < len(roman):
        if i < len(roman) and (pair := roman[i:i+2]) in special:
            total += special[pair]
            i += 2
        else:
            total += single[roman[i]]
            i += 1
    return total

print(solution('MMMCMXCIX'))
print(solution('MMMDCCCLXXXVIII'))
print(solution('MDCLXVI'))