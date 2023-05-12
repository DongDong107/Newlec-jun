package test5.serialize;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.HashSet;
import java.util.Set;

public class Program {

  public static void main(String[] args) throws IOException {
    Exam exam = new Exam(1, 2, 3);
    FileOutputStream fos = new FileOutputStream("res/data0512.txt");

    // DataOutputStream dos = new DataOutputStream(fos);
    // dos.writeInt(exam.kor);
    // dos.writeInt(exam.eng);

    ObjectOutputStream oos = new ObjectOutputStream(fos);
    oos.writeObject(exam);

    oos.close();
    fos.close();
  }
}
