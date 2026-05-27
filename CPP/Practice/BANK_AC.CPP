#include<iostream.h>
#include<conio.h>
#include<stdio.h>
#include<string.h>
class bank
{
	public:
	int ac,p1,p2,np,op,ob,dp,wd,an;
	char nm[100],fs[100];

	bank()
	{
		cout<<"\n1.Saving Account";
		cout<<"\n2.Current Account";
		cout<<"\nEnter your Account:";
		cin>>ac;
		switch(ac)
		{
			case 1:
				ob=5000;
				cout<<"\n--------Saving Account--------";
				cout<<"\nopening Balance :"<<ob;
				cout<<"\nAccount Holder Name:";
				cin>>nm;
				AN:
				cout<<"Account Number :";
				cin>>an;
				if(an>999 && an<=9999)
				{

				}
				else
				{
					goto AN;
				}
				do
				{
					cout<<"Enter IFSC Code:";
					cin>>fs;
					if(strlen(fs)==7)
					{
						break;
					}
				}
				while(1);
				pin:
				cout<<"Enter Your PIN:";
				cin>>p1;
				if( p1>=99 && p1<=999)
				{
					do
					{
						cout<<"Enter confirm pin: ";
						cin>>p2;
						if(p1==p2)
						{

						}
					}
					while(p2!=p1);
				}
				else
				{
				      goto pin;
				}
				cout<<"\nYour Account is successfully open..";
				break;
			case 2:
				ob=7000;
				cout<<"---------Current Account--------";
				cout<<"\nopening Balance :"<<ob;
				cout<<"\nAccount Holder Name:";
				cin>>nm;
				AN2:
				cout<<"Account Number :";
				cin>>an;
				if(an>999 && an<=9999)
				{

				}
				else
				{
					goto AN2;
				}
				do
				{
					cout<<"Enter IFSC Code:";
					cin>>fs;
					if(strlen(fs)==7)
					{
						break;
					}
				}
				while(1);
				pin1:
				cout<<"Enter Your PIN:";
				cin>>p1;
				if(p1>=99 && p1<=999)
				{
					do
					{
						cout<<"Enter confirm pin: ";
						cin>>p2;
						if(p1==p2)
						{

						}
					}
					while(p2!=p1);
				}
				else
				{
				      goto pin1;
				}
				cout<<"\nYour Account is successfully open..";
				break;
			default:
				break;
		}
	}
	void detail()
	{
		if(ac==1)
		{
			ob=5000;
			cout<<"\nAccont type :Saving account";
		}
		else
		{
			ob=7000;
			cout<<"\nAccount type :current account";
		}
		cout<<"\nName :"<<nm;
		cout<<"\nAccount number :"<<an;
		cout<<"\nIFSC Code :"<<fs;
		cout<<"\nOpening balance:"<<ob;
	}
	void deposit()
	{
		pin2:
		cout<<"Enter your pin :";
		cin>>p2;
		if(p1!=p2)
		{
			goto pin2;
		}
		else
		{
			cout<<"Enter deposit Amount :";
			cin>>dp;

		}
		ob=ob+dp;
		cout<<"Total deposit :"<<ob;
	}
	void debit()
	{
		pin3:
		cout<<"Enter your pin :";
		cin>>p2;
		if(p1!=p2)
		{
			goto pin3;
		}
		else
		{

			cout<<"Enter withdraw Amount :";
			cin>>wd;
			if(wd>ob-1000)
			{
				cout<<"Not Withdraw Amount...!!";
			}
			else
			{
				ob=ob-wd;
			}
			cout<<"\nCurrent Amount :"<<ob;

		}
	}
	void change()
	{
		pin4:
		cout<<"Enter your pin :";
		cin>>p2;
		if(p1!=p2)
		{
			goto pin4;
		}
		else
		{
			New:
			cout<<"Enter New pin :";
			cin>>np;
			cout<<"Enter confirm pin :";
			cin>>p1;
			if(np==p1)
			{
				cout<<"Your pin is update...";
			}
			else
			{
				goto New;
			}
		}
	}
	void exit()
	{
		cout<<"\nThank for visit.....";
	}

};
void main()
{
	int ch;
	clrscr();
	bank f;
	cout<<"\n\n1.Show detail";
	cout<<"\n2.Deposit Amount";
	cout<<"\n3.Withdraw Amount";
	cout<<"\n4.change pin";
	cout<<"\n5.Exit";

	lp:
	cout<<"\nEnter your choice :";
	cin>>ch;
	switch(ch)
	{
		case 1:
			f.detail();
			goto lp;
			break;
		case 2:
			f.deposit();
			goto lp;
			break;
		case 3:
			f.debit();
			goto lp;
			break;
		case 4:
			f.change();
			goto lp;
			break;
		case 5:
			f.exit();
			break;
	}
	getch();
}