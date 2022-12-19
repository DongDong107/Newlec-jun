package DailyTest;

public class Test1219 {

	public static void main(String[] args) {

		// 1
		{
			for (int i = 0; i < 10; i++) {
				for (int j = 0; j < 10; j++)
					if (i == j)
						System.out.printf("%c", '○');
					else
						System.out.printf("%c", '┼');
				System.out.println();
			}

			System.out.println("1번 과제 출력 완료");
		}

		// 2
		{
			for (int i = 0; i < 11; i++) {
				for (int j = 0; j < 11; j++)
					if (i == j || j == 10 - i)
						System.out.printf("%c", '○');
					else
						System.out.printf("%c", '┼');
				System.out.println();
			}

			System.out.println("2번 과제 출력 완료");
		}

		// 3
		{
			int point = 0;
			int sum = 1;
			
			for (int i = 0; i < 11; i++) {
//				if(i<=11/2) {
//					for (int j = 0; j < 11; j++)
//						if (i == j) {
//							System.out.printf("%c", '○');
//							point = i;						
//						} 
//						else if (j == 10 - i)
//							System.out.printf("%c", '○');
//						else
//							System.out.printf("%c", '┼');
//					System.out.println();
//				}
//				else {					
//					for(int j=0; j<11; j++) {
//						if(j>=point-sum && point+sum>=j)
//							System.out.printf("%c", '○');
//						else
//							System.out.printf("%c", '┼');
//					}
//					sum++;
//					System.out.println();
//				}			
				for(int j=0; j<11; j++) {
					 if(i+j==10 || i==j)
						 System.out.print("○");
					 else if((i+j>=10)&& i>5 && j<=i)
						 System.out.print("○");
					else
						System.out.print("┼");
				}
				System.out.println();

			}

			System.out.println("3번 과제 출력 완료");
		}

	}

}
