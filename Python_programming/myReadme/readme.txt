# Learning Python 
------------------
    
# Python indendentation 

    Python indentation is a way of telling a Python interpreter that the group of 
    statements belongs to a particular block of code. A block is a combination of all 
    these statements. Block can be regarded as the grouping of statements for a specific 
    purpose. Most programming languages like C, C++, and Java use braces { } to define a 
    block of code. Python uses indentation to highlight the blocks of code. Whitespace is 
    used for indentation in Python.


# Python IO Functioning 
 
 1 ] print() function 
      print(value(s), sep= ‘ ‘, end = ‘\n’, file=file, flush=flush)
      it returns the None value 
      these are the default values for print function 
# read about flush and buffering concept 


# What is F-string in python 
    f-strings (formatted string literals) are a way to embed expressions inside string 
    literals in Python, using curly braces {}. They provide an easy and readable way to 
    format strings dynamically.

# How can you take multiple inputs from the user in python 

    1 ] using split 
    2 ] using map with split for type casting 
    3 ] using list comprehension 



# Data types in Python 

   1 ] strings
   2 ] Numbers 
   3 ] Booleans
   4 ] Lists 
   5 ] Tuples
   6 ] Sets 
   7 ] Dictionary 
   8 ] Arrays 


# Does python has charactor data ttype 
    Python Programming does not have a character data type,
    a single character is simply a string with a length of 1.


# Strings are immutable in python 
# The triple quotes can be used to declare multiline strings in Python.


# What are the various ways to update the string 
    1 ] Convert string to the list and then update the list 
    2 ] slice the string and add the charactor and again concat the string 

    remember that we cant update the string in python they are immutable 

    For deleting also we use slicing method 

# Integer 


     In Python, there is no limit to how long an integer value can be.

# how many floating point precision float has 
    floating-point number precision is only up to 15 places 
    
    We can use a decimal module for the cases – 
    When we want to define the required accuracy on our own
    For financial applications that need precise decimal representations



# define list and touple 

    list is mutable 
    tuple is immutable 
    list  =[]
    tuple =()

# advantages of set over list 

    The order of elements in a set is undefined though it may consist of various
    elements. The major advantage of using a set, as opposed to a list, is that 
    it has a highly optimized method for checking whether a specific element is
    contained in the set.
 


# we can not add list in set but tuple why ? 
    Lists cannot be added to a set as elements because Lists are not hashable
    whereas Tuples can be added because tuples are immutable and hence Hashable.

# Set Inner implementation
    he data structure used in this is Hashing, a popular technique to perform
    insertion, deletion and traversal in O(1) on average. The operations on 
    Hash Table are some what similar to Linked List. Sets in python are unordered
    list with duplicate elements removed. 


# what are the various ways to declare the Dictionary 
    1 ] d= {}
    2 ] d = dict({})
    3 ] d = dict([(key ,value),(key,value)])

# to read the dictionary we have two methods 

    1 ] d[key]
    2 ] d.get(key)

    both returns the value 

# What is membership operators
    1 ] in operator and contains() are the operator and functions resp.

# Python Identity Operators 
    1 ] is  / is not 
    The Python Identity Operators are used to compare the objects 
    if both the objects are actually of the same data type and share
    the same memory location

    


# Read the Functions.py file properly 

# FUnctions in the python are the first class objects 
# they can be passed as the parameter or arguments 
# A function is an instance of the Object type.



