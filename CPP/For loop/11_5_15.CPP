#include<iostream.h>
#include<conio.h>
void main()
{
	int i,j;
	clrscr();
	for(i=5;i>=1;i--)
	{
		for(j=1;j<=i*2;j++)
		{
		      if(j%2==0)
		      {
				cout<<" "<<j;
		      }
		}
		cout<<"\n";
	}
	getch();
}