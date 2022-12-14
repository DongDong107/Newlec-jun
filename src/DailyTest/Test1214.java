package DailyTest;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Random;
import java.util.Scanner;

public class Test1214 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		// 1
		int[] nums = new int[15];

		// 2
		FileInputStream fos = new FileInputStream("res/data.txt");
		Scanner read = new Scanner(fos);

		String a = read.nextLine();
		String[] numtemp = a.split(" ");

		for (int i = 0; i < 15; i++)
			nums[i] = Integer.parseInt(numtemp[i]);

		read.close();
		fos.close();

		System.out.println("로드 완료");

//		//확인용
//		for(int i=0; i<15 ;i++)
//			System.out.print(nums[i]);

		// 3
		Random rand = new Random();
		
		int x, y, temp;
		
		for (int i = 0; i < 50; i++) {
			x = rand.nextInt(15);
			y = rand.nextInt(15);

			temp = nums[x];
			nums[x] = nums[y];
			nums[y] = temp;
		} // 반복할 때 마다 선언하면 좋지 않을 것 같다.

		System.out.println("번호 섞기 완료");

		// 4
		FileOutputStream write = new FileOutputStream("res/data-out.txt");
		PrintStream out = new PrintStream(write);

		for (int i = 0; i < 15; i++) {
			out.printf("%d ", nums[i]);
		}

		out.close();
		write.close();

		System.out.println("저장 완료");

	}

}
