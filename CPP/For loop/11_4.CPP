#include<iostream.h>
#include<conio.h>
void main()
{
	int a,i,cnt=0;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;

	for(i=1;i<=a;i++)
	{
		if(a%i==0)
		{
			cnt++;
		}
	}

	if(cnt==2)
	{
		cout<<"\nPrime Number";
	}
	else
	{
		cout<<"\nNot Prime Number";
	}


	getch();
}