<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>

<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">

<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>

	<% Boolean isRedirect = "true".equals(request.getParameter("isRedirect"));
 Cookie[] cookies = request.getCookies();
 String username ="";
 
 for (Cookie cookie: cookies) {
	 if (cookie.getName().equals("username")) {
		 username = cookie.getValue();
		 break;
	 }
 }

%>
	<div class="container-fluid" style="height: 100vh;">
		<div class="row h-100">
			<div class="col-6 align-items-center bg-light"
				style="padding-top: 15rem;">
				<div class="row mt-5 justify-content-center">
					<h2>Sign in</h2>

				</div>

				<div class="row mt-2 justify-content-center">


					<div class="row form-group w-75 justify-content-center">
						<form class="w-75" id="login" method="post"
							action="/PRJ321x_Project_2_phupafx07929/LoginServlet">


							<input type="text"
								class="form-control text-white bg-dark border-0 mb-3"
								name="username" id="" placeholder="username"
								value="<%=username %>"> <input type="password"
								class="form-control text-white bg-dark border-0" name="password"
								id="" placeholder="password">


							<div class="form-check mt-2">
								<label class="form-check-label"> <input type="checkbox"
									class="form-check-input" name="remember" id=""
									value="checkedValue"> Remember me?
								</label>
							</div>
						</form>

					</div>


				</div>

				<div class="row justify-content-center text-danger font-italic">
					<%= isRedirect ? session.getAttribute("error") == null ? "" : session.getAttribute("error") : ""  %></div>

				<div class="row mt-2 justify-content-center">
					<button class="btn btn-danger" form="login" type="submit"
						name="actionInLogin" value="login">Log In</button>
					<button class="ml-2 btn btn-success" form="login" type="submit"
						name="actionInLogin" value="backToHome">Back to Home</button>

				</div>





			</div>
			<div class="col-6 align-items-center bg-dark "
				style="padding-top: 18rem; padding-left: 6rem; padding-right: 15rem;">
				<h1 class="text-white font-weight-bold">Welcome back!</h1>

				<h4 class="text-white font-weight-bold">To keep connected with
					us please login with your personal info</h4>

			</div>
		</div>

	</div>
</body>
</html>