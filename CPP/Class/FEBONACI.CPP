#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int a,b,c,i,n,x[100];
	void get()
	{
		cout<<"Enter n = ";
		cin>>n;
	}

	void con()
	{
		a=0,b=1;
		for(i=0;i<n;i++)
		{
			x[i]=a;
			c=a+b;
			a=b;
			b=c;
		}
	}

	void disp()
	{
		for(i=0;i<n;i++)
		{
			cout<<"\n"<<x[i];
		}
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