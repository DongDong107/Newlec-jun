
package ex2;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class ExamApp {
	public static void main(String[] args) throws IOException {

		// 콘솔을 이용한 출력
//		ConsoleOutputStream out = new ConsoleOutputStream(); // 스트림 객체

//		System.out.write('A');
//		System.out.write('B');
//		System.out.write('\n');
//		System.out.flush();
		// System.out.p

		int x = 1;
		
		int [] kors = new int[3];
		for(int i = 0; i < 3; i++) 
			kors[i] = 0;			

		int total;
		double avg;
		int menu;


		NEWLEC: 
		while (x == 1) {
			
			{
				System.out.println("┌────────────────────────┐");
				System.out.println("                          메뉴선택                             ");
				System.out.println("1. 성적 입력");
				System.out.println("2. 파일 불러오기");
				System.out.println("3. 성적 출력");
				System.out.println("4. 현재 입력한 성적 저장");
				System.out.println("5. 종료");
				System.out.println("└────────────────────────┘");
				Scanner sc = new Scanner(System.in);
				menu = sc.nextInt();

		
				switch (menu) {
				case 1: {
					Scanner scan = new Scanner(System.in);

					System.out.println("┌────────────────────────┐");
					System.out.println(" ─────────성적 입력───────── ");
					System.out.println("└────────────────────────┘");
					for(int i = 0; i<3; i++) {
						int kor; // 지역변수를 선언하고 계산하면 각 배열선언마다 연산필요 X
						do {
							System.out.printf("국어%d 점수를 입력해주세요 : \t",i+1);
							kor = scan.nextInt();
	
							if (kor < 0 || kor > 100)
								System.out.println("점수는 0~100점 사이로 입력해주세요.");
						} while (kor < 0 || kor > 100);
						
						kors[i] = kor; 
					}
					
				}
					break;

				case 2: {
					FileInputStream spo = new FileInputStream("res/data.csv"); // 스트림 객체
					Scanner sc2 = new Scanner(spo);

					String line = sc2.nextLine();

					String[] tokens = line.split(",");
					
					for(int i=0;i<3;i++)
						kors[i] = Integer.parseInt(tokens[i]);
					
//					kors[0] = Integer.parseInt(arr[0]);
//					kors[1] = Integer.parseInt(arr[1]);
//					kors[2] = Integer.parseInt(arr[2]); // 입력했던 값은 사라지고, 원래 파일에 저장되어있던 원본 값으로 돌아감 (지역부분이 끝나면)
					
					System.out.println("불러오기 완료");
					
					sc2.close(); // 스트림을 불러오는 경우 꼭 close를 해야하는데 여기서 쓰인 스캐너는 응용객체이므로 같이 close 해줘야한다.
					spo.close();

				}
					break;

				case 3: {
					// 성적 출력
					
					// System.out.print(total);
					// System.out.print(avg);
					//
					System.out.println("┌────────────────────────┐");
					System.out.println("│─────────성적 출력─────────│");
					System.out.println("└────────────────────────┘");
					
					for(int j=0; j<3; j++) {
						total = 0;
						for(int i = 0; i < 3; i++)
							total += kors[i];
						avg = total / 3.0;
						System.out.printf("<%d>-----------------------------------------------\n",j+1);
					
						for(int i=0;i<3;i++) 
							System.out.printf("국어%d : %3d\n", i+1,kors[i]);						
						System.out.printf("총점 : %d\n", total);
						System.out.printf("평균 : %6.2f\n", avg);
						
						System.out.println("────────────────────────────");
						// 파일을 이용한 출력
					}
				}
					break;

				case 4: {
					// 파일
					FileOutputStream fos = new FileOutputStream("res/data.csv"); // 스트림 객체
					PrintStream out = new PrintStream(fos);

					for(int i = 0; i<3; i++) {
						out.printf("%d", kors[i]);
						if(i == 2)
							out.println();
						else
							out.print(",");
					}
						
					
					out.close();
					fos.close();

					System.out.println();
					System.out.println("성적 저장 완료");

				}
					break;

				case 5: {
					Scanner sc5 = new Scanner(System.in);

					System.out.print("루프를 멈추고 싶으면 0 아니면 1 :\t");
					x = sc5.nextInt();
					// if (x == 1) {
					//
					// break;
					// } else if (x == 0) {
					//
					// }

				}
					break;

				default: {
					System.out.println("1~5 사이의 숫자만 입력해주세요");
					System.out.println("폭파");
				}
					break NEWLEC;

				}
			}

		}

		System.out.println("반가웠습니다.");
	}
}
