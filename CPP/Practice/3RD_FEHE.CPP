
#include<iostream.h>
#include<conio.h>
class first
{
	public:
	int f1,f2,c1,c2;
	void get()
	{
		cout<<" 1.Fehernheit to celsius";
		cout<<"\n 2.Celsius to fehernheit";
	}
	void cel()
	{
		cout<<"\n Enter Feherenheit = ";
		cin>>f1;
		c1=((f1-32)*5)/9;
		cout<<"\n Celsiuse = "<<c1;

	}
	void feh()
	{
		cout<<"\nEnter Celsius = ";
		cin>>c2;
		f2=(c2*9/5)+32;
		cout<<"\nFeherenheit = "<<f2;
	}
};
void main()
{
	int ch;
	clrscr();
	first s;
	s.get();
	cout<<"\nEnter choice = ";
	cin>>ch;
	switch(ch)
	{
		case 1:
		s.cel();
		break;

		case 2:
		s.feh();
		break;

		default:
		cout<<"choice is wronge";
		break;
	}

	getch();

}