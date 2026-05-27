#include<iostream.h>
#include<conio.h>
void main()
{
	int a=0,b=1,c,i,n;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=1;i<=n;i++)
	{
		cout<<"\n"<<a;
		c=a+b;
		a=b;
		b=c;
	}

	getch();
}