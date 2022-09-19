n = abs(int(input("Enter a number:")))
sum_of_digit = 0
while n != 0:
    sum_of_digit += (n % 10)
    n = int(n / 10)
print(sum_of_digit)
