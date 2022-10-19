package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Account;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
//		doGet(request, response);
		
		String actionInLogin = request.getParameter("actionInLogin");
		
		if (actionInLogin.equals("login")) {
			login(request, response);
		} else if (actionInLogin.equals("backToHome")){
			response.sendRedirect("home.jsp");
		}
		
		
	}

	private void login(HttpServletRequest request, HttpServletResponse response)  throws ServletException, IOException {
		// TODO Auto-generated method stub

		response.setContentType("text/html; charset=UTF-8");
		request.setCharacterEncoding("utf-8");
		
		try {
			request.getSession(true).invalidate();
			
			String regexMail = "^[A-Z0-9_a-z]+@[A-Z0-9\\.a-z]+\\.[A-Za-z]{2,6}";
			String regex = "[a-zA-Z0-9_!@#$%^&*]+";
			
			
			/* FROM request */
			String user = request.getParameter("username");
			String password = request.getParameter("password");
			Boolean rememberMe = "checkedValue".equals(request.getParameter("remember"));
			
			Account acc = new Account();
			acc.setName(user);
			acc.setPwd(password);
			
			
			/* FROM context-param*/
			
			String uid = getServletContext().getInitParameter("username");
			String pwd = getServletContext().getInitParameter("password");
			
			HttpSession session = request.getSession(true);
			
			if(!user.matches(regexMail)) {
				session.setAttribute("error", "Invalid email");
				response.sendRedirect("login.jsp?isRedirect=true");
				
			} else if (!password.matches(regex)) {
				session.setAttribute("error", "Invalid password");
				response.sendRedirect("login.jsp?isRedirect=true");
			} else {
				if (user != null && acc.getPwd().equals(pwd) && acc.getName().equalsIgnoreCase(uid)) {
					session.setAttribute("user", user);
					
					
					if (rememberMe) {
						Cookie cookie = new Cookie("username", user);
						cookie.setMaxAge(3000);
						response.addCookie(cookie);						
					}
					
					response.sendRedirect("admin/index.jsp");
					
				} else {
					session.setAttribute("error", "wrong username or password");
					response.sendRedirect("login.jsp?isRedirect=true");
				}
			}
			
			
			
		} catch (Exception e) {
			// TODO: handle exception
		};
		
	}

}
