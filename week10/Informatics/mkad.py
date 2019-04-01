import math

a = int(input())
b = int(input())


if a < 0:
    res = (109 + ((a * b) % 109)) % 109
else:
    res = (a * b) % 109

print(res)