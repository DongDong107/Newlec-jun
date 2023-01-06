package prac;

import java.util.*;

class Prac0105 {
    public static String solution(String s1, String s2){
    	    	
        String answer="YES";
        
        if(s1.length() != s2.length()) {
        	answer = "NO";
        	return answer;
        }
        
        for(int i=0; i < s1.length(); i++) {
        	if(s2.indexOf(String.valueOf(s1.charAt(i))) == -1)
        		answer = "NO";
        	return answer;
        }
        
        String[] s1arr = new String[s1.length()];
        String[] s2arr = new String[s2.length()];
        
        for(int i=0; i<s1.length(); i++) {
        	s1arr[i] = String.valueOf(s1.charAt(i));
        	s2arr[i] = String.valueOf(s2.charAt(i));
        }
        
        for(int i=0; i<s1.length(); i++) {
        	int count = 0;
        	int count2 = 0;
        	String compare = String.valueOf(s1.charAt(i));
        	int length = s1.length();
        	
        	for(int j=0; j<length; j++) {
        		String comp1 = String.valueOf(s1.charAt(j));
        		String comp2 = String.valueOf(s2.charAt(j));
        		
        		if(compare.equals(comp1))
        			count++;        
        		else if(compare.equals(comp2))
        			count2++;
        	}        	
        	
        	if(count != count2) {
        		answer = "NO";
        		return answer;
        	}
        }       
        
        return answer;
    }

    public static void main(String[] args){
        
        Scanner kb = new Scanner(System.in);
        String a=kb.next();
        String b=kb.next();
        String c = solution(a,b);
        System.out.print(c);
    }
}
/*설명  Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로  알파벳과 그 개수가 모두 일치합니다. 
즉 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.  길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 
아나그램 판별시 대소문자가 구분됩니다.   입력 첫 줄에 첫 번째 단어가 입력되고, 두 번째 줄에 두 번째 단어가 입력됩니다.  단어의 길이는 100을 넘지 않습니다.   
출력
두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.*/

