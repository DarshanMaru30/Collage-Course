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

	(a>b)?(a>c)?cout<<"a is max":cout<<"c is max":(b>c)?cout<<"b is max":cout<<"c is max";

	getch();
}