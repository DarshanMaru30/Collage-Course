#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],n,i,p;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}

	cout<<"Enter Del Position = ";
	cin>>p;

	for(i=p;i<n;i++)
	{
		a[i]=a[i+1];
	}

	for(i=0;i<n-1;i++)
	{
		cout<<"\na["<<i<<"] = "<<a[i];
	}

	getch();
}