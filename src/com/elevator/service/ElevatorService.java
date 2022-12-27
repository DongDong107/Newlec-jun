package com.elevator.service;

import java.util.Scanner;

public class ElevatorService {

	// 필요한 변수들
	// 탑승객과 층 배열.
//	String[] floor;
	String[] elevator;

	int maxElevator; //만석 수
	int arriveFloor; // 도착 층 
	int curFloor; // 현재 층
	boolean direction; // 방향
	int order; //입력받을때 배열 순서 정리를 위한 수.

//	플로어 3개층
//	엘레베이터 4명탑승
//	목표층
//	시작층은 무조건 1층 부터 올라갔다 내려갔다 순서.

	public ElevatorService() {
//		floor = new String[] { "O", "O", "O" };
		elevator = new String[] { "O", "O", "O", "O" };
		maxElevator = 4;
		curFloor = 1;
		direction = true;
		order = 0;
	}

	public void run() {
		Scanner sc = new Scanner(System.in);
		// 종료 설정을 위한 불린 변수 선언.
		boolean exit = true;
		// 오늘은 불린값으로 종료조건을 해보기.
		while (exit) {
			System.out.printf("=====현재 층수는 " + "%d" + "층 입니다.=====\n", curFloor);
			System.out.println("메뉴를 선택하세요.");
			System.out.println("1.탑승  2.이동  3.탑승현황  4.종료");
			
			switch (sc.nextLine()) {
			case "1":
				join();
				break;
			case "2":
				move();
				break;
			case "3":
				status();
				break;
			case "4":
				System.out.println("종료합니다.");
				exit = false;
				break;
			default:
				System.out.println("잘못입력하셨습니다!");
			}
		}
	}

	// 1. 탑승
	public void join() {
		Scanner sc = new Scanner(System.in);
		
		int maxCount = 0; // 만석을 확인하기 위한 변수
		for (int i = 0; i < elevator.length; i++) {
			if (!elevator[i].equals("O")) // 값이 있으면 ++
				maxCount++;
		}
		if (maxCount == maxElevator) {
			System.out.println("탑승할 공간이 없습니다.");
			return;
		}

		// 층수 질문
		while (true) {
			System.out.println("================");
			System.out.println("층 수를 선택해 주세요");			
			System.out.println("================");
			System.out.println("1.1층\t2.2층\t3.3층");
			int insertFloor = sc.nextInt();
			if (curFloor == insertFloor) {
				System.out.println("현재 층은 입력하실수 없습니다.");
				continue;
			} else {				
				elevator[order] = String.valueOf(insertFloor);
				System.out.printf("입력하신 층은 " + "%d" + "층입니다.\n", insertFloor);
				break;
			}
			
		}
		
		order++;

	}

	// 2. 이동
	public void move() {
		/* 새로 입력받기 위해서 리셋해주어야 함.
		 join()에서는 어차피 만석이 되면 더이상 입력하지 못하고
		 move()하면 정렬을 통해 배열 뒤쪽으로 존재했던 값들 정리하여 다시 앞쪽부터 입력을 받을거니까*/
		order = 0; 
		
		if(direction == true)
			curFloor++;
		else 
			curFloor--;
		
		int outCount = 0; //하차 인원 확인 변수
		
		// 입력받은않은 위치에서는 정수형이 아니기 때문에 위에 조건을 먼저 해주어야 한다.
		// 어제는 숫자 0을 받았고 오늘은 알파벳 O를 입력하면서 발생한 일.
		
		for(int i=0; i<elevator.length; i++) {
			if(elevator[i].equals("O"))
				continue;
			else if(curFloor == Integer.parseInt(elevator[i])) { 
				elevator[i] = "O";
				outCount++;
			}
		}
		// 엘레베이터 배열 재정렬
		// 하차하면서 알파벳O으로 리셋된 상태에서 입력을 받게 되면 덮어씌어지므로 정렬을 통해 뒤로 밀어 정리한다.
		for(int i=0; i<3; i++)
			for(int j=0; j<2; j++) {
				if(!elevator[i].equals("O")) {
					String temp = elevator[i];
					elevator[i] = elevator[i+1];
					elevator[i+1] = temp;
				}
			}
		
		System.out.printf("%d" + "명이 하차하였습니다.\n", outCount);
		
		if(curFloor == 1 || curFloor == 3)
			direction = !direction;
	}

	// 3. 탑승현황
	public void status() {
		
		int count = 0; // 탑승 인원 세는 변수;
		int count1 = 0;
		int count2 = 0;
		int count3 = 0;
		
		for(int i=0; i<elevator.length; i++) {
			if(!elevator[i].equals("O")) 
				count++;
			
			if(elevator[i].equals("1"))
				count1++;
			else if(elevator[i].equals("2"))
				count2++;
			else if(elevator[i].equals("3"))
				count3++;		
		}
		
		
		System.out.println("---- 탑승 현황 ----");
		System.out.printf("현재 탑승 인원은 " + "%d" + "명 입니다.\n", count);
		System.out.printf("1층에서 내릴 인원은 %d명입니다.\n",count1);
		System.out.printf("2층에서 내릴 인원은 %d명입니다.\n",count2);
		System.out.printf("3층에서 내릴 인원은 %d명입니다.\n",count3);
		

	}

}
