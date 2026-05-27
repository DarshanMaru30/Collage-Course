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

	while(a<=b)
	{
		cout<<"\n"<<a;
		a++;
	}

	getch();
}