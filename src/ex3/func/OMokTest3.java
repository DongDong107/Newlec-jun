package ex3.func;

import java.util.Scanner;

public class OMokTest3 {

	static void initBoard(char board[][]) {
		for (int y = 1; y <= 10; y++)
			for (int x = 1; x <= 10; x++)
				board[y - 1][x - 1] = '┼';
	}

	static void printBoard(char board[][]) {
		for (int y = 1; y <= 10; y++) {
			for (int x = 1; x <= 10; x++)
				System.out.printf("%c", board[y - 1][x - 1]);
			System.out.println();
		}
	}

	private static void inputOmokOnBoard(char[][] board) {
		// TODO Auto-generated method stub
		int temp = 0;
		boolean point = true;
		while (point) {
			{
				if (temp % 2 != 0)
					System.out.println("검은 공 차례");
				else
					System.out.println("흰 공 차례");

				// 유저 공 위치 입력
				System.out.println("(x,y)> ");
				int ox, oy;
				Scanner sc = new Scanner(System.in);
				ox = sc.nextInt();

				if (ox == 3000) {
					System.out.println("종료합니다.");
					break;
				}
				oy = sc.nextInt();

				// 바둑알 표현 및 공 바뀌지 않게 방지하기
				if (board[oy - 1][ox - 1] != '┼') {
					System.out.println("해당 자리에는 공이 존재합니다.");
					continue;
				} else if (temp % 2 != 0)
					board[oy - 1][ox - 1] = '○';
				else
					board[oy - 1][ox - 1] = '●';

				// temp 값에 따른 흑백공 변화
				temp++;
				printBoard(board);
			}
		}
	}
	public static void main(String[] args) {

		char[][] board = new char[10][10];

		initBoard(board);

		System.out.println("종료를 원하시면 3000을 눌러주세요");

		// 사용자로부터 입력받음
		// 오목 입력
		inputOmokOnBoard(board);

			// 보드 출력
			printBoard(board);

		}
	}



