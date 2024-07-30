#include<bits/stdc++.h>


using namespace std;


int main()
{
        const int a  =10;

        int const *p=&a; // its pointer of type int const so we cant change the 
        //*p=20;          // the value of the memory location 
        cout<<*p<<endl;

        // here we cant change the value of constant like how we were doing in c 
        // constant pointer and pointer to constant variable 

        
}