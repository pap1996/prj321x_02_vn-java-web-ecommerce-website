<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Header</title>
</head>
<body>
 <div class="container-lg">
        <div class="row bg-dark">
            <div class="col-2 p-2">
                <h3 class="text-white text-center">PRJ321x</h3>
                <div class="text-primary text-center">This is my website</div>
            </div>

            <div class="col-10">
                <div class="row align-items-center mt-3">

                    <div class="dropdown m-1">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </button>
                        <div class="dropdown-menu" aria-labelledby="triggerId">
                            <a class="dropdown-item" href="#">All categories</a>
                            <a class="dropdown-item active" href="#">Clothing</a>
                            <a class="dropdown-item" href="#">Electronics</a>
                            <a class="dropdown-item" href="#">Fresh food</a>
                            <a class="dropdown-item" href="#">Books</a>
                            <!-- <a class="dropdown-item disabled" href="#">Disabled action</a>
                            <h6 class="dropdown-header">Section header</h6>
                            <a class="dropdown-item" href="#">Action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">After divider action</a> -->
                        </div>


                    </div>

                    <div class="w-75">
                        <form class="d-flex m-1">
                            <input class="form-control me-2" type="search" placeholder="What are your looking for"
                                aria-label="Search">
                            <button class="btn btn-outline-success ml-2" type="submit">Search</button>
                        </form>
                    </div>




                </div>
            </div>

        </div>


        <div class="row">
            <div class="col-2 bg-secondary"></div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-secondary col-10">

                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Products</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                    </ul>

                    <div class="nav-item pr-lg-3" style="float: right;">
                        <a class="nav-link text-white" href="login.jsp">Login</a>
                    </div>

                </div>
            </nav>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>
</html>