package com.test.service;

public class Train {
		
		private String[][] train;
		
		public Train() {
			String[][] train = new String[4][4];
			
			for(int y=0; y<4; y++) {
				for(int x=0; x<4; x++)
					train[y][x] = "0";
			}
		}
		
		public String[][] getTrain() {
			return train;
		}

		public void setTrain(String[][] train) {
			this.train = train;
		}

}
