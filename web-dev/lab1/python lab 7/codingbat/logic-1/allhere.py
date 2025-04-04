# #  ЗАДАЧА 1: cigar_party
# def cigar_party(cigars, is_weekend):
#     if is_weekend:
#         return cigars >= 40
#     else:
#         return 40 <= cigars <= 60

# #  ЗАДАЧА 2: date_fashion
# def date_fashion(you, date):
#     if you <= 2 or date <= 2:
#         return 0
#     elif you >= 8 or date >= 8:
#         return 2
#     else:
#         return 1

# #  ЗАДАЧА 3: squirrel_play
# def squirrel_play(temp, is_summer):
#     upper = 100 if is_summer else 90
#     return 60 <= temp <= upper

# #  ЗАДАЧА 4: caught_speeding
# def caught_speeding(speed, is_birthday):
#     allowance = 5 if is_birthday else 0
#     actual_speed = speed - allowance
#     if actual_speed <= 60:
#         return 0
#     elif actual_speed <= 80:
#         return 1
#     else:
#         return 2

# #  ЗАДАЧА 5: sorta_sum
# def sorta_sum(a, b):
#     s = a + b
#     return 20 if 10 <= s <= 19 else s

# #  ЗАДАЧА 6: alarm_clock
# def alarm_clock(day, vacation):
#     is_weekend = day == 0 or day == 6
#     if vacation:
#         return "off" if is_weekend else "10:00"
#     else:
#         return "10:00" if is_weekend else "7:00"

# #  ЗАДАЧА 7: love6
# def love6(a, b):
#     return a == 6 or b == 6 or a + b == 6 or abs(a - b) == 6

# #  ЗАДАЧА 8: in1to10
# def in1to10(n, outside_mode):
#     if outside_mode:
#         return n <= 1 or n >= 10
#     else:
#         return 1 <= n <= 10

# #  ЗАДАЧА 9: near_ten
# def near_ten(num):
#     return num % 10 <= 2 or num % 10 >= 8