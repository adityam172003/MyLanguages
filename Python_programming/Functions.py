
# function defination in python starts with def keyword and indentation is important

def myfun(a,b):
    print("This is "+a+" "+b)
    
def myfun():
    print("Namaste !! ")





# to call just enter the name

myfun()

# to pass the parameter

def parameter_fun(name):
    print("Namaste",name)


parameter_fun("Aditya")


def fun(a,b):
    return a+b

print(fun(10,20))

# first line of each function placed in """---""" is called docstring this gives the information about
# the function behaviour

# fibonacci number in python


def fibonacci_number(n):
    """this function gives the n th fiboncci number """
    if(n==0):
        return 0
    if(n==1):
        return 1
    return fibonacci_number(n-1)+fibonacci_number(n-2)


print(fibonacci_number(4))


def print_seq_fibonacci(n):
    """this is the iterative version of fibonacci serise it prints the sequence """
    a=0
    b=1
    while n>0:
       print(a,end=' ')
       a,b=b,a+b
       n-=1
    print()

print_seq_fibonacci(5)

print(print_seq_fibonacci)

#the function which does not returns anything also returns the value = None
print(print_seq_fibonacci(10))


#defining te functions

# 1 ]  default argument values

def default_argument(name ="aditya"):
    print("Namaste :",name.upper())

default_argument()
default_argument("abhi")

'''default values are evaluated at the time of defining only '''

i = 10
def default_para(arg =i):
    print(arg)

i=20
default_para() # will print 10 and not 20

# default value is evaluated ony ones this makes default is a mutable object

def default_mutable(a,l=[]):
    l.append(a)
    print(l)
    #return l


default_mutable(1)
default_mutable(2)
default_mutable(3)



# 2 ]  keyword argument

def keyword_args(voltage,name="aditya",passwrd='none'):
    print("voltage =",voltage)
    print("name =",name)
    print("password = "+passwrd)

keyword_args(1000)
keyword_args(voltage=10,passwrd="don")

def different_one(voltage,**name):
    '''** accepts the dictionary this must be the last argument ir after list '''
    print(voltage)
    print("name : in dictionary : ",name)

different_one(1000,name="aditya",bday="17/2/2003",age="21")

def different_list(voltage,*name,**dict):
    '''* accepts the list'''
    print(voltage)
    print("List accepted",name)
    print("dict acceptance",dict)

different_list(100,12,13,22,11,name="don",avg="203",range='200')


ls=[(1,2),(2,5),(4,3),(5,6)]


# Lambda functions are here


ls.sort(key=lambda pr:pr[0])
print(ls)

def retlambda():
    return lambda s:s+20

f= retlambda()
print(f(20))
f = lambda  b:2020
print(f(30))


