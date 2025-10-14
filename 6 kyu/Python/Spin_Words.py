def spin_words(sentece):
    list = sentece.split()
    final = ""

    for word in list:
        if len(word) >= 5:
            final += word[::-1] + " "
        else:
            final += word + " "
    return final.rstrip(' ')

print(spin_words("Hey fellow warriors"))
print(spin_words("This sentence is a sentence"))