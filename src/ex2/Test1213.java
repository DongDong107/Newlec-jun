package ex2;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Test1213 {

	public static void main(String[] args) throws FileNotFoundException {
		// TODO Auto-generated method stub

		int count = 0;
		{
			FileInputStream fos = new FileInputStream("res/data.txt");
			Scanner sc = new Scanner(fos);
//	
//			String a = sc.nextLine();
//	
//			String[] arr = a.split(" ");

			// for(int i=0; i<arr.length;i++) {
			// count++;
			// }
			//
			int sum = 0;

			while (true) {
				int b = sc.nextInt();
				sum += b;
				count++;
				if (sum == 600)
					break;
			}
		}

		int max = -1;

		{
			FileInputStream fos1 = new FileInputStream("res/data.txt");
			Scanner sca = new Scanner(fos1);

			String a = sca.nextLine();
			String[] arr = a.split(" ");
			for (int i = 0; i < count; i++)
				if (max < Integer.parseInt(arr[i]))
					max = Integer.parseInt(arr[i]);

		}

		int index = -1;

		{
			FileInputStream fos = new FileInputStream("res/data.txt");
			Scanner sc = new Scanner(fos);
			String a = sc.nextLine();
			String[] arr = a.split(" ");

			for (int i = 0; i < count; i++)
				if (Integer.parseInt(arr[i]) == 10) {
					index = i + 1;
					break;
				}

		}

		System.out.printf("count is %d\n", count);
		System.out.printf("max is %d\n", max);
		System.out.printf("index is %d\n", index);
	}

}
