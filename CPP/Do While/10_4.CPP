#include<iostream.h>
#include<conio.h>
void main()
{
	int n1,n2,n3,t=0;
	clrscr();

	cout<<"Enter n1 = ";
	cin>>n1;
	cout<<"Enter n2 = ";
	cin>>n2;
	cout<<"Enter n3 = ";
	cin>>n3;

	do
	{
		if(n1%n3==0)
		{
			t=t+n1;
			cout<<"\nVal = "<<n1;
		}
		n1++;
	}
	while(n1<=n2);

	cout<<"\nSum = "<<t;

	getch();
}