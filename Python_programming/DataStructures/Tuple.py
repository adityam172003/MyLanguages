tp1 = (1,2,3,4,5)
# tuples are immutable in nature we cant assign any element in it

print(len(tp1))

# As tuples are immutable but can contain the mutable objects

tp2  = ([1,2,3],[11,22,33])

print(tp2)
tp2[0][1]=20
print(tp2)

# this is  called unpacking of the tuple
x,y,z,a,b= tp1

print(x)