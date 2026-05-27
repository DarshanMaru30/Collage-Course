#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int a[100],i,j,n,t,o,e;
	void get()
	{
		cout<<"Enter n = ";
		cin>>n;
		for(i=0;i<n;i++)
		{
			cout<<"Enter a["<<i<<"] = ";
			cin>>a[i];
		}
	}
	void cal()
	{
		for(i=0;i<n;i++)
		{
			for(j=0;j<i;j++)
			{
				if(a[i]<a[j])
				{
					t=a[i];
					a[i]=a[j];
					a[j]=t;
				}
			}
		}
	}

	void disp()
	{
		o=0;
		cout<<"\n\nODD NUMBER";
		for(i=0;i<n;i++)
		{
			if(a[i]%2!=0)
			{
				cout<<"\na["<<o<<"] = "<<a[i];
				o++;
			}
		}

		e=0;
		cout<<"\nEVEN NUMBER";
		for(i=0;i<n;i++)
		{
			if(a[i]%2==0)
			{
				cout<<"\na["<<e<<"] = "<<a[i];
				e++;
			}
		}
	}
};
void main()
{
	clrscr();
	darshan k;
	k.get();
	k.cal();
	k.disp();
	getch();
}