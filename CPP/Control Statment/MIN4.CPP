#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b,c,d;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;
	cout<<"Enter b = ";
	cin>>b;
	cout<<"Enter c = ";
	cin>>c;
	cout<<"Enter d = ";
	cin>>d;

	if(a<b)
	{
		if(a<c)
		{
			if(a<d)
			{
				cout<<"a is min";
			}
			else
			{
				cout<<"d is min";
			}
		}
		else
		{
			if(c<d)
			{
				cout<<"c is min";
			}
			else
			{
				cout<<"d is min";
			}
		}
	}
	else
	{
		if(b<c)
		{
			if(b<d)
			{
				cout<<"b is min";
			}
			else
			{
				cout<<"d is min";
			}
		}
		else
		{
			if(c<d)
			{
				cout<<"c is min";
			}
			else
			{
				cout<<"d is min";
			}
		}
	}


	getch();
}