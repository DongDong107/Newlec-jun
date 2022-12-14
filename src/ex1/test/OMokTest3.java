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
		
		System.out.println("종료를 원하시면 3000을 눌러주세요");
		
		// 사용자로부터 입력받음
		// 오목 입력
		int temp = 0;
		while (true) {
			{
				if(temp%2 != 0)
					System.out.println("검은 공 차례");
				else
					System.out.println("흰 공 차례");
				
				//유저 공 위치 입력
				System.out.println("(x,y)> ");
				int ox, oy;
				Scanner sc = new Scanner(System.in);
				ox = sc.nextInt();
				
				if(ox == 3000) {
					System.out.println("종료합니다.");
					break;		
				}
				oy = sc.nextInt();				
				
						
				// 바둑알 표현 및 공 바뀌지 않게 방지하기
				if(board[oy - 1][ox - 1] != '┼') {
					System.out.println("해당 자리에는 공이 존재합니다.");
					continue;
				}
				else if(temp%2 != 0)
					board[oy - 1][ox - 1] = '○';
				else
					board[oy - 1][ox - 1] = '●';
				
//				// 승리 시 표현 후 끝내기
//				for(int y=0; y<10; y++) {
//					for(int x=0; x<10;x++) {
//						int count = 0;
//						for(int i=0; i<5; i++) {
//							if(board[y][x+i] != board[y][x+i+1])
//								break;
//							if(x<5 && board[y][x+i] == board[y][x+i+1])
//								count++;							
//						}
//						if(count == 5)
//							System.out.println("승리");								
//					}
//				}
				
				// temp 값에 따른 흑백공 변화
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
