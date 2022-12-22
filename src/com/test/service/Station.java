package com.test.service;

public class Station {
		private String[] stations;
		
		public Station() {
			String[] stations = {"합정", "홍대입구", "신촌", "이대", "아현"}; 
		}
		public String[] getStations() {
			return stations;
		}

		public void setStations(String[] stations) {
			this.stations = stations;
		}

}
