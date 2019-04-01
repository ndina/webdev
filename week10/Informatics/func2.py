def mini(a, b):
    return  a**b
array = list(map(float, input().split()))
print(mini(array[0], int(array[1])))
# print(mini(array[0], array[1], array[2], array[3]))