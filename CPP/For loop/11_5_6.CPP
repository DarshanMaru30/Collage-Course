#include<iostream.h>
#include<conio.h>
void main()
{
	int i,j;
	clrscr();
	for(i=5;i>=1;i--)
	{
		for(j=i;j<=5;j++)
		{
			cout<<" "<<j;
		}
		cout<<"\n";
	}
	getch();
}