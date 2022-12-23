package com.test.service;

public class TestSub {
	
		private Train train;
		private String[][] tr;
		
		public TestSub() {
			train = new Train();
			tr = new String[4][4];
			tr = train.getTrain();
		}
		
		public void run() {
			for(int i=0; i<4; i++) {
				for(int y=0; y<4; y++)
					System.out.println(tr[i][y]);
			}
		}
	
}
