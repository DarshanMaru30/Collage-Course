#include<iostream.h>
#include<conio.h>
class darshan
{
	public:
	int get(int a){
		int i,j,b[100],t,g=0,h=0;
		for(i=0;i<a;i++)
		{
			cout<<"b["<<i<<"]=";
			cin>>b[i];
		}
		for(i=0;i<a;i++)
		{
			for(j=i+1;j<a;j++)
			{
				if(b[i]>b[j]){
				t=b[i];
				b[i]=b[j];
				b[j]=t;
				}
			}
		}

		cout<<"\nodd number :\n";
		cout<<"--------------------------------------------------------------------------------";
		for(i=0;i<a;i++)
			{
				if(b[i]%2!=0)
				{
					cout<<"\nb["<<g<<"]="<<b[i];
					g++;
				}
		}
		cout<<"\n\neven number :\n" ;
		cout<<"--------------------------------------------------------------------------------";
		for(i=0;i<a;i++)
			{
				if(b[i]%2==0)
				{
					cout<<"\nb["<<h<<"]="<<b[i];
					h++;
				}
		}
	}
};
void main()
{
	int n ;
	clrscr();
	cout<<"enter n :";
	cin>>n;
	darshan k;
	k.get(n);
	getch();
}