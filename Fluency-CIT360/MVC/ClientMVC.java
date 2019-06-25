/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluencycit360.MVC;

/**
 *
 * @author Nkenta
 */
public class ClientMVC {

    /**
     *
     * @param args
     */
    public static void main(String[] args) {

        //fetch client record on database
        Client model = retriveClientFromDatabase();

        //printout client details on console
        ClientView view = new ClientView();

        ClientController controller = new ClientController(model, view);

        controller.updateView();

        //update model data
        controller.setClientName("Nkenta Uchechukwu");
        controller.setClientLocation("Accra Ghana");
        controller.setClientOfficeNo("AJ75G");

        controller.updateView();
    }
   
    private static Client retriveClientFromDatabase() {
        Client client = new Client();
        client.setName("Anderson Emisar");
        client.setLocation("Lagos Nigeria");
        client.setOfficeNo("0FA52");
        return client;
    }

}
