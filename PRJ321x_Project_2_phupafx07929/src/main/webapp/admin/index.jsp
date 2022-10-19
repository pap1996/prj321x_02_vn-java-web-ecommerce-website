<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin Page</title>


<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	crossorigin="anonymous">
</head>
<body>




	<div class="container-fluid bg-secondary"
		style="height: 100vh; width: 100vw;">

		<div class="row h-100">
			<div class="col-2 bg-dark pt-2 d-flex flex-column h-100">

				<h5 class="text-white font-weight-bold text-center">1849 TEAM</h5>

				<ul class="nav nav-pills justify-content-start pt-4">
					<li class="nav-item w-100"><a
						class="nav-link active text-white" href="#"> <i
							class="fa fa-address-book" aria-hidden="true"
							style="font-size: 25px; margin-right: 4px;"></i> Dashboard
					</a></li>
					<li class="nav-item w-100"><a class="nav-link text-white"
						href="#"> <i class="fa fa-object-group" aria-hidden="true"
							style="font-size: 25px; margin-right: 4px;"></i> Staff Manager
					</a></li>
				</ul>

				<div
					class="row flex-grow-1 align-items-end justify-content-center mb-5">
					<form action="/PRJ321x_Project_2_phupafx07929/LogoutServlet" method="post">
						<button type="submit" name="" id=""
							class="btn btn-primary btn-block">Log Out</button>
					</form>

				</div>


			</div>
			<div class="col-10 p-0 h-100">
				<img src="../assets/fpt_uni.jpg" alt="" class="img-fluid w-100 h-25">

				<% String userLogin = session.getAttribute("user") == null ? "USER" : (String) session.getAttribute("user"); %>
				<h5 class="text-white mt-3 mb-3 ml-5">
					Welcome
					<%= userLogin %>,
				</h5>

				<table
					class="ml-5 text-white table table-fixed table-inverse table-responsive ml-1">
					<thead class="thead-inverse">

						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>StudentID</th>
							<th>Class</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td scope="row">0</td>
							<td>Phan Anh Phu</td>
							<td>FX07929</td>
							<td>K200817C1</td>

						</tr>
						<tr>
							<td scope="row">1</td>
							<td>Phan Anh Phu</td>
							<td>FX07929</td>
							<td>K200817C1</td>
						</tr>

						<tr>
							<td scope="row">2</td>
							<td>Phan Anh Phu</td>
							<td>FX07929</td>
							<td>K200817C1</td>
						</tr>
					</tbody>
				</table>

			</div>
		</div>

	</div>
</body>
</html>