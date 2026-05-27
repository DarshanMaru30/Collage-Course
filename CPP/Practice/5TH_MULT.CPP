#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	void get(int b)
	{
		int i,j,cn=1,k=0;
		for(i=1;i<=b;i++)
		{
			for(j=1;j<=i;j++)
			{
				if(j==1)
				{
					cout<<"   "<<j;
				}
				else
				{
					cout<<" * "<<j;
				}
				cn*=j;
			}
			cout<<" = "<<cn;
			k+=cn;
			cn=1;
			cout<<"\n";
		}
		cout<<"\nYour sum is = "<<k;
	}
};
void main()
{
	int n;
	clrscr();
	cout<<"Enter value of n = ";
	cin>>n;
	darshan k;
	k.get(n);
	getch();

}