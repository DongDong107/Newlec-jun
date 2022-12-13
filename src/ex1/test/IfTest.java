package ex1.test;

public class IfTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		for (int i = 0; i < 10; i++) {

//			if((i+1)%2==0) { // i%2 != 0
//				System.out.printf("%c", '★');
//			}
//			else
//				System.out.printf("%c", '┼');	
//			
			// i%2==1
			
			if (i == 4)
				System.out.printf("%c", '○');
			else if (i%2 != 0) {
				System.out.printf("%c", '★');
			} 
			else
				System.out.printf("%c", '┼');

		}

	}

}
