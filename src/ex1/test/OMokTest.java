package ex1.test;

public class OMokTest {

	public static void main(String[] args) {
		
		System.out.printf("%c", '┌');		
		for(int i = 0; i < 10; i++)
			System.out.printf("%c", '┬');		
		System.out.printf("%c", '┐');		
		System.out.println();
		
		for (int y = 1; y <= 10; y++) {
			System.out.printf("%c", '├');
			
			for (int x = 1; x <= 10; x++)
				if (x == 3 && y == 4)
					System.out.printf("%c", '○');
				else
					System.out.printf("%c", '┼');
			
			System.out.printf("%c", '┤');			
			System.out.println();
		}
		
		System.out.printf("%c", '└');
		for(int i = 0; i < 10; i++)
			System.out.printf("%c", '┴');
		System.out.printf("%c", '┘');
		/*
		 * //----------------------------------------------------------- 
		 * for (int i = 0; i < 100; i++) { if (i == 12) System.out.printf("%c", '○'); else
		 * System.out.printf("%c", '┼');
		 * 
		 * if ((i + 1) % 10 == 0) System.out.print("\n");
		 * 
		 * }
		 */
	}

}
