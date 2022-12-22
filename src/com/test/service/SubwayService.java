package com.test.service;

import java.util.Scanner;

public class SubwayService {
//	private Station stations;
//	private Train train;
	private String[] sta; // 역 내용이  담긴 배열
	private String[][] tra; //열차 내용이 담긴 배열
	private String[] fullTra; // 만석인 차를 확인하기 위한 배열
	private int curSta; //현재 역을 알기위한 수
	private int sumCar; // 차량 수 (Carriage)
	private int sumCper; // 차량마다 타는 사람 수 (Carriage + Person) 
	private boolean dir; //방향

	public SubwayService() {
//		this.stations = new Station();
//		this.train = new Train();
		sta = new String[] { "합정", "홍대입구", "신촌", "이대", "아현" };
		tra = new String[4][4];
		for (int y = 0; y < 4; y++)
			for (int x = 0; x < 4; x++)
				tra[y][x] = "0";
		fullTra = new String[4];		
		curSta = 0;
		sumCar = 4;
		sumCper = 4;
		dir = true;
	}

	public void run() {
		Scanner sc = new Scanner(System.in);

		label: while (true) {
			System.out.println("=================================");
			System.out.printf("현재역은 " + "%s" + "입니다.\n", sta[curSta]);
			System.out.println("=================================");
			System.out.println("메뉴를 선택하세요.");
			System.out.println("1.탑승 2.상세보기 3.이동 9.종료");

			switch (sc.nextLine()) {
			case "1":
				join();
				break;
			case "2":
				status();
				break;
			case "3":
				move();
				break;
			case "9":
				System.out.println("열차운행을 종료합니다.");
				break label;
			default:
				System.out.println("잘못입력하였습니다.");
			}
		}
	}

	public void join() {
		System.out.println("---- 탑승가능 현황 ----");
		// 배열확인해서 열차현황확인
		for(int i=0; i<sumCar; i++) {
			fullTra[i] = "0";
		}
		
		for (int y = 0; y < sumCar; y++) {
			int count = 0;
			for (int x = 0; x < sumCper; x++) {
				if (this.tra[y][x] != "0")
					count++;
			}
			int cur = 4 - count;
			if (count == 4) {
				System.out.printf("%d호차\t만석입니다.\n", y + 1);
				fullTra[y] = "V";
			}
			else
				System.out.printf("%d호차\t%d자리 남아있습니다.\n", y + 1, cur);
		}
		Scanner sc = new Scanner(System.in);
		
		int car; //carriage
		while(true) {
		System.out.println("몇 호차를 이용하시겠습니까 (1~4 호차 중 선택하여 입력해주세요");
		System.out.println("입력 : ");
		car = sc.nextInt() - 1;
			if(car < 0 || car > sumCar-1) {
				System.out.println("다시 입력해주세요");
				continue;
			}
			else if(fullTra[car].equals("V")) {
				System.out.println("해당 차는 만석입니다. 다시 입력해주세요.");
			}
			else
				break;
		}		
		
		int seat;
		System.out.println("몇번 자리를 이용하시겠습니까");
		while(true) {
			System.out.print("현재 남은 자리▶\t");
			for (int i = 0; i < sumCper; i++) {
				if (tra[car][i].equals("0")) {
					System.out.printf("%d\t", i + 1);
				}
			}			
			System.out.println();
			
			seat = sc.nextInt() - 1;
			if(seat < 0 || seat>sumCper) {
				System.out.println("다시 입력해주세요");
				continue;
			}
			else if (!tra[car][seat].equals("0")) {
				System.out.printf("%d번자리는 다른 분께서 착석중입니다. 다른 자리를 선택해주세요.\n",seat+1);				
				continue;
			}
			else
				break;
		}
		
		int forGoal;
		System.out.println("목적지가 어디십니까");
		while(true) {
			System.out.println("1. 합정 2. 홍대입구 3. 신촌 4. 이대 5. 아현");
			forGoal = sc.nextInt();
			if(forGoal < 1 || forGoal > 5) {
				System.out.println("다시 입력해주세요");
				continue;
			}
			else
				break;					
			
		}
		
		String goal = sta[forGoal-1];		
		
		
		// 최종 입력
		tra[car][seat] = goal;
		
		System.out.println("탑승이 완료되었습니다.");
	}

	public void status() {
		System.out.println("---- 탑승 상세 현황 ----");
		for (int y = 0; y < sumCar; y++) {
			System.out.printf("%d호차 : ", y+1);
			for (int x = 0; x < sumCper; x++) 
				if(tra[y][x].equals("0"))
					System.out.print("[공석]");
				else
					System.out.printf("[%s]", tra[y][x]);
			System.out.println();
		}
	}

	public void move() {
		int outcount = 0;
		if (dir == true)
			curSta++;
		else
			curSta--;

		for (int y = 0; y < sumCar; y++) {
			for (int x = 0; x < sumCper; x++)
				if (tra[y][x].equals(sta[curSta])) {
					tra[y][x] = "0";
					outcount++;
				}
		}

		if (outcount != 0)
			System.out.printf("%d명이 하차하였습니다.\n", outcount);

		if (curSta == 0 || curSta == 4) {
			dir = !dir;
		}
	}
}
