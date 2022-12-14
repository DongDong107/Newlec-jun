package ex2;

public class StringTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int n =3;
//		String s = n;
		String s = Integer.toString(n);
		s = String.valueOf(n);
		
		String s1 = "35";
//		int m = s1;
		int m = Integer.parseInt(s1);
		
		String name1 = "아이유";		
		String name2 = new String("아이유");
		String name3 = "아이유";
		
		if(name1 == name2)
			System.out.println("true");
		else
			System.out.println("false");
		
		if(name1.equals(name2) )
			System.out.println("true");
		else
			System.out.println("false");
		
		
		if(name1==name3)
			System.out.println("true");
		else
			System.out.println("false");
		
		
		
	}

}
