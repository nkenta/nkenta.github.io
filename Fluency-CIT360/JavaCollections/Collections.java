package fluencycit360.JavaCollections;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;

/**
 *
 * @author Nkenta
 */
public class Collections {

    public static void main(String[] args) {

        ArrayList<Integer> grades = new ArrayList<>();
        grades.add(100);
        grades.add(82);
        grades.add(60);
        grades.add(50);

        // loop through the grades and print out
        for (int i = 0; i < grades.size(); i++) {
            System.out.printf("Grade #%d == %d\n", i, grades.get(i));
        }
        // Remove element 2 which is grade 60
        grades.remove(2);

        System.out.printf("----------------\n");
        //ArrayList Creation and Enumarations
        ArrayList<Student> cit360 = new ArrayList<>();

        //Students names and GPA
        cit360.add(new Student("Mike", 2.5));
        cit360.add(new Student("Harriet", 3.2));
        cit360.add(new Student("Evans", 4.0));
        cit360.add(new Student("Norble", 3.7));

        // Access in form of a collection
        System.out.printf("Student\tGPA\n");
        cit360.forEach((s) -> {
            System.out.printf("%s\n", s);
        });
        System.out.println();

        //Access with index
        System.out.printf("Student\tGPA\n");
        for (var i = 0; i < cit360.size(); i++) {
            System.out.printf("%s\n", cit360.get(i));
        }

        //Add and remove from list
        System.out.printf("----------------\n");
        LinkedList<String> list = new LinkedList<>();
        list.add("Mike");
        list.add("Harriet");
        list.add("Evans");
        list.add("Norble");

        //Remove Harriet from list
        list.remove("Harriet");

        list.forEach((s) -> {
            System.out.println(s);
        });
        
        System.out.printf("----------------\n");
        // Iterator
        LinkedList<String> fruits = new LinkedList<>();
        fruits.add("Orange");
        fruits.add("Apple");
        fruits.add("Mango");
        fruits.add("Lemon");
        fruits.add("Pear");
        
        Iterator<String> fruit = fruits.iterator();
        String value = fruit.next();
        System.out.println(value);
        
        //HashMap | get associated numbers with name
        System.out.printf("----------------\n");
        HashMap<String, Integer> position = new HashMap<>();
        position.put("John", 2);
        position.put("Kelvin", 3);
        position.put("Oliver", 1);
        System.out.println(position.get("Oliver"));
        
        System.out.printf("----------------\n");
        //HashSet
        HashSet<String> hSet = new HashSet<>();
        hSet.add("A1");
        hSet.add("B2");
        hSet.add("C3");
        hSet.add("D4");
        hSet.add("E5");
        System.out.println(hSet);
    }

}
