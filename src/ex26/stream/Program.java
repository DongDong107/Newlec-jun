package ex26.stream;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Program {
    public static void main(String[] args) throws IOException {
        // Int, Double, longStream <=> Stream
        // 1. 콜렉션
        // 2. 배열
        // 3. 파일

        ExamRepository repository = new ExamRepository();
        // List<Exam> list = repository.getList(1);
        // list.forEach(System.out::println);

        // Exam exam = repository.get(3);
        // System.out.println(exam);

        int sum = repository.getKorSum();
        System.out.println(sum);
        
        int[] ages1 = {10,23,34,53,432,213};
        IntStream stream1 = IntStream.of(ages1);
        stream1
        .boxed()
        .toList()
        .forEach(System.out::println);


        // int[] ages1 = {10,23,34,53,432,213};
        // IntStream stream1 = IntStream.of(ages1);
        // stream1.average();

        // List<Integer> ages2 = new ArrayList<>();
        // Stream<Integer> stream2 = ages2.stream();
        // Optional<Integer> firstNum = stream2.findFirst();
        // long count = stream2.count();

        // Files.lines(Path.of("res/data0518.csv"))
        // .forEach(System.out::println);
        // .forEach(line -> {
        //     System.out.println(line);
        // });
        
        // Function References
    }
}
