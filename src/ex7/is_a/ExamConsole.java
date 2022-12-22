package ex7.is_a;

import java.util.Scanner;

// Composition Has a 를 위한 console
public class ExamConsole {
	private Exam exam; //단순한 참조 변수가 아님. 부품명 
	
	public ExamConsole() {
		exam = new Exam(); // 일체형
	}
	public void input() {
		
		Scanner scan = new Scanner(System.in);

		System.out.println("┌────────────────────────┐");
		System.out.println(" ─────────성적 입력───────── ");
		System.out.println("└────────────────────────┘");
		int kor;
		do {
			System.out.println("국어점수를 입력해주세요 : \t");
			kor = scan.nextInt();

			if (kor < 0 || kor > 100)
				System.out.println("점수는 0~100점 사이로 입력해주세요.");
		} while (kor < 0 || kor > 100);
		exam.setKor(kor);
		
		int eng;
		do {
			System.out.println("영어점수를 입력해주세요 : \t");
			eng = scan.nextInt();

			if (eng < 0 || eng > 100)
				System.out.println("점수는 0~100점 사이로 입력해주세요.");
		} while (eng < 0 || eng > 100);
		exam.setEng(eng);
		
		int math;
		do {
			System.out.println("수학점수를 입력해주세요 : \t");
			math = scan.nextInt();

			if (math < 0 || math > 100)
				System.out.println("점수는 0~100점 사이로 입력해주세요.");
		} while (math < 0 || math > 100);
		exam.setMath(math);
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

		int total = exam.total();
		double avg = exam.avg();
		System.out.printf("kor:%d\n", exam.getKor()); // this.kor 쓰지 않아도 됨. 속성을 찾아봄
		System.out.printf("eng:%d\n", exam.getEng());
		System.out.printf("math:%d\n", exam.getMath());
		System.out.printf("total:%d\n", total);
		System.out.printf("avg:%.2f\n", avg);

		for (int i = 0; i < length; i++)
			System.out.printf("%c", ch);

		System.out.println();
	}

	public void setExam(Exam exam) {
		this.exam = exam;		
	}
}
