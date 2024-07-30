set1 = {1,2,3,3,32,2,23,4,4}
print(set1)
set2 = set()
set2.add(1)
set2.add(2)
set2.add(2)
print(set2)
print(1 not in set2)
print(2 in set2)

# set supports list comprehensions
print(set2.intersection({2}))
