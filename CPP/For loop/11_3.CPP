#include<iostream.h>
#include<conio.h>
void main()
{
	int a,b,t,rev=0;
	clrscr();

	cout<<"Enter a = ";
	cin>>a;

	b=a;

	for(;a>0;)
	{
		t=a%10;
		rev=rev*10+t;
		a=a/10;
	}

	if(rev==b)
	{
		cout<<"\nPalindrome Number";
	}
	else
	{
		cout<<"\nNot Palindrome Number";
	}


	getch();
}