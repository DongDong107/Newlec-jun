package DailyTest;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.Scanner;

public class Test1215 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub

		// 2
		char[] alphabet = new char[15];

		// 3
		{
			FileInputStream fis = new FileInputStream("res/alphabet.txt");
			
//			Scanner sc = new Scanner(fis);
//			String a = sc.nextLine();			
//			
//			for (int i = 0; i < a.length(); i++) {
//				alphabet[i] = a.charAt(i);				
//			}
			
			for(int i=0; i<15; i++)
				alphabet[i] = (char) fis.read(); // 한 문자씩 바이트단위로 읽어오는 read
			
//			sc.close();
			fis.close();

			System.out.println("로드 완료");
		}
		
		//4
		{
			// 버블정렬
//			for(int i=0; i<14; i++)
//				for(int j=0; j<14-i; j++)
//					if((int)alphabet[j] < (int)alphabet[j+1]) {
//						char temp = alphabet[j];
//						alphabet[j] = alphabet[j+1];
//						alphabet[j+1] = temp;
//					}
			
			// 선택정렬
			for(int i=0; i<14; i++) {
				int max = 0;
				int x = 0;
				for(int j=0+i; j<14; j++) //앞에 설정한 값은 비교하면 안됨 => j=0+i 로 늘어나게 됨.
					if(max < (int)alphabet[j]) {
						max = (int)alphabet[j];
						x = j;
					} // 조건에 맞는 지점을 선택해서 저장하고
				char temp = alphabet[x];
				alphabet[x] = alphabet[i];
				alphabet[i] = temp; // 정렬 전 맨 앞부분과 그 지점을 바꿔주기.
				
			}
			
			//
			
			System.out.println("자리변경 완료");			
		}

		//5
		{
			FileOutputStream fos = new FileOutputStream("res/alphabet-out.txt");
			PrintStream out = new PrintStream(fos);
			
//			for(int i=0; i<14; i++)
//				out.printf("%c",alphabet[i]);
			
			System.out.print(alphabet); //print는 배열전체를 한번에 출력해줄수 있다.
						
			out.close();
			fos.close();
			
			System.out.println("저장 완료");
		}
	}

}
