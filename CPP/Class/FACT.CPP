#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int i,n,f;

	void get()
	{
		f=1;i=1;
		cout<<"Enter n = ";
		cin>>n;
	}

	void con()
	{
		while(i<=n)
		{
			cout<<"\n"<<i;
			f=f*i;
			i++;
		}
	}
	void disp()
	{
		cout<<"\nFactorial = "<<f;
	}
};
void main()
{
	clrscr();
	darshan k;
	k.get();
	k.con();
	k.disp();
	getch();
}