
package ex1;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class FileIoApp2 {
	public static void main(String[] args) throws IOException {

		// 콘솔을 이용한 출력
//		ConsoleOutputStream out = new ConsoleOutputStream(); // 스트림 객체

//		System.out.write('A');
//		System.out.write('B');
//		System.out.write('\n');
//		System.out.flush();
		// System.out.p

		int x = 1;

		NEWLEC: 
		while (x == 1) {
			int kor1 = 0, kor2 = 0, kor3 = 0;
			int total = 0;
			double avg;
			int menu;

			{
				System.out.println("┌────────────────────────┐");
				System.out.println("                          메뉴선택                             ");
				System.out.println("1. 성적 입력");
				System.out.println("2. 파일 입력");
				System.out.println("3. 성적 출력");
				System.out.println("4. 저장");
				System.out.println("5. 종료");
				System.out.println("└────────────────────────┘");
				Scanner sc = new Scanner(System.in);
				menu = sc.nextInt();

				System.out.println("1번검사전");
				switch (menu) {
				case 1: {
					Scanner scan = new Scanner(System.in);

					System.out.println("┌────────────────────────┐");
					System.out.println(" ─────────성적 입력───────── ");
					System.out.println("└────────────────────────┘");

					do {
						System.out.print("국어1 점수를 입력해주세요 : \t");
						kor1 = scan.nextInt();

						if (kor1 < 0 || kor1 > 100)
							System.out.println("점수는 0~100점 사이로 입력해주세요.");
					} while (kor1 < 0 || kor1 > 100);

					do {
						System.out.print("국어2 점수를 입력해주세요 : \t");
						kor2 = scan.nextInt();

						if (kor2 < 0 || kor2 > 100)
							System.out.println("점수는 0~100점 사이로 입력해주세요.");
					} while (kor2 < 0 || kor2 > 100);

					do {
						System.out.print("국어3 점수를 입력해주세요 : \t");
						kor3 = scan.nextInt();

						if (kor3 < 0 || kor3 > 100)
							System.out.println("점수는 0~100점 사이로 입력해주세요.");
					} while (kor3 < 0 || kor3 > 100);

				}
					break;

				case 2: {
					FileInputStream spo = new FileInputStream("res/data.csv"); // 스트림 객체
					Scanner sc2 = new Scanner(spo);

					String line = sc2.nextLine();

					String[] arr = line.split(",");

					kor1 = Integer.parseInt(arr[0]);
					kor2 = Integer.parseInt(arr[1]);
					kor3 = Integer.parseInt(arr[2]); // 입력했던 값은 사라지고, 원래 파일에 저장되어있던 원본 값으로 돌아감 (지역부분이 끝나면)

					sc2.close(); // 스트림을 불러오는 경우 꼭 close를 해야하는데 여기서 쓰인 스캐너는 응용객체이므로 같이 close 해줘야한다.
					spo.close();

				}
					break;

				case 3: {
					// 성적 출력
					total = kor1 + kor2 + kor3;
					avg = total / 3.0;

					// System.out.print(total);
					// System.out.print(avg);
					//
					System.out.println("┌────────────────────────┐");
					System.out.println("│─────────성적 출력─────────│");
					System.out.println("└────────────────────────┘");
					System.out.printf("국어1 : %3d\n", kor1);
					System.out.printf("국어2 : %3d\n", kor2);
					System.out.printf("국어3 : %3d\n", kor3);
					System.out.printf("총점 : %d\n", total);
					System.out.printf("평균 : %6.2f\n", avg);
					System.out.println("────────────────────────────");
					// 파일을 이용한 출력

				}
					break;

				case 4: {
					// 파일
					FileOutputStream fos = new FileOutputStream("res/data.csv"); // 스트림 객체
					PrintStream out = new PrintStream(fos);

					out.printf("%d,%d,%d\n ", kor1, kor2, kor3);

					out.close();
					fos.close();

					System.out.println();
					System.out.println("작업완료");

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
