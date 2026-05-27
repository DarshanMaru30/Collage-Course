#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;
	cout<<"Enter b = ";
	cin>>b;

	if(a<b)
	{
		while(a<=b)
		{
			if(a%2!=0)
			{
				cout<<"\n"<<a;
			}
			a++;
		}
	}
	else
	{
		while(b<=a)
		{
			if(b%2==0)
			{
				cout<<"\n"<<b;
			}
			b++;
		}
	}

	getch();
}