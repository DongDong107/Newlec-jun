package test3.obj_identified;

import java.util.HashSet;
import java.util.Set;

public class Program {

  public static void main(String[] args) {
    String str1 = "hello";
    String str2 = "hello";

    System.out.println(str1 == str2);
    System.out.println(str1.equals(str2));

    Exam exam1 = new Exam(1, 2, 3);
    Exam exam2 = new Exam(1, 2, 3);

    System.out.println(exam1 == exam2);
    System.out.println(exam1.equals(exam2));

    System.out.println(exam1.hashCode());
    System.out.println(exam2.hashCode());

    Set<Exam> set = new HashSet<>();
    set.add(exam1);
    set.add(exam2);

    System.out.println(set.size());
  }
}
