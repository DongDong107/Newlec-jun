package ex8.abstra;

public class NewlecExam extends Exam{
	
	
	private int com;
	
	public NewlecExam() {
		this(0,0,0,0);
	}
	
	public NewlecExam(int kor, int eng, int math, int com) {
		super(kor, eng, math);
		this.com = com;
	}
	@Override
	public int total() {
		return super.total() + this.com;
	}
	
	@Override
	public double avg() {		
		return this.total() / 4.0;
	}
}
