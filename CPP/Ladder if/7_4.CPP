#include<iostream.h>
#include<conio.h>
void main()
{
	float unit,bill,charge,totalbill;
	clrscr();
	cout<<"Enter the Unit = ";
	cin>>unit;

	if(unit<0)
	{
		bill=unit*0.50;
	}
	else if(unit<150)
	{
		bill=25+((unit-50)*0.75);
	}
	else if(unit<250)
	{
		bill=120+((unit-150)*1.20);
	}
	else
	{
		bill=220+((unit-250)*1.50);
	}

	charge=bill*0.2;
	totalbill=bill+charge;
	cout<<"\nBill = "<<bill;
	cout<<"\nCharge = "<<charge;
	cout<<"\nPayable Bill = "<<totalbill;

	getch();
}







