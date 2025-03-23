#task 1
# def hello_name(name):
#     return f"Hello {name}!"


# ЗАДАЧА 2: ABBA-склейка

# def make_abba(a, b):
#     return a + b + b + a

# # ЗАДАЧА 3: Обернуть слово в HTML-теги

# def make_tags(tag, word):
#     return f"<{tag}>{word}</{tag}>"



# ЗАДАЧА 4: Вставка слова внутрь "обрамления"

# def make_out_word(out, word):
#     return out[:2] + word + out[2:]

# ЗАДАЧА 5: 3 повтора последних 2 символов строки

# def extra_end(s):
#     return s[-2:] * 3

# ЗАДАЧА 6: Первые два символа строки

# def first_two(s):
#     return s[:2]

# ЗАДАЧА 7: Первая половина строки (четной длины)

# def first_half(s):
#     return s[:len(s) // 2]

# ЗАДАЧА 8: Убрать первый и последний символы

# def without_end(s):
#     return s[1:-1]

# ЗАДАЧА 9: short + long + short

# def combo_string(a, b):
#     return a + b + a if len(a) < len(b) else b + a + b


# ЗАДАЧА 10: Склеить без первых символов

# def non_start(a, b):
#     return a[1:] + b[1:]

# ЗАДАЧА 11: Сдвиг влево на 2 символа

# def left2(s):
#     return s[2:] + s[:2]
