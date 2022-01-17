
# def fibonnaci(limit):
#     asdf = [0,1]
#     first = (len(asdf)) - len(asdf)
#     second = first + 1

#     next_el = asdf[first] + asdf[second]
#     print(asdf[first], asdf[second], next_el)

#     while len(asdf) < limit:

def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]

# print(fibonacci_iter(10))

# print(asdf[-1], asdf[-2])

def fibonacci_rec(n):
    if n < 2:
        return n
    else:
        return fibonacci_rec(n-1) + fibonacci_rec(n-2)

# print(fibonacci_rec(10))
asdf = [0,1,2,3,4,5,6,7]

def reverse(list):
  new_list = []
  for i in list:
      new_list.insert(0, i)
  return new_list

print(reverse(asdf))