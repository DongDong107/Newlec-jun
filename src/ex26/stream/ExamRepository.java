package ex26.stream;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

public class ExamRepository {

    // public Exam get(int id){
    //     // Exam temp = new Exam();
    //     Optional<Exam> result = null;
    //     try {
    //         result = Files
    //             .lines(Path.of("res/data0518.csv"))
    //             .skip(1)
    //             .map(Exam::fromCSV)
    //             .filter(exam -> exam.getId() == id)
    //             .findFirst();
    //     } catch (IOException e) {
    //         // TODO Auto-generated catch block
    //         e.printStackTrace();
    //     }

    //     return result;
    // }

    public Exam get(int id) {
        Optional<Exam> result = null;
        try {
           result = Files
           .lines(Path.of("res/data.csv")) // 문자열로 읽어온다.
           .skip(1)
           .map(Exam::fromCSV)
           .filter(exam->exam.getId()==id)
           .findFirst();
  //         .findAny();
        } catch (IOException e) {
           e.printStackTrace();
        }
        
        if(result.isPresent())
           return result.get();
        
        return null;
     }
  

    public int getKorSum() {
        OptionalInt result = null;
        try {
            result = Files
                    .lines(Path.of("res/data0518.csv"))
                    .skip(1)
                    .map(Exam::fromCSV)
                    .mapToInt(exam -> exam.getKor())
                    .reduce((a,b)->a+b);
                    // .map(exam -> exam.getKor())
                    // // .mapToInt(n->n.intValue())
                    // .mapToInt(Integer::intValue)
                    // .sum();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return result.getAsInt();
    }

    public List<Exam> getList(int page){
        List<Exam> list = null;
        int size = 5;
        int offset = (page-1)*size;

        try {
            Files
            .lines(Path.of("res/data0518.csv"))
            .skip(1)
            .map(Exam::fromCSV)
            .filter(exam -> exam.getKor() == 90 )
            .skip(offset)
            .limit(size)
            // 문자열을 Exam형태로 바꾸는게 쉽지 않아서
            // .map(line->{
            //     String[] tokens = line.split(",");
            //     int kor = Integer.parseInt(tokens[0]);
            //     int eng = Integer.parseInt(tokens[1]);
            //     int math = Integer.parseInt(tokens[2]);
            //     Exam exam = new Exam(kor, eng, math);
            //     return exam;
            // })
            .forEach(System.out::println);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return list;
    }
}
