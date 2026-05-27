#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int a[100],i,n,max,sm;

	int get()
	{
		cout<<"Enter n = ";
		cin>>n;
		for(i=0;i<n;i++)
		{
			cout<<"Enter A["<<i<<"] = ";
			cin>>a[i];
		}
	}

	int con()
	{
		max = a[0];
		for(i=0;i<n;i++)
		{
			if(a[i]>max)
			{
				max = a[i];
			}
		}
		sm=0;
		for(i=0;i<n;i++)
		{
			if(a[i]>sm && a[i]!=max)
			{
				sm = a[i];
			}
		}
	}

	int disp()
	{
			cout<<"\nSecond largest Number is "<<sm;
	}


};
void main()
{
	clrscr();
	darshan k;
	k.get();
	k.con();
	k.disp();
	getch();
}