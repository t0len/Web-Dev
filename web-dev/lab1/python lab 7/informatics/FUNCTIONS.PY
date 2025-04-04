#task 1
# def min4(a, b, c, d):
#     return min(a, b, c, d)


# if __name__ == "__main__":
#     a, b, c, d = map(int, input().split())
#     print(min4(a, b, c, d))


#task 2

# def power(a, n):
#     result = 1.0
#     for _ in range(n):
#         result *= a
#     return result


# if __name__ == "__main__":
#     a, n = input().split()
#     a = float(a)
#     n = int(n)
#     print(power(a, n))

#Task 3

# def xor(x, y):
#     return (x and not y) or (not x and y)

# if __name__ == "__main__":
#     x, y = map(int, input().split())
#     result = xor(bool(x), bool(y))
#     print(int(result))  # Преобразуем результат в 0 или 1
