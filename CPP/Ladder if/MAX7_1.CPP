#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b,c,d,e;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;
	cout<<"Enter b = ";
	cin>>b;
	cout<<"Enter c = ";
	cin>>c;
	cout<<"Enter d = ";
	cin>>d;
	cout<<"Enter e = ";
	cin>>e;

	if(a>b && a>c && a>d && a>e)
	{
		cout<<"a is max";
	}
	else if(b>c && b>d && b>e)
	{
		cout<<"b is max";
	}
	else if(c>d && c>e)
	{
		cout<<"c is max";
	}
	else if(d>e)
	{
		cout<<"d is max";
	}
	else
	{
		cout<<"e is max";
	}

	getch();
}