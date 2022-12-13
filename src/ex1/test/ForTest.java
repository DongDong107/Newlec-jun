package ex1.test;

public class ForTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		for (int i = 0; i < 5; i++) {
			
//			if(i!=2) { // if(i==2) continue;
//				System.out.print("☆");			
//				System.out.printf("%d", 1 + i);
//				if (i < 4) {    // i!=4 (마지막이 아니면 이라는 말의 흐름처럼, 이해하고 작성하기 쉽게)
//					System.out.print(",");
//				}
//			}
			
//			if(i==3) {
//				break;
//			} //아래에서 if(i==2) break; 도 가능
//			
			if(i<2) {
				continue;
			}
			System.out.print("☆");			
			System.out.printf("%d", 1 + i);
			if (i < 4) {    // i!=4 (마지막이 아니면 이라는 말의 흐름처럼, 이해하고 작성하기 쉽게)
				System.out.print(",");
			}
			
		}

	}

}
