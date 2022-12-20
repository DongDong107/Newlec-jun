package ex5.capsule;

public class CapsuleTest {

	public static void main(String[] args) {
		
		// 성적 객체를 준비한다.
		
		Exam 뉴렉성적 = new Exam(); // 괄호는 함수였다!! 갓생성된 객체일때 호출할수있는 함수 : 생성자 (생성자 함수 아님)
		
//		// 성적을 입력 받는다.
//		//뉴렉성적.입력()
//		Exam.inputExam(뉴렉성적);
//		뉴렉성적.input();
//		
//		// 성적을 출력한다.
//		뉴렉성적.print();
	
		
		Exam sample = new Exam();
		sample.print();
		sample.print('%');
		sample.print('#',20);
		
	}

	

}
