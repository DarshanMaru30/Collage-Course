#include<iostream.h>
#include<conio.h>
void main()
{
	int a=1,n,sum=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	do
	{
		sum=sum+a;
		cout<<"\n"<<a;
		a++;
	}
	while(a<=n);

	cout<<"\nSum = "<<sum;

	getch();
}