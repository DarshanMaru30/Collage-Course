#include<iostream.h>
#include<conio.h>
void main()
{
	int n,m,sum=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;
	while(n<=5)
	{
		cout<<"Entre m = ";
		cin>>m;
		n++;
		if(m<0)
		{
			continue;
		}
		sum=sum+m;
	}
	cout<<"\nSum = "<<sum;
	getch();

}