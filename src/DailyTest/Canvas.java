package DailyTest;

public class Canvas {

	private char[][] buf;		
	
	public Canvas() {
		buf = new char[20][20];		
	}
	
	
	public void drawLine(int i, int j, int k, int l) {
		int a = 0;
		int maxX, maxY = 0;
		int minY = 0;
		int diff = 0;
		
		for (int y = 0; y < this.buf.length; y++)
			for (int x = 0; x < this.buf[y].length; x++)
				this.buf[y][x] = '┼';

		if (j > l) {
			maxY = j;
			minY = l;
			maxX = i;
			diff = maxY - minY; 
		} else {
			maxY = l;
			maxX = k;
			minY = j;
			diff = maxY - minY;
		}

		for (int y = 0; y <= diff; y++) {
			this.buf[maxY - 1 - a][maxX - 1 - a] = '○';
			a++;
		}

		for (int y = 0; y < this.buf.length; y++) {
			for (int x = 0; x < this.buf[y].length; x++)
				System.out.print(this.buf[y][x]);
			System.out.println();
		}
		
	}

	
}
