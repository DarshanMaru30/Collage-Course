#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int hh,mm,ss,m,s,a,b,c;
	void get()
	{
		cout<<"Enter Hours = ";
		cin>>hh;
		cout<<"Enter Minits = ";
		cin>>mm;
		cout<<"Enter Seconds = ";
		cin>>ss;
	}
	void sum(darshan k,darshan k1)
	{
		a = k.hh + k1.hh;
		b = k.mm + k1.mm;
		c = k.ss + k1.ss;

		cout<<"\nHours = "<<a<<"\nMinits = "<<b<<"\nSeconds = "<<c;
	}

	void cal()
	{
		s=0,m=0;
		while(c>=60)
		{
			s++;
			c = c - 60;
		}
		b = b + s;

		while(b>=60)
		{
			m++;
			b = b - 60;
		}
		a = a + m;

		cout<<"\n\n"<<a<<":"<<b<<":"<<c;
	}
};
void main()
{
	clrscr();
	darshan k,k1;
	k.get();
	k1.get();
	k.sum(k,k1);
	k.cal();
	getch();
}