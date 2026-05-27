#include<iostream.h>
#include<conio.h>
void main()
{
	int a[10],b[10],c[10],n,i,n1,t=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
		c[t]=a[i];
		t++;
	}

	cout<<"Enter n1 = ";
	cin>>n1;

	for(i=0;i<n1;i++)
	{
		cout<<"Enter b["<<i<<"] = ";
		cin>>b[i];
		c[t]=b[i];
		t++;
	}

	for(i=0;i<n+n1;i++)
	{
		cout<<"\nc["<<i<<"] = "<<c[i];
	}

	getch();
}