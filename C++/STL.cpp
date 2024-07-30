#include<bits/stdc++.h>

using namespace std;


int main(){



    vector<int>v;
    
    for(int i =1;i<17;i++)v.push_back(i);

    cout<<v.capacity()<<endl; // capacity gets doubled in power of 2 

    int * p = v.data();

    cout<<*(p+1)<<endl;


    pair<int,int>pql;
    

}