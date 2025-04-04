# #  ЗАДАЧА 1: make_bricks
# def make_bricks(small, big, goal):
#     max_big = min(goal // 5, big)
#     return small >= (goal - max_big * 5)

# #  ЗАДАЧА 2: lone_sum
# def lone_sum(a, b, c):
#     if a == b == c:
#         return 0
#     elif a == b:
#         return c
#     elif a == c:
#         return b
#     elif b == c:
#         return a
#     else:
#         return a + b + c

# #  ЗАДАЧА 3: lucky_sum
# def lucky_sum(a, b, c):
#     if a == 13:
#         return 0
#     elif b == 13:
#         return a
#     elif c == 13:
#         return a + b
#     else:
#         return a + b + c

# #  ЗАДАЧА 4: no_teen_sum (с helper функцией)
# def fix_teen(n):
#     if n in [13, 14, 17, 18, 19]:
#         return 0
#     return n

# def no_teen_sum(a, b, c):
#     return fix_teen(a) + fix_teen(b) + fix_teen(c)

# #  ЗАДАЧА 5: round_sum (с helper функцией)
# def round10(num):
#     return ((num + 5) // 10) * 10

# def round_sum(a, b, c):
#     return round10(a) + round10(b) + round10(c)

# #  ЗАДАЧА 6: close_far
# def close_far(a, b, c):
#     is_close = lambda x: abs(a - x) <= 1
#     is_far = lambda x: abs(a - x) >= 2 and abs(b - x) >= 2
#     return (is_close(b) and is_far(c)) or (is_close(c) and is_far(b))

# # ЗАДАЧА 7: make_chocolate
# def make_chocolate(small, big, goal):
#     max_big = min(goal // 5, big)
#     remaining = goal - max_big * 5
#     return remaining if remaining <= small else -1