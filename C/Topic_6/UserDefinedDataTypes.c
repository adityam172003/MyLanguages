#include<stdio.h>



struct MyFirstStruct{

    int id;
    char * name ;

 //   int p =10 ; we cant do it .

 /*
        The reason for the above error is simple. When a datatype is declared,
        no memory is allocated for it. Memory is allocated only when variables
        are created.
 */

};




typedef struct MyFirstStruct fst;


// self referencing structure 

typedef struct strt { 
    int mem1; 
    int mem2; 
    struct strt* next; 
}strt;  

enum enm {sunday , monday} e;

int main(void){

    // moving towards user defined data types 

    // keyword is required 

    // initialization 
    // 1 ]
   struct MyFirstStruct str;
   e = sunday; // if you assign the value which is not present in enum it will cause 
    // compile time error 
    
    printf("Enum e = %d\n",e);
    // pointer to structure 
    // use -> arrow operator to access the members 


    struct MyFirstStruct * ptr = &str;

    str.id = 10;
    str.name  = "Aditya";

    // 2 ]

   struct MyFirstStruct str2={19,"Initializer list"};


    // 3 ] 

   struct MyFirstStruct str4 = {.id=20,.name="Designated initializer list "};


    printf("ID = %d and Name =  %s\n",str.id,str.name);


    fst str3 ={20,"Using typedef"};

    fst * ptr2= &str3;



}