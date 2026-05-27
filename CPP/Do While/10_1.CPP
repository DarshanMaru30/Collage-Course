#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b=1;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;

	do
	{
		cout<<"\n"<<a<<" X "<<b<<" = "<<a*b;
		b++;
	}
	while(b<=10);

	getch();
}