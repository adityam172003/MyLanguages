#include<bits/stdc++.h>


using namespace std;


void f(int a, int b=1);
// default parameters are not globla for function they have different for each call

int main()
{
        f(10);
        f(20);

          void(*ptr)(int,int) = f;

         (*ptr)(1,1);
        float Calculate(float P = 5.0, int N = 2, float R = 2.0);

}


void f(int a,int b)
{
    b++;

  

    cout<<b<<endl;
}