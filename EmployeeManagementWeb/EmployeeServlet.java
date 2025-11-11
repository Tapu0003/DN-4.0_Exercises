import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;

public class EmployeeServlet extends HttpServlet {
    private List<Employee> employees = new ArrayList<>();

    public void init() {
        employees.add(new Employee(1, "Amit", "IT", 50000));
        employees.add(new Employee(2, "Priya", "HR", 45000));
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Employee List</h1>");
        for (Employee e : employees) {
            out.println("<p>" + e.getId() + " - " + e.getName() + " (" + e.getDepartment() + ")</p>");
        }
    }
}
