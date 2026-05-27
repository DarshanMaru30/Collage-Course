#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],i,n,sum=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}

	for(i=0;i<n;i++)
	{
		cout<<"\na["<<i<<"] = "<<a[i];
		sum=sum+a[i];
	}

	cout<<"\n\nSum = "<<sum;

	getch();
}