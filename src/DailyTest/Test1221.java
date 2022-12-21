package DailyTest;

import java.io.IOException;

public class Test1221 {

	public static void main(String[] args) throws IOException {

		Room room = new Room();
		String src = "res/students.csv";
		room.load(src);
		room.shuffle();
		room.print();
		room.sort();
		room.print();

	}

}
