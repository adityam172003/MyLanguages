#include<stdio.h>


/*  
        Functions 

        A function in C is a set of statements that when called perform some 
        specific task. It is the basic building block of a C program that 
        provides modularity and code reusability.

*/

// function declaration 
int add(int a, int b);


void  swap(int *a, int *b){
    
    int temp = *a;
    *a = *b;
    *b=temp;

}


// variable number of arguments funtion 

int addAll(int a,...){

    // referen vardict function 
}



int main(void){


    int a= 19;
    int b = 20;
    swap(&a,&b);
    
    printf("a = %d , b=%d\n",a,b);
               
               

                // function call 
    printf("a+b = %d\n",add(a,b));

}

// function definition


int add(int a,int b){
    return a+b;
}

/*
    The important thing to note is, there is no return type for fun(), 
    the program still compiles and runs fine in most of the C compilers.
    In C, if we do not specify a return type, compiler assumes an implicit
    return type as int. However, C99 standard doesn’t allow return type
    to be omitted even if return type is int. This was allowed in older
    C standard C89.
*/

fun(){
    return 10;
}
