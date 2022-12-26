package ex8.abstra;

import java.util.Scanner;

public abstract class Exam {
	private int kor;
	private int eng;
	private int math;

	// 생성자 (함수는 아님. 이름이 없음. 하지만 특징은 함수임.)
	public Exam() {
//		this(0, 0, 0); // this 값이 사용된 적이 없어야 한다.
	}

	public Exam(int kor, int eng, int math) {
		this.kor = kor;
		this.eng = eng;
		this.math = math;
	}

	public double avg() {
		return total() / 3.0;
	}

	public int total() {
		return kor + eng + math;
	}

	public void setKor(int kor) {
		this.kor = kor;		
	}

	public void setEng(int eng) {
		this.eng = eng;		
	}

	public void setMath(int math) {
		this.math = math;		
	}

	public int getKor() {
		return kor;
	}

	public int getEng() {
		return eng;
	}

	public int getMath() {
		return math;
	}

}
