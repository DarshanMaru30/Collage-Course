#include<iostream.h>
#include<stdio.h>
#include<conio.h>
class darshan
{
	public:
	char n[100];
	int run,match,avg;
	void get()
	{
		cout<<"Enter Player Name = ";
		gets(n);
		cout<<"Enter Total Run = ";
		cin>>run;
		cout<<"Enter Total Match = ";
		cin>>match;
		avg = run/match;
	}

	void ceil()
	{
		cout<<"\n\t"<<n<<"\t"<<run<<"\t"<<match<<"\t"<<avg;
	}
};
void main()
{
	int i,n;
	clrscr();
	cout<<"Enter n = ";
	cin>>n;
	darshan k[100];

	for(i=0;i<n;i++)
	{
		k[i].get();
	}
	clrscr();

	cout<<"\n\n\tPlayer Information";

	cout<<"\n\t"<<"Name"<<"\t"<<"Run"<<"\t"<<"Match"<<"\t"<<"avg";

	for(i=0;i<n;i++)
	{
		k[i].ceil();
	}

	getch();
}

