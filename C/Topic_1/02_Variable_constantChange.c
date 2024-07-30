
#include<stdio.h>


 main(){


    const int var = 10;
    const int var1 = 100;
    printf("Value of var constant = %d\n",var);
    const int p = &var;
    
    int *  ptr = &var;
    *ptr = 200;

    const int *cp = &var;     //    both have same meaning 
    int const *cpp = &var;    //    int this case we cant change the value of var variable 
    // but we can change the value of cp or cpp
    cp = &var1;
    
   // we cant do this |
   // *cp=10;

   int *const prt=&var; // in this case we can change the value of var variable using prt 
   // but we cant change the value if prt 

    *prt = 200;

   // we cant do this 
   // prt = &var1; 
    int a= 10;
    int b = &a;
    b =20;
    printf(a);

    printf("Changed value of constant var variable using loophole = %d\n",var);

    // it gives worning but not any compile time error 
    // causes the overflow

    int a = 1000000000000000;

    printf("%d",a);
    // refer : https://www.geeksforgeeks.org/const-qualifier-in-c/?ref=lbp

    a =100;
    printf("\n value of %d int hexa decimal is := %X",a,a);\



    float f = 10.100;

    printf("\n%.10f",f);
}