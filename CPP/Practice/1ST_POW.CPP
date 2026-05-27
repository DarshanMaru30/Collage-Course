#include<iostream.h>
#include<conio.h>
#include<math.h>
class darshan
{
	public:
	int get()
	{
		int n,p,n1;
		cout<<"Enter n = ";
		cin>>n;
		cout<<"Enter Power = ";
		cin>>p;
		n1=pow(n,p);
		cout<<"Power of n = "<<n1;
	}
};
void main()
{
	clrscr();
	darshan k;
	k.get();
	getch();
}