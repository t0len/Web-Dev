# #  ЗАДАЧА 1: Удвоение каждого символа строки
# def double_char(s):
#     return ''.join([c * 2 for c in s])

# #  ЗАДАЧА 2: Подсчёт количества "hi" в строке
# def count_hi(s):
#     return s.count("hi")

# #  ЗАДАЧА 3: Проверка равного количества "cat" и "dog"
# def cat_dog(s):
#     return s.count("cat") == s.count("dog")

# #  ЗАДАЧА 4: Подсчёт "code"-похожих слов: co*e
# def count_code(s):
#     count = 0
#     for i in range(len(s) - 3):
#         if s[i] == 'c' and s[i + 1] == 'o' and s[i + 3] == 'e':
#             count += 1
#     return count

# #  ЗАДАЧА 5: Один из двух строк — окончание другой (игнор регистра)
# def end_other(a, b):
#     a = a.lower()
#     b = b.lower()
#     return a.endswith(b) or b.endswith(a)

# #  ЗАДАЧА 6: "xyz", не предшествующий точке
# def xyz_there(s):
#     i = 0
#     while i < len(s) - 2:
#         if s[i:i+3] == 'xyz':
#             if i == 0 or s[i - 1] != '.':
#                 return True
#         i += 1
#     return False