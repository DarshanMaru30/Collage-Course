#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b,c;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;
	cout<<"Enter b = ";
	cin>>b;
	cout<<"Enter c = ";
	cin>>c;

	if(a<b)
	{
		if(a<c)
		{
			cout<<"a is min";
		}
		else
		{
			cout<<"c is min";
		}
	}
	else
	{
		if(b<c)
		{
			cout<<"b is min";
		}
		else
		{
			cout<<"c is min";
		}
	}


	getch();
}