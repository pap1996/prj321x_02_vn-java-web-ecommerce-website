# prj321x_02_vn-java-web-ecommerce-website


<p align="center"><a href="https://funix.edu.vn/gioi-thieu-funix/"><img src="/res/image/funix.png" width="200"/></a></p>

 This folder contains my submission to the assignment `E-commerce website (cellphones)` in the course PRJ321x_02-VN (Web application with Java), a part of the path Software Engineering provided by FUNiX.



## About the project
The app is mainly about an e-commerce website for cellphones. To achieve the goal, it is developed with Java, JSP and Servlet as well as other supports from HTLM forms, and Java API in session management.

- **Keyword**: _Java, web, jsp, servlet, web.xml, Java beans, session management_.

## Functional descriptions

The app is mainly about an e-commerce website for cellphones with 3 consecutive steps:
- build user interface including homepage, login page and admin page
  - Home Page: on clicking Login redirect to Login Page
  - Login Page:
    - alert appears if wrong email or password. Otherwise, redirect to Admin Page.
    - tick Remember me helps to auto fill email for another login in the same session
  - Admin Page:
    - add Log out feature
    - display the name of user logged-in in "Welcome <user>,"
- manage session and build login features
- build carts (_to be done_)

| ![](res/image/java_web_home.png)    |![](res/image/java_web_login.png)     |
| :------------- | :------------- |
| <p align="center">Home Page</p>      |  <p align="center">Login Page</p>     |  


|  ![](res/image/java_web_admin.png)      |
| :------------- |
|   <p align="center">Admin Page</p> |



## Demo

_(to be updated)_

The demo video can be seen via: https://www.youtube.com/watch?v=q5fqIWtCieg

|  <p align="center">Home Page</p> |    ![](res/image/phu_homepage.png)   |
| :------------- | :------------- |
|   <p align="center">**Login Page**</p>      | ![](res/image/phu_loginpage.png)     |  
| <p align="center">**Admin Page**</p> | ![](res/image/phu_adminpage.png)       |  <p align="center">**Login Page**</p> |


## Further enhancement
- Adjust user interface for better interaction
- Use database to store and manage session
