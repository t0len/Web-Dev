# #task 1
# def string_times(str, n):
#   result = ""
#   for i in range(n):  
#     result = result + str 
#   return result

#task 2
# def string_splosion(str):
#   result = ""
#   for i in range(len(str)):
#     result = result + str[:i+1]
#   return result

#task 3

# def array_front9(nums):
#   end = len(nums)
#   if end > 4:
#     end = 4
  
#   for i in range(end):  
#     if nums[i] == 9:
#       return True
#   return False

# #task 4
# def front_times(str, n):
#   front_len = 3
#   if front_len > len(str):
#     front_len = len(str)
#   front = str[:front_len]
  
#   result = ""
#   for i in range(n):
#     result = result + front
#   return result

#task 5

# def last2(str):
#   # Screen out too-short string case.
#   if len(str) < 2:
#     return 0
  
#   # last 2 chars, can be written as str[-2:]
#   last2 = str[len(str)-2:]
#   count = 0
  
#   # Check each substring length 2 starting at i
#   for i in range(len(str)-2):
#     sub = str[i:i+2]
#     if sub == last2:
#       count = count + 1

#   return count

#task 6

# def array123(nums):
#   # Note: iterate with length-2, so can use i+1 and i+2 in the loop
#   for i in range(len(nums)-2):
#     if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
#       return True
#   return False


#task 7

# def string_bits(str):
#   result = ""
#   for i in range(len(str)):
#     if i % 2 == 0:
#       result = result + str[i]
#   return result

#task 8

# def array_count9(nums):
#   count = 0
#   for num in nums:
#     if num == 9:
#       count = count + 1

#   return count

#task 9

# def string_match(a, b):
#   # Figure which string is shorter.
#   shorter = min(len(a), len(b))
#   count = 0
  

#   for i in range(shorter-1):
#     a_sub = a[i:i+2]
#     b_sub = b[i:i+2]
#     if a_sub == b_sub:
#       count = count + 1

#   return count