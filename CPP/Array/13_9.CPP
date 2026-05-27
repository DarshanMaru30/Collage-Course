#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],i,n,min;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}
	min=a[0];

	for(i=0;i<n;i++)
	{
		if(min>a[i])
		{
			min=a[i];
		}
	}

	cout<<"\n\nMin = "<<min;

	getch();
}