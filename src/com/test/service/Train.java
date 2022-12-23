package com.test.service;

public class Train {
		
		private String[][] train; // 이차원 배열로 열차와 타는 사람들 정보 만들기
		private int totalPersonInBox; // 차량마다 타는 사람 수 (Carriage + Person) 
		private int totalBox; // 차량 수 (Carriage)		
		
		public Train() {
			this.totalBox = 4;
			this.totalPersonInBox = 4;
			train = new String[this.totalBox][this.totalPersonInBox];
			
			for(int y=0; y<4; y++) {
				for(int x=0; x<4; x++)
					train[y][x] = "0";
			}
		}
		
		public int getTotalPersonInBox() {
			return totalPersonInBox;
		}

		public void setTotalPersonInBox(int totalPersonInBox) {
			this.totalPersonInBox = totalPersonInBox;
		}

		public int getTotalBox() {
			return totalBox;
		}

		public void setTotalBox(int totalBox) {
			this.totalBox = totalBox;
		}

		
		public String[][] getTrain() {
			return train;
		}

		public void setTrain(String[][] train) {
			this.train = train;
		}

}
