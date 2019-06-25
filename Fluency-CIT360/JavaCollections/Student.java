/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluencycit360.JavaCollections;

/**
 *
 * @author Nkenta
 */
class Student {
    private String Name;
    private double GPA;
    
    public Student(String name, double gpa) {
        this.Name = name;
        this.GPA = gpa;
    }
    public String getName(){
        return this.Name;
    }
    public String getName(String newName) {
        return (this.Name = newName);
    }
    
    public double getGPA() {
        return this.GPA;
    }
    
    public double setGPA(double newGPA) {
        return (this.GPA=newGPA);
    }
    
    @Override
    public String toString() {
        return String.format("%s\t%f", this.Name, this.GPA);
    }

    void println() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
