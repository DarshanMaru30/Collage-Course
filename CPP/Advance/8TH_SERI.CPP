#include<iostream.h>
#include<conio.h>
class darshan
{
		public:
		int get(int a)
		{
			int i,b,cn=0;
			for(i=1;i<=a;i++)
			{
				b = i*i;
				cout<<i<<"^"<<i<<" = "<<b;
				cout<<"\n";
				cn+=b;
			}
			return cn;
		}
};
void main()
{
	int n;
	clrscr();
	cout<<"Enter n = ";
	cin>>n;
	darshan k;
	cout<<"\nSum = "<<k.get(n);
	getch();

}
