package prac;

import java.util.Scanner;

public class Prac1213 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

//		char[] arr = new char[100];
//		
//		for(int i=0; i<100; i++) 
//			arr[i] = '┼';
//		
//		for(int i=0; i<100; i++) {
//			System.out.print(arr[i]);
//			if(i%10 == 9)
//				System.out.println();
//		}

		char[][] arr = new char[10][10];

		{
			for (int i = 0; i < 10; i++)
				for (int j = 0; j < 10; j++)
					arr[i][j] = '┼';
		}

		while (true) {
			System.out.println("x,y >");
			Scanner sc = new Scanner(System.in);
			int x, y;
			x = sc.nextInt() - 1;
			y = sc.nextInt() - 1;

			arr[y][x] = '●';
			{
				for (int i = 0; i < 10; i++) {
					for (int j = 0; j < 10; j++)
						System.out.print(arr[i][j]);
					System.out.println();
				}
			}
		}
	}

}
