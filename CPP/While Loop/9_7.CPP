#include<iostream.h>
#include<conio.h>
void main()
{
	int n,t,rev=0;
	clrscr();

	cout<<"Enter n =";
	cin>>n;

	while(n>0)
	{
		t=n%10;
		rev=rev*10+t;
		n=n/10;
	}

	cout<<"\n"<<rev;

	getch();
}