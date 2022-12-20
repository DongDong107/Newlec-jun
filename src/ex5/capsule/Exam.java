package ex5.capsule;

import java.util.Scanner;

public class Exam {
	private int kor;
	private int eng;
	private int math;

	// 생성자 (함수는 아님. 이름이 없음. 하지만 특징은 함수임.)
	public Exam() {
		this(0,0,0); // this 값이 사용된 적이 없어야 한다.
	}
	
	public Exam(int kor, int eng, int math) {
		this.kor = kor;
		this.eng = eng;
		this.math = math;
	}

	public void init() {
		// TODO Auto-generated method stub
		kor = 30;
		eng = 30;
		math = 30;
	}

	public void input() {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);

		System.out.println("┌────────────────────────┐");
		System.out.println(" ─────────성적 입력───────── ");
		System.out.println("└────────────────────────┘");

		do {
			System.out.println("국어점수를 입력해주세요 : \t");
			kor = scan.nextInt();

			if (kor < 0 || kor > 100)
				System.out.println("점수는 0~100점 사이로 입력해주세요.");
		} while (kor < 0 || kor > 100);

	}

	public void print() {
		// TODO Auto-generated method stub
		// int kor = 10; //(kor 우선순위는 this보다 지역변수)
		print('-');
	}

	public void print(char ch) {
		print(ch, 30);
	}

	public void print(char ch, int length) {
		
		int total = total();
		double avg = avg();
		System.out.printf("kor:%d\n", this.kor); // this.kor 쓰지 않아도 됨. 속성을 찾아봄
		System.out.printf("eng:%d\n", this.eng);
		System.out.printf("math:%d\n", this.math);
		System.out.printf("total:%d\n", total);
		System.out.printf("avg:%.2f\n",avg);

		for (int i = 0; i < length; i++)
			System.out.printf("%c", ch);
		
		System.out.println();
	}

	private double avg() {
		return total()/3.0;
	}

	private int total() {
		
		return kor+eng+math;
	}

	static void inputExam(Exam 뉴렉성적) {
		
		int kor = 뉴렉성적.kor;

		System.out.printf("kor:%d\n", kor);
		System.out.printf("eng:%d\n", 뉴렉성적.eng);
		System.out.printf("math:%d\n", 뉴렉성적.math);
		System.out.println("------------------------");
	}

}
