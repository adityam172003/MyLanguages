#include<stdio.h>
#include<string.h>

// array is always passed as a pointer 
// so it is always pass by address concept 
// keep in mind 

int f(int arr[])
{   
    // herr sizeof operator returns the size of *int type pointer 
    // it will not give the size of the actual array present in arr 


    printf("%ld\n" ,sizeof(arr));
    arr[2]=20;
}

int * arrf(){

    int static arr[3]={100,200,30}; // if you dont make it static 
    // as it is local to this function and as soon as function completes its execution 
    // array will be destroyed and we cant access the returned arrya as it does not exists 
    // at that time 

    // just remove static and check the segementation fault in below main 
    // program 

    return arr;
}
int main(){

    // data_type variable[size] ; Array declaration 


    int arr[5]; // arr[0]=0 , arr[1]=0, rest are the garbage values 
    // arr is a pointer which stores the address of first element of the array 
    // we cant change the value of arr it is immutable 


    
    f(arr);
    printf("%d\n",arr[2]);
    printf("%d\n",arr[1]);
    printf("arr= %p , arr[1]=%p\n",arr,&arr[1]);
    printf("Size of arr = %ld\n",sizeof(arr));


    int *a = arrf();

    printf("%d\n",a[0]);

    char *str= "Aditya";

    printf("%s\n",str);

}