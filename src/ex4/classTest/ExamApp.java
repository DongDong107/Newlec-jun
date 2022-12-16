package ex4.classTest;

public class ExamApp {

	public static void main(String[] args) {

		Exam exam1 = new Exam();
		exam1.kor = 30;
		exam1.eng = 30;
		exam1.math = 30;

		printExam(exam1);

		Exam[] exams = new Exam[3];
		// printExams(exams); 이 위치에서 사용하게 되면 선언되기 전이므로 참조 변수만 있음.
				
		exams[0] = new Exam();
		exams[0].kor = 30;
		exams[0].eng = 30;
		exams[0].math = 30;

		exams[1] = new Exam();
		exams[1].kor = 40;
		exams[1].eng = 40;
		exams[1].math = 40;

		exams[2] = new Exam();
		exams[2].kor = 50;
		exams[2].eng = 50;
		exams[2].math = 50;

		printExams(exams);
	}

	static void printExams(Exam[] exams) {
		for (int i = 0; i < exams.length; i++) {
			//1
			System.out.printf("kor:%d\n", exams[i].kor);
			System.out.printf("eng:%d\n", exams[i].eng);
			System.out.printf("math:%d\n", exams[i].math);
			System.out.println("----------------------");
			//2
			printExam(exams[i]);
			//3
			Exam exam = exams[i];
			printExam(exam);
		}

	}

	static void printExam(Exam exam1) {
		System.out.printf("kor:%d\n", exam1.kor);
		System.out.printf("eng:%d\n", exam1.eng);
		System.out.printf("math:%d\n", exam1.math);
		System.out.println("----------------------");
	}

}
