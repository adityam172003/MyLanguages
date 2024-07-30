#include<bits/stdc++.h>

using namespace std;


class Base{

    public:
        Base(){
            cout<<"Base called"<<endl;
        }
       virtual void call(){

            cout<<"Base class call"<<endl;
        }


};



class Child:public Base{

    public:
    // its not compulsary to overrride the virtual function 
        Child(){

            cout<<"Child Called"<<endl;
        }
        void call()override{
            cout<<"Child class call"<<endl;
        }
};



int main(){

    Base*s =new Child();

    // Child ch;
    // s=&ch;
    s->call();

}



