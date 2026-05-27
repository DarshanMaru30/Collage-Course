#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	void get()
	{
		float a[100],i,n,sum=0,avg;
		cout<<"Enter n = ";
		cin>>n;
		for(i=0;i<=n;i++)
		{
			cout<<"Enter a["<<i<<"] = ";
			cin>>a[i];
		}
		for(i=0;i<=n;i++)
		{
			sum = sum+a[i];

		}
		avg = sum/n;
		cout<<"\nSum = "<<sum;
		cout<<"\nAvg = "<<avg;
	}
};
void main()
{
	clrscr();
	darshan k;
	k.get();
	getch();
}