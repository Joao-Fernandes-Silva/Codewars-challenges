def to_camel_case(text):
    result = ""
    capitalize = False
    for i, char in enumerate(text):
        if char in ('_', '-'):
            capitalize = True
        else:
            if capitalize:
                result += char.upper()
                capitalize = False
            else:
                result += char
    return result

test = "the-Stealth-Warrior"
print(to_camel_case(test))