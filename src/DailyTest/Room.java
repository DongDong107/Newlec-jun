package DailyTest;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class Room {

	private Student[] Students;

	public Room() {		
		Students = new Student[10];
	}

	public void load(String src) throws IOException {
		FileInputStream fis = new FileInputStream(src);
		Scanner sc = new Scanner(fis);
		String temp = sc.nextLine();
		
		for (int i = 0; i < Students.length; i++) {
			Students[i] = new Student();
			String a = sc.nextLine();
			String[] arr = a.split(",");
			Students[i].setId(Integer.parseInt(arr[0]));
			Students[i].setName(arr[1]);
		}
	}

	public void shuffle() {
		Random rand = new Random();

		for (int i = 0; i < Students.length; i++) {
			int a = rand.nextInt(10);
			int b = rand.nextInt(10);
			Student temp = Students[a];
			Students[a] = Students[b];
			Students[b] = temp;
		}

	}

	public void print() {
		for (int i = 0; i < Students.length; i++) {
			Students[i].print();			
		}
		System.out.println("----------------------------------------------");
	}

	public void sort() {
		for (int i = 0; i < Students.length; i++) {
			for (int j = 0; j < Students.length - 1; j++) {
				if (Students[j].getId() > Students[j + 1].getId()) {
					Student temp = Students[j];
					Students[j] = Students[j + 1];
					Students[j + 1] = temp;
				}
			}
		}
	}
	 

}
