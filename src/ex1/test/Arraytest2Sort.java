package ex1.test;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Random;

public class Arraytest2Sort {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		int[] nums = { 20, 5, 7, 98, 45, 7, 45, 62, 12, 47 };

		Random rand = new Random();

		int x, y, temp;

		for (int i = 0; i < 50; i++) {
			x = rand.nextInt(10);
			y = rand.nextInt(10);

			temp = nums[x];
			nums[x] = nums[y];
			nums[y] = temp;
		} // 반복할 때 마다 선언하면 좋지 않을 것 같다.

		System.out.println("번호 섞기 완료");

		// 4
		{
			FileOutputStream write = new FileOutputStream("res/data-out.txt");
			PrintStream out = new PrintStream(write);

			for (int i = 0; i < 10; i++) {
				out.printf("%d ", nums[i]);
			}

			out.close();
			write.close();

			System.out.println("저장 완료");
		}
		
		//sort
		{
			// 제일 큰 번호를 몇 번째까지 구할 것인지 반복
			for(int i=0; i<10-1; i++) {
				//제일 큰 번호를 끝으로 밀기
				for(int j=0; j<10-1-i; j++) {
					if(nums[j]>nums[j+1]) {						
						int tem = nums[j];
						nums[j] = nums[j+1];
						nums[j+1] = tem;
					}
				}				
			}
		}
		
		// 화면에 출력하기
		{
			for(int i =0; i < nums.length; i++)
				System.out.printf("%d ",nums[i]);
		}
		
	}

}
