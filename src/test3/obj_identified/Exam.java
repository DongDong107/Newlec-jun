package test3.obj_identified;

public class Exam {
  int kor;
  int eng;
  int math;

  @Override
  public boolean equals(Object obj) {

    Exam exam = (Exam) obj;
    return (this.kor == exam.kor) && (this.eng == exam.eng);
  }

  @Override
  public int hashCode() {
    // TODO Auto-generated method stub
    // return super.hashCode();
    return 1;
  }

  public Exam() {

  }

  public Exam(int kor, int eng, int math) {
    super();
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }

  public int total() {
    int result = 0;
    result = kor + eng + math;

    return result;
  }
}
