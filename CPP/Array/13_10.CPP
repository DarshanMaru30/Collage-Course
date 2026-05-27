#include<iostream.h>
#include<conio.h>
void main()
{
	int a[100],n,i,s,cnt=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;
	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}

	cout<<"Enter search value = ";
	cin>>s;
	for(i=0;i<n;i++)
	{
		if(a[i]==s)
		{
			cnt++;
		}
	}
	cout<<"\n"<<s<<" is "<<cnt<<" time found";
	getch();
}