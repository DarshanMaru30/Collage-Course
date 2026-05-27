#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int a[100],b[100],n,i,c[100],n1,t;
	void get(int a[],int n,int b[],int n1)
	{
		for(i=0;i<n;i++)
		{
			this->a[i] = a[i];
		}

		for(i=0;i<n1;i++)
		{
			this->b[i] = b[i];
		}
		this->n = n;
		this->n1 = n1;
	}
	void cal()
	{
		t=0;
		for(i=0;i<n;i++)
		{
			c[t] = a[i];
			t++;
		}
		for(i=0;i<n1;i++)
		{
			c[t] = b[i];
			t++;
		}
	}

	void disp()
	{
		for(i=0;i<n+n1;i++)
		{
			cout<<"\nc["<<i<<"] = "<<c[i];
		}
	}
};
void main()
{
	int a[100],b[100],i,n,n1;
	clrscr();
	cout<<"Enter n = ";
	cin>>n;
	for(i=0;i<n;i++)
	{
		cout<<"Enter a["<<i<<"] = ";
		cin>>a[i];
	}

	cout<<"\nEnter n1 = ";
	cin>>n1;
	for(i=0;i<n1;i++)
	{
		cout<<"Enter b["<<i<<"] = ";
		cin>>b[i];
	}

	darshan k;
	k.get(a,n,b,n1);
	k.cal();
	k.disp();
	getch();
}