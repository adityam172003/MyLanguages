#include<bits/stdc++.h>


using namespace std;



int main(){

    try
    {
        string s = "Error in try block";
        throw s;
    }
    catch(string s){
        cerr<<s<<endl;
    }

}