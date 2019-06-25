/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluencycit360.Threads_Executors_and_Runnables;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

/**
 *
 * @author Nkenta
 */
public class Threads_Executors_and_Runnables {

    public static void main(String[] args) throws ExecutionException, TimeoutException {

        var executor = Executors.newFixedThreadPool(5);

        // Callable task to return value when question asked
        Future<Integer> conversation;
        conversation = executor.submit(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                System.out.println("Second! A callable task");
                return 1 * 7;
            }
        });

        try {

            question("I will be visiting next week. By the way, how many days are in a week?");
            
            // This will timeout if the task takes more than 5 seconds to return result
            var result = conversation.get(5, TimeUnit.SECONDS);

            System.out.println("There are " + result + " Days in a week.");

            response("Thanks for reminding me.");

        } catch (InterruptedException | ExecutionException | TimeoutException e) {
            
        } 
        // timeout before complete
        finally {

            // shut down executor
            executor.shutdown();
        }

    }
    private static void question(String name) {
        System.out.println("Ask Qustion: " + name);
    }
    private static void response(String name) {
        System.out.println("Respond Back: " + name);
    }
    
}
