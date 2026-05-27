#include<iostream.h>
#include<conio.h>
class one
{
	public:
	int n1,n2;
	void get()
	{
		cout<<"Enter n1 = ";
		cin>>n1;
		cout<<"Eneter n2 = ";
		cin>>n2;
	}
};
class two : public one
{
	public:
	int i,t,a,k,f,sum,z;
	void cal()
	{
		z=0;
		for(i=n1;i<=n2;i++)
		{
			a=i/10;
			t=i%10;
			f=a*a;
			k=t*t;
			sum=k+f;
			cout<<"\n"<<i<<"="<<a<<"^2 + "<<t<<"^2 = "<<sum;
			z = z+sum;
		}
		cout<<"\nTotal = "<<z;
	}
};
void main()
{
	clrscr();
	two t;
	t.get();
	t.cal();
	getch();
}