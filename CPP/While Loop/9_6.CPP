#include<iostream.h>
#include<conio.h>
void main()
{
 	int n,fact=1;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	while(n>0)
	{
		fact=fact*n;
		cout<<"\n"<<n;
		n--;
	}

	cout<<"\nFact = "<<fact;

	getch();
}