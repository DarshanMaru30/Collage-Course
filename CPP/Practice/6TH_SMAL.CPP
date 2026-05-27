#include<iostream.h>
#include<conio.h>
#include<string.h>
class darshan
{
	public:
	int i;
	char s[100],ch;
	void get()
	{
		cout<<"Enter String = ";
		cin>>s;
	}

	void con()
	{
		for(i=0;i<strlen(s);i++)
		{
			if(s[i]>='a'&&s[i]<='z')
			{
				ch=s[i];
				break;
			}
			else
			{
				continue;
			}
		}
	}

	void disp()
	{
		cout<<"First Smallest Latter is "<<ch;
	}
};
void main()
{
	clrscr();
	darshan k;
	k.get();
	k.con();
	k.disp();
	getch();
}