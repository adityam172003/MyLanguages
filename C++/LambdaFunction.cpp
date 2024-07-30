#include<bits/stdc++.h>


using namespace std;


int main(){
    int a=20;

    // observe the changes by replacing the & by = and 'a' 
    auto val = [&]()->int {

            cout<<a<<endl;
            return 10;
    };
    cout<<val()<<endl;


    

}