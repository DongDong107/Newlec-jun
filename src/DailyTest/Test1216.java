package DailyTest;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Test1216 {

	public static void main(String[] args) throws FileNotFoundException {

		// 2. 
		
		int[][] map = new int[3][5];
		char[][] board = new char[6][10];

		// 3. res/map.txt에서 읽은 데이터로 map 배열을 채우시오.

		String ad = "res/map.txt";
		setMap(ad, map);

		System.out.println("map 데이터 로드 완료");

		// 4

		insertBoard(map, board);
		System.out.println("board 그리기 완료");

		// 5. board 배열을 화면에 출력하는 코드를 작성하시오.

		printBoard(board);

		System.out.println("board 출력 완료");

	}

	static void setMap(String ad, int[][] map) throws FileNotFoundException {

		FileInputStream fis = new FileInputStream(ad);
		Scanner sc = new Scanner(fis);

		for (int y = 0; y < 3; y++) {
			String a = sc.nextLine();
			String[] arr = a.split("");
			for (int x = 0; x < 5; x++)
				map[y][x] = Integer.parseInt(arr[x]);
		}
	}

	static void printBoard(char[][] board) {

		for (int y = 0; y < 6; y++) {
			for (int x = 0; x < 10; x++)
				System.out.print(board[y][x]);

			System.out.println();
		}
	}

	static void insertBoard(int[][] map, char[][] board) {

		for (int y = 0; y < 3; y++) {
			for (int x = 0; x < 5; x++) {
				int bx = 2 * x;
				int by = 2 * y;
				if (map[y][x] == 0) {
					board[by][bx] = '┌';
					board[by][bx + 1] = '┐';
					board[by + 1][bx] = '└';
					board[by + 1][bx + 1] = '┘';
				} else if (map[y][x] == 1) {
					board[by][bx] = '▩';
					board[by][bx + 1] = '▩';
					board[by + 1][bx] = '▩';
					board[by + 1][bx + 1] = '▩';
				}
			}
		}
	}
}
