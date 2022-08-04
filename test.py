#initialized
array=[231,324,45,54,66,78,89]
array.sort()
x=45
len=len(array)-1
status=False
l=0
h=len
#while loop
while l<=h:
    mid=int((l+h)/2)
    if array[mid]==x:
        status=True
    if x>array[mid]:
        l=mid+1
    else:
        h=mid-1
#Driver Code
if status==True:
    print('Found')
else:
    print('Not Found')
