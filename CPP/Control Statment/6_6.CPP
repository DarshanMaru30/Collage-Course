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

	if(a>10)
	{
		if(b>10)
		{
			if(c>10)
			{
				cout<<"Creative";
			}
			else
			{
				cout<<"Multimedia";
			}
		}
		else
		{
			if(b>10)
			{
				cout<<"Creative";
			}
			else
			{
				cout<<"Multimedia";
			}
		}
	}
	else
	{
		if(a>10)
		{
			cout<<"Creative";
		}
		else
		{
			cout<<"Multimedia";
		}
	}
	getch();

}