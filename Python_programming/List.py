
#list is hetereganous data type storing container


mylist  =[10,'aditya',20,30]



print(mylist)
#list also support slicing

print(mylist[-2:])
print(mylist[1:3])

#list support concatination

#returns new list
print(mylist+[100,200,300])

#unlike string lists are muitable
mylist.insert(0,1020)

print(mylist)

print(len(mylist))
