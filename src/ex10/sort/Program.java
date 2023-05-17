package ex10.sort;

import java.util.Arrays;

/**
 * Program
 */
public class Program {
  public static void main(String[] args) {
    Integer[] ages = { 10, 2, 31, 54, 134, 23, 34 };

    Arrays.sort(ages, (a, b) -> b - a);

    System.out.println(Arrays.toString(ages));

    String[] stringArray = { "Barbara", "James", "Mary", "John", "Patricia", "Robert", "Michael", "Linda" };

    // Arrays.sort(stringArray, (a, b) -> a.compareTo(b));
    Arrays.sort(stringArray, String::compareTo);
    // Arrays.
    System.out.println(Arrays.toString(stringArray));

    Comparable<Integer> comp = new Comparable<Integer>() {
      @Override
      public int compareTo(Integer o) {
        // TODO Auto-generated method stub
        return 0;
      }
    };

    Comparable<Integer> comp1 = o -> 0;
  }

}