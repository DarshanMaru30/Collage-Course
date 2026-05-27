#include<iostream.h>
#include<conio.h>
void main()
{
	int n;
	clrscr();

	cout<<"Enter n = ";
	cin>>n;

	switch(n)
	{
		case 1:
			cout<<"\nSunday";
			break;
		case 2:
			cout<<"\nMonday";
			break;
		case 3:
			cout<<"\nTuesday";
			break;
		case 4:
			cout<<"\nWendesday";
			break;
		case 5:
			cout<<"\nThursday";
			break;
		case 6:
			cout<<"\nFriday";
			break;
		case 7:
			cout<<"\nSaturday";
			break;
	}


	getch();
}
