#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b,c;
	clrscr();

	cout<<"Enter the Password = ";
	cin>>a;
	cout<<"Plz,Enter The Password = ";
	cin>>b;

	if(a==b)
	{
		do
		{
			clrscr();
			cout<<"Welcome";
		}
		while(a!=b);
	}
	else
	{
		do
		{
			cout<<"Enter the password Again = ";
			cin>>c;
		}
		while(c!=a);
		clrscr();
		cout<<"\nWelcome";
	}

	getch();
}