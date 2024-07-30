#include<iostream>
#include<string>
#include <sstream>

using namespace std;

int main(){

    string s= "Aditya";
    string str;
    int a;
    cin>>a;

    // to clear the buffer which contain new line charactor 

    cin.ignore();
    getline(cin,str);
    cout<<str;


     s = " GeeksforGeeks to the Moon ";
    stringstream obj(s);
    // string to store words individually
    string temp;
    // >> operator will read from the stringstream object
    while (obj >> temp) {
        cout << temp << endl;
    }

}
