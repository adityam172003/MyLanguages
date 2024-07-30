import json

with open('demo.txt','r+') as f:
        read_data = f.read() # readline() will read only one line
        print(read_data)


f = open('demo.txt','r+')
f.write("\nThis is the last line ")
for line in f:
    print(line, end=' ')

json.dumps([1,2,3,4])
f.write(json.dumps([1,2,3,4]))

f.readlines()

