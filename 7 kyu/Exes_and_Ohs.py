def xo(s):
    countX = 0
    countO = 0

    for char in s:
        c = char.lower()

        if c == "x":
            countX += 1
        elif c == "o":
            countO += 1
    return countO == countX

print(xo("ooxXm"))