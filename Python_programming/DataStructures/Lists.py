# more about lists

# iterable returned by rang() function


lst = []
lst.append(20)
lst.extend(range(20,30))

lst.insert(3,40)

lst.remove(23) # remove the first occurance of the number 23

print(lst)

print(lst.pop(2)) # remove and returns the number

print(lst.index(20,1,10))
print(lst)

ls =lst.copy()#create shallow copy
ls.insert(2,11)
print(lst)
print(ls)



