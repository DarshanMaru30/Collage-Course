#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int arm,n,i,s,r;
	void get()
	{
		arm=0,i=1;
		cout<<"Enter n = ";
		cin>>n;
		s=n;
	}

	void con()
	{
		while(n>0)
		{
			r=n%10;
			arm=arm+(r*r*r);
			n=n/10;
		}
	}

	void disp()
	{
		if(arm==s)
		{
			cout<<"Armstrong number";
		}
		else
		{
			cout<<"Not";
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