#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	long ss,a,mm,hh,m,h;
	void get()
	{
		cout<<"Enter Seconds = ";
		cin>>ss;
	}

	void cal(darshan k,darshan k1)
	{
		a = k.ss + k1.ss;
		cout<<"Sum = "<<a;

		m=0,mm=0,hh=0,h=0;
		while(a>=60)
		{
			m++;
			a = a - 60;
		}
		mm = mm + m;

		while(mm>=60)
		{
			h++;
			mm = mm - 60;
		}
		hh = hh + h;
	}
	void disp()
	{
		cout<<"\n\n\t"<<hh<<":"<<mm<<":"<<a;
	}
};
void main()
{
	clrscr();
	darshan k,k1;
	k.get();
	k1.get();
	k1.cal(k,k1);
	k1.disp();

	getch();
}