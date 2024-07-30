#include<iostream> 


using namespace std;


class Bix
{
      int x; 
    public:
      Bix();
     ~Bix();
     // this const mean we cant change the value of the data members 
     // in this function we can read only 
     
      void Show() const;
};
Bix::Bix()
{
    x = 25;
}
void Bix::Show() const
{
   
    cout<< x;
}
 Bix:: ~Bix()
{
    cout<<"Destructor"<<endl;
}
int main()
{
    Bix objB;
    objB.Show();
    return 0; 
}