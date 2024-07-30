#include<stdio.h>


/*  

Various conditional statements 

    1 ] if{

        
        }

    2 ] if{
        
        }
        else{
        
        }

    3 ] if{
        
        }
        else if( ){
        
        }
        else{
        
        }


    4 ] (condition)? (expression)  :(expression)

    5 ] switch case statements 


*/

int main(void)
{
    int a;
    printf("Enter the number : ");
    scanf("%d",&a);


    if(a==10){
        printf("Correct\n");
    }
    else{
        printf("Gread going ... !! \n");
    }



    switch (a)
    {
    case 10:
        printf("As you have entered %d it is good to go",a);
        break;
    case 20:
        printf("As you have entered %d better to go",a);
        break;
    default:
        break;
    }

    again:
        printf("\nThis is label and we can jump here using goto statement");
    
    // this is an unconditional jump statement 

    if(a==20){
        a=10;
        goto again;
    }

    // we dont use it to go up but skip some part of program and jump to next label 
    // by skipping some middle labels 
    

}