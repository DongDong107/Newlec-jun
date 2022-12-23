package com.test.service;

public class Station {
		private String[] stations;
		private int totalStations;
		
		public Station() {
			stations = new String[]{"합정", "홍대입구", "신촌", "이대", "아현"}; // 역 정보 배열
			this.totalStations = 5; // 역의 총 개수
		}
		
		public int getTotalStations() {
			return totalStations;
		}

		public void setTotalStations(int totalStations) {
			this.totalStations = totalStations;
		}

		public String[] getStations() {
			return stations;
		}

		public void setStations(String[] stations) {
			this.stations = stations;
		}

}
