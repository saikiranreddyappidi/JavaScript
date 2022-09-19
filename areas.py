import math


def circle():
    r = float(input("Enter radius of the circle: "))
    pi = math.pi
    area = (r * r) * pi
    print("Area of circle: ", area)


def rectangle():
    len, wid = map(float, input("Enter length and width of the rectangle: ").split())
    area = len * wid
    print("Area of rectangle: ", area)


def triangle():
    a, b, c = map(float, input("Enter three sides of the rectangle: ").split())
    s = (a + b + c) / 2
    try:
        area = math.sqrt(s*(s - a)*(s - b)*(s - c))
        print("Area of triangle: ", area)
    except:
        print("With this values we cannot form a triangle")


t = True
while t:
    menu='1-Circle  ' \
         '2-Rectangle   ' \
         '3-Triangle    ' \
         '4-Exit'
    print(menu)
    n = int(input("Enter the code: "))
    if n == 1:
        circle()
    elif n == 2:
        rectangle()
    elif n == 3:
        triangle()
    elif n == 0:
        exit(1)
    else:
        print("Given code is not valid")
    print("Enter 0 to exit")
