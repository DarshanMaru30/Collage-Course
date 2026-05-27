#include<iostream.h>
#include<conio.h>
class first
{
	public:
	int s,mi,m,i,n,y[100];
	int sum(int a)
	{
		s = a;
		return s;
	}
	int sum(int a,int b)
	{
		s = a + b;
		return s;
	}
	int sum(int a,int b,int c)
	{
		s = a + b + c;
		return s;
	}
	int sum(int a,int b,int c,int d)
	{
		s = a + b + c + d;
		return s;
	}
	int sum(int a,int b,int c,int d,int e)
	{
		s = a + b + c + d + e;
		return s;
	}
	int sum(int a,int b,int c,int d,int e,int f)
	{
		s = a + b + c + d + e + f;
		return s;
	}
	int sum(int y[100],int n)
	{
		s = 0;
		for(i=0;i<n;i++)
		{
			s = s + y[i];
		}
		return s;
	}

	int max(int a)
	{
		m = a;
		return m;
	}
	int max(int a,int b)
	{
		if(a>b)
		{
			m = a;
			return m;
		}
		else
		{
			m = b;
			return m;
		}
	}
	int max(int a,int b,int c)
	{
		if(a>b && a>c)
		{
			m = a;
			return m;
		}
		else if(b>c)
		{
			m = b;
			return m;
		}
		else
		{
			m = c;
			return m;
		}
	}
	int max(int a,int b,int c,int d)
	{
		if(a>b && a>c && a>d)
		{
			m = a;
			return m;
		}
		else if(b>c && b>d)
		{
			m = b;
			return m;
		}
		else if(c>d)
		{
			m = c;
			return m;
		}
		else
		{
			m = d;
			return m;
		}
	}
	int max(int a,int b,int c,int d,int e)
	{
		if(a>b && a>c && a>d && a>e)
		{
			m = a;
			return m;
		}
		else if(b>c && b>d && b>e)
		{
			m = b;
			return m;
		}
		else if(c>d && c>e)
		{
			m = c;
			return m;
		}
		else if(d>e)
		{
			m = d;
			return m;
		}
		else
		{
			m = e;
			return m;
		}
	}
	int max(int a,int b,int c,int d,int e,int f)
	{
		if(a>b && a>c && a>d && a>e && a>f)
		{
			m = a;
			return m;
		}
		else if(b>c && b>d && b>e && b>f)
		{
			m = b;
			return m;
		}
		else if(c>d && c>e && c>f)
		{
			m = c;
			return m;
		}
		else if(d>e && d>f)
		{
			m = d;
			return m;
		}
		else if(e>f)
		{
			m = e;
			return m;
		}
		else
		{
			m = f;
			return m;
		}
	}
	int max(int y[100],int n)
	{
		m = y[0];
		for(i=0;i<n;i++)
		{
			if(m<y[i])
			{
				m = y[i];
			}
		}
		return m;
	}

	int min(int a)
	{
		mi = a;
		return mi;
	}
	int min(int a,int b)
	{
		if(a<b)
		{
			mi = a;
			return mi;
		}
		else
		{
			mi = b;
			return mi;
		}
	}
	int min(int a,int b,int c)
	{
		if(a<b && a<c)
		{
			mi = a;
			return mi;
		}
		else if(b<c)
		{
			mi = b;
			return mi;
		}
		else
		{
			m = c;
			return mi;
		}
	}
	int min(int a,int b,int c,int d)
	{
		if(a<b && a<c && a<d)
		{
			mi = a;
			return mi;
		}
		else if(b<c && b<d)
		{
			mi = b;
			return mi;
		}
		else if(c<d)
		{
			mi = c;
			return mi;
		}
		else
		{
			mi = d;
			return mi;
		}
	}
	int min(int a,int b,int c,int d,int e)
	{
		if(a<b && a<c && a<d && a<e)
		{
			mi = a;
			return mi;
		}
		else if(b<c && b<d && b<e)
		{
			mi = b;
			return mi;
		}
		else if(c<d && c<e)
		{
			mi = c;
			return mi;
		}
		else if(d<e)
		{
			mi = d;
			return mi;
		}
		else
		{
			mi = e;
			return mi;
		}
	}
	int min(int a,int b,int c,int d,int e,int f)
	{
		if(a<b && a<c && a<d && a<e && a<f)
		{
			mi = a;
			return mi;
		}
		else if(b<c && b<d && b<e && b<f)
		{
			mi = b;
			return mi;
		}
		else if(c<d && c<e && c<f)
		{
			mi = c;
			return mi;
		}
		else if(d<e && d<f)
		{
			mi = d;
			return mi;
		}
		else if(e<f)
		{
			mi = e;
			return mi;
		}
		else
		{
			mi = f;
			return mi;
		}
	}
	int min(int y[100],int n)
	{
		mi = y[0];
		for(i=0;i<n;i++)
		{
			if(y[i]<mi)
			{
				mi = y[i];
			}
		}
		return mi;
	}
};
void main()
{
	int a,b,c,d,e,f,ch,x,y[100],s,m,mi,B=0,N;
	char i,A=97;
	clrscr();
	cout<<"1.A";
	cout<<"\n2.A B";
	cout<<"\n3.A B C";
	cout<<"\n4.A B C D";
	cout<<"\n5.A B C D E";
	cout<<"\n6.A B C D E F";

	first k;

	cout<<"\n\nEnter Your choice = ";
	cin>>ch;

	switch(ch)
	{
		case 1:
			cout<<"Enter A = ";
			cin>>a;
			break;
		case 2:
			cout<<"Enter A = ";
			cin>>a;
			cout<<"Enter B = ";
			cin>>b;
			break;
		case 3:
			cout<<"Enter A = ";
			cin>>a;
			cout<<"Enter B = ";
			cin>>b;
			cout<<"Enter C = ";
			cin>>c;
			break;
		case 4:
			cout<<"Enter A = ";
			cin>>a;
			cout<<"Enter B = ";
			cin>>b;
			cout<<"Enter C = ";
			cin>>c;
			cout<<"Enter D = ";
			cin>>d;
			break;
		case 5:
			cout<<"Enter A = ";
			cin>>a;
			cout<<"Enter B = ";
			cin>>b;
			cout<<"Enter C = ";
			cin>>c;
			cout<<"Enter D = ";
			cin>>d;
			cout<<"Enter E = ";
			cin>>e;
			break;
		case 6:
			cout<<"Enter A = ";
			cin>>a;
			cout<<"Enter B = ";
			cin>>b;
			cout<<"Enter C = ";
			cin>>c;
			cout<<"Enter D = ";
			cin>>d;
			cout<<"Enter E = ";
			cin>>e;
			cout<<"Enter F = ";
			cin>>f;
			break;

		default:
			 N=ch;
			for(i=0;i<ch;i++)
			{
				     if(i>25)
				     {      if(A>120)
						{
							   A=A-26;
							   B++;
						}
						cout<<"Enter "<<A<<B<<" = ";
						cin>>y[i];
						A++;
				     }
				     else
				     {
						cout<<"Enter "<<A<<" = ";
						cin>>y[i];
						A++;
				     }
			}
			break;
	}
	cout<<"\n1.Sum \n2.Max \n3.Min";
	cout<<"\n\nEnter Your Choice = ";
	cin>>x;
	switch(x)
	{
		case 1:
			switch(ch)
			{
				case 1:
					s = k.sum(a);
					cout<<"Sum = "<<s;
					break;
				case 2:
					s = k.sum(a,b);
					cout<<"Sum = "<<s;
					break;
				case 3:
					s = k.sum(a,b,c);
					cout<<"Sum = "<<s;
					break;
				case 4:
					s = k.sum(a,b,c,d);
					cout<<"Sum = "<<s;
					break;
				case 5:
					s = k.sum(a,b,c,d,e);
					cout<<"Sum = "<<s;
					break;
				case 6:
					s = k.sum(a,b,c,d,e,f);
					cout<<"Sum = "<<s;
					break;
				default:
					s = k.sum(y,N);
					cout<<"Sum = "<<s;
					break;
			}
			break;

		case 2:
			switch(ch)
			{
				case 1:
					m = k.max(a);
					cout<<"Max = "<<m;
					break;
				case 2:
					m = k.max(a,b);
					cout<<"Max = "<<m;
					break;
				case 3:
					m = k.max(a,b,c);
					cout<<"Max = "<<m;
					break;
				case 4:
					m = k.max(a,b,c,d);
					cout<<"Max = "<<m;
					break;
				case 5:
					m = k.max(a,b,c,d,e);
					cout<<"Max = "<<m;
					break;
				case 6:
					m = k.max(a,b,c,d,e,f);
					cout<<"Max = "<<m;
					break;
				default:
					m = k.max(y,N);
					cout<<"Max = "<<m;
					break;
			}
			break;

		case 3:
			switch(ch)
			{

				case 1:
					mi = k.min(a);
					cout<<"Min = "<<mi;
					break;
				case 2:
					mi = k.min(a,b);
					cout<<"Min = "<<mi;
					break;
				case 3:
					mi = k.min(a,b,c);
					cout<<"Min = "<<mi;
					break;
				case 4:
					mi = k.min(a,b,c,d);
					cout<<"Min = "<<mi;
					break;
				case 5:
					mi = k.min(a,b,c,d,e);
					cout<<"Min = "<<mi;
					break;
				case 6:
					mi = k.min(a,b,c,d,e,f);
					cout<<"Min = "<<mi;
					break;
				default:
					mi = k.min(y,N);
					cout<<"Min = "<<mi;
					break;
			}
			break;

	}

	getch();
}
