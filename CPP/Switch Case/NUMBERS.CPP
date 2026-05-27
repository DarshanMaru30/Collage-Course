#include<iostream.h>
#include<conio.h>
void main()
{
	int ch,a,b,c,d,e;
	clrscr();

	cout<<"\t1.Decimal to Binary";
	cout<<"\n\t2.Binary to decimal";
	cout<<"\n\t3.Decimal to Octal";
	cout<<"\n\t4.Decimal to Hexadecimal";
	cout<<"\n\t5.Binary to Octal";

	cout<<"\n\n\tEnter Your Choice = ";
	cin>>ch;
	switch(ch)
	{
		case 1:
			long r,f=0,g=1;
			cout<<"\n\tEnter Decimal Number = ";
			cin>>a;
			while(a>0)
			{
				r=a%2;
				f=f+r*g;
				a=a/2;
				g=g*10;
			}
			cout<<"\n\tBinary Number is "<<f;
			break;
		case 2:
			int h,t=0,x=1;
			cout<<"\n\tEnter Binary Number = ";
			cin>>b;
			while(b>0)
			{
				h=b%10;
				t=t+h*x;
				b=b/10;
				x=x*2;
			}
			cout<<"\n\tDecimal Number is "<<t;
			break;
		case 3:
			int rem,oct=0,k=1;
			cout<<"\n\tEnter Decimal Number = ";
			cin>>c;
			while(c>0)
			{
				rem=c%8;
				oct=rem*k+oct;
				k=k*10;
				c=c/8;
			}
			cout<<"\n\tOctal Number is "<<oct;
			break;
		case 4:
			cout<<"\n\tEnter Decimal Number = ";
			cin>>d;
			break;
		case 5:
			cout<<"\n\tEnter Binary Number  = ";
			cin>>e;
			break;
	}
	getch();
}