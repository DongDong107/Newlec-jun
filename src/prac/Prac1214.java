package prac;

import java.util.Scanner;

public class Prac1214 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
//		int X = Integer.parseInt(sc.nextLine());
//		int N = Integer.parseInt(sc.nextLine());
//		
////		int[] arr = new int[N*2];
//		
//		int sum=0;
//		
//		for(int i=0; i<N;i++) {
//			int a = sc.nextInt();
//			int b = sc.nextInt();			
//			sum += a*b;
//		}
//		
//		if(sum != X)
//			System.out.println("No");
//		else
//			System.out.println("Yes");		
		
		int N = sc.nextInt();
		int[] arr = new int[N];
		for(int i=0; i<N; i++)
			arr[i] = sc.nextInt();
		int count = 0;
		int v = sc.nextInt();
		for(int i=0; i<N; i++)
			if(arr[i] == v)
				count++;
		
		System.out.println(count);
		
	}

}
