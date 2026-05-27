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
			cout<<"Enter a["<<i<<"] = ";
			cin>>a[i];
		}
	}
};
class two : public one
{
	public:
	int d;
	void ceil()
	{
		cout<<"\nEnetr Delete Position = ";
		cin>>d;
	}
	void cal()
	{
		for(i=d;i>=d;i--)
		{
			a[i] = a[i+1];
		}
	}
};
class three : public two
{
	public:
	void disp()
	{
		for(i=0;i<n-1;i++)
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