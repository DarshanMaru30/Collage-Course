#include<iostream.h>
#include<conio.h>
void main()
{
	int n,sum=0;
	clrscr();
	cout<<"Enter n = ";
	cin>>n;
	while(n<=10)
	{
		if(n<0)
		{
			break;
		}
		cout<<"\n"<<n;
		sum=sum+n;
		n++;
	}
	cout<<"\nSum = "<<sum;
	getch();
}