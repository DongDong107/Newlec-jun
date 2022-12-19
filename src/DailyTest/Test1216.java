package DailyTest;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class Test1216 {

	public static void main(String[] args) throws IOException {

		// 행열수 입력받기
		Scanner sc = new Scanner(System.in);
		System.out.println("원하시는 행(세로)과 열(가로)을 적어주세요");
		int y = sc.nextInt();
		int x = sc.nextInt();
		
		// 1
		String ad = "res/map.txt";
		writeMap(ad,x,y);
		
		// 2.
				
		
		int[][] map = new int[y][x];
		char[][] board = new char[y*2][x*2];

		// 3. res/map.txt에서 읽은 데이터로 map 배열을 채우시오.

		setMap(ad, map);

		System.out.println("map 데이터 로드 완료");

		// 4

		insertBoard(map, board);
		System.out.println("board 그리기 완료");

		// 5. board 배열을 화면에 출력하는 코드를 작성하시오.

		printBoard(board);

		System.out.println("board 출력 완료");

	}

	static void writeMap(String ad, int x, int y) throws IOException {
		FileOutputStream fos = new FileOutputStream(ad);
		PrintStream write = new PrintStream(fos);
		Scanner sc = new Scanner(System.in);
		System.out.printf("0,1로 이루어진 수를 %d개씩 %d줄 적어주세요\n", x, y);
		for (int i = 0; i < y; i++) {
			String a = sc.nextLine();
			write.print(a);
			if (i == y-1)
				break;
			else
				write.println();
		}

		sc.close();
		write.close();
		fos.close();
	}

	static void setMap(String ad, int[][] map) throws IOException {

		FileInputStream fis = new FileInputStream(ad);
		Scanner sc = new Scanner(fis);

		for (int y = 0; y < map.length; y++) {
			String a = sc.nextLine();
			String[] arr = a.split("");
			for (int x = 0; x < map[y].length; x++)
				map[y][x] = Integer.parseInt(arr[x]);
		}

		sc.close();
		fis.close();
	}

	static void printBoard(char[][] board) {

		for (int y = 0; y < board.length; y++) {
			for (int x = 0; x < board[y].length; x++)
				System.out.print(board[y][x]);

			System.out.println();
		}
	}

	static void insertBoard(int[][] map, char[][] board) {

		for (int y = 0; y < map.length; y++) {
			for (int x = 0; x < map[y].length; x++) {
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
