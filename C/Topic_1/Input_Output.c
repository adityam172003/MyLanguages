#include<stdio.h>



// this main method is correct 
int main(void){

    // input 

    /*
        
        int scanf( const char *format, ... );
        int printf( const char *format, ...);  
        
        the method declaration and definition present in the stdio.h header 
        file 


    */

//    int a;
//    scanf("%d",&a);
//    printf("You have entered %d \n",a);

   // string input

   char ch[100] ;
   
    printf("Enter the name : ");
    scanf("%s",ch);

   
  printf(" \n\nyou have entered : %s as your name.",ch);

  
  printf("\n\nTo read the sentence please enter the sentence :");
  
  char str[50];
 while ((getchar())!='\n'); // as in previous input we have entered \n which we need to 
 // be removed from the buffer then only below sentence will work
  
  scanf("%[^\n]s",str);
  printf("\nYour entered syntax is : %s",str);
}