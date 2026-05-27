#include<iostream.h>
#include<conio.h>
void main()
{
	int i=1,sum=0,avg,a,n;
	clrscr();
	cout<<"A=";
	cin>>a;
	do
	{
		cout<<"N=";
		cin>>n;
		if(n>0)
		{
			sum=sum+n;
			avg=sum/n;
		}
		else{
			break;
		}
		i++;
	}while(i<=a);
	cout<<"\nsum="<<sum;
	cout<<"\navg="<<avg;








getch();
}