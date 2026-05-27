#include<iostream.h>
#include<conio.h>
void main()
{
	int i,j;
	clrscr();
	for(i=5;i>=1;i--)
	{
		for(j=1;j<=i;j++)
		{
		      if(j%2==0)
		      {
				cout<<"0";
		      }
		      else
		      {
				cout<<"1";
		      }
		}
		cout<<"\n";
	}
	getch();
}