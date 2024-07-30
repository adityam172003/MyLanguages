#include<stdio.h>




int A(char *arr){

    printf("Calling function A %s \n",arr);

    return 0;
}


void B(int(*ptr)(char* arr),char *arr){

    printf("Calling function B \n");
   /// CALLBACK FUNCTION
     (*ptr)(arr);
}




int main()
{

// return (pointer) (arguments)
    int (*ptr)(char *arr) = &A;
    char * arr = "Aditya";
    B(ptr,arr);
}