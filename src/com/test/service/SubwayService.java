package com.test.service;

import java.util.Scanner;

public class SubwayService {
	// 부품들
	private Station stations;
	private Train train;
	
	// 부품 : Station
	private String[] sta; // 역 내용이  담긴 배열
	private int totalSta; // 역의 수
	
	// 부품 : Train
	private String[][] tra; //열차 내용이 담긴 배열
	private int totalPerson; // 차량마다 타는 사람 수 (boxriage + Person) 
	private int totalBox; // 차량 수 (boxriage)
	
	// 서비스를 위한 변수
	private String[] checkBoxFull; // 만석인 차를 확인하기 위한 배열
	private int curSta; //현재 역을 알기위한 수
	private boolean dir; //방향

	public SubwayService() {
		//부품들 쓰기 위해 선언
		this.stations = new Station();
		this.totalSta = stations.getTotalStations();
		
		// 역 불러오기
		this.sta = new String[totalSta];
		sta = stations.getStations();
		
		// 열차 관련 정보 불러와서 초기화
		this.train = new Train();
		totalBox = train.getTotalBox();
		totalPerson = train.getTotalPersonInBox();
		tra = new String[totalBox][totalPerson];
		for (int y = 0; y < totalBox; y++)
			for (int x = 0; x < totalPerson; x++)
				tra[y][x] = "0";
		checkBoxFull = new String[totalSta];		
		curSta = 0;
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
		
		//만석 확인용 배열 초기화
		for(int i=0; i<totalBox; i++) {
			checkBoxFull[i] = "0";
		} 
		
		// 배열확인해서 열차현황확인
		for (int y = 0; y < totalBox; y++) {
			int count = 0; // 타는 사람 확인 용 카운트
			for (int x = 0; x < totalPerson; x++) {
				if (this.tra[y][x] != "0")
					count++;
			}
			int curSeat = totalPerson - count; // 현재 남아있는 자리 수
			if (count == totalPerson) {
				System.out.printf("%d호차\t만석입니다.\n", y + 1);
				checkBoxFull[y] = "V"; // 만석일 경우 V 로 체크표시
			}
			else
				System.out.printf("%d호차\t%d자리 남아있습니다.\n", y + 1, curSeat);
		}
		Scanner sc = new Scanner(System.in);
		
		int box; //carriage
		while(true) {
		System.out.println("몇 호차를 이용하시겠습니까 (1~4 호차 중 선택하여 입력해주세요");
		System.out.println("입력 : ");
		box = sc.nextInt() - 1;
			if(box < 0 || box > totalBox-1) {
				System.out.println("다시 입력해주세요");
				continue;
			}
			else if(checkBoxFull[box].equals("V")) {
				System.out.println("해당 차는 만석입니다. 다시 입력해주세요.");
				continue; // 여기다가도 컨티뉴 써줘야댐 그러면 위 이프문이랑 순서 안바꿔도 괜찮았음.
			}
			else
				break;
		}		
		
		int seat;
		System.out.println("몇번 자리를 이용하시겠습니까");
		while(true) {
			System.out.print("현재 남은 자리▶\t");
			for (int i = 0; i < totalPerson; i++) {
				if (tra[box][i].equals("0")) {     //!"0".equals(tra[box][i])
					System.out.printf("%d\t", i + 1);
				}
			}			
			System.out.println();
			
			seat = sc.nextInt() - 1;
			if(seat < 0 || seat>totalPerson) {
				System.out.println("다시 입력해주세요");
				continue;
			}
			else if (!tra[box][seat].equals("0")) {
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
		
		String goal = sta[forGoal-1];	// 내릴 역을 역이 담긴 배열 값으로	
		
		
		// 최종 입력
		tra[box][seat] = goal; // 해당 차 배열 자리에 넣어주기
		
		System.out.println("탑승이 완료되었습니다.");
	}

	public void status() {
		System.out.println("---- 탑승 상세 현황 ----");
		for (int y = 0; y < totalBox; y++) {
			System.out.printf("%d호차 : ", y+1);
			for (int x = 0; x < totalPerson; x++) 
				if(tra[y][x].equals("0"))
					System.out.print("[공석]");
				else
					System.out.printf("[%s]", tra[y][x]);
			System.out.println();
		}
	}

	public void move() {
		int outCount = 0; // 하차하는 인원 확인 용
		if (dir == true) // 순환을 위한
			curSta++;
		else
			curSta--;

		for (int y = 0; y < totalBox; y++) {
			for (int x = 0; x < totalPerson; x++)
				if (tra[y][x].equals(sta[curSta])) {
					tra[y][x] = "0";
					outCount++;
				}
		}

//		if (outCount != 0) (하차인원유무가 중요한 것이 아니라 이동되었다는 확인출력이 필요하기때문에)
			System.out.printf("%d명이 하차하였습니다.\n", outCount);

		if (curSta == 0 || curSta == totalSta-1) {
			dir = !dir;
		}
	}
}
