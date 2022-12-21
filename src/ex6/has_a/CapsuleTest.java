package ex6.has_a;

public class CapsuleTest {

	public static void main(String[] args) {

		//	Composition Has a 관계
		ExamConsole console = new ExamConsole();
		console.input();
		console.print();		
		
		// Association Has a 관계
		ExamConsole2 console2 = new ExamConsole2();
		Exam exam = new Exam(10,20,30);
		console2.setExam(exam);
		console2.print();
		
		
	}

}
