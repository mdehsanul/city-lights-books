# website name: 
City Lights Books

## live:
https://city-lights-books-453bd.web.app/

or,

https://city-lights-books-453bd.firebaseapp.com/

### Feature:
1. Navbar -> name of the website, Home, Orders, Admin, Deals, and Login button added. Home, Deals button redirects the user to the Home page.
The login button uses to go to the Login page to create a new account or log in. 

2. Home page -> On this page, users will get book cards with book information(book name, author, price) for choice their favourite book with Buy Now button. After click on any of the book Buy Now button they will redirect the user to the Login page to create a new account or login. 
3. Login page -> in this page, user can create a new account or login.
      
                 login can be done using:
                 * Email, password
                 * facebook
                 * google.
                 
                 create a new account can be done using:
                 * name
                 * email
                 * password
                 * confirmpassword
      * you can create an accoount, log in using email, password this will redirect to the checkout page but information not load properly.
      * Also can login using Facebook but this process show blank page. 
      * So try to login using google this will work perfectly*** ...
                 
4. when a user login the user redirect to the Checkout page.

5. checkout page -> In this page user get the book information(book name, quantity, price) for checkout. When clicking Checkout button the user will get confirmation alert that the book placed on the order list.

6. Order page -> when a user loggedIn user redirect to the order page when click on navbar order button. Here specific(loggedIn) user can see all of his/her order detail. 

7. Admin page -> 

       * Manage books : a loggedIn admin user can Manage books( can see all the book that are add).
                        Also the admin user can Delete book that is Out Of Stock  
       * Add Book: a loggedIn admin user can Add new book information.
                   (book image, book name, book author, book price)
       * Edit book : Page in under Development....
       * Back To Home : this will redirect the user to the Home page.

8. React Router is used to switch between the pages and the URL is Dynamically generated.

9. PrivateRoute -> PrivateRoute used to make Orders, Admin button authorized page by giving permission to the users who are already logged in or create a new account.

otherwise, the user can not enter in the Orders page, , Admin page.

8. Spinner -> A spinner is added in the Home page for show when the data is loading from server.

### Responsiveness:(Home page)
1. Desktop
2. mobile devices are
    * Galaxy Note 3(360 X 640), 100%, Online
    * Moto G4(360 X 640), 100%, Online
    * Galaxy S5(360 X 640), 100%, Online
 
### Attention: (this can be happen or not)
1. Some time it is possible that when Adding an new book the book image will not load properly due to link generate problem from ImgBB then please try again to re-add the book from Add book option in Admin panel or re-enter in the website from first.
