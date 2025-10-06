def get_middle(s):
    mid = ""
    length = len(s)
    
    if len(s) % 2 == 0:
        mid = s[(length // 2) - 1] + s[length // 2]
        return mid
    else:
        mid = s[(length - 1) // 2]
        return mid