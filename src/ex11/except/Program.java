package ex11.except;

public class Program {
  public static void main(String[] args) throws 천을넘는예외 {

    Calculator calc = new Calculator();
    int result;
    try {
      result = calc.add(1000, 2);
      System.out.println(result);
    } catch (천을넘는예외 e) {
      e.printStackTrace();
    }

    System.out.println("작업종료");
  }
}
