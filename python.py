def recursion_increment(limit, x, x2):
    if limit == 10:
        return print(x, limit)
    else:
        x = x2 * 2
        print(x, limit)
        recursion_increment(limit + 1, x2, x)


limit = 0
x = 1
x2 = 1
recursion_increment(limit, x, x2)

print('- - - - - - - - - -')

dataset = [
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50
]

# Fix this part
def sum_function(x):
    for i in x:
        q = 0
        r = 1
        sum = i[q] + i[r]
        q = q + 1
        r = r + 1
        return print(sum)

q = 0
r = 1
sum_function(dataset)
        



