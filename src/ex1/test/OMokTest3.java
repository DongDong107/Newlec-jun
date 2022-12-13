package ex1.test;

import java.util.Scanner;

public class OMokTest3 {

	public static void main(String[] args) {

//		char[] board = new char[100];

		char[][] board = new char[10][10];

		{
			for (int y = 1; y <= 10; y++)
				for (int x = 1; x <= 10; x++)
					board[y - 1][x - 1] = '┼';
		}
		// 배열만 건드려서 출력을 다르게
//		board[57]= '○';
// 윗판마감
//		for(int i=1;i<=10;i++) {
//			board[0][i-1]='┬';
//			board[9][i-1]='┴';
//		}

		// 사용자로부터 입력받음
		// 오목 입력
		int temp = 0;
		while (true) {
			{
				if(temp%2 != 0)
					System.out.println("검은 공 차례");
				else
					System.out.println("흰 공 차례");
				
				System.out.println("(x,y)> ");
				int ox, oy;
				Scanner sc = new Scanner(System.in);
				ox = sc.nextInt();
				oy = sc.nextInt();				
				
				if(temp%2 != 0)
					board[oy - 1][ox - 1] = '○';
				else
					board[oy - 1][ox - 1] = '●';
				
				temp++;
			}

			// 보드 출력
			{
				for (int y = 1; y <= 10; y++) {
					for (int x = 1; x <= 10; x++)
						System.out.printf("%c", board[y - 1][x - 1]);
					System.out.println();
				}
			}			
			
		}
	}

}
