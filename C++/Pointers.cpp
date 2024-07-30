#include<bits/stdc++.h>



using namespace std;
int x =10;
int main(){
    int p=29;
    
    int &t=x;

    t=20;
   t=p;
    cout<<x<<endl;

    int *ptr = &x;
    x=20;
    cout<<*ptr<<endl;

    



}