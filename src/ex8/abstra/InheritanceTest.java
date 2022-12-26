package ex8.abstra;

public class InheritanceTest {

	public static void main(String[] args) {

		NewlecExam exam = new NewlecExam(1,1,1,1);
		System.out.println(exam.total());
		System.out.println(exam.avg());
		
		Exam exam2 = new NewlecExam(1,1,1,1);
		System.out.println(exam2.total());
		
	}

}
