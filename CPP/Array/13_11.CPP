#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],n,i,f,r;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}

	cout<<"Enter Find Value = ";
	cin>>f;
	cout<<"Enter Replace Value = ";
	cin>>r;

	for(i=0;i<n;i++)
	{
		if(a[i]==f)
		{
			a[i]=r;
		}
	}

	for(i=0;i<n;i++)
	{
		cout<<"\na["<<i<<"] = "<<a[i];
	}

	getch();
}