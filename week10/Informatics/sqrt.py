from math import sqrt

x = int(input())

i = 1

while i < x + 1:
    if int(float(sqrt(i)))*int(float(sqrt(i))) == int(i):
        print(i)
    i+=1
