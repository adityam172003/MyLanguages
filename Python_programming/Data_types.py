
# string , numbers , boolean  this are the basic data types used in pythom most of the time



#strings in python are immutable we  cant change it
#string s in python

#format method uesd to add any information in between
var ="aditya{0}"
var=var.format(" mahajan")
# var[1]='a' it does not allowd in python

print(var + "<<")
print(var[-2]) #negative indexing starts with -1 and end with -size

# lots of string functions are present in java

#this is 0 based indexing
print(var.find("A"))
var2 = var.upper()
var3 = var.lower()

try:
    print(var[9])
except:
    print("index out of range")



print(var3)
print(var)
print(len(var))
var = var.replace("Adi","Maha")
print(var)

print("""
    this is the python string tutorial
    moving to the python it is one of the most 
    important language 
the use of tripple quote is that this all lines were printed as it is 
also we no need to add '\\n' here 
""")

#string concatination

# if you want to concat string

str1 = 'aditya'' ''mahajan'
#this can concat but we cant use variable there
# str2 = str1 'don' this will generate error insted use + operator
print(str1)



print(type(int("123")))



    