#include<iostream.h>
#include<conio.h>
void main()
{
	int n,t,cnt=0;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	while(n>0)
	{
		t=n%10;
		cnt++;
		n=n/10;
	}

	cout<<"\nCnt = "<<cnt;

	getch();
}