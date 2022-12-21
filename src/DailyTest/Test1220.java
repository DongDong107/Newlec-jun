package DailyTest;

public class Test1220 {

	public static void main(String[] args) {
		
		int x = 3;
//		// 1. canvas라는 이름으로 문자 20x20개를 저장할 수 있는 배열 객체를 생성한다.
//		char[][] canvas = new char[20][20];
//
//		// 2. canvas 배열을 다음처럼 ‘┼’ 문자로 채우는 코드를 작성하시오.
//
//		{
//			// 코드를 작성하는 공간
//			initCanvas(canvas);
//			System.out.println("board 초기화 완료");
//		}
//
//		// 3. ‘○’ 문자를 이용해서 canvas에 선을 그리는 함수를 작성하시오.
//		// 함수의 호출 예
//		{
//			// 2번 문제 코드
//
//			System.out.println("board 초기화 완료");
//
//			// 3번 문제풀이로 작성된 함수를 호출하는 코드
//			int x1 = 2;
//			int y1 = 2;
//			int x2 = 13;
//			int y2 = 13;
//			drawLineOnCanvas(canvas, x1, y1, x2, y2);
//		}
		 Canvas canvas = new Canvas();
		 canvas.drawLine(2,2,13,13);
		 
	}

	static void drawLineOnCanvas(char[][] canvas, int x1, int y1, int x2, int y2) {
		int a = 0;
		int maxX, maxY = 0;

		if (y1 > y2) {
			maxY = y1;
			maxX = x1;
		} else {
			maxY = y2;
			maxX = x2;
		}

		for (int y = 0; y <= y2 - y1; y++) {
			canvas[maxY - 1 - a][maxX - 1 - a] = '○';
			a++;
		}

		for (int y = 0; y < canvas.length; y++) {
			for (int x = 0; x < canvas[y].length; x++)
				System.out.print(canvas[y][x]);
			System.out.println();
		}

	}

	static void initCanvas(char[][] canvas) {
		for (int y = 0; y < canvas.length; y++)
			for (int x = 0; x < canvas[y].length; x++)
				canvas[y][x] = '┼';
	}

}
