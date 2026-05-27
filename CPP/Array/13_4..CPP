#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],b[100],i,n;
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
		b[i]=a[i];
		cout<<"\nb["<<i<<"] = "<<b[i];
	}

	getch();
}