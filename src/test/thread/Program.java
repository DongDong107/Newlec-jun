package test.thread;

public class Program {

  static void print() {
    for (int i = 0; i < 100; i++) {
      System.out.println(i);
    }
  }

  public static void main(String[] args) {
    Thread subThread = new Thread();

    subThread.start();
    print();

  }
}
