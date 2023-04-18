import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.function.Consumer;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");

        Set<Integer> set = new HashSet<>();
        set.add(3);
        set.add(34);
        set.add(35);
        set.add(37);

        Iterator<Integer> it = set.iterator();
        while (it.hasNext())
            System.out.println(it.next());

        for (Integer n : set)
            System.out.println(n);

        set.forEach((v) -> {
            System.out.println(v);
        });

        set.forEach(new Consumer<Integer>() {
            @Override
            public void accept(Integer t) {
                // TODO Auto-generated method stub

            }
        });
    }
}
