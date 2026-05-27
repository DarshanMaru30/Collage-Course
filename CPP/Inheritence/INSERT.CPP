#include<iostream.h>
#include<conio.h>
class one
{
	public:
	int a[100],n,i;
	void get()
	{
		cout<<"Enter n = ";
		cin>>n;
		for(i=0;i<n;i++)
		{
			cout<<"\nEnter a["<<i<<"] = ";
			cin>>a[i];
		}
	}
};
class two : public one
{
	public:
	int p,e;
	void ceil()
	{
		cout<<"\nEnter position = ";
		cin>>p;
		cout<<"\nEnter Element = ";
		cin>>e;
	}

	void cal()
	{
		for(i=n;i>p;i--)
		{
			a[i] = a[i-1];
		}
		a[p] = e;
	}
};
class three : public two
{
	public:
	void disp()
	{
		for(i=0;i<n+1;i++)
		{
			cout<<"\na["<<i<<"] = "<<a[i];
		}
	}
};
void main()
{
	clrscr();
	three t;
	t.get();
	t.ceil();
	t.cal();
	t.disp();
	getch();
}