package ex7.is_a;

import java.awt.Frame;
import java.awt.Graphics;

public class GameFrame extends Frame {
	
	@Override
	public void paint(Graphics g) {
		g.drawLine(20, 20, 200, 200);
		
	}
	
}
