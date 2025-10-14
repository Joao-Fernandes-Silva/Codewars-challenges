def count(s):
    dic = {}
    for c in s:
        if c in dic:
            dic[c] = dic[c] + 1
        else:
            dic[c] = 1
    return dic

print(count("aba"))

