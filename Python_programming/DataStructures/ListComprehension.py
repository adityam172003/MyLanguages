
squares= list(map(lambda x:x**2,range(1,10)))

print(squares)

# list comprehensation
other = [x**2 for x in range(1,10)]

print(other)

newlst = [s for s in range(30) if s%2 ==0]

print(newlst)

# we can use multiple for and if claus in the range
print([(x,y) for x in range(2,8) for y in range(20,22) if y%x==0 and x%2 ==0])

# del statemenet is used to remove element by providing the index
# it does not returns any value

del newlst[1]
print(newlst)
del newlst[2:8] # del from index 2 to index 8 including
print(newlst)

# delete whole veriable from the memory like a pointer
del newlst

