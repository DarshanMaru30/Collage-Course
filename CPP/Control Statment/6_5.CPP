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

	if(a==b)
	{
		if(a==c)
		{
			cout<<"a b c is same";
		}
		else
		{
			if(c<b)
			{
				cout<<"a b is same and c is min";
			}
			else
			{
				cout<<"a b is same and c is max";
			}
		}
	}
	else
	{
		if(b==c)
		{
			if(a<b)
			{
				cout<<"b c is same and a is min";
			}
			else
			{
				cout<<"b c is same and a is max";
			}
		}
		else
		{
			if(c==a)
			{
				if(b<a)
				{
					cout<<"a c is same and b is min";
				}
				else
				{
					cout<<"a c is same and b is max";
				}
			}
			else
			{
				cout<<"a b c is different";
			}
		}
	}
	getch();
}