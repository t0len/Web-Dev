# #  ЗАДАЧА 1: Подсчитать количество чётных чисел в массиве
# def count_evens(nums):
#     return sum(1 for n in nums if n % 2 == 0)

# #  ЗАДАЧА 2: Найти разницу между макс и мин значениями массива
# def big_diff(nums):
#     return max(nums) - min(nums)

# #  ЗАДАЧА 3: Найти усреднённое значение без одного min и max
# def centered_average(nums):
#     nums_sorted = sorted(nums)
#     trimmed = nums_sorted[1:-1]
#     return sum(trimmed) // len(trimmed)

# #  ЗАДАЧА 4: Сумма элементов, исключая 13 и числа после 13
# def sum13(nums):
#     total = 0
#     i = 0
#     while i < len(nums):
#         if nums[i] == 13:
#             i += 2
#         else:
#             total += nums[i]
#             i += 1
#     return total

# #  ЗАДАЧА 5: Сумма чисел, игнорируя от 6 до следующей 7
# def sum67(nums):
#     total = 0
#     skip = False
#     for n in nums:
#         if n == 6:
#             skip = True
#         elif n == 7 and skip:
#             skip = False
#         elif not skip:
#             total += n
#     return total

# #  ЗАДАЧА 6: Есть ли 2 рядом с 2
# def has22(nums):
#     for i in range(len(nums) - 1):
#         if nums[i] == 2 and nums[i + 1] == 2:
#             return True
#     return False