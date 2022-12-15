package DailyTest;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class Test1215Q2 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		// 2
		int[][] bitmap = new int[10][20];

		// 3
		{
			// bitmap 배열에 값 넣기
			FileInputStream fis = new FileInputStream("res/bitmap.txt");
			Scanner sc = new Scanner(fis);

			for (int y = 0; y < 10; y++) {
				String a = sc.nextLine();
				String[] arr = a.split("");
				for (int x = 0; x < 20; x++) {
					bitmap[y][x] = Integer.parseInt(arr[x]);
				}
			}

			// 배열 줄 마다 값 반전시키기
			for (int y = 0; y < 10; y++)
				for (int i = 0; i < 20 / 2; i++) {
					int temp = bitmap[y][i];
					bitmap[y][i] = bitmap[y][20 - 1 - i];
					bitmap[y][20 - 1 - i] = temp;
				}

			// 선택 정렬
			for (int y = 0; y < 10; y++)
				for (int x = 0; x < 20; x++)
					for (int i = 0 + x; i < 20; i++) {
						int p = x;
						if (bitmap[y][p] != bitmap[y][i]) {
							int temp = bitmap[y][p];
							bitmap[y][p] = bitmap[y][i];
							bitmap[y][i] = temp;
							break; // 선택 정렬의 경우 해당 값을 찾기 위해 끝까지 비교해야 되지만 이 경우는 그 뒤로는 다 같은 숫자이니까
						}
					}
			
			// 버블 정렬
			for (int y = 0; y < 10; y++)
				for (int x = 0; x < 20; x++)
					for (int i = 0; i < 20-1-x; i++)						
						if (bitmap[y][i] != bitmap[y][i+1]) {
							int temp = bitmap[y][i];
							bitmap[y][i] = bitmap[y][i+1];
							bitmap[y][i+1] = temp;						
						}
						
					
			
			System.out.println("자리변경 완료");
		}

		// 4. res/bitmap-out.txt 파일로 bitmap 배열의 값들을 저장
		{
			// 코드를 작성하는 공간
			FileOutputStream fos = new FileOutputStream("res/bitmap-out.txt");
			PrintStream out = new PrintStream(fos);

			for (int i = 0; i < 10; i++) {
				for (int j = 0; j < 20; j++)
					out.print(bitmap[i][j]);
				out.println();
			}

			out.close();
			fos.close();

			System.out.println("저장 완료");
		}

	}

}
