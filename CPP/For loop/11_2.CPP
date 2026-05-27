#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b,t,sum=0;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;

	t=a;

	for(;a>0;)
	{
		b=a%10;
		sum=sum+b*b*b;
		a=a/10;
	}

	if(sum==t)
	{
		cout<<"\nArmstrong Number";
	}
	else
	{
		cout<<"\nNot Armstrong Number";
	}


	getch();
}