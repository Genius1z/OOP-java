import java.util.Scanner;
public class J4002
{
    static class Rectangle
    {
         int width;
         int height;
         String color;
       public Rectangle (int width,int height,String color) // Contructor,Tac dung :
       {
           this.width = width;
           this.height = height;
           this.color = color;
       }
       Rectangle()
       {

       }
       public int getWidth()
       {
           return width;
       }
       public int getHeight()
       {
           return height;
       }
    }
    static int Area(Rectangle a)
    {
        return a.getWidth()*a.getHeight();
    }
    static int Perimeter(Rectangle a)
    {
        return 2*(a.getWidth()+a.getHeight());
    }
    static String color(Rectangle a)
    {
      return  Character.toUpperCase(a.color.charAt(0)) + a.color.substring(1).toLowerCase();
    }
    public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        Rectangle hcn = new Rectangle();
        int a= in.nextInt(), b=in.nextInt();
        String cl = in.next();
        if(a>0 && b> 0)
        {
            hcn.width = a;
            hcn.height = b;
            hcn.color = cl;
            System.out.println(Perimeter(hcn)+" "+Area(hcn)+" "+color(hcn));
        }
        else
        {
            System.out.println("INVALID");
        }
    }
}
