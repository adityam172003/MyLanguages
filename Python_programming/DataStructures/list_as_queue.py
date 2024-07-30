from collections import  deque

queue = deque([1,2,3,5,4,3])

# append at end
queue.append(20)

print(queue)

#append at front
queue.appendleft(300)
print(queue)

#pop from end
print(queue.pop())
print(queue)

#pop from front
print(queue.popleft())
print(queue)

