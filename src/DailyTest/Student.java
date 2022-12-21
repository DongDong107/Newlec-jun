package DailyTest;

public class Student {
	private int id;
	private String name;
	
	public void print() {
		System.out.printf("%d,%s\n",this.id,this.name);
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
