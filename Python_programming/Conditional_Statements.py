

# 1 ]  if statement
# just focus on the syntax of if-else statement
# indentation is more important here

#like that we can use the if - elif -else statement in the python

if 10>20:
    print("YES")
else :
    print("Done")




if 0:
    pass
elif 2:
    pass
elif 4 :
    pass
else :
    print("over")


# we can write the if conditions in one line using below program 
'''
    One of them is that, it works on the concept of python dictionary.
    This means the conditions are stored in the form of dictionary keys
    and the statement to be executed is stored in the form of dictionary values.
    One the keys, that is the condition returns True, only then the value of the
    corresponding key is executed.
'''

x =20
result = {x > 0: "Positive", x < 0: "Negative"}.get(True, "Zero")

print(result)
'''

x  = int(input("Enter the user id : "))
name = input("Enter the name : ")
if x==10 or x==20:
    print("you are authenticated ready to go ")
elif x==11 and name=="don" :
    print("Better to have id 10")
else :
    print("you are not authenticated please check the id")

'''

# Program to demonstrate ternary operator
a = 10
b = 20

# python ternary operator
min = "a is minimum" if a < b else "b is minimum"

print(("b is minimum", "a is minimum") [a < b])
#        false           true          condition 


# 2 ] for loop in python


#pythons for loop iterate over the sequence

#indententations are more important here

lst = ["aditya","govinde","mahajan","don","pascle"]

lst2 = [x for x in lst if x=="aditya"]
print(lst2)
for i in lst:
    # i.replace('a','A')
    print(i,end=" ")

print()
# range (a,b) a is including and b is exculding

for i in range(3,10):
    print(i,end=" ")

print()
# range(a,b,c) c indicates the increment in i from a to b
for i in range(20,-1,-1):
    print(i,end=" ")

print()
for i in range(1,20,5):
    print(i, end=" ")
print()

# range function does not create the list
# it is an object which returns the successive items of the desored sequence such object is called iterable


#list function create the list of iterator



listiter = list(range(10))
print(listiter)





#loop has else clause which gets executed when loop ends but not when loop is terminated by break statement
for i in range(2,10):
    for x in range(2,i):
        if i%x==0:
            print(i," equals ",x,'*',i//x)
            break
    else:
        print(i, " is  prime number ")

# while in python
i=20
while i>10:
    print(i)
    i=i-1