package ex1.test;

public class OMokTest2 {

	public static void main(String[] args) {

		for (int y = 1; y <= 12; y++) {
			
			for (int x = 1; x <= 12; x++)
				if (x == 3 && y == 4)
					System.out.printf("%c", '○');
				else if(x == 1 && y == 1)
					System.out.printf("%c", '┌');
				else if(x == 12 && y == 1)
					System.out.printf("%c", '┐');	
				else if(y == 1)
					System.out.printf("%c", '┬');
				else
					System.out.printf("%c", '┼');

			System.out.println();
		}

		
	}

}
