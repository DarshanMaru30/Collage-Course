#include<iostream.h>
#include<conio.h>
void main()
{
	int a=1,n,sum=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	while(a<=n)
	{
		sum=sum+a;
		cout<<"\n"<<a;
		a++;
	}

	cout<<"\nSum = "<<sum;

	getch();
}