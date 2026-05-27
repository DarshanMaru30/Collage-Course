#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],i,n,max;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}
	max=a[0];

	for(i=0;i<n;i++)
	{
		if(max<a[i])
		{
			max=a[i];
		}
	}

	cout<<"\n\nMax = "<<max;

	getch();
}