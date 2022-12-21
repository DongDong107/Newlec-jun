package ex6.has_a;

// Association Has a  를 위한 console
public class ExamConsole2 {
	private Exam a;
	
	public ExamConsole2() {
		a = new Exam();
	}
	public void setExam(Exam exam) {
		this.a.setKor(exam.getKor());		
		this.a.setEng(exam.getEng());
		this.a.setMath(exam.getMath());
	}
	
	public void print() {

		int total = this.a.getKor() + this.a.getEng() + this.a.getMath();
		double avg = total / 3.0;
		System.out.printf("kor:%d\n", this.a.getKor()); 
		System.out.printf("eng:%d\n", this.a.getEng());
		System.out.printf("math:%d\n", this.a.getMath());
		System.out.printf("total:%d\n", total);
		System.out.printf("avg:%.2f\n", avg);	

		System.out.println();
	}

}
