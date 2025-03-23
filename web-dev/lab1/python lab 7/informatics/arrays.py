#task 1
# N = int(input())
# arr = list(map(int, input().split()))

# for i in range(0, N, 2):
#     print(arr[i], end=' ')


#task 2
# N = int(input())
# arr = list(map(int, input().split()))

# for num in arr:
#     if num % 2 == 0:
#         print(num, end=' ')

#task 3
# N = int(input())
# arr = list(map(int, input().split()))

# count = 0
# for num in arr:
#     if num > 0:
#         count += 1

# print(count)


#task 4
# N = int(input())
# arr = list(map(int, input().split()))

# count = 0
# for i in range(1, N):
#     if arr[i] > arr[i - 1]:
#         count += 1

# print(count)

#task 5
# N = int(input())
# arr = list(map(int, input().split()))

# found = False
# for i in range(N - 1):
#     if (arr[i] > 0 and arr[i + 1] > 0) or (arr[i] < 0 and arr[i + 1] < 0):
#         found = True
#         break

# print("YES" if found else "NO")

#task 6
# N = int(input())
# arr = list(map(int, input().split()))

# count = 0
# for i in range(1, N - 1):
#     if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
#         count += 1

# print(count)


#task 7 
# N = int(input())
# arr = list(map(int, input().split()))


# for i in range(N // 2):
#     arr[i], arr[N - 1 - i] = arr[N - 1 - i], arr[i]


# for num in arr:
#     print(num, end=' ')
