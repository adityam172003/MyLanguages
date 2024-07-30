#include<stdio.h>
#include<stdlib.h>
// it generates only worninig 

 main(void){

    // return type of malloc is void pointer which we need to typecast 
    // malloc takes size as input 
    // initialized by garbage value 

    int * ptr = (int*)malloc(5*sizeof(int));

    ptr[0]=10;
    ptr[1]=20;
    ptr[5]=30;
    printf("Dynamic array arr[6]=%d \n",ptr[5]);


    // it initialize the memory blocks with 0 


    int *ptr2  = (int*)calloc(5,sizeof(int));


    // memory blocks are not freed by their own

    
    free(ptr2);
    free(ptr);
    


}
