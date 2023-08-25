from random import randint


min_nuber=int(input("Enter the minimum number"))
max_number=int(input("Enter the maximum number"))



if(max_number<min_nuber):
    print('Invalid input shutting down')
else:
    rnd_number=randint(min_nuber,max_number)
    print(rnd_number)