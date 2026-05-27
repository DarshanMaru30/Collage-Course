#include<stdio.h>
#include<conio.h>
#include<graphics.h>
void main()
{
	int x = DETECT,y;
	initgraph(&x,&y,"c:\\tc\\bgi");
	setcolor(2);
   //	circle(100,300,40);
	circle(300,300,40);
	circle(500,300,40);
	line(100,300,260,300);
	line(100,300,300,100);
	line(300,100,600,100);
	line(600,100,600,300);
	line(600,300,540,300);
	line(460,300,340,300);
	line(300,100,300,260);
	line(100,300,100,50);
	getch();
}