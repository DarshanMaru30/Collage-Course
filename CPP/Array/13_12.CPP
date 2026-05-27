#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],n,i,p,v;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}

	cout<<"Enter position = ";
	cin>>p;
	cout<<"Enter New Value = ";
	cin>>v;

	for(i=n;i>p;i--)
	{
		a[i]=a[i-1];
	}
	a[p]=v;

	for(i=0;i<n+1;i++)
	{
		cout<<"\na["<<i<<"] = "<<a[i];
	}

	getch();
}