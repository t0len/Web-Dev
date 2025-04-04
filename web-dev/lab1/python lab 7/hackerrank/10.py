from itertools import product


K, M = map(int, input().split())


lists = []
for _ in range(K):
    data = list(map(int, input().split()))
    lists.append(data[1:])  


max_result = 0
for combo in product(*lists):
    current = sum(x**2 for x in combo) % M
    max_result = max(max_result, current)

print(max_result)
