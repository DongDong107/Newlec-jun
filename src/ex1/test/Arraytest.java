package ex1.test;

import java.util.Random;

public class Arraytest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		int[] ar1 = new int[5];
//		
//		ar1 = new int[7];
//		
//		int[][] ar2 = new int[3][5]; //대대장
//		
//		ar2= new int[2][6]; //중대장
//		
//		ar2[0] = new int[9]; // 소대장
//		
//		int[][] ar3 = new int[3][];

		int[] nums = { 20, 5, 7, 98, 45, 7, 45, 62, 12, 47 };
		
		Random rand = new Random();
		
		int s = rand.nextInt(10);
		int d = rand.nextInt(10);
		int temp = nums[s];
		nums[s] = nums[d];
		nums[d] = temp;
		
		for (int i = 0; i < 10; i++) {
			System.out.printf("%d", nums[i]);
			if (i != 9)
				System.out.print(",");
		}		
		
	}

}
