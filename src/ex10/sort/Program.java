package ex10.sort;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

/**
 * Program
 */
public class Program {
  public static void main(String[] args) {
    // Integer[] ages = { 10, 2, 31, 54, 134, 23, 34 };

    // Arrays.sort(ages, (a, b) -> b - a);

    // System.out.println(Arrays.toString(ages));

    // String[] stringArray = { "Barbara", "James", "Mary", "John", "Patricia",
    // "Robert", "Michael", "Linda" };

    // // Arrays.sort(stringArray, (a, b) -> a.compareTo(b));
    // Arrays.sort(stringArray, String::compareTo);
    // // Arrays.
    // System.out.println(Arrays.toString(stringArray));

    // Comparable<Integer> comp = new Comparable<Integer>() {
    // @Override
    // public int compareTo(Integer o) {
    // // TODO Auto-generated method stub
    // return 0;
    // }
    // };

    // Comparable<Integer> comp1 = o -> 0;

    // =============================================================== 05.18

    // Exam[] list = {
    // new Exam(1, 2, 3),
    // new Exam(2, 3, 4),
    // new Exam(3, 2, 1)
    // };

    // Arrays.sort(list);
    // System.out.println(Arrays.toString(list));

    // int[] ages = { 10, 34, 32, 21, 23, 25, 46 };
    // int[] result = IntStream
    // .of(ages)
    // .filter(age -> age > 25)
    // .sorted()
    // .map(a -> a / 10 * 10)
    // .toArray();

    // System.out.println(Arrays.toString(result));

    List<Exam> list = Files
        .lines(Path.of("res/data0518.csv"))
        .skip(1)
        .map(line -> {
          String[] tokens = line.split(",");
          if (tokens.length != 3)
            throw new RuntimeException("인자의 개수가 잘못 되었습니다");

          int kor = Integer.parseInt(tokens[0]);
          int eng = Integer.parseInt(tokens[1]);
          int math = Integer.parseInt(tokens[2]);

          return new Exam(kor, eng, math);
        })
        .toList();

    System.out.println(list);
  }

}