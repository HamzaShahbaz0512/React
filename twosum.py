#Problem 1
"""
#Two sum array
arr=[]
size=int(input("Enter the size of the array: "))
sum=7


for i in range(size):
    arr.append(int(input("Enter the number: ")))
    print("Added")

for i in range(size):
    for j in range(i+1,size):
        if(arr[i]+arr[j]==sum):
            print("The numbers are ",arr[i],"and",arr[j])
"""
#Problem 2
"""Reverse a string
str=input("Enter a string: ")

for i in range(len(str)-1,-1,-1):
    print(str[i],end="")
"""

#problem 4
"""
# Print numbers 1 to 50
# But:
# If divisible by 3 → print "Fizz"
# If divisible by 5 → print "Buzz"  
# If divisible by both → print "FizzBuzz"
# Otherwise → print the number
"""

for num in range(1,51):    
    if(num%3==0 and num%5!=0):
        print("Fizz")
    elif num % 5==0 and num % 3!=0:
        print("Buzz")
    elif num % 3==0 and num % 5==0:
        print("FizzBuzz")
    else:
        print(num)