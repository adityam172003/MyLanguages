#include<stdio.h>


void myfun(int a)
{
    printf("Function pointer called using pointer %d\n",a);
}

// more info for function pointer https://www.geeksforgeeks.org/function-pointer-in-c/?ref=lbp

int main(void){

    int * prt = NULL;

    void (*fun_ptr)(int) =&myfun; // both works  
    void (*fun_ptr2)(int)=myfun; // this also works 


    if(prt==NULL){
        printf("Null pointer \n");
    }
    (*fun_ptr)(100);



    // pointer to array 

    int arr[5]={1,2,3,4,5};

    int* p ;
    p=arr;
    int (*ptr)[5];
    ptr = &arr;

    // here p points to the first number in the array 
    // but ptr points to whole array 

     printf("p = %p, ptr = %p\n", p, ptr);
     
    p++; 
    ptr++;
     
    printf("p = %p, ptr = %p\n", p, ptr);

    printf("size of ptr == %lu\n",sizeof(*ptr));
    printf("size of ptr == %lu\n",sizeof(ptr));
    // as p is incremented by 4 bytes 
    // ptr incremented by 20 bytes as its base size is whole array and not single element 


}