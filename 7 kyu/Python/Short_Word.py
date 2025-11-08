def find_short(s):
    x = s.split()
    shortest = x[0]
    for w in x:
        if len(w) < len(shortest): shortest = w
    return len(shortest)

def find_short2(s):
    return min(len(x) for x in s.split())