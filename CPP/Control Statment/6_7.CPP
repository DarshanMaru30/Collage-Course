#include<iostream.h>
#include<conio.h>
void main()
{
	int n;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	if(n>0)
	{
		cout<<"Positive Number";
	}
	else if(n<0)
	{
		cout<<"Negative Number";
	}
	else
	{
		cout<<"Zero";
	}


	getch();
}