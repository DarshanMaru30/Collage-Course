#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b=0,c=1;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;

	do
	{
		b=c*c*c;
		cout<<c<<" = "<<b<<endl;
		c++;
	}
	while(c<=a);

	getch();
}